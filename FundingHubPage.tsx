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

const FundingCard: React.FC<{ title: string; description: string; link: string; linkText: string; imageUrl: string }> = ({ title, description, link, linkText, imageUrl }) => (
    <motion.div 
        className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col group"
        whileHover={{ scale: 1.03, y: -5 }}
        transition={{ type: "spring", stiffness: 300 }}
    >
        <div className="overflow-hidden h-56">
            <img src={imageUrl} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out" />
        </div>
        <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-2xl font-bold text-brand-teal font-heading mb-3">{title}</h3>
            <p className="text-slate-600 mb-6 flex-grow">{description}</p>
            <Link to={link} className="mt-auto text-brand-teal font-semibold hover:underline self-start">
                {linkText} &rarr;
            </Link>
        </div>
    </motion.div>
);

const FundingHubPage: React.FC = () => {
    return (
        <div className="bg-brand-off-white py-16">
            <div className="container mx-auto px-6">
                <AnimatedSection className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-brand-teal font-heading">Scholarships & Funding</h1>
                    <p className="mt-4 text-lg text-slate-600">Building a future where education knows no boundaries.</p>
                </AnimatedSection>
                <AnimatedSection>
                    <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-10">
                        <FundingCard 
                            title="The Luminaz Scholarship"
                            description="Our flagship program for exceptional students with limited financial means. This is our direct investment in the next generation of leaders."
                            link="/scholarship-application"
                            linkText="Learn More & Apply"
                            imageUrl="https://images.unsplash.com/photo-1576021182212-9c1c6a0b5c1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
                        />
                         <FundingCard 
                            title="Luminaz Research Fund"
                            description="We provide grants for academic research proposals from students and alumni in our community, fostering innovation and contributing to global knowledge."
                            link="/research-fund"
                            linkText="Discover the Fund"
                            imageUrl="https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                        />
                        <FundingCard 
                            title="Partner Scholarships"
                            description="This section features prestigious scholarships funded by our philanthropic partners and inspiring public figures who share our vision for global education."
                            link="/partner-scholarships"
                            linkText="View Partnerships"
                            imageUrl="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80"
                        />
                    </div>
                </AnimatedSection>
            </div>
        </div>
    );
};

export default FundingHubPage;