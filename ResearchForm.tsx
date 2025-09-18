import React, { useState } from 'react';
import type { ResearchFormData } from '../../types';
import { FormProgressBar } from '../scholarshipForm/FormProgressBar'; // Reusing progress bar
import { Step1ApplicantInfo } from './Step1ApplicantInfo';
import { Step2ProjectDetails } from './Step2ProjectDetails';
import { Step3SupportingDocs } from './Step3SupportingDocs';
import { Step4Review } from './Step4Review';


const TOTAL_STEPS = 4;

export const ResearchForm: React.FC = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState<ResearchFormData>({
        applicantInfo: {
            fullName: '',
            email: '',
            currentInstitution: '',
            fieldOfStudy: '',
        },
        projectDetails: {
            title: '',
            abstract: '',
            methodology: '',
            budget: '',
        },
        supportingDocs: {
            cv: null,
            proposal: null,
            letterOfSupport: null,
        },
    });

    const nextStep = () => setCurrentStep(prev => (prev < TOTAL_STEPS ? prev + 1 : prev));
    const prevStep = () => setCurrentStep(prev => (prev > 1 ? prev - 1 : prev));
    const goToStep = (step: number) => {
        if (step > 0 && step <= TOTAL_STEPS) {
            setCurrentStep(step);
        }
    }

    const handleChange = <T,>(section: keyof ResearchFormData, field: keyof T, value: any) => {
      setFormData(prev => ({
          ...prev,
          [section]: {
              ...(prev[section] as object),
              [field]: value,
          },
      }));
    };

     const handleFileChange = (section: keyof ResearchFormData, field: keyof ResearchFormData['supportingDocs'], file: File | null) => {
        setFormData(prev => ({
            ...prev,
            [section]: {
                ...(prev[section] as object),
                [field]: file,
            },
        }));
    };
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Research Proposal Submitted! We will be in touch.');
        console.log('Final Research Form Data:', formData);
    };

    const stepNames = ['Applicant', 'Project', 'Documents', 'Review'];

    return (
        <div>
            <FormProgressBar currentStep={currentStep} totalSteps={TOTAL_STEPS} steps={stepNames} />
            <div className="mt-8">
                {currentStep === 1 && <Step1ApplicantInfo data={formData.applicantInfo} handleChange={handleChange} />}
                {currentStep === 2 && <Step2ProjectDetails data={formData.projectDetails} handleChange={handleChange} />}
                {currentStep === 3 && <Step3SupportingDocs data={formData.supportingDocs} handleChange={handleFileChange} />}
                {currentStep === 4 && <Step4Review data={formData} goToStep={goToStep} />}
            </div>

            <div className="mt-8 flex justify-between">
                {currentStep > 1 ? (
                    <button onClick={prevStep} className="bg-slate-300 text-slate-800 font-bold py-2 px-6 rounded-lg hover:bg-slate-400 transition-colors">
                        Back
                    </button>
                ) : <div />}
                {currentStep < TOTAL_STEPS && (
                    <button onClick={nextStep} className="bg-brand-teal text-white font-bold py-2 px-6 rounded-lg hover:bg-opacity-90 transition-colors ml-auto">
                        Next
                    </button>
                )}
                {currentStep === TOTAL_STEPS && (
                    <button onClick={handleSubmit} className="bg-brand-yellow text-brand-teal font-bold py-2 px-6 rounded-lg hover:bg-opacity-90 transition-colors ml-auto">
                        Submit Proposal
                    </button>
                )}
            </div>
        </div>
    );
};