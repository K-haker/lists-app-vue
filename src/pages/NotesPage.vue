<template>
  <div class="notes-page">
    <router-link to="/">
      <div class="close">X</div>
    </router-link>
    <div class="notes-left">
      <h1>Заметки</h1>
      <NotesForm @addNewNote="addNewNote" />
    </div>

    <div class="notes-right-wrapper">
      <div class="notes-right">
        <NotesItem v-bind:notesList="notesList" @deleteNote="deleteNote" @addOneNoteInLocStor = "addOneNoteInLocStor"/>
      </div>
    </div>
  </div>
</template>

<script>

import NotesItem from "@/components/NotesItem.vue"
import NotesForm from "@/components/NotesForm.vue"

export default {

    data(){
      return{
        notesList:[],
        noteItemNow:{},
        oneNoteInLocStor:{}
      }
    },

    components:{
      NotesItem,
      NotesForm
    },

    methods:{
      addOneNoteInLocStor(notesItem){
        this.oneNoteInLocStor = notesItem
        localStorage.setItem('oneNoteInLocStor', JSON.stringify(this.oneNoteInLocStor))

        console.log(this.oneNoteInLocStor)

        console.log(localStorage.oneNoteInLocStor)
      },

      addNewNote(notesItem){
        this.notesList.push(notesItem)
        localStorage.setItem('notesList', JSON.stringify(this.notesList))
      },

      deleteNote(notesItem){
        this.notesList = this.notesList.filter(a => a.id != notesItem.id)
        localStorage.setItem('notesList', JSON.stringify(this.notesList)) 
      }
    },

    async mounted(){
      const notesList =  localStorage.getItem('notesList')
      if (notesList){
        this.notesList = JSON.parse(notesList)
      }
    }

    

}
</script>

<style scoped>

.notes-page .close{
  position: absolute;
  right: 20px;
  top: 20px;
  font-size: 20px;
}
  .notes-page{
    width: 100%;
    max-width: 1200px;
    background-color: #ffffff;
    border-radius:30px;
    height: calc(100vh - 50px);
    display: flex;
    padding: 50px;
    margin: 0 auto;
    position: relative;
  }

  .notes-left{
    width:33%;
    margin-right: 20px;
  }

  .notes-right-wrapper{
    width:66%;
  }

  .notes-right{
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    overflow-y: auto;
  }
</style>