import React from 'react';
import type { ResearchFormData } from '../../types';

interface Step2Props {
    data: ResearchFormData['projectDetails'];
    handleChange: <T,>(section: keyof ResearchFormData, field: keyof T, value: string) => void;
}

const InputField: React.FC<{label: string; id: keyof ResearchFormData['projectDetails']; value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;}> = ({ label, id, value, onChange }) => (
    <div>
        <label htmlFor={id} className="block text-sm font-medium text-slate-700">{label}</label>
        <input
            type="text"
            id={id}
            name={id}
            value={value}
            onChange={onChange}
            required
            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-light-blue focus:border-brand-light-blue"
        />
    </div>
);

const TextAreaField: React.FC<{label: string; id: keyof ResearchFormData['projectDetails']; value: string; rows: number; onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void; description: string;}> = ({ label, id, value, rows, onChange, description }) => (
     <div>
        <label htmlFor={id} className="block text-sm font-medium text-slate-700">{label}</label>
        <textarea
            id={id}
            name={id}
            rows={rows}
            value={value}
            onChange={onChange}
            required
            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-light-blue focus:border-brand-light-blue"
        />
        <p className="mt-2 text-sm text-slate-500">{description}</p>
    </div>
);


export const Step2ProjectDetails: React.FC<Step2Props> = ({ data, handleChange }) => {
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        handleChange('projectDetails', e.target.name as keyof ResearchFormData['projectDetails'], e.target.value);
    };

    return (
        <div>
            <h2 className="text-2xl font-bold text-brand-teal mb-6 font-heading">Project Details</h2>
            <div className="space-y-6">
                <InputField label="Project Title" id="title" value={data.title} onChange={handleInputChange} />
                <TextAreaField 
                    label="Abstract / Summary" 
                    id="abstract" 
                    value={data.abstract} 
                    rows={5} 
                    onChange={handleInputChange} 
                    description="Briefly summarize your project's objectives, significance, and expected outcomes (max 300 words)."
                />
                 <TextAreaField 
                    label="Methodology" 
                    id="methodology" 
                    value={data.methodology} 
                    rows={8} 
                    onChange={handleInputChange} 
                    description="Describe the research methods and plan of execution for your project."
                />
                 <TextAreaField 
                    label="Budget Justification" 
                    id="budget" 
                    value={data.budget} 
                    rows={5} 
                    onChange={handleInputChange} 
                    description="Provide a brief breakdown of how the funds will be used (e.g., equipment, travel, materials)."
                />
            </div>
        </div>
    );
};
