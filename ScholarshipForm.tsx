import React, { useState } from 'react';
import type { ScholarshipFormData } from '../../types';
import { FormProgressBar } from './FormProgressBar';
import { Step1Personal } from './Step1Personal';
import { Step2Academic } from './Step2Academic';
import { Step3Documents } from './Step3Documents';
import { Step4Essay } from './Step4Essay';
import { Step5Review } from './Step5Review';

const TOTAL_STEPS = 5;

export const ScholarshipForm: React.FC = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState<ScholarshipFormData>({
        personalDetails: {
            fullName: '',
            email: '',
            phone: '',
            dob: '',
            nationality: '',
            address: '',
        },
        academicHistory: [
            {
                highSchoolName: '',
                graduationYear: '',
                gpa: '',
                standardizedTestScores: '',
            },
        ],
        documents: {
            transcript: null,
            recommendationLetter: null,
            passportCopy: null,
        },
        essay: {
            prompt1: 'Describe a time you faced a significant challenge and how you overcame it. What did you learn about yourself? (500 words max)',
            response1: '',
        },
    });

    const nextStep = () => setCurrentStep(prev => (prev < TOTAL_STEPS ? prev + 1 : prev));
    const prevStep = () => setCurrentStep(prev => (prev > 1 ? prev - 1 : prev));
    const goToStep = (step: number) => {
        if (step > 0 && step <= TOTAL_STEPS) {
            setCurrentStep(step);
        }
    }

    const handleChange = <T,>(section: keyof ScholarshipFormData, field: keyof T, value: any) => {
      setFormData(prev => ({
          ...prev,
          [section]: {
              ...(prev[section] as object),
              [field]: value,
          },
      }));
    };

     const handleFileChange = (section: keyof ScholarshipFormData, field: keyof ScholarshipFormData['documents'], file: File | null) => {
        setFormData(prev => ({
            ...prev,
            [section]: {
                ...(prev[section] as object),
                [field]: file,
            },
        }));
    };
    
    const handleAcademicChange = (index: number, field: keyof ScholarshipFormData['academicHistory'][0], value: string) => {
        const newHistory = [...formData.academicHistory];
        newHistory[index] = { ...newHistory[index], [field]: value };
        setFormData(prev => ({ ...prev, academicHistory: newHistory }));
    };

    const addAcademicRecord = () => {
        setFormData(prev => ({
            ...prev,
            academicHistory: [...prev.academicHistory, { highSchoolName: '', graduationYear: '', gpa: '', standardizedTestScores: '' }]
        }));
    };

    const removeAcademicRecord = (index: number) => {
        if (formData.academicHistory.length > 1) {
            const newHistory = formData.academicHistory.filter((_, i) => i !== index);
            setFormData(prev => ({ ...prev, academicHistory: newHistory }));
        }
    };


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Application Submitted! We will be in touch.');
        console.log('Final Form Data:', formData);
        // Here you would typically send the data to a server
    };

    return (
        <div>
            <FormProgressBar currentStep={currentStep} totalSteps={TOTAL_STEPS} />
            <div className="mt-8">
                {currentStep === 1 && <Step1Personal data={formData.personalDetails} handleChange={handleChange} />}
                {currentStep === 2 && <Step2Academic data={formData.academicHistory} handleChange={handleAcademicChange} addRecord={addAcademicRecord} removeRecord={removeAcademicRecord} />}
                {currentStep === 3 && <Step3Documents data={formData.documents} handleChange={handleFileChange} />}
                {currentStep === 4 && <Step4Essay data={formData.essay} handleChange={handleChange} />}
                {currentStep === 5 && <Step5Review data={formData} goToStep={goToStep} />}
            </div>

            <div className="mt-8 flex justify-between">
                {currentStep > 1 && (
                    <button onClick={prevStep} className="bg-slate-300 text-slate-800 font-bold py-2 px-6 rounded-lg hover:bg-slate-400 transition-colors">
                        Back
                    </button>
                )}
                {currentStep < TOTAL_STEPS && (
                    <button onClick={nextStep} className="bg-brand-teal text-white font-bold py-2 px-6 rounded-lg hover:bg-opacity-90 transition-colors ml-auto">
                        Next
                    </button>
                )}
                {currentStep === TOTAL_STEPS && (
                    <button onClick={handleSubmit} className="bg-brand-yellow text-brand-teal font-bold py-2 px-6 rounded-lg hover:bg-opacity-90 transition-colors ml-auto">
                        Submit Application
                    </button>
                )}
            </div>
        </div>
    );
};