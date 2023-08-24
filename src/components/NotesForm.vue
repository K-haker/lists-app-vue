<template>
  <div class="notes-form__wrapper">
    <form action="" class="notes-form">
      <div>Заголовок</div>
      <input v-model="noteTitle" type="text" >
      <div>Описание</div>
      <textarea v-model="noteDescription" name="" id=""></textarea>
      <button class="note-add" @click.prevent="createNewNote">Добавить</button>
    </form>
  </div>
</template>

<script>

export default {
  name: "NotesForm",

  data(){
    return{
      noteTitle:"",
      noteDescription:"",
      newNote:{},
    }
  },

  props:{
    notesList:{
      type: Array
    }
  },

  methods:{
    createNewNote(){
      let idNcListItem = Date.now()
      let newNote = {
        id:idNcListItem,
        title: this.noteTitle,
        description: this.noteDescription
      }

      this.newNote = newNote
      this.$emit("addNewNote", this.newNote)

      this.noteTitle = ""
      this.noteDescription = ""
    }
  },

}
</script>

<style scoped>
  form{
    width:100%;
  }

  form input{
    width:100%;
    margin-bottom: 20px;
  }

  form textarea{
    width:100%;
    margin-bottom: 20px;
    min-height: 100px;
    resize: vertical;
    max-height: 250px;
  }

  .note-add{
    background-color: rgb(0, 113, 252);
    color: white;
    padding: 5px 10px;
    border: none;
    border-radius:5px;
  }
</style>