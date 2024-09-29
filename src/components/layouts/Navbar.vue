<template>
  <!-- navBar -->
  <nav
    class="navbar navbar-expand-lg bg-white navbar-light d-none d-lg-block"
    id="nav-fix"
    dir="rtl"
  >
    <div class="container-fluid">
      <!-- logo -->
      <a class="navbar-brand" href="#">
        <img src="../../assets/img/other/svg/DKEngLogo.svg" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#main_nav"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse d-flex justify-content-between"
        id="main_nav"
      >
        <ul class="navbar-nav ms-auto w-60">
          <li class="nav-item w-60">
            <a class="nav-link" href="#">
              <!-- Search Button -->
              <div
                class="d-flex justify-content-between align-items-center w-170"
              >
                <span class="material-icons-outlined text-dark">search</span>
                <input
                  class="form-control font-iran-sm border-0"
                  type="text"
                  placeholder="جستجو …"
                  aria-label="Search"
                />
              </div>
            </a>
          </li>
        </ul>
        <div class="d-flex text-start">
          <ul
            class="navbar-nav ms-auto d-flex justify-content-between align-items-center"
          >
            <li class="nav-item d-none d-xl-block border-start">
              <a class="nav-link" href="#">
                <!-- Login Button -->
                <button
                  type="button"
                  class="btn myBtn btn-danger badge rounded-pill font-iran-sm d-flex align-items-center justify-content-between"
                  data-bs-toggle="tooltip"
                  data-bs-placement="bottom"
                  title="برای تجربه بهتر ، وارد حساب کاربری خود شوید."
                >
                  <span class="material-icons-outlined ms-1"
                    >person_outline</span
                  >
                  ورود به حساب کاربری
                </button>
              </a>
            </li>
            <!-- miniCart -->
            <div
              class="dropdown container p-3 cusor-pointer"
              className="dropdown"
              onclick=" zClickChangeNew()"
            >
              <div
                href="#"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
              >
                <!-- badge -->
                <div
                  class="font-iran badge bg-danger rounded-circle badge-new-fontSize position-absolute ml-25"
                >
                  <span class="align-middle" id="cartCount">0</span>
                </div>
                <!-- cart icon -->
                <span class="material-icons-outlined text-dark fs-30"
                  >shopping_cart</span
                >
              </div>
              <div class="dropdown-menu shadow font-iran-sm l-0 z-1">
                <!-- cartList -->
                <div
                  class="dropdown-item bg-transparent m-0 p-0 inherit-color cart-list-theme"
                  id="cart-list"
                  data-bs-toggle="dropdown"
                ></div>
                <!-- cart summary 1-totalqty 2-totalprice -->
                <div class="border-top p-2">
                  <!-- quantity -->
                  <div class="font-iran-mid text-end">
                    <span id="totalCount">۱</span>
                    <small>کالا</small>
                  </div>
                  <!-- pay -->
                  <div dir="rtl" class="text-end m-0 p-0">
                    <span class="font-iran-sm">مبلغ قابل پرداخت:</span>
                    <span>
                      <span id="subTotal">۴,۴۹۰,۰۰۰</span>
                      <span>توما</span>
                      <span class="over-top">ن</span>
                    </span>
                  </div>
                </div>
                <!-- cartBtn -->
                <div
                  class="dropdown-item bg-transparent m-0 p-1"
                  data-bs-toggle="
                                    dropdown"
                >
                  <div class="d-grid gap-2">
                    <button
                      class="btn btn-danger font-iran-mid"
                      type="button"
                      id="cartBtn"
                    >
                      ثبت سفارش
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>
