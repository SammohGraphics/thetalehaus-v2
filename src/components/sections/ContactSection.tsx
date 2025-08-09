'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Check, 
  Send, 
  ChevronDown} from 'lucide-react';
import { SERVICES } from '@/lib/constants';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    services: [] as string[],
    budget: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [activeField, setActiveField] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleServiceToggle = (service: string) => {
    setFormData(prev => {
      const newServices = prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service];
      return { ...prev, services: newServices };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        message: '',
        services: [],
        budget: ''
      });
    }, 1500);
  };

  return (
    <section id="contact" className="relative py-16 sm:py-24 overflow-hidden bg-gradient-to-b from-white/50 to-teal-50/50 dark:from-gray-900/50 dark:to-teal-900/10">
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute -left-20 -top-20 w-64 h-64 rounded-full bg-teal-400/10 blur-3xl dark:bg-teal-600/10"></div>
        <div className="absolute -right-20 -bottom-20 w-64 h-64 rounded-full bg-emerald-400/10 blur-3xl dark:bg-emerald-600/10"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center justify-center px-6 py-2 rounded-full bg-teal-100 dark:bg-teal-900/30 mb-4">
            <span className="text-sm font-medium text-teal-700 dark:text-teal-400">Get in touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Let&apos;s Build <span className="text-teal-600 dark:text-teal-400">Something Amazing</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Ready to start your project? Fill out the form and we&apos;ll get back to you within 24 hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative h-full min-h-[400px] lg:min-h-[500px] rounded-2xl overflow-hidden shadow-xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-teal-600/20 to-emerald-500/20 z-10"></div>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.9346673594787!2d39.20865481532679!3d-6.597515664736785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185c5a9c3b1d5a9f%3A0x9e5b5b5b5b5b5b5b!2sDar%20es%20Salaam%2C%20Tanzania!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              loading="lazy" 
              className="absolute inset-0"
              allowFullScreen
            />
            
            <div className="absolute bottom-6 left-6 right-6 z-20">
              <Card className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border border-gray-200 dark:border-gray-800 shadow-lg">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-teal-100 dark:bg-teal-900/50 rounded-lg">
                      <MapPin className="w-6 h-6 text-teal-600 dark:text-teal-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Our Studio</h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-2">
                        Mikocheni B, Dar es Salaam, Tanzania
                      </p>
                      <div className="flex gap-4">
                        <a 
                          href="mailto:hello@talehouse.co.tz" 
                          className="text-sm flex items-center gap-1 text-teal-600 dark:text-teal-400 hover:underline"
                        >
                          <Mail className="w-4 h-4" />
                          Email us
                        </a>
                        <a 
                          href="tel:+255123456789" 
                          className="text-sm flex items-center gap-1 text-teal-600 dark:text-teal-400 hover:underline"
                        >
                          <Phone className="w-4 h-4" />
                          Call us
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            {submitSuccess ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center p-8 sm:p-12 bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-800"
              >
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-teal-100 dark:bg-teal-900/30 rounded-full animate-ping opacity-75"></div>
                  <div className="relative w-16 h-16 rounded-full bg-teal-600 dark:bg-teal-500 flex items-center justify-center">
                    <Check className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Message Sent!</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md">
                  Thank you for reaching out. Our team will review your message and get back to you within 24 hours.
                </p>
                <Button 
                  onClick={() => setSubmitSuccess(false)}
                  className="bg-gradient-to-r from-teal-600 to-emerald-500 hover:from-teal-700 hover:to-emerald-600 text-white shadow-lg"
                >
                  Send Another Message
                </Button>
              </motion.div>
            ) : (
              <Card className="h-full border border-gray-200 dark:border-gray-800 shadow-xl overflow-hidden">
                <CardContent className="p-0">
                  <div className="bg-gradient-to-r from-teal-600 to-emerald-500 p-6 text-white">
                    <h3 className="text-xl sm:text-2xl font-bold">Project Inquiry</h3>
                    <p className="text-teal-100">Fill out the form to start the conversation</p>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
                    <div className="space-y-5">
                      <div 
                        className={`relative border-b ${activeField === 'name' ? 'border-teal-500' : 'border-gray-200 dark:border-gray-700'} pb-1 transition-colors`}
                        onFocus={() => setActiveField('name')}
                        onBlur={() => setActiveField(null)}
                      >
                        <label 
                          htmlFor="name" 
                          className={`absolute left-0 ${activeField === 'name' || formData.name ? '-top-5 text-sm text-teal-600 dark:text-teal-400' : 'top-0 text-gray-500 dark:text-gray-400'} transition-all duration-200 pointer-events-none`}
                        >
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full bg-transparent pt-3 pb-1 outline-none text-gray-900 dark:text-white"
                        />
                      </div>
                      
                      <div 
                        className={`relative border-b ${activeField === 'email' ? 'border-teal-500' : 'border-gray-200 dark:border-gray-700'} pb-1 transition-colors`}
                        onFocus={() => setActiveField('email')}
                        onBlur={() => setActiveField(null)}
                      >
                        <label 
                          htmlFor="email" 
                          className={`absolute left-0 ${activeField === 'email' || formData.email ? '-top-5 text-sm text-teal-600 dark:text-teal-400' : 'top-0 text-gray-500 dark:text-gray-400'} transition-all duration-200 pointer-events-none`}
                        >
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full bg-transparent pt-3 pb-1 outline-none text-gray-900 dark:text-white"
                        />
                      </div>
                      
                      <div className="pt-2">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                          Services Needed
                        </label>
                        <div className="grid grid-cols-2 gap-3">
                          {SERVICES.map((service) => (
                            <div 
                              key={service.title} 
                              onClick={() => handleServiceToggle(service.title)}
                              className={`p-3 rounded-lg border cursor-pointer transition-all ${formData.services.includes(service.title) 
                                ? 'border-teal-500 bg-teal-50/50 dark:bg-teal-900/20' 
                                : 'border-gray-200 dark:border-gray-700 hover:border-teal-300 dark:hover:border-teal-600'}`}
                            >
                              <div className="flex items-center space-x-2">
                                <div className={`w-5 h-5 rounded-md flex items-center justify-center ${formData.services.includes(service.title) 
                                  ? 'bg-teal-600 text-white' 
                                  : 'border border-gray-300 dark:border-gray-600'}`}
                                >
                                  {formData.services.includes(service.title) && (
                                    <Check className="w-3 h-3" />
                                  )}
                                </div>
                                <span className="text-sm">{service.title}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="pt-2">
                        <label 
                          htmlFor="budget" 
                          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                        >
                          Project Budget
                        </label>
                        <div className="relative">
                          <select
                            id="budget"
                            name="budget"
                            value={formData.budget}
                            onChange={handleChange}
                            className="appearance-none w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all"
                          >
                            <option value="">Select budget range</option>
                            <option value="1k-5k">$1,000 - $5,000</option>
                            <option value="5k-15k">$5,000 - $15,000</option>
                            <option value="15k-50k">$15,000 - $50,000</option>
                            <option value="50k+">$50,000+</option>
                          </select>
                          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                            <ChevronDown className="w-5 h-5 text-gray-400" />
                          </div>
                        </div>
                      </div>
                      
                      <div 
                        className={`relative border rounded-lg p-3 ${activeField === 'message' ? 'border-teal-500 ring-2 ring-teal-500/20' : 'border-gray-200 dark:border-gray-700'} transition-all`}
                        onFocus={() => setActiveField('message')}
                        onBlur={() => setActiveField(null)}
                      >
                        <label 
                          htmlFor="message" 
                          className={`absolute left-3 px-1 ${activeField === 'message' || formData.message ? '-top-2 text-xs bg-white dark:bg-gray-900 text-teal-600 dark:text-teal-400' : 'top-3 text-gray-500 dark:text-gray-400'} transition-all duration-200 pointer-events-none`}
                        >
                          Your Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          className="w-full bg-transparent outline-none text-gray-900 dark:text-white resize-none"
                        />
                      </div>
                    </div>
                    
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-6 bg-gradient-to-r from-teal-600 to-emerald-500 hover:from-teal-700 hover:to-emerald-600 text-white shadow-lg transition-all hover:shadow-xl"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center gap-2">
                          <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          <span>Processing...</span>
                        </div>
                      ) : (
                        <span className="flex items-center justify-center gap-2">
                          <Send className="w-5 h-5" />
                          <span>Send Message</span>
                        </span>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};