function calculateBMI() {
    // Get the weight and height values from the input fields
    let weight = parseFloat(document.getElementById("weight").value);
    let height = parseFloat(document.getElementById("height").value);
  
    // Check if weight and height are valid numbers
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
      document.getElementById("result").textContent = "Please enter valid numbers for weight and height.";
      return;
    }
  
    // Calculate BMI
    let bmi = weight / (height * height);
    bmi = bmi.toFixed(1); // Round to one decimal place
  
    // Determine health category
    let category;
    if (bmi < 18.5) {
      category = "Underweight";
    } else if (bmi < 24.9) {
      category = "Normal weight";
    } else if (bmi < 29.9) {
      category = "Overweight";
    } else {
      category = "Obesity";
    }
  
    // Display the result
    document.getElementById("result").textContent = `Your BMI is ${bmi} (${category}).`;
  }
  