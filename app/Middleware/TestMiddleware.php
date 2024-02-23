<?php

namespace App\Middleware;

class TestMiddleware extends Middleware {


	public function __invoke($request, $response, $next)
	{

		if (true) {
			$this->container->flash->addMessage("info", "middle executado ok");
			return $response->withRedirect($this->container->router->pathFor("home"));
		}

		return $next($request, $response);

	}

}