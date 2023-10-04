<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>Интерактивная карта </title>
    <link rel="stylesheet" href="styles.css">
	<link rel="stylesheet" type="text/css" href="index.css">
</head>
<body>
    <div id="map-container">
        <!-- Здесь будет отображаться карта -->
    </div>
	<div class="ui-container">
        <!-- Здесь будет пользовательский интерфейс, включая слайдер -->
        <input type="range" id="time-slider" min="0" max="100" step="1">
		 <!-- Элемент для отображения текущего значения слайдера -->
		<p id="slider-value">0</p>

    </div>
    <script src="https://d3js.org/d3.v6.min.js"></script>
    <script src="yourScript.js"></script>
</body>
</html>
