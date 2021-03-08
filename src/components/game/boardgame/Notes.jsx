import React, { useState, useEffect } from 'react'
import { NoteContainer } from '../../ui/game/Boardgame'
import { useSelector } from 'react-redux';
import { db, database } from '../../../firebase';

import { FiSend } from "react-icons/fi";

const Notes = () => {

    const password = useSelector(store => store.games.password)

    const [ note, setNote ] = useState('')
    const [ noteData, setNoteData] = useState([]);
    
    const handleUserKeyPress = e => {
        if (e.key === "Enter" && !e.shiftKey) {
          
          handleSubmit(e)
          setNote('')
        }

    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        
        if (note.length > 0) {
            
            await database.ref(password+'/notes').push().set({
                "note" : note,
                "timestamp": Date.now()
            });

            
            await db.collection('new-games').doc(password).collection('notes').add({
                "note" : note,
                "timestamp": Date.now()
            })
        }

        setNote('')
        
    }
    
    
    const streamQuestionsListItems = (password, observer) => {
        return db.collection('new-games')
            .doc(password)
            .collection('notes')
            .orderBy('timestamp', 'asc')
            .onSnapshot(observer);
    };

    useEffect(() => {
        const unsubscribe = streamQuestionsListItems(password, {
            next: querySnapshot => {
                const updatedQuestionsItems = querySnapshot.docs.map(docSnapshot => docSnapshot.data());
                setNoteData(updatedQuestionsItems);
                    
            },
            // error: () => setError('grocery-list-item-get-fail')
        });
        return unsubscribe;
    }, [password, setNoteData]);
    

    return (
        <NoteContainer>
            <form onSubmit={handleSubmit} >
                <textarea placeholder="note" onChange={e => setNote(e.target.value)} onKeyPress={handleUserKeyPress} value={note} />
                    <button className="btn btn-dark rounded-circle d-flex justify-content-center align-items-center p-2" type="submit" ><FiSend /></button>
                </form>
            
            <div className="list" >
            {
                noteData.length > 0 &&
                noteData.map((item, i) => (
                    <p className="text-break" key={i} > &#x2022; {item.note} </p>
                    
                ))
            }
            </div>
        </NoteContainer>
    )
}

export default Notes
