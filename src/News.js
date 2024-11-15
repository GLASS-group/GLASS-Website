import articles from "./consts/news/Articles";
import {style, colors} from "./consts/Style";
import {NavbarHeader} from "./consts/NavbarPages";
import Footer from './Footer';

import { createUseStyles } from "react-jss";
import {mergeJson} from "./templates/MergeJson";
import {useEffect, useState} from "react";
import xPng from "./images/x.png";
import useMobile from "./templates/Mobile";
import {useNavigate, useParams} from "react-router";

function News() {
    const classes = createUseStyles(mergeJson(style, thisStyle))();
    const isMobile = useMobile();
    const [showArticle, setShowArticle] = useState(undefined);
    const {articleId} = useParams()
    const navigate = useNavigate();


    useEffect(() => {
        if (articleId) {
            const found = articles.find((article) => article.path === articleId)
            if (found) {
                if (found !== showArticle) {
                    setShowArticle(found)
                }
            } else {
                setShowArticle(null)
            }
        } else {
            setShowArticle(null);
        }
    }, [articleId]);

    useEffect(() => {
        if (showArticle !== undefined) {
            if (showArticle) {
                if (articleId !== showArticle.path) {
                    console.log(1)
                    navigate(`/news/${showArticle.path}`);
                }
            } else {
                if (articleId) {
                    console.log(2)
                    navigate(`/news`, {replace: !articleId});
                }
            }
        }
    }, [showArticle]);

    return (
        <div className={classes.mainBody}>
            <NavbarHeader/>
            <article className={classes.pageContent}>
                <h1 className={classes.pageContentHeader}>News</h1>

                {
                    showArticle ?
                        <div className={classes.articleOverlay}>
                            <div className={isMobile ? classes.fullArticleCardMobile : classes.fullArticleCard}>
                                <div className={classes.closeOverlayRow}>
                                    <h1>{showArticle.title}</h1>
                                    <a className={classes.closeOverlayButton} onClick={() => setShowArticle(null)}>
                                        <img className={classes.closeOverlayIcon} src={xPng}/>
                                    </a>
                                </div>
                                <div className={classes.articleContent}>
                                    <h2>Published on: {showArticle.publishDate}</h2>
                                    <div>{showArticle.article}</div>
                                </div>
                            </div>
                        </div>
                    : null
                }

                {
                    articles.map((article) =>
                        <div className={isMobile ?classes.articleCardMobile : classes.articleCard} onClick={() => setShowArticle(article)}>
                            <div>
                                <h1>{article.title}</h1>
                                <h2>Published on: {article.publishDate}</h2>
                                <p>{article.summary}</p>
                            </div>
                            {article.thumbnailImage ? <img src={article.thumbnailImage}/> : null}
                        </div>
                    )
                }
            </article>
            <Footer/>
        </div>
    )
}

const thisStyle = {
    articleCard : {
        display : 'flex',
        flexDirection: 'row',
        width : "80%",
        minWidth : '55rem',
        textAlign: 'left',
        padding : '2.25rem',
        boxSizing: 'border-box',
        height : '16rem',
        backgroundColor : colors.slate,
        borderRadius : '0.5rem',
        transition : 'background-color .2s ease-in-out',
        margin : '2rem 0',
        '&:hover': {
            backgroundColor: colors.coolBlue,
            cursor : 'pointer',
        },
        '& h1' : {
            margin : 0,
            fontSize : '2rem'
        },
        '& h2' : {
            fontSize : '1.25rem',
            margin : '0.75rem 0',
            fontWeight : 400
        },
        '& img' : {
            marginLeft : 'auto',
            paddingLeft : '2.25rem',
            height : '100%',
            width : 'auto'
        }
    },
    articleCardMobile : {
        composes : '$articleCard',
        minWidth : '0',
        width : '120%',
        flexDirection : 'column',
        height : 'auto',
        '& img' : {
            marginTop : '0rem',
            height : 'auto',
            padding : '0',
            width : '40%',
            maxWidth : '12rem'
        }
    },
    articleOverlay : {
        position: 'fixed',
        display : 'flex',
        alignItems : 'center',
        justifyContent : 'center',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        boxSizing: 'border-box',
        backgroundColor: colors.subtleOverlayBackground,
        animationDuration : '0.15s',
        animationTimingFunction : 'ease-in',
        animationName : '$open',
    },

    '@keyframes open' : {
        from : {
            opacity : '0'
        },
        to : {
            opacity: '1'
        }
    },

    '@keyframes zoomOpen' : {
        from : {
            scale : '0.85',
            opacity : '0'
        },
        to : {
            scale : '1',
            opacity: '1'
        }
    },

    fullArticleCard : {
        position : 'fixed',
        display : 'flex',
        flexDirection : 'column',
        backgroundColor : colors.slate,
        borderRadius : '0.5rem',
        padding : '1rem 1rem',
        boxSizing: 'border-box',
        width : '80%',
        height : '90%',
        '& h1' : {
            margin : 0,
            marginLeft : '1rem',
            marginRight : '1.5rem',
            fontSize : '2.5rem'
        },
        '& h2' : {
            fontSize : '1.5rem',
            margin : '0 0 1.5rem 0',
            fontWeight : 400
        },
        '& h3' : {
            fontSize : '1.5rem',
            margin : '0',
            fontWeight : 400
        },
        '& h4' : {
            fontSize : '1.1rem',
            marginTop : '4rem',
            marginBottom : '0.75rem',
            fontWeight : 400
        },
        '& p' : {
            fontSize : '1.1rem'
        },
        '& h5' : {
            display : 'inline-block',
            marginTop : '0.5rem',
            fontSize : '1rem',
            fontWeight : 400,
            fontStyle : 'italic'
        },
        animationDuration : '0.15s',
        animationTimingFunction : 'ease-in',
        animationName : '$zoomOpen',
    },
    fullArticleCardMobile :  {
        composes : '$fullArticleCard',
        width : '90%',
        height : '90%',
        '& h1' : {
            fontSize : '2rem',
        }
    },
    closeOverlayRow : {
        width : '100%',
        display : 'flex',
    },
    closeOverlayButton: {
        display: 'inline-block',
        padding: '0rem',
        marginLeft : 'auto',
        height: '3rem',
        width: '3rem',
        '&:hover': {
            cursor: 'pointer'
        }
    },
    closeOverlayIcon : {
        width : '100%'
    },
    articleContent : {
        width : '100%',
        height : '100%',
        marginTop : '1rem',
        overflowY : 'auto',
        textAlign: 'left',
        padding : '0 1rem',
        boxSizing : 'border-box',
        '&::-webkit-scrollbar': {
            width: '6px',
            transform: 'translateX(-20px)'
        },
        '&::-webkit-scrollbar-thumb': {
            width: '5px',
            backgroundColor: colors.lightGray,
            padding: '5px',
            borderRadius: '3px'
        }
    }
}

export default News;