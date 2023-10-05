const express = require('express');

// set port
const port = 3001;

const path = require('path');

// set routers
const usersRouter = require('./routes/users.routes');
const postsRouter = require('./routes/posts.routes');

const app = express();

// set template engine
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// set static
app.use('/public', express.static(path.join(__dirname, 'public')));

// middlewares
// 1)
app.use(express.json());

// 2)
app.use((req, res, next) => {
  const start = Date.now();
  console.log(`start: ${req.method} ${req.url}`);
  next();
  const time = Date.now() - start;
  console.log(`end: ${req.method} ${req.baseUrl} ${time}ms`);
});

// use template engine (hbs)
app.get('/', (req, res) => {
  res.render('index', {
    imageTitle: 'It is a NestJs (feat. hbs)',
  });
});

// use routers
app.use('/users', usersRouter);
app.use('/posts', postsRouter);

app.listen(port, () =>
  console.log(`Server is running on http://localhost:${port}`)
);
