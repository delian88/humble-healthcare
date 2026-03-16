import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const images = [
  "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800", // Doctor with patient
  "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&q=80&w=800", // Nurse helping elderly
  "https://images.unsplash.com/photo-1559839734-2b71f1e3c770?auto=format&fit=crop&q=80&w=800", // Doctors group
  "https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&q=80&w=800", // Medical consultation
  "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&q=80&w=800", // Hospital care
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-50 -skew-x-12 transform origin-top-right hidden lg:block" />
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-emerald-600/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Available 24/7 for Emergencies
          </div>
          
          <h1 className="text-6xl lg:text-8xl font-bold text-slate-900 leading-[1.05] mb-8 font-display">
            Excellence in <span className="animate-shine italic">In-Home</span> Care Services
          </h1>
          
          <p className="text-xl text-slate-600 mb-10 max-w-xl leading-relaxed font-sans">
            Humble Healthcare Inc. is committed to providing quality level health services, 
            medical experience, and a commitment to wellness to all our patients in Houston.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-10">
            <div className="flex items-center gap-2 text-slate-700 font-medium">
              <CheckCircle2 className="text-emerald-500" size={20} />
              <span>Same Day Service</span>
            </div>
            <div className="flex items-center gap-2 text-slate-700 font-medium">
              <CheckCircle2 className="text-emerald-500" size={20} />
              <span>Personalized Care</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#appointment"
              className="bg-emerald-600 text-white px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-600/20 hover:-translate-y-1"
            >
              Book Appointment
              <ArrowRight size={20} />
            </a>
            <a
              href="#services"
              className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-slate-50 transition-all hover:-translate-y-1"
            >
              Our Services
            </a>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative"
        >
          {/* Bento Grid layout for the 5 images */}
          <div className="grid grid-cols-12 grid-rows-12 gap-4 h-[500px] lg:h-[600px]">
            <div className="col-span-8 row-span-7 rounded-3xl overflow-hidden shadow-2xl">
              <img src={images[0]} alt="Healthcare" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
            </div>
            <div className="col-span-4 row-span-5 rounded-3xl overflow-hidden shadow-2xl">
              <img src={images[1]} alt="Healthcare" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
            </div>
            <div className="col-span-4 row-span-7 rounded-3xl overflow-hidden shadow-2xl">
              <img src={images[2]} alt="Healthcare" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
            </div>
            <div className="col-span-4 row-span-5 rounded-3xl overflow-hidden shadow-2xl">
              <img src={images[3]} alt="Healthcare" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
            </div>
            <div className="col-span-4 row-span-5 rounded-3xl overflow-hidden shadow-2xl">
              <img src={images[4]} alt="Healthcare" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
            </div>
          </div>
          
          {/* Floating Stats */}
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-2xl border border-slate-100 hidden sm:block">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600">
                <HeartPulse size={28} />
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">100%</div>
                <div className="text-sm text-slate-500 font-medium">Patient Satisfaction</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function HeartPulse({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      <path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27" />
    </svg>
  );
}
