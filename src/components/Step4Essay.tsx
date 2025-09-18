import React from 'react';
import type { ScholarshipFormData } from '../../types';

interface Step4Props {
    data: ScholarshipFormData['essay'];
    handleChange: <T,>(section: keyof ScholarshipFormData, field: keyof T, value: string) => void;
}

export const Step4Essay: React.FC<Step4Props> = ({ data, handleChange }) => {
    const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        handleChange('essay', e.target.name as keyof ScholarshipFormData['essay'], e.target.value);
    };

    return (
        <div>
            <h2 className="text-2xl font-bold text-brand-teal mb-6 font-heading">Personal Essay</h2>
            <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">{data.prompt1}</label>
                <textarea
                    name="response1"
                    rows={15}
                    value={data.response1}
                    onChange={handleTextChange}
                    className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-light-blue focus:border-brand-light-blue"
                    placeholder="Your response here..."
                />
                 <p className="text-sm text-slate-500 mt-2">{data.response1.split(/\s+/).filter(Boolean).length} / 500 words</p>
            </div>
        </div>
    );
};