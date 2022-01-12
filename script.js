function compute() {
  let p_amount = document.getElementById("principal").value;
  let rate_of_interest = document.getElementById("rate").value;
  let no_of_years = document.getElementById("years").value;
  let new_Year = new Date().getFullYear() + Number(no_of_years);
  let result = (p_amount * rate_of_interest * no_of_years) / 100;
  if (p_amount <= 0) {
    alert("Enter a positive number");
    document.getElementById("principal").focus();
    return false;
  }
  document.getElementById(
    "result"
  ).innerHTML = `If you deposit <mark>${p_amount}</mark>,<br>at an interest rate of 
    <mark>${rate_of_interest}%</mark>.<br>You will receive an amount of <mark>${result.toFixed(
    0
  )}</mark>,<br>in the year <mark>${new_Year}</mark><br>`;
}

function rangeReader() {
  let rate_of_interest = document.getElementById("rate").value;
  document.getElementById("sliderValue").innerText = rate_of_interest + "%";
}
