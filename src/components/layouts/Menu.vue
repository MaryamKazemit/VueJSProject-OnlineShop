<template>
  <!-- menu -->
  <nav
    class="navbar sticky-top navbar-expand-lg bg-white navbar-light shadow-sm font-iran-sm"
    id="menu"
    dir="rtl"
  >
    <div class="container-fluid d-flex justify-content-between">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse"
        id="navbarSupportedContent"
        dir="rtl"
      >
        <ul
          class="navbar-nav mb-2 mb-lg-0 m-0 p-0 d-flex justify-content-between"
        >
          <!-- multiLevel Menu -->
          <li
              class="nav-item d-flex justify-content-between align-items-center"
          >
            <a
                class="nav-link d-flex justify-content-between align-items-center cursor-p selection-none"
                :class="{'text-danger' : currentPage == 'Home'}"
                @click="$emit('changePage','Home')"
            >
              <span
                  class="material-icons-outlined d-flex justify-content-between align-items-center fs-med ms-1"
              >home</span
              >
              خانه
            </a>
          </li>
          <li
            class="nav-item dropdown d-flex justify-content-between align-items-center d-none d-lg-block"
            onclick="zClickChange()"
          >
            <a
              class="nav-link dropdown-toggle d-flex justify-content-between align-items-center"
              href="#"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
            >
              <span
                class="material-icons d-flex justify-content-between align-items-center fs-med ms-1"
                >menu</span
              >
              محصولات دیجیتال
            </a>
            <ul
              class="dropdown-menu shadow font-iran-sm"
              style="left: auto !important"
            >
              <li class="dropstart">
                <a
                  href="#"
                  class="dropdown-item dropdown-toggle align-items-center d-flex justify-content-between"
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="outside"
                >
                  برند
                  <span
                    class="material-icons-outlined d-flex justify-content-between align-items-center"
                    >chevron_left</span
                  >
                </a>
                <ul class="dropdown-menu shadow font-iran-sm">
                  <li><a class="dropdown-item text-end" href="">سامسونگ</a></li>
                  <li><a class="dropdown-item text-end" href="">شیائومی</a></li>
                  <li><a class="dropdown-item text-end" href="">هوآوی</a></li>
                  <li
                    class="dropend d-flex justify-content-between align-items-center"
                  >
                    <a
                      href="#"
                      class="dropdown-item dropdown-toggle d-flex justify-content-between align-items-center"
                      data-bs-toggle="dropdown"
                      data-bs-auto-close="outside"
                    >
                      اپل
                      <span
                        class="material-icons-outlined d-flex justify-content-between align-items-center"
                        >chevron_left</span
                      >
                    </a>
                    <ul
                      class="dropdown-menu dropdown-submenu shadow font-iran-sm"
                    >
                      <li>
                        <a class="dropdown-item text-end" href="">AirTag</a>
                      </li>
                      <li>
                        <a class="dropdown-item text-end" href="">Ipad</a>
                      </li>
                      <li>
                        <a class="dropdown-item text-end" href="">Mac Book</a>
                      </li>
                      <li>
                        <a class="dropdown-item text-end" href=""
                          >Apple Watch</a
                        >
                      </li>
                      <li
                        class="dropend d-flex justify-content-between align-items-center"
                      >
                        <a
                          href="#"
                          class="dropdown-item text-end dropdown-toggle d-flex justify-content-between align-items-center"
                          data-bs-toggle="dropdown"
                        >
                          Iphone
                          <span
                            class="material-icons-outlined d-flex justify-content-between align-items-center"
                            >chevron_left</span
                          >
                        </a>
                        <ul
                          class="dropdown-menu dropdown-submenu shadow font-iran-sm"
                        >
                          <li>
                            <a class="dropdown-item" href="">Iphone 13</a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="">Iphone 13 mini</a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="">Iphone 13 max</a>
                          </li>
                          <li>
                            <a class="dropdown-item" href=""
                              >Iphone 13 pro max</a
                            >
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li><a class="dropdown-item text-end" href="">نوکیا</a></li>
                </ul>
              </li>
              <li class="dropstart">
                <a
                  href="#"
                  class="dropdown-item text-end dropdown-toggle d-flex justify-content-between align-items-center"
                  data-bs-toggle="dropdown"
                >
                  لپ تاپ
                  <span
                    class="material-icons-outlined d-flex justify-content-between align-items-center"
                    >chevron_left</span
                  >
                </a>
                <ul class="dropdown-menu shadow font-iran-sm">
                  <li>
                    <a class="dropdown-item text-end" href="">مایکروسافت</a>
                  </li>
                  <li><a class="dropdown-item text-end" href="">اپل</a></li>
                  <li><a class="dropdown-item text-end" href="">دل</a></li>
                  <li><a class="dropdown-item text-end" href="">لنوو</a></li>
                  <li><a class="dropdown-item text-end" href="">اچ پی</a></li>
                  <li><a class="dropdown-item text-end" href="">ایسوس</a></li>
                  <li>
                    <a class="dropdown-item text-end" href="">ام اس آی</a>
                  </li>
                  <li><a class="dropdown-item text-end" href="">ایسر</a></li>
                  <li><a class="dropdown-item text-end" href="">ریزر</a></li>
                </ul>
              </li>
              <li class="dropstart">
                <a
                  href="#"
                  class="dropdown-item dropdown-toggle text-end d-flex justify-content-between align-items-center"
                  data-bs-toggle="dropdown"
                  data-bs-auto-close="outside"
                >
                  لوازم جانبی
                  <span
                    class="material-icons-outlined d-flex justify-content-between align-items-center"
                    >chevron_left</span
                  >
                </a>
                <ul class="dropdown-menu shadow font-iran-sm">
                  <li class="dropend">
                    <a
                      href="#"
                      class="dropdown-item dropdown-toggle text-end d-flex justify-content-between align-items-center"
                      data-bs-toggle="dropdown"
                      data-bs-auto-close="outside"
                    >
                      هندزفری
                      <span
                        class="material-icons-outlined d-flex justify-content-between align-items-center"
                        >chevron_left</span
                      >
                    </a>
                    <ul
                      class="dropdown-menu dropdown-submenu shadow font-iran-sm"
                    >
                      <li><a class="dropdown-item text-end" href="">QCY</a></li>
                      <li>
                        <a class="dropdown-item text-end" href="">GalaxyBuds</a>
                      </li>
                      <li>
                        <a class="dropdown-item text-end" href="">Airpods</a>
                      </li>
                      <li><a class="dropdown-item text-end" href="">AKG</a></li>
                      <li><a class="dropdown-item text-end" href="">JBL</a></li>
                      <li>
                        <a class="dropdown-item text-end" href="">Sony</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a class="dropdown-item text-end" href="">پاوربانک</a>
                  </li>
                  <li>
                    <a class="dropdown-item text-end" href="">کابل و شارژر</a>
                  </li>
                  <li>
                    <a class="dropdown-item text-end" href="">کیف و کاور</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li
            class="nav-item d-flex justify-content-between align-items-center"
          >
            <a
              class="nav-link d-flex justify-content-between align-items-center"
              href="#"
            >
              <span
                class="material-icons-outlined fs-med d-flex justify-content-between align-items-center ms-1"
                >shopping_basket</span
              >
              سوپر مارکت
            </a>
          </li>
          <li
            class="nav-item d-flex justify-content-between align-items-center"
          >
            <a
              class="nav-link d-flex justify-content-between align-items-center"
              href="#"
            >
              <span
                class="material-icons-outlined fs-med d-flex align-items-center justify-content-between ms-1"
                >percent</span
              >
              تخفیف ها و پیشنهاد ها
            </a>
          </li>
          <li
            class="nav-item d-flex justify-content-between align-items-center"
          >
            <a
              class="nav-link d-flex justify-content-between align-items-center"
              href="productList.html"
            >
              <span
                class="material-icons-outlined fs-med d-flex align-items-center justify-content-between ms-1"
                >category</span
              >
              لیست محصولات
            </a>
          </li>
          <li
            class="nav-item d-flex justify-content-between align-items-center"
          >
            <a
              class="nav-link d-flex justify-content-between align-items-center"
              href="#"
            >
              <span
                class="material-icons-outlined align-items-center justify-content-between d-flex fs-med ms-1"
                >newspaper</span
              >
              بلاگ
            </a>
          </li>
          <li
            class="nav-item d-flex justify-content-between align-items-center"
          >
            <a
              class="nav-link d-flex justify-content-between align-items-center cursor-p selection-none"
              :class="{'text-danger' : currentPage == 'about-us'}"
              @click="$emit('changePage','about-us')"
            >
              <span
                class="material-icons-outlined d-flex justify-content-between align-items-center fs-med ms-1"
                >groups</span
              >
              درباره ما
            </a>
          </li>

        </ul>
      </div>
      <div class="d-flex text-start float-start">
        <ul
          class="navbar-nav mb-2 mb-lg-0 m-0 p-0 d-flex justify-content-between align-items-center"
        >
          <li class="nav-item">
            <a
              class="nav-link d-flex justify-content-between align-items-center cursor-p selection-none"
              :class="{'text-danger' : currentPage == 'call-us'}"
              @click="$emit('changePage','call-us')"
            >
              تماس با ما
              <span
                class="material-icons d-flex justify-content-between me-2 align-items-center fs-med"
                id="horizontalFlip"
                >call</span
              >
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  props:['currentPage']
}
</script>

