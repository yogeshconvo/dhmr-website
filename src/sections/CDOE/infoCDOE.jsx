import React from "react";

const CDOEInfoSection = () => {
    return (
        <div className="py-12 px-4">
            <h2 className="flex flex-wrap items-center justify-center sm:justify-between text-[#F04E30] font-oswald-medium text-3xl tracking-wider uppercase mb-6 text-center">
                <hr className="hidden sm:block flex-grow border-t border-[#F04E30]" />
                <span className="px-4 whitespace-normal text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
                    The Centre for Distance and Online Education (CDOE)
                </span>
                <hr className="hidden sm:block flex-grow border-t border-[#F04E30]" />
            </h2>

            <section className="bg-white text-center text-sm mx-auto max-w-7xl px-2 sm:px-4">
                {/* Main Heading */}
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-[500] font-oswald-medium text-[#58595B] leading-snug mb-6">
                    Flexible Online Programs, Backed by University-Grade Rigor
                </h1>

                {/* Body Text */}
                <div className="text-[#58595B] font-[Arial] tracking-wide  max-w-4xl mx-auto">
                    <p className="mb-4">
                        CDOE empowers learners with the flexibility to pursue high-quality, 
                        UGC-entitled education at their own pace. Backed by DMIHER 
                        (Deemed to be University), a UGC-recognized institution since 2005 
                        and compliant with Section 12B of the UGC Act, CDOE began offering 
                        its online programs in July 2020. These programs are designed to deliver 
                        the academic robustness of traditional classroom learning, while offering 
                        the convenience of self-paced, schedule-free access.
                    </p>

                    <p className="mb-4 tracking-wide  font-[Arial]">
                       Through real-time interactive classes, access to digital learning platforms, 
                       and personalized mentorship, students engage in a learning experience that’s 
                       not just convenient—but deeply enriching and future-ready.
                    </p>

                    {/* <p className="mb-4 font-[Arial]">
                        FEAT{" "}
                        <i>
                            empowers students to lead in tomorrow’s most transformative
                            fields—software, healthcare, and biotechnology.
                        </i>
                    </p> */}
                </div>
            </section>
        </div>
    );
};

export default CDOEInfoSection;
