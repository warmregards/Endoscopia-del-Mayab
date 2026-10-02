# Social preview images

34 unique 1200 × 630 JPEGs in public/og, created with the built-in image generation tool and optimized for social previews. The ivory, forest-green, sage and serif styling follows app/(site)/design-system.module.css. The medical sculptures are conceptual editorial illustrations. Doctor and team cards use the existing public/equipo portrait references. No prices are baked into the images.

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

## Full-site expansion

25 additional cards cover all remaining public content pages. /servicios redirects to the homepage. The five /lp pages reuse the corresponding procedure card through socialImagesForPath; their robots directives and existing titles/descriptions are preserved.

- /capsula-endoscopica-merida → /og/capsula-endoscopica.jpg
- /cpre-playa-del-carmen → /og/cpre-playa-del-carmen.jpg
- /esclerosis-varices-gastricas-merida → /og/esclerosis-varices.jpg
- /gastrostomia-endoscopica-peg-merida → /og/gastrostomia.jpg
- /extraccion-cuerpos-extranos-endoscopia-merida → /og/extraccion-cuerpos-extranos.jpg
- /dilatacion-esofagica-merida → /og/dilatacion-esofagica.jpg
- /dilatacion-biliar-merida → /og/dilatacion-biliar.jpg
- /dilatacion-colonica-merida → /og/dilatacion-colonica.jpg
- /retiro-balon-gastrico-merida → /og/retiro-balon-gastrico.jpg
- /apc-coagulacion-plasma-argon-merida → /og/apc.jpg
- /endoprotesis-esofagicas-merida → /og/endoprotesis-esofagicas.jpg
- /endoprotesis-biliares-merida → /og/endoprotesis-biliares.jpg
- /endoprotesis-duodenales-merida → /og/endoprotesis-duodenales.jpg
- /endoprotesis-colonicas-merida → /og/endoprotesis-colonicas.jpg
- /cierre-fistulas-clips-endoscopicos-merida → /og/cierre-fistulas.jpg
- /sutura-endoscopica-merida → /og/sutura-endoscopica.jpg
- /diseccion-endoscopica-submucosa-esd-merida → /og/esd.jpg
- /reseccion-endoscopica-mucosa-emr-merida → /og/emr.jpg
- /ultrasonido-endoscopico-merida → /og/ultrasonido-endoscopico.jpg
- /emergencias-digestivas-merida → /og/emergencias-digestivas.jpg
- /consultas-digestivas-merida → /og/consultas-digestivas.jpg
- /pacientes-de-fuera-de-merida → /og/pacientes-fuera-merida.jpg
- /preparacion-endoscopia → /og/preparacion-endoscopia.jpg
- /preparacion-colonoscopia → /og/preparacion-colonoscopia.jpg
- /contacto → /og/contacto.jpg

See full-site-prompts.json for this batch.
