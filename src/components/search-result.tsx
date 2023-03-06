import { useState, useEffect } from "react"
import { Film } from "../interfaces"
import { Image } from "./images"

interface Props{
    keyword: string
    goToSearchPage: Function
}

export const SearchResult =(props:Props)=>{

    const [items, setItems] = useState<Film[]>([])
    const [totalItems, setTotalItems] = useState(6)
    const fetch=()=>{
        const arrs:Film[] = []
        for(let i=0; i<6;i++){
            arrs.push({
                id: i,
                title: 'lorem',
                desciption: '',
                coverPath: '',
                genreIds:[1,2,3,4,5,6],
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
                    <div key={film.id} className="flex items-start p-1.5 rounded-lg hover:bg-primary cursor-pointer m-1.5">
                        <Image className="h-[72px] m-w-[102px] w-[102px] rounded-md" src=""/>
                        <div className="px-3 truncate ">
                            <p className="text-base truncate">{film.title}</p>
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
            {
                totalItems > 5 ? (<button
                    onClick={()=>props.goToSearchPage()}
                    className="px-3 py-1.5 bg-primary w-full hover:text-body">
                        More Result
                    </button>) : ('')
            }
            
        </div>
    )
}