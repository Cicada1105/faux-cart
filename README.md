
## FauxCart README
Original outline [source](https://block81.com/blog/a-readme-for-simple-websites)

### Requirements
---
* ReactJS
* TailwindCSS

### Project Notes
---
*Pertinent high-level information about the project*

### Setup
---
```
git clone https://github.com/Cicada1105/faux-cart.git
cd ./faux-cart
npm i
```

### Front-end Compiling
---
`npm run dev`

### Files & Directories
---
-- components
&nbsp;&nbsp;&nbsp;-- body
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-- Individual page sections
&nbsp;&nbsp;&nbsp;-- footer
&nbsp;&nbsp;&nbsp;-- global
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-- Reusable components
&nbsp;&nbsp;&nbsp;-- header

### Hacks/Kludges
---
**ImageAndContent Global Component** 
The reusable component darkness/lightness test uses the number in the Tailwind color format [color]-[strength] (ie. green-500). In order for ImageAndContent component to properly work, the `theme.color.green-alt.600` was added to `tailwind.config.js`

### Design Notes
---
* *Design retrieved from [Musemind UI/UX Design Agency](https://dribbble.com/shots/19604000-E-Commerce-Website-UI-UX-ecommerce-platform-UI)*
* *Button classes must follow `src/index.css` that were created using Tailwind's built-in theme function*
* *FontAwesome kit must be replaced with own kit*