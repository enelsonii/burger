$(function() {
    $(".change-sleep").on("click", function(event) {
        var id = $(this).data("id");
        var newDevour = $(this).data("newdevour");

        var newEatenBurger = {
            devoured: newDevour
        };

        // send put request
        $.ajax("/api/cats/" + id, {
            type: "PUT",
            data: newEatenBurger
        }).then(
            function() {
                console.log("changed")
            }
        )
    });
});