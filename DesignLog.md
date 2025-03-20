# Technical Decisions and Assumptions for Design Page

## Overview

This document outlines the technical decisions and assumptions made during the implementation of the design page.

## Design Implementation

### Design.png

The design provided in `pages/design/index.js` was strictly followed to use only HTML and CSS without any online frameworks. The following decisions were made:

- **HTML Structure** 
    
    The HTML structure was designed according to the image given in `design.png`, with my own tweaks here and there. 

    I structured the page in a straightforward manner, abstracting out components that can be done in other files. For example, the `SearchBar` component was abstracted out for ease of modification.

    Additionally, the HTML is structured in a way such that other components can be added easily, just by inserting new divs and/or adjusting margins.

- **CSS Styling**: 

    Custom CSS was written to style the elements according to the design. I made different CSS files that served different purposes.

    * **Search CSS**: 
        - Followed as close as possible to the reference image, however changed the images to my own, while also putting the company's logo for easy navigation back to the home screen.
        - The search bar was styled to be larger vertically to enhance usability and aesthetics.
        - The search icon was positioned inside the input field to the left of the placeholder text for a modern look.
        - A dropdown menu was added to the user icon with smooth animations for better user experience.

    * **Design CSS**:
        - The cards were styled with gradients, rounded corners, and shadow effects to make them more visually appealing.
        - Hover effects were added to the cards to create a "pop out" effect, enhancing interactivity.
        - Tags were styled as circles with random background colors and white text to make them stand out.
        - The status text was aligned to the right of each card for better readability.

- **Fonts and Images**: Google Fonts was used to include the required fonts. Images were optimized and included in the project directory.

## Technical Decisions

### React.js

- **Reasoning**: React.js was chosen for its component-based architecture, which allows for reusable and maintainable code. Also to put both assignments together.

### React-Router

- **Reasoning**: `react-router-dom` was used to handle routing within the application. It provides a simple way to manage navigation and URL changes.

### CSS Modules

- **Reasoning**: Separated CSS Modules to individual components, preventing style conflicts and making the styles easier to maintain.
    * **search.module.css**: Custom CSS styles to map respective sections of the Searchbar to different styling.
    * **design.module.css**: Custom CSS styles to map respective sections of the Searchbar to different styling.

## Assumptions

- The design provided in `design.png` was the primary reference for the implementation.
- Custom CSS can be made, without using outside frameworks
- Colours were fit as close as possible to design
