import style from "./consts/Style";

import { createUseStyles } from "react-jss";
import {mergeJson} from './templates/MergeJson';
import Navigation from "./Navigation";
import pages from "./consts/PageList";
import Footer from "./Footer";

import { colors } from "./consts/Style";

import { useState } from "react";

import documentation from "./consts/DocumentationContent";

function Documentation() {
    const classes = createUseStyles(mergeJson(style, thisStyle))();

    const [docView, setDocView] = useState(documentation[0]);


    return(
    <div className={classes.mainBody}>
        <Navigation pages={pages}/>
        <div className={classes.documentationMain}>
            <div className={classes.documentationNavbarContainer}>
                <div className={classes.documentationNavbar}>
                    {
                        documentation.map((section, index) => (
                            <div>
                                <a className={section === docView ? classes.activeSection : classes.docNavSection}
                                   onClick={() => {setDocView(section)}}>
                                    {index+1}.0 {section.sectionName}
                                </a>
                                {
                                    section.subsections ? section.subsections.map((subsection, subindex) => (
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
        minWidth: '18%',
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
        display : 'block',
        fontWeight : 400,
        fontSize : '1.25em',
        marginBottom : '0.5em',
        padding : '.3em .6em',
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
        marginLeft : '1.5em'
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
            display : 'inline-block',
            backgroundColor : colors.slate,
            padding : '0 4px',
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
    }
}

export default Documentation;