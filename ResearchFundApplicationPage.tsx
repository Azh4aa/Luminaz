import React from 'react';
import { ResearchForm } from '../components/researchFundForm/ResearchForm';

const ResearchFundApplicationPage: React.FC = () => {
    return (
        <div className="bg-brand-off-white min-h-screen py-12 md:py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-brand-teal font-heading">Research Fund Application</h1>
                        <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
                           Submit your proposal for consideration. We support innovative research that pushes the boundaries of knowledge.
                        </p>
                    </div>

                    <div className="bg-white p-8 sm:p-10 rounded-xl shadow-2xl border border-slate-200">
                        <ResearchForm />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResearchFundApplicationPage;
