export default function AboutSection() {
  const whyOmPoints = [
    "14+ Years of Proven Engineering Experience",
    "Multi-Disciplinary Technical Expertise",
    "Strong Government & PSU Project Background",
    "Code-Based, Practical & Cost-Effective Solutions",
    "Trusted Partner for Quality, Safety & Compliance"
  ];

  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* Main About & Founder Profile */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          <div className="flex-1 space-y-8">
            <div className="inline-flex items-center gap-2 text-[#F37130] uppercase font-bold tracking-widest text-sm mb-2">
              <span className="w-8 h-0.5 bg-[#F37130]" /> About Us
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 leading-tight">
              14+ Years of Technical Expertise & <span className="text-[#F37130]">Integrity.</span>
            </h2>

            <div className="prose prose-lg text-gray-600">
              <p>
                <strong>Om Engineering</strong> is a multidisciplinary engineering consultancy firm established in 2011. Built on strong technical expertise, integrity, and hands-on industry experience, the firm was single-handedly managed until 2025 before transitioning into a Proprietorship concern—marking a new phase of structured growth.
              </p>
              <p>
                With over 14+ years of professional experience, we have successfully delivered consultancy, third-party inspection, and project management services across civil, electrical, and mechanical engineering domains. Our robust portfolio spans government departments, PSUs, railways, infrastructure authorities, utilities, and private sector clients universally across India.
              </p>
            </div>
            
            <div className="pt-6 border-t border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Om Engineering?</h3>
              <p className="text-gray-600 mb-6">
                 Om Engineering combines deep technical knowledge with practical site experience to deliver reliable, safe, and cost-effective engineering solutions. Our long-standing association with government bodies, PSUs, and private clients reflects our commitment to quality, integrity, and professional excellence.
              </p>
              <ul className="space-y-3">
                {whyOmPoints.map((point, idx) => (
                  <li key={idx} className="flex items-center text-gray-700 font-medium">
                    <svg className="w-5 h-5 text-[#F37130] mr-3 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex-1">
            <div className="bg-[#F37130] p-8 md:p-12 text-white shadow-2xl relative overflow-hidden h-full flex flex-col justify-center">
              <div className="absolute top-0 right-0 opacity-10 transform translate-x-1/3 -translate-y-1/3">
                 <svg width="400" height="400" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 22h20L12 2zm0 4.1l6.9 13.9H5.1L12 6.1z"/></svg>
              </div>

              <div className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left">
                <div className="w-32 h-32 md:w-40 md:h-40 bg-white/20 rounded-full border-4 border-white mb-6 backdrop-blur-md flex items-center justify-center font-bold uppercase overflow-hidden text-sm tracking-widest text-white/60">
                   [Sachin Photo]
                </div>
                <h3 className="text-3xl font-black mb-2 tracking-tight">Sachin R. Barot</h3>
                <p className="text-white/80 font-bold uppercase tracking-widest text-sm mb-6 pb-6 border-b border-white/20 w-full md:max-w-xs">
                  Engineer & Chartered Engineer
                </p>
                <p className="text-lg leading-relaxed text-white/90">
                  Holding a PG Diploma in Business Development, Sachin R. Barot brings over <strong>20 years</strong> of vital experience executing major government infrastructure projects across Gujarat and beyond. 
                </p>
                <p className="mt-4 text-white/80 leading-relaxed italic">
                  "Combining strong engineering knowledge with practical project execution and strategic development capabilities to solve diverse challenges."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* One Team One Goal Section */}
        <div className="bg-gray-50 border border-gray-100 p-8 md:p-12 shadow-sm relative overflow-hidden">
           {/* Abstract shape */}
           <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-[#F37130]/5 rounded-full blur-3xl z-0" />
           
           <div className="relative z-10">
             <div className="inline-flex items-center gap-2 text-[#F37130] uppercase font-bold tracking-widest text-sm mb-6">
                <span className="w-8 h-0.5 bg-[#F37130]" /> One Team One Goal
             </div>
             <p className="text-lg text-gray-700 leading-relaxed font-medium mb-12 lg:pr-12">
               We have a highly competent and multidisciplinary technical team with more than 15 years of collective industry experience, comprising Architects, Structural Engineers, Hydraulic Engineers, Energy Auditors, Chartered Engineers, ASME Level II Engineers, and other skilled professionals across various engineering domains. Our team combines strong design expertise, field experience, inspection knowledge, and project management capabilities to deliver practical, code-compliant, and cost-effective solutions. With hands-on exposure to government infrastructure works, utilities, industrial projects, and large-scale developments, our professionals ensure quality execution, technical accuracy, safety compliance, and timely project delivery across diverse disciplines and segments.
             </p>
             
             <div className="grid md:grid-cols-2 gap-8">
                <div className="h-64 bg-gray-200 border-4 border-white shadow-lg flex items-center justify-center font-bold text-gray-400 uppercase text-xs tracking-widest">
                  [Team Group Photo Waterfront]
                </div>
                <div className="h-64 bg-gray-200 border-4 border-white shadow-lg flex items-center justify-center font-bold text-gray-400 uppercase text-xs tracking-widest">
                  [Team Office Working Photo]
                </div>
             </div>
           </div>
        </div>

      </div>
    </section>
  );
}
