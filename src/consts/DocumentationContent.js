import HorizontalBreak from '../templates/HorizontalBreak';

const tab = '    '

const lineBreak = <HorizontalBreak style={{horizontalBreak : {maxWidth : '45rem', margin : '2rem 0', borderBottom :'4px dotted white'}}}/>

export const documentation = [
    {
        sectionName : "Installation",
        content :
            <div>
                <h1>
                    Installation
                </h1>
                {lineBreak}
                <h2>Where can I download GLASS?</h2>
                <p>
                    The most recent version (as well as all previous versions) of GLASS can be found on
                    our <a href="https://glass-project.com/download">download page</a>.
                </p>
                <h2>What do I need to run GLASS?</h2>
                <p>
                    Along with the GLASS installation, Java is required in order to run the JAR file located within
                    the GLASS installation folder.
                </p>
                <p>
                    GLASS has been built using <a href="https://www.oracle.com/java/technologies/javase/jdk20-archive-downloads.html">Java 20</a>. It is recommended that GLASS is run with this same version of
                    Java, however, newer versions of Java should almost certainly be able to run it. Older versions of Java may be able to run GLASS as well.
                </p>
                <h2>How do I run GLASS?</h2>
                <p>
                    The GLASS JAR can be ran by executing the following command within the GLASS installation directory:
                </p>
                <code>
                    java -jar GLASS-0.1.0a.jar
                </code>
                <p>Please note that in the above command, <code>GLASS-0.1.0a.jar</code> should be replace with the name
                    of the appropriate JAR file for your installed version of GLASS.</p>
            </div>
    },
    {
        sectionName: "Syntax Definition",
        content:
            <div>
                <h1>Syntax Definition</h1>
                {lineBreak}
            </div>,
        subsections: [
            {
                subsectionName : "Syntax Definition Files",
                content : 
                    <div>
                        <h1>Syntax Definition Files</h1>
                        {lineBreak}
                        <h2>What are syntax definition files?</h2>
                        <p>
                            Syntax definition files are used to define the syntax of the grammar you wish to parse by declaring and defining tokens and productions.
                        </p>
                        <p>
                            Syntax definition files (extension .syntax) are made up of three major parts:
                        </p>
                        <ul>
                            <li>
                                An optional settings block, for changing settings related to how the grammar is parsed
                            </li>
                            <li>
                                A token block, where tokens are defined with a name and a regex pattern.
                            </li>
                            <li>
                                A production block, where grammar productions are defined in a BNF-like format.
                            </li>
                        </ul>
                        <p>
                            All three of the above blocks must be written in the .syntax file in the order they are listed above. Below is an example of how these blocks would appear in a .syntax file:
                        </p>
                        <code>
                            settings &#123;<br/>
                            {tab}# Settings can be set within this block<br/>
                            &#125;<br/>
                            tokens &#123;<br/>
                            {tab}# Tokens are defined within this block<br/>
                            &#125;<br/>
                            productions &#123;<br/>
                            {tab}# Grammar productions are defined within this block<br/>
                            &#125;<br/>
                        </code>
                    </div>
            },
            {
                subsectionName : "Tokens",
                content : 
                    <div>
                        <h1>Tokens</h1>
                        {lineBreak}
                        <h2>Declaring Tokens</h2>
                        <p>
                        Tokens are declared within the token block of the syntax definition file, can be of two types:
                        </p>
                        <ul>
                            <li>Visible tokens: These are tokens that are a part of the structure of the grammar. Most tokens are visible tokens.</li>
                            <li>Invisible tokens: These are tokens that may be within a source file, but do not contribute to the structure of the grammar itself. Whitespace and comments are common examples of tokens that could be considered “invisible”.</li>
                        </ul>
                        <p>
                            Single-line token declarations follow the following format:
                        </p>
                        <code>[token_visibility] [token_name] : /[token_regex]/</code>
                        <p>
                            Token visibility will be either the keyword visible or invisible depending on the type of the token you wish to declare.
                        </p>
                        <p>
                            Token name is the name that will be used to refer to this token in the future. All token names must start with a letter, and can be followed by a sequence of letters and underscores. Token names must be unique across all tokens and are case insensitive (i.e. <code>apple</code> and <code>APPLE</code> are considered the same token name).
                        </p>
                        <p>
                            Some examples of valid token names are:
                        </p>
                        <ul>
                            <li><code>IF</code></li>
                            <li><code>ELSE</code></li>
                            <li><code>GREATER_THAN</code></li>
                            <li><code>X</code></li>
                            <li><code>A_</code></li>
                            <li><code>VALID_TOKEN_NAME</code></li>
                        </ul>
                        <p>
                            Some examples of invalid  token names are:
                        </p>
                        <ul>
                            <li><code>_TEST</code></li>
                            <li><code>_A</code></li>
                            <li><code>TOKEN123</code></li>
                            <li><code>42_WALLABY_WAY</code></li>
                        </ul>
                        <p>
                            Keep in mind that the following token names are reserved:
                        </p>
                        <ul>
                            <li><code>EPSILON</code> (reserved for the empty string, for use in productions)</li>
                            <li><code>EOF</code> (reserved for the end of file character)</li>
                            <li><code>WHITESPACE</code>  (reserved for all whitespace)</li>
                            <li><code>INLINE_WHITESPACE</code>  (reserved for tabs and spaces)</li>
                        </ul>
                        <h2>Token Regex</h2>
                        <p>
                            Token regex is simply a regex pattern that will be used to identify whether or not some input matches a given token.
                        </p>
                        <p>
                            For example, in the following token declaration:
                        </p>
                        <code>
                            visible A_SEQUENCE = /a+/
                        </code>
                        <p>
                            States that any string that contains a series of a's (i.e. <code>aaaaa</code>) could be considered to be an <code>A_SEQUENCE</code> token.
                        </p>
                        <p>
                            Alternatively, tokens of the same type (<code>visible</code> or <code>invisible</code>) can be declared within a block, where the type only needs to be typed once, as shown below:
                        </p>
                        <code>
                        visible &#123;<br/>
                        {tab}FRUIT_ONE: /apple/<br/>
                        {tab}FRUIT_TWO: /banana/<br/>
                        {tab}FRUIT_THREE: /cherry/<br/>
                        &#125;
                        </code>
                    </div>
            },
            {
                subsectionName : "Productions",
                content : 
                    <div>
                        <h1>Productions</h1>
                        {lineBreak}

                    </div>
            }
        ]
    },
    {
        sectionName : "Test Section",
        content : 
            <div>
                Test section 3 content
            </div>,
        subsections : [
            {
                subsectionName : "Test Subsection",
                content : 
                    <div>
                        Test subsection 3.1 content
                    </div>
            },
            {
                subsectionName : "Test Subsection",
                content : 
                    <div>
                        Test subsection 3.2 content
                    </div>
            },
            {
                subsectionName : "Test Subsection",
                content : 
                    <div>
                        Test subsection 3.3 content
                    </div>
            }
        ]
    },
    {
        sectionName : "Test Section",
        content : 
            <div>
                Test section 4 content
            </div>,
        subsections : [
            {
                subsectionName : "Test Subsection",
                content : 
                    <div>
                        Test subsection 4.1 content
                    </div>
            },
            {
                subsectionName : "Test Subsection",
                content : 
                    <div>
                        Test subsection 4.2 content
                    </div>
            },
            {
                subsectionName : "Test Subsection",
                content : 
                    <div>
                        Test subsection 4.3 content
                    </div>
            }
        ]
    }
]

export default documentation;