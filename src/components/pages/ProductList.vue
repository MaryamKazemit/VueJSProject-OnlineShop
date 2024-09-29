<!-- jquery ui style -->
<link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.13.2/themes/smoothness/jquery-ui.css">
<!-- data table style -->
<link rel="stylesheet" href="https://cdn.datatables.net/1.10.16/css/jquery.dataTables.min.css">
<template>
  <!-- list with filter of category and slider range for price -->
  <div class="container mt-4">
    <p class="font-iran-mid">
      <label>محدوده قیمت</label>
      <span id="live_range_val">
            </span>
    </p>
    <div id="val_range" class="mb-4 w-100"></div>

    <table id="sort_table" class="display font-iran-mid w-100">
      <thead class="mt-4">
      <tr class="mt-4">
        <th class="filterhead">دسته بندی</th>
        <th class="filterhead">برند</th>
        <th class="filterhead widecontent">نام محصول</th>
        <th class="filterhead widecontent">قیمت</th>
        <th class="filterhead widecontent">سال تولید</th>
      </tr>
      <tr>
        <th>دسته بندی</th>
        <th>برند</th>
        <th class="widecontent">نام محصول</th>
        <th class="widecontent">قیمت</th>
        <th class="widecontent">سال تولید</th>
      </tr>
      </thead>
      <tbody>
      <!-- phones -->
      <tr>
        <td>گوشی هوشمند</td>
        <td>جی پلاس</td>
        <td class="widecontent">P10 Plus</td>
        <td class="widecontent">10 ريال</td>
        <td class="widecontent">2017/01/23</td>
      </tr>
      <tr>
        <td>گوشی هوشمند</td>
        <td>شیائومی</td>
        <td class="widecontent">Poco X4 Pro</td>
        <td class="widecontent">12 ريال</td>
        <td class="widecontent">2020/02/28</td>
      </tr>
      <tr>
        <td>گوشی هوشمند</td>
        <td>هوآوی</td>
        <td class="widecontent">nova Y60</td>
        <td class="widecontent">14 ريال</td>
        <td class="widecontent">2021/12/31</td>
      </tr>
      <tr>
        <td>گوشی هوشمند</td>
        <td>سامسونگ</td>
        <td class="widecontent">galaxy note 9</td>
        <td class="widecontent">16 ريال</td>
        <td class="widecontent">2018/06/09</td>
      </tr>
      <tr>
        <td>گوشی هوشمند</td>
        <td>اپل</td>
        <td class="widecontent">iphone XS Max</td>
        <td class="widecontent">18 ريال</td>
        <td class="widecontent">2019/11/20</td>
      </tr>
      <!-- tab -->
      <tr>
        <td>تبلت</td>
        <td>نارتب</td>
        <td class="widecontent">N27</td>
        <td class="widecontent">20 ريال</td>
        <td class="widecontent">2015/01/23</td>
      </tr>
      <tr>
        <td>تبلت</td>
        <td>شیائومی</td>
        <td class="widecontent">Mi Pad 2</td>
        <td class="widecontent">22 ريال</td>
        <td class="widecontent">2016/02/24</td>
      </tr>
      <tr>
        <td>تبلت</td>
        <td>هوآوی</td>
        <td class="widecontent">MatePad T 8</td>
        <td class="widecontent">24 ريال</td>
        <td class="widecontent">2018/05/21</td>
      </tr>
      <tr>
        <td>تبلت</td>
        <td>سامسونگ</td>
        <td class="widecontent">Galaxy TAB S6 Lite</td>
        <td class="widecontent">26 ريال</td>
        <td class="widecontent">2020/05/16</td>
      </tr>
      <tr>
        <td>تبلت</td>
        <td>اپل</td>
        <td class="widecontent">iPad Pro 11</td>
        <td class="widecontent">28 ريال</td>
        <td class="widecontent">2021/07/19</td>
      </tr>


      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "ProductList"
}
</script>
<!-- jquery -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<!-- jquery ui -->
<script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.13.2/jquery-ui.min.js"></script>
<!-- jquery data table -->
<script src="https://cdn.datatables.net/1.10.16/js/jquery.dataTables.min.js"></script>
<style scoped>

</style>