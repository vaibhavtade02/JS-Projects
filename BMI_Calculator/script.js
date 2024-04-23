const button = document.querySelector("#btn");
const heightInput = document.querySelector('#height');
const weightInput = document.querySelector('#weight');
const heightUnitSelect = document.querySelector('#heightUnit');
const weightUnitSelect = document.querySelector('#weightUnit');

button.addEventListener('click', calculateBMI);
heightInput.addEventListener('keydown', handleEnter);
weightInput.addEventListener('keydown', handleEnter);

function handleEnter(event) {
    if (event.key === "Enter") {
        calculateBMI();
    }
}

function calculateBMI() {
    const heightValue = parseFloat(heightInput.value);
    const weightValue = parseFloat(weightInput.value);
    const heightUnit = heightUnitSelect.value;
    const weightUnit = weightUnitSelect.value;

    // Convert height to meters if unit is cm
    let height = heightValue;
    if (heightUnit === 'cm') {
        height /= 100;  // Convert cm to meters
    }

    // Convert weight to kg if unit is lb
    let weight = weightValue;
    if (weightUnit === 'lb') {
        weight *= 0.453592;  // Convert lb to kg
    }

    if (isNaN(height) || height <= 0 || isNaN(weight) || weight <= 0) {
        alert("Please enter valid height and weight");
        return;
    }

    const BMI = (weight / (height ** 2)).toFixed(2);

    const output = document.querySelector('#output');
    output.innerText = `BMI: ${BMI}`;
}
