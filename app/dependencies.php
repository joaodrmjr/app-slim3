<?php



$container = $app->getContainer();


$container["view"] = function ($container) {

	$config = $container->get("settings");

	$view = new \Slim\Views\Twig(
		$config["view"]["template_path"],
		$config["view"]["twig"]
	);

	$view->addExtension(new \Slim\Views\TwigExtension(
		$container->get("router"),
		$container->get("request")->getUri()
	));


	return $view;

};


$container["WebController"] = function ($container) {
	return new App\Controllers\WebController($container);
};