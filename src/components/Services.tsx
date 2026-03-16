import React from 'react';
import { motion } from 'motion/react';
import { Stethoscope, Home, Activity, Heart, BriefcaseMedical, UserRound } from 'lucide-react';

const services = [
  {
    icon: <Home size={32} />,
    title: "In-Home Care",
    description: "Personalized care services in the comfort of your own home, maintaining independence and dignity."
  },
  {
    icon: <Stethoscope size={32} />,
    title: "Medical Services",
    description: "Experienced doctors and nurses working to meet your specific health care needs with confidence."
  },
  {
    icon: <Activity size={32} />,
    title: "Wellness Goals",
    description: "We strive to help you improve your quality of life and achieve your personal wellness goals."
  },
  {
    icon: <Heart size={32} />,
    title: "Preventative Care",
    description: "Not only do we treat existing conditions, we also work to prevent pain and illness from occurring."
  },
  {
    icon: <BriefcaseMedical size={32} />,
    title: "Multidisciplinary",
    description: "Dynamic services designed to exceed expectations through a collaborative medical approach."
  },
  {
    icon: <UserRound size={32} />,
    title: "Personalized Guidance",
    description: "Guiding and assisting our clients through every step of their health journey."
  }
];

export default function Services() {
  return (
    <section id="services" className="min-h-screen py-24 bg-slate-50 flex items-center">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-sm font-bold text-emerald-600 uppercase tracking-[0.3em] mb-6">Our Services</h2>
          <h3 className="text-5xl lg:text-7xl font-bold text-slate-900 mb-8 font-display">
            Immersive Care <span className="animate-shine italic">Solutions</span>
          </h3>
          <p className="text-xl text-slate-600 font-sans">
            Humble Healthcare’s team of experienced professionals will work with you to meet 
            your specific health care needs with compassion and confidence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="bg-white p-10 rounded-[40px] shadow-sm border border-slate-100 hover:shadow-2xl hover:shadow-emerald-600/10 transition-all group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-600/5 rounded-bl-[100px] -mr-10 -mt-10 transition-all group-hover:bg-emerald-600/10" />
              <div className="w-20 h-20 bg-emerald-50 rounded-3xl flex items-center justify-center text-emerald-600 mb-8 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-500 transform group-hover:rotate-6">
                {service.icon}
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-4 font-display">{service.title}</h4>
              <p className="text-slate-500 leading-relaxed font-sans text-lg">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
