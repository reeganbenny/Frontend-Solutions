// const slider = document.getElementById("mySlider");
const pieChart = document.getElementById("pieChart");

// Using event listener click
// slider.addEventListener('click',()=>{
//     let sliderValue = slider.value;
//     let percentageToDegree = (360*sliderValue)/100;
//     pieChart.style = `--degree:${percentageToDegree}deg`;
// })

// Changing piechart when value get change

const myChart = function(sliderValue){
    let percentageToDegree = (360*sliderValue)/100;
    pieChart.style = `--degree:${percentageToDegree}deg;`;
}
