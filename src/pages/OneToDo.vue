<template>
  <div class="main-block mar30">  
    <div class="one-todo">
      <div @click='renameList' class="lists-item__renameListrename">
        <img src="@/images/pen-1.svg" alt="">
      </div>
      <h1 class="main-block__title">{{NCListNowLS.name }}</h1>
      <router-link to="/nclists">
        <div class="close__one-todo" title="закрыть этот список дел">Х</div>
      </router-link>
      <EnterForm @addNCListNowLS="addToDo"/>
      <div class="tasks-block">
        <div v-if="this.NCListNowLS.toDoList  && this.NCListNowLS.toDoList.length > 0" class="tasks-counter">Кол-во задач: <span class="span-fw-700"> {{ this.NCListNowLS.toDoList? this.NCListNowLS.toDoList.length : "0" }} </span></div>
        <button v-if="this.NCListNowLS.toDoList  && this.NCListNowLS.toDoList.length > 0" @click="clearList" class="tasks-clear">Очистить</button>
      </div>
      <DoList  @deleteDoItem = "deleteDoItem"  @onItemCompleted="onItemCompleted" class="do-item"  v-bind:toDoList="toDoList" :NCListNowLS="NCListNowLS"/>
      <button @click="deleteOneToDo" class="delete-one-todo" title="Удалить этот список дел">Удалить</button>   
    </div>

<!--     <modal-rename-list   @renameList = "renameList" @newNameList ="newNameList" @closeModalRenameList="closeModalRenameList" v-model:show="renameModalVisible" v-model="newListName"></modal-rename-list> -->
  </div>
</template>

<script>

  import EnterForm from '@/components/EnterForm.vue'
  import DoList from '@/components/DoList.vue'

/*   import ModalRenameList from '@/components/ModalRenameList.vue' */


  export default{
    name: 'App',
    components: {
      EnterForm,
      DoList,

/*       ModalRenameList, */

    },

    props:{
      NCListNow:{
        type: Object,
      },
    },

    data:() =>({
      toDoList:[],
      NCListNowLS:[],
      locStorNCList:[],

      toDo:{},
      dataNewTodoItem:"",
      notCalendarList:[],

      taskNow:"",
      tasksCounter: {},

      newListName:"",
      renameModalVisible: false,
      listId:""

    }),

    methods:{

      /* */
      addToDo(NCListNowLS){
        this.NCListNowLS = NCListNowLS
      },

      deleteDoItem(toDo){
        this.taskNow = toDo
        this.notCalendarList.map((item)=>{
          if(item.id == this.NCListNowLS.id){
            item.toDoList = item.toDoList.filter(p=> p.id !== toDo.id)   
            localStorage.setItem('notCalendarList', JSON.stringify(this.notCalendarList))
            this.NCListNowLS = item
            localStorage.setItem('NCListNowLS', JSON.stringify(this.NCListNowLS))

            console.log(localStorage.NCListNowLS)
          }
        }) 
      },

      /*Исходный код */
/*       deleteDoItem(toDo,){
        console.log("!!!")
        this.taskNow = toDo
        this.notCalendarList.map((item)=>{
          if(item.id == this.NCListNowLS.id){
            item.toDoList = item.toDoList.filter(p=> p.id !== toDo.id)   
            localStorage.setItem('notCalendarList', JSON.stringify(this.notCalendarList))
            this.NCListNowLS = item
          }
        }) 
      }, */

      onItemCompleted(toDo){
        if(toDo.completed === true){
          toDo.completed = false
        } else {
          toDo.completed= true
        }
      },

      clearList(){
        this.toDoList.splice(0, this.toDoList.length)
        localStorage.setItem('toDoList', JSON.stringify(this.toDoList))
      },

    },

    computed:{

    },


    async mounted(){
      const data =  localStorage.getItem('toDoList')
      if (data){
        this.toDoList = JSON.parse(data)
      }

      const notCalendarList =  localStorage.getItem('notCalendarList')
      if (notCalendarList){
        this.notCalendarList = JSON.parse(notCalendarList)
      }

      const NCListNowLS =  localStorage.getItem('NCListNowLS')
      if (data){
        this.NCListNowLS = JSON.parse(NCListNowLS)
      }
    },
  }
</script>

<style>
 .lists-item__renameListrename{
    width:30px;
    height: 30px;
  }

  .lists-item__renameListrename img{
    max-width: 100%;
    max-height: 100%;
  }
</style>