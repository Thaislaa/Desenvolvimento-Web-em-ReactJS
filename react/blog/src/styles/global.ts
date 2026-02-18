import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body{
        font-family: 'Montserrat', sans-serif;
        background-color: ${(props) => props.theme.colors.backgroundColor};
        color: ${(props) => props.theme.colors.textColor};
    }

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    main{
        padding: 0px 150px;
    }

    form{
        padding: 20px 150px;
    }
`
