"use client";

import React from "react";
import { Users } from "lucide-react";

export default function ExecutiveBoard() {
  return (
    <section id="executive-board" className="relative py-24 bg-[#0B192C] overflow-hidden border-t border-[#E2C799]/10">
      {/* Background blueprint grids */}
      <div className="absolute inset-0 blueprint-grid opacity-30 pointer-events-none"></div>
      
      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#E2C799]/5 to-transparent blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-sans tracking-[0.3em] uppercase text-[#E2C799] font-semibold">
            Leadership
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-white tracking-wide mt-2">
            Executive Board
          </h2>
          <p className="font-sans text-slate-400 text-sm mt-3 uppercase tracking-widest">
            The guiding minds steering structure, precision, and global dialogue at FormaMUN 2026.
          </p>
          <div className="w-16 h-[1px] bg-[#E2C799] mx-auto mt-4 opacity-55"></div>
        </div>

        {/* Executive Board Showcase Card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative p-8 md:p-12 rounded-lg bg-[#060E1A]/80 border border-[#E2C799]/20 backdrop-blur-md shadow-2xl overflow-hidden group hover:border-[#E2C799]/40 transition-all duration-300">
            {/* Architectural Grid Corner Accents */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#E2C799]/30"></div>
            <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#E2C799]/30"></div>
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#E2C799]/30"></div>
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#E2C799]/30"></div>

            {/* Inner Blueprint Elevation Lines */}
            <div className="absolute inset-x-0 top-1/2 h-[1px] bg-[#E2C799]/5 pointer-events-none"></div>
            <div className="absolute inset-y-0 left-1/2 w-[1px] bg-[#E2C799]/5 pointer-events-none"></div>

            <div className="relative z-10 flex flex-col items-center text-center py-6">
              {/* Shield/Badge Icon wrapper */}
              <div className="p-4 rounded-full bg-[#E2C799]/5 border border-[#E2C799]/20 text-[#E2C799] mb-6 shadow-[0_0_20px_rgba(226,199,153,0.1)] group-hover:scale-105 transition-transform duration-500">
                <Users className="w-10 h-10 stroke-[1.5]" />
              </div>

              {/* Title & Announcement */}
              <h3 className="font-serif text-2xl md:text-3xl text-white tracking-widest uppercase mb-4">
                To Be Announced
              </h3>
              
              <p className="font-sans text-sm md:text-base text-slate-400 max-w-xl leading-relaxed mb-8">
                Our team of directors and board members is currently being finalized. The official list of executive board members, their portfolios, and introductory profiles will be unveiled here shortly.
              </p>

              {/* Status Indicator */}
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded border border-[#E2C799]/30 bg-[#E2C799]/5">
                <span className="w-2 h-2 rounded-full bg-[#E2C799] animate-ping"></span>
                <span className="text-xs font-mono tracking-widest text-[#E2C799] uppercase">
                  Finalizing Portfolios
                </span>
              </div>
            </div>
            
            {/* Background architectural detail watermark */}
            <div className="absolute -right-16 -bottom-16 w-64 h-64 border border-[#E2C799]/5 rounded-full pointer-events-none select-none"></div>
            <div className="absolute -left-16 -top-16 w-64 h-64 border border-[#E2C799]/5 rounded-full pointer-events-none select-none"></div>
          </div>
        </div>

      </div>
    </section>
  );
}
