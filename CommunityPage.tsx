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

const CommunityCard: React.FC<{ platform: string, description: string, link: string, icon: React.ReactNode }> = ({ platform, description, link, icon }) => (
    <motion.a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="block bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
    >
        <div className="flex items-center mb-4">
            {icon}
            <h3 className="text-2xl font-bold text-brand-teal font-heading ml-4">{platform}</h3>
        </div>
        <p className="text-slate-600">{description}</p>
    </motion.a>
);

const CommunityPage: React.FC = () => {
    return (
        <div className="bg-brand-off-white py-16">
            <div className="container mx-auto px-6">
                <AnimatedSection className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-brand-teal font-heading">Join Our Community</h1>
                    <p className="mt-4 text-lg text-slate-600">Connect with fellow students, mentors, and the Luminaz team.</p>
                </AnimatedSection>
                <AnimatedSection className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    <CommunityCard 
                        platform="Telegram"
                        description="Get instant updates, join group discussions, and connect with current Luminaz scholars. Ideal for quick questions and community chat."
                        link="#"
                        icon={<svg className="w-12 h-12 text-blue-500" fill="currentColor" viewBox="0 0 24 24"><path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.57c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z" /></svg>}
                    />
                    <CommunityCard 
                        platform="WhatsApp"
                        description="Join our announcement channel for important deadlines, scholarship news, and event invitations directly on your phone."
                        link="#"
                        icon={<svg className="w-12 h-12 text-green-500" fill="currentColor" viewBox="0 0 24 24"><path d="M16.75 13.96c.25.13.41.2.46.3.06.11.04.61-.21 1.16-.24.53-1.08 1.05-1.52 1.12-.45.07-1.13.04-1.8-.23-.65-.28-2.03-.95-3.26-2.18S7.2 12.31 7 11.66c-.23-.68-.25-1.13-.19-1.58.06-.45.28-.73.53-.9.24-.18.52-.23.73-.23.19 0 .38.01.53.02.28.01.44.03.63.31.2.27.33.91.36 1 .03.09.04.18 0 .28-.04.1-.11.18-.21.28-.11.1-.25.21-.39.33-.14.12-.28.25-.32.33-.04.08-.06.16 0 .28.06.11.75 1.28 1.67 2.21.92.92 2.1 1.61 2.21 1.67.11.06.19.04.28 0 .09-.04.36-.44.49-.58.13-.14.28-.21.42-.14.14.07.96.44 1.13.51.17.07.28.11.31.18zm-5.2-11.45C6.23 2.51 2.52 6.23 2.51 11.5c0 1.71.46 3.32 1.31 4.71L2.5 21.5l5.45-1.31c1.35.79 2.91 1.22 4.55 1.22h.01c5.27 0 9.5-4.23 9.51-9.49 0-5.27-4.23-9.5-9.49-9.5z" /></svg>}
                    />
                     <CommunityCard 
                        platform="Instagram"
                        description="Follow us for success stories, university spotlights, and a visual journey into the lives of our students abroad."
                        link="#"
                        icon={<svg className="w-12 h-12 text-pink-600" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.585-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.585-.012-4.85-.07c-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.85s.012-3.584.07-4.85c.149-3.227 1.664-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163zm0 1.441c-3.111 0-3.479.012-4.698.068-2.61.12-3.864 1.373-3.99 3.99-.056 1.218-.067 1.585-.067 4.698s.011 3.479.067 4.698c.126 2.616 1.374 3.864 3.99 3.99 1.218.056 1.587.067 4.698.067s3.479-.011 4.698-.067c2.616-.126 3.864-1.374 3.99-3.99.056-1.218.067-1.585.067-4.698s-.011-3.479-.067-4.698c-.126-2.616-1.374-3.864-3.99-3.99-1.218-.056-1.585-.067-4.698-.067zM12 6.837a5.163 5.163 0 100 10.326 5.163 5.163 0 000-10.326zm0 8.468a3.306 3.306 0 110-6.612 3.306 3.306 0 010 6.612zm4.965-7.79a1.232 1.232 0 100-2.464 1.232 1.232 0 000 2.464z" /></svg>}
                    />
                </AnimatedSection>
            </div>
        </div>
    );
};

export default CommunityPage;