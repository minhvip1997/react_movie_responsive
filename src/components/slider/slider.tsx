import './slider.css'
import Slick, { Settings } from 'react-slick'
interface Props extends Settings{
     isMovieCard?: boolean
}
export const Slider=(props: Props)=>{
    return (
        <Slick {...props} autoplaySpeed={5000}>
            {props.children}
        </Slick>
    )
}