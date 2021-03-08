import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getGameResume } from '../../redux/resumeDukes';
import Spinner from '../Spinner';
import { Background } from '../ui/Resume';


import Header from './Resume/Header';
import List from './Resume/List';
import Share from './Resume/Share';
import PopUp from './Resume/PopUp';
import Statistics from './Resume/Statistics';
import Players from './Resume/Players';

export const Resume = () => {

    let { id } = useParams();
    const dispatch = useDispatch()

    const { loading } = useSelector(store => store.resume)
    const gameInfo  = useSelector(store => store.resume.gameInfo)
    const errorDB = useSelector(store => store.resume.error)
    

    useEffect(() => {

        dispatch(getGameResume(id))
        
    }, [dispatch, id])

    
    
    const [ popUp, setPopUp ] = useState(false)

    
    
    return !loading && gameInfo !== null ?  (
        <>
            {
            errorDB === null ? (
                <Background id="toPrint">
                <div className="background" ></div>
                
                    <div className="content">
                    
                        
                       
                        <Header />
                        
                        <Players />
                        <Statistics />
                        
                        <List />
                        
                        <Share popUp={popUp} setPopUp={setPopUp} />
                
                    </div>
                    { popUp && 

                        <PopUp popUp={popUp} setPopUp={setPopUp} />

                        }                    

        
        </Background>
            ) : (
                <div className="contain">
                    <div className="text-center mt-5">
                        {errorDB}
                    </div>
                </div>
            )
        }
        </>
       
    ) : (
        <div className="d-flex justify-content-center mt-5">
            <Spinner />
        </div>
    )
}
