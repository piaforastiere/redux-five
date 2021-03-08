import React, { useEffect } from 'react'
import { withRouter, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getAllGamesAction } from '../../redux/gamesDukes'
import Spinner from '../Spinner'

import { BsBoxArrowInRight } from 'react-icons/bs'
import { CardsResume, ContainerResume } from '../ui/Dashboard'
const GetGamesInfo = () => {



    const dispatch = useDispatch()

    const loading = useSelector(store => store.games.loading)
    const games = useSelector(store => store.games.games)
    
    const error = useSelector(store => store.games.error)

    useEffect(() => {
        
        dispatch(getAllGamesAction())

    },[dispatch])
    
    return !loading ? (
        <ContainerResume>
            { games !== undefined && error === null ? (
                <div className="mt-5">
                <h3 className="text-center border-bottom pb-3">
                        Here is the information of all your sessions
                    </h3>
                <CardsResume className="d-flex mt-5" >
                {
                    games.map(item => (
                        
                        <div className="card"  key={item.password}>
                            <h5 className="card-header pt-3 pb-3"><span className="fw-bolder">Sessions {item.password}</span></h5>
                        <div className="card-body">
                        {
                            item.progress === 'finished' ? (
                                <p className="card-text"> <span className="fw-bolder text-uppercase"> Progress : <span className="text-uppercase" style={{ color: '#B02A37'}} >{item.progress}</span></span> </p>
                            ) : item.progress === 'active' ? (
                                <p className="card-text"> <span className="fw-bolder text-uppercase"> Progress : <span className="text-uppercase" style={{ color: '#0E5132'}} >{item.progress}</span></span> </p>
                            ) : (
                                <p className="card-text"> <span className="fw-bolder text-uppercase"> Progress : <span className="text-uppercase" style={{ color: '#FD7F13'}} >{item.progress}</span></span> </p>
                            )
                        }
                        {
                             item.playedDate && (
                                <p className="card-text"><span className="fw-bolder text-uppercase">Played on : </span>{item.playedDate}</p>
                             )
                         }
                          
                          <p className="card-text"><span className="fw-bolder text-uppercase">Master : </span>{item.masterName} - </p>
                          <p className="card-text">{item.masterEmail}</p>
                          
                          <p className="card-text"><span className="fw-bolder text-uppercase">Password : </span>{item.password}</p>
                          <p className="card-text "><span className="fw-bolder text-uppercase">Created on :</span> {item.creationDate}</p>
                          
                          { 
                             item.progress === 'finished' &&
                             <>
                                <div style={{height: '20px', width: '100%'}} ></div>
                                <Link className="mt-4 fs-6 text-decoration-none fw-bolder text-uppercase" style={{paddingTop: '10px',  color: '#06798F', paddingBottom: '5px', borderBottom: '1px solid #06798F'}} to={`/games-information/${item.password}`} >
                                    See full resume <BsBoxArrowInRight />
                                </Link>
                             </>
                          }
                          
                          
                        </div>
                      </div>
                    ))
                }
                
                </CardsResume>
                
            </div>
            ) : (
                <div className="mt-5">
                    <h3>{ error }</h3>
                </div>
            )
            }
        </ContainerResume>
    ) : (
        <div className="d-flex justify-content-center mt-5">
            <Spinner />
        </div>
    )
}

export default withRouter(GetGamesInfo)
