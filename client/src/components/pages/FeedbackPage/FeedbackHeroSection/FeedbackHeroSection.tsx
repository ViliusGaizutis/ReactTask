import React, { FunctionComponent } from 'react';

// Components
import Button from 'components/shared/Button/Button';

// Assets
import { FeedbackHeroImg } from 'assets/images/svg';

// Styles
import { Container, Flex, Headline } from 'styles/global';
import * as S from '../FeedbackPage.styles';

const FeedbackHeroSection: FunctionComponent = () => (
  <S.FeedbackHeroSection>
    <Container>
      <Flex alignFlexStart>
        <S.FeedbackHeroContent>
          <Headline>
            <span>Give Feedback</span>
            We are constantly looking to improve
          </Headline>
          <p>Share your thoughts of your overall experience with our app</p>
          <Flex justifyFlexStart>
            <a href="#survey">
              <Button type="button" aria-label="Go to feedback page">
                Leave A Feedback
              </Button>
            </a>
            <a href="#testimonials">See Other People Testimonials</a>
          </Flex>
        </S.FeedbackHeroContent>
        <FeedbackHeroImg />
      </Flex>
    </Container>
  </S.FeedbackHeroSection>
);

export default FeedbackHeroSection;
