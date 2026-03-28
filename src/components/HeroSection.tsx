export default function HeroSection() {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-gray-50 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[50%] h-[50%] bg-[#F37130]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F37130]/10 border border-[#F37130]/20 text-[#F37130] text-sm font-bold tracking-wide uppercase">
            <span className="w-2 h-2 rounded-full bg-[#F37130] animate-pulse" />
            ISO 9001, 45001 & 17020 Company
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-[1.1] tracking-tight">
            Designing, Managing &<br />
            Inspecting <span className="text-[#F37130]">Infrastructure</span> Excellence.
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed">
            Delivering robust, safe, and cost-effective civil, electrical, and mechanical engineering solutions across India for over a decade.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a href="#services" className="inline-flex justify-center items-center bg-[#F37130] text-white px-8 py-4 text-base font-bold uppercase tracking-wide hover:bg-[#E55B1C] transition-all shadow-xl shadow-[#F37130]/30 hover:-translate-y-1">
              Explore Services
            </a>
            <a href="#about" className="inline-flex justify-center items-center bg-white text-gray-800 border-2 border-gray-200 px-8 py-4 text-base font-bold uppercase tracking-wide hover:border-gray-300 hover:bg-gray-50 transition-all">
              Learn More
            </a>
          </div>
        </div>

        <div className="flex-1 w-full relative">
          <div className="aspect-[4/3] rounded-sm bg-gray-200 shadow-2xl overflow-hidden relative border-8 border-white p-4">
               {/* This will hold the actual cover image later when properly cropped, using a placeholder styling for now */}
               <div className="w-full h-full bg-gradient-to-tr from-gray-700 to-gray-900 flex items-center justify-center text-white/50 text-sm font-semibold uppercase tracking-widest">
                  [Cover Image Placeholder]
               </div>
          </div>
          {/* Decorative Square */}
          <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[#F37130] rounded-sm shadow-xl z-[-1]" />
        </div>
      </div>
    </section>
  );
}
