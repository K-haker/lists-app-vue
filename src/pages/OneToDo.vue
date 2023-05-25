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
<!--         <button v-if="this.NCListNowLS.toDoList  && this.NCListNowLS.toDoList.length > 0" @click="clearToDoList" class="tasks-clear">Очистить</button> -->
      </div>
      <DoList  @deleteDoItem = "deleteDoItem"  @onItemCompleted="onItemCompleted" class="do-item"  v-bind:toDoList="toDoList" :NCListNowLS="NCListNowLS"/>
      <router-link to="/nclists">
        <button @click="deleteOneToDo" class="delete-one-todo" title="Удалить этот список дел">Удалить</button> 
      </router-link>  
    </div>

    <modal-rename-list   @renameList = "renameList" @newNameList ="newNameList" @closeModalRenameList="closeModalRenameList" v-model:show="renameModalVisible" v-model="newListName"></modal-rename-list>
  </div>
</template>

<script>

  import EnterForm from '@/components/EnterForm.vue'
  import DoList from '@/components/DoList.vue'

  import ModalRenameList from '@/components/ModalRenameList.vue'


  export default{
    name: 'App',
    components: {
      EnterForm,
      DoList,
      ModalRenameList,
    },

    props:{
/*       NCListNow:{
        type: Object,
      }, */
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
    }),

    methods:{
      /*Очистить список дел */

      /* clearToDoList(){
        this.NCListNowLS.toDoList.splice(0, this.NCListNowLS.toDoList.length)
        localStorage.setItem('NCListNowLS', JSON.stringify(this.NCListNowLS))

        this.notCalendarList.map((item)=>{
          if(item.id == this.NCListNowLS.id){
            item.toDoList.splice(0, item.length)  
            localStorage.setItem('notCalendarList', JSON.stringify(this.notCalendarList))
          }
        })
      }, */

      /* Удалить список дел */
      deleteOneToDo(){
        this.notCalendarList = this.notCalendarList.filter(a => a.id != this.NCListNowLS.id)
        localStorage.setItem('notCalendarList', JSON.stringify(this.notCalendarList))  
      },

      /*Работа с модальным окном переименования списка дел */
      renameList(){
        this.renameModalVisible = true
      },

      newNameList( newListName, newNameOfList){
/*       let listId = this.NCListNowLS  */
      let newNameList = newNameOfList

      let NCListNowLS = this.NCListNowLS 

      let locStorNCList = this.notCalendarList
      this.notCalendarList.map(function(item){

        if(item.id == NCListNowLS.id){
          item.name = newNameList
          NCListNowLS.name = newNameList
          localStorage.setItem('notCalendarList', JSON.stringify(locStorNCList))
        }
      })

      this.renameModalVisible = false
    },

    closeModalRenameList(){
      this.renameModalVisible = false
    },

      /* */
      addToDo(NCListNowLS){
        this.NCListNowLS = NCListNowLS
      },

/*       deleteDoItem(toDo){
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
      }, */

      deleteDoItem(toDo){
        this.NCListNowLS.toDoList = this.NCListNowLS.toDoList.filter(p=> p.id !== toDo.id)
        localStorage.setItem('NCListNowLS', JSON.stringify(this.NCListNowLS))

        this.notCalendarList.map((item)=>{
          if(item.id == this.NCListNowLS.id){
            item.toDoList = this.NCListNowLS.toDoList   
            localStorage.setItem('notCalendarList', JSON.stringify(this.notCalendarList))
/*             this.NCListNowLS = item
            localStorage.setItem('NCListNowLS', JSON.stringify(this.NCListNowLS)) */
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