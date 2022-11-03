<?php
    require 'vendor/autoload.php';

    $dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
    $dotenv->load();


    $serverName = $_ENV['DB_SERVERNAME'];
    $userName = $_ENV['DB_USERNAME'];
    $passWord = $_ENV['DB_PASS'];
    $dataBaseName = $_ENV['DB_DATABASENAME'];

    //CONNECT TO MYSQL DATABASE USING MYSQLI
    $connect = mysqli_connect($serverName, $userName, $passWord, $dataBaseName);
?>