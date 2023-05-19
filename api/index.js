const querystring = require('querystring');
const express = require('express');
const app = express();

app.get('/api/*', (req, res) => { 
  fetch(req.params[0] + "?" + querystring.stringify(req.query))
    .then(res => res.blob())
		.then(blob => blob.arrayBuffer())
		.then(arrayBuffer => Buffer.from(arrayBuffer))
    .then(buffer => Uint8ClampedArray.from(buffer))
		.then(data => {
			const len = data.length;
      const nthPixel = 40;
      let r = 0;
      let g = 0;
      let b = 0;
      for (let i = 0; i < len; i += nthPixel) {
        r += data[i];
        g += data[i + 1];
        b += data[i + 2];
      }
      const amount = len / nthPixel;
      r /= amount;
      g /= amount;
      b /= amount;
		
			res.send(data.length);
      // res.send(`${Math.floor(r)},${Math.floor(g)},${Math.floor(b)}`);
    })
    .catch(err => {
      res.send(`error: ${err.message}`);
    });
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
