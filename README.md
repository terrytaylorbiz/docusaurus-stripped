# Terry stripped-down version of Documentation

### Quick guide

To install: `cd website; npm install`

To run locally: `npm start`

To build: `npm run build`


### CSS Notes

Landing page (basically) consists of the following CSS classes:

 * fixedHeaderContainer: for the navbar.
 * homeContainer: for the first section under the navbar. Defines background, color, text-align.
 * mainContainer: for the remainder of the page until the footer. Defines: background, flex, font-size.
 * nav-footer: defines footer.

For each of the sections following the first section (homeContainer), the CSS consists of the following:

  * Pick one of "container" or "productShowcaseSection". These are two classes which exist to support contextual redefinition of other properties via additional CSS classes.  So, "container padding-bottom" could be different from "productShowcaseSection padding-bottom".

  * lightBackground and darkBackground.
