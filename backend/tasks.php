<?php 
    $string = file_get_contents('db.json');
    $tasks = json_decode($string, true);
    // var_dump($tasks);

    header('Content-Type: db.json');
    echo json_encode($tasks);
    // var_dump($tasks);
?>