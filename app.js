const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
// const expressHbs = require('express-handlebars');

const errorController  = require('./controllers/error');

const app = express();

// Register engine if using handlebars
// app.engine(
//     'hbs', 
//     expressHbs({
//         layoutsDir: 'views/layouts/', 
//         defaultLayout: 'main-layout', 
//         extname: 'hbs'
//     })
// );

// Using pug
// app.set('view engine', 'pug');
app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

// body parsing
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

app.listen(3000);
