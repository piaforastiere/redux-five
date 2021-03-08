import React from 'react'
import { Link } from 'react-router-dom';

import { BiRightArrow} from "react-icons/bi";
import { VscOpenPreview } from "react-icons/vsc";

import { Module, LatestGames } from '../ui/Dashboard'
import { useSelector } from 'react-redux';

const Sessionslist = () => {
    const games = useSelector(store => store.games.games)
    
    const error = useSelector(store => store.games.error)

    return (
        <div className="col-xl-5 col-sm-12 last-games">
                <Module>
                    <h2 className="text-left">
                        Check your latest sessions
                    </h2>
                    <LatestGames>
                        {
                            games !== undefined && error === null  ? (
                                <table className="tg">
                                    <thead>
                                    <tr className="head" >
                                        <th className="name text-uppercase">
                                            game id
                                        </th>
                                        <th className="master text-uppercase">
                                            master
                                        </th>
                                        <th className="progress text-uppercase">
                                            progress
                                        </th>
                                        <th className="icon"></th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        games.map((game, i) => {
                                           return <tr key={i}>
                                                <td className="name">
                                                { game.password } 
                                                </td>
                                                <td className="master">
                                                { game.masterName }
                                                </td>
                                                <td className="progress">{ game.progress } { game.playedDate && (" - "+ game.playedDate )}</td>
                                                <td className="icon">
                                                    {
                                                        game.progress === 'finished' ? ( 
                                                        <Link to={`/games-information/${game.password}`}><VscOpenPreview /></Link>
                                                        ) : (
                                                            <Link to="/game" ><BiRightArrow /></Link>
                                                        )
                                                    }
                                                </td>
                                            </tr>
                                        })
                                    }
                                    </tbody>
                                </table>
                                
                            ) : (
                                <div className="no-sessions" >Seems like you haven't create any session!</div>
                            )
                        }
                    </LatestGames>
                </Module>
            </div>
    )
}

export default Sessionslist
