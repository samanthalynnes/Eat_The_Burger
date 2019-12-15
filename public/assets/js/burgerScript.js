$(".create-form").on("submit", (event) => {
    event.preventDefault();

    const burger = {
        burgerName: $("#burgerName").val().trim()
    }

    $.post("/api/burgers", burger, () => {
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