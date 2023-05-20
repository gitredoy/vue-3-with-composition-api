export default {
    template: `<form @submit.prevent="add" action="" class="form-inline">
                <div class="form-group  mb-2 mr-2">
                     <input 
                      type="text" 
                      class="form-control"
                      placeholder="Add Assignment"
                      v-model="newAssignment"
                     >
               </div>
              
                  <button 
                  type="submit" 
                  class="btn btn-primary mb-2"
                  >
                  Add
                  </button>
              
              </form>
    `,
    props:{
        assignments: Array,
    } ,
    data(){
        return {
            newAssignment: '',
        }
    },
    methods:{
        add(){
            this.$emit('add',this.newAssignment)
            this.newAssignment = '';
        }
    }
}