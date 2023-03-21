# Testing

Return back to the [README.md](README.md) file.


## Code Validation


### HTML

I have used the recommended [HTML W3C Validator](https://validator.w3.org) to validate all of my HTML files.


| Page | W3C URL | Screenshot | Notes |
| --- | --- | --- | --- |
| Home | [W3C](https://validator.w3.org/nu/?doc=https%3A%2F%2FLewisMDillon.github.io%2FBushy-Park-Social-Tennis%2Findex.html) | ![screenshot](documentation/html-validation-home.png) |  Pass: No Errors |
| Form | [W3C](https://validator.w3.org/nu/?doc=https%3A%2F%2Flewismdillon.github.io%2FBushy-Park-Social-Tennis%2Fform.html) | ![screenshot](documentation/html-validation-form.png) | Pass: No Errors |
| Confirmation | [W3C](https://validator.w3.org/nu/?doc=https%3A%2F%2Flewismdillon.github.io%2FBushy-Park-Social-Tennis%2Fconfirmation.html) | ![screenshot](documentation/html-validation-confirmation.png) | Pass: No Errors |


### CSS

I have used the recommended [CSS Jigsaw Validator](https://jigsaw.w3.org/css-validator) to validate all of my CSS files.



| File | Jigsaw URL | Screenshot | Notes |
| --- | --- | --- | --- |
| style.css | [Jigsaw](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2FLewisMDillon.github.io%2FBushy-Park-Social-Tennis) | ![screenshot](documentation/css-validation-style.png) | Pass: No Errors |


### JavaScript

I have used the recommended [JavaScript JSHint validatior](https://www.jshint.com) to validate my JavaScript file.

| File | Screenshot | Notes |
| --- | --- | --- |
| script.js | ![jshint](documentation/js.png) | No errors/warnings |

## Browser Compatibility


I've tested my deployed project on multiple browsers to check for compatibility issues.

| Browser | Screenshot | Notes |
| --- | --- | --- |
| Chrome | ![screenshot](documentation/browser-chrome.png) | Works as expected |
| Firefox | ![screenshot](documentation/browser-firefox.png) | Minor font display diffeerences |
| Edge | ![screenshot](documentation/browser-edge.png) | No smooth-scrolling |
| Safari | ![screenshot](documentation/browser-safari.png) | Works as expected |
| Brave | ![screenshot](documentation/browser-brave.png) | No smooth-scrolling |
| Opera | ![screenshot](documentation/browser-opera.png) | Works as expected |
| Internet Explorer | ![screenshot](documentation/browser-iex.png) | Multiple broken CSS elements |

## Responsiveness


I've tested my deployed project on multiple devices to check for responsiveness issues.

| Device | Screenshot | Notes |
| --- | --- | --- |
| Mobile (Oneplus Nord 2 - Chrome) | ![screenshot](documentation/responsive-oneplus.png) | Works as expected |
| Mobile (Chrome DevTools) | ![screenshot](documentation/responsive-mobile.png) | Works as expected |
| Tablet (Apple iPad OS 14.6 - Chrome) | ![screenshot](documentation/responsive-ipad.png) | Works as expected |
| Tablet (Chrome DevTools) | ![screenshot](documentation/responsive-tablet.png) | Works as expected |
| Desktop | ![screenshot](documentation/responsive-desktop.png) | Works as expected |
| XL Monitor | ![screenshot](documentation/responsive-xl.png) | Scaling starts to have minor issues |
| 4K Monitor | ![screenshot](documentation/responsive-4k.png) | Noticeable scaling issues |
| Google Pixel 7 | ![screenshot](documentation/responsive-google-pixel-7.png) | Works as expected |
| iPhone 14 | ![screenshot](documentation/responsive-iphone-14.png) | Works as expected |


## Lighthouse Audit


I've tested my deployed project using the Lighthouse Audit tool to check for any major issues.

| Page | Size | Screenshot | Notes |
| --- | --- | --- | --- |
| Home | Mobile | ![screenshot](documentation/lighthouse-home-mobile.png) | Some minor warnings |
| Home | Desktop | ![screenshot](documentation/lighthouse-home-desktop.png) | No warnings |
| Form | Mobile | ![screenshot](documentation/lighthouse-form-mobile.png) | Some minor warnings |
| Form | Desktop | ![screenshot](documentation/lighthouse-form-desktop.png) | No warnings |
| Confirmation | Mobile | ![screenshot](documentation/lighthouse-confirmation-mobile.png) | Warning about auto-direct |
| Confirmation | Desktop | ![screenshot](documentation/lighthouse-confirmation-desktop.png) | Warning about auto-direct |
|

## Bugs

⚠️⚠️⚠️⚠️⚠️ START OF NOTES (to be deleted) ⚠️⚠️⚠️⚠️⚠️

It's very important to document any bugs you've discovered while developing the project.
Make sure to include any necessary steps you've implemented to fix the bug(s) as well.

For JavaScript and Python applications, it's best to screenshot the errors to include them as well.

**PRO TIP**: screenshots of bugs are extremely helpful, and go a long way!

🛑🛑🛑🛑🛑 END OF NOTES (to be deleted) 🛑🛑🛑🛑🛑

- HTML Accesibility Issue - radio buttons too close together

    ![screenshot](documentation/bug01.png)

    - To fix this, I added an extra line break to the radio button list in the html code.

- CSS Accessibility Issue - image overlay text color not contrasting enough with background

    ![screenshot](documentation/bug02.png)

    - To fix this, I darkened the overlay gradient colors in style.css.

- CSS Accessibility Issue - icon hover color not contrasting enough with background

    ![screenshot](documentation/bug03.png)

    - To fix this, I changed the color of both the icon and background in style.css

- CSS - Sections overlapping one another.

    ![screenshot](documentation/bug04.png)

    - To fix this, I removed height attributes from sections in style.css

- CSS - Images not showing on deployed site

    ![screenshot](documentation/bug05.png)

    - To fix this, I removed the slash from the start of the image url.

### GitHub **Issues**

⚠️⚠️⚠️⚠️⚠️ START OF NOTES (to be deleted) ⚠️⚠️⚠️⚠️⚠️

An improved way to manage bugs is to use the built-in **Issues** tracker on your GitHub repository.
To access your Issues, click on the "Issues" tab at the top of your repository.
Alternatively, use this link: https://github.com/LewisMDillon/Bushy-Park-Social-Tennis/issues

If using the Issues tracker for your bug management, you can simplify the documentation process.
Issues allow you to directly paste screenshots into the issue without having to first save the screenshot locally,
then uploading into your project.

You can add labels to your issues (`bug`), assign yourself as the owner, and add comments/updates as you progress with fixing the issue(s).

Once you've sorted the issue, you should then "Close" it.

When showcasing your bug tracking for assessment, you can use the following format:

🛑🛑🛑🛑🛑 END OF NOTES (to be deleted) 🛑🛑🛑🛑🛑

**Fixed Bugs**

All previously closed/fixed bugs can be tracked [here](https://github.com/LewisMDillon/Bushy-Park-Social-Tennis/issues?q=is%3Aissue+is%3Aclosed).

| Bug | Status |
| --- | --- |
| [JS Uncaught ReferenceError: `foobar` is undefined/not defined](https://github.com/LewisMDillon/Bushy-Park-Social-Tennis/issues/1) | Closed |
| [Python `'ModuleNotFoundError'` when trying to import module from imported package](https://github.com/LewisMDillon/Bushy-Park-Social-Tennis/issues/2) | Closed |
| [Django `TemplateDoesNotExist` at /appname/path appname/template_name.html](https://github.com/LewisMDillon/Bushy-Park-Social-Tennis/issues/3) | Closed |

**Open Issues**

Any remaining open issues can be tracked [here](https://github.com/LewisMDillon/Bushy-Park-Social-Tennis/issues).

| Bug | Status |
| --- | --- |
| [JS `'let'` or `'const'` or `'template literal syntax'` or `'arrow function syntax (=>)'` is available in ES6 (use `'esversion: 11'`) or Mozilla JS extensions (use moz).](https://github.com/LewisMDillon/Bushy-Park-Social-Tennis/issues/4) | Open |
| [Python `E501 line too long` (93 > 79 characters)](https://github.com/LewisMDillon/Bushy-Park-Social-Tennis/issues/5) | Open |

## Unfixed Bugs

⚠️⚠️⚠️⚠️⚠️ START OF NOTES (to be deleted) ⚠️⚠️⚠️⚠️⚠️

You will need to mention unfixed bugs and why they were not fixed.
This section should include shortcomings of the frameworks or technologies used.
Although time can be a big variable to consider, paucity of time and difficulty understanding
implementation is not a valid reason to leave bugs unfixed.

If you've identified any unfixed bugs, no matter how small, be sure to list them here.
It's better to be honest and list them, because if it's not documented and an assessor finds the issue,
they need to know whether or not you're aware of them as well, and why you've not corrected/fixed them.

Some examples:

🛑🛑🛑🛑🛑 END OF NOTES (to be deleted) 🛑🛑🛑🛑🛑

- On devices smaller than 375px, the page starts to have `overflow-x` scrolling.

    ![screenshot](documentation/unfixed-bug01.png)

    - Attempted fix: I tried to add additional media queries to handle this, but things started becoming too small to read.

- For PP3, when using a helper `clear()` function, any text above the height of the terminal does not clear, and remains when you scroll up.

    ![screenshot](documentation/unfixed-bug02.png)

    - Attempted fix: I tried to adjust the terminal size, but it only resizes the actual terminal, not the allowable area for text.

- When validating HTML with a semantic `section` element, the validator warns about lacking a header `h2-h6`. This is acceptable.

    ![screenshot](documentation/unfixed-bug03.png)

    - Attempted fix: this is a known warning and acceptable, and my section doesn't require a header since it's dynamically added via JS.

⚠️⚠️⚠️⚠️⚠️ START OF NOTES (to be deleted) ⚠️⚠️⚠️⚠️⚠️

If you legitimately cannot find any unfixed bugs or warnings, then use the following sentence:

🛑🛑🛑🛑🛑 END OF NOTES (to be deleted) 🛑🛑🛑🛑🛑

There are no remaining bugs that I am aware of.
