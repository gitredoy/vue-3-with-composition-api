import Assignment from "./Assignment.js";
export default {
    components: {
      Assignment,
    },
    template : `
        <section  class="mb-2 border">
              <h5 class="p-2">
                {{title}}
              </h5>
              <ul>
                <assignment 
                v-for="assignment in assignments"
                :key="assignment.id"
                :assignment="assignment"
                ></assignment>
              </ul>
        </section>
    `,
    props: {
        title : String,
        assignments: Array,
        display: Boolean,
    }
}