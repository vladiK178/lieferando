function getTemplateHtml() {
  return `
      <div>
          <img
            class="banner-img"
            src="./assets/img/pizza-3007395_1280.jpg"
            alt="Banner"
          />
          <div class="center-logo">
            <img
              class="center-logo-img"
              src="./assets/img/tomato-4774954_1280.png" 
              alt="Logo"
            />
          </div>
          <h1>Giovanni's Pizza</h1>
          <div class="restaurant-info">
            <div class="rating">
                <img class="star-icon" src="./assets/icons/star-4-xxl.png" alt=""> <span class="text-orange">(4.8/5.0)</span>
            </div>
            <div class="delivery-info">
              <div class ="delivery-min">
                <img class="bag-icon" src="./assets/icons/bag-icon.png" alt="" /> <span>min. 12.00 €</span>
              </div>
              <div class="delivery-fee">
                <img class="delivery-icon" src="./assets/icons/bike-icon.png" alt="" /> <span>2.00 €</span>
              </div>
            </div>
          </div>
      </div>
      <div class="menu-selector">
          <img src="./assets/icons/arrow-34-32.png" alt="Arrow" />
          <a target="" href="#menu-content">Hauptgerichte</a>
          <a onclick="comingSoon()" class="text-margin-left-16 pointer"
            >Beilagen</a
          >
      </div>
  
      <div id="coming-soon" class="alert-coming-soon d-none">
        Beilagen sind bald verfügbar!
      </div>
  
      <div class="main-dishes">
          <img src="./assets/img/pizza-3000273_1280.jpg" alt="Main Dish" />
          <h2 class="text-margin-left-16">Hauptgerichte</h2>
      </div>
      `;
}

function getTemplateBasket() {
  return `
        <div id="basket-content" class="basket-content">
            <div class="close-btn">
              <img onclick="hideBasket()" src="./assets/icons/x-circle.png" alt="Close" />
            </div>
            <div class="basket-icon">
              <img src="./assets/icons/basket-icon.png" alt="Basket" />
            </div>
            <h2>Warenkorb</h2>
            <ul id="basket-item-wrapper">
                <li id="basket-item">
                  <div class="empty-basket-text" id="empty-basket-text" style="display: block">Dein Warenkorb ist leer... <br>Such dir was leckeres aus!</div>
                </li>
            </ul>
            <div id="total-sum" class="total-sum">
            </div>
        </div>
      `;
}

function getTotalSumTemplate() {
  return `
          <div class="current-order-sum">
            <p>Zwischensumme</p>
            <p id="current-order-sum"></p>
          </div>
          <div class="delivery-fee-status">
            <p>Lieferkosten</p>
            <p>2.00 €</p>
          </div>
          <div class="divider"></div>
          <div class="order-sum">
            <p>Gesamt</p>
            <p id="total-order-sum"></p>
          </div>
          <div class="complete-order-button" onclick="sendOrder()">
            <a>Bezahlen</a>
          </div>
    `;
}

function getEmptyBasketTemplate() {
  return `
            <div class="empty-basket-text" id="empty-basket-text" style="display: block">Dein Warenkorb ist leer... <br>Such dir was leckeres aus!</div>
      `;
}

function getBasketItemTemplate(i) {
  return `
                  <b>${basket[i].name}</b>
                  <div class="basket-item-text">
                    <div class="basket-amount">
                      <div class="change-amount">
                        <img onclick="itemReduceRemoveFromBasket(${i})" 
                          src="./assets/icons/minus-icon.png"
                          alt="Minus"
                        />
                      </div>
                      <p class="amount" id="amount">${basket[i].amount}x</p>
                      <div class="change-amount">
                        <img onclick="addAmountInBasket(${i})" src="./assets/icons/plus-icon.png" alt="Plus" />
                      </div>
                    </div>
                    <div class="price" id="price">${basket[i].price.toFixed(
                      2
                    )} €</div>
                    <div class="trash-container">
                      <img onclick="deleteItemFromBasket(${i})"
                        class="trash-icon"
                        src="./assets/icons/trash.png"
                        alt="delete"
                      />
                    </div>
                  </div>
    `;
}

function getMenuTemplate(i) {
  return `
      <div class="dishes-wrapper">
            <div class="dish-card">
              <div class="dish-text">
                <h2 class="dish-name">${myDishes[i].name}</h2>
                <p class="dish-description">
                ${myDishes[i].description}</p>
                <p class="dish-price">${myDishes[i].price.toFixed(2)} €</p>
              </div>
              <div class="dish-imgs-container">
                <img
                  class="dish-img"
                  src="${myDishes[i].img}"
                  alt="Pizza"
                />
                <img onclick="addToBasket(${i})"
                  class="add-to-basket-img"
                  src="./assets/icons/orange-plus.png"
                  alt="Plus"
                />
              </div>
            </div>
          </div>
    `;
}

function getDialogCon() {
  return `
    <div class="overlay-box" onclick="stopPropagation(event)" >
          <div class="thanks-for-order" id="thanks-for-order">
            <h2>Vielen Dank für Ihre Bestellung!</h2>
            <p>
              Ihre Bestellung wurde erfolgreich abgewickelt. <br> Sie erhalten eine
              Bestätigung per E-Mail.
            </p>
            <a href="index.html" onclick="toggleBasketButton()">Zurück zur Startseite</a>
          </div>
    </div>
    `;
}
