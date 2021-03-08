import React from 'react'
import { Question, ShowQuestionsContainer } from '../../ui/game/Boardgame'
import { useDispatch, useSelector } from 'react-redux'
import { changeProgressAction } from '../../../redux/gamesDukes'

const QuestionList = ({selectedQuestions, questionList, handleAdd, handleRemove}) => {

    const playerType = useSelector(store => store.games.gameData)

    const dispatch = useDispatch()
    const changeProgress = () => {

        dispatch(changeProgressAction('finished-plan'))
        
    }
    
    return (
        <div className="container" style={{ zIndex: 100}}>
                    <div className="row d-flex justify-content-center mb-5">
                    <div className="alert alert-secondary text-center " role="alert">
                        <h3>
                        Action plan <br/> 
                        </h3>
                        <h5>
                        Choose 7 cards. <br/> 5 for powers one decision and one surprise.
                        </h5>
                    </div>
                    </div>
                    <div className="row d-flex justify-content-between">
                    <div className="col-lg-5 col-sm-12 bg-light p-3 rounded ">
                        <h4>Select cards (max. 7)</h4>
                        
                        <ShowQuestionsContainer>
                            {
                                questionList.length > 0 &&
                                questionList.map((item, i) => {
                                    return <Question className="faq-list w-100 active" playerType={playerType.playerType} key={i} id={i} onClick={() => {playerType.playerType === 'master' && handleAdd(item)}}>
                                        <div className="header w-100">
                                            <div className={item.class + " color"}></div>
                                            <p> {item.title} </p>
                                        </div>
                                        <div className="question">
                                            {item.question}
                                        </div>
                                    </Question>
                                })
                            }
                        </ShowQuestionsContainer>
                    </div>
                    <div className="col-lg-5 col-sm-12 bg-light p-3 rounded ">
                        <h4>Selected cards {selectedQuestions.length} </h4>
                        <ShowQuestionsContainer>
                        {
                            selectedQuestions.length > 0 &&
                            selectedQuestions.map((item, i) => {
                                return <Question className="faq-list w-100 active" playerType={playerType.playerType}  key={i} id={i} onClick={() => {playerType.playerType === 'master' && handleRemove(item.id)}}>
                                    <div className="header w-100">
                                            <div className={item.class + " color"}></div>
                                            <p> {item.title} </p>
                                        </div>
                                        <div className="question">
                                            {item.question}
                                        </div>
                                </Question>
                            } )
                        }
                        </ShowQuestionsContainer>
                    </div>
                    </div>
                    <div className="row mt-5 d-flex justify-content-center">
                            { playerType.playerType !== null && playerType.playerType === 'master' && 
                            <button className={selectedQuestions.length === 7 ? "btn btn-dark btn-lg btn-block mt-2 rounded-pill w-50 text-uppercase" : "btn btn-light btn-lg btn-block mt-2 rounded-pill w-50 text-uppercase"} 
                                    onClick={() => changeProgress()} 
                                    disabled={selectedQuestions.length === 7 ? false : true}>
                                place your cards to build your action plan
                            </button>
                            }
                        
                    </div>
                </div>
    )
}

export default QuestionList
