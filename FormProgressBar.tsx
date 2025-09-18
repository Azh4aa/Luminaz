import React from 'react';

interface FormProgressBarProps {
    currentStep: number;
    totalSteps: number;
    steps?: string[];
}

const defaultSteps = ['Personal', 'Academics', 'Documents', 'Essay', 'Review'];

export const FormProgressBar: React.FC<FormProgressBarProps> = ({ currentStep, totalSteps, steps = defaultSteps }) => {
    const percentage = totalSteps > 1 ? ((currentStep - 1) / (totalSteps - 1)) * 100 : 0;

    return (
        <div>
            <div className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                    {steps.map((step, index) => (
                        <div key={step} className={`text-xs text-center w-1/${totalSteps}`}>
                            <span className={`font-semibold ${index + 1 <= currentStep ? 'text-brand-light-blue' : 'text-slate-500'}`}>
                                {step}
                            </span>
                        </div>
                    ))}
                </div>
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
                    <div style={{ width: `${percentage}%` }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-brand-light-blue transition-all duration-500"></div>
                </div>
            </div>
        </div>
    );
};