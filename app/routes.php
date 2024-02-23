<?php




$app->get("/", "WebController:home")->setName("home");



$app->group("/auth", function ($container) use ($app) {

	$app->get("/login", "AuthController:loginPage")->setName("auth.login");


	$app->get("/register", "AuthController:registerPage")->setName("auth.register");


});
