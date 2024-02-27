<?php



$app->add(new \App\Middleware\OldInputMiddleware($container));

// protecao contra ATAQUE CSRF
$app->add(new App\Middleware\CsrfViewMiddleware($container));
$app->add($container->csrf);