<?php
//For security reasons, don't display any errors or warnings. Comment out in DEV.
error_reporting(0);

//Africa/Lagos default timezone for all datetime
date_default_timezone_set('Africa/Lagos');

//connect to database
function dbconnect(){
	//toggle database setup - production mode/development mode
	$development = false;
	$servername = "localhost"; $username = "vikotr5_andrew_developerfldffsdf7f878f"; $password = "7cOdTiMC?@6"; $dbname = "vikotr5_myportfolio_websitedb";
	if($development){
	$servername = "localhost"; $username = "root"; $password = ""; $dbname = "myportfolio_websitedb";
	}

	try{
		$pdoconn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
		$pdoconn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
		//Connected to Database;
		return $pdoconn;
	}catch(PDOException $pdoerror){
		return "OOPs Connection Failed.".$pdoerror;
	}

return "OOPs something went wrong.";
}

?>