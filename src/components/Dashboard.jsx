import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'

import Spinner from './Spinner'
import { getAllGamesAction } from '../redux/gamesDukes'



import { ContainerDash, Profile } from './ui/Dashboard'
import emptyPhoto from '../assets/img/empty-photo.png'
import { logOutAction } from '../redux/UserDucks';
import Menu from './dashboard/Menu';
import Sessionslist from './dashboard/Sessionslist';
import GamesInformation from './dashboard/GamesInformation';


const Dashboard = (props) => {

    const user = useSelector(store => store.user.user)

    const dispatch = useDispatch()

    const loading = useSelector(store => store.games.loading)
    

    useEffect(() => {
        
        dispatch(getAllGamesAction())


    },[dispatch])

    const logout = () => {
        dispatch(logOutAction())

        props.history.push('/login')
    }
    
    return !loading ? (
        <ContainerDash >
            <div className="row">
            <div className="col-12 mb-5 profile">
                <Profile>
                <div  className="img"  >
                                    {
                                        user.photoURL !== null && user.photoURL !== undefined ? (
                                            <img src={user.photoURL} alt=""/>
                                        ) : (
                                            <img src={emptyPhoto} alt=""/>
                                        )
                                    }
                </div>
                <div>
                    <div className="user-name">
                       Welcome, { user.displayName }!
                    </div>
                    <div className="user-subscription">
                        { user.email}
                    </div>
                </div>
                </Profile>
            </div>
            </div>
            <div className="row">
            <Menu logout={logout} />
            <div className="col-lg-1 spacer"></div>
            <GamesInformation />
            <Sessionslist />
            
            
            </div>
        </ContainerDash>
    ) : (
        <div className="d-flex justify-content-center mt-5">
            <Spinner />
        </div>
    )
}

export default withRouter(Dashboard)
