import React from 'react';

import FullStar from './_full-star.jsx';
import HalfStar from './_half-star.jsx';
import EmptyStar from './_empty-star.jsx';

function Rating({ rating }) {
  const MAX_STARS = 5;
  let totalFullStars = Math.floor(rating);
  let hasHalfStar = MAX_STARS % totalFullStars >= 0.5;
  let stars = [];

  for ( let i = 0; i < totalFullStars; i++ ) {
    stars.push(<FullStar />)
  }

  hasHalfStar && stars.push(<HalfStar />);

  if ( MAX_STARS - stars.length > 0 ) {
    let emptyStars = MAX_STARS - stars.length;

    for ( let i = 0; i < emptyStars; i++  ) {
      stars.push(<EmptyStar />);
    }
  }
  return (
    <div>
    {
      stars.map((Star, i) => 
        <React.Fragment key={i}>
          { Star }
        </React.Fragment>
      )
    }
    </div>
  );
}

export default Rating;