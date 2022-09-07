window.addEventListener('DOMContentLoaded', (_) => {
  fetch('https://spoonacular.com/food-api')
  .then((response) => response.json())
  .then((images) => console.log(images));
  const data = { images: 'recipes' };

fetch('https://spoonacular.com/food-api', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(images),
})
  .then((response) => response.json())
  .then((images) => {
    console.log('images:', images);
  })
  .catch((error) => {
    console.error('Error:', error);
  });

  console.log('DOM fully loaded and parsed');
});

$(document).ready(function() {
   
    class menu {
    constructor(african, asian, drinks, total, orderNumber) {
      this.african = african;
      this.asian = asian;
      this.drinks = drinks;
      this.total = total;
      this.orderNumber = orderNumber;
    }
  }
  
  $('.order').click(function() {
    let african = $(".african option:selected").val();
    let  asian = $(".asian option:selected").val();
    let drinks = $(".drinks option:selected").val();
    let total = parseInt(african) + parseInt(asian) + parseInt(drinks);
    let order =1;
    let amount = 0;


  $("#african").html($(".african option:selected").text() + " - " + african);
  $("#asian").html($(".asian option:selected").text() + " - " + asian);
  $("#drinks").html($(".drinks option:selected").text() + " - " + drinks);
  $("#total").html(total);


  $('.add-btn').click(function() {
    let african = $(".african option:selected").val();
    let asian = $(".asian option:selected").val();
    let drinks = $(".drinks option:selected").val();
    let total = parseInt(african) + parseInt(asian) + parseInt(drinks);
    order = order + 1;
    amount = amount + total;

    let newMenu = new menu(african, asian, drinks, total, order);
    
    let newRow = '<tr><th scope="row">' + newMenu.orderNumber + '</th><td id="african">' + $(".african option:selected").text() + " - " + newMenu.african + '</td><td id="asian">' + $(".asian option:selected").text() + " - " + newMenu.asian + '</td><td id="drinks">' + $(".drinks option:selected").text() + " - " + newMenu.drinks + '</td><td id="total">' + newMenu.total + '</td></tr>'

    $("#menu").append(newRow);
  });
});
});
