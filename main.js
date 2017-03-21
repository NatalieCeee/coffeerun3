(function (window) {
  'use strict';
  var FORM_SELECTOR = '[data-coffee-order="form"]';
  var CHECKLIST_SELECTOR = '[data-coffee-order="checklist"]';
  var App = window.App;
  var Truck = App.Truck;
  var DataStore = App.DataStore;
  var FormHandler = App.FormHandler;
  var Validation = App.Validation;
  var CheckList = App.CheckList;
  var webshim = window.webshim;
  var myTruck = new Truck('ncc-1701', new DataStore());
  window.myTruck = myTruck;
  var checkList = new CheckList(CHECKLIST_SELECTOR);
  checkList.addClickHandler(myTruck.deliverOrder.bind(myTruck));
  var formHandler = new FormHandler(FORM_SELECTOR);
  formHandler.addSubmitHandler(function (data) {
    myTruck.createOrder.call(myTruck, data);
    checkList.addRow.call(checkList, data);
  });
  console.log(formHandler);
  formHandler.addInputHandler(Validation.isCompanyEmail);

  webshim.polyfill('forms forms-ext');
  webshim.setOptions('forms', { addValidators: true, lazyCustomMessages: true })

})(window);

// Silver Challenge
var $slider = $('#strengthLevel');
var valueIndicator = document.querySelector('#rating');

if ($slider) {
  $slider.on('input', function () {
    valueIndicator.innerHTML = $slider[0].value;
    if ($slider[0].value >= 85) {
      valueIndicator.setAttribute('class', 'red');
    }
    else if ($slider[0].value <= 15) {
      valueIndicator.setAttribute('class', 'green');
    }
    else {
      valueIndicator.setAttribute('class', 'yellow');
    }
  });
}
var $order = $('#coffeeOrder');
$order.on('input', function (event) {
  if (!window.App.Validation.isBadDecaf($order[0].value, $slider[0].value)) {
    event.target.setCustomValidity('');
  } else {
    var message = "You can't order decaf coffee with a caffeine rating that high!";
    event.target.setCustomValidity(message);
  }
});
$slider.on('input', function (event) {
  if (!window.App.Validation.isBadDecaf($order[0].value, $slider[0].value)) {
    event.target.setCustomValidity('');
  } else {
    var message = "You can't order decaf coffee with a caffeine rating that high!";
    event.target.setCustomValidity(message);
  }
});
