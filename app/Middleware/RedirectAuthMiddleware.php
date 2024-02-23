<?php


namespace App\Middleware;



class RedirectAuthMiddleware extends Middleware {


	public function __invoke($request, $response, $next)
	{

		if (!$this->container->auth->check()) {
			$this->container->flash->addMessage("info", "Acesso não permitido :/");
			return $response->withRedirect($this->container->router->pathFor("auth.login"));
		}

		return $next($request, $response);

	}

}