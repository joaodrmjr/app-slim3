<?php

// inicia a sessao
session_start();


require __DIR__ . "/../vendor/autoload.php";



$config = require __DIR__ . "/../app/config.php";


$app = new Slim\App($config);


require __DIR__ . "/../app/dependencies.php";


require __DIR__ . "/../app/middleware.php";



require __DIR__ . "/../app/routes.php";
