import React from 'react'

import Card from './Card'

import cardInfo from './cardInfo';
import { sorprises, decisions, actions, emotions, intuition, words, thoughts } from '../../questions/en'

import { CardsContainer } from '../../ui/game/Cards'



const Cards = ({setQuestions}) => {

    return (
        <CardsContainer>
            <Card  array={sorprises} card={cardInfo[0]} setQuestions={setQuestions} />
            <Card  array={decisions} card={cardInfo[1]} setQuestions={setQuestions} />
            <Card  array={actions} card={cardInfo[2]} setQuestions={setQuestions} />
            <Card  array={emotions} card={cardInfo[3]} setQuestions={setQuestions} />
            <Card  array={intuition} card={cardInfo[4]} setQuestions={setQuestions} />
            <Card  array={thoughts} card={cardInfo[5]} setQuestions={setQuestions} />
            <Card  array={words} card={cardInfo[6]} setQuestions={setQuestions} />
        </CardsContainer>
    )
}

export default Cards
