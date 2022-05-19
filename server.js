const express = require('express');
const cors = require('cors')
const app = express();
const port = process.env.PORT || 5000;
const dbConnection = require('./db');

app.use(express.json({
    type: "*/*"
}));

app.use(cors()); // For now, more secure cors implementation shall be used for prod apps
app.use('/api/cars/', require('./routes/carsRoute'));
app.use('/api/bikes/', require('./routes/bikesRoute'));
app.use('/api/bookings/', require('./routes/bookingsRoute'));

const path = require('path');
if(process.env.NODE_ENV === "production") {
    app.use('/', express.static('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client/build/index.html'));
    })
}

app.get('/', (req, res) => res.send('Server running'));
app.listen(port, () => console.log(`Node JS server started in port ${port}`));