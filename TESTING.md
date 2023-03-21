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

I have used the recommended [JavaScript JSHint validator](https://www.jshint.com) to validate my JavaScript file.

| File | Screenshot | Notes |
| --- | --- | --- |
| script.js | ![jshint](documentation/js.png) | No errors/warnings |

## Browser Compatibility


I've tested my deployed project on multiple browsers to check for compatibility issues.

| Browser | Screenshot | Notes |
| --- | --- | --- |
| Chrome | ![screenshot](documentation/browser-chrome.png) | Works as expected |
| Firefox | ![screenshot](documentation/browser-firefox.png) | Minor font display differences |
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


- HTML Accessibility Issue - radio buttons too close together

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

    - To fix this, I removed the slash from the start of the image URL.

### GitHub **Issues**



**Fixed Bugs**

All previously closed/fixed bugs can be tracked [here](https://github.com/LewisMDillon/Bushy-Park-Social-Tennis/issues?q=is%3Aissue+is%3Aclosed).

| Bug | Status |
| --- | --- |
| [HTML Accessibility Issue - radio buttons too close together](https://github.com/LewisMDillon/Bushy-Park-Social-Tennis/issues/1) | Closed |
| [CSS Accessibility Issue - image overlay text color not contrasting enough with background](https://github.com/LewisMDillon/Bushy-Park-Social-Tennis/issues/2) | Closed |
| [CSS Accessibility Issue - icon hover color not contrasting enough with background](https://github.com/LewisMDillon/Bushy-Park-Social-Tennis/issues/3) | Closed |
| [CSS - Sections overlapping one another](https://github.com/LewisMDillon/Bushy-Park-Social-Tennis/issues/4) | Closed |
| [CSS - Images not showing on deployed site](https://github.com/LewisMDillon/Bushy-Park-Social-Tennis/issues/5) | Closed |

**Open Issues**

Open issues can be tracked [here](https://github.com/LewisMDillon/Bushy-Park-Social-Tennis/issues). All issues are currently closed.



## Unfixed Bugs

There are no remaining bugs that I am aware of.
