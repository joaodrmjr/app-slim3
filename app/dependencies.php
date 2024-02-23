<?php



$container = $app->getContainer();




$container["WebController"] = function ($container) {
	return new App\Controllers\WebController($container);
};