
// import React from "react";
import React, { useState } from 'react';
const AssociatedHospitalSAHS = () => {
    const [activeCampus, setActiveCampus] = useState('wardha');
    const [activeHospital, setActiveHospital] = useState('wardha-hospital');

    const showLeadership = (campus) => {
        alert(`Opening ${campus.toUpperCase()} Leadership Page...`);
        // In real application: navigate to leadership page
    };
    return (
        <div className="bg-[#fefaf3] px-6 md:px-40 py-20">

            <h2 className="text-3xl md:text-4xl font-medium mb-10 text-[#707070]">
                <div className="border-t-4 border-[#EE4B2B] w-20 mb-2"></div>
                Associated Hospital
            </h2>
            {/* Custom Tabs Like Image */}
            <div className="flex justify-center space-x-6 mb-10 border-b border-gray-200">
                <button
                    className={`relative pb-2 text-lg font-bold transition-all duration-300 ${activeCampus === 'wardha'
                            ? 'text-gray-700 after:absolute after:left-0 after:bottom-0 after:h-1 after:w-full after:bg-[#EE4B2B]'
                            : 'text-gray-400'
                        }`}
                    onClick={() => setActiveCampus('wardha')}
                >
                   SASH Wardha  
                </button>
                <button
                    className={`relative pb-2 text-lg font-bold transition-all duration-300 ${activeCampus === 'wana'
                            ? 'text-gray-700 after:absolute after:left-0 after:bottom-0 after:h-1 after:w-full after:bg-[#EE4B2B]'
                            : 'text-gray-400'
                        }`}
                    onClick={() => setActiveCampus('wana')}
                >
                  SASH Wana  
                </button>
            </div>



            {/* Content Area */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 min-h-[300px]">
                {activeCampus === 'wardha' && (
                    <div className="text-center animate-fadeIn">
                        <h3 className="text-2xl font-semibold mb-6 text-[#58595B]">Acharya Vinoba Bhave Rural Hospital (AVBRH), Wardha</h3>
                        <p className="text-gray-700 mb-2 italic">
                            A 1,500+ Bedded Ecosystem for Real-World Learning
                        </p>
                        <p className="text-gray-600">
                            AVBRH is one of Central India’s largest teaching hospitals, providing Allied Health Sciences students with unmatched clinical exposure.
                            From diagnostics to surgical care, students train alongside specialists, gaining hands-on experience in real-time patient settings.
                        </p>
                        <p className="text-gray-600 mt-2">
                            Its multidisciplinary setup, community outreach, and state-of-the-art facilities foster critical thinking, clinical skills, and professional confidence—
                            preparing students to meet real-world healthcare challenges with competence and compassion.
                        </p>
                        <a href="#" className="text-[#9AD1FF] text-sm font-light underline">
                            Know more
                        </a>
                    </div>
                )}

                {activeCampus === 'wana' && (
                    <div className="text-center animate-fadeIn">
                        <h3 className="text-2xl font-semibold mb-6 text-[#58595B]">Shalinitai Meghe Hospital & Research Centre (SMHRC), Wana, Nagpur</h3>
                        <p className="text-gray-700 mb-2 italic">
                            Advanced Care. Applied Learning.
                        </p>
                        <p className="text-gray-600">
                            SMHRC is a modern multi-super specialty hospital and the clinical training ground for SAHS Wana. Students engage in active care across high-end diagnostic and therapeutic settings under the guidance of expert doctors. With leading infrastructure and a strong focus on equitable healthcare, SMHRC shapes students into skilled, ethical, and empathetic professionals—ready to serve diverse patient needs in a fast-evolving health landscape.

                        </p>
                        <a href="#" className="text-[#9AD1FF] text-sm font-light underline">
                            Know more
                        </a>
                    </div>
                )}
            </div>

            <style jsx>{`
                @keyframes fadeIn {
                    from { 
                        opacity: 0; 
                        transform: translateY(20px); 
                    }
                    to { 
                        opacity: 1; 
                        transform: translateY(0); 
                    }
                }
                
                .animate-fadeIn {
                    animation: fadeIn 0.5s ease-in-out;
                }
            `}</style>
        </div>
    );
};

export default AssociatedHospitalSAHS;