import style from "./consts/Style";

import { createUseStyles } from "react-jss";
import {mergeJson} from './templates/MergeJson';
import Navigation from "./Navigation";
import pages from "./consts/PageList";
import Footer from "./Footer";

import { colors } from "./consts/Style";

import { useState, useEffect, useRef } from "react";

import documentation from "./consts/DocumentationContent";

import plusPng from './images/plus.png'
import minusPng from './images/minus.png'
import xPng from './images/x.png'

const MOBILE_WIDTH = 1100

function Documentation() {
    const classes = createUseStyles(mergeJson(style, thisStyle))();

    const [isMobile, setIsMobile] = useState(window.innerWidth < 1100)
    const [showMenu, setShowMenu] = useState(false)
    const [showTOC, setShowTOC] = useState(false);


    const handleResize = () => {
        setIsMobile(window.innerWidth < MOBILE_WIDTH);
    }

    if (!isMobile && showMenu) {
        setShowMenu(false);
        setShowTOC(false);
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize)
    })

    const [docView, setDocView] = useState(documentation[0]);

    const documentationContentWindow = useRef(null);

    const updateDocView = (section) => {
        if (section.name !== docView.name) {
            documentationContentWindow.current.scrollTo({
                top: 0,
                left: 0
              });
        }
        setDocView(section)
    }

    const [sectionsOpen, setSectionsOpen] = useState(documentation.map(() => false))
    const [subsectionsOpen, setSubsectionsOpen] = useState(documentation.map(
        (section) => section.subsections ? section.subsections.map(() => false) : [])
    )

    const toggleSection = (sectionIndex) => {
        setSectionsOpen(sectionsOpen.map((section, index) => (index === sectionIndex ? !section : section)))
    }

    const toggleSubsection = (sectionIndex, subsectionIndex) => {
        setSubsectionsOpen(subsectionsOpen.map((section, index) => (
            index === sectionIndex ? section.map((subsection, subindex) => (
                subindex === subsectionIndex ? !subsection : subsection
            )) : section
        )))
    }

    return(
    <div className={classes.mainBody}>
        <Navigation pages={pages}/>
        {
            isMobile ?
            <div className={classes.documentationMainMobile}>
                <div className={classes.docuemntationToggleTOCMobile}>
                    <a className={classes.toggleTOCButton} onClick={() => {setShowTOC(true)}}>View Table of Contents</a>
                </div>
                { showTOC ? 
                <div className={classes.mobileNavMenu}>
                    <div className={classes.mobileTocFlexColumn}>
                    <a className={classes.mobileHeaderMenuClose} onClick={() => {setShowTOC(false)}}>
                        <img className={classes.menuImage} src={xPng} alt={"Exit button"}/>
                    </a>
                    <div className={classes.mobileTocContainer}>
                    {
                            documentation.map((section, index) => (
                                <div>
                                    <div className={classes.sectionContainerMobile}>
                                        <div className={section === docView ? classes.activeSection : classes.docNavSection}
                                             onClick={() => {updateDocView(section); setShowTOC(false)}}>
                                            <a>{index+1}.0 {section.name}</a>
                                        </div>
                                        {
                                            section.subsections ?
                                            <a className={classes.docNavSubsectionToggle}>
                                                <img className={classes.docNavSubsectionToggleImage} 
                                                     onClick={() => {toggleSection(index)}}
                                                     src={sectionsOpen[index] ? minusPng : plusPng}
                                                     alt={"Expand or collapse current section"}/>
                                            </a> : null
                                        }
                                    </div>
                                    {
                                        section.subsections && sectionsOpen[index] ? section.subsections.map((subsection, subindex) => (
                                            <div>
                                                <div className={classes.sectionContainerMobile}>
                                                    <div className={subsection === docView ? classes.activeSubsectionMobile : classes.docNavSubsectionMobile} 
                                                       onClick={() => {updateDocView(subsection); setShowTOC(false)}}>
                                                        <a>{index+1}.{subindex+1} {subsection.name}</a>
                                                    </div>
                                                    {
                                                        subsection.subsubsections ?
                                                        <a className={classes.docNavSubsectionToggle}>
                                                            <img className={classes.smalldocNavSubsectionToggleImage} 
                                                                 onClick={() => {toggleSubsection(index, subindex)}}
                                                                 src={subsectionsOpen[index][subindex] ? minusPng : plusPng}
                                                                 alt={"Expand or collapse current section"}/>
                                                        </a> : null
                                                    }

                                                </div>
                                                {
                                                    subsection.subsubsections && subsectionsOpen[index][subindex] ? subsection.subsubsections.map((subsubsection, subsubindex) => (
                                                        <div className={classes.sectionContainerMobile}>
                                                            <div className={subsubsection === docView ? classes.activeSubSubsectionMobile : classes.docNavSubSubsectionMobile} 
                                                               onClick={() => {updateDocView(subsubsection); setShowTOC(false)}}>
                                                                <a>{index+1}.{subindex+1}.{subsubindex+1} {subsubsection.name}</a>
                                                            </div>
                                                        </div>
                                                    )) : null
                                                }
                                            </div>
                                        )) : null
                                    }
                                    
                                </div>
                            ))
                        }
                    </div>
                    </div>
                </div> : null }
                <div ref={documentationContentWindow} className={classes.documentationContentContainer}>
                    <div className={classes.documentationContent}>
                        {docView.content}
                    </div>
                </div>
                <div className={classes.documentationSeparatorTwo}></div>
            </div>

            :

            <div className={classes.documentationMain}>
                <div className={classes.documentationNavbarContainer}>
                    <div className={classes.documentationNavbar}>
                        {
                            documentation.map((section, index) => (
                                <div>
                                    <div className={classes.sectionContainer}>
                                        <div className={section === docView ? classes.activeSection : classes.docNavSection}
                                             onClick={() => {updateDocView(section)}}>
                                            <a>{index+1}.0 {section.name}</a>
                                        </div>
                                        {
                                            section.subsections ?
                                            <a className={classes.docNavSubsectionToggle}>
                                                <img className={classes.docNavSubsectionToggleImage} 
                                                     onClick={() => {toggleSection(index)}}
                                                     src={sectionsOpen[index] ? minusPng : plusPng}
                                                     alt={"Expand or collapse current section"}/>
                                            </a> : null
                                        }
                                    </div>
                                    {
                                        section.subsections && sectionsOpen[index] ? section.subsections.map((subsection, subindex) => (
                                            <div>
                                                <div className={classes.sectionContainer}>
                                                    <div className={subsection === docView ? classes.activeSubsection : classes.docNavSubsection} 
                                                       onClick={() => {updateDocView(subsection); setShowTOC(false)}}>
                                                        <a>{index+1}.{subindex+1} {subsection.name}</a>
                                                    </div>
                                                    {
                                                        subsection.subsubsections ? 
                                                            <a className={classes.docNavSubsectionToggle}
                                                                onClick={() => {toggleSubsection(index, subindex)}}>
                                                                <img className={classes.smalldocNavSubsectionToggleImage} 
                                                                    src={subsectionsOpen[index][subindex] ? minusPng : plusPng}
                                                                     alt={"Expand or collapse current section"}/>
                                                            </a>
                                                         : null
                                                    }
                                                </div>
                                                {
                                                    subsection.subsubsections && subsectionsOpen[index][subindex] ? subsection.subsubsections.map((subsubsection, subsubindex) => (
                                                        <div>
                                                            <div className={classes.sectionContainer}>
                                                                <div className={subsection === docView ? classes.activeSubSubsection : classes.docNavSubSubsection} 
                                                                   onClick={() => {updateDocView(subsubsection); setShowTOC(false)}}>
                                                                    <a>{index+1}.{subindex+1}.{subsubindex+1} {subsection.name}</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )) : null
                                                }
                                            </div>
                                        )) : null
                                    }
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className={classes.documentationSeparator}></div>
                <div ref={documentationContentWindow} className={classes.documentationContentContainer}>
                    <div className={classes.documentationContent}>
                        {docView.content}
                    </div>
                </div>
                <div className={classes.documentationSeparatorTwo}></div>
            </div>
        }
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
    documentationMainMobile : {
         composes : '$documentationMain',
         flexDirection : 'column'
    },
    documentationNavbarContainer : {
        minWidth: '20rem',
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
    docNavSubsectionMobile : {
        composes: '$docNavSection',
        display : 'block',
        boxSizing : 'border-box',
        marginLeft : '2em',
        marginBottom : '0.5rem',
        marginRight : '2rem'
    },
    activeSubsectionMobile :  {
        composes: '$docNavSubsectionMobile',
        color : colors.white
    },

    docNavSubSubsection : {
        composes: '$docNavSection',
        display : 'block',
        boxSizing : 'border-box',
        marginLeft : '2em',
        marginBottom : '0.5rem'
    },
    activeSubSubsection :  {
        composes: '$docNavSubsection',
        color : colors.white
    },
    docNavSubSubsectionMobile : {
        composes: '$docNavSection',
        display : 'block',
        boxSizing : 'border-box',
        marginLeft : '4em',
        marginBottom : '0.5rem',
        marginRight : '2rem'
    },
    activeSubSubsectionMobile :  {
        composes: '$docNavSubsectionMobile',
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
        '& p code, & li code, & h2 code': {
            display : 'inline',
            whiteSpace : 'normal',
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
        '& p a' : {
            color : colors.mint,
            textDecoration : 'none',
            '&:hover' : {
                cursor : 'pointer',
                textDecoration: 'underline'
            }
        },
        '& code' : {
            display : 'block',
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
    sectionContainerMobile : {
        composes : '$sectionContainer',
        marginLeft : '2.2rem',
        marginRight : '2.2rem'
    },
    docNavSubsectionToggle : {
        marginLeft : 'auto'
    },
    docNavSubsectionToggleImage : {
        height : '1.5rem',
        padding : '0rem',
        marginLeft : '1rem',
        '&:hover' : {
            cursor : 'pointer'
        }
    },
    smalldocNavSubsectionToggleImage : {
        height : '1.5rem',
        padding : '0.25rem',
        marginLeft : '1rem',
        boxSizing : 'border-box',
        '&:hover' : {
            cursor : 'pointer'
        }
    },
    docuemntationToggleTOCMobile : {
        fontSize : '1.2rem',
        padding : '1.25rem',
        textAlign : 'center',
        borderBottom : '2px solid white'
    },

    toggleTOCButton : {
        border : '1px solid white',
        borderRadius : '0.4rem',
        padding : '0.4rem 0.8rem',
        '&:hover' :  {
            'cursor' : 'pointer',
            'color': colors.mint,
            borderColor : colors.mint
        }
    },
    mobileHeaderMenuClose : {
        composes : "$mobileHeaderMenu",
        display : 'block',
        margin : '1rem',
        marginLeft : 'auto',
        marginRight : '1.5rem',
        marginTop : '1.5rem',
        height : '3rem',
        width : '3rem',
        '&:hover' : {
            cursor : 'pointer'
        }
    },
    menuImage : {
        width : '100%',
    },
    mobileNavMenu : {
        position: 'fixed',
        top: '0',
        left: '0',
        width : '100%',
        height : '100%',
        backgroundColor : '#000000F6'
    },
    mobileTocContainer : {
        height : '100%',
        overflowY : 'auto',
        marginBottom : '1.5rem',
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
    mobileTocFlexColumn :{
        display : 'flex',
        flexDirection : 'column',
        height : '100%'
    }
}

export default Documentation;