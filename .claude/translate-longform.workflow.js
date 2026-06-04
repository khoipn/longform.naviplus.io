export const meta = {
  name: 'translate-longform-en',
  description: 'Dịch các bài long-form VI sang EN (root) cho longform.naviplus.io',
  phases: [{ title: 'Translate', detail: 'dịch từng bài VI → EN' }],
}

function prompt(item) {
  return `You translate ecommerce guide articles from Vietnamese to natural, fluent English for longform.naviplus.io.

STEP 1: Read the source file with the Read tool: ${item.vi}

STEP 2: Produce a COMPLETE English Markdown file (YAML front matter + body) following these rules EXACTLY:

FRONT MATTER:
- Keep these keys/values UNCHANGED: ref, order, hero_color, date, read_time.
- Change "lang: vi" to "lang: en".
- Translate the VALUES of: title, description, topic_tag, and seo_keywords (give natural English keyword equivalents, same count).
- ${item.kind === 'pillar'
    ? 'Translate every child_links[].title and child_links[].desc. Change every child_links[].url from "/vi/topic/SLUG/" to "/topic/SLUG/" (remove the /vi prefix, keep the slug exactly).'
    : 'Translate parent_title. Change parent_url from "/vi/SLUG/" to "/SLUG/" (remove the /vi prefix, keep the slug exactly).'}

BODY:
- Translate ALL prose into clear, plain, gentle English. Keep the tone calm and practical, like an experienced merchant sharing — NOT salesy, NOT flashy. Short sentences and paragraphs. Keep every statistic and source attribution (Baymard Institute, Nielsen Norman Group, Steven Hoober, Google, etc.) intact and accurate.
- Keep Markdown tables; translate the cell text.
- Keep each <p class="lf-readmore">...</p> block. Inside it: change the kicker text "Đọc sâu" to "Deep-dive"; translate the visible anchor text to English (keep the "Read the full guide → <Title>" shape, e.g. "Read the full guide → <English child title>"); change the href from "/vi/topic/SLUG/" to "/topic/SLUG/".
- ${item.kind === 'child'
    ? 'Translate the final backlink sentence to EXACTLY this shape: "This article is part of the larger guide on [<English parent title>](/SLUG/)." (remove /vi prefix from the URL, keep the slug).'
    : 'Keep the closing paragraph as prose.'}
- Remove the "/vi" prefix from ANY remaining internal URL so links point to the English root.
- Do NOT add an H1 title. Do NOT add a CTA or "Share" section (the layout renders those).

Return ONLY the complete English file content via StructuredOutput: { content }.`
}

const SCHEMA = {
  type: 'object', additionalProperties: false, required: ['content'],
  properties: { content: { type: 'string', description: 'Complete English Markdown file: YAML front matter + translated body.' } },
}

let items = args
if (typeof items === 'string') { try { items = JSON.parse(items) } catch (e) { items = [] } }
if (!Array.isArray(items)) items = []
log(`Dịch ${items.length} bài VI → EN`)

const files = await pipeline(
  items,
  (it) => agent(prompt(it), { label: `dịch:${it.en.split('/').pop()}`, phase: 'Translate', schema: SCHEMA }),
  (res, it) => res ? { path: it.en, content: res.content, kind: it.kind } : null
)

const ok = files.filter(Boolean)
log(`Xong: ${ok.length}/${items.length}`)
return { files: ok, total: items.length }
