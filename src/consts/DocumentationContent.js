import HorizontalBreak from '../templates/HorizontalBreak';

const tab = '    '

const lineBreak = <HorizontalBreak style={{horizontalBreak : {maxWidth : '45rem', margin : '2rem 0', borderBottom :'4px dotted white'}}}/>

export const documentation = [
    {
        name : "Introduction",
        content :
            <div>
                <h1>
                    Introduction
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
        name : "Getting Started",
        content :
            <div>
                <h1>
                    Getting Started
                </h1>
                {lineBreak}
                <h2>What is GLASS?</h2>
                <p>
                    The Generalized Language Abstraction and Scripting System, or GLASS, is a combined parser generator and interpreter tool for creating and interpreting
                    user-defined syntaxes.
                </p>
                <h2>How do I use GLASS?</h2>
                <p>
                    GLASS is packaged as an executable <code>.jar</code> file that can be run in the command line. When it is run, it requires a series of inputs:
                    <ul>
                        <li>A <em>syntax definition file</em>, which defines the syntax of some source file.</li>
                        <li>A <em>source file</em>, which is written in the syntax defined in the provided syntax definition file.</li>
                        <li>An <em>interpretation script file</em>, which describes how to interpret the parsed contents of the source file.</li>
                    </ul>
                    The documentation that follows describes how to create each of these files.
                </p>
                <p>
                    For the sake of clarity, the terms <em>syntax definition</em>, <em>source file</em>, and <em>interpretation script</em> will be used throughout the rest
                    of this documentation to refer to these different files.
                </p>
            </div>
    },
    {
        name : "Installation",
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
                    The GLASS <code>.jar</code> file can be ran by executing the following command within the GLASS installation directory:
                </p>
                <code>
                    java -jar GLASS-0.1.0a.jar
                </code>
                <p>
                    Please note that in the above command, <code>GLASS-0.1.0a.jar</code> should be replace with the name
                    of the appropriate <code>.jar</code> file for your installed version of GLASS.
                </p>
            </div>
    },
    {
        name: "Syntax Definition",
        content:
            <div>
                <h1>Syntax Definition</h1>
                {lineBreak}
                <h2>What is a syntax definition?</h2>
                <p>
                    A syntax definition is a set of named regex patterns and grammar productions which are used to understand the structure of a source file. If
                    concepts such as "regex patterns" and "grammar productions" are entirely new to you, no worries! This section will provide an small description of these concepts, as well as providing
                    resources for learning more about them.
                </p>
                <p>
                    Before continuing, please make sure you have downloaded GLASS and its dependancies. To understand how to install GLASS, please see Section 2.0 of this documentation.
                </p>
                <h2>Tutorial: Building your first GLASS language</h2>
                <p>
                    To begin using GLASS, we must first create the file where we will write our syntax definition. Within the folder containing the GLASS <code>.jar</code> file, create a file named <code>expression.syntax</code>.
                </p>
                <p>
                    <em>If you are unable to change the file extension when renaming the file, you may need to change your system settings to show file extensions. On Windows, this can be done by enabling the
                        "Show file extensions" option in Settings.</em>
                </p>
            </div>,
        subsections: [
            {
                name : "Syntax Definition Files",
                content : 
                    <div>
                        <h1>Syntax Definition Files</h1>
                        {lineBreak}
                        <h2>What are syntax definition files?</h2>
                        <p>
                            Syntax definition files are files which contain a series of token and production declarations which define the
                            syntax of a source file. These files typically have the file extension <code>.syntax</code>, though this is not a requirement.
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
                            All three of the above fields must be written in the <code>.syntax</code> file in the order they are listed above. Below is an example of how these blocks would appear in a <code>.syntax</code> file:
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
                name : "Tokens",
                content : 
                    <div>
                        <h1>Tokens</h1>
                        {lineBreak}
                        <h2>What are tokens?</h2>
                        <p>
                            Tokens are the individual strings of characters (usually words, numbers, or symbols) that can appear in your syntax. The first step in the GLASS pipeline is lexing the source file, or in simpler terms, splitting up the source file into
                            the individual tokens that appear in the file. Therefore, it is important that any possible string that may appear in your source file is declared as a token in your syntax definition.
                        </p>
                        <h2>Declaring tokens</h2>
                        <p>
                            Tokens are declared within the token block of the syntax definition file, and can be of two types:
                        </p>
                        <ul>
                            <li>Active tokens: These are tokens that are a part of the structure of the grammar. Most tokens are active tokens.</li>
                            <li>Ignored tokens: These are tokens that may be within a source file, but do not contribute to the structure of the grammar itself. Whitespace (spaces, tabs, newlines) and comments are common examples of tokens that may be ignored.</li>
                        </ul>
                        <p>
                            A single token may be declared per line within the token block using the following syntax
                        </p>
                        <code>[TOKEN ACTIVITY] [TOKEN NAME] : /[TOKEN REGEX]/</code>
                        <p>
                            Token activity will be either the keyword <code>active</code> or <code>ignored</code> depending on the type of token you wish to declare.
                        </p>
                        <p>
                            Token name is the name that will be used to refer to this token in the future. All token names must follow the following rules:
                            <ul>
                                <li>Token names must only contain letters, numbers, and underscores</li>
                                <li>Token names must start with a letter</li>
                                <li>Token names must not end with an underscore</li>
                                <li>All token names for a given syntax definition must be unique and are case insensitive (i.e. <code>apple</code> and <code>APPLE</code> are considered the same token name).</li>
                            </ul>
                        </p>
                        <p>
                            Some examples of valid token names are:
                        </p>
                        <ul>
                            <li><code>IF</code></li>
                            <li><code>ELSE</code></li>
                            <li><code>GREATER_THAN</code></li>
                            <li><code>X</code></li>
                            <li><code>ABC_123</code></li>
                            <li><code>VALID_TOKEN_NAME</code></li>
                        </ul>
                        <p>
                            Some examples of invalid  token names are:
                        </p>
                        <ul>
                            <li><code>_TEST</code></li>
                            <li><code>_A00</code></li>
                            <li><code>TOKEN123!</code></li>
                            <li><code>42_WALLABY_WAY</code></li>
                        </ul>
                        <h2>Reserved token names</h2>
                        <p>The following token names are reserved, and therefore cannot be used as a token name in any syntax definition file:</p>
                        <ul>
                            <li><code>EPSILON</code> (reserved for the empty string, for use in productions)</li>
                            <li><code>EOF</code> (reserved for the end of file character)</li>
                            <li><code>WHITESPACE</code>  (reserved for all whitespace, and is ignored by default)</li>
                            <li><code>INLINE_WHITESPACE</code>  (reserved for tabs and spaces, and is ignored by default)</li>
                        </ul>
                        <h2>Token regex</h2>
                        <p>
                            Token regex is simply a regex pattern that will be used to identify whether or not some input matches a given token.
                        </p>
                        <p>
                            If you are unaware, "regex" stands for "regular expression". A regex pattern is used to decide whether or not a given string of characters
                            matches with a certain pattern of characters. Understanding regex will be important in order to use GLASS. <a href="https://regexone.com/">RegexOne</a> provides
                            a great tutorial on how to write regex patterns.
                        </p>
                        <p><em>Note: Since regex patterns are defined with a starting and ending forward slash </em>(<code>/</code>)<em> in the syntax definition file, if you
                            wish to include a forward slash in your regex, you must escape it using a backslash </em>(<code>\</code>)<em>.</em></p>
                        <p>
                            Below is an example of a full token declaration, including a regex pattern:
                        </p>
                        <code>
                            visible A_SEQUENCE = /a+/
                        </code>
                        <p>
                            Based on this token declaration, any string that contains a series of a's (i.e. <code>aaaaa</code>) could be should to be an <code>A_SEQUENCE</code> token.
                        </p>
                        <h2>Token declaration blocks</h2>
                        <p>
                            If you want to declare multiple tokens of the same type (<code>active</code> or <code>ignored</code>), you may declare the tokens within a block where the type only needs to be specified once, as shown below:
                        </p>
                        <code>
                            tokens &#123;<br/>
                            {tab}active &#123;<br/>
                            {tab}{tab}FRUIT_ONE: /apple/<br/>
                            {tab}{tab}FRUIT_TWO: /banana/<br/>
                            {tab}{tab}FRUIT_THREE: /cherry/<br/>
                            {tab}&#125;<br/>
                            &#125;
                        </code>
                        <h2>Tutorial: Building your first GLASS language</h2>
                        <p>In order to read in mathematical expressions, we need to define tokens for the additive operators (<code>+</code> and <code>-</code>), the multiplicative 
                        operators (<code>*</code> and <code>/</code>), parenthesis, and numbers (for simplicitity, we will stick to non-negative integers). We will also declare an
                        ignored token for comments, which we will define as any text that follows a <code>#</code> until the end of a line. Below is the token block that
                        should be include at the top of your syntax definition file, with a token declaration for each token that may appear in our mathematical expressions. This
                        block should replace the empty token block in your current <code>expression.syntax</code> file:</p>
                        <code>
                        tokens &#123;<br/>
                            {tab}active &#123;<br/>
                            {tab}{tab}LEFT_PARENTHESIS: /\(/<br/>
                            {tab}{tab}RIGHT_PARENTHESIS: /\)/<br/>
                            {tab}{tab}ADD_OPERATOR: /\+|\-/<br/>
                            {tab}{tab}MULTIPLY_OPERATOR: /\*|\//<br/>
                            {tab}{tab}NUMBER: /0|[1-9][0-9]*/<br/>
                            {tab}&#125;<br/>
                            <br/>
                            {tab}ignored COMMENT : /#.*(\r\n)?/<br/>
                            &#125;
                        </code>
                    </div>
            },
            {
                name : "Productions",
                content : 
                    <div>
                        <h1>Productions</h1>
                        {lineBreak}
                        <h2>What are productions?</h2>
                        <p>
                            Tokens are the individual strings of characters (usually words, numbers, or symbols) that can appear in your syntax. The first step in the GLASS pipeline is lexing the source file, or in simpler terms, splitting up the source file into
                            the individual tokens that appear in the file. Therefore, it is important that any possible string that may appear in your source file is declared as a token in your syntax definition.
                        </p>
                        <h2>Declaring productions</h2>
                        <p>
                            Tokens are declared within the token block of the syntax definition file, and can be of two types:
                        </p>
                        <ul>
                            <li>Active tokens: These are tokens that are a part of the structure of the grammar. Most tokens are active tokens.</li>
                            <li>Ignored tokens: These are tokens that may be within a source file, but do not contribute to the structure of the grammar itself. Whitespace (spaces, tabs, newlines) and comments are common examples of tokens that may be ignored.</li>
                        </ul>
                        <p>
                            A single token may be declared per line within the token block using the following syntax
                        </p>
                        <code>[TOKEN ACTIVITY] [TOKEN NAME] : /[TOKEN REGEX]/</code>
                        <p>
                            Token activity will be either the keyword <code>active</code> or <code>ignored</code> depending on the type of token you wish to declare.
                        </p>
                        <p>
                            Token name is the name that will be used to refer to this token in the future. All token names must follow the following rules:
                            <ul>
                                <li>Token names must only contain letters, numbers, and underscores</li>
                                <li>Token names must start with a letter</li>
                                <li>Token names must not end with an underscore</li>
                                <li>All token names for a given syntax definition must be unique and are case insensitive (i.e. <code>apple</code> and <code>APPLE</code> are considered the same token name).</li>
                            </ul>
                        </p>
                        <p>
                            Some examples of valid token names are:
                        </p>
                        <ul>
                            <li><code>IF</code></li>
                            <li><code>ELSE</code></li>
                            <li><code>GREATER_THAN</code></li>
                            <li><code>X</code></li>
                            <li><code>ABC_123</code></li>
                            <li><code>VALID_TOKEN_NAME</code></li>
                        </ul>
                        <p>
                            Some examples of invalid  token names are:
                        </p>
                        <ul>
                            <li><code>_TEST</code></li>
                            <li><code>_A00</code></li>
                            <li><code>TOKEN123!</code></li>
                            <li><code>42_WALLABY_WAY</code></li>
                        </ul>
                        <h2>Reserved production names</h2>
                        <p>The following token names are reserved, and therefore cannot be used as a token name in any syntax definition file:</p>
                        <ul>
                            <li><code>EPSILON</code> (reserved for the empty string, for use in productions)</li>
                            <li><code>EOF</code> (reserved for the end of file character)</li>
                            <li><code>WHITESPACE</code>  (reserved for all whitespace, and is ignored by default)</li>
                            <li><code>INLINE_WHITESPACE</code>  (reserved for tabs and spaces, and is ignored by default)</li>
                        </ul>
                        <h2>Production declarations</h2>
                        <p>
                            Token regex is simply a regex pattern that will be used to identify whether or not some input matches a given token.
                        </p>
                        <p>
                            If you are unaware, "regex" stands for "regular expression". A regex pattern is used to decide whether or not a given string of characters
                            matches with a certain pattern of characters. Understanding regex will be important in order to use GLASS. <a href="https://regexone.com/">RegexOne</a> provides
                            a great tutorial on how to write regex patterns.
                        </p>
                        <p><em>Note: Since regex patterns are defined with a starting and ending forward slash </em>(<code>/</code>)<em> in the syntax definition file, if you
                            wish to include a forward slash in your regex, you must escape it using a backslash </em>(<code>\</code>)<em>.</em></p>
                        <p>
                            Below is an example of a full token declaration, including a regex pattern:
                        </p>
                        <code>
                            visible A_SEQUENCE = /a+/
                        </code>
                        <p>
                            Based on this token declaration, any string that contains a series of a's (i.e. <code>aaaaa</code>) could be should to be an <code>A_SEQUENCE</code> token.
                        </p>
                        <h2>Tutorial: Building your first GLASS language</h2>
                        <p>
                            The grammar productions required to define the stucture of a mathematical expression are quite simple. We know the following things are true about mathematical expressions:
                            <ul>
                                <li>An expression is either a single term, or can be defined recursively as another expression added or subtracted with a term.</li>
                                <li>A term is either a single factor, or can be defined recursively as another term multipled or divided with a factor.</li>
                                <li>A factor is either a single number, or an expression surrounded by parenthesis</li>
                            </ul>
                            Using these rules, we can define our grammar productions as shown in the block below. This
                            block should replace the empty production block in your current <code>expression.syntax</code> file:
                        </p>
                        <code>
                        productions &#123;<br/>
                            {tab}EXPRESSION -{'>'} EXPRESSION ADD_OPERATOR TERM<br/>
                            {tab}={'>'} TERM.<br/>
                            <br/>
                            {tab}TERM -{'>'} TERM MULTIPLY_OPERATOR FACTOR<br/>
                            {tab}={'>'} FACTOR.<br/>
                            <br/>
                            {tab}FACTOR -{'>'} NUMBER<br/>
                            {tab}={'>'} LEFT_PARENTHESIS EXPRESSION RIGHT_PARENTHESIS.<br/>
                            &#125;
                        </code>
                    </div>
            }
        ]
    },
    {
        name : "Interpretation Script",
        content : 
            <div>
                Test section 3 content
            </div>,
        subsections : [
            {
                name : "Test Subsection",
                content : 
                    <div>
                        Test subsection 3.1 content
                    </div>
            },
            {
                name : "Test Subsection",
                content : 
                    <div>
                        Test subsection 3.2 content
                    </div>
            },
            {
                name : "Test Subsection",
                content : 
                    <div>
                        Test subsection 3.3 content
                    </div>
            }
        ]
    }  
]

export default documentation;