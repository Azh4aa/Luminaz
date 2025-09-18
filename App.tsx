import React, { Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const FundingHubPage = lazy(() => import('./pages/FundingHubPage'));
const ScholarshipApplicationPage = lazy(() => import('./pages/ScholarshipApplicationPage'));
const CommunityPage = lazy(() => import('./pages/CommunityPage'));
const TestimonialsPage = lazy(() => import('./pages/TestimonialsPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const ApplyPage = lazy(() => import('./pages/ApplyPage'));
const ResearchFundPage = lazy(() => import('./pages/ResearchFundPage'));
const ResearchFundApplicationPage = lazy(() => import('./pages/ResearchFundApplicationPage'));
const PartnerScholarshipsPage = lazy(() => import('./pages/PartnerScholarshipsPage'));
const GeneralApplicationPage = lazy(() => import('./pages/GeneralApplicationPage'));


const LoadingSpinner: React.FC = () => (
    <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-brand-teal"></div>
    </div>
);

const App: React.FC = () => {
    const location = useLocation();
    const isApplicationPage = location.pathname.includes('-application');

    return (
        <div className="flex flex-col min-h-screen font-sans bg-brand-off-white text-slate-800">
            <Header key={location.pathname} isMinimal={isApplicationPage} />
            <main className="flex-grow">
                <Suspense fallback={<LoadingSpinner />}>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/services" element={<ServicesPage />} />
                        <Route path="/funding-hub" element={<FundingHubPage />} />
                        <Route path="/scholarship-application" element={<ScholarshipApplicationPage />} />
                        <Route path="/research-fund" element={<ResearchFundPage />} />
                        <Route path="/research-fund-application" element={<ResearchFundApplicationPage />} />
                        <Route path="/partner-scholarships" element={<PartnerScholarshipsPage />} />
                        <Route path="/general-application" element={<GeneralApplicationPage />} />
                        <Route path="/apply" element={<ApplyPage />} />
                        <Route path="/community" element={<CommunityPage />} />
                        <Route path="/testimonials" element={<TestimonialsPage />} />
                        <Route path="/contact" element={<ContactPage />} />
                    </Routes>
                </Suspense>
            </main>
            {!isApplicationPage && <Footer />}
        </div>
    );
};

export default App;