import Rating from "./Rating";
import StyledReview from "./styled";

export default function Review({ review }) {
    return (
        <StyledReview key={review.id}>
            <div className="review">
                <h4>{review.username}</h4>
                <Rating rating={review.rating} />
            </div>
            <p>{review.description}</p>
        </StyledReview>
    );
};