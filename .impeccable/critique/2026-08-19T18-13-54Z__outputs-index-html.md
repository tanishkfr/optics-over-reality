---
target: Review the current implementation of the A2 assignment
total_score: 20
max_score: 32
na_heuristics: 7,10
p0_count: 1
p1_count: 2
timestamp: 2026-08-19T18-13-54Z
slug: outputs-index-html
---
## Design Health Score

| # | Heuristic | Score | Key issue |
|---|---|---:|---|
| 1 | Visibility of System Status | 2/4 | The stage counter stays at `01 / 03`, and the auto-scroll gives little confirmation of where the viewer is in the experience. |
| 2 | Match System / Real World | 3/4 | The viewfinder metaphor maps well to promotional framing, but `LIVE COMPOSITION / FOCUS 100` is decorative rather than meaningful. |
| 3 | User Control and Freedom | 2/4 | The main action auto-scrolls after 420ms; there is no reset or replay state. |
| 4 | Consistency and Standards | 3/4 | Typography, spacing, and coral signal color are coherent, but faux telemetry and labels behave like atmosphere more than interface. |
| 5 | Error Prevention | 3/4 | The interaction is low-risk and simple, although the button does not communicate that it permanently changes the page state. |
| 6 | Recognition Rather Than Recall | 3/4 | `EXPAND THE FRAME` is clear and the stages are labelled, but the relationship between frame and controlled visibility must be inferred. |
| 7 | Flexibility and Efficiency | n/a | This is an experience artifact, not an operational interface. |
| 8 | Aesthetic and Minimalist Design | 3/4 | Strong hierarchy, but grain, crosshair, grid, telemetry, footer metadata, and four callouts compete with the evidence. |
| 9 | Error Recovery | 1/4 | No reset/replay control and no explicit way to return to the first state. |
| 10 | Help and Documentation | n/a | The artifact is intended to be self-explanatory rather than documented. |
| **Total** |  | **20/32** | **Good foundations, meaningful conceptual gaps.** |

## Design Specificity Verdict

**LLM assessment:** Medium-low specificity. The expanding frame is an authored mechanism that fits the thesis, and the restrained institutional tone is appropriate. However, the stock skyline, `WORLD-CLASS`, faux camera telemetry, and broad labels could be reused for almost any urban-development critique. The page currently feels more like a polished visual treatment of the idea than an artifact grounded in this particular A1 research.

**Deterministic scan:** One warning: the detector flagged `WORLD-CLASS` in `outputs/index.html` as a marketing buzzword. This is partly a false positive because the phrase intentionally simulates official promotional language inside the frame. The underlying concern is still valid: generic campaign language contributes to category-interchangeability if it is not anchored to a specific case or event.

## Overall Impression

The sequence is legible and the central metaphor is easy to grasp: a polished view can exclude uncomfortable context. But the interaction currently reveals annotations, not the actual reality outside the frame. The user learns the conclusion from copy more than from the act of expanding. The strongest opportunity is to replace generic categories with a small amount of traceable A1 evidence and make that evidence physically enter from outside one continuous frame.

## What's Working

- The three-step rhythm is clear: promotional image, reveal, conclusion. It fits a 30–60 second viewing window.
- `EXPAND THE FRAME` is a direct, understandable primary action, and the frame metaphor is appropriate to the insight.
- The first screen is not immediately melodramatic. It plausibly resembles an official city/event communication image before the critique arrives.

## Priority Issues

### [P0] The artifact contains no traceable A1 evidence

**Why it matters:** The assignment is to bring research findings to life. The current reveal uses `DISPLACED COMMUNITIES`, `DISRUPTED LIVELIHOODS`, `RESTRICTED ACCESS`, and `MISSING STORIES`, but these are broad categories, not evidence. A professor can reasonably ask: Which city? Which event? Whose livelihood? What did the group actually find? The final paragraph also says “Our research found” without showing the research basis.

**Fix:** Add one specific case from the A1 material and 2–3 evidence units: a named place/event, what changed, who was affected, and a short source/reference label. If the source material cannot support a category, delete that category rather than presenting it as a finding. Do not add invented numbers or quotes.

### [P1] The “expansion” is a scene change, not a continuous reveal

**Why it matters:** Stage 1 and Stage 2 use separate full-bleed background layers with the same remote image. The viewer scrolls to another section where a larger frame appears and labels fade in. The metaphor is stated, but the user does not actually see something that was outside the original image enter the field of view.

**Fix:** Use one continuous visual canvas. Keep the original frame visible as a smaller boundary while the surrounding area reveals actual contextual evidence, imagery, map fragments, or source-backed annotations. The outside material should be visually distinct but spatially connected to the original frame.

### [P1] The artifact does not explain who or what controls the frame

**Why it matters:** “It was outside the frame” explains exclusion but not the mechanism of exclusion. A viewer may interpret the result as accidental cropping rather than beautification, development, media framing, or event-driven image management. This weakens the causal relationship between the research and the interface.

**Fix:** Add one concise, evidence-backed line at the reveal: who selected the official view, what was prioritized, and what consequence became less visible. Use the actual A1 wording or cite the relevant case; do not imply intentional concealment if the research only demonstrates selective visibility.

### [P2] Decorative interface language is competing with the argument

**Why it matters:** `LIVE COMPOSITION`, `FOCUS / 100`, grain, crosshair, grid, `VISIBLE / 01`, `CONTEXT / 04`, and multiple metadata lines create a convincing art direction but not more understanding. The four labels also arrive as a list of issues, which risks reading like a generic activist poster.

**Fix:** Remove at least half of the faux telemetry and keep only the visual devices that make the frame metaphor legible. Spend the recovered attention on evidence labels, source references, and a clearer causal sentence.

## Persona Red Flags

**Jordan — first-time viewer:** Understands the button, but may not know whether the image is a real city campaign, a fictional example, or a specific A1 case. After the reveal, Jordan can repeat the categories but cannot name what was actually hidden or why it was hidden.

**Research-skeptic professor:** Will ask “What is your evidence?” and “Which part came from A1?” The current artifact has no case, citation, date, event, or source trail to answer those questions.

**Keyboard/reduced-motion viewer:** Reduced-motion CSS exists, but the button does not begin with `aria-expanded="false"`, there is no reset, and the stage counter does not update. A viewer who wants to inspect the sequence again has to scroll manually and reload to restore the original state.

## Minor Observations

- The topbar remains `01 / 03` after the interaction, which makes the navigation metadata feel performative rather than functional.
- The remote Unsplash image and Google Fonts import make the piece fragile in an offline classroom or critique setup. Bundle a local image/font fallback if possible.
- The reveal labels use qualitative language, which is appropriate when evidence is unavailable, but they should be explicitly marked as “research themes” or replaced with verified case material.
- The opening image is a generic skyline; a sourced image connected to the selected A1 case would immediately improve both assignment fit and memorability.
- The artifact is visually polished enough that its evidentiary absence may be overlooked during a quick review. That makes the missing research connection more, not less, important to fix.

## Questions to Consider

- What exact city/event/case from A1 is this frame showing?
- What is the smallest piece of evidence that could enter the frame and make the reveal undeniable?
- Is the outside reality intentionally hidden, selectively presented, or simply not included in the official image? Which wording does the research support?
- Which three decorative metadata elements can be removed so the evidence becomes the visual climax?
