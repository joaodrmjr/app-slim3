<?php


namespace App\Middleware;



class GuestMiddleware extends Middleware {


	public function __invoke($request, $response, $next)
	{

		if ($this->container->auth->check()) {
			$this->container->flash->addMessage("info", "Acesso indevido");
			return $response->withRedirect($this->container->router->pathFor("home"));
		}

		return $next($request, $response);

	}

}