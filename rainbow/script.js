// Use document. funcions minimal time to reduce the time complexity

let text = document.getElementById("case1");
const color = ["red", "blue", "green", "yellow"];
let textArr = [...text.innerText];
console.log(textArr.length);
let colorPer = (1/color.length)*100;
console.log(colorPer);
let letterPercentage = (1/textArr.length)*100;
console.log(letterPercentage);

let currentLetterPer = 0;
let currentColorPer = colorPer;
let innerSpan = "";
let j = 0;
for(let i = 0; i< textArr.length;i++ ){
    if(currentLetterPer >= currentColorPer){
        j++;
        currentColorPer += colorPer;
    }
    innerSpan += `<span style =color:${color[j]} >${textArr[i]}</span>`;
    currentLetterPer += letterPercentage;
}
text.innerHTML = innerSpan;

