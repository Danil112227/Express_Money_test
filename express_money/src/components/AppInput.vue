<template>
  <div class="form__field">
    <div class="form__field__label">
      <label for="form_field_id-1-logmail">
        <span class="form__field__label__ins">
          {{ title }} 
          <span class="req">*</span>
          :
        </span>
      </label>
    </div>
    <div class="form__field__ins">
      <input
        @input="onInput"
        :type="type"
        id="form_field_id-1-logmail"
        :value="value"
        autocomplete="off"
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
                type: [
                  String,
                  Number
                ],
                default: ""
            },
            type: {
              type: String,
              default: "text"
            },
        },
       methods: {
        onInput (event) {
            this.$emit('input', event.target.value)
        },
       }
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