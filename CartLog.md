
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

### Framer Motion for Animations (Improved UI design)

### Testing with React Testing Library

## Assumptions

