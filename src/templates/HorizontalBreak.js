import React from 'react';
import { createUseStyles } from 'react-jss';
import { mergeJson } from './MergeJson';

function HorizontalBreak({style}) {

    const styles = createUseStyles(style ? mergeJson(defaultStyleDefs, style) : defaultStyleDefs)();

    return (
        <div className={styles.horizontalBreak}></div>
    )
}

export default HorizontalBreak;

const defaultStyleDefs = {
    horizontalBreak : {
        margin : '2rem 0rem',
        padding : 0,
        width : '100%',
        borderBottom : '1px solid lightGray'
    }
}