import React, { useState } from 'react';
import './hero.css';
// Assuming you have an image at '../../assets/images/hero.webp'
import hero_img from '../../assets/images/hero.webp'; 

const Hero = () => {
    // NOTE: 'expanded' state and 'toggleMenu' are currently unused as the 
    // Navigation/Header component is not included in this file.
    const [expanded, setExpanded] = useState(false);

    const toggleMenu = () => {
        setExpanded(!expanded);
    };

    return (
        <div className="component-container">
            
            {/* The section below is inherently responsive due to the Tailwind classes:
                - `lg:grid-cols-12`, `lg:col-span-4`, `lg:col-span-3`, `lg:col-span-5` define the desktop layout.
                - `grid-cols-1` defines the mobile layout.
                - Padding classes like `px-4`, `sm:px-6`, `lg:px-8` handle spacing at different breakpoints.
            */}
            <section className="pt-12 bg-gradient-to-b from-gray-50 via-white to-gray-50">
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="grid max-w-md grid-cols-1 mx-auto lg:grid-cols-12 gap-x-6 gap-y-8 lg:max-w-none">
                        
                        {/* Content Area - Takes 4 columns on desktop, full width on mobile */}
                        <div className="self-center lg:col-span-4">
                            <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl">
                                Freedom lies in <span className='font-tribute'>beilieving</span> in yourself.
                            </h1>
                            <p className="mt-5 text-base font-normal leading-7 text-gray-500">
                                Be bold, be brave enough to be your true self. ...
                            </p>
                            
                            {/* Call to Action Button */}
                            <div className="relative inline-flex mt-9 group">
                                <div
                                    className="absolute transitiona-all duration-1000 opacity-70 inset-0 bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200">
                                </div>

                                <a href="#" title=""
                                    className="relative inline-flex items-center justify-center px-8 py-3 sm:text-sm sm:py-3.5 text-base font-semibold text-white transition-all duration-200 bg-indigo-600 border border-transparent rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
                                    role="button">
                                    Read Exclusive Blog
                                </a>
                            </div>
                        </div>

                        {/* Latest Picks (Thumbnails) - Takes 3 columns on desktop, full width on mobile */}
                        <div className="self-end lg:order-last lg:pb-20 lg:col-span-3">
                            <p className="text-xs font-bold tracking-widest text-gray-500 uppercase">
                                ⚡️ Latest Picks
                            </p>

                            <div className="mt-6 space-y-6 lg:space-y-8">
                                {/* Thumbnail Items */}
                                {/* ... (items 1, 2, 3 as before) ... */}
                                <div className="relative overflow-hidden">
                                    <div className="flex items-start lg:items-center">
                                        <img className="object-cover w-12 h-12 rounded-lg shrink-0" src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/1/thumbnail-1.png" alt="Thumbnail 1" />
                                        <p className="ml-5 text-base font-bold leading-6 text-gray-900">
                                            <a href="#" title="">
                                                How a visual artist redefines success in graphic design
                                                <span className="absolute inset-0" aria-hidden="true"></span>
                                            </a>
                                        </p>
                                    </div>
                                </div>
                                <div className="relative overflow-hidden">
                                    <div className="flex items-start lg:items-center">
                                        <img className="object-cover w-12 h-12 rounded-lg shrink-0" src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/1/thumbnail-2.png" alt="Thumbnail 2" />
                                        <p className="ml-5 text-base font-bold leading-6 text-gray-900">
                                            <a href="#" title="">
                                                How a visual artist redefines success in graphic design
                                                <span className="absolute inset-0" aria-hidden="true"></span>
                                            </a>
                                        </p>
                                    </div>
                                </div>
                                <div className="relative overflow-hidden">
                                    <div className="flex items-start lg:items-center">
                                        <img className="object-cover w-12 h-12 rounded-lg shrink-0" src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/1/thumbnail-3.png" alt="Thumbnail 3" />
                                        <p className="ml-5 text-base font-bold leading-6 text-gray-900">
                                            <a href="#" title="">
                                                How a visual artist redefines success in graphic design
                                                <span className="absolute inset-0" aria-hidden="true"></span>
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Author Image - Takes 5 columns on desktop, full width on mobile (implicitly) */}
                        <div className="self-end lg:col-span-5">
                            <img className="w-full mx-auto" src={hero_img} alt="Author" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Hero;