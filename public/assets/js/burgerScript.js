$("#submit").submit(event => {
    event.preventDefault();

    const yummyBurger = {
        burgerName: $("$burgerName").val().trim()
    }

    $.post("/api/burgers", yummyBurger, () => {
        location.reload();
    })
});

$(".devourButtons").on("click", (event) => {
    const burgerId = $(event.target).attr("data-id");

    $.ajax(`/api/burgers/${burgerId}`, {
        type: "PUT"
    }).then(() => {
        location.reload();
    })
});