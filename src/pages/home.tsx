import { Section } from "../components/sections"
import { Film } from "../interfaces"
import { useState, useEffect } from "react"
import { TrendingsHero } from "../components/trendings-hero"
import { Slider } from "../components/slider/slider"
import { Card } from "../components/card"

export const Home=()=>{
    const [trendings, setTrending] = useState<Film[]>([])
    const [theaters, setTheaters] = useState<Film[]>([])
    const fetch=()=>{
        const arrs:Film[] = []
        for(let i=0; i<6;i++){
            arrs.push({
                id: i,
                title: 'KHI TA HAI LĂM',
                desciption:`Khi Ta Hai Lăm xoay quanh Tuệ Lâm (Midu), một nữ quản lý nghệ sĩ trẻ với tâm huyết cháy bỏng dành cho nhóm nhạc của mình - The Air. Tuy nhiên một biến cố lớn xảy ra khiến mọi dự định dành cho nhóm bị trì hoãn, còn Tuệ Lâm phải sang Hàn Quốc làm việc. Ngay sau khi trở về, cô quyết tâm khôi phục lại nhóm nhạc đầu tiên mà mình quản lý trong sự nghiệp và cho họ một màn debut xứng đáng.`,
                coverPath: '',
                genreIds:[1,2,3,4,5,6],
                posterPath: '',
                seasons:[]
            })
        }
        setTrending(arrs)
        setTheaters(arrs)
    }

    useEffect(()=>{
        fetch()
        // console.log('props.keyword', items);https://lontv.cc/video-sex-mature-milf_94e5455314d7a6b794d413d3d
        
    },[])
    return(
        <>
            <Section className="py-8">
                <Slider className="slick-hero" autoplay={true} slidesToScroll={1} slidesToShow={1}>
                    {trendings.map((film,i)=>(
                        <TrendingsHero film={film} key={i}></TrendingsHero>
                    ))}
                </Slider>
            </Section>
            <Section title="Theater">
                <Slider className="slick-hero" autoplay={true} slidesToScroll={5} slidesToShow={5}>
                    {theaters.map((film,i)=>(
                        <Card film={film} key={i}></Card>
                    ))}
                </Slider>
            </Section>
        </>
    )
}