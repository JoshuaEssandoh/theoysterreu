<?php
    # Checked off
#    include 'connect.php';
#    # Good, pulls values from form into variables
#    if (isset($_POST['signIn'])){
#    $FirstName = $_POST['FirstName'];
#    $LastName = $_POST['LastName'];
#    $email = $_POST['email'];
#    $password=$_POST['password'];
#    $password=md5($password);
        #Email check, keep for now to see if it works
#        $checkEmail ="SELECT * FROM people where email='$email'";
#        $result=$conn->query($checkEmail);
#        if($result->num_rows > 0) {
#            echo "Email Address Already Exists!";
#        }
        # New information, stores value in SQL table
#        else {
#            $insertQuery="INSERT INTO people(fname, lname, email, pswrd)
#                            VALUES ('$FirstName', '$LastName', '$email', '$password')";
#                    # if values are in tables check
#                    if ($conn->query($insertQuery)==TRUE) {
#                        header("location: oyster.html");
#                    }
#                    else {
#                        echo "Error:".$conn->error;
 #                   }
 #       }
#
#    }



    # different for sign in form, keep for now for consistency, pulls values from form
#    if (isset($_POST['signUp'])){
#        $fname=$_POST['FirstName'];
#        $lname=$_POST['LastName'];
#        $email=$_POST['email'];
#        $password=$_POST['password'];
#        $password=md5($password);

        # S
#        $sql="SELECT * FROM people WHERE email='$email' and password='$password'";
        # -> Used like a concacentation or a dot '.' in C++ and Java, access method of objects
        # query pulls from table to see if email and password is really there
#        $result=$conn->query($sql);
        # if it returns sumthn, $result will have sumthn in it, starting the session
#        if($result->num_rows > 0) {
#            session_start();
            # pulls a row and turns it into an array(?)
#            $row=$result->fetch_assoc();
#            $_SESSION['email']=$row['$email'];
#            header("Location: homepage.php");
#            exit();
#        }
#       else {
#            echo "Not Found, Incorrect Email or Password";
#        }
#        }
    
    # if (isset($_POST['submit'])) {
    #    $flie = $_FILES['myfile'];
#
 #       $fileName = $_FILES['myfile']['name'];
  #      $fileTmpName = $_FILES['myfile']['tmp_name'];
#        $fileSize = $_FILES['myfile']['size'];
#        $fileError = $_FILES['myfile']['error'];
#        $fileType = $_FILES['myfile']['type'];

#        $fileExt = explode('.', $fileName);
#        $fileActualExt = strtolower(end($fileExt));

#        $allowed = array('jpg', 'jpeg', 'png', 'pdf', 'mp4');
#
#        if (in_array($fileActualExt, $allowed)) {
#            if ($fileError === 0) {
#                if ($fileSize < 1000000) {
#                    $fileNameNew = uniqid('', true).".".$fileActualExt;
#                } else {
#                    echo "Your file is too big!";
#                }

#            } else {
 #               echo "There was an error uploading your file!";
  #          }
 #       } else {
 #           echo "You cannot upload files of this type!"
 #       }



#    }

// Start of another method

# check for submission
// If submission is valid, make variables from html names in document
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $FirstName = $_POST["FirstName"];
    $LastName = $_POST['LastName'];
    $email = $_POST['email'];
    $pwd=$_POST['pwd'];
    $pwd=md5($pwd);

    try {
        //Calls connection to database
        require_once "connect.php";
        //two methods name parameters and not name parameters, if you name the values, it requires binding
        $query = "INSERT INTO people(firstName, lastName, email, pwd)
        VALUES (:FirstName, :LastName, :email, :pwd)";

        $stmt = $conn->prepare($query);

        $stmt->bindParam(":FirstName", $FirstName);
        $stmt->bindParam(":LastName", $LastName);
        $stmt->bindParam(":email", $email);
        $stmt->bindParam(":pwd", $pwd);

        $stmt->execute();

        $conn = null;
        $stmt = null;

        header("Location: ../oysters.php");

        die();
    } catch (Exception $e) {
        die("Connection failed" . $e->getMessage());
    }
}
# sends user back to homepafge if they didnt access it correctly
else {
    header("Location: ../oysters.php");
}


