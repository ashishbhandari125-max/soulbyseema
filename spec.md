# SoulBySeema

## Current State
A premium spiritual healing website with animated splash screen, Sacred Lotus hero, chakra-based About section, 15 services, courses, testimonials, booking popup (WhatsApp), ambient sound player, and admin panel at /admin.

## Requested Changes (Diff)

### Add
1. **Aura Visualizer** -- On site load, generate a personalized aura color/profile for the visitor (based on time, date, sacred algorithm). Show as a glowing animated aura badge near hero or as a floating widget.
2. **Daily Sacred Message** -- A section/widget that shows a new spiritual affirmation/message every day. Changes automatically each day. Encourages return visits.
3. **Soul Reading Quiz** -- An interactive 4-question quiz (birth month, preferred element, chakra color, life intention) that generates a personalized spiritual profile and ends with a CTA to book with Seema.
4. **Floating Cursor Particles** -- Animated light/star particles that follow the mouse cursor across the entire site, creating a sacred/magical feel.
5. **Moon Phase Widget** -- Shows today's live moon phase with name and spiritual meaning. Displayed as a widget (sidebar or hero area).

### Modify
- Home page: integrate all 5 new features/sections seamlessly into existing layout
- No changes to existing backend, booking, sound, or admin features

### Remove
- Nothing removed

## Implementation Plan
1. Create `CursorParticles.tsx` -- canvas/DOM based cursor particle trail using mouse events, golden/violet particles
2. Create `AuraVisualizer.tsx` -- generates aura color from current timestamp algorithm, animated glow badge widget
3. Create `DailySacredMessage.tsx` -- array of 30+ spiritual messages, picks one based on day-of-year, animated card
4. Create `SoulReadingQuiz.tsx` -- 4-step quiz with spiritual results and booking CTA
5. Create `MoonPhaseWidget.tsx` -- calculates moon phase from current date algorithmically (no API needed), shows phase name + spiritual meaning
6. Update `Home.tsx` and `App.tsx` to include all new components
