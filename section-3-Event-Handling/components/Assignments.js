import AssignmentList from "./AssignmentList.js";
import Episode7 from "./Episode7.js";
import AssignmentCreate from "./AssignmentCreate.js";


export default {
    components: {
        Episode7,
        AssignmentCreate,
        AssignmentList,
    },
    template: `
          <div class="card mt-5">
             <episode7 :topicTitle="topicTitle"></episode7>
            <div class="card-body">
              
              <assignment-create @add="add"></assignment-create>
          
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
            topicTitle : "Handle A From Submission",
            assignments:[
                {id:1,topic:'Read Chapter 01',complete:false},
                {id:2,topic:'Read Chapter 02',complete:false},
                {id:3,topic:'Read Chapter 03',complete:false},
                {id:4,topic:'Read Chapter 04',complete:false},
                {id:5,topic:'Read Chapter 05',complete:false},
            ],
        }
    },
    methods:{
        add(topic){
            this.assignments.push({
                id:this.assignments.length+1,
                topic:topic,
                complete:false
            });
            //this.newAssignment = '';
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