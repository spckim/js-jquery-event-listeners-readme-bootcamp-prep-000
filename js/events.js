//define functions here
function getIt() {
  $('p').on('click', function() {
    alert("hey!")
  })
}

function frameIt() {
  $('img').on("load", function() {
    $('img').addClass("tasty")
    $('.tasty').css("border", "solid 1px red")
  })
}

function pressIt() {
  $('#typing').on("keydown", function(key) {
    if (key.which === 71) {
      alert('g was pressed');
    }
  })
}

function submitIt() {
  $('form').on("submit", function() {
    alert("Your form is going to be submitted now.")
    })
  }

$(document).ready(function(){

// call functions here
getIt()
frameIt()
pressIt()
submitIt()
});
