const express = require('express');
const morgan = require('morgan');
const port = process.env.PORT || 3000;
require('./config/database');
const methodOverride = require('method-override');


const indexRouter = require('./routes/index');
const teamsRouter = require('./routes/teams');
const commentsRouter = require('./routes/comments');
const playersRouter = require('./routes/players');

const app = express();

app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
app.use(methodOverride('_method'));

app.use("/", indexRouter);
app.use("/teams", teamsRouter);
app.use("/", commentsRouter);
app.use('/', playersRouter);

app.listen(port, function () {
    console.log(`Express is listening on port:${port}`);
  });