# ACE
Average Color Express is a Node JS API that returns average color of an image from its URL.
This is my first project using Node JS.

- the url of the image has to be passed after the api url
- `https://ace-n-ce.vercel.app/api/https://www.images.com/image.webp`
- returns a text response containing r,g,b string
- which can be easily received by user
- Note : the image should have an anonymous crossorigin.

## Usage
```
const [r,g,b] = await 
fetch("https://ace-n-ce.vercel.app/api/https://www.images.com/image.webp")
  .then(res => res.text())
  .then(rgb => rgb.split(','));
```
