import React from 'react';
import type { ScholarshipFormData } from '../../types';

interface Step5Props {
    data: ScholarshipFormData;
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
    <div className="grid grid-cols-3">
        <p className="font-medium col-span-1">{label}:</p>
        <p className="col-span-2">{value || 'Not provided'}</p>
    </div>
);


export const Step5Review: React.FC<Step5Props> = ({ data, goToStep }) => {
    return (
        <div>
            <h2 className="text-2xl font-bold text-brand-teal mb-6 font-heading">Review Your Application</h2>
            <p className="text-slate-600 mb-6">Please review all your information carefully before submitting. You can go back to any step to make changes.</p>

            <ReviewSection title="Personal Details" step={1} goToStep={goToStep}>
                <ReviewItem label="Full Name" value={data.personalDetails.fullName} />
                <ReviewItem label="Email" value={data.personalDetails.email} />
                <ReviewItem label="Phone" value={data.personalDetails.phone} />
                <ReviewItem label="Date of Birth" value={data.personalDetails.dob} />
                <ReviewItem label="Nationality" value={data.personalDetails.nationality} />
                <ReviewItem label="Address" value={data.personalDetails.address} />
            </ReviewSection>

            <ReviewSection title="Academic History" step={2} goToStep={goToStep}>
                {data.academicHistory.map((record, index) => (
                    <div key={index} className="pt-4 mt-4 border-t first:mt-0 first:pt-0 first:border-t-0">
                         <p className="font-semibold text-slate-800 mb-2">Record #{index + 1}</p>
                         <ReviewItem label="Institution" value={record.highSchoolName} />
                         <ReviewItem label="Graduation Year" value={record.graduationYear} />
                         <ReviewItem label="GPA" value={record.gpa} />
                         <ReviewItem label="Test Scores" value={record.standardizedTestScores} />
                    </div>
                ))}
            </ReviewSection>

            <ReviewSection title="Documents" step={3} goToStep={goToStep}>
                <ReviewItem label="Transcript" value={data.documents.transcript?.name} />
                <ReviewItem label="Recommendation" value={data.documents.recommendationLetter?.name} />
                <ReviewItem label="Passport Copy" value={data.documents.passportCopy?.name} />
            </ReviewSection>

            <ReviewSection title="Essay" step={4} goToStep={goToStep}>
                <p className="whitespace-pre-wrap text-slate-700 bg-white p-3 rounded-md">{data.essay.response1 || 'No essay written.'}</p>
            </ReviewSection>
        </div>
    );
};