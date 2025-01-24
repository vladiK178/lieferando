let basket = [];

function init() {
  render();
  renderMenu();
}

function render() {
  let mainContent = document.getElementById("main-content");
  mainContent.innerHTML = getTemplateHtml();
}

function renderMenu() {
  let content = document.getElementById("menu-content");
  content.innerHTML = "";

  for (let i = 0; i < myDishes.length; i++) {
    content.innerHTML += getMenuTemplate(i);
  }
}

function handleSumTasks() {
  calculateCurrentSum();
  calculateTotalSum();
}

function calculateCurrentSum() {
  let currentSumRef = document.getElementById("current-order-sum");
  let currentSum = 0;

  if (basket.length > 0) {
    currentSumRef.innerHTML = "";
    for (let i = 0; i < basket.length; i++) {
      currentSum += basket[i].price;
    }
    currentSumRef.innerHTML = currentSum.toFixed(2) + " €";
    return currentSum;
  }
}

function calculateTotalSum() {
  let totalSumRef = document.getElementById("total-order-sum");
  let totalSum = 0;

  if (basket.length > 0) {
    totalSumRef.innerHTML = "";
    for (let i = 0; i < basket.length; i++) {
      totalSum += basket[i].price;
    }
    totalSum += 2; // Lieferkosten
    totalSumRef.innerHTML = totalSum.toFixed(2) + " €";
    return totalSum;
  }
}

function updateBasketAndSums() {
  updateBasketView();
  handleSumTasks();
}

function addToBasket(i) {
  let dishNameRef = myDishes[i].name;
  let dishPriceRef = myDishes[i].price;
  let itemInBasket = basket.find((item) => item.name === dishNameRef);

  if (itemInBasket) {
    itemInBasket.amount += 1;
    itemInBasket.price = myDishes[i].price * itemInBasket.amount;
  } else {
    basket.push({
      name: dishNameRef,
      price: dishPriceRef,
      amount: 1,
    });
  }
  updateBasketView();
  handleSumTasks();
}

function updateBasketView() {
  let basketRef = document.getElementById("basket-item");
  basketRef.innerHTML = "";

  let totalSum = document.getElementById("total-sum");
  totalSum.innerHTML = "";

  for (let i = 0; i < basket.length; i++) {
    basketRef.innerHTML += getBasketItemTemplate(i);
  }

  if (basket.length == 0) {
    basketRef.innerHTML += getEmptyBasketTemplate();
  } else {
    totalSum.innerHTML += getTotalSumTemplate();
  }
}

function itemReduceRemoveFromBasket(i) {
  let dishNameRef = myDishes[i].name;
  let itemInBasket = basket.find((item) => item.name === dishNameRef);

  if (basket[i].amount > 1) {
    basket[i].amount -= 1;
    itemInBasket.price = myDishes[i].price * basket[i].amount;
  } else {
    basket.splice(i, 1);
  }
  updateBasketView();
  handleSumTasks();
}

function deleteItemFromBasket(i) {
  basket.splice(i, 1);
  updateBasketView();
  handleSumTasks();
}

function addAmountInBasket(i) {
  let dishNameRef = myDishes[i].name;
  let itemInBasket = basket.find((item) => item.name === dishNameRef);

  if (basket[i].amount >= 1) {
    itemInBasket.amount += 1;
    itemInBasket.price = myDishes[i].price * basket[i].amount;
  }
  updateBasketView();
  handleSumTasks();
}

function handleSumTasks() {
  calculateCurrentSum();
  calculateTotalSum();
}

function sendOrder() {
  let totalSumRef = document.getElementById("total-order-sum").innerText;
  let basketContentRef = document.getElementById("basket-item");
  let myFinishOrderSectionRef = document.getElementById("total-sum");

  if (totalSumRef <= 10) {
    alert("Mindestbestellwert noch nicht erreicht, gönn dir doch noch etwas!");
  } else {
    clearBasketAndSendOrder(basketContentRef, myFinishOrderSectionRef);
  }
}

function clearBasketAndSendOrder(basketContentRef, myFinishOrderSectionRef) {
  basketContentRef.innerHTML = "";
  myFinishOrderSectionRef.innerHTML = "";

  for (let i = 0; i < basket.length; i++) {
    delete basket[i];
  }
  toggleOverlay();
  hideBasket();
  toggleBasketButton();
}

function calculateCurrentSum() {
  let currentSumRef = document.getElementById("current-order-sum");
  let currentSum = 0;

  if (basket.length > 0) {
    currentSumRef.innerHTML = "";
    for (let i = 0; i < basket.length; i++) {
      currentSum += basket[i].price;
    }
    currentSumRef.innerHTML = currentSum.toFixed(2) + " €";
    return currentSum;
  }
}

function calculateTotalSum() {
  let totalSumRef = document.getElementById("total-order-sum");
  let totalSum = 0;

  if (basket.length > 0) {
    totalSumRef.innerHTML = "";
    for (let i = 0; i < basket.length; i++) {
      totalSum += basket[i].price;
    }
    totalSum += 2;
    totalSumRef.innerHTML = totalSum.toFixed(2) + " €";
    return totalSum;
  }
}

function toggleOverlay() {
  let overlayRef = document.getElementById("overlay");
  overlayRef.classList.toggle("d-none");
  overlayRef.innerHTML += getDialogCon();
  disableScrolling();
}

function disableScrolling() {
  let body = document.getElementById("body");
  body.classList.toggle("position-fixed");
}



function sendOrder() {
  let totalSumRef = document.getElementById("total-order-sum").innerText;
  let basketContentRef = document.getElementById("basket-item");
  let myFinishOrderSectionRef = document.getElementById("total-sum");

  if (totalSumRef <= 10) {
    alert("Mindestbestellwert noch nicht erreicht, gönn dir doch noch etwas!");
  } else {
    clearBasketAndSendOrder(basketContentRef, myFinishOrderSectionRef);
  }
}

function clearBasketAndSendOrder(basketContentRef, myFinishOrderSectionRef) {
  basketContentRef.innerHTML = "";
  myFinishOrderSectionRef.innerHTML = "";

  for (let i = 0; i < basket.length; i++) {
    delete basket[i];
  }
  toggleOverlay();
  hideBasket();
  toggleBasketButton();
}

function toggleBasketButton() {
  let showBasketButton = document.getElementById("show-basket-button");
  showBasketButton.classList.toggle("d-none");
  disableScrolling();
}

function comingSoon() {
  let comingSoon = document.getElementById("coming-soon");
  comingSoon.classList.toggle("d-none");

  setTimeout(() => {
    comingSoon.classList.toggle("d-none");
  }, 4000);
}

function showBasket() {
  let basketOverlayRef = document.getElementById("basket");
  let button = document.getElementsByClassName("close-btn");
  basketOverlayRef.style.display = "block";
  button[0].style.display = "block";
  toggleBasketButton();
}

function hideBasket() {
  let basketOverlayRef = document.getElementById("basket");
  let button = document.getElementsByClassName("close-btn");
  basketOverlayRef.style.display = "";
  button[0].style.display = "";
  toggleBasketButton();
}
