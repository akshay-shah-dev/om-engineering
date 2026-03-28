export default function MissionValuesSection() {
  const values = [
    { title: "Integrity & Transparency", desc: "Maintained rigorously throughout every assignment." },
    { title: "Quality-Driven Engineering", desc: "Strictly aligned with national & international standards." },
    { title: "Safety-First Approach", desc: "Prioritized across design, execution, and inspection." },
    { title: "Client-Focused Solutions", desc: "Designed for practical and economical outcomes." },
    { title: "Continuous Improvement", desc: "Fostered through lifelong learning and innovation." }
  ];

  return (
    <section id="mission" className="py-24 bg-gray-50 border-t border-gray-100 relative overflow-hidden">
       {/* Visual Accent */}
       <div className="absolute left-0 top-0 w-1/3 h-full bg-white skew-x-12 -ml-20 hidden lg:block opacity-50 z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Mission Side */}
          <div className="lg:w-1/2 flex flex-col justify-center">
             <div className="inline-flex items-center gap-2 text-[#F37130] uppercase font-bold tracking-widest text-sm mb-4">
              <span className="w-8 h-0.5 bg-[#F37130]" /> Our Mission
             </div>
             
             <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-8 leading-tight">
               Delivering Reliable,<br/> Safe, & Cost-Effective <span className="text-[#F37130]">Solutions.</span>
             </h2>

             <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-light mb-8">
               To deliver excellence by combining technical mastery, ethical practices, and deep on-ground experience—ensuring long-term value for our clients and the communities we serve.
             </p>

             {/* Graphic Gear Illustration Placeholder */}
             <div className="w-64 h-64 bg-gray-200 mt-auto rounded-full shadow-inner flex items-center justify-center text-gray-400 font-bold uppercase tracking-widest text-xs relative overflow-hidden group">
                 <div className="absolute inset-0 bg-[#F37130]/5 group-hover:bg-[#F37130]/10 transition-colors" />
                 [Mission Graphic]
             </div>
          </div>

          {/* Core Values Side */}
          <div className="lg:w-1/2">
             <div className="inline-flex items-center gap-2 text-[#F37130] uppercase font-bold tracking-widest text-sm mb-8">
              <span className="w-8 h-0.5 bg-[#F37130]" /> Our Core Values
             </div>

             <div className="grid gap-6">
               {values.map((v, i) => (
                 <div key={i} className="bg-white p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:border-[#F37130]/30 transition-all group flex gap-5">
                   <div className="flex-shrink-0 w-12 h-12 bg-gray-50 group-hover:bg-[#F37130] text-[#F37130] group-hover:text-white flex items-center justify-center rounded-sm font-black text-xl transition-colors">
                     0{i + 1}
                   </div>
                   <div>
                     <h3 className="text-xl font-bold text-gray-900 mb-1">{v.title}</h3>
                     <p className="text-gray-600">{v.desc}</p>
                   </div>
                 </div>
               ))}
             </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
