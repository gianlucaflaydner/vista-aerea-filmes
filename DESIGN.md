---
name: Vista Aérea Filmes
description: Chapa esmaltada de beira de estrada: campos de cor inteiros, letra pintada e uma única seta vermelha.
colors:
  plate: "#F2B705"
  asphalt: "#14140F"
  arrow: "#D6300F"
  route: "#0E5C3A"
  enamel: "#F4F1E8"
typography:
  display:
    fontFamily: "Anton, sans-serif"
    fontSize: "clamp(3.25rem, 11.5vw, 7.25rem)"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "-0.015em"
  headline:
    fontFamily: "Anton, sans-serif"
    fontSize: "clamp(2.25rem, 6vw, 5rem)"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "-0.015em"
  title:
    fontFamily: "Anton, sans-serif"
    fontSize: "clamp(1.5rem, 3.2vw, 2.75rem)"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "-0.015em"
  lead:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.125rem, 1.7vw, 1.5rem)"
    fontWeight: 500
    lineHeight: 1.5
  body:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1rem, 1.05vw, 1.125rem)"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.6875rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0.18em"
  plate-label:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0.3em"
rounded:
  none: "0"
spacing:
  gutter: "clamp(1.25rem, 4.5vw, 4.5rem)"
  rule: "3px"
  band: "6px"
  section-y: "6rem"
  section-y-lg: "8rem"
components:
  button-arrow:
    backgroundColor: "{colors.arrow}"
    textColor: "{colors.enamel}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "16px 32px"
  button-arrow-hover:
    backgroundColor: "{colors.asphalt}"
    textColor: "{colors.enamel}"
  button-plate:
    backgroundColor: "{colors.asphalt}"
    textColor: "{colors.plate}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "16px 32px"
  button-plate-hover:
    backgroundColor: "{colors.arrow}"
    textColor: "{colors.enamel}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "currentColor"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "16px 32px"
  button-outline-hover:
    backgroundColor: "{colors.asphalt}"
    textColor: "{colors.plate}"
  input-field:
    backgroundColor: "{colors.enamel}"
    textColor: "{colors.asphalt}"
    rounded: "{rounded.none}"
    padding: "14px 16px"
    width: "100%"
  input-field-focus:
    backgroundColor: "{colors.enamel}"
    textColor: "{colors.asphalt}"
  panel-plate:
    backgroundColor: "{colors.plate}"
    textColor: "{colors.asphalt}"
    rounded: "{rounded.none}"
  panel-asphalt:
    backgroundColor: "{colors.asphalt}"
    textColor: "{colors.enamel}"
    rounded: "{rounded.none}"
  panel-enamel:
    backgroundColor: "{colors.enamel}"
    textColor: "{colors.asphalt}"
    rounded: "{rounded.none}"
  panel-route:
    backgroundColor: "{colors.route}"
    textColor: "{colors.enamel}"
    rounded: "{rounded.none}"
---

# Design System: Vista Aérea Filmes

## Overview

**Creative North Star: "A Placa da RS-115"**

The world is the roadside signage of the RS-115 through the Vale do Paranhana: enamelled steel plates bolted at the edge of a lot, painted to be read at sixty kilometres an hour under full sun. Everything in the build follows from that object. A page region is not a card floating on a neutral canvas; it is a whole plate, one colour, bleeding to both edges of the viewport, with the lettering painted directly on it. The screen never reads as a document. It reads as a run of plates passing.

Density is high and unapologetic. Type is enormous where it names something and small, bold and widely tracked where it carries data; there is no polite mid-grey in between. The materials are two and only two: a diagonal enamel sheen (`.enamel-sheen`) that reads as sun crossing the steel, and a fine screen-print grain (`.painted`) that keeps the flat colour from looking like a CSS fill. Both live on the panel itself, never on a floating object.

The build is flat by construction. There is no shadow token anywhere in the system, no border radius anywhere in the system, and no blur. Separation is done with 3px painted rules and with the collision of two saturated fields. Depth exists in exactly one place, the aerial photograph of Taquara moving in parallax behind the contact section, and it is authored as the single moment where the plate steps aside and the actual view appears.

**Key Characteristics:**
- Colour owns whole regions; nothing is an accent speck on neutral.
- Zero radius, zero shadow, zero blur. The plate is straight, flat and bolted.
- Anton uppercase for anything named; Archivo for anything informational.
- Red is reserved: direction and action only.
- Motion has three named roles and no fourth.

## Colors

Five flat enamel paints, all defined once as RGB channel triplets on `:root` and bound into Tailwind with alpha support; opacity steps, not new hues, produce every secondary tone.

### Primary
- **Sign Yellow** (`{colors.plate}`): the dominant field. Hero and equipment sections are entirely this colour; it is also the painted band under every portfolio poster, the contact form's own plate, the header/footer hairline rule, and the scrollbar thumb. When in doubt about which colour a region should be, it is this one.

### Secondary
- **Arrow Red** (`{colors.arrow}`): direction and action, nothing else. The WhatsApp rail and desktop plate, the primary button, the play badge on every video poster, focus outlines, text selection, caret and `accent-color`, and the error border on a field. It is never used as a background for reading text or as decoration.

### Tertiary
- **Highway Green** (`{colors.route}`): a single region: the clients band. It exists to break the yellow/black alternation once, in the place where the twelve client plates need a field that is neither.

### Neutral
- **Asphalt** (`{colors.asphalt}`): the dark field. `html` and `body` background, portfolio and footer panels, the identification plate inside the light "sobre" section, all 3px structural rules on light fields, and the body text colour on light fields (usually at 75% to 85% opacity).
- **Enamel White** (`{colors.enamel}`): the light field and the text colour on every dark or saturated field. Also the backing plate behind each client logo and behind the site logo in the header, because a logotype on a roadside sign always gets its own white rectangle.

### Named Rules
**The Whole Field Rule.** A colour claims an entire section, edge to edge, or it does not appear. There are no coloured cards on a neutral page and no tinted panels floating inside a section of another colour.

**The Reserved Red Rule.** Arrow red marks direction or action and nothing else. Every red pixel on the page is either the primary action, a play control, a focus/selection state, or an error. Using it decoratively destroys the only signal the system has.

**The Alternating Plate Rule.** Sections alternate fields in a fixed shipped rhythm: yellow hero, asphalt portfolio, enamel "sobre", green clients, yellow equipment, photograph contact, asphalt footer. Two adjacent sections never share a field.

**The Opacity Ladder Rule.** Secondary text is the field's own foreground at a step from the opacity ladder (`/85`, `/75`, `/70`, `/65`, `/50`, `/20`, `/15`), never a new grey. The palette stays at five.

## Typography

**Display Font:** Anton (with the metric-adjusted `next/font` fallback, then `sans-serif`)
**Body Font:** Archivo (weights 400/500/600/700, with `ui-sans-serif`, `system-ui`)

**Character:** Anton is a very heavy condensed grotesque, the letter of highway and lot-sale signage, drawn to be read from a moving car. Archivo is the working grotesque underneath it, drawn for small sizes and high legibility. The split is the sign's own split: the huge painted name, and the information plaquette bolted under it.

### Hierarchy
- **Display** (Anton 400, `{typography.display.fontSize}`, line-height 1): the hero headline only. Sized so that the primary action still fits inside the first viewport.
- **Headline** (Anton 400, `{typography.headline.fontSize}`, line-height 1): every section title, via `Lettering`. Always uppercase, always preceded by a 3px rule.
- **Title** (Anton 400, `{typography.title.fontSize}`, line-height 1): the painted band naming a portfolio work, and the equipment values, the same face at the same step, because both are Anton naming something on a painted plate.
- **Lead** (Archivo 500, `{typography.lead.fontSize}`, line-height 1.5): the one paragraph that answers a section title, capped at `36rem`.
- **Body** (Archivo 400, `{typography.body.fontSize}`, line-height 1.65): running copy, capped at `36rem` (the `measure` token). Never below 16px, because the audience reads on a phone in daylight.
- **Label** (Archivo 700, `{typography.label.fontSize}`, tracking `0.18em`, uppercase): field labels, nav links, data plaquettes, footer handles, the equipment `<dt>`. This is the informational voice of the whole system.
- **Plate label** (Archivo 700, tracking `0.3em`, uppercase): the widest tracking step, reserved for the small stamped caption on a plate.

### Named Rules
**The Line-Height One Rule.** `.lettering` sets line-height to exactly 1 and never lower. Accented Portuguese uppercase stacks an accent above and a cedilla below on adjacent lines (ILUMINAÇÃO over CAPTAÇÃO); anything tighter makes them touch.

**The Two Voices Rule.** Anton names, Archivo informs. Anton never sets a sentence of running copy; Archivo never sets a section title. There is no third face and no system display face. Impact and its relatives are explicitly out of the stack.

**The Tracked Small-Caps Rule.** Any text below 14px is uppercase, weight 700, and tracked at least `0.18em`. Small type in this world is stamped data, never quiet prose.

## Layout

One column of content, `Shell`, capped at `100rem` and padded left and right by the single gutter token (`clamp(1.25rem, 4.5vw, 4.5rem)`). Every section is a `Panel` that spans the full viewport width; the shell only constrains what is inside it, which is why the client marquee and the hero's bottom data strip are allowed to break the gutter and bleed to the edge.

Composition inside a section is a 12-column grid at `md` and above, in two recurring splits: 5/6 with a one-column void (title left, content starting at column 7) and 7/5 (hero copy against the featured poster). Below `md` everything stacks in source order. Breakpoints are `sm: 576px`, `md: 960px`, `lg: 1440px`, `xl: 1728px`, a bespoke ramp, with `xl` and `2xl` restored into `extend` so they exist at all.

Vertical rhythm is coarse: sections run `6rem` of padding, `8rem` from `sm` up. Inside a section the ladder is roughly 2rem between a title and its lead, 3.5rem before a content block. Reading measure is capped at `36rem` for both `Body` and `Lead`. `body` carries `padding-bottom: 4rem` below `576px`, a reserved band so the docked WhatsApp rail never covers live type, and drops it to zero above. Anchors carry `scroll-margin-top: 5.5rem` to clear the fixed header.

**The Bleeding Plate Rule.** A section is a full-bleed field; only its text is gutter-constrained. Marquees, data strips and ground bars run edge to edge.

## Elevation & Depth

This system has no shadows. There is no shadow token, no `box-shadow` anywhere in the build, and no blur. A painted steel plate does not cast a soft shadow onto the page it lives on, and admitting one would break the material.

Depth is produced three ways instead. First, tonal collision: two saturated fields meeting on a hard line read as two physical plates. Second, the material overlays. `.enamel-sheen` lays a 104° light-to-dark gradient across the panel (white at 16% falling to transparent, then black at 8%), and `.painted` lays a 1px/3px and 1px/4px repeating grain in multiply at 30% opacity. Third, the single authored parallax: the Taquara aerial photograph translates 20% of its own height against scroll behind the contact section, with a directional asphalt scrim (88% down to 42% at 96°) so the copy side stays readable while the photograph stays visible on the form side.

**The No Shadow Rule.** Nothing in this system is lifted. If an element needs to separate from its surroundings, give it a 3px asphalt rule, a different field, or a white backing plate. Never a shadow, never a radius, never a glow.

**The Ground Line Rule.** Any cut-out product image that carries its own baked-in shadow gets a solid asphalt bar under it to land on. Floating cut-outs are the failure mode this rule exists to prevent.

## Shapes

Everything is a rectangle with zero radius. There is no `borderRadius` extension in the Tailwind config and no `rounded-*` utility in the build. The WhatsApp plate is a 64px square, the play badge is a 64px to 80px square welded into the poster's bottom-right corner, the mobile menu toggle is a 44px square, and the client logo holders are plain 160×96 rectangles.

Borders come in exactly two weights. The structural rule is `3px` solid: section rules, the header underline, the equipment `<dl>` dividers, input strokes, the outline button, the mobile menu toggle. The hairline is `1px` at low opacity, used only for the quiet lists inside the footer and the "sobre" paragraphs. A single heavier `6px` frame exists on the hero's featured poster, where the image is being framed like a panel bolted to the sign.

Media is always `16:9` with `object-cover`. YouTube posters ship at 4:3 with letterbox bars, so any panel that shows one must crop rather than fit; a poster shown at its native ratio brings black bars into the layout.

## Components

### Buttons
- **Shape:** hard rectangle (radius `0`), `2rem` horizontal padding, `1rem` vertical (`1.25rem` from `sm`), an 8px gap to the chevron.
- **Type:** Archivo 700, `0.875rem`, uppercase, tracked `0.18em`.
- **Arrow (primary):** arrow red on enamel white; hover flips to asphalt. This is WhatsApp and form submission.
- **Plate (secondary):** asphalt on sign yellow; hover flips to arrow red on enamel. Used for outbound social ("Ver mais no Instagram").
- **Outline (tertiary):** 3px `currentColor` border, transparent fill, so it inherits whatever field it sits on; hover fills asphalt with yellow lettering.
- **Chevron:** a custom SVG arrowhead, 20×16, that slides `0.375rem` right on hover over 300ms on the `pass` curve. It can be suppressed (`arrow={false}`) on links that navigate within the page rather than acting.
- **Disabled:** `opacity 0.55` and `not-allowed`; the submit button drops its chevron while sending.

### Inputs / Fields
- **Style:** enamel white fill, 3px asphalt stroke, zero radius, full width, `14px/16px` padding; placeholder is asphalt at 65%.
- **Label:** always present above the control, in the label voice (Archivo 700, 11px, tracked `0.18em`, asphalt at 70%). Placeholder-only fields are not acceptable.
- **Focus:** the stroke turns arrow red; the global 3px red focus ring at 2px offset covers everything else focusable.
- **Error:** stroke turns arrow red, with a bold 14px arrow-red message below, wired through `aria-invalid` / `aria-describedby`.
- **Submit feedback:** inline `role="status"` text beside the button, never a modal.

### Cards / Containers
The system has no card. The equivalent is the **plate**: a full-bleed `Panel` in one of four fields (`plate`, `asphalt`, `enamel`, `route`), always carrying the painted grain and, by default, the enamel sheen. Inside it, sub-regions are also plates: the asphalt identification block in "sobre", the yellow contact form, the white logo holders. They are solid rectangles of a second field, never bordered boxes. No radius, no shadow, internal padding of `1.5rem` to `2.25rem`.

### Navigation
Fixed header, 4.5rem tall, asphalt with a 3px sign-yellow underline. Wordmark in Anton yellow beside the logo on its white backing plate. Links are label-voice, enamel at 75%, going full sign yellow on hover over 300ms. Below `md` the links collapse into a toggle (44px bordered square) opening a full-width asphalt panel whose items are set in Anton at `1.875rem` on hairline dividers, closing with a full-width arrow-red WhatsApp bar. The panel animates `max-height` only; it locks document scroll and closes on Escape.

### Persistent WhatsApp Action
The primary action follows the whole page. Below `576px` it is a full-width arrow-red rail docked to the bottom edge with a 3px yellow top rule, sliding in on `translateY`. `body` reserves `4rem` of padding for it so it never sits on live type. From `576px` up it becomes a 64px arrow-red square at bottom-right that fades and lifts in, flipping to sign yellow on hover. It appears after 60% of the first viewport has scrolled and hides itself while `#contato` is on screen, where the full-size button already exists.

### Client Marquee
Two rows of white logo plates drifting in opposite directions on infinite linear loops (`drift` 46s, `driftBack` 52s, each a `translate3d(0 → -50%)`), each row duplicated once to close the loop with the duplicate marked `aria-hidden`. Both rows pause on hover. The rows bleed past the shell gutter.

### Motion Grammar
Three roles, and there is no fourth.
- **Wipe**: a hard-edged `clip-path: inset(0 100% 0 0)` uncover left to right over 900ms on `cubic-bezier(0.16, 1, 0.3, 1)`, viewport-once. It applies to section headings only. It is a cut, not a fade, because painted paint does not fade in.
- **Reveal**: a fade-and-rise (34px default) over 850ms on the same curve, viewport-once, staggered up to 300ms in a list. It applies to content panels only: portfolio panels, the clients marquee, the contact form, the equipment cut-out band.
- **Parallax**: the contact photograph, and only that. It is the page's one authored moment.

Body copy never animates; it is present at full opacity from first paint. Scrolling is smoothed by Lenis with anchor targets offset by 96px.

**The Neutralise, Never Branch Rule.** Every reduced-motion path zeroes values (distance, duration, clip inset) while keeping the node structure byte-identical, via `useReducedMotionSafe`. Motion's own `useReducedMotion` reads the media query on the first client render while the server renders `false`, which breaks hydration and can strand an entire section at opacity 0.

## Do's and Don'ts

### Do:
- **Do** give each new section a whole field from the four `Panel` colours, alternating against its neighbours, and let it bleed edge to edge.
- **Do** open a section with a 3px rule and an Anton uppercase `Lettering` title wrapped in `Wipe`.
- **Do** keep `.lettering` at line-height exactly 1; Portuguese accented uppercase collides below it.
- **Do** reserve arrow red for direction, action, focus, selection and error.
- **Do** separate with 3px asphalt rules, a second field, or a white backing plate.
- **Do** crop every YouTube poster to 16:9 with `object-cover`; the source is 4:3 with letterbox bars.
- **Do** keep body type at 16px or above and make every touch target at least 44px, because the audience is on a phone in daylight.
- **Do** label every form control visibly, above the field, in the tracked uppercase label voice.
- **Do** derive secondary tones from the opacity ladder on an existing colour.
- **Do** neutralise motion values under `prefers-reduced-motion` while keeping the rendered node structure identical.

### Don't:
- **Don't** add a border radius. There is no radius token; every corner in this system is square.
- **Don't** add a shadow, a glow or a blur of any kind. The build has none, and lifting a plate off the page breaks the material.
- **Don't** put a coloured card on a neutral background, or a tinted box inside a section of another colour. A region is a plate or it is nothing.
- **Don't** use arrow red as decoration, as a large background for reading, or on a non-action.
- **Don't** introduce a sixth colour or a new grey; use the existing five with an opacity step.
- **Don't** set running copy in Anton or a section title in Archivo, and don't add a third family or a system display face.
- **Don't** hide content or an action behind hover, because most of the audience has no hover at all.
- **Don't** float a cut-out image with a baked-in shadow; give it the asphalt ground bar.
- **Don't** animate body copy, and don't invent a fourth motion role; Wipe, Reveal and the contact parallax are the whole vocabulary.
- **Don't** branch node structure on `prefers-reduced-motion`, and don't call Motion's `useReducedMotion` directly in server-rendered content.
- **Don't** render social networks as icon images; the project's social PNGs are inconsistent in treatment and the system names them as words.
