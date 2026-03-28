export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 py-12 border-t flex flex-col items-center justify-center border-gray-900 text-center relative z-20">
       <div className="text-2xl font-black tracking-tight text-[#F37130] mb-4 opacity-80">
         OM <span className="text-white">ENGINEERING</span>
       </div>
       <p className="mb-4 max-w-sm text-sm">
         The Complete Engineering Solution. Designing, Managing & Inspecting Infrastructure Excellence.
       </p>
       <p className="text-xs uppercase tracking-widest text-[#F37130] font-bold mb-8">An ISO 9001, 45001 AND 17020 COMPANY</p>
       
       <div className="w-24 h-[1px] bg-gray-800 mb-8" />
       
       <p className="text-sm">
         &copy; {new Date().getFullYear()} Om Engineering. All Rights Reserved.
       </p>
    </footer>
  );
}
