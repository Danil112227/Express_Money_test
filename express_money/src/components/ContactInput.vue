<template>
  <div class="form__field pb-5">
    <div class="form__field__label">
      <label for="form_field_name">
        <span class="form__field__label__ins">
          {{ title }} 
          <span class="req">*</span>
          :
        </span>
      </label>
    </div>
    <div class="form__field__ins">
      <input
        type="text"
        id="form_field_name"
        :value="value"
      >
    </div>
  </div>
</template>

<script>
    export default {
        props: {
            title: {
                type: String,
                default: ""
            },
            value: {
                type: String,
                default: ""
            }
        },
    }
</script>

<style>
    .form__field {
    width: 100%;
    padding-bottom: 10px;
  }
  
  .form__field__label__ins {
    color: #9B9B9B;
    padding-bottom: 3px;
  }

  .form__field__ins input {
    border: 1px solid #e8e9ef;
  box-shadow: inset 1px 1px 1px #e8e9ef;
  background: #f6f7fc;
  border-radius: 3px;
  width: 100%;
  -webkit-box-sizing: border-box;
  color: #000;
  
  height: 40px;
  max-width: 100%;
  padding: 0 15px;
  font: 13px/40px 'IBM Plex Sans', sans-serif;
  outline: none;
  }

  .req {
      color: red;
  }
</style>