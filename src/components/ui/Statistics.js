import styled from '@emotion/styled';
import { device } from '../ui/breakpoints';

export const StatisticsContainer = styled.div`
    padding: 0 40px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .title{
        font-size: 18px;
        font-weight: bold;
        text-transform: uppercase;
        padding: 30px 0;
        
    }

    .list-group{
        margin: 0;
        text-transform: uppercase;
        .list-group-item:nth-of-type(1){
            padding-left: 0;
        }
        .list-group-item:last-of-type span{
            display: none;
        }
    }

    
    
    .single-chart {
    width: 170px;
    justify-content: space-around ;
    }

    .circular-chart {
    display: block;
    margin: 10px 0;
    max-width: 100%;
    max-height: 250px;
    }

    .circle-bg {
    fill: none;
    stroke: #a7a7af;
    stroke-width: 2;
    }

    .circle {
    fill: none;
    stroke-width: 2;
    stroke-linecap: round;
    animation: progress 1s ease-out forwards;
    }

    @keyframes progress {
    0% {
        stroke-dasharray: 0 100;
    }
    }

    .circular-chart.sorprise .circle, .circular-chart.decition .circle {
    stroke: #404042;
    }

    .circular-chart.intuition .circle {
    stroke: #68CBDB;
    }

    .circular-chart.words .circle {
    stroke: #FFCB31;
    }
    .circular-chart.thoughts .circle {
    stroke: #953881;
    }
    .circular-chart.action .circle {
    stroke: #96C93D;
    }

    .circular-chart.emotion .circle {
    stroke: #F15951;
    }

    .percentage {
    fill: #666;
    font-family: sans-serif;
    font-size: 0.4em;
    text-anchor: middle;
    }

    p{
        text-align: center;
        font-size: 15px;
        font-weight: 500;
        text-transform: uppercase;
    }

`

