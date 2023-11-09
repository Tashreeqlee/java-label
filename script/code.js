// const number1Input = document.getElementById('numb1');
// const number2Input = document.getElementById('numb2');
// const outputLabel = document.getElementById('output');

// const addButton = document.querySelector('[data-submit="btnAddition"]');
// addButton.addEventListener('click', () => {
//     const number1 = Number(number1Input.value);
//     const number2 = Number(number2Input.value);
    
//     const result = number1 + number2;
//     outputLabel.textContent = `Result: ${result}`;
// });


// Addition button
const btnAdd = document.querySelector('[data-addition]')
const lblOutput = document.querySelector('#output')
function addition() {
    let numb1 = document.getElementById('numb1').value
    let numb2 = document.getElementById('numb2').value
    let sum =eval(`${numb1}+ ${numb2}`)
    // lblOutput.innerHTML = `<strong>${sum}</strong>`
    lblOutput.textContent = sum
}
btnAdd.addEventListener('click', addition)


