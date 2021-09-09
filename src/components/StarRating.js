import { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const StarRating = () => {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);

    return (
        <div>
            {[...Array(5)].map((_, index) => {
                const ratingValue = index + 1;

                return (
                    <label key={index}>
                        <input
                            type='radio'
                            name='rating'
                            value={ratingValue}
                            onClick={() => setRating(ratingValue)}
                        />
                        <FaStar
                            size={100}
                            className='star'
                            onMouseLeave={() => setHover(null)}
                            onMouseEnter={() => setHover(ratingValue)}
                            color={ratingValue <= (hover || rating) ? '#ffc107' : '#e4e5e9'}
                        />
                    </label>
                )
            })}
            <p>The rating is {rating}.</p>
        </div>
    );
};

export default StarRating;
