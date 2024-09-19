import {useState} from 'react'
import './header.css'
// import '../madia.css'


const Header=()=>{
    const [open,setopen]=useState(false);

    const handleClick=()=>{
        return setopen(!open)
    }
    return(
       <>
            <header className='header-sec'>
                <div className='header-container'>
                    <div className='header-row'>
                        <div className='header-col-1'>
                            <div className='header-logo'>
                              
                                 <img src='https://nailsnbeyond.in/wp-content/uploads/elementor/thumbs/newmainlogo-ql5cqnudspppls20y8gkdqhnv3j0qurqj374qe7s3k.webp' alt='loading' />
                            </div>
                          
                           <div className='header-icons' onClick={()=>handleClick()}>
                               
                              {
                                open?<i class="bi bi-file-excel"></i>: <i class="bi bi-list"></i>
                               }
                           </div>
                        </div>
                        <nav className={open?'header-col-2 active':'header-col-2'} >
                            {/* <button>Home</button>
                            <button>Services</button>
                            <button>Gallery</button>
                            <button>Franchise</button>
                            <button>Blogs</button>
                            <button>Contact Us</button> */}
                            <ul>
                                    <li>Home</li>
                                    <li>Services</li>
                                    <li>Gallery</li>
                                    <li>Franchise</li>
                                    <li>Blogs</li>
                                    <li>Contact Us</li>
                            </ul>
                           </nav>
                            <div className={open?'header-col-3 active':'header-col-3'} >
                                <button id='header-col-3-btn1'>Store Locator</button>
                                <button id='header-col-3-btn2'>Book With Us</button>
                            </div>
                       
                    </div>
                </div>
            </header>
       </>
    )
}
export default Header