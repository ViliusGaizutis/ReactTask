import React, { FunctionComponent, useState, useEffect } from 'react';

// Types
import type { InputProps } from 'types';

// Assets
import { IconStar } from 'assets/images/svg';

// Styles
import { Flex } from 'styles/global';
import * as S from './StarRating.styles';

const StarRating: FunctionComponent<InputProps> = ({
  id,
  value,
  theme,
  inputConfig,
  ...otherProps
}) => {
  const [rating, setRating] = useState<number | null>(null);
  const [ratingHovered, setRatingHovered] = useState<number | null>(null);

  const ratings = Object.values(inputConfig!.options!) as number[];

  // Clear active state if value is empty
  useEffect(() => {
    if (!value) setRating(null);
  }, [value]);

  return (
    <S.StarRating>
      <Flex justifyFlexStart>
        {ratings.map(ratingValue => (
          <S.StarWrapper
            key={`star-${ratingValue}`}
            themeType={theme}
            active={ratingValue <= (ratingHovered! || rating!)}
          >
            <label htmlFor={id}>
              <S.Star
                name={id}
                value={ratingValue}
                checked={value === ratingValue}
                {...inputConfig}
                onClick={() => setRating(ratingValue)}
                onMouseEnter={() => setRatingHovered(ratingValue)}
                onMouseLeave={() => setRatingHovered(null)}
                {...otherProps}
              />
              <IconStar />
            </label>
          </S.StarWrapper>
        ))}
      </Flex>
    </S.StarRating>
  );
};

export default StarRating;
