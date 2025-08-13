document.getElementById('calculate').addEventListener('click', function() {
  const income = parseFloat(document.getElementById('income').value);
  const rate = parseFloat(document.getElementById('rate').value);
  const resultDiv = document.getElementById('result');

  if (isNaN(income) || isNaN(rate) || income < 0 || rate < 0) {
    resultDiv.textContent = "Please enter valid, non-negative numbers.";
    return;
  }

  const taxAmount = income * (rate / 100);
  const totalWithTax = income + taxAmount;

  resultDiv.textContent = `Tax: ₱${taxAmount.toFixed(2)}, Total: ₱${totalWithTax.toFixed(2)}`;
});
