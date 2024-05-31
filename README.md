# Frontend Mentor - Article preview component solution

This is a solution to the [Article preview component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### Links

- Solution URL: [Git Repo](https://github.com/N1Dovud/Article)
- Live URL: (https://n1dovud.github.io/Article)


### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Javascript

### What I learned

```css
main {
    max-width: min(90%, 500px);
}
#drawer {
    width: min(100%, 500px);
    object-fit: cover;
    border-radius: 10px 10px 0 0;
}
.profile {
    position: relative;
}
.share {
    position: relative;
    z-index: 2;
}
.share-links {
    display: none;
    align-items: center;
    gap: 1rem;
    background-color: var(--Very-Dark-Grayish-Blue);
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    bottom: 0;
    border-radius: 0 0 10px 10px;
    padding: 0.8rem 2.5rem;
}
.svg-color {
    fill: var(--Desaturated-Dark-Blue);
}
.svg-color-click {
    fill: var(--Light-Grayish-Blue);
}
.triangle {
        position: absolute;
        left: 45%;
        top: 35px;
        border: 10px solid transparent;
        border-top-color: var(--Very-Dark-Grayish-Blue);
}
main {
        max-width: max(60%, 800px);
    }
```
```html
<section class="profile">
        <img id="profile-pic" src="images/avatar-michelle.jpg" alt="Beautiful blond female profile">
        <div class="user">
          <h3 id="username">Michelle Appleton</h3>
          <p id="date">28 Jun 2020</p>
        </div>
        <div class="share">
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13"><path class="svg-color" fill="currentColor" d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"/></svg>
          <div class="share-links desktop">
            <h3 class="share-h3">SHARE</h3>
            <img src="images/icon-facebook.svg" alt="facebook logo">
            <img src="images/icon-twitter.svg" alt="twitter logo">
            <img src="images/icon-pinterest.svg" alt="pinterest">
            <div class="triangle"></div>
          </div>
        </div>
        <div class="share-links mobile">
          <h3 class="share-h3">SHARE</h3>
          <img src="images/icon-facebook.svg" alt="facebook logo">
          <img src="images/icon-twitter.svg" alt="twitter logo">
          <img src="images/icon-pinterest.svg" alt="pinterest">
        </div>
</section>
```
```js
const svgColor = document.querySelector('.svg-color');
const shareButton = document.querySelector('.share');
const mobile = document.querySelector('.mobile');
const desktop = document.querySelector('.desktop');
shareButton.addEventListener('click', function() {
    svgColor.classList.toggle('svg-color-click');
    shareButton.classList.toggle('share-click');
    if (window.innerWidth <= 850) {
        mobile.classList.toggle('flex');
    }
    else {
        desktop.classList.toggle('flex');
    }
})
function toggleContainers() {
    if (window.innerWidth <= 850 && desktop.classList.contains('flex')) {
        desktop.classList.remove('flex');
        mobile.classList.add('flex');
    }
    else if (window.innerWidth >= 850 && mobile.classList.contains('flex')) {
        mobile.classList.remove('flex');
        desktop.classList.add('flex');
    } 
}
window.addEventListener('resize', toggleContainers);
```

### Continued development
I need to continue to learn more about the impact of the image's width on its height and striking the balance between the two. I need dig deeper into overflow states, position types and how they interact with one another, excelling in media queries, mastering css grids, becoming an expert in Javascript. 

## Author
- Frontend Mentor - [N1Dovud](https://www.frontendmentor.io/profile/N1Dovud)