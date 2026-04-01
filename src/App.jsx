import { Routes, Route } from "react-router-dom";

import Navbar      from "./components/layout/Navbar.jsx";
import Footer      from "./components/layout/Footer.jsx";
import PageWrapper from "./components/layout/PageWrapper.jsx";

import HomeHero      from "./components/home/HomeHero.jsx";
import StudentStories from "./components/home/StudentStories.jsx";
import CTASection    from "./components/home/CTASection.jsx";

import AboutHero        from "./components/about/AboutHero.jsx";
import AboutStory       from "./components/about/AboutStory.jsx";
import ChallengesSection from "./components/about/ChallengesSection.jsx";
import MentorsSection   from "./components/about/MentorsSection.jsx";
import AboutCTA         from "./components/about/AboutCTA.jsx";
import VisionHero    from "./components/vision/VisionHero.jsx";
import VisionCTA     from "./components/vision/VisionCTA.jsx";

import ProgramsHero       from "./components/programs/ProgramsHero.jsx";
import ProgramsGrid       from "./components/programs/ProgramsGrid.jsx";
import HowItWorks         from "./components/programs/HowItWorks.jsx";
import FAQSection         from "./components/programs/FAQSection.jsx";

import RegisterHero   from "./components/register/RegisterHero.jsx";
import RegisterLayout from "./components/register/RegisterLayout.jsx";

function HomePage() {
  return (
    <PageWrapper>
      <HomeHero />
      <StudentStories />
      <CTASection />
    </PageWrapper>
  );
}

function AboutPage() {
  return (
    <PageWrapper>
      <AboutHero />
      <AboutStory />
      <ChallengesSection />
      <MentorsSection />
      <AboutCTA />
    </PageWrapper>
  );
}

function VisionPage() {
  return (
    <PageWrapper>
      <VisionHero />
    
  
  
    
      <VisionCTA />
    </PageWrapper>
  );
}

function ProgramsPage() {
  return (
    <PageWrapper>
      <ProgramsHero />
      <ProgramsGrid />
      <HowItWorks />
     
      <FAQSection />
    </PageWrapper>
  );
}

function RegisterPage() {
  return (
    <PageWrapper>
      <RegisterHero />
      <RegisterLayout />
    </PageWrapper>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/"         element={<HomePage />}    />
        <Route path="/about"    element={<AboutPage />}   />
        <Route path="/vision"   element={<VisionPage />}  />
        <Route path="/programs" element={<ProgramsPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
      <Footer />
    </>
  );
}