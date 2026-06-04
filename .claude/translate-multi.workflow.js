export const meta = {
  name: 'translate-longform-multi',
  description: 'Dịch các bài long-form EN sang nhiều ngôn ngữ cho longform.naviplus.io',
  phases: [{ title: 'Translate', detail: 'dịch từng bài sang từng ngôn ngữ' }],
}

const BASE = '/Users/khoipham/Dev/naviplus_io/longform.naviplus.io'

const LANG_NAME = {
  fr: 'French', de: 'German', 'zh-CN': 'Simplified Chinese (中文简体)',
  jp: 'Japanese (日本語)', it: 'Italian', pt: 'Brazilian Portuguese', es: 'Spanish',
}

function prompt(item, lang) {
  const name = LANG_NAME[lang] || lang
  return `You translate ecommerce guide articles from English into ${name} for longform.naviplus.io. Translate naturally and idiomatically — a native ${name} reader should feel it was written for them, not machine-translated. Keep the calm, plain, practical tone (an experienced merchant sharing), never salesy.

STEP 1: Read the English source file with the Read tool: ${item.en}

STEP 2: Produce a COMPLETE ${name} Markdown file (YAML front matter + body) with these rules EXACTLY:

FRONT MATTER:
- Keep UNCHANGED: ref, order, hero_color, date, read_time.
- Set "lang: ${lang}".
- Translate the VALUES of: title, description, topic_tag, seo_keywords (natural ${name} equivalents, same count).
- ${item.kind === 'pillar'
    ? `Translate every child_links[].title and child_links[].desc. Set every child_links[].url to "/${lang}/topic/SLUG/" (keep each slug exactly, just add the /${lang} prefix).`
    : `Translate parent_title. Set parent_url to "/${lang}/SLUG/" (keep the slug exactly, add the /${lang} prefix).`}

BODY:
- Translate ALL prose into fluent ${name}. Keep every statistic and source name (Baymard Institute, Nielsen Norman Group, Steven Hoober, Google, Core Web Vitals, LCP/INP/CLS, etc.) accurate. Keep product/feature names (Navi+, Mega Menu, Tab Bar, Slide Menu, FAB, Shopify) as-is.
- Keep Markdown tables; translate the cell text.
- Keep each <p class="lf-readmore">...</p> block: translate the kicker "Deep-dive" to a natural ${name} equivalent; translate the visible anchor text (keep the "Read the full guide → <Title>" shape, translated); set its href to "/${lang}/topic/SLUG/" (keep slug, add /${lang} prefix).
- ${item.kind === 'child'
    ? `Translate the final backlink sentence naturally, keeping the link, and set its URL to "/${lang}/SLUG/" (keep slug, add /${lang} prefix).`
    : 'Keep the closing paragraph as prose.'}
- Every internal URL MUST start with "/${lang}/". Do NOT touch external URLs like https://naviplus.io.
- Do NOT add an H1 title, a CTA, or a "Share" section.

Return ONLY the complete ${name} file content via StructuredOutput: { content }.`
}

const SCHEMA = {
  type: 'object', additionalProperties: false, required: ['content'],
  properties: { content: { type: 'string', description: 'Complete translated Markdown file: YAML front matter + body.' } },
}

let cfg = args
if (typeof cfg === 'string') { try { cfg = JSON.parse(cfg) } catch (e) { cfg = {} } }
const items = (cfg && cfg.items) || []
const langs = (cfg && cfg.langs) || []
log(`Dịch ${items.length} bài × ${langs.length} ngôn ngữ = ${items.length * langs.length} file`)

// build absolute EN source path for each item
for (const it of items) {
  it.en = it.kind === 'pillar' ? `${BASE}/_longform/en/${it.slug}.md` : `${BASE}/_topics/en/${it.slug}.md`
}

// flatten lang × item
const tasks = []
for (const lang of langs) for (const it of items) tasks.push({ it, lang })

const files = await pipeline(
  tasks,
  (t) => agent(prompt(t.it, t.lang), { label: `${t.lang}:${t.it.slug}`, phase: 'Translate', schema: SCHEMA }),
  (res, t) => {
    if (!res || !String(res.content).startsWith('---')) return null
    const dir = t.it.kind === 'pillar' ? `_longform/${t.lang}` : `_topics/${t.lang}`
    return { path: `${dir}/${t.it.slug}.md`, content: res.content, lang: t.lang, kind: t.it.kind }
  }
)

const ok = files.filter(Boolean)
log(`Xong: ${ok.length}/${tasks.length}`)
return { files: ok, total: tasks.length }
