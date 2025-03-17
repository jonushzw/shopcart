import styles from '../styles/search.module.css';
import React from 'react';

export default function SearchBar() {
    return (
        <header className={styles.header}>
            <img src="/ensign-logo.png" alt="Ensign Logo" className={styles.logo} />
            <div className={styles.separator}></div>
            <input type="text" placeholder="Search for .." className={styles.searchBar} />
            <div className={styles.userSection}>
                <span className={styles.username}>Analyst User</span>
                <img src="/user-avatar.png" alt="User Avatar" className={styles.avatar} />
            </div>
        </header>
    );
}