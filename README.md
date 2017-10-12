## Quick and Easy Plugin for the popular "Header Fade on Scroll" effect

See a demo on [Codepen](http://codepen.io/beeeees/pen/QwVEmQ).

Requires [JQuery](https://code.jquery.com/). Only 394b.

Example HTML code. Must have `#title-fade` and `#hero-mask` to work properly:

```
  <section id="hero">
    <div id="hero-mask"></div>
    <header id="title-fade">
      <h1>Here is some header text</h1>
    </header>
  </section>

```

The `style.css` file is optional and can be modified to your design, but include the below styles for the fade and transform effect to render properly. 

Recommended minimum CSS to get you started:

```
#hero {
  background-attachment: fixed;
  height: 100vh;
  width: 100%;
}
header {
  z-index: 2;
  position: relative;
  top: 50%;
  -webkit-transform: translate(0, -50%);
  -ms-transform: translate(0, -50%);
  transform: translate(0, -50%)
}
#hero-mask {
  position: absolute;
  width: 100%;
  height: inherit;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0,0.7);
  opacity: 0;
  transform: translate3d(0, 0, 0);
}

```