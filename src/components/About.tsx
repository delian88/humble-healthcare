import React from 'react';
import { motion } from 'motion/react';
import { Shield, Users, Clock, MapPin } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: <Shield className="text-emerald-600" size={24} />,
      title: "Experience & Professionalism",
      description: "Committed to excellence in home care services using a trained team of professionals."
    },
    {
      icon: <Users className="text-emerald-600" size={24} />,
      title: "Personalized Care",
      description: "We provide excellent care through personalized services, guiding and assisting our clients."
    },
    {
      icon: <Clock className="text-emerald-600" size={24} />,
      title: "24/7 On-Call",
      description: "Emergency services available 24 hours a day to ensure your safety and comfort."
    },
    {
      icon: <MapPin className="text-emerald-600" size={24} />,
      title: "Houston & Surrounding",
      description: "Serving all over Houston and the surrounding areas with same-day service."
    }
  ];

  return (
    <section id="about" className="min-h-screen py-24 bg-white flex items-center">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1000" 
                alt="Medical Professional" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-emerald-600 p-10 rounded-[40px] shadow-2xl hidden lg:block">
              <div className="text-white text-center">
                <div className="text-5xl font-bold mb-2 font-display italic">15+</div>
                <div className="text-sm font-bold uppercase tracking-widest opacity-80">Years Experience</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-bold text-emerald-600 uppercase tracking-[0.3em] mb-6">Our Mission</h2>
            <h3 className="text-5xl lg:text-7xl font-bold text-slate-900 mb-8 leading-[1.1] font-display">
              Independence & <span className="animate-shine italic">Dignity</span> at Home
            </h3>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed font-sans">
              Every journey begins with a step. Now, you can take that step whenever you're ready, we're here to serve you! 
              Humble Healthcare Inc. is committed to excellence in home care services.
            </p>
            <p className="text-lg text-slate-500 mb-12 leading-relaxed italic border-l-4 border-emerald-600 pl-6">
              "Our goal is to exceed the expectations of our communities by providing adequate care to our clients 
              through personalized services, guiding and assisting our clients."
            </p>

            <div className="grid sm:grid-cols-2 gap-8">
              {features.map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                    <p className="text-sm text-slate-500 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
