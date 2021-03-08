import styled from '@emotion/styled';
import { device } from '../breakpoints';

import sorpriseBack from '../../../assets/img/sorp-back.jpg'
import decitionBack from '../../../assets/img/dec-back.jpg'
import emotionBack from '../../../assets/img/emo-back.jpg'
import actionBack from '../../../assets/img/acc-back.jpg'
import intuitionBack from '../../../assets/img/intu-back.jpg'
import thoughtsBack from '../../../assets/img/pensa-back.jpg'
import wordsBack from '../../../assets/img/pal-back.jpg'

import sorprise from '../../../assets/img/sorp.jpg'
import decition from '../../../assets/img/dec.jpg'
import emotion from '../../../assets/img/emo.jpg'
import action from '../../../assets/img/acc.jpg'
import intuition from '../../../assets/img/intu.jpg'
import thoughts from '../../../assets/img/pensa.jpg'
import words from '../../../assets/img/pal.jpg'

export const CardsContainer = styled.div`
    position: absolute;
    top:0;
    width: 100%;
    height: 100%;
    animation-name: show;
    animation-duration: 3s;
    
    &.close{
        width: 80%;

    }
    @keyframes show {
        0%{ 
            opacity: 0;
        }
        100%{
            opacity: 1;
        }
    }
`

export const CardContainer = styled.div`
    position: absolute;
    background-size: cover;

    @media ${device.tablet}{
        &#sorprise, {
            bottom: 5%!important;
        }
        &decision{
            bottom: 5%!important;
        }
        #pal div{
            bottom: 35%!important;
        }
    }

    &#sorprise{
        top: auto; 
        bottom: 15%; 
        left: 2%; 
        background-image: url(${sorpriseBack});
        
        @media screen and (max-width: 1280px) {
            bottom: 5%;
        }
    }

    &#decision{
        top:auto; 
        bottom: 10%; 
        right: 2%; 
        background-image: url(${decitionBack});

        @media screen and (max-width: 1280px) {
            bottom: 5%;
        }
    }

    &#acc{
        top: auto; 
        right: 40%; 
        bottom: 10%; 
        background-image: url(${actionBack});

        @media screen and (max-width: 1280px) {
            bottom: 2%;
        }
    }

    &#emo{
        top: 5%; right: 5%;  
        background-image: url(${emotionBack});
    }

    &#intu{
        top: auto; 
        left: 5%; 
        bottom: 42%; 
        background-image: url(${intuitionBack});
    }

    &#pensa{
        top: 5%;
        left: 22%; 
        background-image: url(${thoughtsBack});

        @media screen and (max-width: 1280px) {
            top: 2%;
        }
    }

    &#pal{
        top: auto; 
        right: 10%; 
        bottom: 34%;
        background-image: url(${wordsBack});
    }
    
`

export const FlipCard = styled.div`
    background-size: cover;
    background-position: center;
    perspective: 1000px;
    
    cursor:pointer;
    -webkit-box-shadow: -1px 4px 14px -1px rgba(26,26,26,1);
    -moz-box-shadow: -1px 4px 14px -1px rgba(26,26,26,1);
    box-shadow: -1px 4px 14px -1px rgba(26,26,26,1);

    @media ${device.laptop}{
        width: 250px;
        height: 135px;

        &#sorprise{
            bottom: 2%;
        }
    }


    
        width: 300px;
        height: 164px;
    

    
`
export const FlipCardInner = styled.div`
    position: absolute;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
    transform : rotateY(0deg);
    
    &.active{
        transform :rotateY(180deg);
        .text{
            display: block;
        }
    }
`
export const FlipCardFront = styled.div`
    position: absolute;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden; /* Safari */
    backface-visibility: hidden;
    background-color: #bbb;
    color: black;

    .image-back{
        
        width:100%;
        height: 100%;
        background-size: cover;
        
        &#pensa{
            background-image: url(${thoughtsBack});
        }
        &#intu{
            background-image: url(${intuitionBack});
        }
        &#sorprise{
            background-image: url(${sorpriseBack});
        }
        &#decision{
            background-image: url(${decitionBack});
        }
        &#acc{
            background-image: url(${actionBack});
        }
        &#emo{
            background-image: url(${emotionBack});
        }
        &#pal{
            background-image: url(${wordsBack});
        }
    }
    
    }
`
export const FlipCardBack = styled.div`
    position: absolute;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden; /* Safari */
    backface-visibility: hidden;
    color: #000;
    transform: rotateY(180deg);
    

    .image-front{
        display: flex;
        justify-content: center;
        align-items: center;
        width:100%;
        height: 100%;
        background-size: cover;
        
        &#pensa{
            background-image: url(${thoughts});
        }
        &#intu{
            background-image: url(${intuition});
        }
        &#sorprise{
            background-image: url(${sorprise});
        }
        &#decision{
            background-image: url(${decition});
        }
        &#acc{
            background-image: url(${action});
        }
        &#emo{
            background-image: url(${emotion});
        }
        &#pal{
            background-image: url(${words});
        }

    p{  
        
        font-size: 1rem;
        display: none;
        top: 40%;
        text-align: center;
        width: 80%;
        margin: auto;

        @media screen and (max-width: 1024px){
            font-size: 14px;
        }
    }
`