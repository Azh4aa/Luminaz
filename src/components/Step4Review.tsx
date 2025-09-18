import React from 'react';
import type { ResearchFormData } from '../../types';

interface Step4Props {
    data: ResearchFormData;
    goToStep: (step: number) => void;
}

const ReviewSection: React.FC<{title: string; step: number; goToStep: (step: number) => void; children: React.ReactNode}> = ({ title, step, goToStep, children }) => (
    <div className="mb-6 bg-slate-50 p-6 rounded-lg shadow-sm">
        <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold text-brand-teal">{title}</h3>
            <button onClick={() => goToStep(step)} className="text-sm text-brand-light-blue hover:underline">Edit</button>
        </div>
        <div className="space-y-2 text-slate-700">{children}</div>
    </div>
);

const ReviewItem: React.FC<{label: string; value: string | undefined | null}> = ({ label, value }) => (
    <div className="grid grid-cols-3 gap-4">
        <p className="font-medium col-span-1">{label}:</p>
        <p className="col-span-2 whitespace-pre-wrap">{value || 'Not provided'}</p>
    </div>
);


export const Step4Review: React.FC<Step4Props> = ({ data, goToStep }) => {
    return (
        <div>
            <h2 className="text-2xl font-bold text-brand-teal mb-6 font-heading">Review Your Proposal</h2>
            <p className="text-slate-600 mb-6">Please review all your information carefully before submitting. You can go back to any step to make changes.</p>

            <ReviewSection title="Applicant Information" step={1} goToStep={goToStep}>
                <ReviewItem label="Full Name" value={data.applicantInfo.fullName} />
                <ReviewItem label="Email" value={data.applicantInfo.email} />
                <ReviewItem label="Institution" value={data.applicantInfo.currentInstitution} />
                <ReviewItem label="Field of Study" value={data.applicantInfo.fieldOfStudy} />
            </ReviewSection>

            <ReviewSection title="Project Details" step={2} goToStep={goToStep}>
                 <ReviewItem label="Title" value={data.projectDetails.title} />
                 <ReviewItem label="Abstract" value={data.projectDetails.abstract} />
                 <ReviewItem label="Methodology" value={data.projectDetails.methodology} />
                 <ReviewItem label="Budget" value={data.projectDetails.budget} />
            </ReviewSection>

            <ReviewSection title="Supporting Documents" step={3} goToStep={goToStep}>
                <ReviewItem label="CV" value={data.supportingDocs.cv?.name} />
                <ReviewItem label="Proposal PDF" value={data.supportingDocs.proposal?.name} />
                <ReviewItem label="Letter of Support" value={data.supportingDocs.letterOfSupport?.name} />
            </ReviewSection>
        </div>
    );
};
