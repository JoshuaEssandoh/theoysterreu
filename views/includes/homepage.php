<?php
    session_start();
    include("connect.php");
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Homepage</title>
</head>

<body>
    <div style="text-align:center; padding:15%;">
      <p  style="font-size:50px; font-weight:bold;">
       Hello  <?php 
       if(isset($_SESSION['email'])){
        $email=$_SESSION['email'];
        $query=mysqli_query($conn, "SELECT people.* FROM `people` WHERE people.email='$email'");
        while($row=mysqli_fetch_array($query)){
            # Prints out fname and lname
            echo $row['FirstName'].' '.$row['LastName'];
        }
       }
       ?>
       
      </p>
      <a href="logout.php">Logout</a>
    </div>
</body>
</html>