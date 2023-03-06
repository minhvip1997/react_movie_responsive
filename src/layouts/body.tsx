import {Route, Routes} from 'react-router-dom'
import { Catalog } from '../pages/catalog'
import { Home } from '../pages/home'
const Body =()=>{
    return(
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/movies' element={<Catalog type='movie'/>}></Route>
            <Route path='/tv' element={<Catalog type='tv'/>}></Route>
            <Route path='/search' element={<Catalog type='search'/>}></Route>
        </Routes>
    )
}

export default Body