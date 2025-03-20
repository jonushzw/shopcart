# ShoppingCart

### Features
 - Product Browsing: Filter products by category and price range
 - Search Functionality: Search products by name or description
 - Shopping Cart: Add, remove, and update quantities of items
 - Animations: Smooth transitions powered by Framer Motion
 - State Management: Context API for global state management

 ### Tech Stack Used
 1. Reactjs
 2. Tailwind CSS
 3. Framer Motion
 4. React Testing Library
 5. FakeStoreAPI

## Instructions to Build and Run the Code

1. Clone the repository:
    ```sh
    git clone https://github.com/jonushzw/shopcart.git
    ```

2. Navigate to the project directory:
    ```sh
    cd shopcart
    ```

3. Install the dependencies:
    ```sh
    npm install
    ```

4. Run the development server:
    ```sh
    npm start
    ```

5. Open your browser and navigate to `http://localhost:[available-host]` to view the application. Host number should appear in the terminal

## Testing Notes
During writing of tests, be aware of the following decisions:

- Framer Motion animations are mocked to prevent test failures
- React Router's Link component is replaced with a simple anchor in tests as it was causing problems
- Context providers are wrapped around components being tested