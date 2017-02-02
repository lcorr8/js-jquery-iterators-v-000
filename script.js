$(document).ready(function(){
  
  $('div').each(function(i, n) {
    $(this).append("I am number:" + (i+1));
  });
  // why do they show twice in the browser?


  var names = ["Carleton", "Avi", "Azat", "Ann"];

  $.map(names, function(name, i){
    return name + " loves JavaScript";
  });

  /*
  $('ol li').map(function(name, index){
    return name.innerHTML;
  });
  */

  function listIterate(){
    //this return sets array as return value of listIterate
    return $('li').map(function(item, index){
        // this return tells map to add text of the list item to the new array
        return item.innerHTML;
    });
  }
});
