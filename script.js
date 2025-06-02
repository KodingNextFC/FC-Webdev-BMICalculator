function calculateBMI() {
  const weight = parseFloat(document.getElementById("weight").value);
  const heightCm = parseFloat(document.getElementById("height").value);
  const resultDiv = document.getElementById("result");

  if (!weight || !heightCm || weight <= 0 || heightCm <= 0) {
    resultDiv.innerHTML = "❗ Please enter valid numbers for height and weight.";
    resultDiv.classList.add("visible");
    return;
  }

  const heightM = heightCm / 100;
  const bmi = weight / (heightM * heightM);
  const bmiRounded = bmi.toFixed(2);

  let category = "";
  let emoji = "";

  if (bmi < 18.5) {
    category = "Underweight";
    emoji = "🍃";
  } else if (bmi < 24.9) {
    category = "Normal weight";
    emoji = "✅";
  } else if (bmi < 29.9) {
    category = "Overweight";
    emoji = "⚠️";
  } else {
    category = "Obese";
    emoji = "❗";
  }

  resultDiv.innerHTML = `
    <strong>Your BMI:</strong> ${bmiRounded}<br>
    <strong>Category:</strong> ${category}
    <div class="emoji">${emoji}</div>
  `;
  resultDiv.classList.add("visible");
}
