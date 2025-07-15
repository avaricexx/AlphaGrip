AlphaGrip - Grip Strength Percentile Calculator
1. Project Overview

AlphaGrip is a web-based tool that allows users to calculate, track, and visualize their grip strength percentile. Users can input their grip strength (in lbs or kgs), age, and sex to see how they stack up against population data derived from scientific studies. The application provides personalized feedback, data visualization, and shareable, game-like "strength cards."
2. Core Features

    Grip Strength Analysis:
        Input fields for age, sex, and grip strength value.
        User-selectable units: kg or lbs.
        Dynamic percentile calculation based on the provided data.

    Data Visualization:
        A custom graph that visually compares the user's result to established strength levels (e.g., Below Average, Average, Strong, Very Strong).
        A historical line chart that displays the user's saved grip strength measurements over time, allowing them to track their progress.

    Data Persistence & Management:
        Users can save their age and sex preferences locally.
        Users can save individual grip strength measurements.
        Saved data includes rich metadata:
            Grip Strength Value & Unit
            Date & Time of measurement
            Day of the week
            Custom user-provided tags/notes (e.g., "post-workout," "morning session").
        Ability to export all saved measurement data to a .csv file.

    Gamified Strength Card:
        After submitting a measurement, the app generates a dynamic and shareable "Strength Card."
        The card is generated as an image (.png).
        The artwork on the card changes based on the user's grip strength percentile (e.g., a weaker result might show a kitten, while a top-tier result shows a gorilla).
        The card displays key stats: the user's name (optional), grip strength value, percentile, and a comparative fact (e.g., "Stronger than 85% of peers").
        Functionality to download the card as a .png file or copy it to the clipboard.

3. Tech Stack

| Category | Technology / Library | Rationale |
| Core | HTML, CSS, JavaScript (ES6+) | Standard web technologies. No framework is required for the current scope, ensuring the app is lightweight and has minimal dependencies. |
| Charting | Chart.js | Used for the historical progress chart (/stats). It's easy to implement, well-documented, and excellent for creating clean, responsive line charts. |
| Image Generation | D3.js or direct SVG manipulation | Used for dynamically generating the custom strength level graph and the downloadable Strength Card. D3 provides the power and flexibility needed for creating custom, data-driven SVG visuals that go beyond standard charts. |
| Data Storage | localStorage | For storing user preferences and measurement history directly in the browser. It's simple, requires no backend, and is sufficient for local, single-user data. |
| Code Formatting | Prettier | To ensure consistent code style across the project. A .prettierrc configuration file should be included in the repository. |
4. Proposed File Structure

alphagrip/
├── index.html                # Main page with input form and card display
├── stats.html                # Page for historical charts and data export
│
├── assets/
│   ├── images/
│   │   ├── gorilla.svg       # Art for the strength cards
│   │   ├── kitten.svg
│   │   └── ...               # Other card images
│   └── styles/
│       ├── main.css          # Global styles
│       └── stats.css         # Styles specific to the stats page
│
├── js/
│   ├── main.js               # Core logic for input, calculation, card generation
│   ├── stats.js              # Logic for the stats page, charting, CSV export
│   ├── percentile-data.js    # Module containing the scientific dataset for calculations
│   └── utils.js              # Helper functions (e.g., unit conversion, date formatting)
│
├── INSTRUCTIONS.md           # This file
├── .prettierrc               # Prettier configuration file
└── .gitignore                # Git ignore file


5. Contributing

We welcome contributions! Please follow these guidelines:

    Fork the repository and create a new branch for your feature or bug fix.

    Follow the code style. Ensure your code is formatted with Prettier before committing. Run npx prettier --write . to format all files.

    Submit a Pull Request (PR) with a clear description of the changes you've made.

    Ensure your PR addresses an existing issue or proposes a new, well-defined feature.
