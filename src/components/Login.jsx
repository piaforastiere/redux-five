import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginWithEmailAndPassAction, googleLoginAction } from '../redux/UserDucks'
import { withRouter } from 'react-router-dom'

import { FcGoogle } from "react-icons/fc";

const Login = (props) => {

    const dispatch = useDispatch()

    const loading = useSelector(store => store.user.loading)
    const active = useSelector(store => store.user.active)
    const errorDis = useSelector(store => store.user.error)

    
    const [ email, setEmail ] = useState('')
    const [ pass, setPass ] = useState('')
    const [ error, setError ] = useState(null)
    

    useEffect(() => {
        
        if (active) {
            props.history.push('/')
        }
        
    }, [active, props.history])


    const processData = e => {
        e.preventDefault();

        

        if (!email.trim()) {
            setError('email empty');
            return
        }
        const validation = !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)
        if (validation) {
            setError('Please inset a correct email address');
            return
        }

        if (!pass.trim()) {
            setError('pass empty');
            return
        }
        if (pass.length < 6) {
            setError('pass longer than 6 characters');
            return
        }

        setError(null)

        
        dispatch(loginWithEmailAndPassAction(email, pass))
            
       
    }

    return (
        <div className="mt-5 text-center">
            <h3 className="center">
                Login
              </h3>
              <p>
                  Welcome back to our community!. 
              </p>
              <button className="btn"
                                onClick={() => props.history.push('/singup')}
                                type="button" >
                            You don't have an account?
                            <span style={{color: 'blue'}} > Sing up here</span>
                </button>
              
              <div className="row justify-content-center mt-5">
                <div className="col-sm-12 col-md-5 justify-content-center">
                        <p>You can also use</p>
                        <div className="row d-flex justify-content-center">
                        <button className="d-flex btn btn-outline-danger btn-lg w-75 justify-content-center"
                            style={{borderColor: '#FF6665'}}
                            onClick={() => dispatch(googleLoginAction())} 
                            disabled={loading}
                            > <div className="me-2" style={{marginTop: '-2px', width: '30px'}} ><FcGoogle /></div> 
                           Google
                        </button>
                        {/* <button className="btn btn-danger btn-lg w-75 mt-3"
                                style={{background: '#058CFF', borderColor: '#058CFF'}}
                                onClick={() => dispatch(facebookLoginAction())} 
                                disabled={loading}
                                > Facebook
                        </button> */}
                        </div>
                  </div>
                  <div className="col-sm-12 col-md-5 border-start">
                      <form onSubmit={processData}>
                          {
                              errorDis !== null ? (
                                <div className="alert alert-danger">
                                    {errorDis}
                                </div>
                              ) : null
                          }
                          { error && (
                              <div className="alert alert-danger">
                                  {error}
                              </div>
                          )}

                          <input 
                            type="email"
                            className="form-control mt-2 rounded-pill"
                            placeholder="example@example.com"
                            onChange={e => setEmail(e.target.value) } 
                            value={email} />
                        <input 
                            type="password"
                            className="form-control mt-2 rounded-pill"
                            placeholder="password" 
                            onChange={e => setPass(e.target.value) }
                            value={pass} />
                        <button className="btn btn-dark btn-lg btn-block mt-2 w-100 rounded-pill" type="submit" >
                            Login
                        </button>
                        
                        <button className="btn mt-3"
                                onClick={() => props.history.push('/reset')}
                                type="button" 
                                style={{color: 'blue'}}>
                                Forget your password?
                        </button>
                                
                      </form>
                  </div>
              </div>
            
        </div>
    )
}

export default withRouter(Login)
