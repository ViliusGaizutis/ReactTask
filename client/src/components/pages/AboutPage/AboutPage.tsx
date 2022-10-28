import React, { FunctionComponent } from 'react';

// Components
import AboutHeroSection from 'components/pages/AboutPage/AboutHeroSection/AboutHeroSection';
import AboutHowSection from 'components/pages/AboutPage/AboutHowSection/AboutHowSection';
import AboutFeedbackSection from 'components/pages/AboutPage/AboutFeedbackSection/AboutFeedbackSection';

const AboutPage: FunctionComponent = () => (
  <main>
    <AboutHeroSection />
    <AboutHowSection />
    <AboutFeedbackSection />
  </main>
);

export default AboutPage;
