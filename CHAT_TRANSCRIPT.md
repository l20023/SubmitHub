# SubmitHub

## USER

Please initialize a react website.

## CURSOR

Checking the workspace, then scaffolding a React app with Vite (recommended for new projects).

Found an existing `react-app` (Vite + React). Verifying it's complete and installing dependencies.

Installing dependencies for the existing Vite + React + TypeScript project in `react-app` (no `node_modules` yet).

Here’s what’s in place:

### Already in your repo: `react-app/`

It’s a **Vite + React 19 + TypeScript** app (not a fresh `create-vite` run from this chat—the files were already there). I **installed dependencies** (`npm install`) and **confirmed** `npm run build` completes successfully.

### Run it locally

```bash
cd /Users/leo-minhkustermann/Developer/NLP/react-app
npm run dev
```

Then open the URL Vite prints (usually `http://localhost:5173`).

### Useful scripts


| Command           | Purpose                    |
| ----------------- | -------------------------- |
| `npm run dev`     | Dev server with HMR        |
| `npm run build`   | Production build → `dist/` |
| `npm run preview` | Serve the production build |
| `npm run lint`    | ESLint                     |


If you instead wanted a **new** app at the **repo root** or a **different name/stack** (e.g. Next.js), say what you prefer and we can align it.

## USER

Tuesday, May 5, 2026, 11:27 AM (UTC+8)

Screen 1: Active Assignments Dashboard
The page layout is divided into four main areas: a top navigation header, a primary page title, a central list of assignment cards, and a footer at the bottom. The header contains a logo on the left, three central links for assignments, submissions, and grades, and a user profile section on the right. The page title "Active Assignments" appears as a large header above the content. Each assignment is contained within its own rectangular card. Inside these cards, the left side displays the title, due date, and description, while the right side contains a status badge and an action button. The footer is organized into three columns for TA emails, professor contact info, and course links.

Visual Description: The screen has a clean, spacious look with a white background and deep navy text. A primary purple color is used for branding and the "Logout" and "Upload Files" buttons. Status badges use distinct colors: a soft yellow for "Pending" and a soft green for "Submitted."

Screen 2: View Submission Detail
The structure of the assignment card changes when the "View Submission" button is clicked. The card expands vertically to reveal a new section at the bottom. This new section includes a "Submitted Files" heading followed by horizontal rows representing each file. Each file row shows the filename on the left and the file size on the right. The action button in the top right of the card changes its label to "Hide Submission." A small disclaimer note is positioned at the very bottom of the card's internal area.

Visual Description: The expanded view maintains the card's rounded-corner design. The "Submitted" badge is highlighted in green. The file rows have a slightly darker gray background than the rest of the white card, making them stand out as individual items. The overall design is highly organized and uses vertical stacking to show file details.
Screen 3: File Upload Interface

The structure of the assignment card changes when the "Upload Files" action is initiated. The card expands vertically to include a large interactive drop zone and a secondary action area at the bottom. The top portion of the card retains the assignment title, due date, and description on the left. On the right, the "Pending" status badge remains, but the primary button label has changed to "Cancel."

The central part of the expanded card features a large upload area defined by a light gray dashed border. Inside this area, there is a centered cloud upload icon accompanied by the instructional text "Drag and drop files here, or browse." The word "browse" is styled as a clickable link. At the very bottom right of the card, outside the dashed upload zone, a solid purple "Submit" button is positioned to finalize the process.

Visual Description: The interface maintains the clean, white aesthetic of the previous screens. The dashed border of the upload zone is a soft gray, providing a clear but non-intrusive target for the user. The primary purple color is used consistently for both the "Cancel" and "Submit" buttons, as well as the "browse" link. The "Pending" badge uses the same soft yellow theme seen in the dashboard view. The overall layout is focused and functional, guiding the user through the specific task of file submission.

Target Application (SubmitHub)    The website to be replicated is “SubmitHub”,  a home-work submission portal conceptually similar to standard web-based learning management systems.The implemented webpage’s appearance must visually match the layout shown in the screenshot(Figure 1) as closely as possible.Scope of Implementation•  Main  Page:   The  top  navigation  bar  must  feature  three  distinct  tabs:   “Active  Assign-ments”,  “Past Submissions”,  and “Grades”.  Replicate the main interface for the “ActiveAssignments” tab as depicted in Figure 1.•  Additional Tabs:  Conceptualize and implement the frontend views for the two additionaltabs not shown in the Figure 1:  “Past Submissions” and “Grades”.•  Homework Components:  Individual homework tasks must be represented by dedicatedUI components, as illustrated in the center of Figure 1.•  Account  Indicator:   The  header  must  include  the  “Logout”  button  accompanied  by  avisual indicator of the logged-in user’s initials (e.g., a student named Zayn Thompson mustbe represented by the initials “ZT”).•  Footer:  A standard footer section must be included at the bottom of the interface, repli-cating the layout and information shown in the reference design.•  Functional  Elements:   The  “Upload  Files”  and  “View  Submission”  buttons  must  beimplemented with functional UI components (e.g.,  opening a modal,  navigating to a newview, or expanding a section).  Example UI designs for these components can be found inFigure 2 and Figure 3, or a custom, reasonable UI/UX may be designed.Non-Functional Elements    The “Logout” button is intended to be purely aesthetic and re-quires no functional implementation or routing beyond rendering the button and the user’s initials.Technology  Stack    The  implementation  must  use  the React  framework.   Only  the  frontendimplementation  is  required,  but  the  final  application  must  be  fully  functional  and  run  withouterrors.Mock  Data    Writing  mock  data  to  populate  the  UI  elements  across  all  implemented  tabs  isencouraged to demonstrate frontend functionality.

Use tailwind-css and just states to navigate between the three tabs. The two other screens should be popups that overlay the screen in the center and also darken the background, whenever they are open.


## CURSOR

**Planning Next Steps**

I'm currently evaluating the best way to structure the project's workflow. My focus is on designing a clear and logical sequence of operations to ensure efficient progress toward completing the overall task.

**Structuring Project Workflow**

I'm focusing on outlining the sequence of operations for the project. My priority is to define a logical flow that enables effective advancement towards the project's completion.

**Planning Component Structure**

I am focusing on defining the React component hierarchy and the Tailwind CSS integration. My aim is to establish a clear structural foundation for the "SubmitHub" portal.

**Structuring Project Components**

I am currently defining the structure for the React components and planning the integration of Tailwind CSS. My focus is on establishing a robust foundation for the "SubmitHub" portal's user interface.

**Planning Component Implementation**

I'm currently outlining the implementation steps for the various React components. My focus is on defining the structure and interactions needed for the "SubmitHub" portal's core functionalities.

**Planning UI Structure**

I'm focusing on defining the React component hierarchy and the integration of styling frameworks. My aim is to establish a clear structural foundation for the "SubmitHub" portal, ensuring a well-organized and visually consistent user interface.

**Structuring Project Foundation**

I'm focusing on establishing the core structure and styling for the "SubmitHub" portal. This involves setting up Tailwind CSS, defining mock data, and outlining the primary React components.

## USER



--- name: SubmitHub React Implementation overview: Implement the SubmitHub frontend using React, Vite, and Tailwind CSS. The application will have three main tabs navigable via state, mock data for assignments/grades, and modal-based popups for file uploads and submission viewing. todos: - id: setup-tailwind content: Setup Tailwind CSS (Vite plugin) and clean up existing Vite boilerplate status: pending - id: setup-mock-data content: Define TypeScript types and create mock data in src/data/mockData.ts 10| status: pending - id: implement-layout content: "Implement layout components: Header, Footer, and Layout" status: pending - id: implement-views content: Implement AssignmentCard and the three main views (Active, Past, Grades) status: pending - id: implement-modals content: "Implement modal components: ModalOverlay, UploadModal, ViewSubmissionModal" status: pending 20| - id: integrate-app content: Integrate views and state in App.tsx status: pending isProject: false ---

# SubmitHub Implementation Plan

## 1. Project Setup & Styling

```
30|- Install Tailwind CSS v4 and its Vite plugin (`@tailwindcss/vite`).
```

- Configure `vite.config.ts` to include the Tailwind plugin.
- Update `src/index.css` to import Tailwind CSS and define custom colors (primary purple, deep navy, soft yellow, soft green) if needed, or use standard Tailwind utility classes to match the specs.

## 2. Data & Types

- Create `src/types/index.ts` to define interfaces for `Assignment`, `SubmissionFile`, `Grade`, and `User`.
- Create `src/data/mockData.ts` to supply realistic mock data for Active Assignments, Past Submissions, Grades, and the current logged-in user (e.g., Zayn Thompson, "ZT").

## 3. Core Layout Components

```
40|
```

- `**Header.tsx**`: Contains the SubmitHub logo on the left, three central navigation tabs ("Active Assignments", "Past Submissions", "Grades"), and a user profile section on the right with a visual initials indicator ("ZT") and a purely aesthetic "Logout" button colored in primary purple.
- `**Footer.tsx**`: A three-column layout containing TA emails, professor contact info, and course links.
- `**Layout.tsx**`: A wrapper component to structure the page with the Header at the top, main content area, and Footer at the bottom. The background will be clean white, and text deep navy.

## 4. Reusable UI Components

- `**AssignmentCard.tsx**`: A rectangular card component.
  - **Left side**: Title, due date, description.
  - **Right side**: Status badge (soft yellow for "Pending", soft green for "Submitted") and an action button ("Upload Files" or "View Submission").
  50|

## 5. Main Views (Tabs)

- `**ActiveAssignments.tsx`**: Iterates over pending mock data and displays `AssignmentCard`s.
- `**PastSubmissions.tsx`**: Iterates over submitted mock data and displays `AssignmentCard`s.
- `**Grades.tsx**`: Displays a conceptualized view of graded assignments, utilizing a simple list or table layout.

## 6. Modal Popups

As requested, the detailed screens will open as centered popups that darken the background.
    60|

- `**ModalOverlay.tsx**`: A reusable wrapper that renders a dark semi-transparent backdrop and centers its children.
- `**UploadModal.tsx**`: Displays the file upload interface. Features a dashed light gray border, a cloud icon, and instructional text ("Drag and drop files here, or browse" where "browse" is a purple link). Contains a "Cancel" and a solid purple "Submit" button.
- `**ViewSubmissionModal.tsx**`: Displays submitted files in horizontal rows with filenames and file sizes on a slightly darker gray background. The main action button says "Hide Submission".

## 7. App State Integration

- `**App.tsx**`: Will hold the main state:
  - `currentTab`: Manages navigation between 'active', 'past', and 'grades'.
  - `activeModal`: Manages which modal is currently open ('upload', 'view', or null) and tracks the selected assignment ID.
  70|- It will render the `Layout`, the active view based on `currentTab`, and any active modals.



SubmitHub Implementation Plan

Implement the plan as specified, it is attached for your reference. Do NOT edit the plan file itself.

To-do's from the plan have already been created. Do not create them again. Mark them as in_progress as you work, starting with the first one. Don't stop until you have completed all the to-dos.




# SubmitHub Implementation Plan

## 1. Project Setup & Styling

- Install Tailwind CSS v4 and its Vite plugin (`@tailwindcss/vite`).
- Configure `vite.config.ts` to include the Tailwind plugin.
- Update `src/index.css` to import Tailwind CSS and define custom colors (primary purple, deep navy, soft yellow, soft green) if needed, or use standard Tailwind utility classes to match the specs.

## 2. Data & Types

```
10|
```

- Create `src/types/index.ts` to define interfaces for `Assignment`, `SubmissionFile`, `Grade`, and `User`.
- Create `src/data/mockData.ts` to supply realistic mock data for Active Assignments, Past Submissions, Grades, and the current logged-in user (e.g., Zayn Thompson, "ZT").

## 3. Core Layout Components

- `**Header.tsx**`: Contains the SubmitHub logo on the left, three central navigation tabs ("Active Assignments", "Past Submissions", "Grades"), and a user profile section on the right with a visual initials indicator ("ZT") and a purely aesthetic "Logout" button colored in primary purple.
- `**Footer.tsx**`: A three-column layout containing TA emails, professor contact info, and course links.
- `**Layout.tsx**`: A wrapper component to structure the page with the Header at the top, main content area, and Footer at the bottom. The background will be clean white, and text deep navy.
    20|## 4. Reusable UI Components
- `**AssignmentCard.tsx**`: A rectangular card component.
  - **Left side**: Title, due date, description.
  - **Right side**: Status badge (soft yellow for "Pending", soft green for "Submitted") and an action button ("Upload Files" or "View Submission").

## 5. Main Views (Tabs)

- `**ActiveAssignments.tsx`**: Iterates over pending mock data and displays `AssignmentCard`s.
- `**PastSubmissions.tsx`**: Iterates over submitted mock data and displays `AssignmentCard`s.
  30|- `**Grades.tsx**`: Displays a conceptualized view of graded assignments, utilizing a simple list or table layout.

## 6. Modal Popups

As requested, the detailed screens will open as centered popups that darken the background.

- `**ModalOverlay.tsx**`: A reusable wrapper that renders a dark semi-transparent backdrop and centers its children.
- `**UploadModal.tsx**`: Displays the file upload interface. Features a dashed light gray border, a cloud icon, and instructional text ("Drag and drop files here, or browse" where "browse" is a purple link). Contains a "Cancel" and a solid purple "Submit" button.
- `**ViewSubmissionModal.tsx**`: Displays submitted files in horizontal rows with filenames and file sizes on a slightly darker gray background. The main action button says "Hide Submission".
    40|## 7. App State Integration
- `**App.tsx**`: Will hold the main state:
  - `currentTab`: Manages navigation between 'active', 'past', and 'grades'.
  - `activeModal`: Manages which modal is currently open ('upload', 'view', or null) and tracks the selected assignment ID.
- It will render the `Layout`, the active view based on `currentTab`, and any active modals.



Implement the plan as specified, it is attached for your reference. Do NOT edit the plan file itself.

To-do's from the plan have already been created. Do not create them again. Mark them as in_progress as you work, starting with the first one. Don't stop until you have completed all the to-dos.


please rename the app to SubmitHub.

## CURSOR

Implementing SubmitHub per the plan: starting Tailwind setup and reviewing the project structure.

Fixing accessibility issues in `UploadModal`: adding an `aria-label` for the file input and replacing the nested button with a `<label>`.

Here’s what was implemented for **SubmitHub** in `[react-app](react-app)`:

### Setup

- **Tailwind CSS v4** with `[@tailwindcss/vite](react-app/vite.config.ts)` and theme tokens in `[src/index.css](react-app/src/index.css)` (brand purple, navy text, pending/submitted badge colors, file row gray).
- Removed boilerplate `[App.css](react-app/src/App.css)` and old Vite demo UI; page title set to **SubmitHub** in `[index.html](react-app/index.html)`.

### Data & types

- `[src/types/index.ts](react-app/src/types/index.ts)` — `Assignment`, `SubmissionFile`, `GradeRow`, `User`.
- `[src/data/mockData.ts](react-app/src/data/mockData.ts)` — Zayn Thompson (**ZT**), active/past assignments, grades, footer copy.

### Layout

- `[Header.tsx](react-app/src/components/Header.tsx)` — logo + **SubmitHub**, tab buttons (**Active Assignments** / **Past Submissions** / **Grades**), avatar initials, purple **Logout** (visual only).
- `[Footer.tsx](react-app/src/components/Footer.tsx)` — three columns: TAs, professor, course links.
- `[Layout.tsx](react-app/src/components/Layout.tsx)` — header + main + footer.

### Views

- `[AssignmentCard.tsx](react-app/src/components/AssignmentCard.tsx)` — title, due date, description; **Pending** / **Submitted** badges; purple action button.
- `[ActiveAssignments.tsx](react-app/src/components/views/ActiveAssignments.tsx)`, `[PastSubmissions.tsx](react-app/src/components/views/PastSubmissions.tsx)`, `[Grades.tsx](react-app/src/components/views/Grades.tsx)` — table-style grades view.

### Modals (centered, `bg-black/50` backdrop, **Escape** / backdrop click to close)

- `[ModalOverlay.tsx](react-app/src/components/modals/ModalOverlay.tsx)`
- `[UploadModal.tsx](react-app/src/components/modals/UploadModal.tsx)` — dashed drop zone, **browse** label, drag-and-drop + file list staging, **Cancel** / **Submit** (both purple).
- `[ViewSubmissionModal.tsx](react-app/src/components/modals/ViewSubmissionModal.tsx)` — **Submitted** badge, file rows on `bg-file-row`, **Hide Submission**, disclaimer.

### App state

- `[App.tsx](react-app/src/App.tsx)` — `currentTab` for tabs; `modal` for upload vs view + selected assignment.

Run locally: `cd react-app && npm run dev`. All plan to-dos are **completed**; `npm run build` and `npm run lint` succeed.

Searching the project for references to rename to "SubmitHub".

Updating `package.json` and syncing the lockfile. `index.html` already uses the title "SubmitHub".

Here’s what was updated:

### Changes

- `**[react-app/package.json](react-app/package.json)`** — `name` set to `**submithub**` (lowercase, valid for npm; matches the SubmitHub product name).
- `**[react-app/package-lock.json](react-app/package-lock.json)**` — Root `name` entries synced via `npm install`.
- `**[react-app/index.html](react-app/index.html)**` — Added `<meta name="application-name" content="SubmitHub" />`. The document title was already **SubmitHub**.
- `**[react-app/README.md](react-app/README.md)`** — Title line set to **SubmitHub** with a short project blurb.

The UI already shows **SubmitHub** in the header. The project directory is still `**react-app`**; renaming that folder is optional and would be a manual move if you want the path to match too.

## USER

also react-app should be renamed

## CURSOR

Renaming the `react-app` folder to `submithub` (matching `package.json`) and searching the repo for references to `react-app`.

Here’s what changed:

### Renamed folder

- `**/Users/leo-minhkustermann/Developer/NLP/react-app**` → `**/Users/leo-minhkustermann/Developer/NLP/submithub**`

The npm package name was already `submithub`, so the directory name now matches.

### What you should do locally

- Open the project from `**NLP/submithub**` (or reopen the root `**NLP**` folder) so the IDE uses the new path.
- From a terminal:
`cd /Users/leo-minhkustermann/Developer/NLP/submithub && npm run dev`

No other repo files referenced `react-app`, so nothing else had to be updated.

## USER

All of the following should be exactly named as I call them and use a deep dark violet font color: SubmitHub, Active Assignments, Teaching Assistant Emails, Professor Contact, Course Discord/Forum.

The profile image should have a lighblue background behind the text.

The current violet buttons should have a slightly darker violet. The S logo for SubMitHub is just a circle, and should have a gradient from the button colors to the darker title colors.

the currently opened tab should be highlighted by just coloring the text in the accent/button color. No shadows or background changes.

date should have the following format:
Due: 4/20/2026

The status chip should be to the left of Upload Files/View Submission and these buttons should be vertically centered in the card. Also, the cardtitles should be larger. Please also add Submitted test data. The chip becomes green and upload files should become View Submission. The buttons should be in the same length, such that both button text fit without reshaping/resizing.

The footer must be revised:
The three categories are Teaching Assistant Emails, Professor Contact, Course Discord/Forum.
The generated ta emails should be [ta1@tsinghua.edu.cn](mailto:ta1@tsinghua.edu.cn), 3 of them. Then Professor contact: [prof.nlp@tsinghua.edu.cn](mailto:prof.nlp@tsinghua.edu.cn)
Office hours: Mon-Fri, 2-4 PM

Course Discord/Forum
Join NLP 2026 Discord (mock link)
Forum: forum.tsinghua.edu/nlp

The links in the footer should all be gray, instead of Join NLP 2026 Discord, since it is a link. This one should be the accent/button color.



gradient left to right in the SubmitHub logo. The SubmitHub logo should be bold. the logo has a smaller circle.

The title color should be slightly more blueish and a tiny bit ligher.

The difference between accent color and title color is the saturation/darkness. it is less bright but not pale/pastell.

the entrycard titles are not bold and should use normal text color, not the title color.

View submission should have the colors reversed. The border should be the accent color.

There should be no submithub homework submission portal in the footer section.
The clickable links except for join nlp... should be styled exactly as normal text.

the background of the profile logo should be violet.

/* CSS HEX */
--bright-indigo: #4A42C5ff;
--french-blue: #3D3B84ff;
--lavender: #E1E7FDff;
--bright-snow: #F9FAFBff;
--electric-sapphire: #6164E7ff;
--bright-indigo-2: #443BC4ff;

/* CSS HSL */
--bright-indigo: hsla(244, 53%, 52%, 1);
--french-blue: hsla(242, 38%, 37%, 1);
--lavender: hsla(227, 88%, 94%, 1);
--bright-snow: hsla(210, 20%, 98%, 1);
--electric-sapphire: hsla(239, 74%, 64%, 1);
--bright-indigo-2: hsla(244, 54%, 50%, 1);

/* SCSS HEX */
$bright-indigo: #4A42C5ff;
$french-blue: #3D3B84ff;
$lavender: #E1E7FDff;
$bright-snow: #F9FAFBff;
$electric-sapphire: #6164E7ff;
$bright-indigo-2: #443BC4ff;

/* SCSS HSL */
$bright-indigo: hsla(244, 53%, 52%, 1);
$french-blue: hsla(242, 38%, 37%, 1);
$lavender: hsla(227, 88%, 94%, 1);
$bright-snow: hsla(210, 20%, 98%, 1);
$electric-sapphire: hsla(239, 74%, 64%, 1);
$bright-indigo-2: hsla(244, 54%, 50%, 1);

/* SCSS RGB */
$bright-indigo: rgba(74, 66, 197, 1);
$french-blue: rgba(61, 59, 132, 1);
$lavender: rgba(225, 231, 253, 1);
$bright-snow: rgba(249, 250, 251, 1);
$electric-sapphire: rgba(97, 100, 231, 1);
$bright-indigo-2: rgba(68, 59, 196, 1);

/* SCSS Gradient */
$gradient-top: linear-gradient(0deg, #4A42C5ff, #3D3B84ff, #E1E7FDff, #F9FAFBff, #6164E7ff, #443BC4ff);
$gradient-right: linear-gradient(90deg, #4A42C5ff, #3D3B84ff, #E1E7FDff, #F9FAFBff, #6164E7ff, #443BC4ff);
$gradient-bottom: linear-gradient(180deg, #4A42C5ff, #3D3B84ff, #E1E7FDff, #F9FAFBff, #6164E7ff, #443BC4ff);
$gradient-left: linear-gradient(270deg, #4A42C5ff, #3D3B84ff, #E1E7FDff, #F9FAFBff, #6164E7ff, #443BC4ff);
$gradient-top-right: linear-gradient(45deg, #4A42C5ff, #3D3B84ff, #E1E7FDff, #F9FAFBff, #6164E7ff, #443BC4ff);
$gradient-bottom-right: linear-gradient(135deg, #4A42C5ff, #3D3B84ff, #E1E7FDff, #F9FAFBff, #6164E7ff, #443BC4ff);
$gradient-top-left: linear-gradient(225deg, #4A42C5ff, #3D3B84ff, #E1E7FDff, #F9FAFBff, #6164E7ff, #443BC4ff);
$gradient-bottom-left: linear-gradient(315deg, #4A42C5ff, #3D3B84ff, #E1E7FDff, #F9FAFBff, #6164E7ff, #443BC4ff);
$gradient-radial: radial-gradient(#4A42C5ff, #3D3B84ff, #E1E7FDff, #F9FAFBff, #6164E7ff, #443BC4ff);

These are the colors. first color is the accent color. Second color is the title color. Thirs is the background color of the logo, fourth is the background color of the footer, 5th and 6th are the gradient of the logo.

The border between header/navigation bar and body has a strong shadow.



302e7c. The card titles should be semibold. no border in the submithub logo. also a bit closer to the submithub text. the border of the upload files/view submission border should rather be a shadow. the cards themselves should have no shadows.

but the shadow for the button should be very subtle

okay, no border, just grey border, thin

## CURSOR

Implementing UI updates across components, mock data, and styles. Reading current files.

Implementing CSS theme updates, mock data, footer, header, assignment cards, and ActiveAssignments/App wiring.

Fixing the logo gradient (using an explicit linear gradient) and updating `AssignmentCard`, `ActiveAssignments`, and `App`.

Moving the logo gradient to CSS to satisfy the linter.

Here’s what was updated:

### Theme (`[src/index.css](submithub/src/index.css)`)

- **Buttons**: `--color-brand-primary` → `#5527c7`, hover `#4620a8`.
- **Deep title violet**: `--color-title-violet` → `#2a0d4a` for the labels you listed.
- **Logo**: `.submithub-logo-mark` — circular gradient from button violet to title violet.

### Header (`[Header.tsx](submithub/src/components/Header.tsx)`)

- **SubmitHub** — `text-title-violet`.
- **S** — circle + gradient class (no rounded square).
- **Tabs** — active tab only `**text-brand-primary*`*; inactive `text-slate-600`; no background or shadow; hover is text only (`hover:text-slate-800`).
- **Avatar** — `bg-sky-200`, initials `text-title-violet` (no gray border).

### Footer (`[Footer.tsx](submithub/src/components/Footer.tsx)`)

- Headings exactly: **Teaching Assistant Emails**, **Professor Contact**, **Course Discord/Forum** — all `text-title-violet`.
- **TAs**: `ta1@tsinghua.edu.cn` … `ta3@…` — **gray** mail links.
- **Professor**: `prof.nlp@tsinghua.edu.cn` — **gray** mail link; **Office hours: Mon-Fri, 2-4 PM**.
- **Join NLP 2026 Discord** — **accent** link; **Forum:** URL — **gray** link.
- Footer strip: **SubmitHub** in title violet, rest neutral gray.

### Assignments (`[mockData.ts](submithub/src/data/mockData.ts)`, `[AssignmentCard.tsx](submithub/src/components/AssignmentCard.tsx)`, `[ActiveAssignments.tsx](submithub/src/components/views/ActiveAssignments.tsx)`, `[App.tsx](submithub/src/App.tsx)`)

- Dates like `**Due: 4/20/2026`** (and `**Submitted: …**` on past items).
- **Submitted** sample on the active list: *Transformer Attention Write-up* — green chip, **View Submission**, opens the files modal.
- Card titles larger (`~text-2xl`), `**text-title-violet`**.
- **Chip** sits to the **left** of the action button; row is `**items-center`** so the control column is vertically centered on the card.
- Buttons **fixed** at `w-[12.75rem]` / `h-11` so **Upload Files** and **View Submission** don’t change width.
- **Active Assignments** page title uses `**text-title-violet`**; `onViewSubmission` wired for submitted rows.

If you want inactive nav labels (e.g. **Active Assignments**) in title violet when not selected, say so and we can adjust while keeping the active tab in accent only.

Applying the new color system and UI updates across styles and components.

Checking modals and views for button styling consistency.

Applying updates: adding theme tokens, header shadow, logo gradient, and component fixes.

Adding a lavender outer ring so the logo uses the palette’s third color as its background, with a smaller inner gradient circle.

Here’s what changed:

### Theme (`[src/index.css](submithub/src/index.css)`)

- **Accent** `#4A42C5`, hover `#443BC4` (less bright than before, not pastel).
- **Title** `#454A92` — a bit **bluer and lighter** than french-blue `#3D3B84`, still muted.
- **Lavender** `#E1E7FD`, **bright snow** `#F9FAFB` for footer.
- **Logo gradient**: **left → right** `#6164E7` → `#443BC4` (`.submithub-logo-mark`).
- **Header**: `.submithub-header-bar` with a **strong** layered shadow under the nav.

### Header (`[Header.tsx](submithub/src/components/Header.tsx)`)

- **SubmitHub** is `**font-bold`** with title color.
- **S**: lavender **ring** (`p-[3px]`), **smaller** inner circle `**h-7 w-7`**, **L→R** gradient, `**text-xs`**.
- **Avatar**: `**bg-lavender`** (violet from your set), `**text-title-violet**`.

### Footer (`[Footer.tsx](submithub/src/components/Footer.tsx)`)

- `**bg-bright-snow**` (`#F9FAFB`).
- **Removed** the “SubmitHub · Homework submission portal” block.
- **TA / professor / forum** links: `**text-inherit`** with parent `**text-navy**` (normal body look).
- **Join NLP 2026 Discord** only: `**text-brand-primary`** + `**font-medium**`.

### Cards (`[AssignmentCard.tsx](submithub/src/components/AssignmentCard.tsx)`)

- Titles: `**font-normal**`, `**text-navy**` (not title color).
- **View Submission**: **outline** — white fill, **accent border**, accent label, light `**hover:bg-lavender/70`**.
- **Upload Files**: unchanged solid accent.

### Modal (`[ViewSubmissionModal.tsx](submithub/src/components/modals/ViewSubmissionModal.tsx)`)

- **Hide Submission** matches the **View Submission** outline style.
- Assignment title: `**font-normal`**.

If you want the avatar a **deeper** violet (closer to accent) instead of lavender, say how strong and we can tune it.

Applying title color `#302e7c`, logo/layout tweaks, shadow-based outline buttons, semibold card titles, and removing card shadows.

Here’s what was updated:

### Title color

- `[index.css](submithub/src/index.css)`: `--color-title-violet` is now `**#302e7c`** (used for SubmitHub, section headings, footer titles, profile initials, etc.).

### Card titles

- `[AssignmentCard.tsx](submithub/src/components/AssignmentCard.tsx)`: titles use `**font-semibold**` (still `**text-navy**`).
- `[ViewSubmissionModal.tsx](submithub/src/components/modals/ViewSubmissionModal.tsx)`: assignment title `**font-semibold**` to match.

### Logo

- `[Header.tsx](submithub/src/components/Header.tsx)`: Removed the lavender ring; only the **gradient circle** remains (`h-7 w-7`).
- Tightened spacing: `**gap-1.5`** between logo and **SubmitHub**.

### View Submission / Hide Submission (shadow instead of border)

- Outline actions use `**border-0`** plus a **violet-tinted shadow** (soft inner + stronger outer using `#302e7c` / accent tones) instead of a stroke.

### Card shadows

- Assignment cards: `**shadow-sm` removed** (border only).
- Grades table wrapper: `**shadow-sm` removed** for consistency.

Modal panels still use `**shadow-xl`** so dialogs stay separated from the dimmed backdrop; say if you want that flattened too.

Updated **View Submission** and **Hide Submission** so the shadow is much lighter: two soft layers at **~6% opacity** with **1–2px** and **2–6px** blur (replacing the stronger 12–28% stack). Same treatment in `[AssignmentCard.tsx](submithub/src/components/AssignmentCard.tsx)` and `[ViewSubmissionModal.tsx](submithub/src/components/modals/ViewSubmissionModal.tsx)`.

Replacing the subtle shadow with a thin grey border on the outline-style buttons.

Update applied: **View Submission** and **Hide Submission** no longer use a shadow. They now use a **1px** Tailwind border in `**border-slate-300`** (light grey) on a white background, with the same accent text and hover as before. Changes are in `[AssignmentCard.tsx](submithub/src/components/AssignmentCard.tsx)` and `[ViewSubmissionModal.tsx](submithub/src/components/modals/ViewSubmissionModal.tsx)`.

## USER

make the cursor change for all clickable objects. also buttons if hovered should change color as ui feedback

submitted and pending chips should be centered within their rows/position

also violet buttons on hover please color change

no, the chip shoul be its own column in the entry, the view submission as well. both of the on the very right of the entry. But the chips should be centerd in their columns. pending entries below submitted should be centered

now closer again to the upload file button again

closer

## CURSOR

Searching the codebase for interactive elements to add `cursor-pointer` and hover feedback.

Adding global pointer cursors and consistent hover feedback across interactive elements.

Removing `role="button"` from the drop zone to fix nested-interactive warning; the `browse` label remains the explicit control.

Here’s what changed:

### Global (`[index.css](submithub/src/index.css)`)

- `**cursor: pointer**` on `button:not(:disabled)`, `a[href]` (non-empty), `label[for]`, and `summary`.
- `**cursor: not-allowed**` on disabled buttons.

### Buttons & links (hover feedback)

- **Header**: Tabs use `**hover:text-brand-primary`** (inactive) or `**hover:text-brand-primary-hover**` (active). **Logout** uses `**active:brightness-95`**.
- **Assignment cards**: **Upload** — `**transition-colors`**, hover + `**active:brightness-95**`. **View** — `**hover:border-slate-400`**, `**hover:bg-lavender**`, slight `**active:brightness**`.
- **Footer**: Mail/forum links `**hover:text-slate-900`**; Discord `**hover:text-brand-primary-hover**`.
- **Upload modal**: **Cancel/Submit** match Logout hover/active; **browse** uses `**hover:text-brand-primary-hover`**; drop zone `**hover:border-slate-400**` / `**hover:bg-slate-50**`. Whole zone `**cursor-pointer**` and `**onClick**` to open the file dialog; **browse** `**stopPropagation`** so it doesn’t fire twice.
- **View submission modal**: **Hide Submission** matches the outline button hovers.

### Modal overlay (`[ModalOverlay.tsx](submithub/src/components/modals/ModalOverlay.tsx)`)

- Backdrop: `**cursor-pointer`** when it closes on click.
- Dialog panel: `**cursor-default**` so the pointer doesn’t look clickable over content.

Explicit `**cursor-pointer**` is still on components where it helps (tabs already covered by `button`, but kept for clarity on some controls).

Centering status chips vertically with the action buttons (matching `h-11`) and aligning the modal header.

Here’s what changed:

### Assignment cards (`[AssignmentCard.tsx](submithub/src/components/AssignmentCard.tsx)`)

- Chips use `**items-center justify-center**` and `**leading-none**` so the label is centered in the pill.
- Chip sits in a `**h-11**` flex row (**same height as the action button**) with `**items-center`**, so it lines up vertically with the button.
- The chip + button row uses `**justify-center**` on small screens and `**md:justify-end**` on larger ones so the pair stays centered when stacked.

### View submission modal (`[ViewSubmissionModal.tsx](submithub/src/components/modals/ViewSubmissionModal.tsx)`)

- Header row uses `**md:items-center**` so the right column aligns with the title block.
- Submitted chip is in a `**min-h-10**` flex wrapper with `**items-center**`, matching the chip styling above.

### Grades table (`[Grades.tsx](submithub/src/components/views/Grades.tsx)`)

- Letter-grade pill updated the same way (`**items-center justify-center**`, `**leading-none**`, slightly adjusted padding) for consistency.

Darkening `--color-brand-primary-hover` — it's nearly identical to the base color, so hover was barely visible.

Updated the shared hover token so filled violet controls actually shift color.

### Change (`[index.css](submithub/src/index.css)`)

- `**--color-brand-primary-hover**` is now `**#30267a**` instead of `**#443bc4**` (which was almost the same as `**#4a42c5**`).

That variable drives hover on every **solid** accent control: **Logout**, **Upload Files**, and **Cancel / Submit** in the upload modal (`hover:bg-brand-primary-hover`). **Text** links that use `hover:text-brand-primary-hover` (e.g. Discord, browse, active tab) will also go to this deeper violet on hover, which stays on-brand.

If you want **only** filled buttons to darken and links to use a lighter hover, say so and we can split into two tokens.

Restructuring the assignment card into two right-aligned columns: a fixed-width chip column and a button column, with chips and buttons vertically centered in their columns.

Here’s the updated layout in `[AssignmentCard.tsx](submithub/src/components/AssignmentCard.tsx)`:

### Structure

- **Main row** uses `**md:items-stretch`** so the block on the right matches the card height.
- **Right side** is a single row, `**justify-end`**, with **two columns**:
  1. **Chip column** — fixed width (`**w-26`** / `**sm:w-28**`), `**items-center justify-center**` so **Pending** and **Submitted** are centered in the column and line up down the list.
  2. **Button column** — `**items-center justify-center`** so **Upload Files** / **View Submission** stay centered in its column.

### Behavior

- Chips are no longer in the same flex cell as the button; each has its own column on the **far right**.
- **Pending** rows under **Submitted** rows share the same chip column width, so badges stay **centered in that column** and visually aligned.

On small screens the same two-column strip stays `**justify-end`** so it stays right-aligned under the text block.

Updated the chip/action row so the space between the status chip and the button is tighter: `**gap-2**` on small screens and `**md:gap-3**` on larger ones (previously `**gap-6` / `md:gap-8**`).

Updated: the chip and button row now uses `**gap-0**` on small screens and `**md:gap-1**` on medium and up (4px), so they sit right next to each other with only a sliver of space on larger layouts.

## USER

Now, there is no submissionoverlay modal. rather, the entry card elapses.

The structure of the assignment card changes when the "View Submission" button is clicked. The card expands vertically to reveal a new section at the bottom. This new section includes a "Submitted Files" heading followed by horizontal rows representing each file. Each file row shows the filename on the left and the file size on the right. The action button in the top right of the card changes its label to "Hide Submission." A small disclaimer note is positioned at the very bottom of the card's internal area.

Visual Description: The expanded view maintains the card's rounded-corner design. The "Submitted" badge is highlighted in green. The file rows have a slightly darker gray background than the rest of the white card, making them stand out as individual items. The overall design is highly organized and uses vertical stacking to show file details.


please make elapse en collapse with an animation. the separator lines should be thinner.

submitted files should have the normal background color but only very thin shadows as a border.

in elapsed mode the chip should keep its original desing


add a second mock file in the submitted files

mock data should have 5.2 KB 1.8 MB

Files listed above reflect your last successful upload. If something looks wrong, contact your TA before the deadline.

Replace with Note: This is mockData. In a real app, files would be downloadable or viewable.

the title of the entry card should be generally slightly smaller.

Submitted Files slightly larger


## CURSOR

Replacing the view-submission modal with an inline expandable card. Checking how components are wired.

Implementing inline expansion in `AssignmentCard`, removing the view modal from `App`, and simplifying parent components. Deleting the unused `ViewSubmissionModal` component.

Here’s what changed:

### Inline expand/collapse (`[AssignmentCard.tsx](submithub/src/components/AssignmentCard.tsx)`)

- `**action === 'view'**` uses local `**submissionOpen**` state.
- **View Submission** → expands the card; **Hide Submission** → collapses.
- **Upload Files** still calls `**onUploadClick`** only (opens the upload modal).
- Expanded block (below a **border-t**):
  - **Submitted Files** heading
  - Rows: `**bg-file-row`**, filename left, size right
  - Disclaimer at the bottom (same copy as before)
- **Submitted** chip gets a light **green ring** when expanded (`ring-emerald-500/45`).
- Single `**<article>`** with `**overflow-hidden**` and **rounded corners** so the expanded area matches the card.

### App & views

- `[App.tsx](submithub/src/App.tsx)`: Removed **View Submission** modal; only the upload modal remains.
- `[ActiveAssignments.tsx](submithub/src/components/views/ActiveAssignments.tsx)`: Dropped `**onViewSubmission`**; passes `**onUploadClick**` only for pending rows.
- `[PastSubmissions.tsx](submithub/src/components/views/PastSubmissions.tsx)`: No modal props; cards handle view themselves.

### Removed

- `[ViewSubmissionModal.tsx](submithub/src/components/modals/ViewSubmissionModal.tsx)` deleted as unused.

Upload flow is unchanged (still centered modal). View submission is entirely in-card expand/collapse.

Implementing grid-based expand/collapse animation, thinner separators, file rows with white background and hairline shadow borders, and restoring the original chip styling.

Here’s what changed in `[AssignmentCard.tsx](submithub/src/components/AssignmentCard.tsx)`:

### Expand / collapse animation

- For `**action === 'view'**`, the submission block is **always mounted** and animated with **CSS grid**: `**grid-rows-[0fr]`** (closed) → `**grid-rows-[1fr]**` (open), `**transition-[grid-template-rows] duration-300 ease-in-out**`.
- Inner wrapper uses `**min-h-0 overflow-hidden**` so height animates cleanly.
- `**motion-reduce:transition-none**` respects reduced motion.

### Thinner separator

- Between the header and **Submitted Files**: `**border-t-[0.5px] border-slate-200`** instead of a 1px border.

### File rows

- `**bg-white**` (same as the card).
- Outline via a **very light shadow stack**: `**0.5px`** ring + tiny `**0 1px 2px**` shadow so it reads as a thin edge, not a gray fill.

### Chip in expanded mode

- Removed the **emphasis ring** and the `**emphasized`** prop; **Pending** / **Submitted** chips look the same whether the card is open or closed.

Adding a second file to assignments that currently list only one submitted file (`a0` and `p1`).

Reverting the `p1` change — adding the second file only to the primary submitted example (`a0`).

Update is in `[src/data/mockData.ts](submithub/src/data/mockData.ts)`: the **Transformer Attention Write-up** submission (`a0`) now includes a second file, `**references_zt.pdf` (56 KB)**, next to `**attention_writeup_zt.pdf`**. Expanding that card under Active Assignments shows two rows in Submitted Files.

Updated the **Transformer Attention Write-up** submission in `[src/data/mockData.ts](submithub/src/data/mockData.ts)`: `**attention_writeup_zt.pdf`** is `**5.2 KB**` and `**references_zt.pdf**` is `**1.8 MB**`.

Here’s what changed in `[AssignmentCard.tsx](submithub/src/components/AssignmentCard.tsx)`:

1. **Note** — Replaced the old disclaimer with: *Note: This is mockData. In a real app, files would be downloadable or viewable.*
2. **Card title** — Dropped from `text-2xl` / `md:text-[1.65rem]` to `**text-xl`** / `**md:text-[1.4rem]**`.
3. **Submitted Files** — Heading bumped from `**text-sm`** to `**text-base**`.

## USER

join nlp 2026 discord should be normal text, and underlined

but still accent color

Please also make similar changes to the uplodad files button. so no modal overlay but a collapse/elapse

no line between drag and drop files and submit. color of drop region applied to whole elapsed section.

## CURSOR

Updated the Discord link in `[Footer.tsx](submithub/src/components/Footer.tsx)`: it now uses `**text-inherit**` (same as the surrounding `**text-navy**`), `**underline**` with `**underline-offset-2**`, and `**hover:text-slate-900**` instead of the accent color.

Updated the Discord link in `[Footer.tsx](submithub/src/components/Footer.tsx)`: it uses `**text-brand-primary**`, stays `**underline**` with `**underline-offset-2**`, `**font-normal**` (not bold), and `**hover:text-brand-primary-hover**`.

Integrating the upload UI into the assignment card as an expandable section and removing the upload modal.

Implementing inline upload expansion in `AssignmentCard`, removing the upload modal and cleaning up unused files.

Here’s what changed:

### Inline upload ( `[AssignmentCard.tsx](submithub/src/components/AssignmentCard.tsx)` )

- `**uploadOpen**` toggles the same **grid `0fr` → `1fr`** animation as the submission panel.
- **Upload Files** opens the panel; **Cancel** closes it and clears staged file names.
- Panel includes: **dashed drop zone**, cloud icon, **browse** (accent + hover), **optional staged list**, **Submit** (purple, bottom-right) — same behavior as before, without a modal.
- File input id is `**submithub-upload-` + `useId()`** so each card’s label/input stays unique.

### App & active list

- `[App.tsx](submithub/src/App.tsx)`: no modal state or `UploadModal`.
- `[ActiveAssignments.tsx](submithub/src/components/views/ActiveAssignments.tsx)`: no `onUpload` prop; only passes `**assignments**`.

### Removed

- `[UploadModal.tsx](submithub/src/components/modals/UploadModal.tsx)`
- `[ModalOverlay.tsx](submithub/src/components/modals/ModalOverlay.tsx)`

There are no overlays left; pending cards expand in place for upload, submitted cards expand for files.

Applying the drop-zone background to the full upload panel, making the inner area border-only, and removing the separator above Submit.

Here’s what changed in `[AssignmentCard.tsx](submithub/src/components/AssignmentCard.tsx)`:

### Full-panel background

- The **whole upload panel** (dashed zone, staged list, and Submit) sits in one wrapper with `**bg-slate-50/50`**, or `**bg-violet-50/80**` while dragging.
- **Drag enter / over / leave / drop** run on that wrapper so the tint covers the entire expanded block. `**onDragLeave`** only clears when the pointer leaves the panel (using `**contains(relatedTarget)**`) so it doesn’t flicker when moving over children.
- The inner drop target is `**bg-transparent**` and only controls the **dashed border** (slate by default, accent when dragging).

### No divider above Submit

- Removed `**border-t`** and extra `**pt-5**` from the Submit row; it’s now `**mt-6 flex justify-end**` only.

## USER

okay, the entry cards should have a shadow border

## CURSOR

Update applied on the assignment `**article**` in `[AssignmentCard.tsx](submithub/src/components/AssignmentCard.tsx)`: the **1px slate border** is gone and replaced with a **shadow “frame”** — a **0.5px** outline-style shadow plus **light** outer shadows so the card edge reads as a soft border without a hard stroke.