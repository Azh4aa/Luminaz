
export interface ScholarshipFormData {
  personalDetails: {
    fullName: string;
    email: string;
    phone: string;
    dob: string;
    nationality: string;
    address: string;
  };
  academicHistory: {
    highSchoolName: string;
    graduationYear: string;
    gpa: string;
    standardizedTestScores: string;
    previousUniversity?: string;
  }[];
  documents: {
    transcript: File | null;
    recommendationLetter: File | null;
    passportCopy: File | null;
  };
  essay: {
    prompt1: string;
    response1: string;
  };
}

export interface ResearchFormData {
  applicantInfo: {
    fullName: string;
    email: string;
    currentInstitution: string;
    fieldOfStudy: string;
  };
  projectDetails: {
    title: string;
    abstract: string;
    methodology: string;
    budget: string;
  };
  supportingDocs: {
    cv: File | null;
    proposal: File | null;
    letterOfSupport: File | null;
  };
}
