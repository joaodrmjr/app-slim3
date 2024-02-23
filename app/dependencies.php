<?php



$container = $app->getContainer();


// database
use Illuminate\Database\Capsule\Manager as Capsule;

$capsule = new Capsule();
$capsule->addConnection($container->get("settings")["database"]);
$capsule->setAsGlobal();
$capsule->bootEloquent();


$container["db"] = function ($container) use ($capsule) {
	return $capsule;
};
//------------------------------


$container["auth"] = function ($container) {
	return new \App\Auth\Auth($container);
};

$container["flash"] = function () {
	return new Slim\Flash\Messages();
};

$container["view"] = function ($container) use ($app) {

	$config = $container->get("settings");

	$view = new \Slim\Views\Twig($config["view"]["template_path"], $config["view"]["twig"]);

	$view->addExtension(new \Slim\Views\TwigExtension(
		$container->get("router"),
		$container->get("request")->getUri()
	));

	$view->getEnvironment()->addGlobal("auth", [
		"state" => $container->get("auth")->check(),
		"user" => $container->get("auth")->user()
	]);

	// flash msgs
	$view->getEnvironment()->addGlobal("flash", $container->flash->getMessages());

	return $view;

};


$container["WebController"] = function ($container) {
	return new App\Controllers\WebController($container);
};
$container["AuthController"] = function ($container) {
	return new App\Controllers\AuthController($container);
};