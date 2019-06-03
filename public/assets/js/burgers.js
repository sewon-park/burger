$("#submit").on("click", function(event) {
  // Make sure to preventDefault on a submit event.
  event.preventDefault();

  var newBurger = {
    burger_name: $("#newBurger").val().trim()
    };

  // Send the POST request.
  $.ajax("/api/burgers", {
    type: "POST",
    data: newBurger
  }).then(
    function() {
      console.log("created new burger");
      // Reload the page to get the updated list
      location.reload();
    }
  );
});



$(function() {
  $("#devourbtn").on("click", function(event) {
    var id = $(this).data("id");
    // var newDevour = $(this).data("newDevour");

    var newDevourState = {
      devoured: true
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevourState
    }).then(
      function() {
        console.log("changed to", newDevourState);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
})
