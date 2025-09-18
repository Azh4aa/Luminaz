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

const GeneralApplicationPage: React.FC = () => {
    return (
        <div className="bg-brand-off-white py-16">
            <div className="container mx-auto px-6">
                <AnimatedSection className="text-center">
                    <div className="max-w-3xl mx-auto bg-white p-12 rounded-lg shadow-xl">
                         <div className="flex items-center justify-center h-20 w-20 rounded-full bg-brand-light-blue/20 mb-6 mx-auto">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-brand-light-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-brand-teal font-heading">Coming Soon</h1>
                        <p className="mt-4 text-lg text-slate-600">
                           Our General Scholarship Pool application is currently under construction.
                        </p>
                        <p className="mt-2 text-slate-600">
                           Soon, you'll be able to submit your profile here to be considered for a wide range of partner scholarships and funding opportunities. Please check back later!
                        </p>
                         <Link to="/funding-hub" className="mt-8 inline-block bg-brand-teal text-white font-bold py-3 px-8 rounded-lg hover:bg-opacity-90 transition-transform transform hover:scale-105 duration-300 shadow-lg">
                            Explore Other Opportunities
                        </Link>
                    </div>
                </AnimatedSection>
            </div>
        </div>
    );
};

export default GeneralApplicationPage;
