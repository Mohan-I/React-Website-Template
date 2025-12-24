import React, { useEffect, useState } from 'react';
import './hero.css';
import hero_img from '../../assets/images/hero.webp';
// Fallback image in case the main one doesn't load
import fallback_img from '../../assets/images/source.gif';

const Hero = () => {
  const [imageError, setImageError] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add mousemove effect for parallax (only on desktop)
    const handleMouseMove = (e) => {
      if (window.innerWidth > 768) {
        const x = (e.clientX / window.innerWidth) * 50;
        const y = (e.clientY / window.innerHeight) * 50;
        const stars = document.querySelector('.stars');
        const nebula = document.querySelector('.nebula');
        if (stars) stars.style.transform = `translate(${x}px, ${y}px)`;
        if (nebula) nebula.style.transform = `translate(${-x * 0.5}px, ${-y * 0.5}px)`;
      }
    };

    // Check for mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check
    checkMobile();

    // Event listeners
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  // Handle image loading error
  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className="component-container">
      {/* Parallax Background */}
      <div className="parallax-bg">
        <div className="stars"></div>
        <div className="nebula"></div>
        <div className="grid-overlay"></div>
      </div>

      <section className="hero-section relative pt-16 md:pt-24 lg:pt-32">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-8 gap-y-8 lg:gap-y-12">
            
            {/* Content Area - Sci-Fi Style */}
            <div className="self-center lg:col-span-5 animate-slide-up delay-200 order-1 lg:order-1">
              <div className="sci-fi-card">
                <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold text-gradient text-cyber leading-tight">
                  Freedom lies in <span className="glow">believing</span> in yourself.
                </h1>
                <p className="mt-4 sm:mt-6 text-sm sm:text-base leading-6 sm:leading-7 text-gray-300">
                  Be bold, be brave enough to be your true self. In a universe of infinite possibilities, 
                  your consciousness is the ultimate interface. Download the latest neural update and 
                  transcend beyond perceived limitations.
                </p>
                
                {/* Sci-Fi CTA Button */}
                <div className="relative inline-flex mt-6 sm:mt-10 group animate-slide-up delay-400">
                  <button className="sci-fi-btn text-sm sm:text-base">
                    <span className="flex items-center gap-2">
                      <span className="pulse-animation hidden sm:inline">⬡</span>
                      Download Neural Interface v2.1
                      <span className="pulse-animation hidden sm:inline">⬡</span>
                    </span>
                  </button>
                </div>
              </div>
            </div>

            {/* Author Image - Sci-Fi Style */}
            <div className="self-end lg:col-span-4 animate-slide-in-right delay-400 order-3 lg:order-2 mt-8 lg:mt-0">
              <div className="author-container float-animation">
                <img 
                  className="w-full h-auto rounded-lg"
                  src={imageError ? fallback_img : hero_img}
                  alt="Neural interface user in cyberpunk environment"
                  onError={handleImageError}
                  loading="lazy"
                  style={{
                    filter: 'sepia(0.2) saturate(1.5) hue-rotate(180deg) contrast(1.2)',
                    mixBlendMode: isMobile ? 'normal' : 'screen',
                    minHeight: '300px',
                    objectFit: 'cover'
                  }}
                />
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 bg-gradient-to-t from-black/90 to-transparent">
                  <div className="text-xs sm:text-sm text-cyber">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                      <span className="text-neon-blue">NEURAL CONNECTION: {isMobile ? 'STABLE' : 'ACTIVE'}</span>
                    </div>
                    <div className="mt-1 text-xs text-gray-400 truncate">USER: ALPHA_OPERATOR | STATUS: ONLINE</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Latest Picks - Sci-Fi Terminal Style */}
            <div className="self-end lg:col-span-3 animate-fade-in delay-600 order-2 lg:order-3 mt-8 lg:mt-0">
              <div className="sci-fi-card">
                <div className="flex items-center gap-2 mb-4 sm:mb-6">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
                  <p className="ml-2 text-xs font-bold tracking-widest text-neon-blue uppercase text-cyber truncate">
                    ⚡️ {isMobile ? 'DATA FEED' : 'DATASTREAM FEED'}
                  </p>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  {/* Terminal Items */}
                  <div className="pick-item animate-fade-in delay-700">
                    <div className="flex items-start">
                      <div className="relative flex-shrink-0">
                        <img 
                          className="object-cover w-10 h-10 sm:w-12 sm:h-12 rounded"
                          src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/1/thumbnail-1.png" 
                          alt="Data packet 001"
                          loading="lazy"
                          onError={(e) => {
                            e.target.src = "https://via.placeholder.com/48/0a0a1a/00f3ff?text=D01";
                          }}
                        />
                        <div className="absolute -top-1 -right-1 w-2 h-2 sm:w-3 sm:h-3 bg-neon-blue rounded-full animate-pulse"></div>
                      </div>
                      <div className="ml-3 sm:ml-4 min-w-0">
                        <p className="text-xs sm:text-sm font-bold leading-5 text-gray-200 truncate">
                          <a href="#" className="hover:text-neon-blue transition-colors">
                            Neural Architecture v3.7 Update
                          </a>
                        </p>
                        <p className="mt-1 text-xs text-gray-400 truncate">AI_DESIGN_MODULE.sys</p>
                      </div>
                    </div>
                  </div>

                  <div className="pick-item animate-fade-in delay-800">
                    <div className="flex items-start">
                      <div className="relative flex-shrink-0">
                        <img 
                          className="object-cover w-10 h-10 sm:w-12 sm:h-12 rounded"
                          src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/1/thumbnail-2.png" 
                          alt="Data packet 002"
                          loading="lazy"
                          onError={(e) => {
                            e.target.src = "https://via.placeholder.com/48/0a0a1a/b967ff?text=D02";
                          }}
                        />
                        <div className="absolute -top-1 -right-1 w-2 h-2 sm:w-3 sm:h-3 bg-neon-purple rounded-full animate-pulse"></div>
                      </div>
                      <div className="ml-3 sm:ml-4 min-w-0">
                        <p className="text-xs sm:text-sm font-bold leading-5 text-gray-200 truncate">
                          <a href="#" className="hover:text-neon-purple transition-colors">
                            Quantum Processing Techniques
                          </a>
                        </p>
                        <p className="mt-1 text-xs text-gray-400 truncate">QUANTUM_CORE.log</p>
                      </div>
                    </div>
                  </div>

                  <div className="pick-item animate-fade-in delay-900">
                    <div className="flex items-start">
                      <div className="relative flex-shrink-0">
                        <img 
                          className="object-cover w-10 h-10 sm:w-12 sm:h-12 rounded"
                          src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/1/thumbnail-3.png" 
                          alt="Data packet 003"
                          loading="lazy"
                          onError={(e) => {
                            e.target.src = "https://via.placeholder.com/48/0a0a1a/ff00ff?text=D03";
                          }}
                        />
                        <div className="absolute -top-1 -right-1 w-2 h-2 sm:w-3 sm:h-3 bg-neon-pink rounded-full animate-pulse"></div>
                      </div>
                      <div className="ml-3 sm:ml-4 min-w-0">
                        <p className="text-xs sm:text-sm font-bold leading-5 text-gray-200 truncate">
                          <a href="#" className="hover:text-neon-pink transition-colors">
                            Holographic Interface Design
                          </a>
                        </p>
                        <p className="mt-1 text-xs text-gray-400 truncate">HOLOGRAM_PROTOCOL.dat</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Terminal Status */}
                <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-gray-800">
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span className="flex items-center gap-2 truncate">
                      <span className="w-1 h-1 sm:w-2 sm:h-2 bg-green-500 rounded-full animate-pulse"></span>
                      SYSTEM: ONLINE
                    </span>
                    <span className="truncate ml-2">DATA: 3/∞</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Elements - Only show on desktop */}
      {!isMobile && (
        <>
          <div className="absolute top-1/4 left-4 sm:left-10 w-3 h-3 sm:w-4 sm:h-4 bg-neon-blue rounded-full opacity-50 animate-pulse"></div>
          <div className="absolute top-1/3 right-4 sm:right-20 w-4 h-4 sm:w-6 sm:h-6 bg-neon-purple rounded-full opacity-30 animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-1/4 left-1/4 w-2 h-2 sm:w-3 sm:h-3 bg-neon-pink rounded-full opacity-60 animate-pulse" style={{animationDelay: '2s'}}></div>
        </>
      )}
    </div>
  );
}

export default Hero;