import styles from '../../styles/search.module.css';
import React from 'react';
import { Link } from 'react-router-dom';

export default function SearchBar() {

    const [dropdownOpen, setDropdownOpen] = React.useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    }

    return (
        <header className={styles.header}>
            <Link to= '/'>
                <img src="/ensign-logo.png" alt="Ensign Logo" className={styles.logo} />
            </Link>
            <div className={styles.separator}></div>
            <div className={styles.searchContainer}>
                <img src="/search.png" alt="Search Icon" className={styles.searchIcon} />
                <input type="text" placeholder="Search for .." className={styles.searchBar} />
            </div>
            <div className={styles.userSection}>
                <img 
                    src="/bird.png" 
                    alt="User Icon" 
                    className={styles.userIcon}
                    onClick = {toggleDropdown} 
                />
                {dropdownOpen && (
                    <div className={styles.dropdownMenu}>
                        <ul>
                            <li>Profile</li>
                            <li>Settings</li>
                            <li>Logout</li>
                        </ul>
                    </div>
                )}
                <span className={styles.username}>Analyst User</span>
            </div>
        </header>
    );
}