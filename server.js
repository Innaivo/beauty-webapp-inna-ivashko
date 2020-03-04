require = require ("esm")(module);

const port = process.env.PORT || 5000;

const app = require('./backend/app');
app.listen(port, () => {
   console.log('Server is up!');
});