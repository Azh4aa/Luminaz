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

const DetailItem: React.FC<{ title: string, children: React.ReactNode, icon: React.ReactNode }> = ({ title, children, icon }) => (
    <div className="flex items-start">
        <div className="flex-shrink-0 h-12 w-12 rounded-full bg-brand-light-blue/20 flex items-center justify-center text-brand-light-blue mr-6">
            {icon}
        </div>
        <div>
            <h3 className="text-xl font-bold text-brand-teal font-heading mb-1">{title}</h3>
            <p className="text-slate-600">{children}</p>
        </div>
    </div>
);

const ResearchFundPage: React.FC = () => {
    return (
        <div className="bg-brand-off-white py-16">
            <div className="container mx-auto px-6">
                <AnimatedSection className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-brand-teal font-heading">The Luminaz Research Fund</h1>
                    <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">Fostering innovation and empowering the next generation of researchers to solve global challenges.</p>
                </AnimatedSection>
                
                <AnimatedSection className="mb-20">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                         <div className="prose prose-lg max-w-none text-slate-700">
                            <h2 className="text-brand-teal font-heading">Our Mission</h2>
                            <p>
                                The Luminaz Research Fund is established to provide crucial seed funding for groundbreaking research proposals from students and alumni within the Luminaz network. We aim to bridge the gap between ambitious ideas and impactful discoveries.
                            </p>
                            <p>
                                By supporting projects across various disciplines, we seek to cultivate a vibrant intellectual community and contribute to a global body of knowledge that addresses pressing real-world issues.
                            </p>
                        </div>
                        <div>
                            <img src="https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Researcher in a lab" className="rounded-lg shadow-2xl" />
                        </div>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="space-y-10">
                    <DetailItem
                        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>}
                        title="Eligibility"
                    >
                       Open to all current students and alumni who have utilized Luminaz's services. Applicants must be enrolled in or have graduated from a recognized higher education institution.
                    </DetailItem>
                     <DetailItem
                        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>}
                        title="How to Apply"
                    >
                       Applications are accepted during our annual cycle. The process involves submitting a detailed project proposal, budget, and supporting documents through our dedicated online portal.
                    </DetailItem>
                </AnimatedSection>
                
                 <AnimatedSection className="mt-20 text-center bg-brand-teal text-white p-12 rounded-lg shadow-md">
                     <h2 className="text-3xl font-bold font-heading mb-4">Ready to Make Your Mark?</h2>
                    <p className="max-w-3xl mx-auto mb-6 text-gray-200">
                      If you have a research idea that can change the world, we want to hear from you. Prepare your proposal and take the first step towards turning your vision into reality.
                    </p>
                    <Link to="/research-fund-application" className="inline-block bg-brand-yellow text-brand-teal font-bold py-3 px-8 rounded-lg hover:bg-opacity-90 transition-transform transform hover:scale-105 duration-300 shadow-lg">
                        Submit Your Proposal
                    </Link>
                </AnimatedSection>
            </div>
        </div>
    );
};

export default ResearchFundPage;
