import React from 'react'
import { ListContainer, Item, ListNotes } from '../../ui/Resume';
import { useSelector } from 'react-redux';

const List = () => {
    
    const questions = useSelector(store => store.resume.questions)
    const notes = useSelector(store => store.resume.notes)

    return (
        <ListContainer>
                            
                            <div className="row d-flex justify-content-between w-100" style={{ borderBottom: '0.5px solid #b7b6b6' }} id="title" >
                                <div className="col-md-8 col-sm-12" >
                                    <div className="title">
                                    Selected questions
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-12">
                                    <div className="title">
                                    Notes
                                    </div>
                                </div>
                                
                            </div>
                            <div className="row" >
                                <div className="col-md-8 col-sm-12 ps-5 " style={{ borderRight: '0.5px solid #b7b6b6'}} id="questions" >
                                <Item>
                                    { questions.length > 0 &&
                                        questions.map((item, i) =>(
                                            <div key={i}>
                                                <p className="card-number" > Card {i+1} - {item.title} </p>
                                               
                                                <p className="card-question">{item.question} </p>
                                            </div>
                                        ))
                                        }
                                </Item>
                                </div>
                                <div className="col-md-4 col-sm-12" id="notes" >
                                    
                                <ListNotes>
                                    {   notes.length > 0 &&
                                    notes.map((item, i) => (
                                        
                                        <li className="text-break" key={i}> {item.note} </li>
                                    )) 
                                    }
                                </ListNotes>
                                </div>
                                
                            </div>
                            
                        </ListContainer>
    )
}

export default List
