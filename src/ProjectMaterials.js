import {colors, style} from "./consts/Style";
import { projectMaterialBreakdown } from './consts/Files';
import {mergeJson} from "./templates/MergeJson";
import {NavbarHeader} from "./consts/NavbarPages";
import Footer from './Footer';
import HorizontalBreak from "./templates/HorizontalBreak";
import { createUseStyles } from "react-jss";
import useMobile from "./templates/Mobile";


function ProjectMaterials() {
    const classes = createUseStyles(mergeJson(style, thisStyle))();

    const isMobile = useMobile();

    return(
        <div className={classes.mainBody}>
            <NavbarHeader/>
            <article className={isMobile ? classes.pageContentMobile : classes.pageContent}>
                <div className={classes.contentSection}>
                    <h1>Project Name: GLASS</h1>
                    <h2>Generalized Language Abstraction and Scripting System</h2>
                    <h3 className={classes.subheader}>Team Members</h3>
                    <p>Tommy Galletta</p>
                    <p>(tommy.tpg03@gmail.com)</p>
                    <p>Alexander Lockard</p>
                    <p>(alockard2022@my.fit.edu)</p>
                    <h3 className={classes.subheader}>Faculty Advisor</h3>
                    <p className={classes.text}>Dr. Ryan Stansifer</p>
                </div>
                {
                    projectMaterialBreakdown.map((section) =>
                        <div className={classes.contentSection}>
                            <HorizontalBreak style={{horizontalBreak : {width:"100%", margin:'0rem 0 2.5rem 0', borderBottom :'1px solid white'}}}/>
                                <div className={classes.generalFlexColumn}>
                                    <h1>{section.title}</h1>
                                    <div className={classes.materialCardContainer}>
                                        {
                                            section.milestoneFiles.map((fileCard) =>
                                                <div className={isMobile ? classes.materialsCardMobile : classes.materialsCard}>
                                                    <h3>{fileCard.cardName}</h3>
                                                    <p>{fileCard.dueDate}</p>
                                                    <div className={classes.paddedLinkContainer}>
                                                        <div className={classes.padding}/>
                                                        <div className={classes.materialLinkContainer}>
                                                            {
                                                                fileCard.links.map((link) => (
                                                                    <a href={link.href}>{link.name}</a>
                                                                ))
                                                            }
                                                        </div>
                                                        <div className={classes.padding}/>
                                                    </div>
                                                </div>
                                            )
                                        }
                                    </div>
                            </div>
                        </div>
                    )
                }
            </article>
            <Footer/>
        </div>
    )
}

export default ProjectMaterials;

const thisStyle = {
    cardHeader: {
        fontSize: '1.5em',
        margin: 0
    },
    materialCardContainer : {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        width : '100%',
        justifyContent: 'center',
    },
    materialsCard : {
        composes: '$globalFontSize',
        display : 'flex',
        flexDirection: 'column',
        backgroundColor: colors.slate,
        boxSizing: 'border-box',
        borderRadius: '1em',
        margin: '2.5rem 1rem 0 1rem',
        padding: '1.5rem',
        width: '45%',
        height : 'auto',
        '& h3' : {
            margin : 0
        },
        '& p' : {
            margin : '1rem 0'
        },
        '& a' : {
            display: 'inline-block',
            height : '1.4rem',
            boxSizing: 'content-box',
            padding: '0.4em 1em',
            margin: '0.5rem 1rem',
            color: colors.white,
            textDecoration: 'none',
            border: 'solid',
            borderRadius: '0.5em',
            borderWidth: '1px',
            transition: 'transform 0.1s, color .1s',
            '&:hover': {
                cursor: 'pointer',
                transform: 'translateY(-0.15em)',
                color: colors.mint
            }
        }
    },
    materialsCardMobile : {
        composes: '$materialsCard',
        width : '100%',
        '& a' : {
            '&:hover': {
                transform: 'translateY(0)',
            }
        }
    },
    paddedLinkContainer: {
        display :'flex',
        flexDirection : 'column',
        flexGrow : 1
    },
    padding : {
        display : 'block',
        flexGrow: 1
    },
    materialLinkContainer : {
        padding : 'auto 0',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center'
    }
}