// bootstrap toolTip
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})
// // slider
// $(document).ready(function () {
//     $('.slick-slider').not('.slick-initialized').slick({
//         dots: true,
//         speed: 300,
//         slidesToShow: 1,
//     });
// });
// //slider new products
// $(document).ready(function () {
//     $('.slick-slider-new-product').not('.slick-initialized').slick({
//         slidesToShow: 5,
//         slidesToScroll: 1,
//     });
// });
// //slider newest from blog
// $(document).ready(function () {
//     $('.slick-slider-blog').not('.slick-initialized').slick({
//         slidesToShow: 4,
//         slidesToScroll: 1,
//     });
// });
// //slider vertical
// $(document).ready(function () {
//     $('.slick-slider-vertical').not('.slick-initialized').slick({
//         slidesToShow: 1,
//         slidesToScroll: 1,
//     });
// });
// // slider move with time
// window.onload = function () {
//     //error Uncaught TypeError: can't access property "add", e.$slides is null
//     // $(".slider").not('.slick-initialized').slick()
//     $('.slide').not('.slick-initialized').slick({
//         autoplay: true,
//         autoplaySpeed: 1500,
//         dots: true,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         infinite: true,
//     });
//     $('.slide-new-products').not('.slick-initialized').slick({
//         autoplay: true,
//         autoplaySpeed: 1500,
//         slidesToShow: 5,
//         slidesToScroll: 1,
//         infinite: true,
//     });
//     $('.slide-blog').not('.slick-initialized').slick({
//         autoplay: true,
//         autoplaySpeed: 1500,
//         slidesToShow: 4,
//         slidesToScroll: 1,
//         infinite: true,
//     });
//     $('.slide-vertical').not('.slick-initialized').slick({
//         autoplay: true,
//         autoplaySpeed: 1500,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         infinite: true,
//         vertical: true,
//     })
// };
//scroll event
window.onscroll = function () { myScrollFunction() };
function myScrollFunction() {
    if (document.documentElement.scrollTop > 20) {
        document.getElementById("menu").className = "navbar sticky-top navbar-expand-lg bg-white navbar-light shadow-sm font-iran-sm";
    } else {
        document.getElementById("menu").className = "navbar sticky-top navbar-expand-lg bg-white navbar-light shadow-sm font-iran-sm z-0";
    }
}
function zClickChange() {
    document.getElementById("menu").className = "navbar sticky-top navbar-expand-lg bg-white navbar-light shadow-sm font-iran-sm";
}
function zClickChangeNew() {
    document.getElementById("menu").className = "navbar sticky-top navbar-expand-lg bg-white navbar-light shadow-sm font-iran-sm z-0";
}
//jquery ver
// $("window").scroll(function () {
//     alert("hi")})
//     var test = $("#nav-fix").height();
//     if ($(this).scrollTop() >= test) {
//         $("#menu").removeClass("z-1");
//         alert("hi")
//     }
//     console.log("enter")
// })
//miniCart
let cartPlguin = {
    cartArea: document.getElementById('cart-list'),
    cartCount: document.getElementById('cartCount'),
    totalCount: document.getElementById('totalCount'),
    subTotal: document.getElementById('subTotal'),
    init: function () {
        let cartBtns = document.querySelectorAll('.add-to-cart-btn');
        cartBtns.forEach(function (tag) {
            tag.addEventListener('click', function (event) {
                cartPlguin.add(event)
            })
        });
    },
    add: function (e, quantity = 1) {
        let el = e.target;
        let parent = el.closest('.product');
        let productId = parent.getAttribute('id');
        let img = parent.querySelector('.product-img');
        let title = parent.querySelector('.product-name');
        let price = parent.querySelector('.product-price');
        // Check Product Exist
        if (this.cartArea.querySelector(`.${productId}`) == null) {
            this.append(productId, img.getAttribute('src'), title.innerText, price.getAttribute('data-price'));
        } else {
            this.update(productId, img.getAttribute('src'), title.innerText, price.getAttribute('data-price'), quantity);
        }
    },
    append(id, img, name, price, quantity = 1) {
        this.cartArea.innerHTML += this.template(id, img, name, price, quantity);
        this.cartCount.innerText = parseInt(this.cartCount.innerText) + quantity;
        this.totalCount.innerText = parseInt(this.totalCount.textContent) + quantity;
        let totalAmount = quantity * price;
        this.subTotal.innerText = parseInt(this.subTotal.textContent) + totalAmount;
    },
    template: function (id, img, name, price, quantity) {
        let html = `
        <div class="product-widget">
            <div class="position-relative d-flex p-2 ${id}">
                <div class="product-img">
                    <img src="${img}" class="w-60" alt="">
                </div>
                <div class="product-body">
                    <h3 class="product-name font-iran-sm" dir="rtl">${name}</h3>
                    <h4 class="product-price d-flex justify-content-between font-iran-sm p-2">
                        <span class="qty" data-quantity="${quantity}">${quantity}x</span>
                        <span class="font-iran- price" data-price="${price}" dir="rtl">${price}ريال</span>
                    </h4>
                </div>
                <button class="delete" onclick="cartPlguin.destroy(event)"><i class="fa fa-close"></i></button>
            </div>
        </div>
        `;
        return html;
    },
    update: function (id, img, name, price, newQuantity = 1) {
        let product = document.querySelector(`.${id}`);
        let oldQuantityTag = product.querySelector('.qty');
        let newQty = parseInt(oldQuantityTag.getAttribute('data-quantity')) + newQuantity;
        oldQuantityTag.innerText = `${newQty}X`;
        oldQuantityTag.setAttribute('data-quantity', newQty);
        this.cartCount.innerText = parseInt(this.cartCount.innerText) + newQuantity;
        this.totalCount.innerText = parseInt(this.totalCount.textContent) + newQuantity;
        let totalAmount2 = newQuantity * price;
        this.subTotal.innerText = parseInt(this.subTotal.textContent) + totalAmount2;
    },
    destroy: function (event) {
        let element = event.target;
        let parent = element.closest('.product-widget');
        let price = parent.querySelector('.price');
        let priceValue = parseInt(price.getAttribute('data-price'));
        let qty = parent.querySelector('.qty');
        let qtyValue = parseInt(qty.getAttribute('data-quantity'));
        let total = priceValue * qtyValue;
        this.cartCount.innerText = parseInt(this.cartCount.innerText) - qtyValue;
        this.totalCount.innerText = parseInt(this.totalCount.textContent) - qtyValue;
        this.subTotal.innerText = parseInt(this.subTotal.textContent) - total;
        parent.remove();
    }
}
cartPlguin.init();
// call us form send to email
function sendEmail() {
    Email.send({
        secureToken: "518ed238-0ca1-421c-a249-6a4355aa919d",
        To: 'maryamkazemit2001@gmail.com',
        From: document.getElementById("email").value,
        Subject: "new contact form enquiry",
        Body: "name:" + document.getElementById("name").value
            + "<br> email:" + document.getElementById("email").value
            + "<br> phone number:" + document.getElementById("phone").value
            + "<br> message:" + document.getElementById("message").value
    }).then(
        message => alert("پیام شما با موفقیت ارسال شد 😊~!")
    );
}
$('table').on('click', ".testNew", function (e) {
    console.log("clicked")
    $(this).closest('tr').remove()
})
$('#procedureBtn').click(function () {
    window.location.href = "checkOut.html"
})
$('#cartBtn').click(function () {
    window.location.href = "cart.html"
})
$(function () {
    $(window).resize(function () {
        if (window.innerWidth > 1000) {
            $('.widecontent').show();
        }
        else {
            $('.widecontent').hide();
            // $(document).ready(function () {
            //     $('.slick-slider-new-product').not('.slick-initialized').slick({
            //         slidesToShow: 2,
            //         slidesToScroll: 1,
            //     });
            // });
        }
    }).resize();
});


//table js code
var val_range;
$.fn.dataTable.ext.search.push(
    function (settings, data, dataIndex) {
        var min = parseFloat(val_range.slider("values", 0));
        var max = parseFloat(val_range.slider("values", 1));
        var col = parseFloat(data[3]) || 0;
        if ((isNaN(min) && isNaN(max)) ||
            (isNaN(min) && col <= max) ||
            (min <= col && isNaN(max)) ||
            (min <= col && col <= max)) {
            return true;
        }
        return false;
    }
);
function myTest() {
    var x = document.querySelector('.dataTables_filter label');
    // x.textContent = "جست و جو:"
    console.log("found")
    console.log(x.textContent)

}
$(document).ready(function () {
    val_range = $("#val_range");
    var live_range_val = $("#live_range_val");
    val_range.slider({
        range: true,
        min: 0,
        max: 30,
        step: 1,
        values: [0, 30],
        slide: function (event, ui) {
            live_range_val.text(ui.values[0] + " ريال " + " - " + ui.values[1] + " ريال ");
        },
        stop: function (event, ui) {
            table.draw();
        }
    });
    live_range_val.text(val_range.slider("values", 0) + " ريال " + " - " + val_range.slider("values", 1) + " ريال ");
    // $("#range").text("$" + minimum + "- $" + maximum);


    var table = $("#sort_table").DataTable({
        "bPaginate": false,
        "bFilter": true,
        aaSorting: [[3, 'asc']],
        fixedHeader: { header: true, footer: true }, responsive: true,
        autoWidth: false,
        cache: true,
        initComplete: function () {
        }
    });
    $(".filterhead").each(function (i) {
        if (i != 4 && i != 5) {
            var select = $('<select><option value="" selected>انتخاب کنید</option></select>')
                .appendTo($(this).empty())
                .on('change', function () {
                    var term = $(this).val();
                    table.column(i).search(term, false, false).draw();
                });
            table.column(i).data().unique().sort().each(function (d, j) {
                select.append('<option value="' + d + '">' + d + '</option>')
            });
        } else {
            $(this).empty();
        }
    });
    myTest();
});