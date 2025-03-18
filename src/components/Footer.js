import React from 'react';

const Footer = () => {
    return (
        <footer className='bg-gray-800 text-white py-10 text-center font-sans font-medium'>
            <div>
                <img src="/ensign-logo.png" alt="Ensign InfoSecurity" className="w-32 mx-auto" />
            </div>
            <p className='mt-4'>&copy; 2025 Ensign InfoSecurity. All rights reserved.</p>
            <div className="mt-4">
                <div className="flex justify-center space-x-4">
                </div>
                <div className="mt-4">
                    <p>Contact us: <a href="mailto:support@ensigninfosecurity.com" className="hover:text-gray-400">support@ensigninfosecurity.com</a></p>
                </div>
                <div className="mt-4">
                    <p>
                        Company Website: <a href="https://www.ensigninfosecurity.com" target="_blank" rel="noreferrer" className="hover:text-gray-400">www.ensigninfosecurity.com</a>
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;