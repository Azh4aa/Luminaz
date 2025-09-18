import React from 'react';
import type { ScholarshipFormData } from '../../types';

interface Step2Props {
    data: ScholarshipFormData['academicHistory'];
    handleChange: (index: number, field: keyof ScholarshipFormData['academicHistory'][0], value: string) => void;
    addRecord: () => void;
    removeRecord: (index: number) => void;
}

export const Step2Academic: React.FC<Step2Props> = ({ data, handleChange, addRecord, removeRecord }) => {
    return (
        <div>
            <h2 className="text-2xl font-bold text-brand-teal mb-6 font-heading">Academic History</h2>
            {data.map((record, index) => (
                <div key={index} className="mb-8 p-4 border border-slate-300 rounded-lg relative">
                    <h3 className="text-lg font-semibold text-slate-800 mb-4">Academic Record #{index + 1}</h3>
                    {data.length > 1 && (
                         <button onClick={() => removeRecord(index)} className="absolute top-2 right-2 text-red-500 hover:text-red-700">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                        </button>
                    )}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-slate-700">Institution Name (High School/University)</label>
                            <input type="text" value={record.highSchoolName} onChange={e => handleChange(index, 'highSchoolName', e.target.value)} required className="mt-1 block w-full input"/>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700">Graduation Year</label>
                            <input type="text" value={record.graduationYear} onChange={e => handleChange(index, 'graduationYear', e.target.value)} required className="mt-1 block w-full input"/>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700">GPA / Grade</label>
                            <input type="text" value={record.gpa} onChange={e => handleChange(index, 'gpa', e.target.value)} required className="mt-1 block w-full input"/>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-700">Standardized Test Scores (e.g., SAT, IELTS)</label>
                            <input type="text" value={record.standardizedTestScores} onChange={e => handleChange(index, 'standardizedTestScores', e.target.value)} className="mt-1 block w-full input"/>
                        </div>
                    </div>
                </div>
            ))}
            <button onClick={addRecord} className="text-brand-teal font-semibold hover:underline">
                + Add Another Academic Record
            </button>
        </div>
    );
};

// Add a simple CSS class for inputs
const style = document.createElement('style');
style.innerHTML = `
    .input {
        padding: 0.5rem 0.75rem;
        background-color: white;
        border: 1px solid #cbd5e1;
        border-radius: 0.375rem;
        box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
        transition: box-shadow 0.2s, border-color 0.2s;
    }
    .input:focus {
        outline: none;
        box-shadow: 0 0 0 2px #76C8E9;
        border-color: #76C8E9;
    }
`;
document.head.appendChild(style);