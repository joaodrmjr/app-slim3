<?php


namespace App\Controllers;



class WebController extends Controller {


	public function home($request, $response)
	{

		return $this->view->render($response, "home.twig");
	}


	public function test($request, $response)
	{
		$this->flash->addMessage("error", "funcao executada");

		return $response->withRedirect($this->router->pathFor("home"));
	}

}