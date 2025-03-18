import React from 'react';

const Footer = () => {
    return (
        <footer className='bg-gray-900 text-white py-10 text-center font-sans font-medium'>
            <p>&copy; 2025 Ensign InfoSecurity. All rights reserved.</p>
            <div className="mt-4">
                <div className="flex justify-center space-x-4">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">Facebook</a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">Twitter</a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">Instagram</a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">LinkedIn</a>
                </div>
                <div className="mt-4">
                    <p>Contact us: <a href="mailto:support@ensigninfosecurity.com" className="hover:text-gray-400">support@ensigninfosecurity.com</a></p>
                </div>
                <div className="mt-4">
                    <a href="/privacy-policy" className="hover:text-gray-400">Privacy Policy</a> | <a href="/terms-of-service" className="hover:text-gray-400">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;