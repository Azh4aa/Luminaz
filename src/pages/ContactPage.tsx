import React, { useState } from 'react';
import { motion } from 'framer-motion';

const AnimatedSection: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
    <motion.div
        className={className}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
    >
        {children}
    </motion.div>
);

const ContactPage: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log({ name, email, message });
        setSubmitted(true);
    };

    return (
        <div className="bg-brand-off-white py-16">
            <div className="container mx-auto px-6">
                <AnimatedSection className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-brand-teal font-heading">Get in Touch</h1>
                    <p className="mt-4 text-lg text-slate-600">Have questions? We're here to help. Reach out to us anytime.</p>
                </AnimatedSection>

                <div className="grid md:grid-cols-2 gap-16">
                    <AnimatedSection>
                        <div className="bg-white p-8 rounded-lg shadow-lg border border-slate-200">
                            {submitted ? (
                                <div className="text-center py-10">
                                    <h3 className="text-2xl font-bold text-brand-teal mb-2 font-heading">Thank You!</h3>
                                    <p className="text-slate-700">Your message has been sent. We will get back to you shortly.</p>
                                </div>
                            ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-slate-700">Full Name</label>
                                    <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} required className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-light-blue focus:border-brand-light-blue"/>
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email Address</label>
                                    <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} required className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-light-blue focus:border-brand-light-blue"/>
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-slate-700">Message</label>
                                    <textarea id="message" rows={5} value={message} onChange={e => setMessage(e.target.value)} required className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-light-blue focus:border-brand-light-blue"></textarea>
                                </div>
                                <button type="submit" className="w-full bg-brand-teal text-white font-bold py-3 px-4 rounded-lg hover:bg-opacity-90 transition-colors duration-300">
                                    Send Message
                                </button>
                            </form>
                            )}
                        </div>
                    </AnimatedSection>
                    
                    <AnimatedSection className="space-y-8">
                        <div>
                            <h3 className="text-xl font-bold text-brand-teal mb-2 font-heading">Our Office</h3>
                            <p className="text-slate-600">Salim Street, Sulaymaniyah<br/>Kurdistan Region, Iraq</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-brand-teal mb-2 font-heading">Email Us</h3>
                            <p className="text-slate-600">
                                <a href="mailto:info@luminaz.org" className="text-brand-light-blue hover:underline">info@luminaz.org</a>
                            </p>
                        </div>
                         <div>
                            <h3 className="text-xl font-bold text-brand-teal mb-2 font-heading">Office Hours</h3>
                            <p className="text-slate-600">Sunday - Thursday<br/>9:00 AM - 5:00 PM</p>
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;