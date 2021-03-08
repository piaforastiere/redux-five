import styled from '@emotion/styled';
import { device } from '../ui/breakpoints';

export const ContainerDash = styled.div`
    background: rgb(30,163,164);
    background: linear-gradient(0deg, rgba(30,163,164,1) 0%, rgba(26,30,37,1) 100%);
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    width: 100%;
    padding: 40px 60px;
    min-height: calc(100vh - 70px); 

    

    .menu{
        border-right: 0.5px solid #fff;
        height: 100%;
        color: #fff;

        ul{
            list-style: none;   
            padding-top: 40px;
            li{
                text-align: center;
                margin-bottom:40px;
                cursor: pointer;

                a{
                    text-decoration: none;
                    color: inherit;
                }
                svg{
                    font-size: 30px;
                    font-weight: 200;
                    margin-bottom: 5px;
                }
                p{
                    font-size: 12px;
                    font-weight: 200;
                    
                }
            }
        }
    }
    .multiple, .last-games{
        padding: 0 20px;
    }
   
   @media (max-width: 1280px){
       .multiple{
            .buttons-container{
                width: 40%;
            }
       }
   }
    @media ${device.laptop}{
        flex-direction: row;
        padding: 40px 20px;

        .menu{
            border-right: none;
            border-bottom: 0.5px solid #fff;
            height: 80px;
            width: 100%;
            margin-bottom: 20px;

            ul{
                display: inline;
                display: flex;
                justify-content: space-between;
                width: 100%;
                padding: 0 20px ;
            }
        }
    }
`
export const Profile = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    height: 100px;
    color:#fff;

    .img{
        width: 100px;
        height: 100px;
        border-radius: 50%;
        margin-right: 20px;
        overflow: hidden;

        img{
            width: 100%;
        }
    }

    .user-name{
        font-size: 42px;
        font-weight: 300;
    }
    .user-subscription{
        font-size: 23px;
        font-weight: 200;
        margin-top: 15px;
    }
`
export const GamesPlayed = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    border-radius: 10px;
    background-color: rgba(26, 30, 37, 0.7);
    padding: 20px;
    width: 100%;
    color: #fff;
    margin-bottom: 20px;

    h2{
        font-weight: 500;
        width: 100%;
        text-align: center;
        font-size: 25px;
        letter-spacing: 1.6px;
    }
    p{
        
        font-weight: lighter;
        width: 100%;
        text-align: center;
        font-size: 20px;
    }
`

export const Module = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    flex-wrap: wrap;
    border-radius: 10px;
    background-color: rgba(26, 30, 37, 0.7);
    padding: 20px 30px;
    width: 100%;
    color: #fff;
    margin-bottom: 20px;
    padding-bottom: 40px;

    h2{
        font-weight: 500;
        width: 100%;
        font-size: 25px;
        letter-spacing: 1.6px;
    }

    h3{
        font-weight: 700;
        width: 100%;
        text-align: center;
        font-size: 22px;
        text-transform: uppercase;
        letter-spacing: 1.6px;
        margin-bottom: 10px;
    }
    p{
        
        font-weight: 600;
        width: 100%;
        text-align: center;
        font-size: 18px;
    }

`

export const NewButton = styled.button`
            -webkit-appearance: none;
               -moz-appearance: none;
                    appearance: none;
            border: 0;
            font-size: 17px;
            text-transform: uppercase;
            margin: 0;
            overflow: hidden;
            padding: 15px 45px;
            position: relative;
            top: 0;
            -webkit-transition: 150ms;
            transition: 150ms;
            background-color: ${props => props.bgshadow};
            border: 1px solid ${props => props.bg};
            // background-image: radial-gradient(ellipse at top right, #C2C4C9, rgba(68, 66, 67, 0) 67%);
            box-shadow: 0 0.5rem 0 ${props => props.bg};
            color: #fff;
            text-shadow: 0 -0.1em 0 rgba(225, 227, 228, 0.5);
            border-radius: 1rem;
            margin-bottom: 10px;
          
            a{
                color: inherit;
                text-decoration: none;
            }
          &:hover, &:focus {
            outline: none;
            background-color: ${props => props.bg};
            box-shadow: 0 0.5rem 0 ${props => props.shadow};
            text-shadow: 0 -0.1em 0 rgba(221, 238, 255, 0.5);
          }
          &:active {
            box-shadow: 0 0 0;
            outline: none;
            top: 0.5rem;
          }
`

export const LatestGames = styled.div`
    margin-top:20px;
    width: 100%;
    table{
        list-style: none;
        width: 100%;
        margin: 0;
        padding: 0;
    
    .tg  {
        border-collapse:collapse;
        border-spacing:0;
        word-break: normal;
    }

    th{
        
        vertical-align: middle;
    }
    tr{ 
        vertical-align: middle;
        height: 50px;
        color: #fff;
        
        td{
            word-break:normal;
            
        }
        
        .name{
            
        }
        .master{
           
           text-align: center;
        }
        .progress{
            height: 50px;
            overflow: hidden;
            font-size: inherit;
            background-color: transparent;
            border-radius: 0;
            display: revert;
            text-align: center;

        }
        .icon{
            width: 20px;
            svg{
                
                font-size: 20px;
            }
            a{
                color: inherit;
            }
        }
       
        &:nth-of-type(odd){
            background: rgb(30,163,164);
            background: linear-gradient(90deg, rgba(30,163,164,0) 0%, rgba(88,170,184,0.30996148459383754) 50%, rgba(26,30,37,0) 100%);
        }
        &.head{
            background: transparent;
            background: linear-gradient(90deg, rgba(30,163,164,0) 0%, rgba(88,170,184,0) 50%, rgba(26,30,37,0) 100%);
        }
        
    }
    }

`

export const ContainerResume = styled.div`
    width: 90%;
    margin: auto;
`
export const CardsResume = styled.div`
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;

    .card{
        width: 270px;
        margin-right: 30px;
        margin-bottom: 30px;
        margin-top: 0;

        &-body{
            padding-bottom: 20px;
        }
    }
`