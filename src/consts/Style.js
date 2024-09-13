export const colors = {
    charcoal: "#0D0D0D",
    white: '#FFFFFF',
    mint: '#72FD80',
    slate: '#24262E',
    lightGray: '#999999',
    darkGray : '#222222',
    coolBlue: '#243044'
}

const sectionMargin = '2rem';

export const style = {
    globalFontSize: {
        fontSize: '16px',
        '@media screen and (max-width: 1000px)': {
            fontSize: '16px'
         }
    },
    mainBody: {
        composes: '$globalFontSize',
        display: 'flex',
        flexDirection: 'column',
        fontFamily: '"Segoe UI", Roboto, Helvetica, Arial, sans-serif, serif',
        backgroundColor: colors.charcoal,
        color: colors.white,
        minHeight: '100vh',
    },
    navHeader: {
        composes: '$globalFontSize',
        display: 'flex',
        border:'solid',
        borderWidth: '0 0 2px 0',
        alignItems: 'center',
        padding: '1em',
        '@media screen and (max-width: 1000px)': {
            flexDirection: 'column'
        }
    },
    navMainLogo: {
        composes: '$globalFontSize',
        display: 'flex',
        color: colors.white,
        textDecoration: 'none',
        alignItems: 'center',
        transition: 'transform 0.25s',
        '&:hover': {
            transform: "translateY(-0.15em)  scale(1.03)",
            cursor: 'pointer'
        },
        '@media screen and (max-width: 1000px)': {
            '&:hover': {
                transform: "translateY(0)  scale(1)",
            }
        }
    },
    mainLogoImage: {
        composes: '$globalFontSize',
        width: '4em',
        height: '4em'
    },
    mainLogoLabel: {
        composes: '$globalFontSize',
        display: 'flex',
        display: 'inline',
        margin: 0,
        marginLeft: '0.2em',
        fontSize: '3em',
        fontWeight: '500',
        verticalAlign: 'middle',
        textDecoration: 'none',
    },
    navHeaderMenu: {
        composes: '$globalFontSize',
        margin: 0,
        marginLeft: 'auto',
        marginRight: '.7em',
        padding: 0,
        '@media screen and (max-width: 1000px)': {
            display: 'block',
            margin:0
        }
    },
    navHeaderItem: {
        composes: '$globalFontSize',
        display: 'inline-block',
        color: colors.lightGray,
        margin: '.7em',
        border: 'solid',
        borderRadius: '.4em',
        borderWidth: '1px',
        padding: '.5em 1em',
        textDecoration: 'none',
        transition: 'transform 0.15s, color .35s',
        '&:hover': {
            cursor: 'pointer',
            textDecoration: 'underline',
            transform: 'translateY(-0.15em)',
            color: colors.mint
        },
        '@media screen and (max-width: 1000px)': {
            display: 'block',
            width: '80vw',
            textAlign: 'center',
            boxSizing: 'border-box',
            '&:hover': {
                textDecoration: 'none',
                transform: 'translateY(0)',
                cursor: 'pointer',
                color: colors.mint
            }
        }
    },
    navActiveHeaderItem: {
        composes: '$globalFontSize',
        composes:'$navHeaderItem',
        color: colors.white
    },
    pageContent: {
        composes: '$globalFontSize',
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        alignItems: 'center',
    },
    constructionMessage: {
        composes: '$globalFontSize',
        margin: '3em',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    constructionPrompt: {
        composes: '$globalFontSize',
        fontWeight: 400
    },
    constructionLink: {
        composes: '$globalFontSize',
        color: colors.mint
    },
    pageContentHeader: {
        composes: '$globalFontSize',
        fontSize: '2.5em',
        margin: 0,
        marginTop: sectionMargin
    },
    mainHeader: {
        composes: '$globalFontSize',
        fontSize: '2.5em',
        margin: 0
    },
    contentSubsection: {
        composes: '$globalFontSize',
        display: 'block',
        margin: `${sectionMargin} 0em 0em 0em`,
        width: '75vw',
        padding: '0 0 2.5em 0',
        borderBottomStyle: 'dashed',
        borderWidth: '2px'
    },
    finalContentSubsection: {
        composes: '$globalFontSize',
        composes: '$contentSubsection',
        borderBottom: 'none',
        margin: `${sectionMargin} 0em 4em 0em`,
        padding: 0
    },
    generalFlexColumn: {
        composes: '$globalFontSize',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    navFooter: {
        composes: '$globalFontSize',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '0.5em',
        marginTop: 'auto',
        borderTop: 'dotted',
        borderWidth: '4px'
    },
    contentCard: {
        composes: '$globalFontSize',
        backgroundColor: colors.slate,
        boxSizing: 'border-box', 
        borderRadius: '2em',
        marginTop: '2.5em',
        padding: '2em',
        width: '55em',
        '@media screen and (max-width: 1000px)': {
            width: '80vw'
        }
    },

    devBioCard: {
        borderRadius: '2em',
        backgroundColor: colors.slate,
        padding: '2em',
        marginTop: sectionMargin,
        display: 'flex',
        columnGap: '2em',
        rowGap: '2rem',
        alignItems: 'center',
        justifyContent: 'midde',
        '@media screen and (max-width: 1000px)': {
            flexDirection: 'column',
            padding: 0,
        }
    },
    devCardName: {
        margin: 0,
        fontSize: '2rem'
    },
    devCardImage: {
        boxSizing: 'border-box',
        width: '25%',
        borderRadius: '50%',
        boxShadow: 'rgba(0, 0, 0, .3) 8px 8px 4px 2px',
        '@media screen and (max-width: 1000px)': {
            width: '85%',
            height: '85%',
            marginBottom: '2em'
        }
    },
    devBioText: {
        borderRadius: '2em',
        border: 'solid',
        borderWidth: '2px',
        borderColor: colors.lightGray,
        backgroundColor: colors.coolBlue,
        boxSizing: 'border-box',
        padding: '1em'
    }
}

export default style;