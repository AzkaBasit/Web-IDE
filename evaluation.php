<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  // Get the PHP code from the request body
  $data = json_decode(file_get_contents('php://input'), true);
  $phpcode = $data['phpcode'];
  $phpcode = trim($phpcode);
  $phpcode = strip_tags($phpcode);
  //$phpcode = str_replace(' $', '$', $phpcode);
  //$phpcode = str_replace(array("\n", "\r", "\t", "\v", "\e", "\f", " "), '', $phpcode);
  $phpcode = str_replace(' ', '', $phpcode);

  
  // Execute the PHP code and capture the output
  ob_start();
  eval($phpcode);
  $output = ob_get_clean();

  // Return the output to the client
  echo $output;
}
?>