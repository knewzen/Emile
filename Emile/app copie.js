var http = require('http');
// OpenClassroom des applications ultra rapides avec Node js

var express = require('express');
// Routage via bibliothèque d'express
// Initialisation avec "npm init"
// Installer avec : "npm install express --save"
var app = express();
// Création de la variable serveur

var logger = require('winston');
// Permet de faire des affichages dans la console... logger quoi (j'ai oublié le --save donc bon pas dans json)
logger.level='silly'
// Niveau fou pour avoir toutes les infos



app.get('/', function (request, response) {response.sendFile(__dirname + "/html/index.html"); 
	   logger.info("Bienvenue")	  });
// Renvoie au client l'index avec "/"

app.listen(8000, '127.0.0.1');
logger.info("J'écoute au 127.0.0.1")