## Quick and Easy Plugin for the popular "Header Fade on Scroll" effect

See a demo on [Codepen](http://codepen.io/beeeees/pen/QwVEmQ).

Requires JQuery and Hero.js file.

Example HTML code:

```

<div class="hero">
  <div id="hero-mask"></div>
  <header id="title-fade">
    <h1>Here is some header text</h1>
  </header>
</div>

<div class="full-height" style="background: blue;">
</div>

```

The `full-height` class will fit the hero's height to the browser's height, using the fullheight.js plugin. (optional)

Example CSS to get you started

```


.hero {
  background-attachment: fixed;
  width: 100%;
  background-color: #ff0000;
  opacity: 1;
  height: 600px;
}
h1, h2 {
  text-align: center;
  color: #fff;
}
h1 {
  font-size: 60px;
}
h2 {
  font-size: 19px;
}
.inner {
  height: 100%;
}
header {
  z-index: 5;
  position: relative;
  top: 50%;
  -webkit-transform: translate(0, -50%);
  -ms-transform: translate(0, -50%);
  transform: translate(0, -50%)
}
#hero-mask, .hero-mask {
  position: absolute;
  width: 100%;
  height: inherit;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0,0.7);
  opacity: 0;
  -webkit-transform: translate3d(0, 0, 0);
  -ms-transform: translate3d(0, 0. 0);
  transform: translate3d(0, 0, 0);
}

#title-fade{
  opacity: 1;
}
.full-height {
height: 1800px;
}

```