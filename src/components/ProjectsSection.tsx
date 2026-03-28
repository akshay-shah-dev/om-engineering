'use client';

import { useState } from 'react';

type TabType = 'Civil' | 'Mechanical' | 'Electrical';

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState<TabType>('Civil');

  const projects = {
    Civil: [
      { title: "WAPCOS Ltd.", label: "Since 2014", desc: "Successfully completed major integrated projects since 2014." },
      { title: "Bhuj-Chak Dam", label: "Kutch Region", desc: "Project Management Consultancy (PMC) deploying >40 engineers over 3 Lakh hectares." },
      { title: "SSNNL", label: "Gujarat", desc: "PMC / TPI securing 85% of North Gujarat & Banaskantha canal networks spanning 100km+." },
      { title: "R&B Department", label: "Bharuch Division", desc: "Third Party Inspection (TPI) across 148+ locations under Vadodara Circle." },
      { title: "MP PWD & MPIDC", label: "Madhya Pradesh", desc: "Completed critical building and infrastructure projects under PIU." },
      { title: "GSWC", label: "Ongoing Since 2014", desc: "Continuous execution for Gujarat State Warehousing Corporation for godown constructions." },
      { title: "Road & Highway Projects", label: "Across Gujarat", desc: "State/NH works across multiple municipalities under R&B State, Panchayat, and NH authorities." },
      { title: "Indian Railways", label: "Design Consultancy", desc: "Design Director scope spanning major/minor bridge design, structural, station, and yard designs." },
      { title: "Forest Department", label: "Gujarat", desc: "A myriad of infrastructure executions across multiple forest divisions." }
    ],
    Mechanical: [
      { title: "GAIL Gas Pipeline Project", label: "NDT & Consultancy", desc: "Provided mechanical consultancy services and carried out Non-Destructive Testing (NDT) for the GAIL gas pipeline project." },
      { title: "Irrigation Mechanical Dept.", label: "Ongoing", desc: "Continuously providing services to the Irrigation Mechanical Department across Gujarat from 2020 to date." },
      { title: "MS Pipeline & Valve Works", label: "Third Party Inspection", desc: "Delivered Third Party Inspection (TPI) services for MS pipelines, gate valves, and other allied mechanical works." },
      { title: "NDT Works for Irrigation Dams", label: "NDT Works", desc: "Executed Non-Destructive Testing (NDT) works for various irrigation dams across Gujarat." }
    ],
    Electrical: [
      { title: "India’s First EV Charging Depot", label: "AJL", desc: "Designed and executed India's first EV charging bus depot capable of charging 60 EV buses simultaneously. Managed solar rooftop integration." },
      { title: "Gujarat’s First Double-Decker EV Station", label: "AMTS", desc: "Designed Gujarat's first EV charging station specifically for double-decker electric buses." },
      { title: "Pirana Dump Site Substation", label: "Substation & Cable", desc: "Provided specialized electrical cable design and consultancy, including substation works." },
      { title: "High Lumen LED Chip Design", label: "AMC", desc: "Designed high-lumen output LED chip systems and successfully executed the tender process." },
      { title: "Street Light Redesign", label: "SRFDCL", desc: "Carried out decorative and redesign works for street lighting sections." },
      { title: "Decorative & Facade Lighting Projects", label: "Multiple Authorities", desc: "Executed various LED decorative lighting and façade lighting projects for AMC, SRFDCL, and others." },
      { title: "Kankaria Lake Projection", label: "Projection & Lighting", desc: "Executed 3D projection mapping, GOBO projection, and other decorative lighting works." },
      { title: "Ujjain Mahakal Lighting Project", label: "Ujjain", desc: "Completed Mahakal Temple area lighting, Mabaji Temple projection, and other decorative lighting works." },
      { title: "Energy Audit - Hospitals", label: "AMC", desc: "Conducted energy audit works for various hospitals such as SVP Hospital, LG Hospital, and others." },
      { title: "Chartered Engineer Services", label: "Ahmedabad", desc: "Plant & machinery valuation for various banks and safety audit works for major events." }
    ]
  };

  return (
    <section id="projects" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
          <div>
            <div className="inline-flex items-center gap-2 text-[#F37130] uppercase font-bold tracking-widest text-sm mb-4">
              <span className="w-8 h-0.5 bg-[#F37130]" /> Proven Track Record
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 leading-tight">
              Major Infrastructure <br/> <span className="text-[#F37130]">Projects</span> Portfolio
            </h2>
          </div>
          <div className="hidden md:block">
            <a href="#contact" className="inline-flex items-center gap-2 font-bold text-[#F37130] hover:text-[#E55B1C] transition-colors border-b-2 border-[#F37130] pb-1 uppercase tracking-wide">
              Start Your Project
              <svg className="w-5 h-5 mb-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </a>
          </div>
        </div>

        {/* Tab Selection */}
        <div className="flex flex-wrap gap-4 mb-12 border-b border-gray-100 pb-4">
           {(['Civil', 'Mechanical', 'Electrical'] as TabType[]).map((tab) => (
             <button
               key={tab}
               onClick={() => setActiveTab(tab)}
               className={`px-6 py-3 font-bold uppercase tracking-widest text-sm transition-all duration-300 relative ${
                 activeTab === tab 
                   ? "text-[#F37130]" 
                   : "text-gray-500 hover:text-gray-900 bg-gray-50 hover:bg-gray-100"
               }`}
             >
                {tab} Engineering
                {activeTab === tab && (
                  <span className="absolute bottom-[-16px] left-0 w-full h-1 bg-[#F37130] rounded-t-full" />
                )}
             </button>
           ))}
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500 key={activeTab}">
          {projects[activeTab].map((proj, i) => (
            <div key={i} className="group flex flex-col h-full bg-gray-50 border border-gray-100 hover:border-[#F37130]/30 hover:shadow-xl transition-all overflow-hidden flex-1 cursor-pointer">
              {/* Image Placeholder */}
              <div className="w-full h-40 bg-gray-200 relative overflow-hidden flex items-center justify-center font-bold text-gray-400 uppercase tracking-widest text-[10px]/tight text-center px-4">
                 <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent z-10" />
                 [Project Image: {proj.title}]
                 <div className="absolute bottom-4 left-4 z-20 text-white font-black tracking-wide bg-[#F37130] px-3 py-1 text-xs">
                    {proj.label}
                 </div>
              </div>
              <div className="p-6 flex-1 flex flex-col bg-white">
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-[#F37130] transition-colors leading-snug">
                  {proj.title}
                </h3>
                <p className="text-gray-600 font-medium text-sm leading-relaxed">
                  {proj.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
