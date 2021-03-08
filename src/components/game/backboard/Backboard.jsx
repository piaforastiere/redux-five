import React, { useState, useEffect } from 'react'

import Spinner from '../../Spinner'
import { BoardContainer, Board } from '../../ui/game/Boardgame'


import { db } from '../../../firebase'
import { useSelector, useDispatch } from 'react-redux'
import QuestionList from './QuestionList'
import Resume from './Resume'
import { withRouter } from 'react-router-dom'

import backboard from '../../../assets/img/backboard.jpg'
import { changeProgressAction } from '../../../redux/gamesDukes'
import ResumeMaster from './ResumeMaster'

const Backboard = (props) => {

    const distpatch = useDispatch()

    const password = useSelector(store => store.games.password)
    
    const playerType = useSelector(store => store.games.gameData)

    const [ questionList, setQuestionList ] = useState([])
    const [ selectedQuestions, setSelectedQuestions ] = useState([])
    const [ loading, setLoading ] = useState(true)
    const [ progressDB, setProgressDB ] = useState(null)
    const [ positions, setPositions] = useState([]);

    
    

    useEffect(() => {
        if (password !== null) {
            
            const getQuestions = async() => {
                await db.collection('new-games').doc(password)
                .onSnapshot(function(doc) {
                    setProgressDB(doc.data().progress)
                    
                });
            
                
                const data = await db.collection('new-games').doc(password).collection('questions').orderBy('timestamp', 'desc').get()
    
                const updatedQuestionsItems = data.docs.map(docSnapshot => docSnapshot.data());
                setQuestionList(updatedQuestionsItems);
    
                const dataChech = await db.collection('new-games').doc(password).collection('selected-questions').orderBy('timestamp', 'desc').get()
                const updatedSelectedItems = dataChech.docs.map(docSnapshot => docSnapshot.data());
                setSelectedQuestions(updatedSelectedItems);
                
                setLoading(false)
            }
            getQuestions()

        }

        
    }, [password, playerType])

    
    
    const handleAdd = async(_item) => {
       
        const item = {
            "question" : _item.question,
            "class" : _item.class,
            "title" : _item.title,
            "name" : _item.name,
            "id" : _item.id,
            "timestamp": Date.now()
        }
        
        if (selectedQuestions.length < 7) {
            setSelectedQuestions([...selectedQuestions, _item])
            console.log(selectedQuestions.length);
            
            await db.collection('new-games').doc(password).collection('selected-questions').doc(_item.id).set(item)
            
            const data = await db.collection('new-games').doc(password).collection('selected-questions').orderBy('timestamp', 'desc').get()
            const updatedSelectedItems = data.docs.map(docSnapshot => docSnapshot.data());
            setSelectedQuestions(updatedSelectedItems.reverse());
       
        } 
        
    }

    const handleRemove = async(_id) => {
        await db.collection('new-games').doc(password).collection('selected-questions').doc(_id).delete()
            
        const data = await db.collection('new-games').doc(password).collection('selected-questions').orderBy('timestamp', 'desc').get()
        const updatedSelectedItems = data.docs.map(docSnapshot => docSnapshot.data());
        setSelectedQuestions(updatedSelectedItems);
    }
    
    
    const endSession = async() => {
        await db.collection('new-games').doc(password).collection('positions').set({positions})
        distpatch(changeProgressAction('finished'))
        
        props.history.push('/')
        
    }

    const bgBoard = {
        backgroundImage: "url("+backboard+")"
    }
    
    return !loading ? (
        <div className="d-flex justify-content-center w-100 h-100" >
            <BoardContainer>
                <Board style={bgBoard}>
                    {   
                        progressDB === 'finished-plan' && (
                            playerType.playerType !== null && playerType.playerType === 'master' && (
                                    <div className="d-flex justify-content-around position-absolute" style={{ top: '20px', right: '20px',  width: '400px'}}>
                                        <button className="btn btn-outline-light rounded-pill btn-outline-light" style={{zIndex: '1000'}} onClick={() => distpatch(changeProgressAction('action-plan'))} >
                                            BACK TO SELECTION
                                        </button>
                                
                                        <button className="btn btn-outline-light rounded-pill btn-outline-light" style={{zIndex: '1000'}} onClick={() => endSession()} >
                                            FINISH SESSION
                                        </button>
                                    </div>
                                )
                              
                        ) 
                        
                    }
                    {
                        progressDB === 'action-plan' &&  (
                            playerType.playerType !== null && playerType.playerType === 'master' && (
                                <button className="btn btn-outline-light rounded-pill btn-outline-light position-absolute " style={{zIndex: '1000'}} onClick={() => distpatch(changeProgressAction('active'))} >
                                    BACK TO PLAY BOARD
                                </button>
                            )
                        )
                    }
                
                

                </Board>
                {
                    progressDB === 'action-plan' && (
                        <QuestionList     questionList={questionList} 
                                          selectedQuestions={selectedQuestions} 
                                          handleRemove={handleRemove} 
                                          handleAdd={handleAdd} 
                                           />
                    )
                }
                
                {
                    progressDB === 'finished-plan' && playerType.playerType !== null && (
                            
                            playerType.playerType === 'master' ? (
                            <ResumeMaster selectedQuestions={selectedQuestions} positions={positions} setPositions={setPositions} />
                             ):(
                             <Resume selectedQuestions={selectedQuestions} />
                            )
                        
                        ) 
                }
                
                
            </BoardContainer>
        </div>
    ) : (
        <div className="d-flex justify-content-center mt-5">
            <Spinner />
        </div>
    )
}

export default withRouter(Backboard)
