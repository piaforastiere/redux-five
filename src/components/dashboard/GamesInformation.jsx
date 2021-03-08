import React from 'react'
import { Link } from 'react-router-dom';

import { GamesPlayed, Module, NewButton } from '../ui/Dashboard'

const GamesInformation = () => {
    return (
        <div className="col-xl-4 col-sm-12 multiple">
                <GamesPlayed>
                    <h2>200</h2>
                    <p>Total games played</p>
                </GamesPlayed>
                <Module >
                    <div className="row">
                    <h3>Sessions</h3>
                    <p>Play with your team</p>
                    </div>
                    <div className="d-flex justify-content-around w-100 mt-4 buttons-container" >
                        <NewButton bg={'#58aab8'} bgshadow={'#67cbdb'} shadow={'#3d7781'} >
                            <Link to="/new-game">Create session</Link>
                        </NewButton>
                        <NewButton bg={'#ca4b44'} bgshadow={'#f25951'} shadow={'#9b3832'}  >
                           <Link to="/game">Play</Link>
                        </NewButton>
                    </div>
                </Module>
                <Module>
                    how to play
                </Module>
            </div>
    )
}

export default GamesInformation
