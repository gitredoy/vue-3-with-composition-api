export default {
    template:
    `
       <button
       :class="{
       'btn btn-block' :true,
       'btn-light': type === 'light',
       'btn-primary': type === 'primary',
       'btn-success': type === 'success',
       'btn-danger': type === 'danger',
       'btn-warning': type === 'warning',
       'is-loading' : processing === true,
       }"
       :disabled="processing"
       >
       <slot></slot>
       </button>
    ` ,
    props:{
      type : {
          type: String,
          default: 'light'
      },
      processing: {
          type: Boolean,
          default: false
      }
    },
    data() {
        return {
            //processing : true,
        };
    }


    // mounted() {
    //     alert('okk');
    // }
}