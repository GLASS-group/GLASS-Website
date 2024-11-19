import {flushSync} from "react-dom";

export const colors = {
    charcoal: "#0D0D0D",
    white: '#FFFFFF',
    mint: '#72FD80',
    slate: '#24262E',
    lightGray: '#999999',
    darkGray : '#333333',
    coolBlue: '#243044',
    overlayBackground: '#000000F4',
    subtleOverlayBackground: '#000000A0'
}

const sectionMargin = '2rem';

export const style = {
    globalFontSize: {
        fontSize: '16px',
    },
    mainBody: {
        composes: '$globalFontSize',
        display: 'flex',
        flexDirection: 'column',
        fontFamily: '"Segoe UI", Roboto, Helvetica, Arial, sans-serif, serif',
        backgroundColor: colors.charcoal,
        color: colors.white,
        minHeight: '100vh',
        width : '100%',
        alignItems: 'center'
    },
    hidden : {
        display: 'none'
    },
    pageContent: {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        alignItems: 'center',
        width : '70%'
    },
    pageContentMobile : {
      composes: '$pageContent',
      width: '85%'
    },
    constructionMessage: {
        margin: '3rem 0rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& h3' : {
            fontWeight: '400'
        },
        '& a' : {
            composes: '$globalFontSize',
            color: colors.mint,
            textDecoration : 'none',
            '&:hover': {
                cursor: 'pointer',
                textDecoration: 'underline'
            }
        }
    },
    constructionLink: {

    },
    pageContentHeader: {
        composes: '$globalFontSize',
        fontSize: '2.5em',
        margin: 0,
        marginTop: sectionMargin
    },
    contentSection: {
        composes: '$globalFontSize',
        display: 'block',
        margin : '2rem',
        width: '100%',
        '& h1' : {
            composes: '$globalFontSize',
            fontSize: '2.5rem',
            margin: 0
        },
        '& h2' : {
            composes: '$globalFontSize',
            fontWeight: 300,
            fontSize: '1.2rem',
            margin : 0,
            marginTop : '0.5rem'
        },
        '& h3' : {
            fontSize: '1.5em',
            margin : 0,
            marginTop : '2rem'
        },
        '& p' : {
            margin : 0
        }
    },
    contentSubsection : {
        composes : '$contentSection',
        width : '100%',
        margin : '2.5rem 0'
    },
    generalFlexColumn: {
        composes: '$globalFontSize',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }
}

export default style;