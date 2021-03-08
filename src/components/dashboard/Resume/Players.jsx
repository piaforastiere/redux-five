import React, { useState, useEffect } from 'react'
import { db } from '../../../firebase';
import { useParams } from 'react-router-dom';
import { StatisticsContainer } from '../../ui/Statistics';
import { useSelector } from 'react-redux';

const Players = () => {

    let { id } = useParams();

    const gameInfo  = useSelector(store => store.resume.gameInfo)

    const [ players, setPlayers ] = useState([])

    

    const streamQuestionsListItems = (password, observer) => {
        return db.collection('new-games')
            .doc(password)
            .collection('players')
            .onSnapshot(observer);
    };

    useEffect(() => {
        const unsubscribe = streamQuestionsListItems(id, {
            next: querySnapshot => {
                const updatedPlayersItems = querySnapshot.docs.map(docSnapshot => docSnapshot.data());
                setPlayers(updatedPlayersItems);
                    
            },
            // error: () => setError('grocery-list-item-get-fail')
        });
        return unsubscribe;
    }, [id ]);

    return players !== null &&(
        <StatisticsContainer className="row">
            <div className="title" style={{paddingBottom: 0}} >Master: <span style={{paddingLeft: 0, fontSize: '18px', fontWeight: '500'}} >{gameInfo.masterName} </span></div>
            
            <div className="title">
                Participants: 
            </div>
            <ul className="list-group list-group-horizontal" >
            {
                players.map((item, i ) => {
                    return <li key={i} className="list-group-item border-0 " style={{ background: 'transparent'}}> {item.name} <span>-</span> </li>
                    
                }) 
            }
            </ul>
        </StatisticsContainer>
    )
}

export default Players
