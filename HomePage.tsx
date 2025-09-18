import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useEffect, useState } from 'react';

const AnimatedSection: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
    <motion.section
        className={className}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
    >
        {children}
    </motion.section>
);

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
    <motion.div 
        className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-400 transform hover:-translate-y-2 border border-slate-100"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
    >
        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-brand-light-blue/20 mb-6">
            <div className="text-brand-light-blue">{icon}</div>
        </div>
        <h3 className="text-xl font-bold text-brand-teal mb-3 font-heading">{title}</h3>
        <p className="text-slate-600">{description}</p>
    </motion.div>
);

const AnimatedCounter = ({ to }: { to: number }) => {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true });
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (inView) {
            const controls = {
                stop: () => {},
            };
            
            const animate = (from: number, to: number, duration: number) => {
                let start: number | null = null;
                const step = (timestamp: number) => {
                    if (!start) start = timestamp;
                    const progress = Math.min((timestamp - start) / duration, 1);
                    setCount(Math.floor(progress * (to - from) + from));
                    if (progress < 1) {
                        requestAnimationFrame(step);
                    }
                };
                requestAnimationFrame(step);
            };
            
            animate(0, to, 2000); // 2-second animation

            return () => controls.stop();
        }
    }, [inView, to]);

    return <span ref={ref}>{count}</span>;
};


const HomePage: React.FC = () => {
    const heroVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: 'easeOut',
            },
        },
    };

    return (
        <>
            {/* Hero Section */}
            <section className="relative bg-brand-off-white pt-24 pb-32 overflow-hidden">
                <div 
                    className="absolute inset-0 bg-center bg-cover bg-no-repeat opacity-10" 
                    style={{backgroundImage: "url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')"}}
                />
                <motion.div 
                    className="container mx-auto px-6 text-center relative"
                    variants={heroVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-extrabold text-brand-teal leading-tight mb-4 font-heading">
                        Your Journey to Global Education
                    </motion.h1>
                    <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-extrabold text-brand-light-blue leading-tight mb-4 font-heading">
                        Starts Here
                    </motion.h1>
                    <motion.p variants={itemVariants} className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-8">
                        Luminaz is your trusted partner in navigating the path to international universities, scholarships, and a future without borders.
                    </motion.p>
                    <motion.div variants={itemVariants} className="space-x-4">
                        <Link to="/apply" className="inline-block bg-brand-teal text-white font-bold py-3 px-8 rounded-lg hover:bg-opacity-90 transition-transform transform hover:scale-105 duration-300 shadow-lg">
                            Apply Now
                        </Link>
                        <Link to="/about" className="inline-block bg-white text-brand-teal font-bold py-3 px-8 rounded-lg hover:bg-slate-100 transition-colors duration-300 border border-slate-300 shadow-lg">
                            Learn More
                        </Link>
                    </motion.div>
                </motion.div>
            </section>
            
            {/* Stats Section */}
            <AnimatedSection className="bg-brand-teal text-white py-16">
                 <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div>
                            <p className="text-5xl font-bold font-heading text-brand-yellow"><AnimatedCounter to={300} />+</p>
                            <p className="text-lg mt-2 text-gray-200">Students Supported</p>
                        </div>
                        <div>
                            <p className="text-5xl font-bold font-heading text-brand-yellow"><AnimatedCounter to={150} />+</p>
                            <p className="text-lg mt-2 text-gray-200">Partner Universities</p>
                        </div>
                        <div>
                            <p className="text-5xl font-bold font-heading text-brand-yellow"><AnimatedCounter to={25} />+</p>
                            <p className="text-lg mt-2 text-gray-200">Countries Reached</p>
                        </div>
                    </div>
                </div>
            </AnimatedSection>

            {/* Features Section */}
            <AnimatedSection className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                         <h2 className="text-3xl md:text-4xl font-bold text-brand-teal font-heading">Why Choose Luminaz?</h2>
                        <p className="text-slate-600 mt-4 max-w-2xl mx-auto">We provide comprehensive support for every step of your academic journey.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        <FeatureCard 
                            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v11.494m-5.247-8.991l10.494 0M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12z" /></svg>}
                            title="Global University Access"
                            description="Expert guidance for applications to top universities in Canada, Europe, the UK, and Asia."
                        />
                        <FeatureCard 
                            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01" /></svg>}
                            title="Scholarship Strategy"
                            description="Unlock funding opportunities with our tailored scholarship application strategies and support."
                        />
                        <FeatureCard 
                            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.125-1.274-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.125-1.274.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>}
                            title="Building a Community"
                            description="Join a global network of scholars, researchers, and future leaders."
                        />
                    </div>
                </div>
            </AnimatedSection>
            
            {/* Vision Section */}
            <AnimatedSection className="py-20 bg-brand-off-white">
                <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Students studying together" className="rounded-lg shadow-xl"/>
                    </div>
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-brand-teal font-heading mb-6">Our Grand Vision</h2>
                        <p className="text-slate-600 mb-4 text-lg">Luminaz is more than a study abroad agency. We are laying the groundwork for a global educational initiative. Our mission is to not only help students achieve their academic dreams but also to foster a new generation of leaders through scholarships, research funding, and a vibrant international community.</p>
                        <p className="text-slate-600 mb-6">We believe in the power of education to transform lives and build bridges between cultures.</p>
                        <Link to="/funding-hub" className="text-brand-teal text-lg font-bold hover:underline transition-all duration-300">
                            Explore Our Funding Initiatives &rarr;
                        </Link>
                    </div>
                </div>
            </AnimatedSection>
        </>
    );
};

export default HomePage;