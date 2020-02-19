const express = require ("express")
const exphbs  = require('express-handlebars');
const bodyParser = require('body-parser');   

const productModel = require("./models/products")

const app = express();

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', function (req, res) {
    res.render('home');
});

app.get('/products', function (req, res) {
    res.render('products'), {
        title: "Product",
        allProduct: productModel.getAllProducts()
    };
});

app.get('/contact', function (req, res) {
    res.render('contact');
});


const PORT = 3000;
app.listen(PORT, () => {
    console.log (`web server is running`)
}
)