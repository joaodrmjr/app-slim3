<?php


namespace App\Controllers;


use App\Models\User;


class WebController extends Controller {


	public function home($request, $response)
	{

		var_dump($this->auth->check());
		return $this->view->render($response, "home.twig");
	}


	public function kenoPage($request, $response)
	{
		return $this->view->render($response, "keno.twig");
	}

}