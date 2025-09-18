import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ApplyCard: React.FC<{
    icon: React.ReactNode;
    title: string;
    description: string;
    link: string;
    linkText: string;
    isComingSoon?: boolean;
}> = ({ icon, title, description, link, linkText, isComingSoon }) => {
    
    const cardContent = (
        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-400 transform hover:-translate-y-2 border border-slate-100 h-full flex flex-col text-center items-center">
            <div className="flex items-center justify-center h-20 w-20 rounded-full bg-brand-light-blue/20 mb-6">
                <div className="text-brand-light-blue">{icon}</div>
            </div>
            <h3 className="text-2xl font-bold text-brand-teal mb-4 font-heading">{title}</h3>
            <p className="text-slate-600 mb-6 flex-grow">{description}</p>
            {isComingSoon ? (
                <span className="mt-auto inline-block bg-slate-200 text-slate-500 font-bold py-3 px-8 rounded-lg cursor-not-allowed">
                    Coming Soon
                </span>
            ) : (
                 <Link to={link} className="mt-auto inline-block bg-brand-yellow text-brand-teal font-bold py-3 px-8 rounded-lg hover:bg-opacity-90 transition-transform transform hover:scale-105 duration-300 shadow-lg">
                    {linkText}
                </Link>
            )}
        </div>
    );

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
             whileHover={{ scale: 1.05 }}
        >
             {cardContent}
        </motion.div>
    );
};


const ApplyPage: React.FC = () => {
    return (
        <div className="bg-brand-off-white py-16">
            <div className="container mx-auto px-6">
                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl md:text-5xl font-extrabold text-brand-teal font-heading">Begin Your Application</h1>
                    <p className="mt-4 text-lg text-slate-600">Choose the path that aligns with your ambitions. We're excited to learn more about you.</p>
                </motion.div>
                <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
                    <ApplyCard 
                        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4M17 3v4m2-2h-4M18 17v4m2-2h-4M12 5v14m-4-7h8" /></svg>}
                        title="The Luminaz Scholarship"
                        description="Apply for our flagship scholarship, awarded annually to two exceptional students demonstrating leadership potential and academic excellence."
                        link="/scholarship-application"
                        linkText="Start Scholarship Application"
                    />
                    <ApplyCard 
                        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.24a2 2 0 00-1.806.547a2 2 0 00-.547 1.806l.477 2.387a6 6 0 00.517 3.86l.158.318a6 6 0 00.517 3.86l2.387.477a2 2 0 001.806-.547a2 2 0 00.547-1.806l-.477-2.387a6 6 0 00-.517-3.86l-.158-.318a6 6 0 00-.517-3.86l-2.387-.477a2 2 0 00-1.806.547 2 2 0 00-.547 1.806l.477 2.387a6 6 0 00.517 3.86l.158.318a6 6 0 003.86.517l.318-.158a6 6 0 013.86-.517l2.387.477a2 2 0 001.806-.547a2 2 0 00.547-1.806l-.477-2.387a6 6 0 00-.517-3.86l-.158-.318a6 6 0 00-3.86-.517l-.318.158a6 6 0 01-3.86.517L6.05 15.24a2 2 0 00-1.806.547 2 2 0 00-.547 1.806L2 22" /></svg>}
                        title="Luminaz Research Fund"
                        description="Submit your academic research proposal for a chance to receive a grant. We support innovative projects that contribute to global knowledge."
                        link="/research-fund-application"
                        linkText="Submit Research Proposal"
                    />
                    <ApplyCard 
                        icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>}
                        title="General Scholarship Pool"
                        description="Not sure where to start? Submit your profile to be considered for our partner scholarships and other funding opportunities as they become available."
                        link="/general-application"
                        linkText="Join Talent Pool"
                        isComingSoon={true}
                    />
                </div>
            </div>
        </div>
    );
};

export default ApplyPage;
