<template>
    <form class="enter-form" action="">
      <input v-model="dataNewTodoItem" type="text">
      <button @click.prevent="addToDo"> Добавить</button>
    </form>
</template>
  
<script>
export default {
    data(){
      return{
        dataNewTodoItem:"",
        toDo:{},

        NCListNowLS:[], 
        notCalendarList:[],
        locStorNCList:{},
      }
    },

    methods:{

/*       addToDo(){ 
        let idNcListItem = Date.now()
        this.toDo = {
          id: idNcListItem,
          completed: false,
          dataBody:this.dataNewTodoItem,
        }
        
        this.notCalendarList.map((item, )=>{
          if(item.id == this.NCListNowLS.id){   
            this.dataNewTodoItem = ""
            item.toDoList.push(this.toDo)
            localStorage.setItem('notCalendarList', JSON.stringify(this.notCalendarList))
            this.NCListNowLS = item
            localStorage.setItem('NCListNowLS', JSON.stringify(this.NCListNowLS))
            this.$emit('addNCListNowLS', this.NCListNowLS)
          }
        })
      }, */

      addToDo(){ 
        let idNcListItem = Date.now()
        this.toDo = {
          id: idNcListItem,
          completed: false,
          dataBody:this.dataNewTodoItem,
        }
        
        this.notCalendarList.map((item, )=>{
          if(item.id == this.NCListNowLS.id){   
            this.dataNewTodoItem = ""
            item.toDoList.push(this.toDo)
            localStorage.setItem('notCalendarList', JSON.stringify(this.notCalendarList))
            this.NCListNowLS = item
            localStorage.setItem('NCListNowLS', JSON.stringify(this.NCListNowLS))
            this.$emit('addNCListNowLS', this.NCListNowLS)
          }
        })
      },

      /* addToDo(){ 
        let idNcListItem = Date.now()
        this.toDo = {
          id: idNcListItem,
          completed: false,
          dataBody:this.dataNewTodoItem,
        }
        
        this.notCalendarList.map((item, )=>{
          if(item.id == this.NCListNowLS.id){   
            this.dataNewTodoItem = ""
            item.toDoList.push(this.toDo)
            localStorage.setItem('notCalendarList', JSON.stringify(this.notCalendarList))
            this.NCListNowLS = item
            localStorage.setItem('NCListNowLS', JSON.stringify(this.NCListNowLS))
            this.$emit('addNCListNowLS', this.NCListNowLS)
          }
        })
      }, */
    },

    async mounted(){
      const NCListNowLS =  localStorage.getItem('NCListNowLS')
      if (NCListNowLS){
        this.NCListNowLS = JSON.parse(NCListNowLS)
      }

      const data =  localStorage.getItem('notCalendarList')
      if (data){
        this.notCalendarList = JSON.parse(data)
      }

      const notCalendarList =  localStorage.getItem('notCalendarList')
      if (notCalendarList){
        this.notCalendarList = JSON.parse(notCalendarList)
      }
    },
}
</script>

<style>
  .enter-form{
    margin-bottom: 20px;
    width:100%;
    display: flex; 
    justify-content: space-between;
  }

  .enter-form input{
    width:100%;
    margin-right: 20px;
  }
</style>