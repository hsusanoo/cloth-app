const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

// add .env variables to process environment
if (process.env.NODE_ENV !== 'production')
    require('dotenv')
        .config();

// Invoke the returned function with the secret key as parameter
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express();
const port = process.env.PORT || 5000;

// convert api requests body to json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

// serve build folder in production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client/build')));

    app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
}

app.listen(port, error => {
    if (error) throw error;
    console.log('server running on port ' + port);
});


// payment route
app.post('/payment', (req, res) => {
    const body = {
        source: req.body.token.id,
        amount: req.body.amount,
        currency: 'usd'
    };

    stripe.charges.create(body, (stripeErr, stripeRes) => {
        if (stripeErr) {
            res.status(500)
                .send({ error: stripeErr });
        } else {
            res.status(200)
                .send({ success: stripeRes });
        }
    });
});
