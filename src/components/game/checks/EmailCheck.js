import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { emailCheckAction } from '../../../redux/gamesDukes'

const EmailCheck = () => {

    const dispatch = useDispatch()
    const errorDis = useSelector(store => store.games.error)

    const [ name, setName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ pass, setPass ] = useState('')
    const [ error, setError ] = useState(null)

    
    

    const processData = e => {
        e.preventDefault();

        
        
        if (!name.trim()) {
            setError('Please insert you name');
            return
        }

        if (name.length > 10) {
            setError('Please insert a shorter nickname');
            return
        }
        if (!email.trim()) {
            setError('Plase insert an email');
            return
        }

        const validation = !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)
        if (validation) {
            setError('Please inset a correct email address');
            return
        }

        if (!pass.trim()) {
            setError('Please inser the password');
            return
        }
        

        setError(null)

        dispatch(emailCheckAction(email, pass, name))
       
    }

    return (
        <div className="mt-5 text-center">
            <h3 className="center">
                 Start to play!
              </h3>
              
              <div className="row justify-content-center mt-5">
                
                  <div className="col-sm-12 col-md-5 ">
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
                        <div className="mb-4">
                            <label htmlFor="email" className="form-label">Your name/nickname (max. 10 letters) </label>
                            <input 
                            type="text"
                            className="form-control mt-2 rounded-pill"
                            placeholder="you name"
                            onChange={e => setName(e.target.value) } 
                            value={name} />
                        </div>
                        <div className="mb-4">
                        <label htmlFor="email" className="form-label">Your email</label>
                            <input 
                                type="email"
                                className="form-control mt-2 rounded-pill"
                                placeholder="example@example.com"
                                onChange={e => setEmail(e.target.value) } 
                                value={email} />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="email" className="form-label">Game password</label>
                            <input 
                                type="text"
                                className="form-control mt-2 rounded-pill"
                                placeholder="password" 
                                onChange={e => setPass(e.target.value) }
                                value={pass} />
                        </div>
                        <p className="text-danger text-uppercase" >All fields are mandatory</p>
                        <button className="btn btn-dark btn-lg btn-block mt-2 w-100 rounded-pill text-uppercase" type="submit" >
                            Start
                        </button>
                        
                        
                                
                      </form>
                  </div>
              </div>
            
        </div>
    )
}

export default EmailCheck
