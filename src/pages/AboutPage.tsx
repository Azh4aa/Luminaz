import React from 'react';
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

const AboutPage: React.FC = () => {
    return (
        <div className="bg-brand-off-white">
            <div className="container mx-auto px-6 py-16">
                <AnimatedSection className="text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-brand-teal font-heading">About Luminaz</h1>
                    <p className="mt-4 text-lg text-slate-600">Our story, our mission, and our vision for a globally connected academic future.</p>
                </AnimatedSection>

                <AnimatedSection className="mt-16 grid md:grid-cols-2 gap-16 items-center">
                    <div className="prose prose-lg max-w-none text-slate-700">
                        <h2 className="text-brand-teal font-heading">Our Story</h2>
                        <p>
                            Luminaz was founded in Sulaymaniyah with a simple yet powerful idea: to make world-class education accessible to ambitious students from the Middle East and Asia. We saw immense potential and a thirst for knowledge, but also the challenges students faced in navigating the complex landscape of international university applications. We decided to be the bridge.
                        </p>
                        <p>
                            Starting as a specialized consultancy, we quickly realized our work could have a much broader impact. This realization sparked the Luminaz vision.
                        </p>

                        <h2 className="text-brand-teal font-heading mt-8">Our Mission</h2>
                        <p>
                            Our mission is to empower students to achieve their full academic and personal potential on a global stage. We provide unparalleled guidance, strategic support, and the resources necessary to secure admission to top international universities and win prestigious scholarships.
                        </p>
                    </div>
                    <div>
                        <img src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Global connections" className="rounded-lg shadow-2xl" />
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mt-20 bg-brand-teal text-white rounded-xl p-12">
                     <h2 className="text-3xl md:text-4xl font-bold text-center font-heading mb-6">The Long-Term Vision</h2>
                    <p className="text-center text-gray-200 max-w-4xl mx-auto">
                        Luminaz is the foundation for a future global educational initiative. Our goal extends far beyond university applications. We are committed to building a sustainable ecosystem of support that includes:
                    </p>
                    <ul className="mt-8 grid md:grid-cols-3 gap-8 text-center">
                        <li className="bg-white/10 p-6 rounded-lg">
                            <h3 className="font-semibold text-lg mb-2 text-brand-off-white">Funding Scholarships</h3>
                            <p className="text-sm text-gray-300">Creating our own scholarships and partnering with philanthropists to remove financial barriers for exceptional students.</p>
                        </li>
                        <li className="bg-white/10 p-6 rounded-lg">
                            <h3 className="font-semibold text-lg mb-2 text-brand-off-white">Supporting Research</h3>
                            <p className="text-sm text-gray-300">Establishing a research fund to support groundbreaking academic work by scholars in our community.</p>
                        </li>
                        <li className="bg-white/10 p-6 rounded-lg">
                            <h3 className="font-semibold text-lg mb-2 text-brand-off-white">Building a Global Community</h3>
                            <p className="text-sm text-gray-300">Nurturing a lifelong network of Luminaz scholars who collaborate, innovate, and lead across the globe.</p>
                        </li>
                    </ul>
                </AnimatedSection>
            </div>
        </div>
    );
};

export default AboutPage;