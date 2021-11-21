require('dotenv').config({ path: `./config/${process.env.NODE_ENV}.env` })

const express = require('express');

const app = express();

const cors = require('cors');
app.use(cors())

app.use(express.json());


const clientsRoute = require('./routes/clientsRoute');
const commandsRoute = require('./routes/commandesRoute');
const productsRoute = require('./routes/produitsRoute');
const vendorsRoute =  require('./routes/vendeursRoute');
const addressRoute =  require('./routes/addressesRoute');
const codesPromoRoute = require('./routes/codesPromoRoute');
//const deliveryRoute = require('./routes/livraisonsRoute');

app.use('/api/clients', clientsRoute);
app.use('/api/addresses', addressRoute);
app.use('/api/commandes', commandsRoute);
app.use('/api/produits', productsRoute);
app.use('/api/vendeurs', vendorsRoute);
//app.use('/api/delivery', deliveryRoute);
app.use('/api/promoCodes', codesPromoRoute);


app.get('/api/version', (_, res) => res.send("Hello from API v1"));

app.listen(process.env.PORT, () => console.log(`Back end is running on PORT ${process.env.PORT}`));

module.exports = app;