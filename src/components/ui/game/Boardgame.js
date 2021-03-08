import styled from '@emotion/styled';

import sorprise from '../../../assets/img/sorp.jpg'
import decition from '../../../assets/img/dec.jpg'
import emotion from '../../../assets/img/emo.jpg'
import action from '../../../assets/img/acc.jpg'
import intuition from '../../../assets/img/intu.jpg'
import thoughts from '../../../assets/img/pensa.jpg'
import words from '../../../assets/img/pal.jpg'

export const BoardContainer = styled.div`
    width:100%;
    height: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    transition: width 0.5s ease;
    display: flex;
    justify-content: center;
    align-items: center;

    &.close{
        width: calc(100% - 350px);
    }

    .btn-final-end{
        z-index: 100;
        background: #fff;
        padding: 10px 30px;
        position: absolute;
        z-index: 50;
        padding: 10px 30px;
        border-radius: 10px;
        text-align: center;
        text-transform: uppercase;
        top: 30px;
        right: 30px;
        color: #000;
        font-weight: bold;
        font-size: 18px;
    }
`
export const Board = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    
    .btn{
        top: 20px;
        right: 20px;
    }
`

export const PlayersContainer = styled.div`
    position: absolute;
    bottom: 20px;
    left: 20px;
    width: 400px;
    height: 50px;

    .button{
        position: absolute;
        width: 50px;
        height: 50px;
        background: #212629;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        svg{
            font-size: 30px;
            color: #efefef;
        }
        p{
            font-size: 12px;
            position: absolute;
            top: 6px;
            right: 6px;
            background: red;
            color: #fff;
            border-radius: 50%;
            width: 16px;
            height: 16px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-weight: bold;
        }
    }
`

export const PlayersDisplay = styled.div`
    position: absolute;
    left: 60px;
    bottom: 0;
    background: #fff;
    padding: 15px;
    border-radius: 10px;
    opacity: 0;
    transition: opacity 0.5s ease;

    &.active{
        opacity: 1;
    }

    &::after{
        content: '';
        position: absolute;
        bottom: 14px;
        left: -18px;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 9px 18px 9px 0;
        border-color: transparent #ffffff transparent transparent;
    }

    ul{
        text-align: left;
        list-style: none;
        padding: 0;
        margin: 0;
        li{
            margin-bottom: 10px;
            &:last-of-type{
                margin-bottom: 0;
            }
        }
    }

`

export const RightBar = styled.div`
    width: 50px;
    position: absolute;
    right: 0;
    top: 0;    
    height: 100%;
    
    z-index: 50;
    background: transparent;
    transition: width 0.5s ease-in-out, background 0.4s ease-in-out;
    
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    
    &.open{
        width: 350px;
        background: #fff;
        display: block;
    }
`;

export const MenuButton = styled.div`
    background: #272727;
    color: #fff;
    width: 50px;
    height:40px;
    float: left;
    text-align: center;
    font-size: 35px;
    display:flex;
    justify-content:center;
    align-items: center
    transform: rotate(0deg);
    transition: rotation 1.5s ease-in-out;
    cursor:pointer;

    &.open{
        transform: rotate(180deg);
    }
`;

export const InputTheme = styled.div`
    position: absolute;
    z-index: 50;
    background: white;
    padding: 20px;
    max-width: 30vh;
    text-align: center;
    text-transform: uppercase;
`

export const Gradient = styled.div`
    top: calc(50vh - 10px);
    width: calc(100% - 16px);
    position: absolute;
    height: 150px;
    background: rgb(255,255,255);
    background: rgb(255,255,255);
    background: linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.9) 25%, rgba(255,255,255,1) 50%, rgba(255,255,255,0.9) 80%, rgba(255,255,255,0) 100%);

`
export const ShowQuestionsContainer = styled.div`
margin-top:0px;
height: calc(50vh - 10px);
overflow-y: scroll;
margin-right: 5px;
padding: 0 5px;
padding-top: 10px;
position: relative;


/* width */
::-webkit-scrollbar {
width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
box-shadow: inset 0 0 5px transparent; 
border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
background: grey; 
border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
background: #b30000; 
}


`
export const Question = styled.div`
position: relative;
    height: 30px;
    display: flex;
    align-items: center;
    flex-direction: row;
    flex-wrap:wrap;
    margin-bottom: 5px;
    cursor: ${props => props.playerType === 'master' && 'pointer'};

    .header{
    display: flex;
    align-items: center;
    flex-direction: row;
    flex-wrap:no-wrap;
    width: 100%;
    border-bottom: 1px solid #d2d0d069;
    height: 30px;
    height: 30px;
    padding-bottom: 5px;
    p{
        width: calc(100% - 30px);
        margin: 0
    }
}
.color{
    width: 30px;
    height: 30px;
    margin-right: 5px;
    position:relative;
    display:flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    
    &:before{
        content="hola";
        position: absolute;
        color: #fff;
    }
    &.acc{
        background-color: #96C93D;
    }
    &.pal{
        background-color: #FFCB31;
    }
    &.emo{
        background-color: #F15951;
    }
    &.decision{
        background-color: #404042;
    }
    &.pensa{
        background-color: #953881;
    }
    &.intu{
        background-color: #68CBDB;
    }
    &.sorprise{
        background-color: #404042;
    }
}
.question{
    display: none;
    padding: 10px 5px;
    
}
&:first-of-type{
    height: auto;
    transition: height 1s ease;
    
    .question{
        display: block;
    }
}
&.active{
    height: auto;
    transition: height 1s ease;
    
    .question{
        display: block;
    }
}
`

export const NoteContainer = styled.div`
position: absolute;
bottom: 0;
width: 100%;
max-height: 40vh;
margin-right: 5px;

padding: 0px 5px 10px 5px;
display: flex;
flex-direction: column-reverse;



form{
    width: 100%;
    display: flex;
    align-items: center;
    border: 1px solid #EFEFEF;
    textarea{
        width: calc(100% - 30px);
        height: 80px;
        display: block;
        border: none;
        padding: 5px;
        outline:none;
    }

    
}

.list{
    height: calc(50vh - 10px);
    width: 100%;
    overflow-y: scroll;
    margin-right: 5px;
    padding: 0 5px;
    p{
        width: 100%;
        margin-bottom: 10px;
        
    }
   
    /* width */
    ::-webkit-scrollbar {
    width: 10px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px transparent; 
    border-radius: 10px;
    }
    
    /* Handle */
    ::-webkit-scrollbar-thumb {
    background: grey; 
    border-radius: 10px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
    background: #b30000; 
    }
}
`



export const EndContainer = styled.div`
   width: calc(100% - 50px);
   position: relative;
   padding-right: 0px;
   text-align: right;
   float: right;
   background: #272727;
   height:40px;
`

export const Endgame = styled.button`
border: none;

padding: 0;

&:focus{
   border: none;
}
&:active{
   border: none;
}

.button {
    display: flex;
    align-items: center;
    padding: 10px 15px;
    position: relative;
    cursor: pointer;
    height: 100%;
    background: #353535;
    /* button */
 
    .link {
       font-family: "Rubik", sans-serif;
       background-color: transparent;
       font-size: 18px;
       letter-spacing: 2px;
       color: #bfbfbf;
       position: relative;
       transition: all 0.3s ease-in-out;
       cursor: pointer;
       border: 0;
       padding-left: 20px;
       left: 0;
       line-height: auto;
       overflow: hidden;
        margin: 0;
       /*line*/
       &:before {
          content: "";
          background-color: #f38181;
          width: 3px;
          height: 100%;
          position: absolute;
          z-index: 2;
          left: 0px;
          top: 0px;
          border-radius: 50px;
          transition: all 0.3s ease-in-out;
       }
       /*arrow*/
       &:after {
          content: "";
          width: 15px;
          height: 15px;
          display: flex;
          align-items: center;
          background-color: transparent;
          position: absolute;
          border: solid 3px #f38181;
          border-left: 0;
          border-bottom: 0;
          top: calc(50% - 8px);
          border-radius: 2px;
          transform: translateX(-42px) rotate(45deg);
          transition: all 0.3s 0.2s ease-in-out;
       }
    }
 /* bg button */
    &:before {
       content: "";
       background-color: #424242;
       width: 0;
       height: 100%;
       position: absolute;
       right: 0;
       top: 0px;
       border-radius: 3px;
       transition: all 0.4s 0.3s ease-in-out;
       
    }
    &:hover {
       &:before {
          width: 100%;
          height: 100%;
          left: 0;
          bottom: 0px;
       }
 
       .link {
          padding-left: 45px;
     
 
          &:before {
             left: 17px;
             top: -1px;
             transform: rotate(90deg);
          }
 
          &:after {
             transform: translate(-33px) rotate(45deg);
          }
       }
    }
 }
`
export const EndPopup = styled.div`
    position: fixed;
    width: 100vw;
    background: rgba(0, 0, 0, 0.5);
    height: 100vh;
    left: 0;
    top: 0;
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ResumeContainer = styled.div`
    z-index:50;
    background: transparent;
    width: 90%;
    height: 90vh;
    display: flex;
    flex-wrap: wrap;
    margin-top: 10vh;

    #outerContainer{
        width: 100%;
    }
    #container {
        width: 100%;
        height: 100%;
        display: flex;
        flex-wrap: wrap;
        touch-action: none;
      }
      
`

export const CardContainer = styled.div`
    // position: absolute;
    z-index: 50;
    height: 190px;
    width: 355px;
    display:flex;
    justify-content: center;
    background-repeat: no-repeat;
    background-size: cover;
    touch-action: none;
    user-select: none;
    text-align: center;
    font-size: 14px;
    padding: 0px 40px 0 40px;
    align-items: center;

    &:active {
        -webkit-box-shadow: 0px 0px 17px 2px rgba(224,66,45,1);
        -moz-box-shadow: 0px 0px 17px 2px rgba(224,66,45,1);
        box-shadow: 0px 0px 17px 2px rgba(224,66,45,1);
      }
    &:hover {
        cursor: pointer;
        -webkit-box-shadow: 0px 0px 17px 2px rgba(224,66,45,1);
        -moz-box-shadow: 0px 0px 17px 2px rgba(224,66,45,1);
        box-shadow: 0px 0px 17px 2px rgba(224,66,45,1);
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

    &#intu{
        background-image: url(${intuition});
    }

    &#pensa{
        background-image: url(${thoughts});
    }

    &#pal{
        background-image: url(${words});
    }
    
`
export const GameOverContainer = styled.div`
    width: 100%;
    height: 98vh;
    background-image: url('https://media1.giphy.com/media/h5XG7vdp3hq1OolYD2/source.gif');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    margin: 0;
    padding: 0;
`

export const ResumeMasterContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;



`