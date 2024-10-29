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
                    concepts such as "regex patterns" and "grammar productions" are entirely new to you, no worries! This section will provide a small description of these concepts, as well as providing
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
                            A single token may be declared per line within the token block using the following syntax:
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
                            Productions are the building blocks that are used to define the structure of a given source file.
                        </p>
                        <p>
                            After a source file is lexed by GLASS (See Section 4.2 Tokens), the token sequence that has been read
                            from the source file is then passed to the parser, where the productions defined in the syntax
                            definition file are used to parse the tokens into a parse tree.
                        </p>
                        <h2>Grammar productions: a brief lesson</h2>
                        <p>
                            For those that are unfamiliar with the concept of a grammar production, here we will give a brief lesson
                            on what they are and how they work. If you are already familiar with grammar productions, feel free to
                            skip to <strong>Declaring productions</strong>.

                            First, lets go over some terminology:
                            <ul>
                                <li>A <em>terminal</em> is a part of a grammar production that does not produce anything further. In
                                the case of GLASS, all of your defined tokens will function as terminals.</li>
                                <li>A <em>non-terminal</em> is a part of your grammar production that produces other terminals
                                or non-terminals.</li>
                                <li>A <em>starting production</em> is the production that you begin parsing with.</li>
                            </ul>

                            Now, think of a grammar production as DNA, carrying instructions on how your source file should be built. Every
                            grammar production has two sides, a left and right side. Below is an example of a grammar production, written
                            as it would be written in a syntax definition file.
                        </p>
                        <code>
                            S -&gt; S A.
                        </code>
                        <p>
                            For this example, let's assume <code>A</code> is the name of a defined token in our syntax definition file that
                            corresponds to a lowercase <code>a</code>, and that the above production is our starting production. This means
                            that <code>A</code> is a terminal and <code>S</code> is a non-terminal in the production above, and we can
                            assume that we start our parsing with an <code>S</code> non-terminal.
                        </p>
                        <p>
                            What does this mean? Well, if we start with an <code>S</code>:
                        </p>
                        <code>
                            S
                        </code>
                        <p>
                            our "DNA" tells us that an <code>S</code> can produce (i.e. can be transformed into, indicated by the arrow <code>-&gt;</code>)
                            another <code>S</code> followed by an <code>A</code>. We now have:
                        </p>
                        <code>
                            S A
                        </code>
                        <p>
                            We know from our original assumptions that an <code>A</code> corresponds to the token defined as a
                            lowercase <code>a</code>:
                        </p>
                        <code>
                            S a
                        </code>
                        <p>
                            Now we have another <code>S</code>, and we already know that our production rules tell us that
                            an <code>S</code> can be transformed into another <code>S</code> followed by another <code>A</code>, and
                            that each <code>A</code> becomes a lowercase <code>a</code>. We now have:
                        </p>
                        <code>
                            S a a
                        </code>
                        <p>
                            We could repeat this process as many times as we want...
                        </p>
                        <code>
                            S a a a a a a a a
                        </code>
                        <p>
                            ...but we still have an S. You may think it is fine to leave it how it is, but it turns out that we are not
                            allowed to leave any non-terminals in our final result. So how do we fix this?
                        </p>
                        <p>
                            Well, we actually need to declare a second production in order to make sure we can end what would otherwise
                            be an infinite loop of producing more <code>a</code>'s. Let's add a second production to our list:
                        </p>
                        <code>
                            S -&gt; S A.<br/>
                            S -&gt; A.
                        </code>
                        <p>
                            This production allows for an <code>S</code> to produce only an <code>A</code>. If we apply this new production
                            to the S in the sequence we already have, and reduce the <code>A</code> to a lowercase <code>a</code>, we get:
                        </p>
                        <code>
                            a a a a a a a a a
                        </code>
                        <p>
                            We no longer have any non-terminals in our sequence, and have successfully generated the
                            sequence <code>aaaaaaaaa</code> using our grammar productions.
                        </p>
                        <p>
                            Something important to note is that there is nothing that says when we should use the first production (<code>S -&gt; S A.</code>) and
                            when we should use the second (<code>S -&gt; A.</code>). Because of this, this set of two productions defines a grammar that allows for
                            any sequence of at least one <code>a</code> to be generated. Therefore, you could use these two productions to parse any file that
                            contained only <code>a</code>'s within it. Can you see how this can be a very powerful tool?
                        </p>
                        <p>
                            With the right combination of productions, we can produce some very complex results! Here is another fun example:
                        </p>
                        <code>
                            S -&gt; A B A B ON_THE A SHORE.<br/>
                            A -&gt; SHE.<br/>
                            A -&gt; SEA.<br/>
                            B -&gt; SELLS.<br/>
                            B -&gt; SHELLS.
                        </code>
                        <p>
                            Assuming...
                            <ul>
                                <li><code>S</code> is our starting production</li>
                                <li><code>S</code>,<code>A</code>, and <code>B</code> are all non-terminals</li>
                                <li><code>SHE</code>, <code>SEA</code>, <code>SELLS</code>, <code>SHELLS</code>, <code>ON_THE</code>, and <code>SHORE</code> are
                                    terminals that correspond to the strings "she", "sea", "sells", "shells", "on the", and "shore", respectively.</li>
                            </ul>
                            We can use this set of productions to generate a variety of tongue-twister sentences, such as:
                            <ul>
                                <li>she sells sea shells on the sea shore</li>
                                <li>she shells she sells on the she shore</li>
                                <li>sea sells she shells on the sea shore</li>
                                <li>sea sells sea sells on the sea shore</li>
                            </ul>
                            In fact, there are 32 possible sentences that can be generated from that set of productions.
                        </p>
                        <p>
                            This concludes this section on teaching grammar productions. If you wish to learn more about grammar productions (in particular, GLASS
                            uses context-free grammar productions), resource such as <a href="https://en.wikipedia.org/wiki/Formal_grammar#:~:text=A%20formal%20grammar%20is%20defined,and%20a%20designated%20start%20symbol.">Wikipedia articles</a> exist
                            to read, though their contents will be much more technical in nature. If you choose to learn more, happy reading!
                        </p>
                        <h2>Declaring productions</h2>
                        <p>
                            Productions are declared within the production block of the syntax definition file. A single token may be declared per line within the token block using the following syntax:
                        </p>
                        <code>[NON-TERMINAL] -&gt; [LIST OF TERMINALS AND NON-TERMINALS].</code>
                        <p>
                            Keep in mind:
                            <ul>
                                <li>Non-terminals do not have to be defined explicity, and are rather implicitly defined by their inclusion in productions</li>
                                <li>Non-terminals may have any name that is not already a reserved or declared token name</li>
                                <li>The symbol on the left side of the production (left of the arrow <code>-&gt;</code>) must be a non-terminal</li>
                                <li>Non-terminal names follow the same rules as token names (See Section 4.2 Tokens)</li>
                            </ul>
                        </p>
                        <p>
                            Some examples of valid productions are:
                        </p>
                        <ul>
                            <li><code>S -&gt; A B C.</code></li>
                            <li><code>S -&gt; S B_2.</code></li>
                            <li><code>B_2 -&gt; B_1 B_2.</code></li>
                        </ul>
                        <h2>Parent and child productions</h2>
                        <p>
                            Sometimes, multiple productions will have the same left side non-terminal. For example:
                        </p>
                        <code>
                            FRUIT_LIST -&gt; FRUIT_LIST APPLE.<br/>
                            FRUIT_LIST -&gt; FRUIT_LIST BANANA.<br/>
                            FRUIT_LIST -&gt; FRUIT_LIST CHERRY.<br/>
                            FRUIT_LIST -&gt; EPSILON.
                        </code>
                        <p>
                            In these instances, it can feel redundant to right the left side over and over again. Luckily, you can
                            simplify these productions by declaring only a single "parent" production (exactly as how all productions have
                            been written up until this point), followed by a list of child productions (written with a thick arrow <code>=&gt;</code> symbol),
                            with only a single period at the end of the list. Below is an example of the above fruit list productions rewritten
                            using parent and child productions. These two notations are functionally equivalent within GLASS.
                        </p>
                        <code>
                            FRUIT_LIST -&gt; FRUIT_LIST APPLE<br/>
                            =&gt; FRUIT_LIST BANANA<br/>
                            =&gt; FRUIT_LIST CHERRY<br/>
                            =&gt; EPSILON.
                        </code>
                        <h2>Naming productions</h2>
                        <p>
                            When it comes time to write the interpretation script for your language, you will need to be able to refer to your productions. This
                            can be done by rewriting the production in the interpretation script file, but this can be tedious. Instead, a shorthand name can be
                            applied to each production by preceeding it with an identifier (following the same rules for token and non-terminal names) surrounded
                            by square brackets, as shown below:
                        </p>
                        <code>
                            [NAME_ONE] FRUIT_LIST -&gt; FRUIT_LIST APPLE<br/>
                            [NAME_TWO] =&gt; FRUIT_LIST BANANA<br/>
                            [NAME_THREE] =&gt; FRUIT_LIST CHERRY<br/>
                            [NAME_FOUR] =&gt; EPSILON.
                        </code>
                        <p>Also note that productions may share names with existing terminals (tokens) or non-terminals.</p>
                        <h2>Tutorial: Building your first GLASS language</h2>
                        <p>
                            The grammar productions required to define the stucture of a mathematical expression are quite simple. We know the following things are true about mathematical expressions:
                            <ul>
                                <li>An expression is either a single term, or can be defined recursively as another expression added or subtracted with a term.</li>
                                <li>A term is either a single factor, or can be defined recursively as another term multipled or divided with a factor.</li>
                                <li>A factor is either a single number, or an expression surrounded by parenthesis</li>
                            </ul>
                            Using these rules, we can define our grammar productions as shown below. We will also provide a name for each production to be used in the future. The
                            block below should replace the empty production block in your current <code>expression.syntax</code> file:
                        </p>
                        <code>
                        productions &#123;<br/>
                            {tab}[CONTINUED_EXPRESSION] EXPRESSION -&gt; EXPRESSION ADD_OPERATOR TERM<br/>
                            {tab}[EXPRESSION_IS_TERM] =&gt; TERM.<br/>
                            <br/>
                            {tab}[CONTINUED_TERM] TERM -&gt; TERM MULTIPLY_OPERATOR FACTOR<br/>
                            {tab}[TERM_IS_FACTOR] =&gt; FACTOR.<br/>
                            <br/>
                            {tab}[NUMBER] FACTOR -&gt; NUMBER<br/>
                            {tab}[SUBEXPRESSION] =&gt; LEFT_PARENTHESIS EXPRESSION RIGHT_PARENTHESIS.<br/>
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
            <h1>Interpretation Script</h1>
            {lineBreak}
            <h2>What is an interpretation script?</h2>
            <p>
                After a syntax is defined and a source file is parsed by GLASS, the user has an opportunity to define how the parsed source should be interpreted
                by writing an interpretation script. This interpretation script is written in a Java-like syntax that allows you to read, manipulate, write, and print
                values from the parse tree to produce any output you deem appropriate. These files typically have the file extension <code>.gscript</code>, though this is not a requirement.
            </p>
            <p>
                This section will provide a description of how to write an interpretation script. The following section (Section 6) outlines the various functionalities available
                for use within an interpretation script.
            </p>
            <h2>Tutorial: Building your first GLASS language</h2>
            <p>
                In order to write the interpretation script, we must create a new file. Within the folder containing the GLASS <code>.jar</code> file, create a file named <code>expression.gscript</code>.
            </p>
            <p>
                <em>If you are unable to change the file extension when renaming the file, you may need to change your system settings to show file extensions. On Windows, this can be done by enabling the
                    "Show file extensions" option in Settings.</em>
            </p>
        </div>,
        subsections : [
            {
                name : "Basic Script Syntax",
                content :
                    <div>
                        <h1>Basic Script Syntax</h1>
                        {lineBreak}
                        <h2>Writing an interpretation script</h2>
                        <p>
                            An interpretation script is made up of a series of statements and function definitions.
                            There are four statement types in the GLASS scripting system:
                            <ul>
                                <li>Variable assignment statements</li>
                                <li>Function call statements</li>
                                <li>Return statements</li>
                                <li>If statements</li>
                            </ul>
                            Below you will find descriptions of each statement type and their basic syntax. For a more
                            in-depth explanation of each statement's syntax, See Section 6.1 Statements.
                        </p>
                        <p>
                            At the bottom of this page, in the tutorial, there is an example interpretation script for
                            reference.
                        </p>
                        <h2>Variable assignment statements</h2>
                        <p>
                            A variable assignment statement can be used to assign a value to a variable. This variable
                            can then be used in future expressions, and its value will be read and used during the
                            expression's evaluation. A variable assignment statement consists of a variable identifier, an equals
                            sign <code>=</code>, and an expression,
                            followed by a semicolon <code>;</code>.
                        </p>
                        <p>
                            Variable identifiers must follow the following rules:
                            <ul>
                                <li>Identifiers must only contain letters, numbers, and underscores</li>
                                <li>Identifiers must start with a letter</li>
                                <li>Identifiers must not end with an underscore</li>
                            </ul>
                        </p>
                        <p>
                            Below is an example of a valid variable assignment statement:
                        </p>
                        <code>
                            myVariable_123 = (5 + 18) * 3;
                        </code>
                        <h2>Function call statements</h2>
                        <p>
                            Functions can be called in a function call statement without needing to handle their output.
                            A function call statement consists of a function name, an open parenthesis <code>(</code>, a list of
                            arguments, and a closed parenthesis <code>)</code>, followed by a semicolon <code>;</code>.
                        </p>
                        <p>
                            Pre-defined function, along with their names and their allowed parameters, can be found in
                            the
                            list of functions under Section 6.3 Functions.
                        </p>
                        <p>
                            Below is an example of a valid function call statement (assume <code>name</code> is a
                            predefined variable storing a String):
                        </p>
                        <code>
                            print("My name is", name);
                        </code>
                        <h2>Return statements</h2>
                        <p>
                            When defining a production function (See Section 5.2 Production Functions), one can choose to
                            assign a return value to the function. After the function is executed and the return statement is
                            reached, the return expression will be evaluated, and its value will be substituted in place of the
                            original function call if the function was called within an expression. A return statement consists
                            of the <code>return</code> keyword, followed by an expression and a semicolon <code>;</code>.
                        </p>
                        <p>
                            Below is an example of a valid return statement that returns the value 34:
                        </p>
                        <code>
                            return 60 / 4 + 19;
                        </code>
                        <h2>If statements</h2>
                        <p>
                            Sometimes, you only want a series of statements to be executed if a certain condition is met. For this
                            reason, we have the if statement. An if statement consists of the <code>if</code> keyword,
                            an open parenthesis <code>(</code>, a conditional expression, a closed parenthesis <code>)</code>, an
                            open brace <code>&#123;</code>, a series of statements, followed by a closed brace <code>&#125;</code>.
                        </p>
                        <p>
                            The series of statements placed between the open and closed braces will only be executed if the conditional
                            expression placed within the if statement is evaluated to be true.
                        </p>
                        <p>
                            In some cases, you will want to execute some series of statements if a condition is true, and another
                            series of statements if the condition is false. For this reason, you may add an "else" block to your if statement, which
                            can be placed immediately after the last closing brace <code>&#125;</code> of an if statement. This
                            else block consists of the <code>else</code> keyword, an open brace <code>&#123;</code>, a series of
                            statements, and by a closed brace <code>&#125;</code>.
                        </p>
                        <p>
                            In this case, the series of statements placed within the else block will only be executed if the conditional
                            expression placed within the if statement is evaluated to be false.
                        </p>
                        <p>
                            Below is an example of a valid if statement, where the script will print <code>Hooray!</code> if the value
                            of <code>x</code> is 3, otherwise, the script will print <code>Aw man!</code>:
                        </p>
                        <code>
                            if (x == 3) &#123; <br/>
                            {tab}print("Hooray!"); <br/>
                            &#125; else &#123; <br/>
                            {tab}print("Aw man!");<br/>
                            &#125;
                        </code>
                        <h2>Tutorial: Building your first GLASS language</h2>
                        <p>
                            Within the <code>expression.gscript</code> file you have created, type or copy the
                            following two lines of code. This code contains the <code>traverse</code> function,
                            which has yet to be explained, but will be explained in the following section, Section 5.2
                            Production Functions.
                        </p>
                        <code>
                            print("Final result:", traverse());<br/>
                            <br/>
                            # Production functions go here
                        </code>
                    </div>
            },
            {
                name : "Production Functions",
                content :
                    <div>
                        <h1>Production Functions</h1>
                        {lineBreak}
                        <h2>What are production functions?</h2>
                        <p>
                            Productions functions are a special type of function which can be declared inside of an
                            interpretation script. These functions are called as the parse tree, which
                            is generated based on the syntax definition file given to GLASS, is traversed.
                        </p>
                        <p>
                            For each production defined in the syntax definition file used, a production function
                            can be defined, which describes the actions that should be performed when a node
                            produced by the given production is visited during the parse tree's traversal.
                        </p>
                        <h2>The <code>traverse</code> function</h2>
                        <p>
                            In order to begin traversing the parse tree, we need a way to indicate that we wish to do
                            so. That is what the <code>traverse</code> function is for.
                        </p>
                        <p>
                            When the <code>traverse</code> function is called, either in an expression or in a function
                            call statement, a traversal of the parsed source's parse tree is initiated, starting at the
                            root node. Based on the production used to generate the root node, the production function
                            corresponding to said production will be called. If no such production function exists,
                            the <code>traverse</code> function will return <code>null</code>.
                        </p>
                        <p>
                            <em>Note: the </em><code>traverse</code><em> function cannot be called within a production function.</em>
                        </p>
                        <h2>The <code>child</code> function</h2>
                        <p>
                            Once a traversal of the parse tree has begun, we need a way to indicate when to travel
                            further down the parse tree to visit a child of the current node. This is where
                            the <code>child</code> function comes in.
                        </p>
                        <p>
                            The <code>child</code> function can only be called within a production function, and takes a
                            single integer argument. When the <code>child</code> function is called, the passed integer
                            will be used as an index to find the right side symbol of the production corresponding to
                            the current production function.
                        </p>
                        <p>
                            For example, if we are within the production function for the following production:
                        </p>
                        <code>
                            S -&gt; A B C.
                        </code>
                        <p>
                            <code>child(0)</code> will find the symbol <code>A</code>, <code>child(1)</code> will find
                            the symbol <code>B</code>, and <code>child(2)</code> will find the symbol <code>C</code>.
                        </p>
                        <p>
                            If the found symbol is a non-terminal, then the parse tree traversal will move to visit the
                            node corresponding to said non-terminal in the current production. The production used
                            to generate this new node will be found, and the <code>child</code> function call will return the
                            return value of the production function corresponding to the new node. If no such production
                            function exists, or the corresponding production function does not contain a return statement,
                            then the <code>child</code> function call will return <code>null</code>.
                        </p>
                        <p>
                            If the found symbol is a terminal, then the parse tree traversal will move to visit the
                            node corresponding to said terminal, and the <code>child</code> function will return the value
                            of the token corresponding to said terminal node.
                        </p>
                        <p>
                            After the <code>child</code> function returns, the parse tree traversal will move back up to
                            the same node that was being visited when the function was originally called.
                        </p>
                        <h2>Tutorial: Building your first GLASS language</h2>
                        <p>
                            This step is the meat and potatoes of making our expression evaluator work. We will have to
                            write production functions for each of the functions we have previously defined. Below is
                            the explanation for the logic we will use to write each production function.
                            <ul>
                                <li>
                                    For production <code>CONTINUED_EXPRESSION</code> we want to retrieve and save the
                                    evaluated value of the first child (the non-terminal <code>EXPRESSION</code>), determine
                                    whether
                                    we should add or subtract based on the contents of the second child (the
                                    terminal <code>ADD_OPERATOR</code>), and then add or subtract the evaluated value of the third
                                    child (the non-terminal <code>TERM</code>) to our first value accordingly and return
                                    the sum or difference.
                                </li>
                                <li>
                                    For production <code>EXPRESSION_IS_TERM</code>, we simply want to return the
                                    evaluated value of the first child (the non-terminal <code>TERM</code>).
                                </li>
                                <li>
                                    For production <code>CONTINUED_TERM</code> we want to retrieve and save the
                                    evaluated value of the first child (the non-terminal <code>TERM</code>), determine
                                    whether
                                    we should multiply or divide based on the contents of the second child (the
                                    terminal <code>MULTIPLY_OPERATOR</code>), and then multiply or divide the evaluated value of
                                    the third
                                    child (the non-terminal <code>FACTOR</code>) to our first value accordingly and
                                    return
                                    the product or quotient.
                                </li>
                                <li>
                                    For production <code>TERM_IS_FACTOR</code>, we want to return the
                                    evaluated value of the first child (the non-terminal <code>FACTOR</code>).
                                </li>
                                <li>
                                    For production <code>NUMBER</code>, we want to return the
                                    contents of the first child (the non-terminal <code>NUMBER</code>).
                                </li>
                                <li>
                                    For production <code>SUBEXPRESSION</code>, we want to return the
                                    evaluated value of the second child (the non-terminal <code>EXPRESSION</code>).
                                </li>
                            </ul>
                            With all of this in mind, the production functions for each production have been written
                            below. Take some time to read them and make sure you understand what they do. Then, when you
                            are ready, within your <code>expression.gscript</code> file, replace the comment that
                            reads <code># Production functions go here</code> with the code found in the block below:
                        </p>
                        <code>
                            production CONTINUED_EXPRESSION &#123;<br/>
                            {tab}x = child(0);<br/>
                            <br/>
                            {tab}if (child(1) == "+") &#123;<br/>
                            {tab}{tab}x = x + child(2);<br/>
                            {tab}&#125; else &#123;<br/>
                            {tab}{tab}x = x - child(2);<br/>
                            {tab}&#125;<br/>
                            {tab}<br/>
                            {tab}return x; <br/>
                            &#125;<br/>
                            <br/>
                            production EXPRESSION_IS_TERM &#123;<br/>
                            {tab}return child(0);<br/>
                            &#125;<br/>
                            <br/>
                            production CONTINUED_TERM &#123;<br/>
                            {tab}x = child(0);<br/>
                            <br/>
                            {tab}if (child(1) == "*") &#123;<br/>
                            {tab}{tab}x = x * child(2);<br/>
                            {tab}&#125; else &#123;<br/>
                            {tab}{tab}x = x / child(2);<br/>
                            {tab}&#125;<br/>
                            {tab}<br/>
                            {tab}return x; <br/>
                            &#125;<br/>
                            <br/>
                            production TERM_IS_FACTOR &#123;<br/>
                            {tab}return child(0);<br/>
                            &#125;<br/>
                            <br/>
                            production NUMBER &#123;<br/>
                            {tab}return child(0);<br/>
                            &#125;<br/>
                            <br/>
                            production SUBEXPRESSION &#123;<br/>
                            {tab}return child(1);<br/>
                            &#125;<br/>
                        </code>
                        <p>
                            You have now successfully created a syntax definition and an interpretation script for
                            evaluating mathematical expression! Create a file named <code>expression.txt</code>, and
                            type a mathematical expression in it. Then, run GLASS (see Section 3.0 Installation),
                            enter <code>expression.syntax</code> as the name of the syntax definition, <code>expression.txt</code> as
                            the name of the source file, and <code>expression.gscript</code> as the name of the
                            interpretation script, and GLASS should output the result of the simplified expression.
                        </p>
                        <p>
                            Here are some examples to try:
                            <ul>
                                <li>The expression <code>4 + 2</code> should evaluate to <code>6</code>.</li>
                                <li>The expression <code>3 * 6 - 7 + 2</code> should evaluate to <code>13</code>.</li>
                                <li>The expression <code>6 * 2 + (5 - 3) * 3 - 8</code> should evaluate to <code>10</code>.</li>
                                <li>The expression <code>(3 + 4) + 7 * 2 - 1 - 9</code> should evaluate to <code>11</code>.</li>
                                <li>The expression <code>5 - 2 + 4 * (8 - (5 + 1)) + 9</code> should evaluate to <code>20</code>.</li>
                                <li>The expression <code>(8 - 1 + 3) * 6 - ((3 + 7) * 2)</code> should evaluate to <code>40</code>.</li>
                            </ul>
                        </p>
                        <p>
                            This is the end of the tutorial part of the documentation. The following sections provides deeper insight into
                            how GLASS works. Happy reading!
                        </p>
                    </div>
            }
        ]
    }
]

export default documentation;