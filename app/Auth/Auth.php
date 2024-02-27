<?php

namespace App\Auth;


use App\Models\User;


class Auth {


	const NONE = 0;
	const LOGGED = 1;
	const ADMIN = 2;

	protected $container, $config;

	public $error, $obj;

	public function __construct($container)
	{
		$this->container = $container;
		$this->config = $container["settings"]["auth"];
	}

	public function loginAttemp(array $params): bool
	{

		$username = $params["username"];
		$password = $params["password"];

		if (empty($username) || empty($password)) {
			$this->error = "Preencha todos os campos";
			return false;
		}

		if (!$user = User::where("username", $username)->orWhere("email", $username)->first()) {
			$this->error = "Um dos campos inseridos é inválido";
			return false;
		}

		if (!password_verify($password, $user->password)) {
			$this->error = "Um dos campos inseridos é inválido";
			return false;
		}

		$_SESSION[$this->config["session"]] = $user->id;

		return true;
	}


	public function logout()
	{
		unset($_SESSION[$this->config["session"]]);		
	}

	public function check(): int
	{
		$session = $_SESSION[$this->config["session"]] ?? null;

		if ($user = User::find($session)) {
			return $user->admin ? self::ADMIN : self::LOGGED;
		}

		return self::NONE;
	}


	public function user(): ?User
	{
		$s = $_SESSION[$this->config["session"]] ?? null;
		return User::find($s);
	}

}