require('dotenv').config();
const app = require('./app');
const { loginRouter, categoryRouter, userRouter, postRouter } = require('./router');

// não remova a variável `API_PORT` ou o `listen`
const port = process.env.API_PORT || 3000;

// não remova esse endpoint
app.get('/', (_req, res) => {
  res.send();
});

app.use('/login', loginRouter);

app.use('/user', userRouter);

app.use('/categories', categoryRouter);

app.use('/post', postRouter);

app.listen(port, () => console.log('ouvindo porta', port));
