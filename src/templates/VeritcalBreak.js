import React from 'react';
import { createUseStyles } from 'react-jss';
import { mergeJson } from './MergeJson';

function VerticalBreak({style}) {

    const styles = createUseStyles(style ? mergeJson(defaultStyleDefs, style) : defaultStyleDefs)();

    return (
        <div className={styles.verticalBreak}/>
    )
}

export default VerticalBreak;

const defaultStyleDefs = {
    verticalBreak : {
        margin : '0rem 2rem',
        padding : 0,
        height : '85%',
        borderRight : '1px solid lightGray',
        display : 'flex'
    }
}