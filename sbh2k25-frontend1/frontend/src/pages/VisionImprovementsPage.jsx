import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const VisionImprovementsPage = () => {
  const [activeWebsite, setActiveWebsite] = useState(0);
  
  // Mock data - would come from API or state management in real app
  const mockData = {
    websites: [
      { 
        name: 'Website 1', 
        url: 'https://example1.com',
        screenshot: 'https://placehold.co/800x600/333/white?text=Website+1+Screenshot',
        score: 72,
        improvements: [
          { 
            category: 'Color Contrast', 
            description: 'Increase contrast between text and background colors for better readability',
            severity: 'high'
          },
          { 
            category: 'Visual Hierarchy', 
            description: 'Improve the visual hierarchy to guide users through content more effectively',
            severity: 'medium'
          },
          { 
            category: 'Spacing', 
            description: 'Add more whitespace between elements to reduce visual clutter',
            severity: 'medium'
          },
          { 
            category: 'Mobile Responsiveness', 
            description: 'Optimize layout for mobile devices to prevent overflow issues',
            severity: 'high'
          }
        ]
      },
      { 
        name: 'Website 2', 
        url: 'https://example2.com',
        screenshot: 'https://placehold.co/800x600/222/white?text=Website+2+Screenshot',
        score: 85,
        improvements: [
          { 
            category: 'Image Optimization', 
            description: 'Compress images to improve page load times',
            severity: 'medium'
          },
          { 
            category: 'Button Design', 
            description: 'Make call-to-action buttons more prominent with better contrast',
            severity: 'low'
          },
          { 
            category: 'Font Consistency', 
            description: 'Use a more consistent font hierarchy throughout the site',
            severity: 'low'
          }
        ]
      },
      { 
        name: 'Website 3', 
        url: 'https://example3.com',
        screenshot: 'https://placehold.co/800x600/111/white?text=Website+3+Screenshot',
        score: 64,
        improvements: [
          { 
            category: 'Navigation', 
            description: 'Simplify navigation menu structure for easier user orientation',
            severity: 'high'
          },
          { 
            category: 'Color Palette', 
            description: 'Use a more harmonious color palette that aligns with brand identity',
            severity: 'medium'
          },
          { 
            category: 'Content Layout', 
            description: 'Restructure content layout to improve information hierarchy',
            severity: 'high'
          },
          { 
            category: 'Visual Clutter', 
            description: 'Reduce visual clutter by removing unnecessary decorative elements',
            severity: 'medium'
          },
          { 
            category: 'Footer Design', 
            description: 'Redesign footer to be more organized and user-friendly',
            severity: 'low'
          }
        ]
      }
    ]
  };

  // Get severity badge styling
  const getSeverityBadge = (severity) => {
    switch(severity) {
      case 'high':
        return 'bg-red-500/20 border-red-500/30 text-red-400';
      case 'medium':
        return 'bg-amber-500/20 border-amber-500/30 text-amber-400';
      case 'low':
        return 'bg-green-500/20 border-green-500/30 text-green-400';
      default:
        return 'bg-blue-500/20 border-blue-500/30 text-blue-400';
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-black text-gray-100">
      <Header />
      
      <main className="flex-grow relative z-10 py-16">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(79,70,229,0.1),transparent_70%)]"></div>
          <div className="absolute top-20 right-[10%] w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl animate-[pulse_3s_ease-in-out_infinite]"></div>
          <div className="absolute bottom-10 left-[5%] w-96 h-96 bg-fuchsia-500/10 rounded-full blur-3xl animate-[pulse_3s_ease-in-out_infinite] animation-delay-[2000ms]"></div>
        </div>
        
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-400">
                Vision Improvements
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              AI-powered visual analysis and recommendations to enhance your website design
            </p>
          </div>
          
          {/* Website Selector Tabs */}
          <div className="flex overflow-x-auto scrollbar-hide mb-8 border-b border-gray-800">
            {mockData.websites.map((website, index) => (
              <button
                key={index}
                onClick={() => setActiveWebsite(index)}
                className={`py-3 px-6 text-sm font-medium transition-colors duration-200 ${
                  activeWebsite === index 
                    ? 'text-cyan-400 border-b-2 border-cyan-500' 
                    : 'text-gray-400 hover:text-gray-300'
                }`}
              >
                {website.name}
              </button>
            ))}
          </div>
          
          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Screenshot */}
            <div className="lg:col-span-2">
              <div className="backdrop-blur-sm bg-black/30 rounded-xl border border-gray-800 shadow-[0_0_15px_rgba(0,0,0,0.2)] overflow-hidden">
                <div className="bg-gradient-to-r from-indigo-900/50 to-black/50 p-4 border-b border-gray-800">
                  <div className="flex justify-between items-center">
                    <h2 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-400">
                      Website Screenshot
                    </h2>
                    <div className="flex items-center">
                      <span className="text-sm text-gray-400 mr-2">Visual Score:</span>
                      <span className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-400">
                        {mockData.websites[activeWebsite].score}/100
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="p-4">
                  <div className="relative rounded-lg overflow-hidden border border-gray-700">
                    <img 
                      src={mockData.websites[activeWebsite].screenshot} 
                      alt={`${mockData.websites[activeWebsite].name} screenshot`}
                      className="w-full h-auto"
                    />
                    
                    {/* Annotation overlay - in a real app, these would be positioned based on actual issues */}
                    <div className="absolute inset-0">
                      {mockData.websites[activeWebsite].improvements.map((improvement, i) => {
                        // Generate random positions for demo purposes
                        // In a real app, these would be specific coordinates from the analysis
                        const top = 20 + (i * 15) % 70;
                        const left = 10 + (i * 20) % 80;
                        
                        return (
                          <div 
                            key={i}
                            className="absolute w-8 h-8 rounded-full bg-black/70 border-2 border-cyan-500 flex items-center justify-center text-cyan-400 font-bold cursor-pointer hover:bg-black transition-colors duration-200"
                            style={{ top: `${top}%`, left: `${left}%` }}
                            title={improvement.description}
                          >
                            {i + 1}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  
                  <div className="mt-4 text-sm text-gray-400">
                    <p>
                      <span className="font-medium text-white">URL:</span> {mockData.websites[activeWebsite].url}
                    </p>
                    <p className="mt-2">
                      The screenshot above shows the full page capture of the website with annotations highlighting areas for improvement.
                      Click on the numbered markers to see specific recommendations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Column - Improvements */}
            <div>
              <div className="backdrop-blur-sm bg-black/30 rounded-xl border border-gray-800 shadow-[0_0_15px_rgba(0,0,0,0.2)] overflow-hidden">
                <div className="bg-gradient-to-r from-indigo-900/50 to-black/50 p-4 border-b border-gray-800">
                  <h2 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-400">
                    Recommended Improvements
                  </h2>
                </div>
                
                <div className="p-4">
                  <div className="space-y-4">
                    {mockData.websites[activeWebsite].improvements.map((improvement, index) => (
                      <div key={index} className="bg-gray-900/30 border border-gray-800 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-black/70 border-2 border-cyan-500 flex items-center justify-center text-cyan-400 font-bold mr-3">
                            {index + 1}
                          </div>
                          <div>
                            <div className="flex items-center mb-2">
                              <h3 className="text-md font-medium text-white mr-2">{improvement.category}</h3>
                              <span className={`inline-block px-2 py-0.5 text-xs font-medium rounded-full border ${getSeverityBadge(improvement.severity)}`}>
                                {improvement.severity.charAt(0).toUpperCase() + improvement.severity.slice(1)}
                              </span>
                            </div>
                            <p className="text-sm text-gray-300">{improvement.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Summary Card */}
                  <div className="mt-6 bg-gradient-to-br from-indigo-900/30 to-fuchsia-900/30 rounded-lg border border-indigo-800/50 p-4">
                    <h3 className="text-md font-medium text-white mb-2">Summary</h3>
                    <p className="text-sm text-gray-300 mb-3">
                      {mockData.websites[activeWebsite].name} has {mockData.websites[activeWebsite].improvements.length} identified areas for visual improvement.
                    </p>
                    
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center">
                        <span className="inline-block w-3 h-3 rounded-full bg-red-500 mr-1"></span>
                        <span className="text-gray-400">High Priority: </span>
                        <span className="ml-1 text-white font-medium">
                          {mockData.websites[activeWebsite].improvements.filter(i => i.severity === 'high').length}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <span className="inline-block w-3 h-3 rounded-full bg-amber-500 mr-1"></span>
                        <span className="text-gray-400">Medium: </span>
                        <span className="ml-1 text-white font-medium">
                          {mockData.websites[activeWebsite].improvements.filter(i => i.severity === 'medium').length}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <span className="inline-block w-3 h-3 rounded-full bg-green-500 mr-1"></span>
                        <span className="text-gray-400">Low: </span>
                        <span className="ml-1 text-white font-medium">
                          {mockData.websites[activeWebsite].improvements.filter(i => i.severity === 'low').length}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Action Button */}
                  <button className="w-full mt-6 bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-[0_0_15px_rgba(6,182,212,0.5)]">
                    Download Full Report
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Additional Tips Section */}
          <section className="mt-16">
            <div className="backdrop-blur-sm bg-black/30 rounded-xl border border-gray-800 shadow-[0_0_15px_rgba(0,0,0,0.2)] overflow-hidden">
              <div className="bg-gradient-to-r from-indigo-900/50 to-black/50 p-6 border-b border-gray-800">
                <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-400">
                  General Design Improvement Tips
                </h2>
              </div>
              
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-5">
                    <div className="w-12 h-12 bg-indigo-500/20 rounded-full flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path>
                      </svg>
                    </div>
                    <h3 className="text-lg font-medium text-white mb-2">Color Harmony</h3>
                    <p className="text-sm text-gray-300">
                      Use complementary colors that work well together. Limit your palette to 3-5 primary colors for consistency. 
                      Ensure sufficient contrast between text and backgrounds for readability.
                    </p>
                  </div>
                  
                  <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-5">
                    <div className="w-12 h-12 bg-fuchsia-500/20 rounded-full flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-fuchsia-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path>
                      </svg>
                    </div>
                    <h3 className="text-lg font-medium text-white mb-2">Layout Structure</h3>
                    <p className="text-sm text-gray-300">
                      Maintain a consistent grid system throughout your design. Use whitespace effectively to create visual breathing room.
                      Ensure a clear visual hierarchy to guide users through your content.
                    </p>
                  </div>
                  
                  <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-5">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                      </svg>
                    </div>
                    <h3 className="text-lg font-medium text-white mb-2">Visual Consistency</h3>
                    <p className="text-sm text-gray-300">
                      Maintain consistent styling for similar elements. Use a coherent typography system with clear hierarchy.
                      Ensure icons and images follow a consistent style and quality standard.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default VisionImprovementsPage;
