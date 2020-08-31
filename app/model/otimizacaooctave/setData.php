<?php

$_POST = json_decode(file_get_contents('php://input'), true);

$GeracaoConjuntoCSVPA = $_POST['GeracaoConjuntoCSVPA'];
$GeracaoConjuntoCMRO2 = $_POST['GeracaoConjuntoCMRO2'];
$GeracaoConjuntoCQ138 = $_POST['GeracaoConjuntoCQ138'];
$GeracaoConjuntoCQ69 = $_POST['GeracaoConjuntoCQ69'];
$GeracaoConjuntoCLIV2 = $_POST['GeracaoConjuntoCLIV2'];
$CMRO2Participa = $_POST['CMRO2Participa'];
$CortePorpocional = $_POST['CortePorpocional'];
$FluxoNaLinha = $_POST['FluxoNaLinha'];
$LimiteFluxoNaLinha = $_POST['LimiteFluxoNaLinha'];

$up=$GeracaoConjuntoCMRO2."\n".$GeracaoConjuntoCSVPA."\n".$GeracaoConjuntoCQ138."\n".$GeracaoConjuntoCQ69."\n".$GeracaoConjuntoCLIV2;

if ($CMRO2Participa==1){
	$flag="1\n".$CortePorpocional;
}
else
{
	$flag="0\n".$CortePorpocional;
}


$filename='geracaoreal.csv';
if (is_writable($filename)) {
    if (!$handle = fopen($filename, 'w')) {
         echo json_encode("Erro na abertura do arquivo ($filename)");
         exit;
    }
    if (fwrite($handle, $up) === FALSE) {
        echo json_encode("Erro na escrita do arquivo ($filename)");
        exit;
    }
    echo json_encode("Sucesso: Escrito ($up) no arquivo ($filename)");
    fclose($handle);
} else {
    echo json_encode("O arquivo $filename nao pode ser alterado");
}

$filename='fluxonalinha.csv';
if (is_writable($filename)) {
    if (!$handle = fopen($filename, 'w')) {
         echo json_encode("Erro na abertura do arquivo ($filename)");
         exit;
    }
    if (fwrite($handle, $FluxoNaLinha) === FALSE) {
        echo json_encode("Erro na escrita do arquivo ($filename)");
        exit;
    }
    echo json_encode("Sucesso: Escrito ($FluxoNaLinha) no arquivo ($filename)");
    fclose($handle);
} else {
    echo json_encode("O arquivo $filename nao pode ser alterado");
}

$filename='limitedofluxonalinha.csv';
if (is_writable($filename)) {
    if (!$handle = fopen($filename, 'w')) {
         echo json_encode("Erro na abertura do arquivo ($filename)");
         exit;
    }
    if (fwrite($handle, $LimiteFluxoNaLinha) === FALSE) {
        echo json_encode("Erro na escrita do arquivo ($filename)");
        exit;
    }
    echo json_encode("Sucesso: Escrito ($LimiteFluxoNaLinha) no arquivo ($filename)");
    fclose($handle);
} else {
    echo json_encode("O arquivo $filename nao pode ser alterado");
}

$filename='flag.csv';
if (is_writable($filename)) {
    if (!$handle = fopen($filename, 'w')) {
         echo json_encode("Erro na abertura do arquivo ($filename)");
         exit;
    }
    if (fwrite($handle, $flag) === FALSE) {
        echo json_encode("Erro na escrita do arquivo ($filename)");
        exit;
    }
    echo json_encode("Sucesso: Escrito ($flag) no arquivo ($filename)");
    fclose($handle);
} else {
    echo json_encode("O arquivo $filename nao pode ser alterado");
}

$result=shell_exec("octave Otimizacao.m");

?>