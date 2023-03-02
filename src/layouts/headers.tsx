import { Container } from "../components/containers"
import { BrowserRouter, Link, useLocation, useNavigate, useSearchParams } from "react-router-dom"
import { useEffect, useState ,useRef } from "react"
import { mergeClassName } from "../utils"
import { IoIosSearch } from 'react-icons/io'

const MENU_CLASS = `p-1.5 hover:bg-primary rounded-md`
const MENU_CLASS_ACTIVE = `bg-primary`

const Header =()=>{

    const location = useLocation()
    const[params,_] = useSearchParams()
    const navigate = useNavigate()
    const [pathName, setPathName] = useState('')
    const [keyword, setKeyword] = useState('')
    const pathNameRef = useRef('')

    useEffect(()=>{
        setPathName(location.pathname)
        pathNameRef.current = location.pathname
    },[location.pathname])

    const getMenuClass =(path:string)=>{
        if(path === pathName){
            return mergeClassName(MENU_CLASS,MENU_CLASS_ACTIVE)
        }
        return mergeClassName(MENU_CLASS,'')
    }

    return(
        <div className="bg-header">
            <Container className="flex items-center justify-between">
                {/* brand and menu */}
                <div className="flex items-center flex-1 gap-6">
                    <h1 className="text-2xl font-semibold">
                        <Link to={'/'}>Movielia</Link>
                    </h1>
                    {/* menu */}
                    <div className=" pt-1 flex items-center gap-1.5">
                        <Link className={getMenuClass('/movies')} to={'/movies'}>Movies</Link>
                        <Link className={getMenuClass('/tv')} to={'/tv'}>TV</Link>
                    </div>
                </div>
                {/* search */}
                <div className="
                        border-b-[1.5px]
                        border-white
                        flex
                        items-center
                        p-1
                        flex-[0.5]
                        focus-within:border
                        "
                        >
                <input type="text" className="bg-transparent outline-0 flex-1" placeholder="Search..."/>
                <IoIosSearch size={18}></IoIosSearch>
            </div>
            </Container>
            
        </div>
    )
}

export default Header