import React from 'react';
import type { ScholarshipFormData } from '../../types';

interface Step1Props {
    data: ScholarshipFormData['personalDetails'];
    handleChange: <T,>(section: keyof ScholarshipFormData, field: keyof T, value: string) => void;
}

const InputField: React.FC<{label: string; id: keyof ScholarshipFormData['personalDetails']; type: string; value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;}> = ({ label, id, type, value, onChange }) => (
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


export const Step1Personal: React.FC<Step1Props> = ({ data, handleChange }) => {
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        handleChange('personalDetails', e.target.name as keyof ScholarshipFormData['personalDetails'], e.target.value);
    };

    return (
        <div>
            <h2 className="text-2xl font-bold text-brand-teal mb-6 font-heading">Personal Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputField label="Full Name" id="fullName" type="text" value={data.fullName} onChange={handleInputChange} />
                <InputField label="Email Address" id="email" type="email" value={data.email} onChange={handleInputChange} />
                <InputField label="Phone Number" id="phone" type="tel" value={data.phone} onChange={handleInputChange} />
                <InputField label="Date of Birth" id="dob" type="date" value={data.dob} onChange={handleInputChange} />
                <InputField label="Nationality" id="nationality" type="text" value={data.nationality} onChange={handleInputChange} />
                <InputField label="Full Address" id="address" type="text" value={data.address} onChange={handleInputChange} />
            </div>
        </div>
    );
};