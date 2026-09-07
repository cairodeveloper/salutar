# Salutar — design context

## Project

Next.js App Router, React, TypeScript and Tailwind v3. `app/globals.css` owns the visual system. The home is composed in `components/AgencySite.tsx`; `/sobre` and `/contato` have their own pages. Framer Motion animates entrances, GSAP runs the marquee, and React Three Fiber/Drei render the hero logo and the about-page heart.

## Identity

- Flat backgrounds: ink `#08080d`, paper `#fffdf9`, orange `#ff7040`, aqua `#aee6ed`, electric `#3939ff`, lilac `#dbb8ff`, gold `#f2bb05`.
- Manrope for body and bold headings, italic Playfair Display for heading emphasis, DM Mono for small numbered labels.
- Spacious sections: 155px vertical spacing and 5.2vw side gutters on desktop; 105px and 6vw on mobile.
- Reuse `.section`, `.section-intro`, `.eyebrow` and `.big-link`, `BrandMark`, Next Image and Lucide icons.
- Thin dividers, mostly square surfaces, circular action icons. Reserve subtle shadows for interactive or inset surfaces.

## Portfolio

`components/Portfolio.tsx` follows services and precedes the marquee. It uses the hero's ink background and lilac heading emphasis, with orange, aqua and lilac preview surrounds. The project grid has three columns on desktop, two below 1100px and one below 600px.

Local WebP captures provide real Fiamma, Imova and Clínica Aflora previews. The corrected Aflora URL is `https://clinicaaflora.vercel.app/`.

Project links open a new tab, have visible keyboard focus and respect reduced motion for hover effects. Reuse existing primitives and preserve the site's identity. Do not invent client screenshots.

## Hero lighting

The GLB material is fully metallic with zero roughness. A local environment capture in `OrbitScene` supplies broad studio reflections while preserving the transparent canvas and dark page background. It requires no remote HDR asset and does not modify the GLB.
