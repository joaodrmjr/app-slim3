<?php




$app->get("/", "WebController:home")->setName("home");



$app->group("/auth", function ($container) use ($app) {

	$app->get("/login", "AuthController:loginPage")->setName("auth.login");
	$app->post("/login", "AuthController:postLogin");


	$app->get("/register", "AuthController:registerPage")->setName("auth.register");


})->add(new App\Middleware\GuestMiddleware($container));



$app->group("/user", function ($container) use ($app) {



	$app->get("/logout", "AuthController:logout")->setName("user.logout");

})->add(new App\Middleware\RedirectAuthMiddleware($container));