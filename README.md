# Frontend Mentor - Sunnyside agency landing page solution

This is a solution to the [Sunnyside agency landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/sunnyside-agency-landing-page-7yVs3B6ef). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Author](#author)



## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

<!-- ![](../screenshot.jpg) -->
<!-- ![Design preview for the Sunnyside agency landing page coding challenge](./screenshot/screenshot.jpg) -->
![Sunnyside-preview](https://github.com/bengera/sunnyside/blob/main/screenshot/screenshot.JPG)


### Links

- Solution URL: [Sunnyside Landing page](https://bengera.github.io/sunnyside/)


<!-- ## My process -->

### Built with

- Semantic HTML5 markup
- SASS
- Flexbox
- CSS Grid
- Desktop-first workflow


### What I learned

In this project I got to practice using flexbox and CSS grid in combination together.
Using the BEM method I was able to write more scalable and maintainble CSS.

I used very basic DOM manipulation to create a toggle effect for the mobile navigation.

<!-- ```html

```

```css

``` -->

```js
hamburgerNav.addEventListener('click', () => {
    if (navigation.style.display === "none") {
        navigation.style.display="block";
        navigation.classList.add('open')
    } else {
        navigation.style.display = "none";
        navigation.classList.remove('open')
    }
    
});
```

## Author

- Website - [Ben Geraghty](https://bengera.github.io/main-portfolio/)
- Frontend Mentor - [bengera](https://www.frontendmentor.io/profile/bengera)



