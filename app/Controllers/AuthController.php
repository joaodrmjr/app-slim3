<?php


namespace App\Controllers;


class AuthController extends Controller {


	public function loginPage($request, $response)
	{

		return $this->view->render($response, "auth/login.twig");
	}



	public function registerPage($request, $response)
	{

		return $this->view->render($response, "auth/register.twig");
	}

}