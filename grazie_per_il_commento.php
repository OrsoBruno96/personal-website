<html>
<head>
	<title>
	Grazie per il commento</title>
	
	<meta charset="utf-8" />
	
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css" />
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap-theme.min.css" />
	
	<script src="https://code.jquery.com/jquery-2.1.4.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
	
	<meta name="viewport" content="width=device-width, initial-scale=1">
	
	<link rel="stylesheet" href="style.css" />
	<link rel ="icon" href="bruno_in_bici.ico"/>
	
	
	
	<?php

	ini_set('display_errors', 'On');
	error_reporting(E_ALL);
	$commento =$_GET['commento'];
	$file_pointer = fopen("pota/feed.txt", "a+");
	if(!$file_pointer) die ("Errore nell'apertura del file!");
	
	fwrite($file_pointer, $commento);
	
	mail("fabio.zoratti96@gmail.com", "C'è un nuovo commento sulle dispense", $commento, "Server UZ");
	fclose($file_pointer);
	
	?>
	
</head>
<body>



<div class="container">

        <nav class="navbar navbar-inverse">
        <div class="container-fluid">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
        <a class="navbar-brand" href="index.php"></a>
        </div>
        <div id="navbar" class="navbar-collapse collapse">
        <ul class="nav navbar-nav">
        <li><a href="index.html">Home</a></li><li><a href="aboutme.html">Su di me</a></li><li><a href="olimpiadi_fisica.html">Olimpiadi di Fisica</a></li><li><a href="tempo_libero.html">Tempo libero</a></li>        </ul>
        </div><!--/.nav-collapse -->
        </div><!-- /.container-fluid -->
        </nav>
    
<div class="page-header">
    <h1>Grazie per il commento!</h1>
</div>

<span class="blank-space"></span>
<a href="olimpiadi_fisica.html" role="button" class="btn btn-primary flat-button full-width">
  Torna alla pagina precedente
</a>









</div><!-- /.container-fluid -->

</body>
</html>
