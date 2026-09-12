# Typography and interactive motion refresh

## Goal
Match the reference portfolio’s Space Grotesk and DM Sans typography, then make every page feel distinct and interactive without changing its content or navigation.

## Changes
- Replace the current serif/sans pairing with Space Grotesk for display text and DM Sans for body text.
- Preserve the existing blue-on-midnight visual system while tuning type weights, line-height, and headings for the new families.
- Add a shared animated page entrance and active navigation treatment.
- Home: retain the glow, marquee, staggered entrance, and scroll reveals; refine motion consistency.
- About: animate the career timeline, add progressive line reveals, and give achievement tiles responsive lift/focus states.
- Work: add staggered project-row entrances with pointer-responsive title/number movement and an animated rule.
- Services: use staggered cards, animated service numbering, and cascading skill-list reveals with interactive card emphasis.
- Contact: add progressive contact-link motion and animated focus/submission feedback on the enquiry form.
- Respect reduced-motion preferences and keep all interactions usable by keyboard and touch.

## Technical details
- Update font links in the root document and font tokens in the global stylesheet.
- Extend the existing `Reveal` helper to support the semantic elements needed by lists.
- Implement page-specific effects with CSS utilities and small React state only where interaction requires it.
- Verify all five pages at desktop and mobile widths, including console errors and reduced-motion behavior.
