import React from "react";
import StarRatings from "react-star-ratings";

const StarRating = ({ value }) => {
  return (
    <StarRatings
      rating={value}
      starRatedColor="#84BD98" // color of stars when they are rated
      numberOfStars={5} // total number of stars
      name="rating" // name of the rating
      starDimension="20px" // size of stars
      starSpacing="2px" // space between stars
    />
  );
};

export default StarRating;
