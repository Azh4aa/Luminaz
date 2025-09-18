import React from 'react';
import { ScholarshipForm } from '../components/scholarshipForm/ScholarshipForm';

const ScholarshipApplicationPage: React.FC = () => {
    return (
        <div className="bg-brand-off-white min-h-screen py-12 md:py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-brand-teal font-heading">The Luminaz Scholarship Application</h1>
                        <p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
                            We are looking for talented, ambitious students ready to make an impact. Please complete the form with care and precision.
                        </p>
                    </div>

                    <div className="bg-white p-8 sm:p-10 rounded-xl shadow-2xl border border-slate-200">
                        <ScholarshipForm />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ScholarshipApplicationPage;