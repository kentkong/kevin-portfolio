# Revival UX/Product Design Plan

## Working title

REVIVAL

Visualise your motorcycle build before you build it.

## Product origin

Revival is an AI-assisted motorcycle renovation and customisation product concept
based on a genuine problem experienced while planning modifications to a classic
Triumph motorcycle.

The stronger framing is not simply "customise a motorcycle." Revival should help
riders imagine how an older 1960s or 1970s motorcycle could be renovated into a
dream cafe racer, desert sled, scrambler, tracker, restomod, or other custom
build before committing to expensive or difficult-to-reverse decisions.

This document is a setup scaffold. It does not contain validated research,
prototype findings, finished UI, fake imagery, or compatibility claims.

## Evidence integrity rules

- Do not invent interviews, participants, survey responses, usability tests,
  quotes, metrics, findings, validation, parts compatibility, supplier
  relationships, or real parts databases.
- Treat the owner's Triumph planning experience as genuine origin evidence, not
  generalised user research.
- Label anything unproven as one of:
  - ASSUMPTION
  - TO INVESTIGATE
  - TO TEST
  - FUTURE OPPORTUNITY
- Distinguish between:
  - the owner's actual motorcycle/source material
  - inspiration/reference images
  - generated experiments
  - eventual product UI/prototype artefacts

## 1. Proposed UX case-study structure

1. REVIVAL
   - Visualise your motorcycle build before you build it.
   - AI-assisted product concept for planning classic motorcycle renovation.

2. BUILDING BLIND
   - Introduce the core problem: individual modifications may be easy to imagine,
     but the complete motorcycle is hard to see before money and work are
     committed.

3. IT STARTED WITH MY OWN MOTORCYCLE
   - Use the genuine Triumph planning experience as the origin story.
   - Show what is known, what was considered, and what was uncertain.

4. HOW DO RIDERS PLAN A BUILD?
   - Explore the fragmented current experience.
   - Sources may include photos, parts sites, forums, social media, custom-bike
     inspiration, Photoshop/AI experiments, and imagination.
   - This remains TO INVESTIGATE until documented.

5. I KNOW WHAT I WANT. I JUST CAN'T SEE IT YET.
   - Frame the core opportunity: riders may know desired parts or styles, but
     struggle to understand the whole build.

6. WHAT IF THE MOTORCYCLE BECAME THE INTERFACE?
   - Introduce the central interaction principle:
     SELECT -> CHANGE -> VISUALISE -> REFINE.

7. FROM IDEA TO FLOW
   - Product architecture, primary flow, interaction alternatives, sketches,
     and low-fidelity wireframes.

8. BUILD YOUR MOTORCYCLE
   - Component selection and component-level decisions.

9. KEEP. CHANGE. REMOVE.
   - Decision model for selectable components.
   - Include locked/preserved components.

10. SEE IT BEFORE YOU BUILD IT
    - AI-assisted visualisation based on explicit component selections.

11. ORIGINAL <-> REVIVAL
    - Comparison experience, potentially including slider, side-by-side, or
      toggle patterns.

12. WHAT SHOULDN'T AI CHANGE?
    - Component preservation and reliability problem.
    - Explore how Revival prevents unintended changes to locked components.

13. TEST -> LEARN -> REFINE
    - Reserved for genuine testing and iteration later.

14. THE FINAL EXPERIENCE
    - Mature high-fidelity prototype only after process evidence exists.

15. WHAT'S NEXT
    - Future opportunities: parts compatibility, supplier integration, pricing,
      build cost, workshop recommendations, saved garages, multiple motorcycles,
      community/shared builds, and AI recommendations.

## 2. Initial product architecture

### Input layer

- Motorcycle photo upload
- Optional multiple-angle upload later
- Source photo quality checks

### Identification layer

- Manufacturer identification
- Model identification
- Approximate year/version where possible
- User confirmation/correction

### Component map layer

- Detected selectable motorcycle regions:
  - tank
  - seat
  - handlebars
  - tyres
  - wheels
  - front mudguard
  - rear mudguard
  - headlight
  - indicators
  - exhaust
  - suspension
  - side panels
  - paint / finish
  - frame colour
  - number plate / tail tidy
- Manual correction or manual outline is TO INVESTIGATE.

### Decision layer

- KEEP
- CHANGE
- REMOVE where appropriate
- LOCK / PRESERVE for components that must not be altered by AI

### Style and replacement layer

- Conceptual options, not a real parts catalogue at this stage.
- Example tank taxonomy:
  - Original
  - Classic
  - Competition / desert
  - Cafe-inspired
  - Custom
  - Paint / finish

### Visualisation layer

- AI generates a coherent proposed build based on selected component changes.
- AI should preserve locked components.
- Any compatibility or mechanical feasibility must be labelled as unvalidated
  unless supported by real data later.

### Comparison layer

- Original vs Revival
- Potential before/after slider
- Side-by-side view
- Changed vs preserved component summary

### Build memory layer

- Saved build
- Selected modifications
- Preserved components
- Possible build specification
- Version history / undo is TO INVESTIGATE.

## 3. Primary user flow

1. UPLOAD
   - User uploads a photograph of their existing motorcycle.

2. IDENTIFY
   - Revival attempts to identify manufacturer, model, approximate year/version,
     and visible components.
   - User confirms or corrects the identification.

3. COMPONENT MAP
   - Revival identifies selectable motorcycle regions.
   - The motorcycle becomes an interactive visual canvas.

4. SELECT
   - User clicks/taps a visible motorcycle component.
   - Example: FUEL TANK.
   - Selected component receives a restrained visual highlight.

5. DECIDE
   - User chooses KEEP, CHANGE, or REMOVE where appropriate.

6. CHOOSE REPLACEMENT / STYLE
   - If CHANGE is selected, Revival presents conceptual alternatives.

7. BUILD SELECTIONS
   - User creates a modification set over time.
   - Example:
     - Tank: CHANGE
     - Seat: CHANGE
     - Tyres: CHANGE
     - Rear mudguard: REMOVE / SHORTEN
     - Paint: CHANGE
     - Engine: KEEP
     - Frame: KEEP
     - Exhaust: KEEP

8. GENERATE REVIVAL
   - AI generates a visualisation based on explicit component selections.

9. COMPARE
   - User compares ORIGINAL <-> REVIVAL.

10. REFINE
    - User returns directly to individual components and changes a decision.

11. SAVE BUILD
    - Save visual concept, selected modifications, preserved components, and
      possible build specification.

## 4. Component-selection interaction model

Primary principle:

The motorcycle itself should become the interface.

The core product should not be a prompt-first experience such as:

Text box -> "Make my motorcycle a cafe racer" -> Generate.

Instead, the interface should communicate decisions through visual selection:

- Click/tap tank.
- Choose CHANGE.
- Choose replacement direction.
- Click/tap engine.
- Choose KEEP / LOCK.
- Click/tap rear mudguard.
- Choose REMOVE / SHORTEN.
- Generate Revival.

AI operates behind the experience rather than becoming the experience itself.

### Interaction questions to investigate

- How does the user know which components are selectable?
- How can highlights be visible without covering the bike in hotspots?
- What happens if Revival identifies the wrong motorcycle?
- What happens if Revival identifies a component incorrectly?
- How does the user correct a selected region?
- Can the user manually outline/select a component if detection fails?
- Which components can realistically be removed?
- How do replacement/style categories work?
- How do we distinguish visual inspiration from an actual compatible part?
- How do locked components remain preserved?
- How does undo/history work?
- How does the interaction work on mouse/desktop?
- How does the same interaction work on touch/mobile?
- How much motorcycle terminology should the user need to know?

## 5. Screens and states eventually needed

### Product screens

- Landing / project introduction
- Upload motorcycle
- Upload quality / guidance
- Identification result
- Identification correction
- Component detection / mapping
- Interactive motorcycle canvas
- Component selected state
- Component detail panel
- KEEP / CHANGE / REMOVE decision state
- Replacement/style selection
- Locked/preserved component state
- Modification summary
- Generate Revival
- Generating / processing state
- Generated Revival view
- Original vs Revival comparison
- Before/after slider
- Refinement state
- Save build
- Saved build detail
- Build history / alternatives
- Error and recovery states

### Case-study sections

- Problem
- Origin story
- Assumptions
- Discovery plan
- Current journey
- Opportunity
- Product architecture
- Primary flow
- Interaction exploration
- Sketches
- Low-fidelity wireframes
- UI exploration
- Prototype
- Testing / feedback
- Iteration
- Final concept
- Future opportunities

## 6. UX artefacts to create

- Evidence inventory
- Problem statement
- Assumptions map
- Product hypothesis
- User needs hypothesis
- Current planning journey
- Opportunity statement
- Jobs-to-be-done hypothesis
- Competitive/reference scan
- Product principles
- Product architecture diagram
- Component taxonomy
- Primary user flow
- Component-selection flow
- KEEP / CHANGE / REMOVE model
- Locked/preserved component model
- Low-fidelity sketches
- Wireframes
- Prototype plan
- Testing plan
- Feedback log
- Iteration log
- Final case-study narrative

## 7. Genuine assets/evidence needed from the owner

- Photos of the actual Triumph:
  - side profile
  - front three-quarter
  - rear three-quarter
  - cockpit/handlebars
  - tank
  - seat
  - wheels/tyres
  - mudguards
  - engine/frame
  - exhaust
- Existing modification ideas
- Parts or style references genuinely considered
- Notes from the real planning process
- Decisions that feel expensive, risky, or hard to reverse
- Current uncertainty areas
- Inspiration bikes clearly labelled as reference, not research
- Any real sketches, lists, saved links, screenshots, forum notes, or parts
  pages used in the planning process
- Clarification of which supplied images are:
  - actual owned/source bike
  - inspiration/reference
  - AI/composite experiment
  - UI inspiration

## 8. Artefacts we can create together using Cursor/Figma

### Cursor

- Evidence inventory markdown
- Case-study outline
- Product brief
- Assumptions map
- User-flow documentation
- Component taxonomy
- Interaction-state documentation
- Case-study page implementation
- Prototype UI implementation after wireframes are approved

### Figma

- Moodboard/reference board
- Journey map
- Architecture diagram
- Primary flow diagram
- Component-selection interaction sketches
- Low-fidelity wireframes
- UI exploration
- Prototype screens
- Before/after comparison explorations

## 9. Proposed repository/folder structure

Recommended structure when implementation begins:

```txt
docs/revival/
  README.md
  evidence-inventory.md
  assumptions.md
  product-architecture.md
  primary-user-flow.md
  component-model.md
  research-plan.md

public/projects/revival/
  source/
  processed/
  README.md

src/app/projects/revival/
  page.tsx

src/components/projects/revival/
  revival-case-study.tsx
  revival-flow-diagram.tsx
  revival-component-model.tsx
  revival-evidence-note.tsx

src/lib/revival.ts
```

Only this planning README has been created for now.

## 10. Portfolio 2.0 integration

- Primary discipline: UX & Product Design.
- Secondary relevance: AI & Automation.
- Revival should eventually become a major Selected Work project only after
  enough genuine process material exists.
- Do not replace an existing Selected Work project yet.
- In the discipline navigator, Revival can be described as a product concept in
  development until the case study matures.

## 11. Recommended build sequence from tomorrow onward

1. Create evidence inventory.
2. Classify supplied motorcycle images as actual/source/reference/experiment.
3. Write the first product brief.
4. Define the problem statement.
5. Separate known evidence from assumptions.
6. Map the current motorcycle-planning journey.
7. Draft product architecture.
8. Draft the component taxonomy.
9. Map the primary flow.
10. Explore component selection interactions.
11. Create low-fidelity sketches.
12. Create wireframes.
13. Review UX before visual design.
14. Explore UI direction.
15. Prototype the key flow.
16. Plan genuine testing.
17. Capture feedback.
18. Iterate.
19. Build the case-study page.
20. Integrate into UX & Product Design and eventually Selected Work.

## 12. First task for tomorrow

Create the Revival evidence inventory.

The first session should classify every available image, note, reference, and
idea into:

- actual Triumph/source evidence
- inspiration/reference
- assumption
- product hypothesis
- future opportunity

This protects evidence integrity before any UX artefacts or UI design are made.
