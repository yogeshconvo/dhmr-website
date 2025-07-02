import React from "react";

function ButtonsJNMC() {
    return (
        <div className="bg-white font-oswald-medium py-20 px-4">
            <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">

                {/* Button 1 */}
                <a
                    href="#"
                    className="bg-[#F04E30] text-white text-center text-lg sm:text-xl py-3 rounded-md shadow-md transition hover:brightness-110"
                >
                    SVL + SPP
                </a>

                {/* Button 2 */}
                <a
                    href="#"
                    className="bg-[#102B64] text-white text-center text-lg sm:text-xl py-3 rounded-md shadow-md transition hover:brightness-110"
                >
                    Museum
                </a>

                {/* Button 3 */}
                <a
                    href="#"
                    className="bg-[#102B64] text-white text-center text-lg sm:text-xl py-3 rounded-md shadow-md transition hover:brightness-110"
                >
                    Cadaveric & Wet Lab
                </a>

                {/* Button 4 */}
                <a
                    href="#"
                    className="bg-[#102B64] text-white text-center text-lg sm:text-xl py-3 rounded-md shadow-md transition hover:brightness-110"
                >
                    NMC Nodal Centres Report
                </a>

            </div>
        </div>

    );
}

export default ButtonsJNMC;
