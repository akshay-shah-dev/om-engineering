import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed w-full top-0 z-50 bg-white shadow-sm border-b border-gray-100 py-4 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <Link href="/" className="flex flex-col items-start gap-0.5 group">
          <div className="text-2xl font-black tracking-tight text-[#F37130]">
            OM <span className="text-gray-800">ENGINEERING</span>
          </div>
          <span className="text-[10px] uppercase font-bold text-gray-500 tracking-widest hidden sm:block">
            The Complete Engineering Solution
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 text-sm font-semibold text-gray-600">
          <a href="#about" className="hover:text-[#F37130] transition-colors uppercase tracking-wide">About Us</a>
          <a href="#mission" className="hover:text-[#F37130] transition-colors uppercase tracking-wide">Mission</a>
          <a href="#services" className="hover:text-[#F37130] transition-colors uppercase tracking-wide">Services</a>
          <a href="#projects" className="hover:text-[#F37130] transition-colors uppercase tracking-wide">Projects</a>
        </nav>

        {/* Call to Action */}
        <a 
          href="#contact" 
          className="bg-[#F37130] text-white px-8 py-2.5 rounded-sm font-bold uppercase text-sm hover:bg-[#E55B1C] transition-all duration-300 shadow-xl shadow-[#F37130]/20 hidden md:inline-flex hover:-translate-y-0.5"
        >
          Contact Us
        </a>

        {/* Mobile Menu Placeholder - In a real setup, implement mobile sheet/drawer */}
        <button className="md:hidden text-gray-800 p-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </button>
      </div>
    </header>
  );
}
