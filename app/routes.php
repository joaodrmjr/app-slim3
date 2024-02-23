<?php




$app->get("/", "WebController:home")->setName("home");
$app->get("/test", "WebController:test")->setName("test")->add(new \App\Middleware\TestMiddleware($container));
