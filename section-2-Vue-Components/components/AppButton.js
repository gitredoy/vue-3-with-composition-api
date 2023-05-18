export default {
    template:
    `
       <button
       class="btn btn-block btn-primary"
       :disabled="processing"
       >
       <slot></slot>
       </button>
    ` ,
    data() {
        return {
            processing : false,
        };
    }


    // mounted() {
    //     alert('okk');
    // }
}