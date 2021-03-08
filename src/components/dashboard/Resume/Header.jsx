import React from 'react'

import { HeaderContainer } from '../../ui/Resume';
import { useSelector } from 'react-redux';

const Header = () => {

    const gameInfo  = useSelector(store => store.resume.gameInfo)

    return (
        <HeaderContainer id="information">
                           <div>
                                    <h2 > Subject:  </h2>
                                    <p> { gameInfo.theme } </p>
                            </div>
                        <div>
                                    <h2> Date:  </h2>
                        <p> { gameInfo.playedDate } </p>
                        </div>
                        
        </HeaderContainer>
    )
}

export default Header
