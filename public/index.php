<?php


use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;


require __DIR__ . "/../vendor/autoload.php";




$app = new Slim\App();



$app->get("/", function (Request $request, Response $response, $args) {

	$response->getBody()->write("Hello world");

	return $response;
});


$app->run();