export default {
    template: `
       <li>
          <label>
             {{assignment.topic}}
            <input 
            v-model="assignment.complete" 
            class="ml-1"  
            type="checkbox"
            >
          </label>
       </li>
    `,
    props: {
        assignment: Object,
    }
}