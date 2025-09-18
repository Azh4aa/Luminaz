import React from 'react';
import type { ResearchFormData } from '../../types';

interface Step1Props {
    data: ResearchFormData['applicantInfo'];
    handleChange: <T,>(section: keyof ResearchFormData, field: keyof T, value: string) => void;
}

const InputField: React.FC<{label: string; id: keyof ResearchFormData['applicantInfo']; type: string; value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;}> = ({ label, id, type, value, onChange }) => (
    <div>
        <label htmlFor={id} className="block text-sm font-medium text-slate-700">{label}</label>
        <input
            type={type}
            id={id}
            name={id}
            value={value}
            onChange={onChange}
            required
            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-light-blue focus:border-brand-light-blue"
        />
    </div>
);


export const Step1ApplicantInfo: React.FC<Step1Props> = ({ data, handleChange }) => {
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        handleChange('applicantInfo', e.target.name as keyof ResearchFormData['applicantInfo'], e.target.value);
    };

    return (
        <div>
            <h2 className="text-2xl font-bold text-brand-teal mb-6 font-heading">Applicant Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputField label="Full Name" id="fullName" type="text" value={data.fullName} onChange={handleInputChange} />
                <InputField label="Email Address" id="email" type="email" value={data.email} onChange={handleInputChange} />
                <InputField label="Current Institution" id="currentInstitution" type="text" value={data.currentInstitution} onChange={handleInputChange} />
                <InputField label="Field of Study / Department" id="fieldOfStudy" type="text" value={data.fieldOfStudy} onChange={handleInputChange} />
            </div>
        </div>
    );
};
