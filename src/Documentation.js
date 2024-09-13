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
                                    section.subsections.map((subsection, subindex) => (
                                        <a className={subsection === docView ? classes.activeSubsection : classes.docNavSubsection} 
                                           onClick={() => {setDocView(subsection)}}>
                                            {index+1}.{subindex+1} {subsection.subsectionName}
                                        </a>
                                    ))
                                }
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className={classes.documentationSeparator}></div>
            <div className={classes.documentationContent}>
                {docView.content}
            </div>
        </div>
        <Footer/>
    </div>
    
    )
}

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
        width: '18%',
        boxSizing : 'border-box',
        overflowY : 'auto',
        margin : '0.5em 0',
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
    documentationNavbar : {
        padding : '1em'
    },
    documentationSeparator : {
        marginLeft : '0.5em',
        borderRight : '2px solid white'
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
        textIndent : '2em',
        '&::before' : {
            content : '""'
        }
    },
    activeSubsection :  {
        composes: '$docNavSubsection',
        color : colors.white
    },
    documentationContent : {
        height : '100%',
        padding : '1.5em',
        
    }
}

export default Documentation;