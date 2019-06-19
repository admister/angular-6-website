<?php 
//headers

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Headers: Content-Type");

//collect post data
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

var_dump($request);

//clean post data
$firstName = $request->firstName ;
$lastName = $request->lastName;
$email = $request->email;
$message = $request->message;

$name = $firstName." ".$lastName;

// create email

$to = "jagmohan@localhost";
$email_subject = "Message from Contact Form on Ad Webapp: ".$name;
$email_body = "this is an automated email from Ad webapp with the following message \n\n".
"Name of the person: ".$name.
"\n\n Email address: ".$email.
"\n\n Message: ".$message;
$headers = "From: jagmohan@localhost";


// send email
// mail($to, $email_subject, $email_body, $headers);

//post success or failure
if(mail($to, $email_subject, $email_body, $headers)){
    echo json_encode("Success");
} else {
    echo json_encode("Failure");
}

?>