import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import EmailCheck from './game/checks/EmailCheck'
import ThemeForm from './game/checks/ThemeForm'
import Boardgame from './game/boardgame/Boardgame'
import Backboard from './game/backboard/Backboard'
import { db } from '../firebase'


const Game = () => {

    

    const active = useSelector(store => store.games.active)
    const gameData = useSelector(store => store.games.gameData)
    // const theme = useSelector(store => store.games.theme)
    const password = useSelector(store => store.games.password)

    const [ progressDB, setProgressDB ] = useState(null)
    const [ themeDB, setThemeDB ] = useState(null)
    const sessionOver = useSelector(store => store.games.sessionOver)

    console.log('active', progressDB);
    
    
    const getProgress = async() => {
        await db.collection('new-games').doc(password)
            .onSnapshot(function(doc) {
                setProgressDB(doc.data().progress)
                
            });
        }
        
    useEffect(() => {
        if (password !== null) {
            
            getProgress()
        }
        
    }, [password])

    const streamTheme = (password, observer) => {
        return db.collection('new-games')
            .doc(password)
            .onSnapshot(observer);
    };

    useEffect(() => {
        if (password !== null) {
            const unsubscribe = streamTheme(password, {
                next: querySnapshot => {
                    const updatedTheme = querySnapshot.data().theme;
                        setThemeDB(updatedTheme)
                        console.log('theme', updatedTheme);
                        
                        
                },
                // error: () => setError('grocery-list-item-get-fail')
            });
            return unsubscribe;
        }
    }, [password, setThemeDB]);

    return !sessionOver ? (
        <div>
            {
                !active && gameData === null && <EmailCheck />
            }
            {
                
                gameData !== null && themeDB === undefined && <ThemeForm />
               
            }
            { themeDB !== undefined && progressDB !== null && (
                
                    progressDB === 'active' ? <Boardgame themeDB={themeDB} /> : <Backboard themeDB={themeDB} />
            )}
            
        </div>
    ) : (
        <div className="container justify-content-center d-flex align-items-center pt-5">
            <h3>Seems like this game is already over!</h3>
        </div>
    )
}

export default Game
