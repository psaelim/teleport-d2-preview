# V2 features — hidden or disabled in V1

Features the team decided to ship in V2 (team call, 2026-07-17: all pricing features move to V2).
The designs are NOT deleted: hidden screens keep their code and routes in `app-r2.html` and stay
reviewable in the gallery's "V2 · built, hidden in V1" section. This file is the memory: add every
deferred feature here so nothing is forgotten when V2 starts.

How to use: every row is one feature on one screen. `V1 action` is what V1 does instead.
All decisions below were made by June on 2026-07-17 and applied to the prototype the same day.

## Where the hidden designs live

- **Code**: `Price()`, `Payment()`, `Receipt()` remain in `app-r2.html` with their routes
  (`#price`, `#payment`, `#receipt`); nothing in V1 links to them.
- **Gallery**: the "V2 · built, hidden in V1" section at the end of the screen gallery
  (local `index-r2.html`, the artifact, and the GitHub Pages board) shows all three.
- **Removed copy** (dollar figures, fee lines, charge ledgers) is recoverable from git history
  in `psaelim/teleport-d2-preview` and from this file's "restore notes" column.

## Pricing & payment (moved to V2, decided 2026-07-17)

| Screen | What V2 restores | V1 action (applied 2026-07-17) |
|--------|------------------|--------------------------------|
| The price (was 26) | Whole screen: itemized ledger, locked-travel promise, paying-with row | Hidden. Book the draw's CTA is "Request the visit" and goes straight to Requested |
| Payment methods (was 13) | Whole screen: cards on file, add-card form, default selection | Unreachable. You keeps a quiet non-tappable row: "Payment · Coming soon · visits are cash for now" |
| Receipt (was 36) | Whole screen + the "Payment receipt · $77.50" notification item | Both hidden; the notification feed's "earlier" group has only the lab-results item |
| Book a video visit (15) | Payment selector row (insurance/card), "$50 or covered", "$25 fee" cancel fine print | Static "Cash · you pay at the visit" row; doctor sub is "Primary care · video visit"; fine print is "Free to cancel up to 10 hours before the visit." |
| Doctor profile (17) | Payment selector row (insurance-first once captured) | Same static Cash row as Book |
| You (08) | Payment row listing the default card, tappable | Disabled placeholder row (see Payment methods) |
| Change the tests (24) | Per-test dollar prices, "$65.00 + travel" in the Done button, "prices are flat" intro line | Checklist kept (it drives the order); prices column removed, Done says "Done · 2 tests", intro is "One visit covers everything you check." Prices still live in the `TESTS` const, just unrendered |
| Where we come (25) | "Travel stays capped at $12.50 regardless" | Line removed |
| Requested (27) | "Nothing is charged until after the draw" | Line removed |
| Cancel the visit (29) | Cost-honesty copy ("$12.50 travel still applies, $65.00 not charged") + cancelled-state charge ledger + receipt pointer | Rewritten without money: "we will turn her around and let her know"; cancelled state confirms the order is kept for rebooking |
| Home (04) | "cash rate of $50" figure in the insurance banner | Banner kept, figure removed: "billed at the cash rate" |
| Insurance card (11) | "The card on file is only charged for what the plan does not cover" | Insurance capture KEPT in V1 (June's call: it is coverage, not pricing); the card-on-file sentence trimmed to "We bill your plan first for every eligible visit." |

**Note on the V1 payment story**: V1 is cash-only, paid at the visit, never in the app. Insurance
capture stays as a records/coverage feature but is not offered as a booking payment method until V2.

## Other deferred features

(Add future deferrals here, one row each, with the date and the team's reason.)

| Screen | Feature | Deferred on | Reason | V1 action | Status |
|--------|---------|-------------|--------|-----------|--------|
