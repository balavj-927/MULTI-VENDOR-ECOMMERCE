import { useState, useEffect } from 'react';
import Lottie from 'react-lottie';
import shoppingBagAnimation from '../assets/animations/shoppingBag.json';

const Hero = () => {
    // Animation options
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: shoppingBagAnimation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    // Animation entrance effect
    const [visible, setVisible] = useState(false);
    
    useEffect(() => {
        setVisible(true);
    }, []);

    return (
        <div className="flex flex-col overflow-hidden shadow-lg bg-gradient-to-br from-gray-50 to-gray-100 sm:flex-row">
            {/* Animation Section */}
            <div className="relative flex items-center justify-center w-full overflow-hidden bg-[#121d42] sm:w-1/2">
                <div className="absolute inset-0 opacity-50 bg-gradient-to-br from-blue-900 to-black"></div>
                <div className="relative z-10">
                    <Lottie 
                        options={defaultOptions} 
                        height={400}
                        width={400}
                        isClickToPauseDisabled={true}
                    />
                </div>
            </div>
            
            {/* Content Section - Properly aligned as per image */}
            <div className={`flex items-center justify-center w-full px-6 py-12 sm:w-1/2 sm:py-16 sm:px-10 transition-all duration-700 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
                <div className="max-w-md">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-0.5 bg-gray-800"></div>
                        <p className="text-sm font-medium tracking-wider text-gray-700 font-['Roboto_Slab']">OUR BEST SELLERS</p>
                    </div>
                    
                    <h1 className="font-['Roboto_Slab'] text-4xl font-bold leading-tight mb-6 md:text-5xl lg:text-6xl">
                        Latest <span className="text-blue-600">Arrivals</span>
                    </h1>
                    
                    <p className="mb-8 leading-relaxed text-gray-600 font-['Roboto_Slab']">
                        Discover our exclusive collection featuring premium quality items crafted for the modern lifestyle.
                    </p>
                    
                    <button className="flex items-center gap-3 px-8 py-3 font-medium text-white transition-colors duration-300 bg-gray-800 rounded group hover:bg-blue-700 font-['Roboto_Slab']">
                        SHOP NOW
                        <svg className="w-5 h-5 transition-transform duration-300 transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                    </button>
                    
                    <div className="flex gap-6 mt-8">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span className="text-sm font-['Roboto_Slab']">Free Shipping</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            <span className="text-sm font-['Roboto_Slab']">Easy Returns</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;