# Teleport MD — PR review checklist

Companion to `THEME-NOTES.md` and `globals.css`. Human half of the gate; the mechanical half
is `audit.js` in CI (44px targets, AA contrast, 13px floor, jargon sweep) — a PR needs both.
Visual reference: https://psaelim.github.io/teleport-d2-preview/design-system.html

## Buttons
- [ ] No interactive target under **44×44** (`h-11` minimum; icon buttons `h-11 w-11`; no shadcn `h-9`/`sm` leaking through)
- [ ] Buttons are capsules (`rounded-full`), not `rounded-md`
- [ ] **One electric (`default`) button per page** — the single global action; card-level actions are `secondary` (ink)
- [ ] On ink surfaces: electric primary + `outline`, never `secondary`
- [ ] Destructive is quiet danger text (`text-destructive`, 600), **never a filled red button**
- [ ] Primary hover is `--electric-hover` #093FFF, not an opacity change

## The four forbidden contrast pairs (Tailwind won't stop you)
- [ ] No `text-white` on `bg-coral`, and no `text-coral` on white — coral fills take ink text
- [ ] No `text-white` on `bg-volt` — volt takes ink text only
- [ ] No `text-electric` on ink below 24px — use `text-electric-on-dark` #4C73FF, volt, or white
- [ ] No gray text lighter than `text-muted-foreground` #4C535C on paper

## Status chips
- [ ] Only the four StatusChip variants (green/blue/coral/gray), pale tint + **ink text**, capsule, `min-h-7`
- [ ] Chip color comes from the fixed state mapping (green = settled, blue = in motion, coral = needs a human, gray = idle) — never picked by taste
- [ ] No solid volt or coral chip with white text

## Typography
- [ ] Bricolage Grotesque for headings/big numbers/card titles; Inter for everything else
- [ ] Nothing under **13px** — any `text-[11px]`-style arbitrary value below 13 is a build error
- [ ] Scale stays on the whole-px steps: 13 / 14 / 15 / 17, display 20 / 22 / 30 / 40

## Icons (Phosphor)
- [ ] `@phosphor-icons/react` only — no lucide imports
- [ ] Glyph comes from the fixed semantic mapping in THEME-NOTES §6 — no improvising
- [ ] `weight="regular"` idle, `weight="fill"` active/discs; color via `currentColor`
- [ ] Confirmation marks use `CheckCircle`, never `Check` at `weight="fill"`
- [ ] Icon discs stay neutral (paper bg + ink glyph)

## Forms
- [ ] Inputs `h-12`, radius-md, label above the field — never placeholder-as-label

## Copy & scope
- [ ] Jargon sweep clean on user-facing surfaces: `#WO`, `WORK TYPE`, `Pending Crew`, `NPI`, `Taxonomy`, `Moses`, `BAA` = zero hits
- [ ] No prices, fees, ledgers, or receipts in V1 flows — check `V2-FEATURES.md` before touching any veiled feature
- [ ] No demo-data behaviors implemented as real (every-search→Dr. Okafor, Jennifer in two draws, scheduler state bleed)
- [ ] No `.dark` / dark mode — ink surfaces are components, not a theme

## Mechanical gate
- [ ] `audit.js` passes **0/0/0** on every touched route
