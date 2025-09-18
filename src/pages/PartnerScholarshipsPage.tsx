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

const PartnerScholarshipsPage: React.FC = () => {
    return (
        <div className="bg-brand-off-white py-16">
            <div className="container mx-auto px-6">
                <AnimatedSection className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-brand-teal font-heading">Partner Scholarships</h1>
                    <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">Collaborating with visionary leaders and organizations to create a world of opportunity.</p>
                </AnimatedSection>

                <AnimatedSection className="grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Collaboration and partnership" className="rounded-lg shadow-2xl" />
                    </div>
                    <div className="prose prose-lg max-w-none text-slate-700">
                        <h2 className="text-brand-teal font-heading">A Shared Vision</h2>
                        <p>
                            At Luminaz, we believe in the power of collaboration. Our Partner Scholarships program is dedicated to joining forces with philanthropists, foundations, and corporations who are passionate about education and global development.
                        </p>
                        <p>
                            By partnering with us, you can establish a named scholarship, support students from a specific region or field of study, and make a direct, lasting impact on the lives of future leaders.
                        </p>
                    </div>
                </AnimatedSection>
                
                <AnimatedSection className="mt-20 text-center bg-white p-12 rounded-lg shadow-md">
                     <h2 className="text-3xl font-bold text-brand-teal font-heading mb-4">Become a Founding Partner</h2>
                    <p className="text-slate-600 max-w-3xl mx-auto mb-6">
                       This section is currently under development and will soon feature a curated list of prestigious scholarships funded by our partners. If you or your organization are interested in shaping the future of global education and would like to learn more about establishing a scholarship fund, we would be honored to speak with you.
                    </p>
                    <Link to="/contact" className="inline-block bg-brand-teal text-white font-bold py-3 px-8 rounded-lg hover:bg-opacity-90 transition-transform transform hover:scale-105 duration-300 shadow-lg">
                        Contact Us to Partner
                    </Link>
                </AnimatedSection>
            </div>
        </div>
    );
};

export default PartnerScholarshipsPage;
