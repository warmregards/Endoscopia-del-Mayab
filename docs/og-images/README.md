# Social preview images

Nine unique 1200 × 630 JPEGs in public/og, created with the built-in image generation tool and optimized for social previews. The ivory, forest-green, sage and serif styling follows app/(site)/design-system.module.css. The medical sculptures are conceptual editorial illustrations. Doctor and team cards use the existing public/equipo portrait references. No prices are baked into the images.

lib/og-images.ts selects a card by canonical route. lib/seo.ts applies that selection to both Open Graph and Twitter metadata, while retaining explicit ogImage overrides. The root layout and unlisted routes use the new home card as a fallback. Existing page metadata builders require no page-level duplication.

- / → /og/home.jpg
- /endoscopia-merida → /og/endoscopia.jpg
- /colonoscopia-merida → /og/colonoscopia.jpg
- /cpre-merida → /og/cpre.jpg
- /ligadura-varices-esofagicas-merida → /og/ligadura-varices.jpg
- /ligadura-hemorroides-internas-merida → /og/ligadura-hemorroides.jpg
- /equipo-medico → /og/equipo-medico.jpg
- /dr-omar-quiroz → /og/dr-omar-quiroz.jpg
- /precios → /og/precios.jpg

The files deploy as normal Next.js public assets; there is no generation service or API dependency at runtime. The original /omar-open-graph.jpg remains available for already-shared URLs. Social networks may cache previous previews and require a re-scrape after deployment.

See prompts.json for the generation prompt set and reference inputs.
