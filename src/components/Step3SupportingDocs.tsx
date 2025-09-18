import React from 'react';
import type { ResearchFormData } from '../../types';

interface Step3Props {
    data: ResearchFormData['supportingDocs'];
    handleChange: (section: keyof ResearchFormData, field: keyof ResearchFormData['supportingDocs'], file: File | null) => void;
}

const FileUpload: React.FC<{label: string, id: keyof ResearchFormData['supportingDocs'], file: File | null, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void}> = ({ label, id, file, onChange }) => (
    <div>
        <label className="block text-sm font-medium text-slate-700">{label}</label>
        <div className="mt-1 flex items-center justify-center px-6 pt-5 pb-6 border-2 border-slate-300 border-dashed rounded-md">
            <div className="space-y-1 text-center">
                <svg className="mx-auto h-12 w-12 text-slate-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div className="flex text-sm text-slate-600">
                    <label htmlFor={id} className="relative cursor-pointer bg-white rounded-md font-medium text-brand-light-blue hover:text-blue-700 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-brand-light-blue">
                        <span>Upload a file</span>
                        <input id={id} name={id} type="file" className="sr-only" onChange={onChange} />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-slate-500">PDF, DOCX up to 10MB</p>
                {file && <p className="text-sm text-green-600 mt-2">Selected: {file.name}</p>}
            </div>
        </div>
    </div>
);


export const Step3SupportingDocs: React.FC<Step3Props> = ({ data, handleChange }) => {
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files ? e.target.files[0] : null;
        handleChange('supportingDocs', e.target.name as keyof ResearchFormData['supportingDocs'], file);
    };

    return (
        <div>
            <h2 className="text-2xl font-bold text-brand-teal mb-6 font-heading">Upload Supporting Documents</h2>
            <div className="space-y-6">
                <FileUpload label="Curriculum Vitae (CV)" id="cv" file={data.cv} onChange={handleFileChange} />
                <FileUpload label="Detailed Research Proposal (PDF)" id="proposal" file={data.proposal} onChange={handleFileChange} />
                <FileUpload label="Letter of Support (Optional)" id="letterOfSupport" file={data.letterOfSupport} onChange={handleFileChange} />
            </div>
        </div>
    );
};
