require('dotenv').config({ path: `./config/${process.env.NODE_ENV}.env` })

const express = require('express');

const app = express();

const cors = require('cors');
app.use(cors())

app.use(express.json());


const clientsRoute = require('./routes/clientsRoute');
const commandesRoute =  require('./routes/commandesRoute');
const produitsRoute = require('./routes/produitsRoute');
const vendeursRoute =  require('./routes/vendeursRoute');
const addressesRoute =  require('./routes/addressesRoute');
const livraisonRoute = require('./routes/livraisonsRoute');

app.use('/api/clients', clientsRoute);
app.use('/api/addresses', addressesRoute);
app.use('/api/commandes', commandesRoute);
app.use('/api/produits', produitsRoute);
app.use('/api/vendeurs', vendeursRoute);

app.get('/api/version', (_, res) => res.send("Hello from API v1"));

app.listen(process.env.PORT, () => console.log(`Back end is running on PORT ${process.env.PORT}`));

module.exports = app;