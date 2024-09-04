import Construction from "./Construction";
import {colors, style} from "./consts/Style";
import { firstSemesterFileLinks, secondSemesterFileLinks } from './consts/Files';
import { Link } from "react-router-dom";

import { createUseStyles } from "react-jss";

const specificStyle = {
    subtitle: {
        composes: '$globalFontSize',
        fontWeight: 300,
        fontSize: '1.2em',
        marginTop: '0.75em'
    },
    minisection: {
        composes: '$globalFontSize',
        marginTop: '2.5em'
    },
    subheader: {
        composes: '$globalFontSize',
        marginBottom : '0.8em',
        fontSize: '1.5em'
    },
    text: {
        composes: '$globalFontSize',
        margin: 0
    },
    cardHeader: {
        composes: '$globalFontSize',
        fontSize: '1.5em',
        margin: 0
    },
    fileLinkButton: {
        composes: '$globalFontSize',
        display: 'inline-block',
        padding: '0.4em 1em',
        margin: '1em 1em 0em 1em',
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
        },
        '@media screen and (max-width: 1000px)': {
            '&:hover': {
                transform: 'translateY(0)',
            }
        }
    }
}


                                                            

function ProjectMaterials() {
    const classes = createUseStyles(style)();
    const specificClasses = createUseStyles(specificStyle)();
    return(
        <article className={classes.pageContent}>
            <div className={classes.contentSubsection}>
                <h1 className={classes.mainHeader}>Project Name: GLASS</h1>
                <p className={specificClasses.subtitle}>Generalized Language Abstraction and Specification System</p>
                <div className={specificClasses.minisection}>
                    <h3 className={specificClasses.subheader}>Team Members</h3>
                    <p className={specificClasses.text}>Tommy Galletta</p>
                    <p className={specificClasses.text}>(tommy.tpg03@gmail.com)</p>
                    <p className={specificClasses.text}>Alexander Lockard</p>
                    <p className={specificClasses.text}>(alockard2022@my.fit.edu)</p>
                </div>
                <div className={specificClasses.minisection}>
                    <h3 className={specificClasses.subheader}>Falcuty Advisor</h3>
                    <p className={specificClasses.text}>Dr. Ryan Stansifer</p>
                </div>
            </div>
            <div className={classes.contentSubsection}>
                <div className={classes.generalFlexColumn}>

                    <h1 className={classes.mainHeader}>First Semester</h1>
                    {
                        firstSemesterFileLinks.map((fileCard) => (
                            <div className={classes.contentCard}>
                                <h3 className={specificClasses.cardHeader}>{fileCard.cardName}</h3>
                                <p>{fileCard.dueDate}</p>
                                {
                                    fileCard.links.map((link) => (
                                        <a className={specificClasses.fileLinkButton} href={link.href}>{link.name}</a>
                                    ))
                                }
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className={classes.finalContentSubsection}>
                <div className={classes.generalFlexColumn}>

                    <h1 className={classes.mainHeader}>Second Semester</h1>
                    {
                        secondSemesterFileLinks.map((fileCard) => (
                            <div className={classes.contentCard}>
                                <h3 className={specificClasses.cardHeader}>{fileCard.cardName}</h3>
                                <p>{fileCard.dueDate}</p>
                                {
                                    fileCard.links.map((link) => (
                                        <a className={specificClasses.fileLinkButton} href={link.href}>{link.name}</a>
                                    ))
                                }
                            </div>
                        ))
                    }
                </div>
            </div>
        </article>
    )
}
export default ProjectMaterials;