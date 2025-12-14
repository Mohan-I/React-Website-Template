import React from 'react';
import './hero.css';
import hero_img from '../../assets/images/hero.webp'; 
// The useState hook and toggleMenu function were removed as they were unused in this component.

const Hero = () => {
    return (
        // The outer container is kept for context from your original component-container
        <div className="component-container"> 
            <section className="pt-12 bg-gradient-to-b from-gray-50 via-white to-gray-50">
                <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                    <div className="grid max-w-md grid-cols-1 mx-auto lg:grid-cols-12 gap-x-6 gap-y-8 lg:max-w-none">
                        
                        {/* Content Area - ANIMATED */}
                        <div className="self-center lg:col-span-4 animate-slide-up delay-200">
                            {/* Typos corrected: 'beilieving' -> 'believing' */}
                            <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl">
                                Freedom lies in <span className='font-tribute'>believing</span> in yourself.
                            </h1>
                            <p className="mt-5 text-base font-normal leading-7 text-gray-500">
                                Be bold, be brave enough to be your true self. ...
                            </p>
                            
                            {/* Call to Action Button - ANIMATED */}
                            <div className="relative inline-flex mt-9 group animate-slide-up delay-400">
                                <div
                                    className="absolute transitiona-all duration-1000 opacity-70 inset-0 bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200">
                                </div>

                                <a href="#" title="Read Exclusive Blog"
                                    className="relative inline-flex items-center justify-center px-8 py-3 sm:text-sm sm:py-3.5 text-base font-semibold text-white transition-all duration-200 bg-indigo-600 border border-transparent rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
                                    role="button">
                                    Read Exclusive Blog
                                </a>
                            </div>
                        </div>

                        {/* Latest Picks (Thumbnails) - STAGGERED ANIMATION */}
                        <div className="self-end lg:order-last lg:pb-20 lg:col-span-3 animate-fade-in delay-600">
                            <p className="text-xs font-bold tracking-widest text-gray-500 uppercase">
                                ⚡️ Latest Picks
                            </p>

                            <div className="mt-6 space-y-6 lg:space-y-8">
                                {/* Staggered Item 1 */}
                                <div className="relative overflow-hidden animate-fade-in delay-700">
                                    <div className="flex items-start lg:items-center">
                                        <img className="object-cover w-12 h-12 rounded-lg shrink-0" src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/1/thumbnail-1.png" alt="Thumbnail 1: Redefining success" />
                                        <p className="ml-5 text-base font-bold leading-6 text-gray-900">
                                            <a href="#" title="">
                                                How a visual artist redefines success in graphic design
                                                <span className="absolute inset-0" aria-hidden="true"></span>
                                            </a>
                                        </p>
                                    </div>
                                </div>
                                {/* Staggered Item 2 */}
                                <div className="relative overflow-hidden animate-fade-in delay-800">
                                    <div className="flex items-start lg:items-center">
                                        <img className="object-cover w-12 h-12 rounded-lg shrink-0" src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/1/thumbnail-2.png" alt="Thumbnail 2: Redefining success" />
                                        <p className="ml-5 text-base font-bold leading-6 text-gray-900">
                                            <a href="#" title="">
                                                How a visual artist redefines success in graphic design
                                                <span className="absolute inset-0" aria-hidden="true"></span>
                                            </a>
                                        </p>
                                    </div>
                                </div>
                                {/* Staggered Item 3 */}
                                <div className="relative overflow-hidden animate-fade-in delay-900">
                                    <div className="flex items-start lg:items-center">
                                        <img className="object-cover w-12 h-12 rounded-lg shrink-0" src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/1/thumbnail-3.png" alt="Thumbnail 3: Redefining success" />
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

                        {/* Author Image - ANIMATED */}
                        <div className="self-end lg:col-span-5 animate-slide-in-right delay-400">
                            <img className="w-full mx-auto" src={hero_img} alt="A person standing confidently, symbolizing freedom and self-belief" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Hero;