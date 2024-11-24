import Glass0_1_0a from '../releases/GLASS-0.1.0a.zip'
import Glass0_2_0a from '../releases/GLASS-0.2.0a.zip'
import Glass0_3_0a from '../releases/GLASS-0.3.0a.zip'
import patchNotes_0_3_0a from '../releases/patch-notes/0.3.0a-patch-notes.txt'
import patchNotes_0_2_0a from '../releases/patch-notes/0.2.0a-patch-notes.txt'
import patchNotes_0_1_0a from '../releases/patch-notes/0.1.0a-patch-notes.txt'

import documentation_0_1_0a from './documentation/Documentation-0.1.0a'
import documentation_0_2_0a from './documentation/Documentation-0.2.0a'
import documentation_0_3_0a from './documentation/Documentation-0.3.0a'

export const releases = [
    {
        releaseName : "Alpha 0.3.0",
        releaseDate : 'November 24th, 2024',
        fileName : "GLASS-0.3.0a.zip",
        filePath : Glass0_3_0a,
        releaseNotes :
            <ul>
                <li>Several new functions are now available for Strings</li>
                <li>Token names are no longer case-insensitive</li>
                <li>Many GUI ease of use additions and small fixes</li>
                <li>Several bug fixes</li>
            </ul>,
        patchNotesPath: patchNotes_0_3_0a,
        patchNotesName : "0.3.0a-patch-notes.txt",
        relatedDocumentation : documentation_0_3_0a,
        documentationPath : '0-3-0a'
    },
    {
        releaseName : "Alpha 0.2.0",
        releaseDate : 'November 17th, 2024',
        fileName : "GLASS-0.2.0a.zip",
        filePath : Glass0_2_0a,
        releaseNotes :
            <ul>
                <li>Added several new command line arguments aimed at automation</li>
                <li>Interpretation script:</li>
                <ul>
                    <li>Added while loops</li>
                    <li>Added scope for variables</li>
                    <li>Added several new functions for type casting, user input, etc.</li>
                    <li>Added support for arrays and several other data types</li>
                    <li>Added support for floating point numbers</li>
                    <li>Added the ability to define custom functions</li>
                    <li>Changed some existing interpretation script features</li>
                </ul>
                <li>Several bug fixes</li>
            </ul>,
        patchNotesPath: patchNotes_0_2_0a,
        patchNotesName : "0.2.0a-patch-notes.txt",
        relatedDocumentation : documentation_0_2_0a,
        documentationPath : '0-2-0a'
    },
    { 
        releaseName : "Alpha 0.1.0",
        releaseDate : 'October 28th, 2024',
        fileName : "GLASS-0.1.0a.zip",
        filePath : Glass0_1_0a,
        releaseNotes : 
        <ul>
            <li>First alpha release</li>
        </ul>,
        patchNotesPath: patchNotes_0_1_0a,
        patchNotesName : "0.1.0a-patch-notes.txt",
        relatedDocumentation : documentation_0_1_0a,
        documentationPath : '0-1-0a'
    }
]

