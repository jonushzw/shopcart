import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <section className="hero pt-24 pb-10 bg-blue-100">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center ">
                    <div className="p-8 border border-blue-200 shadow-lg rounded-lg transition-transform transform hover:scale-105 duration-300 bg-blue-50">
                        <h3 className="text-2xl text-black mb-2">Gallery</h3>
                        <h1 className="text-5xl font-bold mb-4 text-black">Welcome to our store</h1>
                        <p className="text-lg mb-6 text-black">Storefront</p>
                        <div className="font-semibold text-black uppercase">
                            View our products below
                        </div>
                    </div>
                    <div className="p-8">
                        <img src="/bird.png" alt="hero" className="w-full rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300 bg-blue-50" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;