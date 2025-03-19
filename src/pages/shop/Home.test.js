import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ProductContext } from '../../contexts/ProductContext';
import { CartContext } from '../../contexts/CartContext';
import { SideBarContext } from '../../contexts/SideBarContext';
import ShopPage from './Home';

// Mock react-router-dom due to use of Link component
// and mock framer-motion due to issues with animations in tests

jest.mock('react-router-dom', () => ({
  Link: ({ children, to }) => <a href={to}>{children}</a>,
}));

jest.mock('../../components/Header', () => {
  return function MockHeader({ onSearch }) {
    return (
      <div data-testid="header">
        Header Component
        <input 
          data-testid="header-search" 
          onChange={(e) => onSearch && onSearch(e.target.value)} 
          placeholder="Search in header" 
        />
      </div>
    );
  };
});

jest.mock('../../components/Sidebar', () => {
  return function MockSidebar() {
    return <div data-testid="sidebar">Sidebar Component</div>;
  };
});

jest.mock('../../components/Footer', () => {
  return function MockFooter() {
    return <div data-testid="footer">Footer Component</div>;
  };
});

// Mock framer-motion to prevent test issues with animations
jest.mock('framer-motion', () => {
  const stripProps = (props) => {
    const { whileHover, ...rest } = props;
    return rest;
  };

  return {
    motion: {
      div: ({ children, ...props }) => <div {...stripProps(props)}>{children}</div>,
      section: ({ children, ...props }) => <section {...stripProps(props)}>{children}</section>,
      h1: ({ children, ...props }) => <h1 {...stripProps(props)}>{children}</h1>
    },
    AnimatePresence: ({ children }) => <>{children}</>,
  };
});

const mockProducts = [
  { id: 1, title: 'Product 1', category: 'Category 1', price: 100, image: 'image1.jpg' },
  { id: 2, title: 'Product 2', category: 'Category 2', price: 200, image: 'image2.jpg' },
  { id: 3, title: 'Product 3', category: 'Category 1', price: 300, image: 'image3.jpg' },
  { id: 4, title: 'Special Product', category: 'Category 3', price: 150, image: 'image4.jpg' },
];

const mockCart = [];
const mockSetSideBar = jest.fn();
const mockAddToCart = jest.fn();

const renderWithContexts = (ui, { 
  products = mockProducts, 
  cart = mockCart, 
  sideBar = false,
  addToCart = mockAddToCart
} = {}) => {
  return render(
    <ProductContext.Provider value={{ products }}>
      <CartContext.Provider value={{ cart, addToCart }}>
        <SideBarContext.Provider value={{ sideBar, setSideBar: mockSetSideBar }}>
          {ui}
        </SideBarContext.Provider>
      </CartContext.Provider>
    </ProductContext.Provider>
  );
};

describe('ShopPage', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders ShopPage component', () => {
    renderWithContexts(<ShopPage />);
    expect(screen.getByTestId("header")).toBeInTheDocument();
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
    expect(screen.getByTestId("footer")).toBeInTheDocument();
    expect(screen.getByText(/Discover Trending/i)).toBeInTheDocument();
  });

  test('search functionality works', () => {
    renderWithContexts(<ShopPage />);
    const searchInput = screen.getByPlaceholderText(/Search for products.../i);
    fireEvent.change(searchInput, { target: { value: 'Product 1' } });
    
    // Find the product title in the product card
    const productCards = screen.getAllByText(/Product 1/i);
    const productTitle = productCards.find(el => 
      el.tagName === 'H3' && el.textContent === 'Product 1'
    );
    
    expect(screen.getByText(/Results for "Product 1"/i)).toBeInTheDocument();
    expect(productTitle).toBeInTheDocument();
    expect(screen.queryByText(/Product 2/i, { selector: 'h3' })).not.toBeInTheDocument();
  });

  test('category filter works', () => {
    renderWithContexts(<ShopPage />);
    
    // Get all buttons with cat 1 and click the one that's a filter button
    const categoryButtons = screen.getAllByText(/Category 1/i);
    const filterButton = categoryButtons.find(el => 
      el.tagName === 'BUTTON' && el.textContent === 'Category 1'
    );
    fireEvent.click(filterButton);
    
    // Check for product titles in the results
    expect(screen.getByText(/Product 1/i, { selector: 'h3' })).toBeInTheDocument();
    expect(screen.getByText(/Product 3/i, { selector: 'h3' })).toBeInTheDocument();
    expect(screen.queryByText(/Product 2/i, { selector: 'h3' })).not.toBeInTheDocument();
    expect(screen.queryByText(/Special Product/i, { selector: 'h3' })).not.toBeInTheDocument();
  });

  test('price range filter', () => {
    renderWithContexts(<ShopPage />);
    const priceRangeInput = screen.getByRole('slider');
    fireEvent.change(priceRangeInput, { target: { value: '150' } });
    
    expect(screen.getByText(/Up to \$150/i)).toBeInTheDocument();
    expect(screen.getByText(/Product 1/i, { selector: 'h3' })).toBeInTheDocument();
    expect(screen.getByText(/Special Product/i, { selector: 'h3' })).toBeInTheDocument();
    expect(screen.queryByText(/Product 2/i, { selector: 'h3' })).not.toBeInTheDocument();
    expect(screen.queryByText(/Product 3/i, { selector: 'h3' })).not.toBeInTheDocument();
  });

  test('displays filtered products with search term', () => {
    renderWithContexts(<ShopPage />);
    fireEvent.change(screen.getByPlaceholderText(/Search for products.../i), { target: { value: 'Product 2' } });
    
    // Use selector to specifically target the product title
    expect(screen.getByText(/Product 2/i, { selector: 'h3' })).toBeInTheDocument();
    expect(screen.queryByText(/Product 1/i, { selector: 'h3' })).not.toBeInTheDocument();
    expect(screen.queryByText(/Product 3/i, { selector: 'h3' })).not.toBeInTheDocument();
  });

  test('search works with header search component', () => {
    renderWithContexts(<ShopPage />);
    const headerSearchInput = screen.getByTestId('header-search');
    
    fireEvent.change(headerSearchInput, { target: { value: 'Special' } });
    
    expect(screen.getByText(/Results for "Special"/i)).toBeInTheDocument();
    expect(screen.getByText(/Special Product/i, { selector: 'h3' })).toBeInTheDocument();
    expect(screen.queryByText(/Product 1/i, { selector: 'h3' })).not.toBeInTheDocument();
  });

  test('shows no results message when search has no matches', () => {
    renderWithContexts(<ShopPage />);
    fireEvent.change(screen.getByPlaceholderText(/Search for products.../i), { target: { value: 'NonExistentProduct' } });
    
    expect(screen.getByText(/No products found matching your criteria/i)).toBeInTheDocument();
    expect(screen.getByText(/Try adjusting your search or filter options/i)).toBeInTheDocument();
  });

  test('clear search button works', () => {
    renderWithContexts(<ShopPage />);
    const searchInput = screen.getByPlaceholderText(/Search for products.../i);
    
    // First search for something
    fireEvent.change(searchInput, { target: { value: 'Product 1' } });
    expect(screen.getByText(/Results for "Product 1"/i)).toBeInTheDocument();
    
    // Then clear the search
    const clearButton = screen.getByRole('button', { name: /×/i });
    fireEvent.click(clearButton);
    
    // Should show all products again
    expect(screen.getByText(/All Products/i)).toBeInTheDocument();
    expect(screen.getByText(/Product 1/i, { selector: 'h3' })).toBeInTheDocument();
    expect(screen.getByText(/Product 2/i, { selector: 'h3' })).toBeInTheDocument();
  });

  test('mobile filter button toggles filters visibility', () => {
    // Use a mobile viewport
    global.innerWidth = 500;
    global.dispatchEvent(new Event('resize'));
    
    renderWithContexts(<ShopPage />);
    
    const filterButton = screen.getByText(/Filters/i).closest('button');
    
    // Initially filters should be hidden on mobile
    const asideBeforeClick = document.querySelector('aside');
    expect(asideBeforeClick).toHaveClass('hidden');
    
    // Click to show filters
    fireEvent.click(filterButton);
    
    // Now filters should be visible
    const asideAfterClick = document.querySelector('aside');
    expect(asideAfterClick).toHaveClass('block');
  });

  test('combines category and price filters correctly', () => {
    renderWithContexts(<ShopPage />);
    
    // Apply category filter
    const categoryButtons = screen.getAllByText(/Category 1/i);
    const filterButton = categoryButtons.find(el => 
      el.tagName === 'BUTTON' && el.textContent === 'Category 1'
    );
    fireEvent.click(filterButton);
    
    // Then apply price filter
    const priceRangeInput = screen.getByRole('slider');
    fireEvent.change(priceRangeInput, { target: { value: '150' } });
    
    // Should only show Product 1
    expect(screen.getByText(/Product 1/i, { selector: 'h3' })).toBeInTheDocument();
    expect(screen.queryByText(/Product 2/i, { selector: 'h3' })).not.toBeInTheDocument();
    expect(screen.queryByText(/Product 3/i, { selector: 'h3' })).not.toBeInTheDocument();
  });

  test('shows correct product count', () => {
    renderWithContexts(<ShopPage />);
    
    // Initially shows all products
    expect(screen.getByText(/4 products found/i)).toBeInTheDocument();
    
    // Filter to change count
    const categoryButtons = screen.getAllByText(/Category 1/i);
    const filterButton = categoryButtons.find(el => 
      el.tagName === 'BUTTON' && el.textContent === 'Category 1'
    );
    fireEvent.click(filterButton);
    
    // Now should show only 2 products
    expect(screen.getByText(/2 products found/i)).toBeInTheDocument();
  });
});