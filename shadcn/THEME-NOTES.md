# Teleport MD on shadcn/ui + Tailwind — theme notes for the dev team

Companion to `globals.css` in this folder. The visual reference is the design system page:
https://psaelim.github.io/teleport-d2-preview/design-system.html
Working prototypes: index-r2.html (patient) and index-provider.html (provider) on the same domain.

The short version: the stack fits. shadcn is themed entirely through CSS variables and our
system is already token-based, so `globals.css` is a one-to-one mapping. Radix primitives also
close our open a11y items (focus management on navigation, tab/radio ARIA roles) for free.
What follows is where shadcn's defaults and our rules disagree, and which side wins (ours).

---

## 1. Buttons — override the defaults, they fail our gate

- **Size**: shadcn's default button is `h-9` (36px). Our floor is **44px**. Redefine the size
  variants: `default: h-11` (44px), `lg: h-12` (46-48px), and delete/redefine `sm` so it is
  never under 44px. Icon buttons: `h-11 w-11`.
- **Shape**: buttons are capsules → `rounded-full` in the base `buttonVariants`, not `rounded-md`.
- **Variants map**:
  - `default` → electric. **One per page**: the page's single global action (e.g. "+ New visit").
  - `secondary` → ink with white text. Card-level actions ("Confirm", "Track live").
    On ink surfaces (hero card), use `default` (electric) + `outline` on dark.
  - `outline` → ghost: transparent, 1px `border-input` (#C9C9C2), like shadcn's own outline, ink text.
  - `destructive` → **not a filled red button**. Our destructive affordance is quiet danger
    text (`text-destructive`, 600 weight) like "Cancel this visit". Restyle the variant to a
    text/link treatment; a filled `#DE1600` button exists nowhere in the system.
- Hover on primary is `--electric-hover` (#093FFF), not an opacity change.

## 2. Badge → StatusChip

Replace shadcn's Badge variants with the four-chip grammar (pale tint + **ink text**, capsule,
`min-h-7`, 13.5px/600):

| variant | bg token | meaning |
|---|---|---|
| `green` | `--chip-green` #E2F59B | settled: Confirmed, Open, Normal, To the lab |
| `blue` | `--chip-blue` #DCE4FF | in motion: En route |
| `coral` | `--chip-coral` #FFDDD8 | needs a human: Needs confirmation, High result |
| `gray` | `--chip-gray` #E8E8E3 | idle: Unconfirmed, Finding crew, Requested |

Never a solid `--volt` or `--coral` chip with white text. The mapping from visit states to
variants is fixed; a dev should never pick a chip color by taste.

## 3. Typography

- `font-display` (Bricolage Grotesque) for headings, big numbers, and card titles;
  `font-sans` (Inter) for everything else. Both load from Google Fonts
  (weights: Bricolage 600/700/800, Inter 400/500/600/700).
- The scale is normalized to whole pixels: **13 / 14 / 15 / 17**, display 20 / 22 / 30 / 40. `globals.css` redefines `text-xs` to **13px** — that is the floor. Treat any
  arbitrary value below 13px (`text-[11px]`) as a build error; the CI audit is the backstop.
- Display sizes (30/40px titles) are page-level, use explicit classes per the design page.

## 4. Contrast rules Tailwind will not stop you from breaking

Tailwind will happily compose `bg-coral text-white`. These are the combinations that are
**forbidden** (all measured):

- `text-white` on `bg-coral` (2.85:1) and `text-coral` on white (2.85:1). Coral fills take ink text.
- `text-white` on `bg-volt` (1.15:1). Volt takes ink text only.
- `text-electric` on `bg-ink` (3.56:1) below 24px — use `text-electric-on-dark` (#4C73FF),
  volt, or white on ink surfaces.
- Small gray text on paper: use `text-muted-foreground` (#4C535C), nothing lighter.

Suggest a tiny ESLint rule or code-review checklist for these four; plus the ported `audit.js`
gate in CI (44px targets, AA contrast, 13px floor, jargon sweep) as the mechanical check.

## 5. Components with a direct shadcn counterpart

- **Sidebar** → shadcn's Sidebar, themed by the `--sidebar-*` vars in globals.css (ink rail,
  white-72 items, volt ring/active indicator, electric badge).
- **Card** → default Card matches (white, hairline `--border`, radius-lg). Add one custom
  variant: `ink` (the hero card: bg-ink, volt eyebrow, white heading, electric primary inside).
  The coral-edge attention card is `border-l-4 border-l-coral` on a normal Card.
- **Tabs, Dialog, Sheet, DropdownMenu, Tooltip, Form/Input, Checkbox, RadioGroup, Skeleton** —
  use as shipped, restyled by the theme vars. The patient app's slide-over = `Sheet side="right"`.
- **Calendar/week view**: no shadcn primitive; the provider schedule grid is custom. Events:
  electric = video (white text), ink = draw, hatched = blocked.
- **Inputs**: `h-12` (48px), radius-md, label above the field. Never placeholder-as-label.

## 6. Icons — Phosphor (decided 2026-07-20)

Use `@phosphor-icons/react` for ALL icons instead of lucide-react. Reason: the system is
two-weight (line = idle, fill = active states and icon discs) and Phosphor is the free set
whose every glyph ships in both weights with identical metrics; weight is a prop.

Fixed semantic mapping (do not improvise):
`home=House` `calendar=CalendarDots` `patients=Users` `you/profile=User` `chat=ChatCircle`
`notifications=Bell` `results/flask=Flask` `tube=TestTube` `drop=Drop` `care=FirstAid`
`homecare=FirstAidKit` `vitals=Heartbeat` `video=VideoCamera` `chevron=CaretRight`
`camera=Camera` `mic=Microphone` `lock=Lock` `pin=MapPin` `check=Check` `end-call=PhoneSlash`
`rx=Pill` `mind=Brain` `cc=ClosedCaptioning` `search=MagnifyingGlass` `settings=Gear`
`confirmation check=CheckCircle`

Use `CheckCircle`, never `Check`, for confirmation marks: Phosphor renders stroke-only glyphs
(`Check`, `CaretRight`) at `weight="fill"` as a filled square with the mark knocked out, which
reads as a checkbox input. Bare `Check` at `weight="regular"` is fine inline in text.

Idle = `weight="regular"`, active/discs = `weight="fill"`, color via `currentColor`.
Icon discs stay neutral (paper bg + ink glyph); color belongs to chips and buttons.

## 7. Things this stack does NOT decide

- shadcn/Tailwind implies **React web**. That cleanly covers the provider portal (desktop) and
  a patient web app/PWA. It does not answer whether the patient app is ever native
  (shadcn has no React Native story) — the tokens translate either way, the components do not.
- Dark mode: not designed. Do not turn on `.dark`. Ink surfaces are components, not a theme.
- Everything in DEV-FAQ.md section 2 (video SDK, dispatch mechanics, tracking, lab integration,
  auth recovery, notifications) is still open.

## 8. Suggested first build slice

1. Vite/Next + Tailwind v4 + shadcn init, drop in `globals.css`, load the two fonts.
2. Restyle `buttonVariants` + Badge→StatusChip per sections 1–2.
3. Build the provider **Today** page against the live prototype as the acceptance spec
   (app-provider.html#today): sidebar, stat cards, ink hero, schedule rows, confirmation rail.
4. Port `audit.js` into CI and run it on that one page. If the gate passes there, the theme
   is proven and the rest is assembly.
