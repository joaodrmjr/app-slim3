<?php


namespace App\Controllers;


class AuthController extends Controller {


	public function loginPage($request, $response)
	{

		return $this->view->render($response, "auth/login.twig");
	}


	public function postLogin($request, $response)
	{
		$attemp = $this->auth->loginAttemp($request->getParams());

		if (!$attemp) {
			$this->flash->addMessage("error", $this->auth->error);
			return $response->withRedirect($this->router->pathFor("auth.login"));
		}

		$this->flash->addMessage("success", "Login realizado com sucesso!");
		return $response->withRedirect($this->router->pathFor("home"));
	}


	public function registerPage($request, $response)
	{

		return $this->view->render($response, "auth/register.twig");
	}

}