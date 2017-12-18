---
title: "Font Icons"
category: "Foundation"
---

<section>

<div class="container">

<h3 class="page-header">Font Icons</h3>

We are promoting the use of [Material design font icons](https://google.github.io/material-design-icons/). These font icons are simple, modern and friendly. Each icon is created using Material design guidelines to depict in simple and minimal forms the universal concepts used commonly throughout a user interface.

In some cases (design need or topical icons) [Font Awesome](https://fontawesome.com/) can be used as a secondary option.

When you have to use a special icon (for a product / event / campaign) we recommend using Scalable Vector Graphic (SVG) formats only. By not using the traditional pixel-based formats (.GIF .PNG .JPEG) you ensure a high quality display at any screen depth (e.g., HD / Retina / UHD).

<hr />

#### <span class="h4-light">Material Design font icons</span>

- [Material icons guide](https://google.github.io/material-design-icons/)
- See the full set of icons in the [Material Icons Library](https://material.io/icons/)

#### <span class="h4-light">Git repository</span>

The material icons are available from the git repository which contains the complete set of icons including all the various formats we are making available.

```
git clone http://github.com/google/material-design-icons/
```

#### <span class="h4-light">Icon font for the web</span>

The material icon font is the easiest way to incorporate material icons with web projects. We have packaged all the material icons into a single font that takes advantage of the typographic rendering capabilities of modern browsers so that web developers can easily incorporate these icons with only a few lines of code.

##### Setup Method 1. Using via Google Web Fonts

The easiest way to set up icon fonts for use in any web page is through Google Web Fonts. All you need to do is include a single line of HTML:

```
<link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet">
```


Similar to other Google Web Fonts, the correct CSS will be served to activate the 'Material Icons' font specific to the browser. An additional CSS class will be declared called .material-icons. Any element that uses this class will have the correct CSS to render these icons from the web font.

##### Setup Method 2. Self hosting

For those looking to self host the web font, some additional setup is necessary. Host the icon font in a location, for example https://example.com/material-icons.woff and add the following CSS rule:

```
@font-face {
 font-family: 'Material Icons';
 font-style: normal;
 font-weight: 400;
  src: url(https://example.com/MaterialIcons-Regular.eot); /* For IE6-8 */
  src: local('Material Icons'),
    local('MaterialIcons-Regular'),
    url(https://example.com/MaterialIcons-Regular.woff2) format('woff2'),
    url(https://example.com/MaterialIcons-Regular.woff) format('woff'),
    url(https://example.com/MaterialIcons-Regular.ttf) format('truetype');
}
```

In addition, the CSS rules for rendering the icon will need to be declared to render the font properly. These rules are normally served as part of the Google Web Font stylesheet, but will need to be included manually in your projects when self-hosting the font:

```
.material-icons {
  font-family: 'Material Icons';
  font-weight: normal;
  font-style: normal;
  font-size: 24px;  /* Preferred icon size */
  display: inline-block;
  line-height: 1;
  text-transform: none;
  letter-spacing: normal;
  word-wrap: normal;
  white-space: nowrap;
  direction: ltr;

  /* Support for all WebKit browsers. */
  -webkit-font-smoothing: antialiased;
  /* Support for Safari and Chrome. */
  text-rendering: optimizeLegibility;

  /* Support for Firefox. */
  -moz-osx-font-smoothing: grayscale;

  /* Support for IE. */
  font-feature-settings: 'liga';
}
```

</div>

</section>