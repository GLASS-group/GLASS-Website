import GLASS_logo from './GLASS_logo.png'

const article = {
    title : "New GLASS Release: Alpha 0.2.0",
    path : '11-17-24-new-glass-release-alpha-0-2-0',
    publishDate : "November 17, 2024",
    summary : "A new alpha version of GLASS has been released, and with it comes an overhaul to both " +
              "the GLASS system itself, as well as to the project website.",
    article :
        <div>
            <p>Hello GLASS-tronauts!</p>
            <p>
                We here on the GLASS team are happy to announce that our second alpha release, version 0.2.0a, has
                officially been released and is available for download now! This release comes with a plethora of
                new features. The full list of features can be found on our <a href={'/download'}>download page</a>,
                but here is a small list of notable additions:
            </p>
            <ul>
                <li>A new GUI tool for creating syntax definition files and parsing source files.</li>
                <li>A variety of new command line arguments allowing for automation using GLASS.</li>
                <li>Support for multiple new types of data within the interpretation script system.</li>
                <li>Support for user-defined functions within the interpretation script system.</li>
                <li>Variable scope now works as expected within the interpretation script system.</li>
            </ul>
            <p>
                Along with all of these new features, the <a href={'/documentation'}>documentation</a> on our website
                has been completely overhauled to reflect all of the new capabilities of GLASS.
            </p>
            <p>
                It is important to note that along with the large list of additions to GLASS, there have also been
                several changes, some of which may cause interpretation scripts from previous version of GLASS to be
                incompatible with newer versions. If you wish to update, please make sure you review the patch notes
                and new documentation to see what changes may need to be made to your scripts.
            </p>
            <p>
                In order to accommodate those who do not wish to update just yet, we have added some new pages to our
                website to allow for the viewing of information related to previous versions. As you may have noticed,
                our download page only shows the latest version, and our documentation page only shows the documentation
                for that same version. However, we now have an archive page, accessible at the bottom of
                our <a href={'/download'}>download page</a>, which contains the patch notes, a download link,
                and a link to an archive version of the documentation for all previous versions. We hope that this
                addition to our website proves to be a useful resource for all GLASS users.
            </p>
            <p>
                That's all of the updates we have for now. We hope that you enjoy the new changes both to our website as
                well as to the GLASS tool itself.
            </p>
            <h4>
                Until next time,
            </h4>
            <h3>
                Tommy Galletta
            </h3>
            <h5> Lead Developer of GLASS </h5>
        </div>,
    thumbnailImage: GLASS_logo
}

export default article;