export default {
    template : `
        <button
        class="btn btn-success btn-block text-uppercase"
        :disabled="processing"
        >
         <slot></slot>
        </button>

      ` ,
    data(){
        return {
            processing : false,
        }
    }
}