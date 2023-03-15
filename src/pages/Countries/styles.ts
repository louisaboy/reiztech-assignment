import styled from 'styled-components';

export const CountriesArea = styled.main`
    min-height: calc(100vh) - 90px;

    .countries {
        width: 1024px;
        margin: auto;
    }
    .filters {
        width: 1024px;
        margin: auto;
        select {
            border-radius: 10px;
            padding: 0px 20px;
            border: none;
            box-shadow: 2px 2px 1em rgba(0, 0, 0, 0.2);
            outline: 0;
            font-size: 14px;
            height: 50px;
            justify-content: space-between;
            margin: auto;
            margin-right: 20px;
            margin-bottom: 20px
        }
    }
    
    .pagination {
        display: flex;
        list-style: none;
        justify-content: center;
        margin: 0px;
        padding: 20px 0px;
        button {
            height: 40px;
            width: 40px;
            background-color: #FFF;
            color: #000;
            border: none;
            box-shadow: 1px 1px 1em rgba(0, 0, 0, 0.2);
            margin: 0px 5px;
            cursor: pointer;
        }
        .active {
            font-weight: bold
        }
    }

    @media(max-width: 1024px) {
        .countries {
            width: auto;
            padding: 20px;
        }
        .filters {
            width: auto;
        }
    }

    @media(max-width: 768px) {
        & {
            
            .filters select{
                height: max-content;
                width: max-content;
                margin: auto;
                margin-top: 5px;
                margin-left: 20px;
                left: 0;
                justify-content: left;
            }
        }
        
        
    }
`