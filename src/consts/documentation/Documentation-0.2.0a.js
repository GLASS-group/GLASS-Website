import HorizontalBreak from '../../templates/HorizontalBreak';

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
            </div>,
        subsections : [
            {
                name : "Installation and Running",
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
                            java -jar GLASS-0.2.0a.jar
                        </code>
                        <p>
                            Please note that in the above command, <code>GLASS-0.2.0a.jar</code> should be replace with the name
                            of the appropriate <code>.jar</code> file for your installed version of GLASS.
                        </p>
                    </div>
            },
            {
                name : "Command Line Arguments",
                content :
                    <div>
                        <h1>
                            Command Line Arguments
                        </h1>
                        {lineBreak}
                        <h2>Running GLASS with command line arguments</h2>
                        <p>
                            There exist a variety of command line arguments which can be used to run GLASS. A full list
                            of the currently
                            available command line arguments, along with what they do, can be found below.
                        </p>
                        <h3><code>-v / --verbosity</code></h3>
                        <p>
                            This argument can be used to set the verbosity level of the output of GLASS.
                            The available verbosity levels are as follows:
                        </p>
                        <ul>
                            <li><code>0</code> - No output log</li>
                            <li><code>1</code> - Show only severe errors (which appear when GLASS crashes).</li>
                            <li><code>2</code> - Show severe and warning messages (warnings do not necessarily mean
                                GLASS will crash).
                            </li>
                            <li><code>3</code> - Show informational messages (related to how GLASS interacts with user
                                input).
                            </li>
                            <li><code>4</code> - Show fine log messages (including messages about the inner works of
                                GLASS).
                            </li>
                            <li><code>5</code> - Show all log messages</li>
                        </ul>
                        <p>
                            The default verbosity level is <code>2</code>. Specifying this argument without indicating a
                            verbosity
                            level after the argument will set the level to <code>3</code>. Otherwise, the verbosity
                            level will be
                            set to the specified level.
                        </p>
                        <h3><code>-l / --log [FILEPATH]</code></h3>
                        <p>
                            This argument can be used to save the message log to a text file of your choice. The
                            argument must
                            be followed by the path of the file you wish to output the log to.
                        </p>
                        <h3><code>-rb / --rebuild</code></h3>
                        <p>
                            This argument will force the internal syntax definition and interpretation script parsers to
                            be rebuilt. This command can be used in the event that the saved parsers are corrupted, but
                            is
                            mostly used for development purposes.
                        </p>
                        <h3><code>-so / --script-only</code></h3>
                        <p>
                            This argument makes GLASS run in script only mode, allowing you to run an interpretation
                            script
                            without specifying a syntax definition file nor a source file. This argument can be
                            particularly
                            useful if you handle fetching these files within your interpretation script itself.
                        </p>
                        <h3><code>-sd / --syntax-definition [FILEPATH]</code></h3>
                        <p>
                            This argument allows you to pre-specify a syntax definition file to be used by the GLASS
                            system. GLASS will not prompt the user for a syntax definition file, and will instead
                            fetch the file at the path specified after the argument to be used as the syntax definition
                            file.
                        </p>
                        <h3><code>-sf / --source-file [FILEPATH]</code></h3>
                        <p>
                            This argument allows you to pre-specify a source file to be used by the GLASS
                            system. GLASS will not prompt the user for a source file, and will instead
                            fetch the file at the path specified after the argument to be used as the source file.
                        </p>
                        <h3><code>-s / --script [FILEPATH]</code></h3>
                        <p>
                            This argument allows you to pre-specify an interpretation script file to be used by the GLASS
                            system. GLASS will not prompt the user for an interpretation script file, and will instead
                            fetch the file at the path specified after the argument to be used as the interpretation
                            script file.
                        </p>
                    </div>
            }
        ]
    },
    {
        name: "Syntax Definition",
        content:
            <div>
                <h1>Syntax Definition</h1>
                {lineBreak}
                <h2>What is a syntax definition?</h2>
                <p>
                    A syntax definition is a set of named regex patterns and grammar productions which are used to
                    understand the structure of a source file. If
                    concepts such as "regex patterns" and "grammar productions" are entirely new to you, no worries! This section will provide a small description of these concepts, as well as providing
                    resources for learning more about them.
                </p>
                <p>
                    Before continuing, please make sure you have downloaded GLASS and its dependencies. To understand how to install GLASS, please see Section 2.1 of this documentation.
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
                        operators (<code>*</code> and <code>/</code>), parenthesis, and numbers (for simplicity, we will stick to non-negative integers). We will also declare an
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
                            After a source file is lexed by GLASS (See Section 3.2 Tokens), the token sequence that has been read
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
                            uses context-free grammar productions), resources such as <a href="https://en.wikipedia.org/wiki/Formal_grammar#:~:text=A%20formal%20grammar%20is%20defined,and%20a%20designated%20start%20symbol.">Wikipedia articles</a> exist
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
                                <li>Non-terminals do not have to be defined explicitly, and are rather implicitly defined by their inclusion in productions</li>
                                <li>Non-terminals may have any name that is not already a reserved or declared token name</li>
                                <li>The symbol on the left side of the production (left of the arrow <code>-&gt;</code>) must be a non-terminal</li>
                                <li>Non-terminal names follow the same rules as token names (See Section 3.2 Tokens)</li>
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
                            applied to each production by preceding it with an identifier (following the same rules for token and non-terminal names) surrounded
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
                            The grammar productions required to define the structure of a mathematical expression are quite simple. We know the following things are true about mathematical expressions:
                            <ul>
                                <li>An expression is either a single term, or can be defined recursively as another expression added or subtracted with a term.</li>
                                <li>A term is either a single factor, or can be defined recursively as another term multiplied or divided with a factor.</li>
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
                This section will provide a description of how to write an interpretation script. The following section (Section 5.0) outlines the various functionalities available
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
                            There are six statement types in the GLASS scripting system:
                            <ul>
                                <li>Variable assignment statements</li>
                                <li>Function call statements</li>
                                <li>Accessed function statements</li>
                                <li>Return statements</li>
                                <li>If statements</li>
                                <li>While loop statements</li>
                            </ul>
                            Below you will find descriptions of each statement type and their basic syntax. For a more
                            in-depth explanation of each statement's syntax, See Section 5.1 Statements.
                        </p>
                        <p>
                            At the bottom of this page, in the tutorial, there is an example interpretation script for
                            reference.
                        </p>
                        <h2>Variable assignment statements</h2>
                        <p>
                            A variable assignment statement can be used to assign a value to a variable. This variable
                            can then be used in future expressions, and its value will be read and used during the
                            expression's evaluation.
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
                            Pre-defined function, along with their names and their allowed parameters, can be found in
                            the
                            list of functions under Section 5.4 Functions.
                        </p>
                        <p>
                            Below is an example of a valid function call statement (assume <code>name</code> is a
                            predefined variable storing a String):
                        </p>
                        <code>
                            print("My name is", name);
                        </code>
                        <h2>Accessed function statements</h2>
                        <p>
                            Object data types may have their internal functions accessed within an isolated statement.
                            For example, if <code>fruits</code> is the array <code>[apple, banana, cherry]</code>, then
                        </p>
                        <code>fruits[1].substring(1, 4).length();</code>
                        <p>
                            is a valid accessed function statement (though not a very useful one, since you are not
                            doing anything with the returned value).
                        </p>
                        <h2>Return statements</h2>
                        <p>
                            In any function, or within an interpretation script itself, one can choose
                            to return a value to the original call of the function or script. When a return
                            statement is
                            reached, the return expression will be immediately evaluated, and its value will be substituted in place
                            of the
                            original function or script call.
                        </p>
                        <p>
                            Below is an example of a valid return statement that returns the value 34:
                        </p>
                        <code>
                            return 60 / 4 + 19;
                        </code>
                        <h2>If statements</h2>
                        <p>
                            Sometimes, you only want a series of statements to be executed if a certain condition is
                            met. For this
                            reason, we have the if statement. The statements within an if statement are only executed if
                            the conditional
                            expression placed within the if statement is evaluated to be true.
                        </p>
                        <p>
                            In some cases, you will want to execute some series of statements if a condition is true,
                            and another
                            series of statements if the condition is false. For this reason, you may add an "else" block
                            to your if statement. In this case, the series of statements placed within the else block will only be executed if
                            the conditional
                            expression placed within the if statement is evaluated to be false.
                        </p>
                        <p>
                            Below is an example of a valid if statement, where the script will
                            print <code>Hooray!</code> if the value
                            of <code>x</code> is 3, otherwise, the script will print <code>Aw man!</code>:
                        </p>
                        <code>
                            if (x == 3) &#123; <br/>
                            {tab}print("Hooray!"); <br/>
                            &#125; else &#123; <br/>
                            {tab}print("Aw man!");<br/>
                            &#125;
                        </code>
                        <h2>While loop statements</h2>
                        <p>
                            While loops allow you to execute a series of statements continuously, as long as a certain
                            condition is met.
                            When a while loop is reached, its conditional expression will be
                            evaluated. If its value is true, the series of statements within the while loop will be
                            executed, otherwise, the while loop will be skipped over. The loop will continue as long as
                            the conditional expression is true.
                        </p>
                        <p>
                            Below is an example of a series of statements that use a while loop to print the
                            numbers <code>1</code> through <code>10</code>.
                        </p>
                        <code>
                            int i = 1;<br/>
                            while (i &lt;= 10) &#123;<br/>
                            {tab}print(i);<br/>
                            {tab}i = i + 1;<br/>
                            &#125;
                        </code>
                        <h2>Tutorial: Building your first GLASS language</h2>
                        <p>
                            Within the <code>expression.gscript</code> file you have created, type or copy the
                            following two lines of code. This code contains the <code>traverse</code> function,
                            which has yet to be explained, but will be explained in the following section, Section 4.2
                            Production Functions.
                        </p>
                        <code>
                            print("Final result:", parseTree.traverse());<br/>
                            <br/>
                            # Production functions go here
                        </code>
                    </div>
            },
            {
                name: "Production Functions",
                content:
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
                        <h2>Writing production functions</h2>
                        <p>
                            A production function can be declared with the <code>production</code> keyword, followed by
                            a production definition (typed the same way as it would be in a syntax definition file) or
                            the corresponding name given to the production (if a name exists), then an open
                            brace <code>&#123;</code>, a series of statements, followed by a closed
                            brace <code>&#125;</code>.
                        </p>
                        <p>
                            When a production function is called (using the <code>traverse</code> function, described
                            below), the statements between the open and closed braces will be executed in order. If
                            a return statement exists within the production function, when that statement is reached,
                            the provided expression, will be evaluated, and the resulting value returned to the
                            <code>traverse</code> function call that triggered the execution of the production function.
                        </p>
                        <p>
                            Below is a small example of a production function:
                        </p>
                        <code>
                            production S -> A B C &#123;<br/>
                            {tab}print("This production has been reached, hello!");<br/>
                            {tab}return 5;<br/>
                            &#125;
                        </code>
                        <h2>The <code>parseTree</code> and <code>children</code> variables</h2>
                        <p>
                            When an interpretation script is executed using GLASS, if some source file has already been
                            parsed by GLASS, the resulting parse tree will be stored in the <code>parseTree</code>
                            variable. This variable can then be used to call <code>traverse</code> (described below)
                            which
                            will begin a traversal of the parse tree.
                        </p>
                        <p>
                            Within a production function, the variable <code>children</code> will be set to an array
                            containing the children nodes of the current tree node being traverse. For example, in the
                            example production function shown above, <code>children</code> would be an array with
                            three elements, where <code>children[0]</code> contained the node corresponding
                            to <code>A</code>,
                            <code>children[1]</code> contained the node corresponding to <code>B</code>,
                            and <code>children[2]</code> contained the node corresponding to <code>C</code>.
                            The <code>traverse</code> function can then be called on these nodes, continuing the
                            traversal of the parse tree.
                        </p>
                        <h2>The <code>traverse</code> function</h2>
                        <p>
                            The <code>traverse</code> function is a special function that can only be called as
                            an accessible function within a ParseNode object variable (such as
                            the <code>parseTree</code> variable,
                            or the elements of the <code>children</code> array within a production function).
                        </p>
                        <p>
                            If the node that the <code>traverse</code> function is called on contains a non-terminal,
                            then the
                            production function corresponding to the calling node's contents and its children will be
                            called, if
                            such a production function exists. If no such production
                            function exists, or the corresponding production function does not contain a return
                            statement, then the <code>child</code> function call will return <code>null</code>.
                        </p>
                        <p>
                            If the calling node contains a terminal, then the <code>traverse</code> function will return the
                            value of the token corresponding to the value stored in said terminal node.
                        </p>
                        <h2>The <code>args</code> variable</h2>
                        <p>
                            When the <code>traverse</code> function is called on a ParseNode object, it may optionally
                            receive a list of arguments. Each element in the list of arguments will be evaluated and the
                            list will be converted into an array of values, which will be stored in the <code>args</code>
                            variable in the production function that is called by the <code>traverse</code> function. These
                            values may then be used within the production function itself.
                        </p>
                        <h2>Tutorial: Building your first GLASS language</h2>
                        <p>
                            This step is the meat and potatoes of making our expression evaluator work. We will have to
                            write production functions for each of the functions we have previously defined. Below is
                            the explanation for the logic we will use to write each production function.
                            <ul>
                                <li>
                                    For production <code>CONTINUED_EXPRESSION</code> we want to retrieve and save the
                                    evaluated value of the first child (the non-terminal <code>EXPRESSION</code>),
                                    determine
                                    whether
                                    we should add or subtract based on the contents of the second child (the
                                    terminal <code>ADD_OPERATOR</code>), and then add or subtract the evaluated value of
                                    the third
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
                                    terminal <code>MULTIPLY_OPERATOR</code>), and then multiply or divide the evaluated
                                    value of
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
                            {tab}x = children[0].traverse();<br/>
                            <br/>
                            {tab}if (children[1].traverse() == "+") &#123;<br/>
                            {tab}{tab}x = x + children[2].traverse();<br/>
                            {tab}&#125; else &#123;<br/>
                            {tab}{tab}x = x - children[2].traverse();<br/>
                            {tab}&#125;<br/>
                            {tab}<br/>
                            {tab}return x; <br/>
                            &#125;<br/>
                            <br/>
                            production EXPRESSION_IS_TERM &#123;<br/>
                            {tab}return children[0].traverse();<br/>
                            &#125;<br/>
                            <br/>
                            production CONTINUED_TERM &#123;<br/>
                            {tab}x = children[0].traverse();<br/>
                            <br/>
                            {tab}if (children[1].traverse() == "*") &#123;<br/>
                            {tab}{tab}x = x * children[2].traverse();<br/>
                            {tab}&#125; else &#123;<br/>
                            {tab}{tab}x = x / children[2].traverse();<br/>
                            {tab}&#125;<br/>
                            {tab}<br/>
                            {tab}return x; <br/>
                            &#125;<br/>
                            <br/>
                            production TERM_IS_FACTOR &#123;<br/>
                            {tab}return children[0].traverse();<br/>
                            &#125;<br/>
                            <br/>
                            production NUMBER &#123;<br/>
                            {tab}return children[0].traverse();<br/>
                            &#125;<br/>
                            <br/>
                            production SUBEXPRESSION &#123;<br/>
                            {tab}return children[1].traverse();<br/>
                            &#125;<br/>
                        </code>
                        <p>
                            You have now successfully created a syntax definition and an interpretation script for
                            evaluating mathematical expression! Create a file named <code>expression.txt</code>, and
                            type a mathematical expression in it. Then, run GLASS (see Section 2.1 Installation and Running),
                            enter <code>expression.syntax</code> as the name of the syntax
                            definition, <code>expression.txt</code> as
                            the name of the source file, and <code>expression.gscript</code> as the name of the
                            interpretation script, and GLASS should output the result of the simplified expression.
                        </p>
                        <p>
                            Here are some examples to try:
                            <ul>
                                <li>The expression <code>4 + 2</code> should evaluate to <code>6</code>.</li>
                                <li>The expression <code>3 * 6 - 7 + 2</code> should evaluate to <code>13</code>.</li>
                                <li>The expression <code>6 * 2 + (5 - 3) * 3 - 8</code> should evaluate
                                    to <code>10</code>.
                                </li>
                                <li>The expression <code>(3 + 4) + 7 * 2 - 1 - 9</code> should evaluate
                                    to <code>11</code>.
                                </li>
                                <li>The expression <code>5 - 2 + 4 * (8 - (5 + 1)) + 9</code> should evaluate
                                    to <code>20</code>.
                                </li>
                                <li>The expression <code>(8 - 1 + 3) * 6 - ((3 + 7) * 2)</code> should evaluate
                                    to <code>40</code>.
                                </li>
                            </ul>
                        </p>
                        <p>
                            This is the end of the tutorial part of the documentation. The following sections provides
                            deeper insight into
                            how GLASS works. Happy reading!
                        </p>
                    </div>
            }
        ]
    },
    {
        name: "Scripting Details",
        content:
            <div>
                <h1>Scripting Details</h1>
                {lineBreak}
                <p>
                    This section contains details on each individual data type, function, and miscellaneous capability
                    of
                    the GLASS interpretation script system.
                </p>
            </div>,
        subsections : [
            {
                name : 'Statements',
                content :
                    <div>
                        <h1>Statements</h1>
                        {lineBreak}
                        <p>
                            There are six statement types in the GLASS scripting system:
                            <ul>
                                <li>Variable assignment statements</li>
                                <li>Function call statements</li>
                                <li>Accessed function statements</li>
                                <li>Return statements</li>
                                <li>If statements</li>
                                <li>While loop statements</li>
                            </ul>
                            Details on each statement type can be found below.
                        </p>
                        <h2>Variable assignment statements</h2>
                        <p>
                            A variable assignment statement can be used to assign a value to a variable. This variable
                            can then be used in future expressions, and its value will be read and used during the
                            expression's evaluation. A variable assignment statement consists of a variable identifier,
                            an equals
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
                            A function call statement consists of a function name, an open parenthesis <code>(</code>, a
                            list of
                            arguments, and a closed parenthesis <code>)</code>, followed by a semicolon <code>;</code>.
                        </p>
                        <p>
                            Pre-defined function, along with their names and their allowed parameters, can be found in
                            the
                            list of functions under Section 5.4 Functions.
                        </p>
                        <p>
                            Below is an example of a valid function call statement (assume <code>name</code> is a
                            predefined variable storing a String):
                        </p>
                        <code>
                            print("My name is", name);
                        </code>
                        <h2>Accessed function statements</h2>
                        <p>
                            Object data types may have their internal functions accessed within an isolated statement.
                            An accessed function statement must consist of some object, a period <code>.</code>,
                            followed by some
                            function that is accessible within that object.
                        </p>
                        <p>
                            Note that the object whose function is accessed does not need to be explicitly named, and
                            can be specified implicitly, meaning you can chain a series of object accesses before
                            your final function access.
                        </p>
                        <p>
                            For example, if <code>fruits</code> is the array <code>[apple, banana, cherry]</code>, then
                        </p>
                        <code>fruits[1].substring(1, 4).length();</code>
                        <p>
                            is a valid accessed function statement (though not a very useful one, since you are not
                            doing anything with the returned value).
                        </p>
                        <h2>Return statements</h2>
                        <p>
                            In any function, or within an interpretation script itself, one can choose
                            to return a value to the original call of the function or script. When a return
                            statement is
                            reached, the return expression will be immediately evaluated, and its value will be
                            substituted in place
                            of the
                            original function or script call, ending the execution of the function or script. A return
                            statement
                            consists
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
                            Sometimes, you only want a series of statements to be executed if a certain condition is
                            met. For this
                            reason, we have the if statement. An if statement consists of the <code>if</code> keyword,
                            an open parenthesis <code>(</code>, a conditional expression, a closed
                            parenthesis <code>)</code>, an
                            open brace <code>&#123;</code>, a series of statements, followed by a closed
                            brace <code>&#125;</code>.
                        </p>
                        <p>
                            The series of statements placed between the open and closed braces will only be executed if
                            the conditional
                            expression placed within the if statement is evaluated to be true.
                        </p>
                        <p>
                            In some cases, you will want to execute some series of statements if a condition is true,
                            and another
                            series of statements if the condition is false. For this reason, you may add an "else" block
                            to your if statement, which
                            can be placed immediately after the last closing brace <code>&#125;</code> of an if
                            statement. This
                            else block consists of the <code>else</code> keyword, an open brace <code>&#123;</code>, a
                            series of
                            statements, and by a closed brace <code>&#125;</code>.
                        </p>
                        <p>
                            In this case, the series of statements placed within the else block will only be executed if
                            the conditional
                            expression placed within the if statement is evaluated to be false.
                        </p>
                        <p>
                            Below is an example of a valid if statement, where the script will
                            print <code>Hooray!</code> if the value
                            of <code>x</code> is 3, otherwise, the script will print <code>Aw man!</code>:
                        </p>
                        <code>
                            if (x == 3) &#123; <br/>
                            {tab}print("Hooray!"); <br/>
                            &#125; else &#123; <br/>
                            {tab}print("Aw man!");<br/>
                            &#125;
                        </code>
                        <h2>While loop statements</h2>
                        <p>
                            While loops allow you to execute a series of statements continuously, as long as a certain
                            condition is met. This is useful for when you need to perform the same action multiple
                            times,
                            perhaps with some small change between each iteration of the action. A while statement
                            consists
                            of the <code>while</code> keyword, an open parenthesis <code>(</code>, a conditional
                            expression, a closed parenthesis <code>)</code>,
                            an open brace <code>&#123;</code>, a series of statements, followed by a closed
                            brace <code>&#125;</code>.
                        </p>
                        <p>
                            When a while loop is reached, the conditional expression within the parentheses will be
                            evaluated. If its value is true, the series of statements within the while loop will be
                            executed, otherwise, the while loop will be skipped over.
                        </p>
                        <p>
                            In the event that the while loop is entered and the statements inside the braces are
                            executed,
                            after the last statement is executed, the conditional expression for the while loop will be
                            reevaluated. If the condition is still true, all of the statements within the loop will be
                            executed again, otherwise, the while loop will be exited.
                        </p>
                        <p>
                            Below is an example of a series of statements that use a while loop to print the
                            numbers <code>1</code> through <code>10</code>.
                        </p>
                        <code>
                            int i = 1;<br/>
                            while (i &lt;= 10) &#123;<br/>
                            {tab}print(i);<br/>
                            {tab}i = i + 1;<br/>
                            &#125;
                        </code>
                        <h2>Tutorial: Building your first GLASS language</h2>
                        <p>
                            Within the <code>expression.gscript</code> file you have created, type or copy the
                            following two lines of code. This code contains the <code>traverse</code> function,
                            which has yet to be explained, but will be explained in the following section, Section 4.2
                            Production Functions.
                        </p>
                        <code>
                            print("Final result:", parseTree.traverse());<br/>
                            <br/>
                            # Production functions go here
                        </code>
                    </div>
            },
            {
                name: "Primitive Data Types",
                content:
                    <div>
                        <h1>Primitive Data Types</h1>
                        {lineBreak}
                        <h2>Supported primitive data types</h2>
                        <p>
                            GLASS supports the following primitive data types:
                        </p>
                        <ul>
                            <li><code>int</code> - Internally represented using the <code>int</code> data type in Java.
                                Can store any 32-bit integer.
                            </li>
                            <li><code>float</code> - Internally represented using the <code>double</code> data type in
                                Java. Can store any 64-bit double precision floating point number.
                            </li>
                            <li><code>boolean</code> - Internally represented using the <code>boolean</code> data type
                                in Java. Can store the values <code>true</code> and <code>false</code>.
                            </li>
                        </ul>
                    </div>
            },
            {
                name: "Object Data Types",
                content:
                    <div>
                        <h1>Object Data Types</h1>
                        {lineBreak}
                        <h2>Supported object data types</h2>
                        <p>
                            GLASS supports a variety of object data types, all of which are used in a similar way.
                            Subsections of this portion of the documentation contain in-depth explanations of each
                            object data type, and how they can be used.
                        </p>
                        <h2>Accessing fields and functions within an object</h2>
                        <p>
                            Object data types may have multiple fields or functions that are accessible through the
                            object itself. For example, the String object type has the accessible
                            function <code>length</code>.
                            In order to access these fields and functions, in an interpretation script, and object must
                            be followed by a period <code>.</code>, then the name of the field or function you wish to
                            access. Below is an example of a print statement which prints the value <code>12</code>, the
                            value returned by accessing the <code>length</code> function within the String shown.
                        </p>
                        <code>
                            print("Hello world!".length());
                        </code>
                        <h2>Declaring object values</h2>
                        <p>
                            With the exception of Arrays and Strings (whose declaration processes are outlined in the
                            respective sections 5.3.1 Array and 5.3.2 String), all objects that can be declared are
                            declared using the <code>new</code> keyword, followed by the object's type (case sensitive),
                            then an open parenthesis <code>(</code>, a list of constructor arguments, and finally a
                            closed parenthesis <code>)</code>. The code below gives an example of a File object
                            being declared:
                        </p>
                        <code>
                            myFile = new File("some-file.txt");
                        </code>
                    </div>,
                subsections: [
                    {
                        name: "Array",
                        content:
                            <div>
                                <h1>Array</h1>
                                {lineBreak}
                                <h2>Declaring an Array</h2>
                                <p>
                                    Arrays can be declared in an interpretation script using an array literal, which
                                    consists of an open bracket <code>[</code>, a list of expressions seperated with
                                    commas <code>,</code>, followed by a closed bracket <code>]</code>. All expressions
                                    in the array literal are evaluated before the array is used. An example
                                    of a variable being set to an Array object using an array literal is shown below:
                                </p>
                                <code>
                                    myArray = [1 + 3*4, true, "homeowner".substring(2, 6)];
                                </code>
                                <h2>Accessible fields</h2>
                                <h3><code>length</code></h3>
                                <p>
                                    This field contains the number of elements within the array. For the example array
                                    shown above, <code>myArray.length</code> would contain the value <code>3</code>.
                                </p>
                                <h2>Accessible functions</h2>
                                <h3><code>add(value)</code></h3>
                                <p>
                                    This function appends the specified <code>value</code> to
                                    the end of the array, and returns <code>null</code>.
                                </p>
                                <h3><code>add(value, index)</code></h3>
                                <p>
                                    This function inserts the specified <code>value</code> at the
                                    specified <code>index</code> of
                                    the array, causing all values at or above the provided <code>index</code> to be
                                    shifted
                                    up one index to make room for the inserted value. This function
                                    returns <code>null</code>.
                                </p>
                                <h3><code>remove(index)</code></h3>
                                <p>
                                    This function removes the value at the specified <code>index</code> from the list,
                                    and returns the removed value. Values in the array that appear after the
                                    specified <code>index</code> will
                                    have their index decreased once the specified value is removed.
                                </p>
                                <h3><code>push(value)</code></h3>
                                <p>
                                    This function is equivalent to <code>add(value, 0)</code>, and inserts the
                                    specified <code>value</code> at the front of the array. This function
                                    returns <code>null</code>.
                                </p>
                                <h3><code>pop()</code></h3>
                                <p>
                                    This function is equivalent to <code>remove(0)</code>, and removes the
                                    value at the front of the array, returning the removed value.
                                </p>
                            </div>
                    },
                    {
                        name: "String",
                        content:
                            <div>
                                <h1>String</h1>
                                {lineBreak}
                                <h2>Declaring a String</h2>
                                <p>
                                    Strings can be declared in an interpretation script using a string literal, which
                                    consists of a quotation mark <code>"</code>, then some text, followed by a
                                    second quotation mark<code>"</code>. The text between the quotation marks will
                                    be used as the value of the String. An
                                    example of a variable being set to a String object using an String literal is shown
                                    below:
                                </p>
                                <code>
                                    myString = "Hello world!";
                                </code>
                                <h2>Escape sequences</h2>
                                <p>
                                    Certain characters cannot be typed within a string literal without presenting issues
                                    in
                                    parsing. For this purpose, escape sequences exist for representing these characters.
                                    All escape sequences being with the reserved backslash <code>\</code> character, and
                                    all currently supported escape sequences are listed below:
                                </p>
                                <ul>
                                    <li><code>\n</code> - Represents a newline character</li>
                                    <li><code>\t</code> - Represents a tab character</li>
                                    <li><code>\r</code> - Represents a return character</li>
                                    <li><code>\"</code> - Represents a quotation mark</li>
                                    <li><code>\\</code> - Represents a backslash</li>
                                </ul>
                                <h2>Accessible fields</h2>
                                <p>
                                    This object type contains no accessible fields.
                                </p>
                                <h2>Accessible functions</h2>
                                <h3><code>length()</code></h3>
                                <p>
                                    This function returns the length of the String that the function is called
                                    on, as an <code>int</code>.
                                </p>
                                <h3><code>substring(start, end)</code></h3>
                                <p>
                                    This function returns the substring contained within the String that the function
                                    is called on, starting at index <code>start</code> of the String (inclusive), and
                                    ending at index <code>end</code> of the string (exclusive).
                                </p>
                            </div>
                    },
                    {
                        name: "File",
                        content:
                            <div>
                                <h1>File</h1>
                                {lineBreak}
                                <h2>Declaring a File</h2>
                                <p>
                                    Files can be declared using the declaration format described in Section 5.3 Object
                                    Data Types. The File constructor takes a single argument, the path of the file
                                    which the declared File object will refer to. Below is an example of how to
                                    use the File constructor:
                                </p>
                                <code>
                                    myFile = new File("some-file.txt");
                                </code>
                                <h2>Accessible fields</h2>
                                <p>
                                    This object type contains no accessible fields.
                                </p>
                                <h2>Accessible functions</h2>
                                <h3><code>open(mode)</code></h3>
                                <p>
                                    This function opens the file at the path specified in the File objects constructor.
                                    The <code>mode</code> argument must either be set to the String <code>read</code> or
                                    the String <code>write</code>, and determines whether the file should be opened in
                                    read or write mode, respectively. This function returns the File object it was
                                    called on.
                                </p>
                                <h3><code>close()</code></h3>
                                <p>
                                    This function closes the file which has been opened by the File object, and
                                    returns <code>null</code>.
                                </p>
                                <h3><code>isOpen()</code></h3>
                                <p>
                                    Returns <code>true</code> if the File object currently has its file open, otherwise
                                    returns <code>false</code>.
                                </p>
                                <h3><code>getMode()</code></h3>
                                <p>
                                    This function returns the String <code>"read"</code> if the File object is opened in read
                                    mode, <code>"write"</code> if the File object is opened in write mode, otherwise
                                    returning <code>"closed"</code> if the File object is not currently open.
                                </p>
                                <h3><code>write(data)</code></h3>
                                <p>
                                    If the File is opened in write mode, this function will write the String representation
                                    of the specified <code>data</code> to the open file, then returns <code>null</code>.
                                </p>
                                <h3><code>read()</code></h3>
                                <p>
                                    If the File is opened in read mode, this function will return the full contents of
                                    the opened file as a String.
                                </p>
                                <h3><code>readLine()</code></h3>
                                <p>
                                    If the File is opened in read mode, this function will return the contents of the
                                    opened file up until a newline character, as a String. If this function is called
                                    again, this function will continue from the character after the previously found
                                    newline character, reading until another newline character is found, and so on.
                                </p>
                                <h3><code>hasNextLine()</code></h3>
                                <p>
                                    If the File is opened in read mode, returns <code>true</code> if the file contains
                                    at least one more line of text to read, otherwise returns <code>false</code>.
                                </p>
                            </div>
                    },
                    {
                        name: "SyntaxDefinition",
                        content:
                            <div>
                                <h1>SyntaxDefinition</h1>
                                {lineBreak}
                                <h2>Declaring a SyntaxDefinition</h2>
                                <p>
                                    SyntaxDefinitions can be declared using the declaration format described in Section
                                    5.3 Object
                                    Data Types. The SyntaxDefinition constructor takes a single argument, the path of
                                    the
                                    syntax definition file which the declared SyntaxDefinition object will refer to.
                                    Below is an example of how to use the SyntaxDefinition constructor:
                                </p>
                                <code>
                                    mySyntaxDefinition = new SyntaxDefinition("some-file.syntax");
                                </code>
                                <h2>Accessible fields</h2>
                                <p>
                                    This object type contains no accessible fields.
                                </p>
                                <h2>Accessible functions</h2>
                                <h3><code>load()</code></h3>
                                <p>
                                    This function loads and parses the contents of the syntax definition file at
                                    the path provided in the SyntaxDefinition's constructor, and returns the
                                    SyntaxDefinition object itself.
                                </p>
                                <h3><code>ingest(source)</code></h3>
                                <p>
                                    If the SyntaxDefinition has been loaded, this function takes a String as an
                                    argument, and returns a ParseNode object containing the parsed contents of the
                                    provided String, using the rules provided in the loaded syntax definition file.
                                </p>
                            </div>
                    },
                    {
                        name: "Script",
                        content:
                            <div>
                                <h1>Script</h1>
                                {lineBreak}
                                <h2>Declaring a Script</h2>
                                <p>
                                    Scripts can be declared using the declaration format described in Section
                                    5.3 Object
                                    Data Types. The Script constructor takes a single argument, the path of
                                    the
                                    interpretation script file which the declared Script object will refer to.
                                    Below is an example of how to use the Script constructor:
                                </p>
                                <code>
                                    myScript = new Script("some-file.gscript");
                                </code>
                                <h2>Accessible fields</h2>
                                <p>
                                    This object type contains no accessible fields.
                                </p>
                                <h2>Accessible functions</h2>
                                <h3><code>load()</code></h3>
                                <p>
                                    This function loads and parses the contents of the interpretation script file at
                                    the path provided in the Script's constructor, and returns the Script object itself.
                                </p>
                                <h3><code>execute(parseTree)</code></h3>
                                <p>
                                    If the Script has been loaded, this function takes a ParseNode object as an
                                    argument, and returns the value returns by the loaded interpretation script.
                                    If the interpretation script returns no value, this function returns <code>null</code>.
                                </p>
                            </div>
                    },
                    {
                        name: "ParseNode",
                        content:
                            <div>
                                <h1>ParseNode</h1>
                                {lineBreak}
                                <h2>Declaring a ParseNode</h2>
                                <p>
                                    ParseNode objects cannot be declared, and can only be retrieved from the
                                    SyntaxDefinition object's <code>ingest</code> function (See Section 5.3.4 SyntaxDefinition).
                                </p>

                                <h2>Accessible fields</h2>
                                <p>
                                    This object type contains no accessible fields.
                                </p>
                                <h2>Accessible functions</h2>
                                <h3><code>traverse(optional_argument_list)</code></h3>
                                <p>
                                    This function is unique in that it will call a particular production function within the
                                    current interpretation script file based on the contents of the ParseNode object it is
                                    called on.
                                </p>
                                <p>
                                    If the ParseNode the function is called on contains a non-terminal, the production function
                                    that was used as a result of that non-terminal will be called. The variable "children" within
                                    the called production function will be set to an array of ParseNode objects, the children
                                    of the ParseNode that the <code>traverse</code> function was called on. If no production
                                    function exists that corresponds to the production used by the given non-terminal, this
                                    function will simply return <code>null</code>.
                                </p>
                                <p>
                                    The <code>traverse</code> function can take in an optional list of parameters. This list
                                    of parameters will be stored as an array within the <code>args</code> variable within
                                    the called production function, where individual arguments passed to the function may
                                    be accessed by indexing the <code>args</code> array.
                                </p>
                            </div>
                    }
                ]
            },
            {
                name: "Functions",
                content:
                    <div>
                        <h1>Functions</h1>
                        {lineBreak}
                        <h2>What are functions?</h2>
                        <p>
                            Functions act as a shorthand way to perform certain actions within an interpretation script.
                            These actions can range from user input and output, to converting the types of values, and
                            more. Functions can take in a list of values, and return some resulting value.
                        </p>
                        <h2>Calling a function</h2>
                        <p>
                            To call a function in an interpretation script, the name of the function must be
                            specified, followed by an open parenthesis <code>(</code>, a list of arguments to be
                            passed to the function, and a closed parenthesis <code>)</code>. When a function is called
                            the values in the list of arguments will be "passed" to the function, where a series of
                            operations will be performed, and a resulting value may be returned. Below is an example of'
                            using the <code>function</code>. In the statement below, the variable <code>x</code> will
                            be set to the String <code>"boolean"</code>.
                        </p>
                        <code>
                            x = type(false);
                        </code>
                    </div>,
                subsections: [
                    {
                        name: "I/O Functions",
                        content:
                            <div>
                                <h1>I/O Functions</h1>
                                {lineBreak}
                                <p>
                                    These functions can be used to handle certain aspects of user input and output.
                                </p>
                                <h3><code>print(argument_list)</code></h3>
                                <p>
                                    This function takes in a list of values, and prints each value to the command line
                                    standard output. If multiple arguments are specified, each value will be printed
                                    with a space between individual values. This function returns <code>null</code>.
                                </p>
                                <h3><code>prompt(message)</code></h3>
                                <p>
                                    This function is used to receive some user input. When called, the command line
                                    standard input is used to receive a String value typed by the user, which is then
                                    returned by this function.
                                </p>
                                <p>
                                    The <code>message</code> argument
                                    is an optional argument, which if provided, will have its value printed to the
                                    command line standard output before the standard input is opened for user input.
                                    This argument allows you to prompt the user with some message before receiving
                                    input.
                                </p>
                            </div>
                    },
                    {
                        name: "Type Conversion Functions",
                        content:
                            <div>
                                <h1>Type Conversion Functions</h1>
                                {lineBreak}
                                <h3><code>int(value)</code></h3>
                                <p>
                                    This function takes the <code>value</code> provided and attempts to convert it to
                                    an integer value. This function returns the converted <code>int</code> value, or
                                    <code>0</code> if the type conversion is unable to be performed.
                                </p>
                                <h3><code>float(value)</code></h3>
                                <p>
                                    This function takes the <code>value</code> provided and attempts to convert it to
                                    an float value. This function returns the converted <code>float</code> value, or
                                    <code>0.0</code> if the type conversion is unable to be performed.
                                </p>
                                <h3><code>boolean(value)</code></h3>
                                <p>
                                    This function takes the <code>value</code> provided and attempts to convert it to
                                    an boolean value. This function returns the converted <code>boolean</code> value, or
                                    <code>false</code> if the type conversion is unable to be performed.
                                </p>
                                <h3><code>string(value)</code></h3>
                                <p>
                                    This function takes the <code>value</code> provided and attempts to convert it to
                                    an String value. This function returns the converted <code>String</code> value.
                                </p>
                            </div>
                    },
                    {
                        name: "Miscellaneous Functions",
                        content:
                            <div>
                                <h1>Miscellaneous Functions</h1>
                                {lineBreak}
                                <h3><code>type(value)</code></h3>
                                <p>
                                    This function returns a <code>String</code> value containing the name of the type
                                    of the provided <code>value</code>. For example, the function
                                    call <code>type(1.4)</code> would return the String <code>"float"</code>.
                                </p>
                            </div>
                    },
                    {
                        name: "User Defined Functions",
                        content:
                            <div>
                                <h1>User Defined Functions</h1>
                                {lineBreak}
                                <p>
                                    Within an interpretation script, the user may define custom function by using
                                    the <code>function</code> keyword, followed by an identifier which will act as the
                                    name of the function, an open parenthesis <code>(</code>, a list of parameters
                                    accepted by the function, a closed parenthesis <code>)</code>, an open
                                    brace <code>&#123;</code>, a list of statements, and finally a closed
                                    brace <code>&#125;</code>.
                                </p>
                                <p>
                                    User defined functions can be called in the same way that all other functions can
                                    be called. When called, the values passed as arguments to the function will be
                                    stored in the local parameter names specified in the function definition, the
                                    series of statements within the function will be executed, and if the function
                                    contains a <code>return</code> statement, that value will be returned to the
                                    original call of the user defined function. If no <code>return</code> statement
                                    is reached in the user defined function, the function will return <code>null</code>.
                                </p>
                                <p>
                                    Below is an example of a user defined function for computing the value of a
                                    value <code>x</code> raised to the power of some exponent <code>exp</code>.
                                    For example, if the statement <code>print(power(3, 4));</code> was executed, the
                                    value <code>81</code> would be printed.
                                </p>
                                <code>
                                    function power(x, exp) &#123;<br/>
                                    {tab}if (exp == 0) &#123;<br/>
                                    {tab}{tab}return 1;<br/>
                                    {tab}&#125; else &#123;<br/>
                                    {tab}{tab}return x * power(x, exp-1);<br/>
                                    {tab}&#125;<br/>
                                    &#125;
                                </code>
                            </div>
                    }
                ]
            },
            {
                name: "Additional Capabilities",
                content:
                    <div>
                        <h1>Additional Capabilities</h1>
                        {lineBreak}
                        <h2>Variable scope</h2>
                        <p>
                            Within a GLASS interpretation script, variable will hold their assigned value as the scope
                            within which that variable's value was set is maintained. Variable scope narrows each
                            time a pair of braces <code>{}</code> is entered, and widens when the braces are exited.
                        </p>
                        <p>
                        For example, in the code below, the first print statement will print <code>1 2</code>, while
                            the second print statement will print <code>1 null</code>, because the value of the
                            variable <code>y</code> exists only within the scope of the <code>if</code> statement where
                            the value was set.
                        </p>
                        <code>
                            x = 1;<br/>
                            <br/>
                            if (true) &#123;<br/>
                            {tab}y = 2;<br/>
                            {tab}print(x, y);<br/>
                            &#125;<br/>
                            <br/>
                            print(x, y);
                        </code>
                    </div>
            }
        ]
    },
    // {
    //     name: "GUI",
    //     content:
    //         <div>
    //             <h1>GUI</h1>
    //             {lineBreak}
    //             <p>
    //                 This section contains details on GLASS GUI.
    //             </p>
    //         </div>
    //
    // }
]

export default documentation;