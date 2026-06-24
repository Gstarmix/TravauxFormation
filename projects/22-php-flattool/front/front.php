<?php
    if(isset($_GET['page'])){
        $section=$_GET['page'] . ".php";
    }
    include("index.php");
?>