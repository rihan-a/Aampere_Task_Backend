const express = require('express');
const cors = require('cors');
const vehiclesRoutes = require('./routes/vehicles.routes');

const app = express();
const PORT = 3005;

app.use(cors());
app.use(express.json());

app.use('/api/vehicles', vehiclesRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});