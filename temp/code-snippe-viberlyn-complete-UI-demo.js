import React, { useState, useEffect } from 'react';

const ViberlynEssentialUI = () => {
  // Animation state variables
  const [animateEmpire, setAnimateEmpire] = useState(false);
  const [animateFreedom, setAnimateFreedom] = useState(false);
  const [animateAncient, setAnimateAncient] = useState(false);
  const [empireGlowIntensity, setEmpireGlowIntensity] = useState(0);
  const [ancientGlowIntensity, setAncientGlowIntensity] = useState(0);
  const [selectedTab, setSelectedTab] = useState('text');
  
  // Functions to trigger animations
  const triggerEmpireAnimation = () => {
    setAnimateEmpire(false);
    setTimeout(() => setAnimateEmpire(true), 10);
  };
  
  const triggerFreedomAnimation = () => {
    setAnimateFreedom(false);
    setTimeout(() => setAnimateFreedom(true), 10);
  };
  
  const triggerAncientAnimation = () => {
    setAnimateAncient(false);
    setTimeout(() => setAnimateAncient(true), 10);
  };
  
  const triggerAllAnimations = () => {
    triggerEmpireAnimation();
    triggerFreedomAnimation();
    triggerAncientAnimation();
  };
  
  // Effect for Evil Empire pulsing glow
  useEffect(() => {
    if (!animateEmpire) {
      setEmpireGlowIntensity(0);
      return;
    }
    
    let intensity = 0;
    let increasing = true;
    
    const interval = setInterval(() => {
      if (increasing) {
        intensity += 0.05;
        if (intensity >= 1) {
          intensity = 1;
          increasing = false;
        }
      } else {
        intensity -= 0.05;
        if (intensity <= 0.3) {
          intensity = 0.3;
          increasing = true;
        }
      }
      
      setEmpireGlowIntensity(intensity);
    }, 50);
    
    return () => clearInterval(interval);
  }, [animateEmpire]);
  
  // Effect for Ancient Society pulsing glow
  useEffect(() => {
    if (!animateAncient) {
      setAncientGlowIntensity(0);
      return;
    }
    
    let intensity = 0;
    let increasing = true;
    
    const interval = setInterval(() => {
      if (increasing) {
        intensity += 0.05;
        if (intensity >= 1) {
          intensity = 1;
          increasing = false;
        }
      } else {
        intensity -= 0.05;
        if (intensity <= 0.3) {
          intensity = 0.3;
          increasing = true;
        }
      }
      
      setAncientGlowIntensity(intensity);
    }, 50);
    
    return () => clearInterval(interval);
  }, [animateAncient]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-indigo-900 text-white p-4 md:p-6">
      <header className="text-center mb-6 md:mb-8">
        <h1 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-teal-200 to-yellow-300 mb-2" 
            style={{fontFamily: "'Times New Roman', serif", letterSpacing: "0.05em"}}>
          Chronicles of Viberlyn
        </h1>
        <div className="text-lg text-teal-300 opacity-80 font-medium">Essential UI Elements</div>
      </header>
      
      {/* Tab Navigation */}
      <div className="max-w-6xl mx-auto mb-6 flex flex-wrap justify-center gap-2">
        <button 
          onClick={() => setSelectedTab('text')} 
          className={`px-4 py-2 rounded-t-lg font-medium transition-all ${selectedTab === 'text' 
            ? 'bg-indigo-800 border-b-2 border-teal-400' 
            : 'bg-indigo-900/60 hover:bg-indigo-800/80'}`}
        >
          Text Styles
        </button>
        <button 
          onClick={() => setSelectedTab('ui')} 
          className={`px-4 py-2 rounded-t-lg font-medium transition-all ${selectedTab === 'ui' 
            ? 'bg-indigo-800 border-b-2 border-teal-400' 
            : 'bg-indigo-900/60 hover:bg-indigo-800/80'}`}
        >
          UI Elements
        </button>
      </div>
      
      {/* Text Styles Tab */}
      {selectedTab === 'text' && (
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Evil Empire Section */}
          <div className="bg-black/30 backdrop-blur-sm border-2 border-red-900 rounded-lg p-6 shadow-lg shadow-red-900/20">
            <h2 className="text-xl font-bold text-red-700 mb-4 flex items-center">
              <span className="mr-2 text-red-600">🟥</span> Evil Empire
            </h2>
            
            <div className="relative bg-gray-900/50 rounded-md p-6 overflow-hidden">
              <div className={`absolute inset-0 ${animateEmpire ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`} 
                   style={{
                     background: 'radial-gradient(circle, rgba(255, 0, 0, 0.15) 0%, rgba(0, 0, 0, 0) 70%)',
                     opacity: empireGlowIntensity * 0.7
                   }}></div>
              
              {/* Ember particle effects for Empire */}
              {animateEmpire && (
                <>
                  <div className="absolute h-1 w-1 rounded-full bg-yellow-500 opacity-70 left-1/4 top-2/3 animate-ping" style={{animationDuration: '1.5s'}}></div>
                  <div className="absolute h-1 w-1 rounded-full bg-red-500 opacity-70 left-2/3 top-1/3 animate-ping" style={{animationDuration: '1.2s'}}></div>
                  <div className="absolute h-1 w-1 rounded-full bg-orange-500 opacity-70 left-1/2 top-1/2 animate-ping" style={{animationDuration: '0.8s'}}></div>
                </>
              )}
              
              <div className="relative z-10 space-y-4">
                <p 
                  className={`text-lg ${animateEmpire ? 'animate-in fade-in-0 slide-in-from-right-8 duration-700' : 'opacity-0'}`}
                  style={{
                    color: '#FF1A1A',
                    textShadow: animateEmpire ? `0 0 ${6 + empireGlowIntensity * 4}px rgba(255, 0, 0, ${0.3 + empireGlowIntensity * 0.2}), 0 0 ${10 + empireGlowIntensity * 5}px rgba(255, 215, 0, ${0.2 + empireGlowIntensity * 0.1})` : 'none',
                    fontFamily: "'Times New Roman', serif",
                    fontWeight: 'bold'
                  }}
                >
                  The Emperor commands your presence at the Black Citadel.
                </p>
                
                <p 
                  className={`text-lg ${animateEmpire ? 'animate-in fade-in-0 slide-in-from-right-8 duration-700 delay-300' : 'opacity-0'}`}
                  style={{
                    color: '#FF1A1A',
                    textShadow: animateEmpire ? `0 0 ${6 + empireGlowIntensity * 4}px rgba(255, 0, 0, ${0.3 + empireGlowIntensity * 0.2}), 0 0 ${10 + empireGlowIntensity * 5}px rgba(255, 215, 0, ${0.2 + empireGlowIntensity * 0.1})` : 'none',
                    fontFamily: "'Times New Roman', serif",
                    fontWeight: 'bold'
                  }}
                >
                  The ancient relic must be seized from the rebels before the solstice.
                </p>
                
                <p 
                  className={`text-lg ${animateEmpire ? 'animate-in fade-in-0 slide-in-from-right-8 duration-700 delay-600' : 'opacity-0'}`}
                  style={{
                    color: '#FF1A1A',
                    textShadow: animateEmpire ? `0 0 ${6 + empireGlowIntensity * 4}px rgba(255, 0, 0, ${0.3 + empireGlowIntensity * 0.2}), 0 0 ${10 + empireGlowIntensity * 5}px rgba(255, 215, 0, ${0.2 + empireGlowIntensity * 0.1})` : 'none',
                    fontFamily: "'Times New Roman', serif",
                    fontWeight: 'bold'
                  }}
                >
                  Fail, and your fate will match that of your predecessor.
                </p>
              </div>
            </div>
            
            <button 
              onClick={triggerEmpireAnimation}
              className="mt-4 w-full bg-gradient-to-r from-red-900 to-red-800 hover:from-red-800 hover:to-red-700 text-white py-2 px-4 rounded-md font-medium border border-red-700 transition-all duration-300 hover:shadow-md hover:shadow-red-900/40 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-opacity-50"
            >
              Empire Text
            </button>
          </div>
          
          {/* Freedom Fighters Section */}
          <div className="bg-black/30 backdrop-blur-sm border-2 border-green-900 rounded-lg p-6 shadow-lg shadow-green-900/20">
            <h2 className="text-xl font-bold text-green-600 mb-4 flex items-center">
              <span className="mr-2 text-green-600">🌿</span> Freedom Fighters
            </h2>
            
            <div className="relative bg-gray-900/50 rounded-md p-6 overflow-hidden">
              <div className={`absolute inset-0 ${animateFreedom ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}
                   style={{background: 'radial-gradient(circle, rgba(34, 139, 34, 0.15) 0%, rgba(0, 0, 0, 0) 70%)'}}></div>
              
              {/* Particle effect for Freedom Fighters */}
              {animateFreedom && (
                <>
                  <div className="absolute h-1 w-1 rounded-full bg-green-400 opacity-70 left-1/4 top-1/3 animate-ping" style={{animationDuration: '2s'}}></div>
                  <div className="absolute h-1 w-1 rounded-full bg-green-400 opacity-70 left-2/3 top-1/2 animate-ping" style={{animationDuration: '3s'}}></div>
                  <div className="absolute h-1 w-1 rounded-full bg-green-400 opacity-70 left-1/2 top-1/4 animate-ping" style={{animationDuration: '2.5s'}}></div>
                </>
              )}
              
              <div className="relative z-10 space-y-4">
                <p 
                  className={`text-lg ${animateFreedom ? 'animate-in fade-in-0 slide-in-from-left-8 duration-700' : 'opacity-0'}`}
                  style={{
                    color: '#228B22',
                    textShadow: animateFreedom ? '0 0 8px rgba(34, 139, 34, 0.4)' : 'none',
                    fontFamily: "'Georgia', serif",
                    fontWeight: 'bold',
                    letterSpacing: '0.03em'
                  }}
                >
                  The Empire's forces approach the eastern forest by nightfall.
                </p>
                
                <p 
                  className={`text-lg ${animateFreedom ? 'animate-in fade-in-0 slide-in-from-left-8 duration-700 delay-300' : 'opacity-0'}`}
                  style={{
                    color: '#228B22',
                    textShadow: animateFreedom ? '0 0 8px rgba(34, 139, 34, 0.4)' : 'none',
                    fontFamily: "'Georgia', serif",
                    fontWeight: 'bold',
                    letterSpacing: '0.03em'
                  }}
                >
                  We must move the relic to the hidden grove beneath the ancient oak.
                </p>
                
                <p 
                  className={`text-lg ${animateFreedom ? 'animate-in fade-in-0 slide-in-from-left-8 duration-700 delay-600' : 'opacity-0'}`}
                  style={{
                    color: '#228B22',
                    textShadow: animateFreedom ? '0 0 8px rgba(34, 139, 34, 0.4)' : 'none',
                    fontFamily: "'Georgia', serif",
                    fontWeight: 'bold',
                    letterSpacing: '0.03em'
                  }}
                >
                  The future of Elderglow depends on our success tonight.
                </p>
              </div>
            </div>
            
            <button 
              onClick={triggerFreedomAnimation}
              className="mt-4 w-full bg-gradient-to-r from-green-900 to-green-800 hover:from-green-800 hover:to-green-700 text-white py-2 px-4 rounded-md font-medium border border-green-700 transition-all duration-300 hover:shadow-md hover:shadow-green-900/40 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-opacity-50"
            >
              Freedom Text
            </button>
          </div>
          
          {/* Ancient Society Section */}
          <div className="bg-black/30 backdrop-blur-sm border-2 border-indigo-900 rounded-lg p-6 shadow-lg shadow-indigo-900/20">
            <h2 className="text-xl font-bold text-indigo-400 mb-4 flex items-center">
              <span className="mr-2 text-indigo-500">🌀</span> Ancient Society
            </h2>
            
            <div className="relative bg-gray-900/50 rounded-md p-6 overflow-hidden">
              <div className={`absolute inset-0 ${animateAncient ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}
                   style={{
                     background: 'radial-gradient(circle, rgba(0, 206, 209, 0.15) 0%, rgba(0, 0, 0, 0) 70%)',
                     opacity: ancientGlowIntensity * 0.7
                   }}></div>
              
              {/* Mystical particle effects for Ancient Society */}
              {animateAncient && (
                <>
                  <div className="absolute h-1 w-1 rounded-full bg-cyan-400 opacity-70 left-1/4 top-1/3 animate-ping" style={{animationDuration: '3s'}}></div>
                  <div className="absolute h-1 w-1 rounded-full bg-indigo-400 opacity-70 left-2/3 top-1/2 animate-ping" style={{animationDuration: '2.5s'}}></div>
                  <div className="absolute h-1 w-1 rounded-full bg-cyan-300 opacity-70 left-1/2 top-2/3 animate-ping" style={{animationDuration: '2s'}}></div>
                </>
              )}
              
              <div className="relative z-10 space-y-4">
                <p 
                  className={`text-lg ${animateAncient ? 'animate-in fade-in-0 zoom-in-50 duration-700' : 'opacity-0'}`}
                  style={{
                    color: '#7B38B5',
                    textShadow: animateAncient ? `0 0 ${8 + ancientGlowIntensity * 4}px rgba(0, 206, 209, ${0.35 + ancientGlowIntensity * 0.2})` : 'none',
                    fontFamily: "'Palatino Linotype', serif",
                    fontWeight: 'bold'
                  }}
                >
                  The celestial alignment draws near, awakening dormant runes.
                </p>
                
                <p 
                  className={`text-lg ${animateAncient ? 'animate-in fade-in-0 zoom-in-50 duration-700 delay-300' : 'opacity-0'}`}
                  style={{
                    color: '#7B38B5',
                    textShadow: animateAncient ? `0 0 ${8 + ancientGlowIntensity * 4}px rgba(0, 206, 209, ${0.35 + ancientGlowIntensity * 0.2})` : 'none',
                    fontFamily: "'Palatino Linotype', serif",
                    fontWeight: 'bold'
                  }}
                >
                  Place the relic upon the altar when the twin moons reach zenith.
                </p>
                
                <p 
                  className={`text-lg ${animateAncient ? 'animate-in fade-in-0 zoom-in-50 duration-700 delay-600' : 'opacity-0'}`}
                  style={{
                    color: '#7B38B5',
                    textShadow: animateAncient ? `0 0 ${8 + ancientGlowIntensity * 4}px rgba(0, 206, 209, ${0.35 + ancientGlowIntensity * 0.2})` : 'none',
                    fontFamily: "'Palatino Linotype', serif",
                    fontWeight: 'bold'
                  }}
                >
                  Only then shall the forgotten knowledge reveal itself to the worthy.
                </p>
              </div>
            </div>
            
            <button 
              onClick={triggerAncientAnimation}
              className="mt-4 w-full bg-gradient-to-r from-indigo-900 to-indigo-800 hover:from-indigo-800 hover:to-indigo-700 text-white py-2 px-4 rounded-md font-medium border border-indigo-700 transition-all duration-300 hover:shadow-md hover:shadow-indigo-900/40 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50"
            >
              Ancient Text
            </button>
          </div>
          
          {/* Animation Controls */}
          <div className="mt-8 flex justify-center">
            <button 
              onClick={triggerAllAnimations}
              className="px-8 py-4 bg-gradient-to-r from-purple-800 to-indigo-900 hover:from-purple-700 hover:to-indigo-800 text-white rounded-lg font-bold text-lg transform transition-all duration-300 hover:scale-105 shadow-lg shadow-purple-800/30 hover:shadow-xl hover:shadow-purple-700/40 border border-indigo-700"
            >
              Animate All Text
            </button>
          </div>
        </div>
      )}
      
      {/* UI Elements Tab */}
      {selectedTab === 'ui' && (
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Dialogue Box */}
          <div className="bg-black/30 backdrop-blur-sm border-2 border-indigo-900 rounded-lg p-6 shadow-lg">
            <h2 className="text-xl font-bold text-indigo-400 mb-4">Dialogue Box</h2>
            
            <div className="border-2 border-indigo-900 bg-yellow-50/10 p-4 rounded-lg shadow-md">
              <div className="animate-in slide-in-from-left-4 duration-300 mb-2 pb-1 border-b border-cyan-700">
                <span className="font-bold text-cyan-300">Ancient Guardian</span>
              </div>
              <p className="text-white/90 fade-in duration-500 text-sm md:text-base">
                Seeker of knowledge, the path to the forgotten temple lies beyond the mist. Take this ancient relic as your guide.
              </p>
              <div className="mt-3 flex flex-col space-y-2">
                <div className="text-sm text-yellow-200 hover:text-yellow-300 hover:scale-105 transition-all cursor-pointer">
                  » Tell me more about the temple
                </div>
                <div className="text-sm text-yellow-200 hover:text-yellow-300 hover:scale-105 transition-all cursor-pointer">
                  » What dangers should I expect?
                </div>
              </div>
            </div>
          </div>
          
          {/* Button Showcase */}
          <div className="bg-black/30 backdrop-blur-sm border-2 border-gray-700 rounded-lg p-6 shadow-lg">
            <h2 className="text-xl font-bold text-gray-300 mb-4">Button Styles</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button className="px-6 py-3 bg-gradient-to-r from-red-900 to-red-800 hover:from-red-800 hover:to-red-700 text-white rounded-md font-medium border border-red-700 transition-all duration-300 hover:shadow-lg hover:shadow-red-800/30 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-opacity-50">
                Empire Action
              </button>
              
              <button className="px-6 py-3 bg-gradient-to-r from-green-900 to-green-800 hover:from-green-800 hover:to-green-700 text-white rounded-md font-medium border border-green-700 transition-all duration-300 hover:shadow-lg hover:shadow-green-800/30 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-700 focus:ring-opacity-50">
                Freedom Action
              </button>
              
              <button className="px-6 py-3 bg-gradient-to-r from-indigo-900 to-indigo-800 hover:from-indigo-800 hover:to-indigo-700 text-white rounded-md font-medium border border-indigo-700 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-800/30 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50">
                Ancient Action
              </button>
            </div>
            
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <button className="px-6 py-3 bg-transparent border-2 border-red-700 text-red-400 hover:text-white hover:bg-red-900/30 rounded-md font-medium transition-all duration-300 hover:shadow-lg hover:shadow-red-900/20">
                Empire Secondary
              </button>
              
              <button className="px-6 py-3 bg-transparent border-2 border-indigo-700 text-indigo-400 hover:text-white hover:bg-indigo-900/30 rounded-md font-medium transition-all duration-300 hover:shadow-lg hover:shadow-indigo-900/20">
                Ancient Secondary
              </button>
            </div>
          </div>
          
          {/* Inventory/Item Display */}
          <div className="bg-black/30 backdrop-blur-sm border-2 border-gray-700 rounded-lg p-6 shadow-lg">
            <h2 className="text-xl font-bold text-gray-300 mb-4">Inventory Items</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="border border-red-900/50 rounded bg-black/30 p-3 hover:border-red-700 transition-all hover:shadow-md hover:shadow-red-900/20 cursor-pointer">
                <h3 className="font-bold text-red-400">Empire Sigil</h3>
                <p className="text-xs text-gray-300 mt-1">Official seal of the Emperor's guard</p>
              </div>
              
              <div className="border border-green-900/50 rounded bg-black/30 p-3 hover:border-green-700 transition-all hover:shadow-md hover:shadow-green-900/20 cursor-pointer">
                <h3 className="font-bold text-green-400">Healing Herb</h3>
                <p className="text-xs text-gray-300 mt-1">Restores vitality when brewed</p>
              </div>
              
              <div className="border border-indigo-900/50 rounded bg-black/30 p-3 hover:border-indigo-700 transition-all hover:shadow-md hover:shadow-indigo-900/20 cursor-pointer">
                <h3 className="font-bold text-indigo-400">Ancient Rune</h3>
                <p className="text-xs text-gray-300 mt-1">Glowing symbol of forgotten knowledge</p>
              </div>
            </div>
          </div>
          
          {/* Loading Indicator */}
          <div className="bg-black/30 backdrop-blur-sm border-2 border-gray-700 rounded-lg p-6 shadow-lg">
            <h2 className="text-xl font-bold text-gray-300 mb-4">Loading Indicator</h2>
            
            <div className="flex items-center">
              <div className="relative h-2 bg-gray-700 rounded-full flex-grow overflow-hidden">
                <div className="absolute top-0 left-0 h-full w-1/2 bg-gradient-to-r from-teal-500 to-cyan-400 rounded-full animate-pulse"></div>
              </div>
              <div className="ml-4 text-cyan-300 w-24 text-sm font-mono">
                <span className="inline-block w-full">Loading<span className="animate-pulse">...</span></span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViberlynEssentialUI;