"use strict"

$(document).ready(() => {
    const allImages = document.querySelectorAll(".mainImg");

    console.log(allImages.length)

    const prices = [2.00, 2.75, 3.00, 3.00, 2.00, 1.75, 5.00, 5.00, 5.00, 6.00, 7.00, 3.00]

    let orderItem = ""
    let total = 0

    for (let i = 0; i < allImages.length; i++) {
        const image = allImages[i];

        const oldImgurl = image.src;
        const newImgurl = image.id;

        const newImg = new Image();
        newImg.src = oldImgurl;

        image.addEventListener("mouseover", () => {
            image.src = newImgurl;
        })

        image.addEventListener("mouseout", () => {
            image.src = oldImgurl;
        })

        image.addEventListener("click", () => {

            orderItem = "$" + prices[i] + "-" + image.alt + "\n"

            total = total + prices[i]
            document.getElementById("total").innerHTML = "Total:" + "" + "$" + total.toFixed(2)
            console.log(total)
            var x = document.getElementById("order");
            var option = document.createElement("option");
            option.text = orderItem;
            x.add(option, x[i]);

            $("#clear_order").click(() => {
                x.remove(option, x[i]);
                $("#total").innerHTML = ""

            });
        })
    }

    /*$("#place_order").addEventListener("click", () => {
        window.open("checkout.html")
    });*/

    $("#place_order").click(() => {
        alert("THANK YOU FOR YOUR ORDER")
    })
})