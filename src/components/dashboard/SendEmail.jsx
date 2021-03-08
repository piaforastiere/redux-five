import React, { useState } from 'react'

import image from '../../assets/img/mail.png'

import { Card, Footer, ContainerCard, CloseButton, Button, Trophy } from '../ui/EmailForm'


const SendEmail = ({dataDB, setShow}) => {

    const [ email, setEmail ] = useState('')
    const [ subject, setSubject ] = useState('')
    const [ porpUp, setPorpUp ] = useState(false)

    const [ error, setError ] = useState(null)


    const handleSubmit = () => {
        
        if (!email.trim()) {
            setError('Please inset an email');
            return
        }

        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
            setError('Please inset a correct email address');
            return
        }

        if (!subject.trim()) {
            setError('Please inset an email');
            return
        }

        window.open("mailto:" + email + "?subject=" + subject+ "&body=Master Email: " + dataDB.masterEmail+ "%0DMaster's Name: " + dataDB.masterName + "%0Dpassword: " +dataDB.password);
        
    }

    
    
    
    return (
        <div className="ps-4 text-center" >
            
            <p className="fs-5" >You successfully created a new session <br/> and here is all the information</p>
            <form className="mt-4 border-top pt-3" >
                         
                        <div className="mb-3">
                            <p className="mb-2 text-uppercase fs-5" >Master's Name</p>
                            <p className="mt-3  ">
                                {dataDB.masterName}
                            </p>
                            
                        </div>
                          
                        <div className="mb-3  pt-3">
                        <p className="mb-2 text-uppercase fs-5" >Master's Email</p>
                            <p className="mt-3  ">
                                {dataDB.masterEmail}
                            </p>
                        </div>
                          
                        
                        
                           
                        
                        <div className="mb-3 pt-3">
                        <p className="mb-2 text-uppercase fs-5" >Password</p>
                            <p className="mt-3  ">
                                {dataDB.password}
                            </p>
                        </div>
                        
                       <h4 className="mt-5 text-uppercase" >
                           Share this with others
                       </h4>
                        <div className="row d-flex justify-content-between mt-5">
                        <div className="btn btn-lg btn-success rounded-pill"
                            style={{width: '48%'}}
                            onClick={() => setPorpUp(!porpUp)} >
                            Share
                        </div>
                        <div className="btn btn-lg btn-dark rounded-pill"
                            style={{width: '48%'}}
                            onClick={() => setShow(false)} >
                            Create another game
                        </div>
                        </div>
                        
                        
                      </form>
            
        { porpUp && 

            <ContainerCard>
                
                 <Card>
                    <CloseButton onClick={() => setPorpUp(!porpUp)} >X</CloseButton>
                        <Trophy src={image} alt=""/>
                        <p className="text-center w-100 mb-4">Please complete all the information below</p>
                        { error && (
                                  <div className="alert alert-danger">
                                      {error}
                                  </div>
                              )}
                        <form onSubmit={handleSubmit} className="w-100" >
                            <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input 
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    onChange={e => setEmail(e.target.value)}
                                    value={email} /> 
                                    
                            </div>
                            <div className="mb-3">
                                    <label htmlFor="subject" className="form-label">Subject</label>
                                    <input 
                                    type="text"
                                    className="form-control"
                                    name="subject"
                                    onChange={e => setSubject(e.target.value)}
                                    value={subject} /> 
                                    
                            </div>
                            
                        </form>
                        
                        <Footer>
                            <Button  id="send" onClick={() => handleSubmit()}>
                                Send 
                            </Button>
                        </Footer>
               

            </Card>
            </ContainerCard>
        
        }
       
        </div>
    )
}

export default SendEmail
