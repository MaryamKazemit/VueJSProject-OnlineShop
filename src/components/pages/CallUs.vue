<template>
  <!-- call us -->
  <div class="container mt-4" dir="rtl">
    <form class="font-iran-mid callUsForm" onsubmit="sendEmail(); reset(); return false;" @submit.prevent="sendEmail">
      <!-- name -->
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">نام</label>
        <input type="text" class="form-control" aria-label="default input example" id="name">
      </div>
      <!-- phone -->
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">تلفن</label>
        <input type="text" class="form-control" aria-label="default input example" id="phone">
      </div>
      <!-- email -->
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">ایمیل</label>
        <input type="email" class="form-control" aria-describedby="emailHelp" id="email">
        <div id="emailHelp" class="form-text font-iran-vsm">ما هرگز ایمیل شما را با فرد دیگری به اشتراک نخواهیم
          گذاشت!
        </div>
      </div>
      <!-- message -->
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">پیام</label>
        <textarea class="form-control" rows="3" id="message"></textarea>
        <div id="emailHelp" class="form-text font-iran-vsm">پیام خود را بنویسید.</div>
      </div>
      <!-- btn -->
      <button type="submit" class="btn btn-danger mlr-50 sendBtn">ارسال</button>
    </form>
  </div>
</template>

<script>
import emailjs from '@emailjs/browser';

export default {
  name: "CallUS",
  methods: {
    sendEmail() {
      emailjs.sendForm('service_iot2mgm', 'maryamkazemit2001@hotmail.com', this.$refs.form, 'UvpFTpfxOUmvSb1s_')
          .then((result) => {
            console.log('SUCCESS!', result.text);
          }, (error) => {
            console.log('FAILED...', error.text);
          });
    }
  }
}
</script>
