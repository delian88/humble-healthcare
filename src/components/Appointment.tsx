import React, { useState } from 'react';
import { motion } from 'motion/react';
import toast from 'react-hot-toast';
import { Calendar, Clock, User, Mail, MessageSquare, Send } from 'lucide-react';

export default function Appointment() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success('Appointment request sent successfully! We will contact you soon.', {
        duration: 5000,
        position: 'top-center',
        style: {
          borderRadius: '16px',
          background: '#065f46',
          color: '#fff',
          fontWeight: 'bold',
        },
      });
      setFormData({ name: '', email: '', date: '', time: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="appointment" className="min-h-screen py-24 bg-white relative overflow-hidden flex items-center">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-emerald-50 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl opacity-50" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-slate-100 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl opacity-50" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="bg-slate-900 rounded-[60px] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] flex flex-col lg:row">
          <div className="lg:w-1/2 p-12 lg:p-24 text-white flex flex-col justify-center">
            <h2 className="text-sm font-bold text-emerald-400 uppercase tracking-[0.4em] mb-8">Book Now</h2>
            <h3 className="text-5xl lg:text-7xl font-bold mb-10 leading-[1.1] font-display">
              Begin Your <span className="italic text-emerald-400">Wellness</span> Journey
            </h3>
            <p className="text-slate-400 text-xl mb-12 leading-relaxed font-sans">
              Schedule your personalized home care consultation today. Our team is ready 
              to provide the care and support you deserve with compassion and confidence.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-emerald-400">
                  <Clock size={24} />
                </div>
                <div>
                  <div className="font-bold">Same Day Service</div>
                  <div className="text-slate-400 text-sm">Quick response for your needs</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-emerald-400">
                  <Calendar size={24} />
                </div>
                <div>
                  <div className="font-bold">Flexible Scheduling</div>
                  <div className="text-slate-400 text-sm">We work around your routine</div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 bg-white p-12 lg:p-20">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                    <User size={16} className="text-emerald-600" />
                    Full Name
                  </label>
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="John Doe"
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-600/20 focus:border-emerald-600 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                    <Mail size={16} className="text-emerald-600" />
                    Email Address
                  </label>
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="john@example.com"
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-600/20 focus:border-emerald-600 transition-all"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                    <Calendar size={16} className="text-emerald-600" />
                    Preferred Date
                  </label>
                  <input
                    required
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-600/20 focus:border-emerald-600 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                    <Clock size={16} className="text-emerald-600" />
                    Preferred Time
                  </label>
                  <input
                    required
                    type="time"
                    value={formData.time}
                    onChange={(e) => setFormData({...formData, time: e.target.value})}
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-600/20 focus:border-emerald-600 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                  <MessageSquare size={16} className="text-emerald-600" />
                  How can we help?
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="Tell us about your health care needs..."
                  className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-600/20 focus:border-emerald-600 transition-all resize-none"
                />
              </div>

              <button
                disabled={isSubmitting}
                type="submit"
                className="w-full bg-emerald-600 text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-600/20 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Request Appointment'}
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
