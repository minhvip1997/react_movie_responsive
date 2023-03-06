import { Container } from "../components/containers"
import { BrowserRouter, Link, useLocation, useNavigate, useSearchParams } from "react-router-dom"
import { useEffect, useState ,useRef } from "react"
import { mergeClassName } from "../utils"
import { IoIosSearch } from 'react-icons/io'
import { SearchResult } from "../components/search-result"

const MENU_CLASS = `p-1.5 hover:bg-primary rounded-md mobile:px-6 py-1`
const MENU_CLASS_ACTIVE = `bg-primary`

const Header =()=>{

    const location = useLocation()
    const[params,_] = useSearchParams()
    const navigate = useNavigate()
    const [pathName, setPathName] = useState('')
    const [keyword, setKeyword] = useState('')
    const pathNameRef = useRef('')
    const defaultKeyword = useRef('')
    const [isSearchFocus, setSearchFocus] = useState(false)
    const searchRef = useRef<HTMLInputElement>(null)

    

    const gotoSearchPage =()=>{
        if(keyword){
            // console.log('keyword', keyword);
            defaultKeyword.current = keyword
            navigate(`/search?q=${keyword}`)
            setSearchFocus(false)
            searchRef.current?.blur()
        }
    }

    const getMenuClass =(path:string)=>{
        if(path === pathName){
            return mergeClassName(MENU_CLASS,MENU_CLASS_ACTIVE)
        }
        return mergeClassName(MENU_CLASS,'')
    }
    const onWindowClick=()=>{
        setSearchFocus(false)
        initKeyWord()
    }

    const initKeyWord=()=>{
        if(pathNameRef.current === '/search'){
            setKeyword(defaultKeyword.current)
        }else{
            setKeyword('')
        }
    }

    useEffect(()=>{
        setPathName(location.pathname)
        pathNameRef.current = location.pathname
        defaultKeyword.current = params.get('q') || ''
        initKeyWord()
    },[location.pathname])

    useEffect(()=>{
        window.addEventListener('click', onWindowClick)
        return ()=>{
            window.removeEventListener('click', onWindowClick)
        }
    },[])

    return(
        <div className="bg-header">
            <Container className="flex items-center justify-between">
                {/* brand and menu */}
                <div className="flex items-center flex-1 gap-6">
                    <h1 className="text-2xl font-semibold">
                        <Link to={'/'}>Movielia</Link>
                    </h1>
                    {/* menu */}
                    <div className=" pt-1 flex items-center gap-1.5 mobile:fixed 
                    mobile:bottom-0 mobile:left-0 mobile:right-0 mobile:justify-center
                     mobile:py-3 mobile:bg-header mobile:gap-6">
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
                        focus-within:border-primary
                        relative
                        "
                        >
                <input 
                 onClick={(e)=>{
                    e.stopPropagation()
                    setSearchFocus(true)
                 }}
                 onKeyDown={e=>e.key === 'Enter' ? gotoSearchPage() : ''}
                 onInput={e=>setKeyword(e.currentTarget.value)}
                 value={keyword}
                 type="text"
                 className="bg-transparent outline-0 flex-1"
                 placeholder="Search..."/>
                <IoIosSearch size={18}></IoIosSearch>
                {
                    isSearchFocus ? (<SearchResult keyword={keyword} goToSearchPage={gotoSearchPage}></SearchResult>) 
                    : ('')
                }
            </div>
            </Container>
            
        </div>
    )
}

export default Header