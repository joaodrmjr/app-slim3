<?php


namespace App\Controllers;


use App\Models\User;


class WebController extends Controller {


	public function home($request, $response)
	{

		$user = User::find(8);
		var_dump($user);

		return $this->view->render($response, "home.twig");
	}

}