import styled from '@emotion/styled';

import bg from  '../../assets/img/back-grey.jpg'

export const Background = styled.div`
    width: 100%;
    height: calc(100% - 80px);
    position: absolute;

    .background{
        width: 100%;
        height: 100%;
        position: absolute;
        opacity: 0.6;
        background-image: url(${bg});
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        z-index: 0;
    }

    .content{
        z-index: 100;
        position: relative;
        padding-bottom: 30px;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
                    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
                    sans-serif;
    }
`

export const HeaderContainer = styled.div`
    width: 100%;
    height: 70px;
    background: #d1d2d3;
    padding: 10px 30px;
    display: flex;
    flex-direction: row;
    
    align-items: center;

    div{
        display: flex;
        flex-direction: row;
        
        

        &:nth-of-type(1){
            width: 60%;
            padding-right: 20px;
        }
        &:nth-of-type(2){
            width: 30%;
        }
        
        
        h2{
            font-size: 20px;
            font-weight: bold;
            margin-right: 5px;
            text-transform: uppercase;
            letter-spacing: 0.8px;
            padding-top:5px;
        }

        p{
            width: 90%;
            background: #fff;
            padding: 8px;
            font-size: 18px;
        }
    }
`

export const ListContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    z-index: 1;

    #titles{
        border-bottom: 0.5px solid #b7b6b6;
    }
    
    .title{
        font-size: 18px;
        font-weight: bold;
        text-transform: uppercase;
        
        width: 66%;
        padding: 30px;
        &.notes{
            width: 33%;
            float: right;
            padding-left: 15px;
            
        }
    }
`

export const ButtonResume = styled.button`
    cursor: pointer;
    -webkit-appearance: none;
    -moz-appearance: none;
        appearance: none;
    border: 0;
    font-size: 20px;
    text-transform: uppercase;
    margin: 0;
    overflow: hidden;
    padding: 15px 70px;
    position: relative;
    top: 0;
    -webkit-transition: 150ms;
    transition: 150ms;
    background-color: #FFFFFF;
    border: 1px solid #efefef;
    margin: 0 20px;
    box-shadow: 0 0.5rem 0 #C2C4C9;
    color: #646567;
    text-shadow: 0 -0.1em 0 rgba(225, 227, 228, 0.5);
    border-radius: 1rem;
    margin-bottom: 20px;
    }
    
    &:hover, &:focus {
    outline: none;
    }
    &:active {
    box-shadow: 0 0 0;
    outline: none;
    top: 0.5rem;
    }

   
`
export const List = styled.ul`
    width: 66%;
    float: left;
    padding-right: 20px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    
    padding-left: 30px;
`
export const Item = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    

    div{ 
        width: 48%;
        line-height: 1.6;
        padding: 10px;
        list-style-type: none;
        

        &:nth-of-type(1), &:nth-of-type(3), &:nth-of-type(5), &:nth-of-type(7){
            border-right: 0.5px solid #b7b6b6;
            padding-left: 0;
        }

        .card-number{
            font-weight: bold;
            text-transform: uppercase;
            font-size: 20px;
        }
        .card-question{
            text-transform: uppercase;
            font-size: 15px;
        }

        
    }
`

export const ListNotes = styled.ul`
    
    
    
    padding-right: 30px;

    li{
        padding: 10px;
    }
`

export const ContainerCard = styled.div`
    position: fixed;
    width: 100vw;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    top: 0;
    left: 0;
    z-index: 9999;
    padding: 10vh;
`

export const CloseButton = styled.div`
    position: absolute;
    top: -15px;
    right: -15px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: black;
    cursor: pointer;
    text-align: center;
    font-size: 20px;
    padding-top: 5px;
    color: #fff;
`