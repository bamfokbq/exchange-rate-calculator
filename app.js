const currenyElementOne = document.getElementById('currency-one');
const currenyElementTwo = document.getElementById('currency-two');
const amountElementOne = document.getElementById('amount-one');
const amountElementTwo = document.getElementById('amount-two');
const rateElement = document.getElementById('rate');
const swap = document.getElementById('swap');

// FETCH EXCHANGE RATES AND UPDATE THE DOM
function calculate() {
  const currencyOne = currenyElementOne.value;
  const currencyTwo = currenyElementTwo.value;

  fetch(`https://api.exchangeratesapi.io/latest?base=${currencyOne}`)
    .then((res) => res.json())
    .then((data) => {
      const rate = data.rates[currencyTwo];

      rateElement.innerHTML = `1 ${currencyOne} = ${rate} ${currencyTwo}`;
      amountElementTwo.value = (amountElementOne.value * rate).toFixed(2);
    });
}

// EVENT LISTENERS
currenyElementOne.addEventListener('change', calculate);
amountElementOne.addEventListener('input', calculate);
currenyElementTwo.addEventListener('change', calculate);
amountElementTwo.addEventListener('input', calculate);

swap.addEventListener('click', () => {
  const temp = currenyElementOne.value;
  currenyElementOne.value = currenyElementTwo.value;
  currenyElementTwo.value = temp;

  calculate();
});

calculate();
