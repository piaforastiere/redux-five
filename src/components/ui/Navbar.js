import styled from '@emotion/styled';



export const Profile = styled.div`
    
    display: flex;
    justify-content: space-between;
    flex-wrap: row;
    flex-wrap: nowrap;
    align-items: center;

    .img{
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin-left: 10px;
        overflow: hidden;
        background-color: #ffffff;

        img{
            width: 100%;
            margin: auto;
        }
    }
`