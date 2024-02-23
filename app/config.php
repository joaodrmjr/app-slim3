<?php



return [
	"settings" => [

		"displayErrorDetails" => true,


		"view" => [
			"template_path" => __DIR__ . "/../resources/views",
			"twig" => [
				"cache" => __DIR__ . "/../cache/twig",
				"debug" => true,
				"auto_reload" => true
			]
		],


		"database" => [
			'driver' => 'mysql',
		    'host' => 'localhost',
		    'database' => 'app-slim3',
		    'username' => 'root',
		    'password' => '',
		    'charset' => 'utf8',
		    'collation' => 'utf8_unicode_ci',
		    'prefix' => ''
		],


		"auth" => [
			"session" => "user_id",
			"remember" => "user_r"
		]

	]
];