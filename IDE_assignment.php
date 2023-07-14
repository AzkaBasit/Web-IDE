<!DOCTYPE html>
<html>
<head>
	<title>Programming IDE</title>
  <link rel="stylesheet" type="text/css" href="ide.css">
</head>
<body>
	<header>
		<h1>Programming IDE</h1>
	</header>
	<main>
		<div id="sidebar">
			<h2>Options</h2>
            <div draggable="true" ondragstart="drag(event)">Echo</div>
			<div draggable="true" ondragstart="drag(event)">variables</div>
			<div draggable="true" ondragstart="drag(event)">loops(FOR)</div>
			<div draggable="true" ondragstart="drag(event)">loops(WHILE)</div>
			<div draggable="true" ondragstart="drag(event)">functions</div>
			<div draggable="true" ondragstart="drag(event)">Conditionals(IF-ELSE)</div>
			<div draggable="true" ondragstart="drag(event)">read file</div>
            <div draggable="true" ondragstart="drag(event)">write file</div>
			<div draggable="true" ondragstart="drag(event)">arithmetic</div>
			
		</div>
		<div id="code-area" contenteditable="true">
			<!--<h2 contenteditable="false">Code Area</h2>-->
			
		</div>
		<div id="output-area">
			<h2>Output</h2>
		</div>
	</main>
	<button id="run-btn">Run</button>

	<script src = "IDE_script.js"></script>
</body>
</html>