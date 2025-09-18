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


interface Testimonial {
    quote: string;
    name: string;
    destination: string;
    imageUrl: string;
}

const testimonials: Testimonial[] = [
    {
        quote: "Luminaz turned my dream of studying computer science in Canada into a reality. Their step-by-step guidance was invaluable, especially with the visa process. I couldn't have done it without them.",
        name: "Ahmed K.",
        destination: "University of Toronto, Canada",
        imageUrl: "https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
    },
    {
        quote: "The scholarship strategy sessions were a game-changer. I secured funding that covered 80% of my tuition fees in the UK. The team's expertise is unmatched.",
        name: "Fatima S.",
        destination: "King's College London, UK",
        imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    },
    {
        quote: "From choosing the right university in Germany to preparing for the interviews, Luminaz provided incredible support. They genuinely care about their students' success.",
        name: "Yusuf M.",
        destination: "Technical University of Munich, Germany",
        imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    },
    {
        quote: "As parents, we were worried about the complexity of applying abroad. Luminaz gave us peace of mind with their professionalism and clear communication. Our daughter is now thriving in France.",
        name: "Mr. & Mrs. Abdullah",
        destination: "Parents of a student at Sorbonne University, France",
        imageUrl: "https://images.unsplash.com/photo-1544168190-79c17527004f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
    }
];

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
    <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center text-center h-full">
        <img src={testimonial.imageUrl} alt={testimonial.name} className="w-24 h-24 rounded-full mb-6 border-4 border-brand-light-blue/50 object-cover" />
        <p className="text-slate-600 italic mb-6 flex-grow">"{testimonial.quote}"</p>
        <div className="mt-auto">
            <p className="font-bold text-brand-teal text-lg">{testimonial.name}</p>
            <p className="text-sm text-slate-500">{testimonial.destination}</p>
        </div>
    </div>
);

const TestimonialsPage: React.FC = () => {
    return (
        <div className="bg-brand-off-white py-16">
            <div className="container mx-auto px-6">
                <AnimatedSection className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-brand-teal font-heading">Success Stories</h1>
                    <p className="mt-4 text-lg text-slate-600">Hear from students and parents who embarked on their journey with us.</p>
                </AnimatedSection>

                <AnimatedSection>
                    <div className="grid md:grid-cols-2 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <TestimonialCard key={index} testimonial={testimonial} />
                        ))}
                    </div>
                </AnimatedSection>
            </div>
        </div>
    );
};

export default TestimonialsPage;