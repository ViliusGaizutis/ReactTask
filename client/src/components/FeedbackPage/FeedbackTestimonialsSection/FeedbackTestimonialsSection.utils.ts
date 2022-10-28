// Types
import { Feedback } from 'types';

export enum TestimonialCategory {
  ratings = 'ratings',
  suggestions = 'suggestions',
  recommendations = 'recommendations',
  mores = 'mores'
}

type TestimonialsConfig = Record<TestimonialCategory, Record<'title', string>>;

export const testimonialsConfig: TestimonialsConfig = {
  [TestimonialCategory.ratings]: {
    title: 'How would you rate our app?'
  },
  [TestimonialCategory.suggestions]: {
    title: 'Anything that can be improved?'
  },
  [TestimonialCategory.recommendations]: {
    title: 'Would you recommend this app to someone else?'
  },
  [TestimonialCategory.mores]: {
    title: 'Care to share more?'
  }
};

export type Testimonials = Record<TestimonialCategory, Testimonial[]>;

interface Testimonial {
  name: string;
  rating?: number;
  message: string;
  timestamp: Date;
}

export const generateTestimonialData = (data: Feedback[]) =>
  data.reduce<Testimonials>(
    (
      { ratings, suggestions, recommendations, mores },
      { name, rating, reason, suggestion, recommendation, more, timestamp }
    ): Testimonials => ({
      [TestimonialCategory.ratings]: [...ratings, { name, rating, message: reason, timestamp }],
      [TestimonialCategory.suggestions]: [...suggestions, { name, message: suggestion, timestamp }],
      [TestimonialCategory.recommendations]: [
        ...recommendations,
        { name, message: recommendation, timestamp }
      ],
      [TestimonialCategory.mores]: [...mores, { name, message: more, timestamp }]
    }),
    {
      [TestimonialCategory.ratings]: [],
      [TestimonialCategory.suggestions]: [],
      [TestimonialCategory.recommendations]: [],
      [TestimonialCategory.mores]: []
    }
  );

export type TestimonialsDataArray =
  | {
      id: TestimonialCategory;
      list: Testimonial[];
    }[]
  | undefined;

export const filterTestimonialsWithEmptyMessages = (list: Testimonial[]) =>
  list.filter((item: Testimonial) => item.message);
