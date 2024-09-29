<template>
  <!-- breadCrumb -->
  <nav aria-label="breadcrumb" dir="rtl" class="font-iran-sm container mt-4">
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><a href="#" class="text-decoration-none pink-color">خانه</a></li>
      <li class="breadcrumb-item"><a href="#" class="text-decoration-none pink-color">کالای دیجیتال</a></li>
      <li class="breadcrumb-item"><a href="#" class="text-decoration-none pink-color">لپ تاپ</a></li>
      <li class="breadcrumb-item"><a href="#" class="text-decoration-none pink-color">اپل</a></li>
      <li class="breadcrumb-item active" aria-current="page">MacBook Air MGN63 2020</li>
    </ol>
  </nav>
  <!-- product picture -->
  <div class="container d-flex align-items-center justify-content-between">
    <!-- slider other picture of products -->
    <div class="col-md-4 widecontent">
      <div class="container">
        <div class="slick-slider-vertical slide-vertical m-0 p-0" style="width: 60%;">
          <!-- product1 watch-->
          <div id="product100" class="card m-2 align-items-center d-flex" style="width: 18rem;" dir="rtl">
            <img src="assets/img/0202d7a1d7993db0b364ffa5cc54e64867a63b4c_1605085572.webp"
                 class="card-img-top p-1" alt="...">
          </div>
          <!-- product2 iphone-->
          <div id="product101" class="card m-2 align-items-center d-flex" style="width: 18rem;" dir="rtl">
            <img src="assets/img/3eed287014b410ac773e38278ab894c858de843a_1605085572.webp"
                 class="card-img-top p-1" alt="...">
          </div>
          <!-- product3 speaker-->
          <div id="product102" class="card m-2 align-items-center d-flex" style="width: 18rem;" dir="rtl">
            <img src="assets/img/396bd9385ce6bf8ed045f9731dbda627348ce709_1605085573.webp"
                 class="card-img-top p-1" alt="...">
          </div>
          <!-- product4 headphone-->
          <div id="product103" class="card m-2 align-items-center d-flex" style="width: 18rem;" dir="rtl">
            <img src="assets/img/991443451e8a2a89f4103bb73be3ad54c20c5db6_1605085573.webp"
                 class="card-img-top p-1" alt="...">
          </div>
          <!-- product5 mouse-->
          <div id="product104" class="card m-2 align-items-center d-flex" style="width: 18rem;" dir="rtl">
            <img src="assets/img/8954477f4d8dacfd6dbe1bef80faaffc51d36790_1605085574.webp"
                 class="card-img-top p-1" alt="...">
          </div>
        </div>
      </div>
    </div>
    <!-- main picture of product -->
    <div class="col-md-4 widecontent">
      <img src="assets/img/79f4b1e3c31fb22fa193ea1393e2cb8e8a5863cc_1605085571.webp" alt="">
    </div>
    <div class="col-md-4">
      <!-- product name -->
      <div>
        <h6 class="font-iran-mid" dir="rtl">لپ تاپ 13 اینچی اپل مدل MacBook Air MGN63 2020</h6>
      </div>
      <!-- rate -->
      <div dir="rtl" class="mt-2">
        <div class="d-flex">
          <span class="material-icons-round fs-med coloredRateStar">star_rate</span>
          <span class="material-icons-round fs-med coloredRateStar">star_rate</span>
          <span class="material-icons-round fs-med coloredRateStar">star_rate</span>
          <span class="material-icons-round fs-med coloredRateStar">star_rate</span>
          <span class="material-icons-round fs-med coloredRateStar">star_rate</span>
          <div class="font-iran-vsm d-flex text-muted me-3" dir="rtl">5 نظر</div>
        </div>
      </div>
      <!-- price-->
      <div class="font-iran-mid" dir="rtl">
        <span class="font-iran-sm product-price" data-price="3185000">۳,۱۸۵,۰۰۰</span>
        <span>توما</span>
        <span class="over-top">ن</span>
      </div>
      <!-- info -->
      <div class="font-iran-sm mt-2" dir="rtl">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و
        متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
      </div>
      <div class="d-flex align-items-baseline mt-2" dir="rtl">
        <!-- size -->
        <h6 class="font-iran-sm ms-2">اندازه</h6>
        <select class="form-select font-iran-sm w-50" aria-label="Default select example">
          <option selected>انتخاب اندازه</option>
          <option value="1">SM</option>
          <option value="2">L</option>
          <option value="3">XL</option>
        </select>
      </div>
      <div class="d-flex align-items-baseline mt-2" dir="rtl">
        <!-- color -->
        <h6 class="font-iran-sm ms-3">رنگ</h6>
        <select class="form-select font-iran-sm w-50" aria-label="Default select example">
          <option selected>انتخاب رنگ</option>
          <option value="1">خاکستری</option>
          <option value="2">نقره ای</option>
          <option value="3">طلایی</option>
        </select>
      </div>
      <!-- quantity -->
      <div class="d-flex align-items-center mt-2" dir="rtl">
        <h6 class="font-iran-sm ms-2">تعداد</h6>
        <input type="number" value="1" min="1" max="100" step="1" class="w-25"/>
        <button type="button" class="btn btn-danger font-iran-sm me-2">افزودن به سبد خرید</button>
      </div>
    </div>


  </div>
  <!-- related products -->
  <div class="container mt-6 widecontent">
    <!-- title -->
    <div class="border-bottom">
      <h3 class="font-iran-mid test2" dir="rtl">کالا های مشابه</h3>
    </div>
    <div class="slick-slider-new-product slide-new-products mt-4">
      <!-- product1 watch-->
      <div id="product200" class="card m-2 align-items-center d-flex product" style="width: 18rem;" dir="rtl">
        <div>
                    <span class="position-absolute mt-2 mr-100 font-iran-mid badge rounded-pill bg-danger">
                        ۳۰%
                    </span>
        </div>
        <img src="assets/img/watch.webp" class="card-img-top p-1 product-img" alt="...">
        <div class="card-body border-top ms-3 me-3">
          <!-- title -->
          <h5 class="card-title font-iran-sm product-name">ساعت هوشمند سامسونگ مدل Galaxy Watch4 40mm</h5>
          <!-- rate -->
          <div class="d-flex align-items-center justify-content-between mt-3">
            <div class="font-iran-vsm d-flex text-muted" dir="rtl">5 نظر</div>
            <div class="d-flex" dir="ltr">
              <span class="material-icons-round fs-med coloredRateStar">star_rate</span>
              <span class="material-icons-round fs-med coloredRateStar">star_rate</span>
              <span class="material-icons-round fs-med coloredRateStar">star_rate</span>
              <span class="material-icons-round fs-med coloredRateStar">star_rate</span>
              <span class="material-icons-round fs-med coloredRateStar">star_half</span>
            </div>
          </div>
          <!-- price -->
          <div class="card-text font-iran-mid float-start mt-3 text-decoration-line-through text-muted">
            <span class="font-iran-sm">۴,۴۹۰,۰۰۰</span>
            <span>توما</span>
            <span class="over-top">ن</span>
          </div>
          <!-- price after offer -->
          <div class="card-text font-iran-mid float-end mt-3">
            <span class="font-iran-sm product-price" data-price="3185000">۳,۱۸۵,۰۰۰</span>
            <span>توما</span>
            <span class="over-top">ن</span>
          </div>
        </div>
        <!-- add to cart btn -->
        <div class="card-body">
          <button type="button" class="btn btn-danger font-iran-sm add-to-cart-btn">افزودن به سبد
            خرید
          </button>
        </div>
      </div>
      <!-- product2 iphone-->
      <div id="product201" class="card m-2 align-items-center d-flex product" style="width: 18rem;" dir="rtl">
        <div>
                    <span class="position-absolute mt-2 mr-100 font-iran-mid badge rounded-pill bg-danger">
                        ۳۰%
                    </span>
        </div>
        <img src="assets/img/iphone.webp" class="card-img-top p-1 product-img" alt="...">
        <div class="card-body border-top ms-3 me-3">
          <!-- title -->
          <h5 class="card-title font-iran-sm product-name">ساعت هوشمند سامسونگ مدل Galaxy Watch4 40mm</h5>
          <!-- rate -->
          <div class="d-flex align-items-center justify-content-between mt-3">
            <div class="font-iran-vsm d-flex text-muted" dir="rtl">5 نظر</div>
            <div class="d-flex" dir="ltr">
              <span class="material-icons-round fs-med coloredRateStar">star_rate</span>
              <span class="material-icons-round fs-med coloredRateStar">star_rate</span>
              <span class="material-icons-round fs-med coloredRateStar">star_rate</span>
              <span class="material-icons-round fs-med coloredRateStar">star_rate</span>
              <span class="material-icons-round fs-med coloredRateStar">star_half</span>
            </div>
          </div>
          <!-- price -->
          <div class="card-text font-iran-mid float-start mt-3 text-decoration-line-through text-muted">
            <span class="font-iran-sm">۴,۴۹۰,۰۰۰</span>
            <span>توما</span>
            <span class="over-top">ن</span>
          </div>
          <!-- price after offer -->
          <div class="card-text font-iran-mid float-end mt-3">
            <span class="font-iran-sm product-price" data-price="3185000">۳,۱۸۵,۰۰۰</span>
            <span>توما</span>
            <span class="over-top">ن</span>
          </div>
        </div>
        <!-- add to cart btn -->
        <div class="card-body">
          <button type="button" class="btn btn-danger font-iran-sm add-to-cart-btn">افزودن به سبد
            خرید
          </button>
        </div>
      </div>
      <!-- product3 speaker-->
      <div id="product202" class="card m-2 align-items-center d-flex product" style="width: 18rem;" dir="rtl">
        <div>
                    <span class="position-absolute mt-2 mr-100 font-iran-mid badge rounded-pill bg-danger">
                        ۳۰%
                    </span>
        </div>
        <img src="assets/img/speaker.webp" class="card-img-top p-1 product-img" alt="...">
        <div class="card-body border-top ms-3 me-3">
          <!-- title -->
          <h5 class="card-title font-iran-sm product-name">ساعت هوشمند سامسونگ مدل Galaxy Watch4 40mm</h5>
          <!-- rate -->
          <div class="d-flex align-items-center justify-content-between mt-3">
            <div class="font-iran-vsm d-flex text-muted" dir="rtl">5 نظر</div>
            <div class="d-flex" dir="ltr">
              <span class="material-icons-round fs-med coloredRateStar">star_rate</span>
              <span class="material-icons-round fs-med coloredRateStar">star_rate</span>
              <span class="material-icons-round fs-med coloredRateStar">star_rate</span>
              <span class="material-icons-round fs-med coloredRateStar">star_rate</span>
              <span class="material-icons-round fs-med coloredRateStar">star_half</span>
            </div>
          </div>
          <!-- price -->
          <div class="card-text font-iran-mid float-start mt-3 text-decoration-line-through text-muted">
            <span class="font-iran-sm">۴,۴۹۰,۰۰۰</span>
            <span>توما</span>
            <span class="over-top">ن</span>
          </div>
          <!-- price after offer -->
          <div class="card-text font-iran-mid float-end mt-3">
            <span class="font-iran-sm product-price" data-price="3185000">۳,۱۸۵,۰۰۰</span>
            <span>توما</span>
            <span class="over-top">ن</span>
          </div>
        </div>
        <!-- add to cart btn -->
        <div class="card-body">
          <button type="button" class="btn btn-danger font-iran-sm add-to-cart-btn">افزودن به سبد
            خرید
          </button>
        </div>
      </div>
      <!-- product4 headphone-->
      <div id="product203" class="card m-2 align-items-center d-flex product" style="width: 18rem;" dir="rtl">
        <div>
                    <span class="position-absolute mt-2 mr-100 font-iran-mid badge rounded-pill bg-danger">
                        ۳۰%
                    </span>
        </div>
        <img src="assets/img/headphone.webp" class="card-img-top p-1 product-img" alt="...">
        <div class="card-body border-top ms-3 me-3">
          <!-- title -->
          <h5 class="card-title font-iran-sm product-name">ساعت هوشمند سامسونگ مدل Galaxy Watch4 40mm</h5>
          <!-- rate -->
          <div class="d-flex align-items-center justify-content-between mt-3">
            <div class="font-iran-vsm d-flex text-muted" dir="rtl">5 نظر</div>
            <div class="d-flex" dir="ltr">
              <span class="material-icons-round fs-med coloredRateStar">star_rate</span>
              <span class="material-icons-round fs-med coloredRateStar">star_rate</span>
              <span class="material-icons-round fs-med coloredRateStar">star_rate</span>
              <span class="material-icons-round fs-med coloredRateStar">star_rate</span>
              <span class="material-icons-round fs-med coloredRateStar">star_half</span>
            </div>
          </div>
          <!-- price -->
          <div class="card-text font-iran-mid float-start mt-3 text-decoration-line-through text-muted">
            <span class="font-iran-sm">۴,۴۹۰,۰۰۰</span>
            <span>توما</span>
            <span class="over-top">ن</span>
          </div>
          <!-- price after offer -->
          <div class="card-text font-iran-mid float-end mt-3">
            <span class="font-iran-sm product-price" data-price="3185000">۳,۱۸۵,۰۰۰</span>
            <span>توما</span>
            <span class="over-top">ن</span>
          </div>
        </div>
        <!-- add to cart btn -->
        <div class="card-body">
          <button type="button" class="btn btn-danger font-iran-sm add-to-cart-btn">افزودن به سبد
            خرید
          </button>
        </div>
      </div>
      <!-- product5 mouse-->
      <div id="product204" class="card m-2 align-items-center d-flex product" style="width: 18rem;" dir="rtl">
        <div>
                    <span class="position-absolute mt-2 mr-100 font-iran-mid badge rounded-pill bg-danger">
                        ۳۰%
                    </span>
        </div>
        <img src="assets/img/mouse.webp" class="card-img-top p-1 product-img" alt="...">
        <div class="card-body border-top ms-3 me-3">
          <!-- title -->
          <h5 class="card-title font-iran-sm product-name">ساعت هوشمند سامسونگ مدل Galaxy Watch4 40mm</h5>
          <!-- rate -->
          <div class="d-flex align-items-center justify-content-between mt-3">
            <div class="font-iran-vsm d-flex text-muted" dir="rtl">5 نظر</div>
            <div class="d-flex" dir="ltr">
              <span class="material-icons-round fs-med coloredRateStar">star_rate</span>
              <span class="material-icons-round fs-med coloredRateStar">star_rate</span>
              <span class="material-icons-round fs-med coloredRateStar">star_rate</span>
              <span class="material-icons-round fs-med coloredRateStar">star_rate</span>
              <span class="material-icons-round fs-med coloredRateStar">star_half</span>
            </div>
          </div>
          <!-- price -->
          <div class="card-text font-iran-mid float-start mt-3 text-decoration-line-through text-muted">
            <span class="font-iran-sm">۴,۴۹۰,۰۰۰</span>
            <span>توما</span>
            <span class="over-top">ن</span>
          </div>
          <!-- price after offer -->
          <div class="card-text font-iran-mid float-end mt-3">
            <span class="font-iran-sm product-price" data-price="3185000">۳,۱۸۵,۰۰۰</span>
            <span>توما</span>
            <span class="over-top">ن</span>
          </div>
        </div>
        <!-- add to cart btn -->
        <div class="card-body">
          <button type="button" class="btn btn-danger font-iran-sm add-to-cart-btn">افزودن به سبد
            خرید
          </button>
        </div>
      </div>
      <!-- product6 watch2-->
      <div id="product205" class="card m-2 align-items-center d-flex product" style="width: 18rem;" dir="rtl">
        <div>
                    <span class="position-absolute mt-2 mr-100 font-iran-mid badge rounded-pill bg-danger">
                        ۳۰%
                    </span>
        </div>
        <img src="assets/img/watch2.webp" class="card-img-top p-1 product-img" alt="...">
        <div class="card-body border-top ms-3 me-3">
          <!-- title -->
          <h5 class="card-title font-iran-sm product-name">ساعت هوشمند سامسونگ مدل Galaxy Watch4 40mm</h5>
          <!-- rate -->
          <div class="d-flex align-items-center justify-content-between mt-3">
            <div class="font-iran-vsm d-flex text-muted" dir="rtl">5 نظر</div>
            <div class="d-flex" dir="ltr">
              <span class="material-icons-round fs-med coloredRateStar">star_rate</span>
              <span class="material-icons-round fs-med coloredRateStar">star_rate</span>
              <span class="material-icons-round fs-med coloredRateStar">star_rate</span>
              <span class="material-icons-round fs-med coloredRateStar">star_rate</span>
              <span class="material-icons-round fs-med coloredRateStar">star_half</span>
            </div>
          </div>
          <!-- price -->
          <div class="card-text font-iran-mid float-start mt-3 text-decoration-line-through text-muted">
            <span class="font-iran-sm">۴,۴۹۰,۰۰۰</span>
            <span>توما</span>
            <span class="over-top">ن</span>
          </div>
          <!-- price after offer -->
          <div class="card-text font-iran-mid float-end mt-3">
            <span class="font-iran-sm product-price" data-price="3185000">۳,۱۸۵,۰۰۰</span>
            <span>توما</span>
            <span class="over-top">ن</span>
          </div>
        </div>
        <!-- add to cart btn -->
        <div class="card-body">
          <button type="button" class="btn btn-danger font-iran-sm add-to-cart-btn">افزودن به سبد
            خرید
          </button>
        </div>
      </div>
      <!-- product7 speaker2-->
      <div id="product206" class="card m-2 align-items-center d-flex product" style="width: 18rem;" dir="rtl">
        <div>
                    <span class="position-absolute mt-2 mr-100 font-iran-mid badge rounded-pill bg-danger">
                        ۳۰%
                    </span>
        </div>
        <img src="assets/img/speaker2.webp" class="card-img-top p-1 product-img" alt="...">
        <div class="card-body border-top ms-3 me-3">
          <!-- title -->
          <h5 class="card-title font-iran-sm product-name">ساعت هوشمند سامسونگ مدل Galaxy Watch4 40mm</h5>
          <!-- rate -->
          <div class="d-flex align-items-center justify-content-between mt-3">
            <div class="font-iran-vsm d-flex text-muted" dir="rtl">5 نظر</div>
            <div class="d-flex" dir="ltr">
              <span class="material-icons-round fs-med coloredRateStar">star_rate</span>
              <span class="material-icons-round fs-med coloredRateStar">star_rate</span>
              <span class="material-icons-round fs-med coloredRateStar">star_rate</span>
              <span class="material-icons-round fs-med coloredRateStar">star_rate</span>
              <span class="material-icons-round fs-med coloredRateStar">star_half</span>
            </div>
          </div>
          <!-- price -->
          <div class="card-text font-iran-mid float-start mt-3 text-decoration-line-through text-muted">
            <span class="font-iran-sm">۴,۴۹۰,۰۰۰</span>
            <span>توما</span>
            <span class="over-top">ن</span>
          </div>
          <!-- price after offer -->
          <div class="card-text font-iran-mid float-end mt-3">
            <span class="font-iran-sm product-price" data-price="3185000">۳,۱۸۵,۰۰۰</span>
            <span>توما</span>
            <span class="over-top">ن</span>
          </div>
        </div>
        <!-- add to cart btn -->
        <div class="card-body">
          <button type="button" class="btn btn-danger font-iran-sm add-to-cart-btn">افزودن به سبد
            خرید
          </button>
        </div>
      </div>
      <!-- product8 headphone2-->
      <div id="product207" class="card m-2 align-items-center d-flex product" style="width: 18rem;" dir="rtl">
        <div>
                    <span class="position-absolute mt-2 mr-100 font-iran-mid badge rounded-pill bg-danger">
                        ۳۰%
                    </span>
        </div>
        <img src="assets/img/headphone2.webp" class="card-img-top p-1 product-img" alt="...">
        <div class="card-body border-top ms-3 me-3">
          <!-- title -->
          <h5 class="card-title font-iran-sm product-name">ساعت هوشمند سامسونگ مدل Galaxy Watch4 40mm</h5>
          <!-- rate -->
          <div class="d-flex align-items-center justify-content-between mt-3">
            <div class="font-iran-vsm d-flex text-muted" dir="rtl">5 نظر</div>
            <div class="d-flex" dir="ltr">
              <span class="material-icons-round fs-med coloredRateStar">star_rate</span>
              <span class="material-icons-round fs-med coloredRateStar">star_rate</span>
              <span class="material-icons-round fs-med coloredRateStar">star_rate</span>
              <span class="material-icons-round fs-med coloredRateStar">star_rate</span>
              <span class="material-icons-round fs-med coloredRateStar">star_half</span>
            </div>
          </div>
          <!-- price -->
          <div class="card-text font-iran-mid float-start mt-3 text-decoration-line-through text-muted">
            <span class="font-iran-sm">۴,۴۹۰,۰۰۰</span>
            <span>توما</span>
            <span class="over-top">ن</span>
          </div>
          <!-- price after offer -->
          <div class="card-text font-iran-mid float-end mt-3">
            <span class="font-iran-sm product-price" data-price="3185000">۳,۱۸۵,۰۰۰</span>
            <span>توما</span>
            <span class="over-top">ن</span>
          </div>
        </div>
        <!-- add to cart btn -->
        <div class="card-body">
          <button type="button" class="btn btn-danger font-iran-sm add-to-cart-btn">افزودن به سبد
            خرید
          </button>
        </div>
      </div>
      <!-- product9 iphone2-->
      <div id="product208" class="card m-2 align-items-center d-flex product" style="width: 18rem;" dir="rtl">
        <div>
                    <span class="position-absolute mt-2 mr-100 font-iran-mid badge rounded-pill bg-danger">
                        ۳۰%
                    </span>
        </div>
        <img src="assets/img/iphone2.webp" class="card-img-top p-1 product-img" alt="...">
        <div class="card-body border-top ms-3 me-3">
          <!-- title -->
          <h5 class="card-title font-iran-sm product-name">ساعت هوشمند سامسونگ مدل Galaxy Watch4 40mm</h5>
          <!-- rate -->
          <div class="d-flex align-items-center justify-content-between mt-3">
            <div class="font-iran-vsm d-flex text-muted" dir="rtl">5 نظر</div>
            <div class="d-flex" dir="ltr">
              <span class="material-icons-round fs-med coloredRateStar">star_rate</span>
              <span class="material-icons-round fs-med coloredRateStar">star_rate</span>
              <span class="material-icons-round fs-med coloredRateStar">star_rate</span>
              <span class="material-icons-round fs-med coloredRateStar">star_rate</span>
              <span class="material-icons-round fs-med coloredRateStar">star_half</span>
            </div>
          </div>
          <!-- price -->
          <div class="card-text font-iran-mid float-start mt-3 text-decoration-line-through text-muted">
            <span class="font-iran-sm">۴,۴۹۰,۰۰۰</span>
            <span>توما</span>
            <span class="over-top">ن</span>
          </div>
          <!-- price after offer -->
          <div class="card-text font-iran-mid float-end mt-3">
            <span class="font-iran-sm product-price" data-price="3185000">۳,۱۸۵,۰۰۰</span>
            <span>توما</span>
            <span class="over-top">ن</span>
          </div>
        </div>
        <!-- add to cart btn -->
        <div class="card-body">
          <button type="button" class="btn btn-danger font-iran-sm add-to-cart-btn">افزودن به سبد
            خرید
          </button>
        </div>
      </div>
      <!-- product10 speaker3-->
      <div id="product209" class="card m-2 align-items-center d-flex product" style="width: 18rem;" dir="rtl">
        <div>
                    <span class="position-absolute mt-2 mr-100 font-iran-mid badge rounded-pill bg-danger">
                        ۳۰%
                    </span>
        </div>
        <img src="assets/img/speaker3.webp" class="card-img-top p-1 product-img" alt="...">
        <div class="card-body border-top ms-3 me-3">
          <!-- title -->
          <h5 class="card-title font-iran-sm product-name">ساعت هوشمند سامسونگ مدل Galaxy Watch4 40mm</h5>
          <!-- rate -->
          <div class="d-flex align-items-center justify-content-between mt-3">
            <div class="font-iran-vsm d-flex text-muted" dir="rtl">5 نظر</div>
            <div class="d-flex" dir="ltr">
              <span class="material-icons-round fs-med coloredRateStar">star_rate</span>
              <span class="material-icons-round fs-med coloredRateStar">star_rate</span>
              <span class="material-icons-round fs-med coloredRateStar">star_rate</span>
              <span class="material-icons-round fs-med coloredRateStar">star_rate</span>
              <span class="material-icons-round fs-med coloredRateStar">star_half</span>
            </div>
          </div>
          <!-- price -->
          <div class="card-text font-iran-mid float-start mt-3 text-decoration-line-through text-muted">
            <span class="font-iran-sm">۴,۴۹۰,۰۰۰</span>
            <span>توما</span>
            <span class="over-top">ن</span>
          </div>
          <!-- price after offer -->
          <div class="card-text font-iran-mid float-end mt-3">
            <span class="font-iran-sm product-price" data-price="3185000">۳,۱۸۵,۰۰۰</span>
            <span>توما</span>
            <span class="over-top">ن</span>
          </div>
        </div>
        <!-- add to cart btn -->
        <div class="card-body">
          <button type="button" class="btn btn-danger font-iran-sm add-to-cart-btn">افزودن به سبد
            خرید
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Product"
}
</script>

<style scoped>

</style>