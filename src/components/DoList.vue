<template>
  <div class="do-list">
    <div  v-if="this.NCListNowLS.toDoList  && this.NCListNowLS.toDoList.length > 0" ></div>
    <h3 v-else>Список дел пуст</h3>
    <DoItem @chooseTask="$emit('chooseTask', toDo)" @deleteDoItem="$emit('deleteDoItem', toDo)" @itemCompleted = "$emit('onItemCompleted', toDo)"   v-for="toDo in NCListNowLS.toDoList" :key="toDo.id" :toDo="toDo" />
  </div>
</template>

<script>
  import DoItem from '@/components/DoItem.vue'

  export default {

    components:{
      DoItem
    },

    props:['NCListNowLS' ,],

    data(){
      return{
        toDoList:[] ,

      }
    },


  }
</script>



<style>
  .do-list{
    width: 100%;
    overflow-y: hidden;
    height:  300px;
  }
</style>
