<?php 
    //recupero dati dal database
    $jsonData = file_get_contents('db.json');

    //converto il dato in codice php modificabile
    $contentJson = json_decode($jsonData, true);

    //passo l'indice attivo
    $index = $_POST['index'];

    //aggiorno lo stato del dato con quello inivato dal frontend
    $contentJson[$index]['status'] = $_POST['stat'];

    //converto il tutto in json
    $updatedJson = json_encode($contentJson);

    //aggiorno il database originale
    file_put_contents('db.json', $updatedJson);
?>