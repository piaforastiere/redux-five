import React from 'react'
import { ResumeMasterContainer, CardContainer } from '../../ui/game/Boardgame';

import Draggable from 'react-draggable';

const ResumeMaster = ({ selectedQuestions, positions, setPositions}) => {

    
    const trackPos = (data, card) => {
        const objIndex = positions.findIndex((obj => obj.id === card.id));
        
        if (objIndex !== -1) {
            positions[objIndex].x = data.x
            positions[objIndex].y = data.y
            positions[objIndex].card = card
        } else {
            setPositions([...positions, { x: data.x, y: data.y, id: card.id, card }]);
        }
        
     };

    return (
        <ResumeMasterContainer>

            {
                selectedQuestions.map((card, i) => (
                    <Draggable onDrag={(e, data) => trackPos(data, card)}>
                        <CardContainer className="cards open"  id={card.class} key={i} >
                            {card.question}
                        </CardContainer>
                    </Draggable>
                ))
            }
            
        </ResumeMasterContainer>
    )
}

export default ResumeMaster
