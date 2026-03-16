import React from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import toast from 'react-hot-toast';

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message sent! We will get back to you shortly.', {
      style: {
        borderRadius: '16px',
        background: '#065f46',
        color: '#fff',
      },
    });
  };

  return (
    <section className="min-h-screen pt-32 pb-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-bold text-emerald-600 uppercase tracking-[0.3em] mb-6">Contact Us</h2>
          <h3 className="text-5xl lg:text-7xl font-bold text-slate-900 mb-8 font-display">
            Get in <span className="animate-shine italic">Touch</span>
          </h3>
          <p className="text-xl text-slate-600 font-sans">
            Have questions? We're here to help. Reach out to us via phone, email, or visit our office in Houston.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-1 space-y-8"
          >
            <div className="bg-white p-10 rounded-[40px] shadow-sm border border-slate-100">
              <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 mb-6">
                <MapPin size={32} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-2 font-display">Our Location</h4>
              <p className="text-slate-500">9894 Bissonnet St, Houston, TX 77036, USA</p>
            </div>

            <div className="bg-white p-10 rounded-[40px] shadow-sm border border-slate-100">
              <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 mb-6">
                <Phone size={32} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-2 font-display">Phone Numbers</h4>
              <div className="text-slate-500 space-y-1">
                <p>Cell: (832) 367-8828</p>
                <p>Office: (713) 393-7686</p>
                <p>FAX: (346) 444-6531</p>
              </div>
            </div>

            <div className="bg-white p-10 rounded-[40px] shadow-sm border border-slate-100">
              <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 mb-6">
                <Clock size={32} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-2 font-display">Working Hours</h4>
              <p className="text-slate-500">Mon - Fri: 09:00 am – 05:00 pm</p>
              <p className="text-emerald-600 font-bold mt-2">24/7 Emergency On-Call</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-2 bg-white p-12 lg:p-20 rounded-[60px] shadow-xl border border-slate-100"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Your Name</label>
                  <input
                    required
                    type="text"
                    className="w-full px-6 py-5 bg-slate-50 border border-slate-200 rounded-3xl focus:outline-none focus:ring-2 focus:ring-emerald-600/20 focus:border-emerald-600 transition-all font-sans"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Email Address</label>
                  <input
                    required
                    type="email"
                    className="w-full px-6 py-5 bg-slate-50 border border-slate-200 rounded-3xl focus:outline-none focus:ring-2 focus:ring-emerald-600/20 focus:border-emerald-600 transition-all font-sans"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Subject</label>
                <input
                  required
                  type="text"
                  className="w-full px-6 py-5 bg-slate-50 border border-slate-200 rounded-3xl focus:outline-none focus:ring-2 focus:ring-emerald-600/20 focus:border-emerald-600 transition-all font-sans"
                  placeholder="How can we help you?"
                />
              </div>
              <div className="space-y-3">
                <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">Message</label>
                <textarea
                  required
                  rows={6}
                  className="w-full px-6 py-5 bg-slate-50 border border-slate-200 rounded-3xl focus:outline-none focus:ring-2 focus:ring-emerald-600/20 focus:border-emerald-600 transition-all font-sans resize-none"
                  placeholder="Your message here..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-emerald-600 text-white py-6 rounded-3xl font-bold text-lg flex items-center justify-center gap-3 hover:bg-emerald-700 transition-all shadow-2xl shadow-emerald-600/30 hover:-translate-y-1"
              >
                Send Message
                <Send size={24} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
