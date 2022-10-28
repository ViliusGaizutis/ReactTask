import React, { FunctionComponent } from 'react';

// Components
import FeedbackHeroSection from 'components/pages/FeedbackPage/FeedbackHeroSection/FeedbackHeroSection';
import FeedbackTestimonialsSection from 'components/pages/FeedbackPage/FeedbackTestimonialsSection/FeedbackTestimonialsSection';
import FeedbackFormSection from 'components/pages/FeedbackPage/FeedbackFormSection/FeedbackFormSection';

const FeedbackPage: FunctionComponent = () => (
  <main>
    <FeedbackHeroSection />
    <FeedbackTestimonialsSection />
    <FeedbackFormSection />
  </main>
);

export default FeedbackPage;
