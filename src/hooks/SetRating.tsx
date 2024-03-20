import React, {FC, PropsWithChildren} from "react";
import StarRatings from "react-star-ratings";


interface IProps extends PropsWithChildren {
    rating:number
}

const SetRating: FC<IProps> = ({rating}) => {

    return (
        <StarRatings
            rating={rating}
            starRatedColor='orange'
            starDimension={'18px'}
            starSpacing={'2px'}
            numberOfStars={10}
            name='rating'
            starEmptyColor='grey'
        />

    )

}
const SetDetRating: FC<IProps> = ({rating}) => {

    return (
        <StarRatings
            rating={rating}
            starRatedColor='orange'
            starDimension={'30px'}
            starSpacing={'2px'}
            numberOfStars={10}
            name='rating'
            starEmptyColor='grey'
        />

    )

}


export {SetRating,SetDetRating};