import { useState, useEffect } from "react"
import { Film } from "../interfaces"
import { Image } from "./images"

interface Props{
    keyword: string
    goToSearchPage: Function
}

export const SearchResult =(props:Props)=>{

    const [items, setItems] = useState<Film[]>([])
    const fetch=()=>{
        const arrs:Film[] = []
        for(let i=0; i<5;i++){
            arrs.push({
                id: i,
                title: 'lorem',
                desciption: '',
                coverPath: '',
                genreIds:[1,2],
                posterPath: '',
                seasons:[]
            })
        }
        setItems(arrs)
    }

    useEffect(()=>{
        fetch()
        // console.log('props.keyword', items);
        
    },[props.keyword])
    return (
        <div className="
            absolute
            top-[48px]
            left-0
            right-0
            rounded-md
            overflow-hidden
            bg-header
        ">
            {
                items.map((film, i)=>(
                    <div key={film.id} className="flex items-start p-1.5 rounded-lg hover:bg-primary cursor-pointer">
                        <Image className="h-[72px] min-w-[102px] w-[102px] rounded-md" src=""/>
                        <div className="px-3">
                            <p className="text-base">{film.title}</p>
                            <ul className="flex flex-wrap gap-x-1.5 text-sm opacity-[0.7]">
                                {
                                    film.genreIds.map(id=> (
                                        <li key={id}>item{id}</li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}