<?php 
    //recupero dati dal database
    $jsonData = file_get_contents('db.json');

    //converto il dato in codice php modificabile
    $contentJson = json_decode($jsonData, true);

    // rimuovo l'oggetto in posizione dell'inidice passato tramite post
    unset($contentJson[$_POST['index']]);
    $fixIndex = array_values($contentJson);
    
    //converto il codice php in un file json
    $updatedJson = json_encode($fixIndex);

    //aggiorno il database originale
    file_put_contents('db.json', $updatedJson);

    echo json_encode([
        'message' => 'ok',
        'code' => 200,
    ]);
?>