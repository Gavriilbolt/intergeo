// Размеры контейнера для карты
const width = 800;
const height = 600;


// Получение элемента слайдера и элемента для вывода значения
//const timeSlider = document.getElementById("time-slider");
const sliderValueElement = document.getElementById("slider-value");

// Создайте группу (group) для размещения вашего SVG-изображения
//const svgGroup = svg.append("g");

// Создание SVG-элемента для карты
const svg = d3.select("#map-container")
    .append("svg")
    .attr("width", width)
    .attr("height", height);


const svgGroup = svg.append("g");




// Здесь вы можете добавить вашу картографическую визуализацию с использованием D3.js
// Например, добавьте картографические элементы, такие как пути и маркеры.
d3.xml("world.svg")
    .then(data => {
        // Вставьте SVG-изображение в группу
        svgGroup.node().append(data.documentElement);
    });

svg.append("rect")
   .attr("x", 10)        // координата x верхнего левого угла
   .attr("y", 20)        // координата y верхнего левого угла
   .attr("width", 50)    // ширина
   .attr("height", 30);  // высота

// Добавление инструментов масштабирования и перемещения
const zoom = d3.zoom()
    .scaleExtent([1, 8]) // Минимальный и максимальный масштаб
    .on("zoom", () => {
        svg.selectAll("path") // Выберите элементы, которые вы хотите масштабировать и перемещать
            .attr("transform", d3.event.transform);
    });

svg.call(zoom);

// Добавление инструмента изменения времени
// Здесь вы можете добавить слайдер или другой интерактивный элемент для изменения времени.
// Получение элемента слайдера по его ID
const timeSlider = document.getElementById("time-slider");


// Обработчик события изменения значения слайдера
timeSlider.addEventListener("input", function () {
    const currentTime = this.value; // Получаем текущее значение слайдера
    sliderValueElement.textContent = currentTime; // Обновляем текст элемента вывода значения
});
