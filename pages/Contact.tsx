import React, { useState } from 'react';
import { CONTACT_INFO, SOCIAL_LINKS } from '../constants';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmissionStatus('submitting');
    
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xdkqdbkv", {
        method: "POST",
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSubmissionStatus('success');
        form.reset();
      } else {
        setSubmissionStatus('error');
      }
    } catch (error) {
      setSubmissionStatus('error');
    }
  };

  return (
    <div className="pt-24 pb-20 min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-red-500 dark:text-red-400 font-bold tracking-wider uppercase text-sm">Contact</span>
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4 mt-2">Get In Touch</h1>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Ready to start your project? Have a question? I'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-8">
                
                {/* Info Cards */}
                <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-800 relative overflow-hidden transition-all duration-300">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-red-50 dark:bg-red-950/20 rounded-bl-full -mr-4 -mt-4 z-0"></div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-8 border-b dark:border-slate-800 pb-4 relative z-10">Contact Details</h3>
                    <div className="space-y-8 relative z-10">
                        <div className="flex items-start group">
                            <div className="w-12 h-12 rounded-xl bg-red-50 dark:bg-red-950/20 flex items-center justify-center text-red-500 shrink-0 mt-1 group-hover:bg-red-500 group-hover:text-white transition-colors duration-300">
                                <Mail size={22} />
                            </div>
                            <div className="ml-5 overflow-hidden">
                                <p className="text-sm font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wide mb-1">Email</p>
                                <a href={`mailto:${CONTACT_INFO.email}`} className="text-slate-900 dark:text-white font-semibold hover:text-red-500 dark:hover:text-red-400 break-words text-lg">
                                    {CONTACT_INFO.email}
                                </a>
                                <p className="text-xs text-green-600 dark:text-green-400 flex items-center mt-1">
                                    <Clock size={12} className="mr-1" /> Replies within a few hours
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start group">
                            <div className="w-12 h-12 rounded-xl bg-red-50 dark:bg-red-950/20 flex items-center justify-center text-red-500 shrink-0 mt-1 group-hover:bg-red-500 group-hover:text-white transition-colors duration-300">
                                <Phone size={22} />
                            </div>
                            <div className="ml-5">
                                <p className="text-sm font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wide mb-1">Phone / WhatsApp</p>
                                <a href={`tel:${CONTACT_INFO.phone}`} className="text-slate-900 dark:text-white font-semibold hover:text-red-500 dark:hover:text-red-400 text-lg block">
                                    {CONTACT_INFO.phone}
                                </a>
                                <div className="mt-2">
                                    <a href={CONTACT_INFO.whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex items-center text-xs font-bold text-white bg-green-500 px-3 py-1 rounded-full hover:bg-green-600 transition-colors">
                                        Chat on WhatsApp
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-start group">
                            <div className="w-12 h-12 rounded-xl bg-red-50 dark:bg-red-950/20 flex items-center justify-center text-red-500 shrink-0 mt-1 group-hover:bg-red-500 group-hover:text-white transition-colors duration-300">
                                <MapPin size={22} />
                            </div>
                            <div className="ml-5">
                                <p className="text-sm font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wide mb-1">Location</p>
                                <p className="text-slate-900 dark:text-white font-semibold text-lg">
                                    {CONTACT_INFO.address}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Social Links */}
                <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-800 transition-all duration-300">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Connect Socially</h3>
                    <div className="flex space-x-4">
                        {SOCIAL_LINKS.map((link) => (
                             <a 
                                key={link.platform}
                                href={link.url}
                                target="_blank"
                                rel="noreferrer"
                                className="w-12 h-12 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-gradient-to-r hover:from-red-500 hover:to-orange-500 hover:text-white transition-all transform hover:scale-110 shadow-sm hover:shadow-lg"
                                aria-label={link.platform}
                            >
                                {link.icon}
                             </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2 bg-white dark:bg-slate-900 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-800 p-8 md:p-10 relative overflow-hidden transition-all duration-300">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-500 to-orange-500"></div>
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Send Me a Message</h3>
                
                {submissionStatus === 'success' ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center space-y-6 bg-green-50 dark:bg-green-950/20 rounded-2xl border border-green-100 dark:border-green-900/30 animate-fade-in-up">
                    <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-green-600 dark:text-green-400 shadow-sm">
                      <CheckCircle2 size={40} />
                    </div>
                    <div>
                        <h4 className="text-2xl font-bold text-green-800 dark:text-green-400 mb-2">Message Sent!</h4>
                        <p className="text-green-700 dark:text-green-300 text-lg">Thank you for contacting me. <br/>Within 24 hours I will contact you.</p>
                    </div>
                    <button 
                      onClick={() => setSubmissionStatus('idle')}
                      className="mt-6 px-6 py-2 bg-white dark:bg-slate-800 text-green-700 dark:text-green-400 font-bold rounded-full shadow-sm border border-green-200 dark:border-green-800 hover:bg-green-50 dark:hover:bg-slate-700 transition-colors"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form 
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                              <label htmlFor="name" className="text-sm font-bold text-slate-700 dark:text-slate-300">Your Name</label>
                              <input 
                                  type="text" 
                                  id="name"
                                  name="name"
                                  className="w-full px-5 py-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:border-red-500 focus:bg-white dark:focus:bg-slate-900 text-slate-900 dark:text-white focus:ring-4 focus:ring-red-500/10 outline-none transition-all font-medium"
                                  placeholder="John Doe"
                                  required 
                              />
                          </div>
                          <div className="space-y-2">
                              <label htmlFor="phone" className="text-sm font-bold text-slate-700 dark:text-slate-300">Phone Number</label>
                              <input 
                                  type="tel" 
                                  id="phone"
                                  name="phone"
                                  className="w-full px-5 py-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:border-red-500 focus:bg-white dark:focus:bg-slate-900 text-slate-900 dark:text-white focus:ring-4 focus:ring-red-500/10 outline-none transition-all font-medium"
                                  placeholder="+91 98765 43210"
                                  required 
                              />
                          </div>
                      </div>

                      <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-bold text-slate-700 dark:text-slate-300">Your Email</label>
                          <input 
                              type="email" 
                              id="email"
                              name="email"
                              className="w-full px-5 py-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:border-red-500 focus:bg-white dark:focus:bg-slate-900 text-slate-900 dark:text-white focus:ring-4 focus:ring-red-500/10 outline-none transition-all font-medium"
                              placeholder="john@example.com"
                              required 
                          />
                      </div>

                      <div className="space-y-2">
                          <label htmlFor="subject" className="text-sm font-bold text-slate-700 dark:text-slate-300">Subject (Inquiry)</label>
                          <div className="relative">
                            <select 
                                id="subject"
                                name="subject"
                                className="w-full px-5 py-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:border-red-500 focus:bg-white dark:focus:bg-slate-900 text-slate-900 dark:text-white focus:ring-4 focus:ring-red-500/10 outline-none transition-all font-medium appearance-none cursor-pointer"
                                required
                            >
                                <option value="">Select a service...</option>
                                <option value="Website Development">Website Development</option>
                                <option value="Graphics Designing">Graphics Designing</option>
                                <option value="Digital Marketing">Digital Marketing</option>
                                <option value="Google Ads">Google Ads</option>
                                <option value="Instagram Ads">Instagram Ads</option>
                                <option value="Facebook Ads">Facebook Ads</option>
                                <option value="Other">Other</option>
                            </select>
                            <div className="absolute right-5 top-1/2 transform -translate-y-1/2 pointer-events-none text-slate-500 dark:text-slate-400">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                            </div>
                          </div>
                      </div>

                      <div className="space-y-2">
                          <label htmlFor="message" className="text-sm font-bold text-slate-700 dark:text-slate-300">Message</label>
                          <textarea 
                              id="message"
                              name="message"
                              rows={5}
                              className="w-full px-5 py-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:border-red-500 focus:bg-white dark:focus:bg-slate-900 text-slate-900 dark:text-white focus:ring-4 focus:ring-red-500/10 outline-none transition-all resize-none font-medium"
                              placeholder="Tell me about your project goals and timeline..."
                              required
                          ></textarea>
                      </div>

                      {submissionStatus === 'error' && (
                        <div className="flex items-center text-red-600 bg-red-50 dark:bg-red-950/20 p-4 rounded-xl text-sm font-medium border border-red-100 dark:border-red-900/30">
                          <AlertCircle size={20} className="mr-3" />
                          Something went wrong. Please try again later.
                        </div>
                      )}

                      <button 
                          type="submit"
                          disabled={submissionStatus === 'submitting'}
                          className={`w-full md:w-auto px-10 py-4 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 font-bold text-lg rounded-xl hover:bg-red-600 dark:hover:bg-red-500 dark:hover:text-white transition-all transform hover:scale-[1.02] active:scale-95 shadow-lg hover:shadow-red-500/30 flex items-center justify-center ${submissionStatus === 'submitting' ? 'opacity-70 cursor-not-allowed' : ''}`}
                      >
                          {submissionStatus === 'submitting' ? 'Sending...' : 'Send Message'} 
                          {!submissionStatus.includes('submitting') && <Send size={20} className="ml-3" />}
                      </button>
                  </form>
                )}
            </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
