import AssignmentList from "./AssignmentList.js";
import Episode7 from "./Episode7.js";


export default {
    components: {
        AssignmentList,
        Episode7,
    },
    template: `
          <div class="card mt-5">
             <episode7 :topicTitle="topicTitle"></episode7>
            <div class="card-body">
          
              <assignment-list
              :assignments="filters.inProgress"
              title="Our Assignment List"
              ></assignment-list>
              
              <assignment-list 
              v-show="completedAssignment.length"
              :assignments="filters.completed"
              title="Completed Assignment List"
              ></assignment-list>
             
            </div>
          </div>
        ` ,
    data(){
        return {
            topicTitle : "Bring It All Together",
            assignments:[
                {id:1,topic:'Read Chapter 01',complete:false},
                {id:2,topic:'Read Chapter 02',complete:false},
                {id:3,topic:'Read Chapter 03',complete:false},
                {id:4,topic:'Read Chapter 04',complete:false},
                {id:5,topic:'Read Chapter 05',complete:false},
            ],
        }
    },
    computed:{
        incompleteAssignment(){
            return this.assignments.filter(a => !a.complete);
        },
        completedAssignment(){
            return this.assignments.filter(a => a.complete);
        },
        filters(){
            return {
                inProgress : this.assignments.filter(a => !a.complete),
                completed : this.assignments.filter(a => a.complete)
            }
        }
    }
}