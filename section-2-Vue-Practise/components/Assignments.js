import AssignmentList from "./AssignmentList.js";
import PractiseTitle from "./PractiseTitle.js";
export default {
   components:{
      PractiseTitle,
      AssignmentList
   },
   template: `
     <div class="card mt-5">
        <practise-title :topicTitle="topicTitle"></practise-title>
        <div class="card-body">
           <!-- Assignment List -->
           <assignment-list 
           sectionTitle="Assignment List"
           :assignments="filter.incompleted"
           ></assignment-list>
           
           <!-- Completed Assignment List -->
           <assignment-list 
           sectionTitle="Completed Assignment List"
           :assignments="filter.completed"
           ></assignment-list>

        </div>
    </div>
   ` ,
   data(){
      return {
         topicTitle : "Section 2 Components & Props",
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
      filter() {
         return {
            incompleted :  this.assignments.filter(a => !a.complete),
            completed :  this.assignments.filter(a => a.complete),
         }
      }
   }
}