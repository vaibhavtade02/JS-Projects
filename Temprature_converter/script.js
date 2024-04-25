function validateInput() {
    const temperatureInput = document.querySelector("#temperature").value;
    if (isNaN(temperatureInput)) {
        alert("Please enter a valid number for temperature");
        document.querySelector("#temperature").value = "";
    }
}

function convertTemperature() {
    const temperatureInput = parseFloat(document.getElementById("temperature").value);
    const inputUnit = document.getElementById("input_unit").value;
    const outputUnit = document.getElementById("output_unit").value;
    const result = document.getElementById("result");

    if (isNaN(temperatureInput)) {
        alert("Please enter a valid number for temperature");
        document.getElementById("temperature").value = "";
        result.innerHTML = "";
        return;
    }


    let convertedTemperature;

    switch (inputUnit) {
        case "celsius":
            convertedTemperature = temperatureInput;
            break;
        case "kelvin":
            convertedTemperature = temperatureInput - 273.15;
            break;
        case "fahrenheit":
            convertedTemperature = (temperatureInput - 32) * 5 / 9;
            break;
        default:
            result.innerHTML = "Invalid input unit";
            
    }

    switch (outputUnit) {
        case "celsius":
            result.innerHTML = "Converted Temperature: " + convertedTemperature + " °C";
            break;
        case "kelvin":
            result.innerHTML = "Converted Temperature: " + (convertedTemperature + 273.15) + " K"
            break;
        case "fahrenheit":
            result.innerHTML = "Converted Temperature: " + (convertedTemperature * 9/5 +32)  + " °F";
            break;
        default:
            result.innerHTML = "Invalid input unit";

    }
}


