export default function ServicesSection() {
  const coreServices = [
    { title: "Project Management Consultancy (PMC)", desc: "Professional planning, coordination, monitoring, and control of projects to ensure timely completion, quality compliance, and cost efficiency." },
    { title: "Design & Engineering Services", desc: "Preparation of technically sound, code-compliant designs across civil, structural, electrical, and mechanical disciplines." },
    { title: "Architecture & Planning", desc: "Functional and aesthetic architectural solutions integrated with engineering and regulatory requirements." },
    { title: "Civil Engineering Consultancy", desc: "Engineering support for infrastructure projects with focus on durability, safety, and lifecycle performance." },
    { title: "Structural Engineering & Stability", desc: "Structural analysis, design verification, and stability assessments for new and existing structures." },
    { title: "Electrical Engineering Services", desc: "Design, audit, and supervision of power systems, lighting, substations, and safety-critical electrical works." },
    { title: "Mechanical Engineering & Inspection", desc: "Third-party inspection and technical assessment of mechanical fabrication, installation, and maintenance works." },
    { title: "NDT & Testing Services", desc: "Non-destructive testing to assess material integrity, defects, and service life without damaging assets." },
    { title: "Third-Party Inspection (TPI)", desc: "Independent inspection services ensuring quality, workmanship, and standard compliance at vendor and site locations." },
    { title: "Quality Assurance & Compliance", desc: "Systematic quality control, documentation review, and compliance verification across project stages." },
    { title: "Energy & Electrical Safety Audit", desc: "Identification of energy-saving opportunities and electrical safety compliance to reduce risks and operating costs." },
    { title: "Pre-Project & Site Support Activities", desc: "Early-stage support including surveys, feasibility studies, tender documentation, and on-site supervision." },
  ];

  return (
    <section id="services" className="py-24 bg-[#F37130] relative text-white">
       {/* Background accent */}
       <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none overflow-hidden flex items-center justify-center">
          <svg className="w-[1200px] h-[1200px] animate-spin-slow" viewBox="0 0 100 100" fill="white"><circle cx="50" cy="50" r="40" stroke="white" strokeWidth="0.5" fill="none"/></svg>
       </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16 md:mb-24 text-center max-w-3xl mx-auto">
           <div className="inline-flex items-center justify-center gap-2 text-white/90 uppercase font-bold tracking-widest text-sm mb-4">
            <span className="w-8 h-0.5 bg-white/70" /> Our Core Service Portfolio <span className="w-8 h-0.5 bg-white/70" />
           </div>
           
           <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight mb-6 tracking-tight">
             Comprehensive Engineering <br/> <span className="text-gray-900 drop-shadow-sm">Solutions.</span>
           </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {coreServices.map((svc, i) => (
            <div key={i} className="bg-white/10 backdrop-blur-md border border-white/20 p-6 hover:-translate-y-1.5 hover:bg-white/20 hover:border-white/40 transition-all duration-300 shadow-lg group cursor-pointer flex flex-col">
              <h3 className="text-lg font-bold mb-3 text-white group-hover:text-gray-900 transition-colors uppercase tracking-tight">{svc.title}</h3>
              <p className="text-white/80 leading-relaxed text-sm font-medium flex-1">
                {svc.desc}
              </p>
              
              <div className="mt-6 h-24 w-full bg-white/5 border border-white/10 flex items-center justify-center text-[10px] font-bold tracking-widest text-white/30 uppercase opacity-50 group-hover:opacity-100 transition-opacity">
                 [Img]
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
