import querystring from 'querystring';
import express from 'express';
const app = express();
import { getAverageColor } from 'fast-average-color-node';

app.get('/api/*', (req, res) => { 
	getAverageColor(`https://${req.params[0]}?${querystring.stringify(req.query)}`)
	.then(color=>res.send(color))
	.catch(err=>res.send(err))
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
