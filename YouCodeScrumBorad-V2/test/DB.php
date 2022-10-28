<?php
    $serverName = "localhost";
    $userName = "root";
    $passWord = "";
    $dataBaseName = "youcodescrumboard";
    //CONNECT TO MYSQL DATABASE USING MYSQLI
    $connect = mysqli_connect($serverName, $userName, $passWord, $dataBaseName);

    $query_priority = "SELECT * FROM priorities WHERE id = 1 ";
    $query_res = mysqli_query($connect,$query_priority);
    $priority_res =  mysqli_fetch_array($query_res);
    print_r($priority_res);
?>