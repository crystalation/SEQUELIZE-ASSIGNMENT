// app.js

const express = require('express');
const cookieParser = require('cookie-parser');
const usersRouter = require('./routes/users.route');
const postsRouter = require('./routes/posts.route');
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger-output.json');

const app = express();
const PORT = 3018;

// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
app.use(express.json());
app.use(cookieParser());
app.use('/api', [usersRouter, postsRouter]);
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.listen(PORT, () => {
  console.log(PORT, '포트 번호로 서버가 실행되었습니다.');
});
