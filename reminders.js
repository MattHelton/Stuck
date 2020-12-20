 
var names =  JSON.parse(localStorage.getItem('contacts'));
names.forEach(function(key){
console.log(names);
console.log(key.firstName);
console.log(key.lastName);
console.log(key.phone);
$("#result").append(key.firstName + "  " + key.lastName +"   " + key.phone + '<br>' + "<br>");

})
var options = names;
var nameArray = options.map (function(el){ return {firstName:el.firstName, lastName:el.lastName, phone:el.phone, likes:el.likes, pets:el.pets, birthday:el.birthday, dislikes: el.dislikes, latestconvo: el.latestconvo}});
console.log(nameArray);

  

// This is where I'm stuck - this function gets the the index of an array item (an object with all the contats)
//and I need it to create a "card" for the selected name

function createCard(index) {
  console.log(index);
var valueAtIndex = names.getValue(index);
console.log(valueAtIndex);

}


$('#generate').click(function() {

  $('#cassa').empty();
    var values = nameArray;
 
    var select = $('<select>').prop('id', 'myPPs')
                    .prop('name', 'myPPs');
 
    $(values).each(function(index) {
      console.log(index);
      console.log(this.firstName);
      select.append($("<option>")
        .prop('value', this.firstName)
        .text(this.firstName.toUpperCase()).attr("data-index", index));
    });
 
    var label = $("<label>").prop('for', 'myPPs')
                   .text("Select Your Contact: ");
 
    var br = $("<br>");
 
    $('#cassa').append(label).append(select).append(br);

    $("#myPPs").change(function() {
      var index = $("#myPPs option:selected").attr("data-index");

      
      console.log(index);
      createCard(index);
          
  });
  
  });




function sendMail() {
  var link = 'mailto:hello@domain.com?subject=Message from '
           +document.getElementById('email_address').value
           +'&body='+document.getElementById('email_address').value;
  window.location.href = link;
}

/*var options = names;
console.log (options);
var nameArray = options.map (function(el){ return {firstName:el.firstName, lastName:el.lastName, phone:el.phone}});
$.each(nameArray, function(key) {
 $("#result").append(key.firstName + key.lastName + key.phone + '<br>');

});*/



/*
var options = names;
console.log (options);
var nameArray = options.map (function(el){ return {firstName:el.firstName, phone:el.phone}});
console.log(nameArray);*/
//function createCard(index)
// This Generates a card
