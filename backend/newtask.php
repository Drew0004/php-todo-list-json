<?php 
    var_dump($_POST);
    //recupero dati dal database
    $jsonData = file_get_contents('db.json');

    //converto il dato in codice php modificabile
    $contentJson = json_decode($jsonData, true);

    //creo un nuovo oggetto
    $newTask = [
        'task' => $_POST['task'],
        'status' => false,
    ];

    //pusho il nuovo oggetto nell'array
    $contentJson[] = $newTask;

    //converto il codice php in un file json
    $updatedJson = json_encode($contentJson);

    //aggiorno il database originale
    file_put_contents('db.json', $updatedJson);
    
    echo json_encode([
        'message' => 'ok',
        'code' => 200,
    ]);
?>