import React from 'react'
import { Link } from 'react-router-dom';

import { GamesPlayed, Module, NewButton } from '../ui/Dashboard'
import { useDispatch, useSelector } from 'react-redux';

const GamesInformation = () => {

    const dispatch = useDispatch()

    const loading = useSelector(store => store.games.loading)
    const games = useSelector(store => store.games.games)

   console.log(games);
   
    
    return !loading && (
        <div className="col-xl-5 col-xxl-4 col-sm-12 multiple">
                <GamesPlayed>
                    <div>
                    <h2>{games === undefined ? '0' : games.filter(game => game.progress !== 'unactive' ).length}</h2>
                    <p>Games played</p>
                    </div>
                    <div className="line"></div>
                    <div>
                    <h2>{games === undefined ? '0' : games.length}</h2>
                    <p>Games created</p>
                    </div>
                </GamesPlayed>
                
                <Module >
                    <div className="row">
                    <h3>Sessions</h3>
                    <p>Play with your team</p>
                    </div>
                    <div className="d-flex justify-content-between w-100 mt-4 buttons-container" >
                        <NewButton bg={'#58aab8'} bgshadow={'#67cbdb'} shadow={'#3d7781'} >
                            <Link to="/new-game">Create session</Link>
                        </NewButton>
                        <NewButton bg={'#ca4b44'} bgshadow={'#f25951'} shadow={'#9b3832'}  >
                           <Link to="/game">Play</Link>
                        </NewButton>
                    </div>
                </Module>
                <Module>
                    <div className="row">
                        <h3 className="mb-4" >How to play</h3>
                        <p className="text-start" >
                            Each player must answer the question that shows up in his/her turn. 
                        </p>
                        <p className="text-start" >
                            Questions cannot be changed.
                        </p>
                        <p className="text-start" >
                            Once the player in turn answers the question, the other can present their points of view by adding value (not invalidating) to the player turn.
                        </p>
                        <p className="text-start" >
                            Raise your hand if you want to give an opinion and wait for the players in turn permission to do so.
                        </p>
                        <p className="text-start" >
                            If you are not given permission to share, you must not do so, respect the players decision and move forward to the next player.
                        </p>
                    </div>
                </Module>
            </div>
    )
}

export default GamesInformation
