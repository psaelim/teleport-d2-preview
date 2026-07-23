/* Shared screen + flow data for the Provider portal gallery.
   Source of truth: edit here; index-provider.html (and, later, a
   flow map + the artifact builder) consume this file.
   Entry shape: [hash, title, sub, annotation, isNew]; same grammar
   as the patient app's screens-r2.js. Provider R1 is desktop-first
   (1440x900 frames), built 2026-07-17 on the Calm treatment. */
const SECTIONS = [
  ['The working day', [
  ['today', 'Today', 'One page: what is next, and what needs you.',
   'Replaces the shared "Hello, {Name}!" template (audit finding 1: all three personas got the same home). A clinician needs a worklist: the next visit as an ink hero with <b>Open call preview</b> (the old file\'s best screen, kept alive), the day as rows, and a rail where a patient\'s honest "Requested" state from the patient app lands as <b>Needs your confirmation</b>: Confirm or Propose a time, no approval hourglass.', true],
  ['newvisit', 'New visit composer', 'Availability is the interface; the visit lands honest.',
   'Replaces the old "Make An Appointment" wizard — three numbered steps that labeled Max Well "Establish Patient" on one screen and "New Patient" on the next, made the clinician set a "$50 patient responsibility" mid-booking, and ended on a cartoon hourglass ("Scheduled! Please wait for approval"). Here <b>your open hours are the interface</b>: booked slots are grayed and say "booked", short days say why. The visit is real the moment you save — the row says <b>Unconfirmed</b> until the patient taps yes (descriptive, not a gate; June\'s call, July 23). A search with no match says so and offers <b>+ Add a patient</b> — the honest stub for the batch-3 screen. The at-home-draw tile hands off to the draw composer.', true],
  ['call', 'Call preview', 'Identity, consent and readiness before a single frame is sent.',
   'The old file\'s best-written screen, kept alive — its disclosure voice survives nearly verbatim in <b>Before you join</b>. Who you are about to see and what she shared (A1C flagged, meds, allergy, her booking note), your own camera and sound checked against a real preview ("This is what Maya will see"), and the waiting-room mirror: "In the waiting room · joined 8:56" is the provider side of the patient\'s "Dr. Anand has been told you are here."', true],
  ['incall', 'In-call, provider side', 'The screen the old file never had.',
   'The old file had no in-call UI anywhere — "Start Appointment" led nowhere. Dark surface carries white and volt only (electric is illegal at small sizes on ink). The chart rides in a rail: a <b>live note</b> that saves to the record, her reason for booking, results, meds — the provider never leaves the patient\'s face to check a number. End call is coral with an ink glyph, never white-on-coral.', true],
  ['wrap', 'Wrap-up', 'A visit that ends in a dead screen teaches nothing.',
   'The patient app\'s rule, applied provider-side. The note drafted in-call arrives here to be signed ("Once signed, Maya can read this note in her app, in these words"). The three next steps — order the repeat draw, book the follow-up, send a message — are exactly what feeds the patient\'s "What happens next" tracker, and the rail shows her tracker filling in as you finish. Nothing on her side says "pending approval": it names what you are doing, as you do it.', true],
  ]],
  ['Schedule', [
  ['schedule', 'Schedule & availability', 'The week at a glance, availability beside it.',
   'The 13-field practice form and weekly availability editor never belonged on a phone; this is why the portal is desktop. Video visits in electric, draws in ink, blocked time hatched. The guardrail copy survives verbatim: "Changing your availability will not change your existing upcoming appointments."', true],
  ]],
  ['A visit', [
  ['visit', 'Visit detail & crew dispatch', 'The job card, rebuilt for the desk.',
   'The old Work Details IA, preserved and translated: status, patient (contactable), orders, where, instructions, one primary action. The work status machine stays but speaks plain language: Requested, Confirmed, Jennifer accepted, En route, Collected, Dropped at Quest. No <b>#WO1</b>, no "Pending Crew" anywhere.', true],
  ['dispatch', 'Order a draw at her home', 'The "create work order" screen, retired.',
   'The old "Make A Service Request" was where the work-order grammar was born: a WORK TYPE checklist priced per row, a crew marketplace sorted by price ("travel cost may differ"), an invoice-first preview quoting <b>$77.50–$100</b>, and a designed-in failure loop — "your patient has canceled this appointment due to the high cost of travel" → reschedule with a cheaper crew. Here: orders in clinical words (a lipid panel surfaces the fasting rule and trims the afternoon windows; removing it takes both away), and <b>Maya picks the window</b> from the ones you offer — her pick is the confirmation, no counter-proposal loop (June\'s call, July 23). The crew row is a preference, not an assignment; the lab and the requisition are dispatch-side facts, stated under Orders instead of asked. Entry points: <b>Order</b> on the wrap-up, the draw tile in the visit composer, <b>Order an at-home draw</b> in the patient preview and result panel, <b>+ Add an order</b> on the job card.', true],
  ]],
  ['Patients', [
  ['patients', 'Patients roster', 'A list that answers "who am I seeing, and when."',
   'Search genuinely filters as you type (the old app\'s provider search was a 7-field database form asking patients for NPI numbers; here one box does it). Status chips reuse the patient app\'s tint grammar: green settled, blue in motion, coral needs you.', true],
  ['preview', 'Patient preview', 'The chart peek, without leaving the roster.',
   'Click any row: recent results, upcoming visits, and the two actions a provider actually takes from here: book a visit, order an at-home draw. A full chart is a later screen; this is the 80% case.', true],
  ]],
  ['Messages', [
  ['messages', 'Messages', 'One inbox: patients and crew, labeled by role.',
   'The sidebar badge said 4 and the route was dead. Threads left, conversation right; opening a thread marks it read and the badge follows, live. Crew threads sit beside patient threads, labeled by role, never a codename. The composer says where words go: patient replies join the record; crew messages stay between you and the crew.', true],
  ]],
  ['Results', [
  ['results', 'Results inbox', 'Every result lands here flagged, and leaves reviewed.',
   'The worklist the roster only hinted at. Chips reuse the tint grammar — green settled, coral needs you. The slide-over answers "what do I do about it": values with goal and reference lines, the previous value for trend, lab provenance, then the same three verbs as the wrap-up: message her, book the follow-up, order the repeat draw. "Maya was told her result is in. She sees it with the same flag, in plain words, once you mark it reviewed."', true],
  ]],
];

/* Not built yet — the honest list, same status grammar as the
   patient board (planned: next up; parked: deliberately out for R1). */
const BACKLOG = [
  ['Schedule', [
    ['Edit hours form', 'planned'],
    ['Out of office', 'planned'],
  ]],
  ['A visit', [
    ['Cancel / reschedule a visit', 'planned'],
  ]],
  ['Patients', [
    ['Full chart & results history', 'planned'],
    ['Add a patient', 'planned'],
  ]],
  ['Account & practice', [
    ['Sign in (identity only, no funnel)', 'planned'],
    ['Practice settings', 'planned'],
    ['Provider onboarding (the 8-step funnel, collapsed)', 'planned'],
    ['Earnings / payouts', 'parked'],
  ]],
];

/* Flow lanes for a future flow map; same shape as the patient FLOWS. */
const FLOWS = [
  ['A draw request, end to end', ['today', 'visit'],
   'Patient requests at home → Needs your confirmation → Confirm → dispatch → track to Dropped off.'],
  ['The video visit', ['today', 'call', 'incall', 'wrap'],
   'Today hero → call preview → in-call → wrap-up: sign the note, order the draw, book the follow-up.'],
  ['A result, reviewed', ['results'],
   'Flagged in the inbox → the slide-over → message her, book the follow-up, or order the repeat draw.'],
  ['Managing the week', ['schedule'],
   'Week grid + availability; editing hours never touches existing bookings.'],
  ['Booking a visit, provider-side', ['today', 'newvisit'],
   '+ New visit → the composer: your open hours are the interface; it lands in the patient\'s app and stays Unconfirmed in yours until she says yes.'],
  ['Ordering a draw, provider-side', ['wrap', 'dispatch', 'visit'],
   'Wrap-up → the draw composer, prefilled from your note → the job card: Maya picks her window, a crew accepts, the tracker fills in.'],
  ['Knowing your panel', ['patients', 'preview', 'visit'],
   'Roster → preview → the visit or a new order.'],
];
