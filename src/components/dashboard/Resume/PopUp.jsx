import React, { useState } from 'react'

import { Card, Footer, ContainerCard, CloseButton, Button, Trophy } from '../../ui/EmailForm'

import image from '../../../assets/img/mail.png'
import { useSelector } from 'react-redux'

const PopUp = ({ popUp, setPopUp}) => {

    const gameInfo  = useSelector(store => store.resume.gameInfo)
    const questions = useSelector(store => store.resume.questions)
    const notes = useSelector(store => store.resume.notes)

    const [ email, setEmail ] = useState('')
    const [ subject, setSubject ] = useState('')
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

        setError(null)

        const quesSend = questions.map((element) => {
            return "- " +  element.question 
        }).join('\n')

        const notesSend = notes.map((element) => {
            return "- " +  element.note 
        }).join('\n')

        window.open("mailto:" + email + "?subject=Game Resume - " + gameInfo.playedDate + "&body=Master: " + gameInfo.masterName +"%0DTheme: " + gameInfo.theme+ "%0DPlayed on: " + gameInfo.playedDate + "%0D%0DQuestions:%0D " +  encodeURIComponent(quesSend) + "%0D%0DNotes:%0D " +  encodeURIComponent(notesSend));
        
    }

    return (
        <ContainerCard>
                            
                            <Card>
                                <CloseButton onClick={() => setPopUp(!popUp)} >X</CloseButton>
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
    )
}

export default PopUp
