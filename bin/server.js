const dotenv = require('dotenv');
const result = dotenv.config();

if (result.error) throw result.error;

const app = require('../src/app');
const port = process.env.PORT || '3000';

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
