<?php

header('Content-Type: application/json');


define('DB_HOST', '127.0.0.1');
define('DB_USERNAME', 'root');
define('DB_PASSWORD', 'root');
define('DB_NAME', 'chartdb');
$mysqli = new mysqli(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_NAME);

if(!$mysqli){
  die("Connection failed: " . $mysqli->error);
}

$q = sprintf("SELECT runs,wicket FROM cricket ORDER BY runs");
$re = $mysqli->query($q);
$data = array();
foreach ($re as $row) {
  $d[] = $row;
}
$re->close();
$mysqli->close();
print json_encode($d);