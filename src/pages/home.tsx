import Slider from "react-slick"
import { Section } from "../components/sections"
import { Film } from "../interfaces"
import { useState, useEffect } from "react"

export const Home=()=>{
    const [trendings, setTrending] = useState<Film[]>([])
    const fetchTrendings=()=>{
        const arrs:Film[] = []
        for(let i=0; i<6;i++){
            arrs.push({
                id: i,
                title: 'lorem ipsum dolor sit amet mindhasdhsal hdasjdhalksdhaskl kdhsalkbdasklbalkfalks',
                desciption: 'lorem ipsum dolor sit amet mindhasdhsal hdasjdhalksdhaskl kdhsalkbdasklbalkfalks',
                coverPath: '',
                genreIds:[1,2,3,4,5,6],
                posterPath: '',
                seasons:[]
            })
        }
        setTrending(arrs)
    }

    useEffect(()=>{
        fetchTrendings()
        // console.log('props.keyword', items);
        
    },[])
    return(
        <>
            <Section className="py-8">
                <Slider>
                    {trendings.map((film,i)=>(
                        <div className="">
                                
                        </div>
                    ))}
                </Slider>
            </Section>
        </>
    )
}