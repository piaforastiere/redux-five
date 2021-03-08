import React from 'react'
import { Link, NavLink, withRouter } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logOutAction } from '../redux/UserDucks'

import logo from '../assets/img/logo-1.png'
// import { Profile } from './ui/Navbar'

// import emptyPhoto from '../assets/img/empty-photo.png'

const Navbar = (props) => {

    const dispatch = useDispatch()

    // const user = useSelector(store => store.user.user)
    
    
    const logout = () => {
        dispatch(logOutAction())

        props.history.push('/login')
    }
    const active = useSelector(store => store.user.active)

    
    

    return (
        <div className="navbar  navbar-dark bg-dark p-2">
            <Link className="navbar-brand ms-3" to="/" >
                <img src={logo} alt="cinco poderes" width="150"/>
            </Link>
            <div className="d-flex align-items-center">
                {
                    active ? (
                        <>  
                            {/* <NavLink className="btn btn-light me-2 rounded-pill" style={{ width: '150px'}} to="/game" exact>
                                Play
                            </NavLink> <NavLink className="btn btn-dark me-2" to="/games-information" exact>
                                Resumes
                            </NavLink>
                            <NavLink className="btn btn-dark me-2" to="/new-game" exact>
                                Create Session
                            </NavLink> 
                            <NavLink className="btn btn-dark me-2" to="/profile" exact>
                               <Profile>
                               Profile
                                <div  className="img"  >
                                    {
                                        user.photoURL !== null && user.photoURL !== undefined ? (
                                            <img src={user.photoURL} alt=""/>
                                        ) : (
                                            <img src={emptyPhoto} alt=""/>
                                        )
                                    }
                                </div>
                               </Profile> 
                            </NavLink>
                             */}
                            
                            <NavLink className="btn btn-dark me-2" to="/" exact>
                                Dashboard
                            </NavLink>
                            <NavLink className="btn btn-dark me-2" to="/workshops" exact>
                                Workshops
                            </NavLink>
                            <NavLink className="btn btn-dark me-2" to="/instructions" exact>
                                Instructions
                            </NavLink>
                            <button className="btn btn-dark me-2"
                                    onClick={() => logout()}
                                    >
                                Logout
                            </button>   
                            <NavLink className="btn btn-light me-2 rounded-pill" style={{ width: '150px'}} to="/game" exact>
                                Play
                            </NavLink>
                            
                            
                        </>
                    ) : (
                       <>
                       <NavLink className="btn btn-dark me-2" to="/" exact>
                                Home
                       </NavLink>
                       <NavLink className="btn btn-dark me-2" to="/workshops" exact>
                           Workshops
                        </NavLink>
                        <NavLink className="btn btn-dark me-2" to="/instructions" exact>
                           Instructions
                        </NavLink>
                        <NavLink className="btn btn-dark me-2" to="/login" exact>
                            Login
                        </NavLink>
                        <NavLink className="btn btn-dark me-2" to="/singup" exact>
                           Singup
                        </NavLink>
                        <NavLink className="btn btn-light me-2 rounded-pill" style={{ width: '150px'}} to="/game" exact>
                           Play
                        </NavLink>
                       </>
                    )

                }
               
                
                
            </div>
        </div>
    )
}

export default withRouter(Navbar)
