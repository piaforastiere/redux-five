import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Theme from './Theme'
import Cards from './Cards'

import { BoardContainer, Board, RightBar, MenuButton, Gradient } from '../../ui/game/Boardgame'

import board from '../../../assets/img/tableroout.jpg'
import { getInitialCardsAction } from '../../../redux/gamesDukes'
import ShowQuestions from './ShowQuestions'
import EndGame from './EndGame'
import Notes from './Notes'
import Players from './Players'
import Instructions from './Instructions'



const Boardgame = ({themeDB}) => {

    const dispatch = useDispatch()
    
    
    const password = useSelector(store => store.games.password)
    const playerType = useSelector(store => store.games.gameData.playerType)
    
    
    const [ openMenu, setOpenMenu ] = useState(false)

    const [ questions, setQuestions ] = useState(null)
    
    const styleBoard = {
        backgroundImage: "url("+board+")"
    }
    useEffect(() => {

        dispatch(getInitialCardsAction())
        
    }, [password, dispatch])

    const handleMenu = () => {
        setOpenMenu(!openMenu)
        document.querySelector('.inst-menu').style.display = "none"
    }
    
    
    return (
        <div className="d-flex justify-content-center w-100 h-100" >
            
                    <BoardContainer>
                            <Board id={openMenu === true ? 'close' : undefined} style={styleBoard} />
                            
                            <Cards  />
                            <Theme theme={themeDB} />

                            {/* {
                                questions !== null && questions.length === 7 &&(
                                    <div className="alert alert-warning alert-dismissible fade show" role="alert" style={{top: '20px'}}>
                                        <strong>Congratulations!</strong>  Now click here to build your Action Plan!
                                        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                    </div>
                                )
                            } */}
                            {
                                playerType === 'master' && <Players />
                            }
                            {
                                <Instructions />
                            }
                            <div className="inst-menu" >Click to see the selected cards and chat</div>
                    </BoardContainer>
                    
                    <RightBar className={openMenu === true ? 'open' : undefined} id="right-menu" >
                        
                        { !openMenu ?
                            <>
                            <MenuButton onClick={() => handleMenu()}>&#x21e4;</MenuButton>
                            
                            </>
                            :
                            <div className="d-flex flex-column">
                                <div className="col-sm-12">
                                <MenuButton onClick={() => handleMenu()}>&#x21e5;</MenuButton>
                                {
                                   playerType === 'master' && <EndGame questions={questions} />
                                   
                                }
                                </div>
                                <div className="col-sm-12">
                                <ShowQuestions setQuestions={setQuestions} questions={questions} />
                                
                                <Notes />
                                <Gradient />
                                </div>
                                
                            </div>
                            
                        }
                    </RightBar>


                    </div>
    )
}

export default Boardgame
