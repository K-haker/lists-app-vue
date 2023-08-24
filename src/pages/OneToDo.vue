<template>
  <div class="main-block mar30">  
    <div class="one-todo-wrapper">
      <div class="one-todo">
        <div @click='renameList' class="lists-item__rename">
          <img src="@/images/pen-1.svg" alt="">
        </div>
        <h1 class="main-block__title">{{NCListNowLS.name }}</h1>
        <router-link to="/nclists">
          <div class="close__one-todo" title="закрыть этот список дел">Х</div>
        </router-link>
        <EnterForm @addNCListNowLS="addToDo"/>
        <div class="tasks-block">
          <div v-if="this.NCListNowLS.toDoList  && this.NCListNowLS.toDoList.length > 0" class="tasks-counter">Кол-во задач: <span class="span-fw-700"> {{ this.NCListNowLS.toDoList? this.NCListNowLS.toDoList.length : "0" }} </span></div>
          <button v-if="this.NCListNowLS.toDoList  && this.NCListNowLS.toDoList.length > 0" @click="clearToDoList" class="tasks-clear">Очистить</button>
        </div>
        <DoList @chooseTask="chooseTask"  @deleteDoItem = "deleteDoItem"  @onItemCompleted="onItemCompleted"  v-bind:toDoList="toDoList" :NCListNowLS="NCListNowLS"/>
        <router-link to="/nclists">
          <button @click="deleteOneToDo" class="delete-one-todo" title="Удалить этот список дел">Удалить</button> 
        </router-link>  
      </div>
      <div class="one-todo__sidebar">
        <div class="one-todo__list-note">
          <div v-if="toDoListNote" class="edit" @click="toDoListNoteEdit">Ред.</div>
          <div  v-else class="edit edit-ok" @click="toDoListNoteEditStop"> V </div>
          <textarea placeholder="Описание списка" name="" id="" v-bind:disabled="toDoListNote" v-model="this.NCListNowLS.toDoListDescription"></textarea>
        </div>

        <div class="one-todo__task-note">
          <div v-if="taskNote" class="edit" @click="taskNoteEdit">Ред.</div>
          <div  v-else class="edit edit-ok" @click="taskNoteEditStop"> V </div>
          <textarea placeholder="Описание задачи" name="" id="" v-bind:disabled="taskNote" v-model="this.taskNow.taskDescription"> Описание задачи</textarea>
        </div>  
      </div>
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

      toDoListNote: true,
      taskNote: true,

      taskDescription:"",
      taskNowId: "",
    }),

    methods:{


      chooseTask(toDo){
        this.taskNow = toDo

        this.toDoListNote = true;
        localStorage.setItem('NCListNowLS', JSON.stringify(this.NCListNowLS))

        let NCListNowLS = this.NCListNowLS
        let notCalendarList = this.notCalendarList
        let taskNow = this.taskNow
        this.notCalendarList.map(function(item){
          if(item.id == NCListNowLS.id){
            item.toDoList.map(function(it){
              if(it.id == taskNow.id){
                it.taskDescription = taskNow.taskDescription
                localStorage.setItem('notCalendarList', JSON.stringify(notCalendarList))
              }
            })
          }
        })
      },

      /*Работа с изменением описания списка */

      toDoListNoteEdit(){
        this.toDoListNote = false;
      },

      toDoListNoteEditStop(){
        this.toDoListNote = true;
        localStorage.setItem('NCListNowLS', JSON.stringify(this.NCListNowLS))

        let NCListNowLS = this.NCListNowLS
        let notCalendarList = this.notCalendarList
        this.notCalendarList.map(function(item){
          if(item.id == NCListNowLS.id){
            item.toDoListDescription = NCListNowLS.toDoListDescription
            localStorage.setItem('notCalendarList', JSON.stringify(notCalendarList))
          }
        })
      },

      /*Работа с изменением описания задачи */

      taskNoteEdit(){
        this.taskNote = false;
      },

      taskNoteEditStop(){
        this.taskNote = true;
        this.toDoListNote = true;
        localStorage.setItem('NCListNowLS', JSON.stringify(this.NCListNowLS))

        console.log(this.toDoListNote)
      },


      /*Очистить список дел */

      clearToDoList(){
        this.NCListNowLS.toDoList.splice(0, this.NCListNowLS.toDoList.length)
        localStorage.setItem('NCListNowLS', JSON.stringify(this.NCListNowLS))

        this.notCalendarList.map((item)=>{
          if(item.id == this.NCListNowLS.id){
            item.toDoList.splice(0, item.length)  
            localStorage.setItem('notCalendarList', JSON.stringify(this.notCalendarList))
          }
        })
      },

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


      deleteDoItem(toDo){
        this.NCListNowLS.toDoList = this.NCListNowLS.toDoList.filter(p=> p.id !== toDo.id)
        localStorage.setItem('NCListNowLS', JSON.stringify(this.NCListNowLS))

        this.notCalendarList.map((item)=>{
          if(item.id == this.NCListNowLS.id){
            item.toDoList = this.NCListNowLS.toDoList   
            localStorage.setItem('notCalendarList', JSON.stringify(this.notCalendarList))
          }
        })
      },

      onItemCompleted(toDo){
        if(toDo.completed === true){
          toDo.completed = false
        } else {
          toDo.completed = true
        }
      },

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

<style scoped>

.one-todo-wrapper{
  margin: 0 auto;
  display: flex;
  justify-content: center;
}
 .lists-item__rename{
    width:30px;
    height: 30px;
  }

  .lists-item__rename img{
    max-width: 100%;
    max-height: 100%;
    cursor: pointer;
  }

  .one-todo-wrapper{
    display: flex;
    margin-top: 60px;
  }
  .one-todo{
    margin-top: 0;
    margin-right: 5px;
    max-height: calc(100% - 500px)

  }

  .one-todo__list-note{
    margin-bottom: 5px;
    padding: 10px;
    background-color:#ffffff;
    border-radius: 20px;
    width: 200px;
    height: 200px;
    font-size: 14px;
    position: relative;
    padding-bottom: 20px;
  }

  .one-todo__task-note{
    padding: 10px;
    background-color:#ffffff;
    border-radius: 20px;
    width: 200px;
    height: 200px;
    font-size: 14px;
    position: relative;
    padding-bottom: 20px;
  }

  .one-todo__list-note .edit,
  .one-todo__task-note .edit{
    cursor: pointer;
    position: absolute;
    bottom: 3px;
    right: 5px;
  }

  .one-todo__list-note textarea,
  .one-todo__task-note textarea{
    width:100%;
    height: 100%;
    border: none;
    resize: none;
    background-color: #ffffff;
  }

  .one-todo__list-note .edit-ok{
    color: green;
    font-size: 16px;
    right: 15px;
  }

  .do-list{
    overflow-y: auto;
  }

  .one-todo{
    max-height: 500px
  }
</style>