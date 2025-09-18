import React from 'react';
import { Link } from 'react-router-dom';
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

const ServiceItem: React.FC<{ title: string; description: string; items: string[] }> = ({ title, description, items }) => (
    <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-200 h-full flex flex-col">
        <h3 className="text-2xl font-bold text-brand-teal font-heading mb-4">{title}</h3>
        <p className="text-slate-600 mb-6">{description}</p>
        <ul className="space-y-3">
            {items.map((item, index) => (
                <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-brand-light-blue mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span className="text-slate-700">{item}</span>
                </li>
            ))}
        </ul>
    </div>
);

const ServicesPage: React.FC = () => {
    return (
        <div className="bg-brand-off-white py-16">
            <div className="container mx-auto px-6">
                <AnimatedSection className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-brand-teal font-heading">Our Services</h1>
                    <p className="mt-4 text-lg text-slate-600">Expert, personalized support for your academic journey.</p>
                </AnimatedSection>

                <AnimatedSection>
                    <div className="grid lg:grid-cols-2 gap-10">
                        <ServiceItem
                            title="University Application Guidance"
                            description="Navigating the international application process can be overwhelming. We provide step-by-step guidance to ensure your application stands out."
                            items={[
                                "Personalized university and program selection.",
                                "Statement of purpose and essay brainstorming and editing.",
                                "CV/Resume building and optimization.",
                                "Interview preparation and mock sessions.",
                                "Complete application review before submission."
                            ]}
                        />
                        <ServiceItem
                            title="Scholarship Application Strategy"
                            description="Financial constraints should not limit your potential. We help you identify and apply for scholarships to make your dream education a reality."
                            items={[
                                "Comprehensive scholarship search and matching.",
                                "Crafting compelling scholarship essays.",
                                "Guidance on securing strong letters of recommendation.",
                                "Financial needs assessment and documentation support.",
                                "Strategy for applying to both university-specific and external scholarships."
                            ]}
                        />
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mt-20 text-center bg-white p-12 rounded-lg shadow-md">
                     <h2 className="text-3xl font-bold text-brand-teal font-heading mb-4">Ready to Begin?</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto mb-6">
                        Let us help you take the first step towards an incredible future. Contact us for a free initial consultation to discuss your goals and how we can support you.
                    </p>
                    <Link to="/contact" className="inline-block bg-brand-yellow text-brand-teal font-bold py-3 px-8 rounded-lg hover:bg-opacity-90 transition-transform transform hover:scale-105 duration-300 shadow-lg">
                        Schedule a Consultation
                    </Link>
                </AnimatedSection>
            </div>
        </div>
    );
};

export default ServicesPage;