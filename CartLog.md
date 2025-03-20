
# Technical Decisions and Assumptions for ShopCart Application

### Overview
This document outlines the technical decisions and assumptions made during the implementation of the ShopCart e-commerce application, including the shop, product detail, and cart pages.

## Design Implementation

### Shop Page (Home.js)
The shop page was designed to provide a simple e-commerce experience, using the **FakeStoreAPI** to generate the products for the shop:

- **Product Grid**: Products are displayed in a responsive grid layout that adjusts based on screen size, from 1 column on mobile to 4 columns on large screens. Simple column layout to display all products, making it easy for users to scroll down to look for more products.
- **Filtering System**:
    * Category-based filtering allows users to narrow down products by specific categories.
    * Price range filtering with a slider component provides intuitive price-based filtering.
    * Combined filtering (category + price) implemented as well for more precise results.

- **Search Functionality**:
    * Search bar that works by matching across product titles.
    * Search can be triggered and displays only results that match.

## Product Detail Pages
The product details page was implemented as instructed and focused on displaying the different components of the data in a visually appealing manner. It is sectioned out like a typical e-commerce page and easy to navigate around.

- **Product Information**:
    * Main Section where product descriptions are displayed.
    * Pricing information in bold to indicate price to users.
    * Category and rating information are prominently dispplayed.
    * **Add To Cart** button to add to the cart

- **Related Products**:
    * Displays similar items based on product category

## Cart Sidebar (Sidebar.js)
The cart page was designed for easy management of cart items, popping out as a sidebar for quick convenience.

Cart data still persists even after browser refreshes/closes. Webpage data of cart stored in local storage.

- **Item List**
    * Each item displays an image, title, price, and quantity.
    * Quantity can be adjusted with increment/decrement buttons.
    * Items can be removed individually.

- **Cart Summary**
    * Subtotal calcualation updates in real-time with quanitity changes and item adjustments.
    * Clear cart option removes all items at once, with an additional confirmation prompt.
    * Checkout button to proceed to checkout.

- **Empty Cart**
    * Message when cart is empty.
    * Proceed to continue shopping.

## Header (Header.js)

- **Simple Naviagation**
    * Simple header bar that allows navigation to pages in the website.


## Bonus Features (Checkout + Payment)

- **Checkout Page**
    * Designed it based on typical e-commerce sites.
    * Include shipping details and form for submission.
    * Mock features for delivery options.

- **Payment Page**
    * Designed it based on typical e-commerce sites.
    * Includes total net amount and relevant payment options, all submitted as a form.


## Technical Decisions

### Context for State Management

React's built-in Context API was selected for managing the state. It provides a lightweight option that does not have to be dependent on other packages.

- Reduce dependencies and bundle size
- Simplify the state management architecture
- Provide sufficient functionality for our specific needs
- Improve maintainability with a more straightforward approach

Three Contexts were implemented:
1. **ProductContext**: Manages product data and fetches the product data from FakeStoreAPI
2. **CartContext:**: Handles all cart operations(add, remove, clear, update quantities) and also keeps a local storage of cart data to persist even when browser closes/refreshes.
3. **SideBarContext** Controls whether the sidebar is open or closed.

### Framer Motion for Animations (Improved UI design)

- **Reasoning**: Framer Motion was chosen for more responsive animations
    * Supports gestures and responsive animations
    * Makes complex animations more maintainable than CSS-only solutions

Implemented Framer Motion for a better user experience. Viewed tutorial on the basics and revamped the website design to offer a more modern look:

### Before and After
<p align="center">
  <img src="public/Screenshot 2025-03-20 at 5.23.05 PM.png" alt="Image 1" width="300"/>
  <img src="public/Screenshot 2025-03-20 at 5.24.21 PM.png" alt="Image 2" width="300"/>
</p>


### Testing with React Testing Library
- React Testing Library encourages testing behavior over implementation details
- Did component-based testing that were essential
- Tested components of typical user workflow (searching, filtering)
- Mocked up incompatible packages

## Assumptions

### User Experience
- **Main Product Page**: I assumed users prefer filtering and searching over extensive pagination, so we prioritised filter controls. Understand in the future with more products instead of an external API, pagination is a viable option.
- **Purchase Flow**: Allowed users to add directly to cart in the product page through a cart button on top of going into the product details page.

### Technical Assumptions
- **API Integration**: Designed the state management with the assumption that product data would eventually come from an external API or a connected database, making the contexts serve as data fetching layers to manage the data.
- **Performance**: Ass the products fetched from the API were <= 20, client-side filtering and searching was viable. For larger catalogs, server-side search would be preferable.
- **Future Scalability**: Adopted a component-based abstraction so that components can be added at any point in the future. Designed to easily incorporate things like user authentication, admin control, payment gateways, proper backend etc. in the future.