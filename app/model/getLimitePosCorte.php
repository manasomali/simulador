<?php
$file = fopen("otimizacaooctave/limiteposcorte.csv", "r");
$dados=array();
$i=0;
//Output lines until EOF is reached
while(! feof($file)) {
  $line = fgets($file);
  if($line!=false)
  	$lCorte[$i]= floatval($line);
  $i++;
}
echo json_encode($lCorte);
fclose($file);

?>