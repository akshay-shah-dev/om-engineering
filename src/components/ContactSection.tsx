'use client';

import { useState } from 'react';
import { Loader2 } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({ 
          access_key: "YOUR_WEB3FORMS_ACCESS_KEY_HERE", // NOTE: Replace this
          subject: `New Corporate Inquiry from Om Engineering Website`,
          ...formData
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || 'Failed to send inquiry');
      }

      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error: any) {
      setSubmitStatus('error');
      setErrorMessage(error.message || 'An unexpected error occurred.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-24 bg-gray-900 border-t border-gray-800 relative z-10 overflow-hidden text-white">
      {/* Visual Accent */}
      <div className="absolute right-0 top-0 w-1/3 h-full bg-[#F37130] skew-x-12 mr-20 opacity-90 hidden lg:block z-0 shadow-2xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/2 pt-8">
            <div className="inline-flex items-center gap-2 text-[#F37130] uppercase font-bold tracking-widest text-sm mb-4">
              <span className="w-8 h-0.5 bg-[#F37130]" /> Let's Work Together
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight mb-8">
              Ready to Discuss <br/> Your Next <span className="text-[#F37130]">Project?</span>
            </h2>

            <p className="text-xl text-gray-400 font-medium mb-10 max-w-lg leading-relaxed">
              Reach out to Om Engineering today for multi-disciplinary consulting, design, and inspection services.
            </p>

            <div className="space-y-6">
               <div className="flex items-center gap-4 text-gray-300 bg-gray-800 p-4 border border-gray-700 w-fit md:w-full max-w-sm hover:border-[#F37130]/50 transition-colors cursor-pointer">
                 <div className="w-12 h-12 bg-gray-900 flex items-center justify-center text-[#F37130]">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                 </div>
                 <div>
                   <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">Email Us</p>
                   <p className="font-medium text-[#F37130] lg:text-lg">akshay.ios2403@gmail.com</p>
                 </div>
               </div>
               
               <div className="flex items-center gap-4 text-gray-300 bg-gray-800 p-4 border border-gray-700 w-fit md:w-full max-w-sm hover:border-[#F37130]/50 transition-colors cursor-pointer">
                 <div className="w-12 h-12 bg-gray-900 flex items-center justify-center text-[#F37130]">
                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>
                 </div>
                 <div>
                   <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">Visit Website</p>
                   <p className="font-medium text-white lg:text-lg">www.omengineering.org</p>
                 </div>
               </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:w-1/2 flex justify-end">
             <div className="bg-white p-8 md:p-12 w-full lg:w-[90%] text-gray-900 shadow-2xl relative">
                {/* Visual Anchor */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-[#F37130]" />

                <h3 className="text-3xl font-black text-gray-900 mb-8 border-b-4 border-gray-100 pb-4 inline-block tracking-tight">
                  Send an Inquiry
                </h3>

                {submitStatus === 'success' ? (
                  <div className="text-center py-12 bg-gray-50 border border-gray-100 p-8 rounded-sm">
                    <div className="w-20 h-20 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner border border-emerald-100">
                      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                    <p className="text-gray-600 font-medium leading-relaxed">Thank you. We will review your inquiry and get back to you immediately.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-bold tracking-wide uppercase text-gray-600 mb-2">Full Name <span className="text-[#F37130]">*</span></label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-gray-50 border border-gray-200 text-gray-900 px-5 py-4 focus:ring-2 focus:ring-[#F37130]/50 focus:border-[#F37130] outline-none transition-all placeholder:text-gray-400"
                        placeholder="John Doe"
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="block text-sm font-bold tracking-wide uppercase text-gray-600 mb-2">Email <span className="text-[#F37130]">*</span></label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full bg-gray-50 border border-gray-200 text-gray-900 px-5 py-4 focus:ring-2 focus:ring-[#F37130]/50 focus:border-[#F37130] outline-none transition-all placeholder:text-gray-400"
                          placeholder="john@example.com"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-bold tracking-wide uppercase text-gray-600 mb-2">Phone</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full bg-gray-50 border border-gray-200 text-gray-900 px-5 py-4 focus:ring-2 focus:ring-[#F37130]/50 focus:border-[#F37130] outline-none transition-all placeholder:text-gray-400"
                          placeholder="+91..."
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-bold tracking-wide uppercase text-gray-600 mb-2">Project Details <span className="text-[#F37130]">*</span></label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full bg-gray-50 border border-gray-200 text-gray-900 px-5 py-4 focus:ring-2 focus:ring-[#F37130]/50 focus:border-[#F37130] outline-none transition-all resize-none placeholder:text-gray-400"
                        placeholder="How can we help you?"
                      />
                    </div>

                    {submitStatus === 'error' && (
                      <div className="p-4 bg-red-50 border border-red-200 text-red-600 text-sm font-medium rounded-sm">
                        {errorMessage}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex justify-center items-center bg-[#F37130] text-white hover:bg-[#E55B1C] font-bold tracking-widest uppercase py-4 transition-colors disabled:opacity-70 disabled:cursor-not-allowed shadow-xl shadow-[#F37130]/30 hover:-translate-y-0.5"
                    >
                      {isSubmitting ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Send Message'}
                    </button>
                  </form>
                )}
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
