const express = require('express');
const sequelize = require('./sequelize');

const patientRoutes = require('./routes/patient');

const patientsFixtures = require('./fixtures/PatientsFixtures');

const app = express();
app.disable("x-powered-by");

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));


/*
sequelize.sequelize.sync({ force: true })
  .then(() => {
    console.log(`Database & tables created!`)
  }); */

  patientsFixtures.load();


app.use('/api/patients', patientRoutes);

app.use((req, res) => {
    res.json({ message: 'Votre requête a bien été reçue !' });
 });

module.exports = app;