import { Film } from '../interfaces'
import {Image} from './images'

interface Props{
    film: Film
}

export const Card=(props:Props)=>{
    return(
        <div className="mx-3 my-1.5">
            <Image className='h-[200px]' src=''></Image>
            <p className='py-1.5 line-clamp-2'>{props.film.title}</p>
        </div>
    )
}