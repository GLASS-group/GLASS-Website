import style from "./consts/Style";

import { createUseStyles } from "react-jss";
import {mergeJson} from './templates/MergeJson';
import Navigation from "./Navigation";
import pages from "./consts/PageList";
import Footer from "./Footer";

import { colors } from "./consts/Style";

import { useState } from "react";

import documentation from "./consts/DocumentationContent";

import plusPng from './images/plus.png'
import minusPng from './images/minus.png'

function Documentation() {
    const classes = createUseStyles(mergeJson(mergeJson(style, thisStyle), thisStyleMobile))();

    const [docView, setDocView] = useState(documentation[0]);

    const [sectionsOpen, setSectionsOpen] = useState(documentation.map((section) => false))

    const toggleSection = (sectionIndex) => {
        setSectionsOpen(sectionsOpen.map((section, index) => (index === sectionIndex ? !sectionsOpen[index] : sectionsOpen[index])))
    }

    return(
    <div className={classes.mainBody}>
        <Navigation pages={pages}/>
        <div className={classes.documentationMain}>
            <div className={classes.documentationNavbarContainer}>
                <div className={classes.documentationNavbar}>
                    {
                        documentation.map((section, index) => (
                            <div>
                                <div className={classes.sectionContainer}>
                                    <div className={section === docView ? classes.activeSection : classes.docNavSection}
                                         onClick={() => {setDocView(section)}}>
                                        <a>{index+1}.0 {section.sectionName}</a>
                                    </div>
                                    {
                                        section.subsections ?
                                        <a className={classes.docNavSubsectionToggle}>
                                            <img className={classes.docNavSubsectionToggleImage} 
                                                 onClick={() => {toggleSection(index)}}
                                                 src={sectionsOpen[index] ? minusPng : plusPng}/>
                                        </a> : null
                                    }
                                </div>
                                {
                                    section.subsections && sectionsOpen[index] ? section.subsections.map((subsection, subindex) => (
                                        <a className={subsection === docView ? classes.activeSubsection : classes.docNavSubsection} 
                                           onClick={() => {setDocView(subsection)}}>
                                            {index+1}.{subindex+1} {subsection.subsectionName}
                                        </a>
                                    )) : null
                                }
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className={classes.documentationSeparator}></div>
            <div className={classes.documentationContentContainer}>
                <div className={classes.documentationContent}>
                    {docView.content}
                </div>
            </div>
            <div className={classes.documentationSeparatorTwo}></div>
        </div>
        <Footer override={{navFooter : {borderTopStyle : 'solid', borderTopWidth : '2px'}}}/>
    </div>
    
    )
}

const paragraphSpacing = '1rem'

const thisStyle = {
    mainBody : {
        maxHeight : '100vh'
    },
    documentationMain : {
        display : 'flex',
        flexDirection : 'row',
        height : '100%',
        flexGrow : 1,
        overflow : 'auto',
    },
    documentationNavbarContainer : {
        minWidth: '18em',
        width : '20%',
        boxSizing : 'border-box',
        overflowY : 'auto',
        margin : '1em 0',
        '&::-webkit-scrollbar' : {
            width : '6px',
            transform : 'translateX(-20px)'
        },
        '&::-webkit-scrollbar-thumb' : {
            width : '5px',
            backgroundColor : colors.darkGray,
            padding : '5px',
            borderRadius : '3px'
        }
    },
    documentationContentContainer : {
        minWidth : '0',
        width : '100%',
        composes : '$documentationNavbarContainer'
    },
    documentationNavbar : {
        padding : '0.25em 1em'
    },
    documentationSeparator : {
        marginLeft : '0.5em',
        borderRight : '2px solid white'
    },
    documentationSeparatorTwo : {
        marginLeft : '0.5em',
    },
    docNavSection : {
        display : 'inline-block',
        alignItems : 'center',
        fontWeight : 400,
        fontSize : '1.25em',
        padding : '0.4em .6em',
        flex : 1,
        maxWidth : 'auto',
        borderRadius : '.5em',
        color : colors.lightGray,
        
        '&:hover' : {
            cursor : 'pointer',
            color : colors.mint,
            backgroundColor : colors.slate
        }
    },
    activeSection : {
        composes: '$docNavSection',
        color : colors.white
    },
    docNavSubsection : {
        composes: '$docNavSection',
        display : 'block',
        boxSizing : 'border-box',
        marginLeft : '1em',
        marginBottom : '0.5rem'
    },
    activeSubsection :  {
        composes: '$docNavSubsection',
        color : colors.white
    },
    documentationContent : {
        boxSizing : "border-box",
        padding : '0 1.5em',
        fontSize : '1.1em',
        '& p' : {
            margin : 0,
            marginBottom : paragraphSpacing,
        },
        '& p code, & li code' : {
            display : 'inline',
            backgroundColor : colors.slate,
            padding : '2px 4px',
            borderRadius : '4px',
            margin : '2px 0'
        },
        '& h1' : {
            margin : `${paragraphSpacing} 0`
        },
        '& h2' : {
            margin : 0,
            marginBottom : paragraphSpacing,
            marginTop : '2rem'
        },
        '& code' : {
            display : 'block',
            margin : 0,
            margin : '2rem 0',
            backgroundColor : colors.slate,
            padding : '0.75em 1em',
            borderRadius : '4px',
            whiteSpace : 'pre',
            lineHeight : '1.5em',
            overflowX : 'auto',
            '&::-webkit-scrollbar' : {
                height : '6px',
                transform : 'translateX(-20px)',
                backgroundColor : colors.darkGray,
                borderRadius : '3px'
            },
            '&::-webkit-scrollbar-thumb' : {
                height : '5px',
                backgroundColor : colors.lightGray,
                padding : '5px',
                borderRadius : '3px'
            }
        }
    },
    sectionContainer : {
        display : 'flex',
        alignItems : 'center',
        marginBottom : '0.5em',
    },
    docNavSubsectionToggle : {
        marginLeft : 'auto'
    },
    docNavSubsectionToggleImage : {
        height : '1.5rem',
        padding : '0',
        marginLeft : '1rem',
        '&:hover' : {
            cursor : 'pointer'
        }
    }
}

const thisStyleMobile = {

}

export default Documentation;