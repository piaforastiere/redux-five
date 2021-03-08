import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

import { ContainerBoard } from '../../ui/game/BoardTheme'
import PopUpTheme from './PopUpTheme'

import close from '../../../assets/img/cerrado.jpg'
import left from '../../../assets/img/open-left.jpg'
import right from '../../../assets/img/open-right.jpg'
const ThemeForm = () => {

    
    const playerType = useSelector(store => store.games.gameData.playerType)
    const theme = useSelector(store => store.games.theme)
    

    useEffect(() => {
        
        
        if (playerType.length > 0 && theme == null) {
           
            document.querySelector('.left').classList.add('open')

        }
        
    }, [playerType, theme])
    
    const styleClose = {
        backgroundImage: "url("+close+")"
    }
    const styleLeft = {
        backgroundImage: "url("+left+")"
    }
    const styleRight = {
        backgroundImage: "url("+right+")"
    }

    return (
        <div className="d-flex justify-content-center w-100 h-100">
            
            
            <ContainerBoard id={theme === null ? null : 'back'}>
                <div className="wrapper">
                    <div className="left" id="left" >
                        <div className="l-front" style={styleClose} ></div>
                        <div className="l-back" style={styleLeft} ></div>
                    </div>
                    <div className="right" style={styleRight} ></div>
                </div>
                
            </ContainerBoard>
            
            <PopUpTheme  />  

            
    
        </div>
    )
}

export default ThemeForm
