---
slug: '/css-variable'
date: '2019-08-23'
updatedDate: '2019-08-09'
title: 'CSS Variables'
description: 'Pressing Esc key is tiring as the finger has to move to the corner...'
categories: ['css']
tags: ['css', 'css-variables']
keywords: ['css', 'css-variables']
banner: './images/banner.png'
---

CSS variables is a new addition to CSS. As the name says, we can now add custom variables, similar to SCSS, Less and Stylus.

## EXAMPLE

```css
:root {
  --primary: #545546;
  --secondary: #234234;
}

button {
  background-color: var(--primary);
}
```

This feature can be used to implement themes for any website, without the need to write additional CSS classes for each color.
_for eg,_ One can change the primary color website just by changing the primary color variable using Javascript.

```javascript
let root = document.documentElement;

root.addEventListener('click', e => {
  root.style.setProperty('--primary', '#555555');
});
```

Notice the `:root` selector, this means that the variables declared inside this(`:root`) will be available to all other elements.
CSS Variables can be also scoped to a particular element. This can be done by defining them inside the selector where you want to use it.

```css
.button {
  --fontSize: 14px;
  font-size: var(--fontSize);
}
.big-button {
  --fontSize: 20px;
  font-size: var(--fontSize);
}
```

Another cool thing that can be done using CSS variables is changing the `box-shadow` size of an element on hover.
Before CSS variables, we had to write the following to change the `box-shadow` on hover.

### Before CSS variables

```css
.button {
  box-shadow: 0 3px 7px 2px grey;
}

.button:hover {
  box-shadow: 0 3px 20px 2px grey;
}
```

Notice that we had to write the entire box-shadow syntax again.

### Using CSS Variables

```css
.button {
  --blur: 7px;
  box-shadow: 0 3px var(--blur) 2px grey;
}

.button:hover {
  --blur: 20px;
}
```

As we can see, there is a lot of potential for this feature in terms of what we can do with it.

## USAGE WITH SCSS

Note that we can use this feature with SCSS/SASS if you want.

## USAGE WITH STYLED COMPONENTS

[Styled Components](https://www.styled-components.com/) is component-based styling framework for
[ Reactjs ](www.reactjs.org). This blog is built using styled-components. When using styled-components, we can define color variables in a dedicated file.

```javascript
export const primaryCol = '#2459ff';
export const accentColor = '#ff8000';
```

Then import it in any component. The advantage of this is that all color variable stays in the same place. The disadvantage of this method is that we have to import it wherever you want it.

### CSS Variables to the rescue

If we use CSS Variables, we don't have to import it in every component. We can directly use it inside Styled Component.

```javascript
const StyledDiv = styled.div`
  background-color: var(--primary);
`;
```
