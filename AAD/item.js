$(document).ready(function () {
    $("#save").click(function () {
        event.preventDefault();

        let codeE = $("#code").val();
        let descE = $("#desc").val();
        let qtyE = $("#qty").val();
        let priceE = $("#price").val();

        console.log(codeE);
        console.log(descE);
        console.log(qtyE);
        console.log(priceE);

        const itemData = {
            code: codeE,
            description: descE,
            qty: qtyE,
            price: priceE
        };

        console.log(itemData)

        const itemJSON = JSON.stringify(itemData)
        console.log(itemJSON)

        $.ajax({
            url: "http://localhost:8080/item",
            type: "POST",
            data: itemJSON,
            headers: {"Content-Type": "application/json"},
            success: (res) => {
                console.log(JSON.stringify(res));
            },
            error: (res) => {
                console.error(res);
            }
        })
    })
})