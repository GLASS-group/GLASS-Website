export const colors = {
    charcoal: "#0D0D0D",
    white: '#FFFFFF',
    mint: '#72FD80',
    slate: '#24262E',
    lightGray: '#999999',
    coolBlue: '#243044',
    black : '#000000'
}

const overrideStyles = {
    navbarHeader : {
        navHeader : {
            height : '6rem',
            backgroundColor : colors.charcoal,
            boxShadow : '0',
            borderBottom : '2px solid',
            borderColor : colors.white
        },
        navItem : {
            border : '1px solid',
            borderColor : colors.lightGray,
            backgroundColor: colors.charcoal,
            color : colors.lightGray,
            fontWeight : 400,
            margin : '0 0.7rem',
            fontSize : '1rem',
            transition: 'transform 0.15s, color .35s, border-color .35s',
            '&:hover': {
                cursor: 'pointer',
                textDecoration: 'underline',
                transform: 'translateY(-0.15em)',
                color: colors.mint,
                borderColor: colors.mint,
                backgroundColor: colors.charcoal
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
        activeNavItem : {
            composes : '$navItem',
            position : 'relative',
            display : 'inline-block',
            color : colors.white,
            borderColor : colors.white
        },
        navLogoLabel : {
            color: colors.white
        }
    }
}

export default overrideStyles;