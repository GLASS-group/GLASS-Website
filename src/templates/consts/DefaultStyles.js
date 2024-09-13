const defaultStyles = {
    fullPage : {
        display: "flex",
        flexDirection: "column",
        fontFamily: '"Segoe UI", Roboto, Helvetica, Arial, sans-serif, serif',
        minHeight: "100vh",
        alignItems: "center"
    },
    mainPageContent : {
        width : '100%',
        display : 'flex',
        flexDirection : 'column',
        alignItems : 'center'
    },
    pageLabel : {
        fontSize : '2.3rem',
        margin : 0,
        marginTop : '2rem'
    },
    subsectionLabel : {
        fontSize : '1.8rem',
        fontWeight : 400,
        marginBottom : '1rem'
    },
    hoverTextButton : {
        display: 'inline-block',
        fontSize: '1.15rem',
        fontWeight: 500,
        margin: '0rem 0.3rem',
        padding: '0.5rem 1rem',
        borderRadius: '.4rem',
        
        textDecoration: 'none',
        all : 'unset',
        transition: 'background-color .15s',
        '&:hover': {
            backgroundColor : 'lightGray',
            cursor: 'pointer'
        },
        '@media screen and (max-width: 900px)': {
            display: 'block',
            width: '80vw',
            textAlign: 'center',
            boxSizing: 'border-box',
        }
    },
    textButton : {
        display: 'inline-block',
        fontSize: '1.15rem',
        fontWeight: 500,
        margin: '0rem 0.3rem',
        padding: '0.5rem 1rem',
        borderRadius: '.4rem',
        backgroundColor : 'lightGray',
        textDecoration: 'none',
        all : 'unset',
        transition: 'background-color 0.15s, color 0.15s',
        '&:hover': {
            backgroundColor : 'gray',
            color : 'white',
            cursor: 'pointer'
        },
        '@media screen and (max-width: 900px)': {
            display: 'block',
            textAlign: 'center',
            boxSizing: 'border-box',
        }
    },
    exitButton : {
        fontSize: '1.5rem',
        width: '2.5rem',
        height : '2.5rem',
        justifyContent : 'center',
        textAlign : 'center',
        borderRadius: '.4rem',
        marginLeft : 'auto',
        backgroundColor : 'lightGray',
        textDecoration: 'none',
        all : 'unset',
        transition: 'background-color 0.15s, color 0.15s',
        '&:hover': {
            backgroundColor : 'crimson',
            color : 'white',
            cursor: 'pointer'
        },
        '@media screen and (max-width: 900px)': {
            display: 'block',
            textAlign: 'center',
            boxSizing: 'border-box',
        }
    }
}

export default defaultStyles;