import style, {colors} from "./consts/Style";
import {createUseStyles} from "react-jss";
import {mergeJson} from './templates/MergeJson';
import Navigation from "./Navigation";
import {pages} from "./consts/NavbarPages";
import Footer from "./Footer";
import {useRef, useState} from "react";
import {releases} from "./consts/Releases";
import plusPng from './images/plus.png'
import minusPng from './images/minus.png'
import xPng from './images/x.png'
import leftPng from './images/left_arrow.png'
import rightPng from './images/right_arrow.png'
import useMobile from "./templates/Mobile";
import {useParams, useNavigate} from "react-router";
import {useEffect} from "react";
import useTopOfPage from "./templates/TopOfPage";

function Documentation() {

    const classes = createUseStyles(mergeJson(style, thisStyle))();

    const [showTOC, setShowTOC] = useState(false);
    const isMobile = useMobile();
    useTopOfPage();
    const { page, version } = useParams();
    const [docView, setDocView] = useState(null);
    const navigate = useNavigate();
    const documentationContentWindow = useRef(null);

    const matchingRelease = releases.find((release) => release.documentationPath === version);
    const documentation = matchingRelease ? matchingRelease.relatedDocumentation : null;

    if (!isMobile && showTOC) {
        setShowTOC(false);
    }

    const nameToPath = (section) => section.replaceAll(' ', '-').replaceAll('/','-').toLowerCase();

    const updateDocView = (section) => {
        if (docView !== null && section.name !== docView.name) {
            documentationContentWindow.current.scrollTo({
                top: 0,
                left: 0
            });
        }
        setDocView(section)
        if (isMobile) setShowTOC(false);
    }

    const initializeTOCSectionsOpen = (sections) => {
        let sectionList = []
        sections.forEach((section) => {
            let subsections = null
            if (section.subsections) {
                subsections = initializeTOCSectionsOpen(section.subsections);
            }
            sectionList.push({open: false, subsections: subsections})
        })
        return sectionList
    }

    const buildTOC = (sections, openSections, fullIndexList, lastPage) => {
        const sectionPrefix = fullIndexList.map((index) => `${index + 1}.`).join("");
        const tocSections = []
        sections.forEach((section, index) => {
            const subsectionTOCData = section.subsections ? buildTOC(section.subsections, openSections[index].subsections, fullIndexList.concat(index), lastPage) : null
            const subsectionTOC = subsectionTOCData ? subsectionTOCData[0] : null
            const subsectionLastPage = subsectionTOCData ? subsectionTOCData[1] : null
            tocSections.push(
                {
                    tableEntry:
                        <div>
                            <div className={classes.sectionContainer}>
                                <div
                                    className={page === nameToPath(section.name) ? classes.activeSection : classes.docNavSection}
                                    onClick={() => updateDocView(section)}>
                                    <a>{fullIndexList.length === 0 ? `${index + 1}.0` : sectionPrefix + `${index + 1}`} {section.name}</a>
                                </div>
                                {
                                    section.subsections ?
                                        <a className={classes.docNavSubsectionToggle}>
                                            <img className={classes.docNavSubsectionToggleImage}
                                                 onClick={() => toggleSection(fullIndexList.concat(index), 0)}
                                                 src={openSections[index].open ? minusPng : plusPng}
                                                 alt={"Expand or collapse current section"}/>
                                        </a>
                                        : null
                                }
                            </div>

                            {
                                openSections[index].open ?
                                    <div className={classes.subsectionIndent}>
                                        {subsectionTOC.map((section) => section.tableEntry)}
                                    </div>
                                    : null
                            }

                        </div>,
                    previousSection : subsectionLastPage ? subsectionLastPage : lastPage,
                    nextSection : null
                })
            lastPage = section
        })
        return [tocSections, lastPage]
    }

    const [TOCSectionsOpen, setTOCSectionsOpen] = useState(initializeTOCSectionsOpen(documentation))
    const tableOfContents = buildTOC(documentation, TOCSectionsOpen, [], null)[0];

    const toggleSection = (sectionIndexList, currentIndex) => {
        const newOpens = updateSectionsOpen(TOCSectionsOpen, sectionIndexList, currentIndex)
        setTOCSectionsOpen(newOpens)
    }

    const updateSectionsOpen = (sections, sectionIndexList, currentIndex) => {
        return sections.map((section, index) => {
            if (index === sectionIndexList[currentIndex]) {
                if (currentIndex === sectionIndexList.length - 1) {
                    return {open: !section.open, subsections: section.subsections}
                } else {
                    return {
                        open: section.open,
                        subsections: updateSectionsOpen(section.subsections, sectionIndexList, currentIndex + 1)
                    };
                }
            } else {
                return section;
            }
        })
    }

    const findMatchingPage = (pageName, sections) => {
        for (let i in sections) {
            if (nameToPath(sections[i].name) === pageName) {
                return sections[i]
            }
            else if (sections[i].subsections) {
                const found = findMatchingPage(pageName, sections[i].subsections)
                if (found !== null) return found
            }
        }
        return null
    }

    const openTOCByPath = (sections, pathName) => {
        let openings = []
        for (let i in sections) {
            const section = sections[i]
            let shouldOpen = false;
            if (section.subsections) {
                for (let j in section.subsections) {
                    if (nameToPath(section.subsections[j].name) === pathName) {
                        shouldOpen = true;
                    }
                }
            }
            const subsectionsShould = section.subsections ? openTOCByPath(section.subsections, pathName) : null
            for (let j in subsectionsShould) {
                if (subsectionsShould[j].open) shouldOpen = true;
            }
            openings.push({open : shouldOpen, subsections: subsectionsShould})
        }
        return openings.length === 0 ? null : openings
    }

    const combineOpens = (opensOne, opensTwo) => (
        opensOne.map((ones, index) => ({open : ones.open || opensTwo[index].open,
                                        subsections : ones.subsections ? combineOpens(ones.subsections, opensTwo[index].subsections) : null}))
    )

    useEffect(() => {
        if (docView === null) {
            const desiredPage = findMatchingPage(page, documentation)
            if (desiredPage !== null) updateDocView(desiredPage)
            else updateDocView(documentation[0])
        } else {
            const pathName = nameToPath(docView.name)
            if (page !== pathName) {
                navigate(`/archive/documentation/${version}/${pathName}`);
            }
        }
    }, [docView])

    useEffect(() => {
        const opens = openTOCByPath(documentation, page)
        setTOCSectionsOpen(combineOpens(TOCSectionsOpen, opens))
        if (page === undefined) {
            navigate(`/archive/documentation/${version}/introduction`, {replace:true});
        } else {
            const desiredPage = findMatchingPage(page, documentation)
            if (desiredPage !== null) updateDocView(desiredPage)
        }
    }, [page])

    return (
        <div className={classes.mainBody}>
            {/*<Navigation pages={pages}/>*/}

            <div className={isMobile ? classes.archiveHeaderMobile : classes.archiveHeader}>
                {
                    isMobile ?
                        <div>
                            <h1>Archived Documentation</h1>
                            <h1>{matchingRelease.releaseName}</h1>
                        </div>
                        : <h1>Archived Documentation - {matchingRelease.releaseName}</h1>

            }

        </div>
    <div className={isMobile ? classes.documentationMainMobile : classes.documentationMain}>
                <div className={isMobile ? classes.hidden : classes.documentationNavbarContainer}>
                    <div className={classes.documentationNavbar}>
                        {tableOfContents.map((section) => section.tableEntry)}
                    </div>
                </div>
                <div className={isMobile ? classes.hidden : classes.documentationSeparator}/>

                <div className={showTOC ? classes.mobileNavMenu : classes.hidden}>
                    <div className={classes.mobileTocFlexColumn}>
                        <a className={classes.mobileHeaderMenuClose} onClick={() => {
                            setShowTOC(false)
                        }}>
                            <img className={classes.menuImage} src={xPng} alt={"Exit button"}/>
                        </a>
                        <div className={classes.mobileTocContainer}>
                            {tableOfContents.map((section) => section.tableEntry)}
                        </div>
                    </div>
                </div>
                <div className={isMobile ? classes.documentationToggleTOCMobile : classes.hidden}>
                    <a className={classes.toggleTOCButton} onClick={() => {
                        setShowTOC(true)
                    }}>View Table of Contents</a>
                </div>

                {
                    docView ?
                        <div ref={documentationContentWindow} className={classes.documentationContentContainer}>
                            <div className={classes.documentationContent}>
                                {docView.content}
                                <div className={isMobile ? classes.documentationAdjacentPageNavBarMobile : classes.documentationAdjacentPageNavBar}>
                                    {
                                        docView.previousPage ?
                                            <div onClick={() => {
                                                updateDocView(findMatchingPage(nameToPath(docView.previousPage), documentation))
                                            }} className={classes.documentationPrevPage}>
                                                <img className={classes.docNavArrowImage}
                                                     src={leftPng}
                                                     alt={"Expand or collapse current section"}/>
                                                <a className={classes.adjacentPageLabel}>{docView.previousPage}</a>
                                            </div> : null
                                    }
                                    {
                                        docView.nextPage ?
                                            <div onClick={() => {
                                                updateDocView(findMatchingPage(nameToPath(docView.nextPage), documentation))
                                            }} className={classes.documentationNextPage}>

                                                <a className={classes.adjacentPageLabel}>{docView.nextPage}</a>
                                                <img className={classes.docNavArrowImage}
                                                     src={rightPng}
                                                     alt={"Expand or collapse current section"}/>
                                            </div> : null
                                    }
                                </div>
                            </div>
                        </div>
                        : null
                }

                <div className={classes.documentationSeparatorTwo}></div>
            </div>
            <Footer override={{navFooter: {borderTopStyle: 'solid', borderTopWidth: '2px'}}}/>
        </div>

    )

}

const thisStyle = {
    archiveHeader : {
        textAlign: 'center',
        width : '100%',
        borderBottom : '2px solid white',
        padding : '1rem 2rem',
        '& h1' : {
            color : '#E80000',
            margin : '0.25rem'
        }
    },
    archiveHeaderMobile : {
        composes : "$archiveHeader",
        '& h1' : {
            fontSize : '1.6rem'
        }
    },
    mainBody: {
        maxHeight: '100vh'
    },
    documentationMain: {
        display: 'flex',
        flexDirection: 'row',
        height: '100%',
        width: '100%',
        flexGrow: 1,
        overflow: 'auto',
    },
    documentationMainMobile: {
        composes: '$documentationMain',
        flexDirection: 'column'
    },
    documentationNavbarContainer: {
        minWidth: '22rem',
        width: '23%',
        boxSizing: 'border-box',
        overflowY: 'auto',
        margin: '1em 0',
        '&::-webkit-scrollbar': {
            width: '6px',
            transform: 'translateX(-20px)'
        },
        '&::-webkit-scrollbar-thumb': {
            width: '5px',
            backgroundColor: colors.darkGray,
            padding: '5px',
            borderRadius: '3px'
        }
    },
    documentationContentContainer: {
        display : 'flex',
        flexDirection: 'column',
        minWidth: '0',
        width: '100%',
        composes: '$documentationNavbarContainer'
    },
    documentationNavbar: {
        padding: '0.25em 1em'
    },
    documentationSeparator: {
        marginLeft: '0.5em',
        borderRight: '2px solid white'
    },
    documentationSeparatorTwo: {
        marginLeft: '0.5em',
    },
    docNavSection: {
        display: 'inline-block',
        alignItems: 'center',
        fontWeight: 400,
        fontSize: '1.25em',
        padding: '0.4em .6em',
        flex: 1,
        maxWidth: 'auto',
        borderRadius: '.5em',
        color: colors.lightGray,

        '&:hover': {
            cursor: 'pointer',
            color: colors.mint,
            backgroundColor: colors.slate
        }
    },
    activeSection: {
        composes: '$docNavSection',
        color: colors.white
    },
    subsectionIndent: {
        marginLeft: '2rem'
    },
    documentationAdjacentPageNavBar : {
        display : 'flex',
        flexDirection : 'row',
        padding : '2rem 0rem'
    },
    documentationAdjacentPageNavBarMobile : {
        composes : '$documentationAdjacentPageNavBar',
        flexDirection : 'column',
        alignItems : 'center'
    },
    documentationPrevPage : {
        display : 'flex',
        flexDirection : 'row',
        alignItems: 'center',
        marginRight : 'auto',
        '&:hover' : {
            cursor: 'pointer',
            textDecoration: 'underline'
        }
    },
    documentationNextPage : {
        composes : `$documentationPrevPage`,
        marginLeft :  'auto',
        marginRight: '0'
    },
    adjacentPageLabel : {
        fontSize : '1.4rem'
    },
    docNavArrowImage : {
        height : '1.5rem',
        width : 'auto',
        margin : '1rem'
    },
    documentationContent: {
        boxSizing: "border-box",
        padding: '0 1.5em',
        fontSize: '1.1em',
        '& p': {
            margin: 0,
            marginBottom: '1rem',
        },
        '& li' : {
            margin : '0.25rem 0 '
        },
        '& p code, & li code, & h2 code, & h3 code': {
            display: 'inline',
            whiteSpace: 'normal',
            backgroundColor: colors.slate,
            padding: '2px 4px',
            borderRadius: '4px',
            margin: '2px 0'
        },
        '& h1': {
            margin: `1rem 0`
        },
        '& h2': {
            margin: 0,
            marginBottom: '1rem',
            marginTop: '2rem'
        },
        '& p a': {
            color: colors.mint,
            textDecoration: 'none',
            '&:hover': {
                cursor: 'pointer',
                textDecoration: 'underline'
            }
        },
        '& code': {
            display: 'block',
            margin: '2rem 0',
            backgroundColor: colors.slate,
            padding: '0.75em 1em',
            borderRadius: '4px',
            whiteSpace: 'pre',
            lineHeight: '1.5em',
            overflowX: 'auto',
            '&::-webkit-scrollbar': {
                height: '6px',
                transform: 'translateX(-20px)',
                backgroundColor: colors.darkGray,
                borderRadius: '3px'
            },
            '&::-webkit-scrollbar-thumb': {
                height: '5px',
                backgroundColor: colors.lightGray,
                padding: '5px',
                borderRadius: '3px'
            }
        }
    },
    sectionContainer: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '0.5em',
    },
    docNavSubsectionToggle: {
        marginLeft: 'auto'
    },
    docNavSubsectionToggleImage: {
        height: '1.5rem',
        padding: '0rem',
        marginLeft: '1rem',
        '&:hover': {
            cursor: 'pointer'
        }
    },
    documentationToggleTOCMobile: {
        fontSize: '1.2rem',
        padding: '1.25rem',
        textAlign: 'center',
        borderBottom: '2px solid white'
    },

    toggleTOCButton: {
        border: '1px solid white',
        borderRadius: '0.4rem',
        padding: '0.4rem 0.8rem',
        '&:hover': {
            'cursor': 'pointer',
            'color': colors.mint,
            borderColor: colors.mint
        }
    },
    mobileHeaderMenuClose: {
        display: 'block',
        margin: '1rem',
        marginLeft: 'auto',
        marginRight: '1.5rem',
        marginTop: '1.5rem',
        height: '3rem',
        width: '3rem',
        '&:hover': {
            cursor: 'pointer'
        }
    },
    menuImage: {
        width: '100%',
    },
    mobileNavMenu: {
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        backgroundColor: '#000000F6'
    },
    mobileTocContainer: {
        height: '100%',
        padding: '0 2rem',
        overflowY: 'auto',
        marginBottom: '1.5rem',
        '&::-webkit-scrollbar': {
            width: '6px',
            transform: 'translateX(-20px)'
        },
        '&::-webkit-scrollbar-thumb': {
            width: '5px',
            backgroundColor: colors.darkGray,
            padding: '5px',
            borderRadius: '3px'
        }
    },
    mobileTocFlexColumn: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
    }
}

export default Documentation;