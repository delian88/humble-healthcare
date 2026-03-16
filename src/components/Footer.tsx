import React from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin, HeartPulse } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-900 text-slate-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 text-white mb-6">
              <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center">
                <HeartPulse size={24} />
              </div>
              <span className="font-bold text-2xl tracking-tight font-display italic">Humble Healthcare</span>
            </div>
            <p className="text-slate-400 mb-8 leading-relaxed font-sans">
              Committed to excellence in home care services. We provide the highest level 
              of independence and dignity to people in their home.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-all">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-all">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-all">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-[0.2em] text-sm font-display">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex gap-4">
                <MapPin className="text-emerald-500 flex-shrink-0" size={20} />
                <span>9894 Bissonnet St, Houston, TX 77036</span>
              </div>
              <div className="flex gap-4">
                <Phone className="text-emerald-500 flex-shrink-0" size={20} />
                <div className="flex flex-col">
                  <span>(832) 367-8828 (Cell)</span>
                  <span>(713) 393-7686 (Office)</span>
                </div>
              </div>
              <div className="flex gap-4">
                <Mail className="text-emerald-500 flex-shrink-0" size={20} />
                <span>info@humblehealthcareinc.com</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-[0.2em] text-sm font-display">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-emerald-500 transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-emerald-500 transition-colors">Our Services</a></li>
              <li><a href="#appointment" className="hover:text-emerald-500 transition-colors">Book Appointment</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-[0.2em] text-sm font-display">Working Hours</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Clock className="text-emerald-500" size={20} />
                <div>
                  <div className="text-white font-medium">Mon - Fri</div>
                  <div className="text-sm">09:00 am – 05:00 pm</div>
                </div>
              </div>
              <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                <div className="text-emerald-400 font-bold text-sm mb-1 uppercase tracking-wider">Emergency</div>
                <div className="text-white font-bold">24/7 On-Call Services</div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© 2026 Humble Healthcare Inc. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
