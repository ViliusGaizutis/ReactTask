import React, { FunctionComponent, useEffect, useState } from 'react';

// Store
import { useAppSelector } from 'redux/hooks';
import { selectTheme } from 'redux/reducers/global';

// Components
import RequestDataWrapper from 'components/shared/RequestDataWrapper/RequestDataWrapper';
import Accordion from 'components/shared/Accordion/Accordion';
import StarRating from 'components/shared/StarRating/StarRating';

// Utils
import dateFormatter from 'utils/dateFormatter';
import {
  Testimonials,
  TestimonialCategory,
  TestimonialsDataArray,
  testimonialsConfig,
  generateTestimonialData,
  filterTestimonialsWithEmptyMessages
} from './FeedbackTestimonialsSection.utils';

// Styles
import { Container, Flex } from 'styles/global';
import * as S from '../FeedbackPage.styles';

// Constants
import { STAR_RATING_OPTIONS } from '../../../../constants';

const FeedbackTestimonialsSection: FunctionComponent = () => {
  const theme = useAppSelector(selectTheme);
  const { data, loading, error } = useAppSelector(state => state.feedback);
  const [testimonials, setTestimonials] = useState<Testimonials>();

  const testimonialsDataArray: TestimonialsDataArray =
    testimonials &&
    Object.entries(testimonials).map(entry => ({
      id: entry[0] as TestimonialCategory,
      list: entry[1]
    }));

  // Generate testimonials data object for use in the accordion tabs
  useEffect(() => {
    const testimonialData = generateTestimonialData(data);
    setTestimonials(testimonialData);
  }, [data]);

  return (
    <S.FeedbackTestimonialsSection id="testimonials">
      <Container>
        <Flex directionColumn>
          <h2>Testimonials</h2>
          {data.length > 0 ? (
            <RequestDataWrapper data={data} loading={loading} error={error}>
              {testimonialsDataArray?.map(({ id, list }, index) => (
                <Accordion key={id} id={id} title={testimonialsConfig[id].title} index={index}>
                  {filterTestimonialsWithEmptyMessages(list).length > 0 ? (
                    filterTestimonialsWithEmptyMessages(list).map(
                      ({ name, message, rating, timestamp }, i) => {
                        const { day, year, time } = dateFormatter(timestamp, true);

                        return (
                          <S.FeedbackTestimonial key={`testimonial-${i + 1}`} themeType={theme}>
                            <Flex directionColumn alignFlexStart>
                              <S.FeedbackTestimonialTop>
                                {rating && (
                                  <StarRating
                                    theme={theme}
                                    inputConfig={{
                                      type: 'radio',
                                      options: STAR_RATING_OPTIONS
                                    }}
                                    readOnly
                                    defaultValue={rating}
                                  />
                                )}
                                <p>{message}</p>
                              </S.FeedbackTestimonialTop>
                              <S.FeedbackTestimonialBottom themeType={theme}>
                                <Flex>
                                  <p>{name},</p>&nbsp;
                                  <time dateTime={`${day}, ${year}, ${time}`}>
                                    {day === 'Today'
                                      ? `${day}, ${time}`
                                      : `${day}, ${year}, ${time}`}
                                  </time>
                                </Flex>
                              </S.FeedbackTestimonialBottom>
                            </Flex>
                          </S.FeedbackTestimonial>
                        );
                      }
                    )
                  ) : (
                    <S.FeedbackTestimonialsNoData themeType={theme}>
                      No data available
                    </S.FeedbackTestimonialsNoData>
                  )}
                </Accordion>
              ))}
            </RequestDataWrapper>
          ) : (
            <S.FeedbackTestimonialsEmpty>
              No testimonials yet. Be the first one to submit! Fill out the form below.
            </S.FeedbackTestimonialsEmpty>
          )}
        </Flex>
      </Container>
    </S.FeedbackTestimonialsSection>
  );
};

export default FeedbackTestimonialsSection;
