<template>
  <div class="not-calendar-lists-wrapper">
    <div class="not-calendar-lists" >
      <h1>Недатированные списки</h1>
      <router-link to="/">
        <div class="close">X</div>
      </router-link>
      <div>
        <input class="lists-search" type="text" placeholder="Поиск по названию" v-model="searchNClist">
      </div>
      <add-new-c-list @createNewCList="createCList" ></add-new-c-list>
      <button v-show="notCalendarList.length > 0"  class="clear-nclist"    @click ="modalClearNCList">Очистить </button>
      <lists-item @changeDataNCTodo="changeDataNCTodo"  @renameList = "renameList"  @deleteCList = "deleteCList"  v-model:notCalendarList="notCalendarList" v-model:searchNCListsFunc="searchNCListsFunc" @onItemsNCListCompleted="onItemsNCListCompleted"></lists-item>
      <div v-if="notCalendarList.length == 0">Список дел сейчас пуст</div>
    </div>
    <modal-rename-list   @renameList = "renameList" @newNameList ="newNameList" @closeModalRenameList="closeModalRenameList" v-model:show="renameModalVisible" v-model="newListName"></modal-rename-list>
    <modal-delete-not-calend-list @deleteCListYes = "deleteCListYes" @closeModalDeleteNCList="closeModalDeleteNCList" v-model:show="dialogVisible"></modal-delete-not-calend-list>
    <modal-delete-all-lists v-model:show="dialogDeleteAll" @closeModalDeleteAllLists="closeModalDeleteAllLists" @clearNCList="clearNCList"></modal-delete-all-lists>
  </div>
</template>

<script>

import ListsItem from '@/components/ListsItem.vue'
import AddNewCList from '@/components/AddNewCList.vue'
import ModalDeleteNotCalendList from '@/components/ModalDeleteNotCalendList.vue'
import ModalRenameList from '@/components/ModalRenameList.vue'
import ModalDeleteAllLists from '@/components/ModalDeleteAllLists.vue'

export default{
  components:{
      ListsItem,
      AddNewCList,
      ModalDeleteNotCalendList,
      ModalRenameList,
      ModalDeleteAllLists
  },

  data(){
    return{
      notCalendarList:[

      ],
      dialogVisible: false,
      dialogDeleteAll: false,
      renameModalVisible: false,
      newListName:"",
      listId: 0,
      NCListNow: {},
      NCListNowLS:[],

      searchNClist: "",
      searchNClistResult: [],

      newNameOfList:""
    }
  },

  computed: {
    searchNCListsFunc(){
      return this.notCalendarList.filter((elem)=>{
        return elem.name.toLowerCase().includes(this.searchNClist.toLowerCase())
      })
    }
  },

  methods:{
    /*Открытие модального окна для переименования списка дел */
    renameList(listsItem,){
      this.renameModalVisible = true
      this.listId = listsItem.id 
    },

    /* Переименование списка дел и закрытие модального окна */
    newNameList( newListName, newNameOfList){
      let listId = this.listId
      let newNameList = newNameOfList

      let locStorNCList = this.notCalendarList
      this.notCalendarList.map(function(item){
        if(item.id == listId){
          item.name = newNameList
          localStorage.setItem('notCalendarList', JSON.stringify(locStorNCList))
        }
      })

      this.renameModalVisible = false
    },

    closeModalRenameList(){
      this.renameModalVisible = false
    },

    changeDataNCTodo( listsItem){
      this.NCListNowLS = listsItem
      localStorage.setItem('NCListNowLS', JSON.stringify(this.NCListNowLS))
    },

    /* работа с удалением всех недатированных списков*/
    modalClearNCList(){
      this.dialogDeleteAll = true
    },

    clearNCList(){
      this.notCalendarList.splice(0, this.notCalendarList.length)
      localStorage.setItem('notCalendarList', JSON.stringify(this.notCalendarList))
      this.dialogDeleteAll = false
    },

    closeModalDeleteAllLists(){
      this.dialogDeleteAll = false
    },

    createCList(listsItem){
      this.notCalendarList.push(listsItem)
      localStorage.setItem('notCalendarList', JSON.stringify(this.notCalendarList))
    },

    onItemsNCListCompleted(listsItem, ){
      if(listsItem.completed === true){
        listsItem.completed = false
        localStorage.setItem('notCalendarList', JSON.stringify(this.notCalendarList))
      } else {
        listsItem.completed = true
        localStorage.setItem('notCalendarList', JSON.stringify(this.notCalendarList))
      }
    },

    deleteCList(listsItem){
      this.dialogVisible = true
      this.listId = listsItem.id
    },

    deleteCListYes(){
      this.notCalendarList = this.notCalendarList.filter(a => a.id != this.listId)
      localStorage.setItem('notCalendarList', JSON.stringify(this.notCalendarList))  
      this.dialogVisible = false
    },

    closeModalDeleteNCList(){
      this.dialogVisible = false
    },

  },

  async mounted(){
    const data =  localStorage.getItem('notCalendarList')
    if (data){
      this.notCalendarList = JSON.parse(data)
    }

    const NCListNowLS =  localStorage.getItem('NCListNowLS')
    if (NCListNowLS){
      this.NCListNowLS = JSON.parse(NCListNowLS)
    }
  }

}

</script>

<style scoped>
  .not-calendar-lists{
    background-color: #ffffff;
    padding: 50px;
    border-radius: 30px;
    position: relative;
    width: 100%;
    max-width: 1200px;
    margin: 30px auto;
    height: calc(100vh - 60px)
  }



  .lists-search{
    margin-bottom: 30px;
  }

  .lists-add{
    margin-bottom: 30px;
  }

  .clear-nclist{
    margin-bottom: 20px;
  }

  .not-calendar-lists .close{
    position: absolute;
    top: 10px;
    right: 20px;
    font-size: 20px;
    cursor: pointer;
  }
</style>