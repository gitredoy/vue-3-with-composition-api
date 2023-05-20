import Assignment from "./Assignment.js";
export default {
  components: {
      Assignment,
  } ,
  template : `
    <section class="mb-2 border" >
        <h5 class="p-2">{{sectionTitle}}</h5>
        <ul v-show="assignments.length">
            <assignment :assignment="assignment" v-for="assignment in assignments" ></assignment>
        </ul>
    </section>
  `,
   props:{
       sectionTitle: String,
       assignments: Array,
   }
}