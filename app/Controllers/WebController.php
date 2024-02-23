<?php


namespace App\Controllers;



class WebController extends Controller {


	public function home($request, $response)
	{
		$response->getBody()->write("Pagina Inicial");
		return $response;
	}

}