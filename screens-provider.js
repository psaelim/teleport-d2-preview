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
  ]],
  ['Schedule', [
  ['schedule', 'Schedule & availability', 'The week at a glance, availability beside it.',
   'The 13-field practice form and weekly availability editor never belonged on a phone; this is why the portal is desktop. Video visits in electric, draws in ink, blocked time hatched. The guardrail copy survives verbatim: "Changing your availability will not change your existing upcoming appointments."', true],
  ]],
  ['A visit', [
  ['visit', 'Visit detail & crew dispatch', 'The job card, rebuilt for the desk.',
   'The old Work Details IA, preserved and translated: status, patient (contactable), orders, where, instructions, one primary action. The work status machine stays but speaks plain language: Requested, Confirmed, Jennifer accepted, En route, Collected, Dropped at Quest. No <b>#WO1</b>, no "Pending Crew" anywhere.', true],
  ]],
  ['Patients', [
  ['patients', 'Patients roster', 'A list that answers "who am I seeing, and when."',
   'Search genuinely filters as you type (the old app\'s provider search was a 7-field database form asking patients for NPI numbers; here one box does it). Status chips reuse the patient app\'s tint grammar: green settled, blue in motion, coral needs you.', true],
  ['preview', 'Patient preview', 'The chart peek, without leaving the roster.',
   'Click any row: recent results, upcoming visits, and the two actions a provider actually takes from here: book a visit, order an at-home draw. A full chart is a later screen; this is the 80% case.', true],
  ]],
];

/* Not built yet — the honest list, same status grammar as the
   patient board (planned: next up; parked: deliberately out for R1). */
const BACKLOG = [
  ['The working day', [
    ['Call preview (identity + audit trail)', 'planned'],
    ['In-call UI, provider side', 'planned'],
    ['New visit composer', 'planned'],
  ]],
  ['Schedule', [
    ['Edit hours form', 'planned'],
    ['Out of office', 'planned'],
  ]],
  ['A visit', [
    ['Dispatch composer (window + crew)', 'planned'],
    ['Cancel / reschedule a visit', 'planned'],
  ]],
  ['Patients', [
    ['Full chart & results history', 'planned'],
    ['Add a patient', 'planned'],
  ]],
  ['Account & practice', [
    ['Sign in (identity only, no funnel)', 'planned'],
    ['Practice settings', 'planned'],
    ['Messages', 'planned'],
    ['Results inbox', 'planned'],
    ['Provider onboarding (the 8-step funnel, collapsed)', 'planned'],
    ['Earnings / payouts', 'parked'],
  ]],
];

/* Flow lanes for a future flow map; same shape as the patient FLOWS. */
const FLOWS = [
  ['A draw request, end to end', ['today', 'visit'],
   'Patient requests at home → Needs your confirmation → Confirm → dispatch → track to Dropped off.'],
  ['The video visit', ['today', 'preview'],
   'Today hero → Open call preview → in-call → summary (call screens are planned).'],
  ['Managing the week', ['schedule'],
   'Week grid + availability; editing hours never touches existing bookings.'],
  ['Knowing your panel', ['patients', 'preview', 'visit'],
   'Roster → preview → the visit or a new order.'],
];
