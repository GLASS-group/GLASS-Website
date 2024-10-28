import HorizontalBreak from '../templates/HorizontalBreak';

const tab = '    '

const lineBreak = <HorizontalBreak style={{horizontalBreak : {maxWidth : '45rem', margin : '2rem 0', borderBottom :'4px dotted white'}}}/>

export const documentation = [
    {
        sectionName : "Getting Started",
        content :
            <div>
                <h1>
                    Getting Started
                </h1>
                {lineBreak}
                <h2>Welcome!</h2>
                <p>
                    Welcome to the GLASS documentation. you can use the navigation panel on the left (viewable by clicking the <code>View Table of Contents</code> button in
                    mobile view) to access the various sections of this documentation.
                </p>
                <p>
                    Some sections of the documentation have subsections, which are accessible in the table of contents by clicking the <code>+</code> next to the corresponding
                    section name.
                </p>
                <h2>Tutorial: Building your first GLASS language</h2>
                <p>
                    Some pages of this documentation contain sections with this same name as this one. These sections provide a step-by-step guide to creating your first syntax
                    definition and interpretation script using GLASS to evaluate simple mathematical expressions.
                </p>
                <p>
                    If it is your first time using GLASS, we encourage you to follow along with these sections!
                </p>
            </div>
    },
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
                    The most recent version of GLASS (as well as all previous versions) can be found on
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
                    The GLASS .jar file can be ran by executing the following command within the GLASS installation directory:
                </p>
                <code>
                    java -jar GLASS-0.1.0a.jar
                </code>
                <p>
                    Please note that in the above command, <code>GLASS-0.1.0a.jar</code> should be replace with the name
                    of the appropriate .jar file for your installed version of GLASS.
                </p>
            </div>
    },
    {
        sectionName: "Syntax Definition",
        content:
            <div>
                <h1>Syntax Definition</h1>
                {lineBreak}
                <h2>What is a syntax definition?</h2>
                <p>
                    A syntax definition is a set of named regex patterns and grammar productions which are used to understand the structure of a file that you would like to parse using the GLASS system. If
                    concepts such as "regex patterns" and "grammar productions" are entirely new to you, no worries! This section will provide an small description of these concepts, as well as providing
                    resources for learning more about them.
                </p>
                <p>
                    Before continuing, please make sure you have downloaded GLASS and its dependancies. To understand how to install GLASS, please see Section 2.0 of this documentation.
                </p>
                <h2>Tutorial: Building your first GLASS language</h2>
                <p>
                    To begin using GLASS, we must first create a file where we will write our syntax definition. Within the folder containing the GLASS .jar file, create a file named <code>expression.syntax</code>.
                </p>
                <p>
                    <em>If you are unable to change the file extension when renaming the file, you may need to change your system settings to show file extensions. On Windows, this can be done by enabling the
                        "Show file extensions" option in Settings.</em>
                </p>
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
                            Syntax definition files are files which are given to GLASS as input. These files contain the a series of token and production declarations which define the syntax of a file you wish to parse.
                            These files typically have the file extension <code>.syntax</code>, though this is not a requirement.
                        </p>
                        <p>
                            Syntax definition files are made up of three major parts:
                        </p>
                        <ul>
                            <li>
                                An optional name, which defines the name of the syntax you are defining (Naming the syntax may be useful for debugging purposes).
                            </li>
                            <li>
                                A token block, where the tokens that appear in your syntax are defined.
                            </li>
                            <li>
                                A production block, where the grammar productions that define your syntax structure are defined.
                            </li>
                        </ul>
                        <p>
                            All three of the above fields must be written in the <code>.syntax</code> file in the order they are listed above. Below is an example of how these blocks would appear in a .syntax file:
                        </p>
                        <code>
                            name My_Syntax # This field is optional<br/>
                            <br/>
                            tokens &#123;<br/>
                            {tab}# Tokens are defined within this block<br/>
                            &#125;<br/>
                            <br/>
                            productions &#123;<br/>
                            {tab}# Grammar productions are defined within this block<br/>
                            &#125;<br/>
                        </code>
                        <h2>Tutorial: Building your first GLASS language</h2>
                        <p>
                            Within the <code>expression.syntax</code> file you have created, copy and paste the code template above. You may remove the comments (All <code>#</code> followed by some text) and change
                            the name of the syntax definition to <code>Expression_Syntax</code>. When you are done, your <code>expression.syntax</code> file should look like this:
                        </p>
                        <code>
                            name Expression_Syntax<br/>
                            <br/>
                            tokens &#123;<br/>
                            <br/>
                            &#125;<br/>
                            <br/>
                            productions &#123;<br/>
                            <br/>
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
        sectionName : "Interpretation Script",
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
    }
]

export default documentation;