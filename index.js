const express = require('express');
const app = express();
const port = 3000;

//app.METHOD(PATH, HANDLER)

//APP est une instance d'express
//METHOD est une méthode de demande HTTP (GET, POST, PUT, DELETE, etc)
//PATH est un chemin sur le serveur
//HANDLER est la fonction exécutée lorsque la route est reconnue
app.get('/', (request, response) => {
  response.send('Bienvenue sur Express');
});

app.get('/api/movies', (request, response) => {
  response.send('Récupération de tous les films');
});

app.get('/api/movies/:movieId', (request, response) => {
  const movieId = request.params.movieId;
  response.json({ id: movieId });
});

app.get('/api/employee', (req, res) => {
  if (req.query.name) {
    const name = req.query.name;
    res.status(404).send(`Impossible de récupérer l'employé ${name}`);
  }
  else {
    res.sendStatus(304);
  }
})

app.listen(port, (err) => {
  if (err) {
    throw new Error('Something bad happened...');
  }

  console.log(`Server is listening on ${port}`);
});


