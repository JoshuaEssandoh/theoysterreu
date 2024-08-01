<?php
    //Database connection
    
    $servername = "mysql:host=localhost;dbname=testdb";
    $username = "root";
    $password = "NanafmAbeiku27$$";
    $db="testdb";
    //Improved connection to database is mysqli
    //You could also use pdo
    try {
        //the line below is responsible for database connection, rest is just error catching
        $conn = new PDO($servername, $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    } catch (PDOException $e) {
        echo "Connection failed: " . $e->getMessage();
    }
    
    

    
    