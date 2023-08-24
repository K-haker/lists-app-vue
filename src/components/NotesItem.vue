<template>
  <div class="notes__item" v-for="(notesItem, index) in notesList" :key="index">
    <div class="notes__item-title">{{ notesItem.title }}</div>
    <div class="notes__item-description"> {{ notesItem.description }}  </div>
    <div class="notes__item-bottom">
      <router-link to="/oneNote">
        <button class="open" @click='$emit("addOneNoteInLocStor",notesItem)'>Открыть</button>
      </router-link>
      <button class="delete" @click="$emit('deleteNote', notesItem)">Удалить</button>
    </div>
  </div>

</template>

<script>

export default {
  name: "NotesItem",

  props:{
    "notesList":{
      type: Array
    }
  },

  data(){
    return{
      oneNoteInLocStor:{}
    }
  },

}
</script>

<style scoped>
  .notes__item{
    width: calc(33% - 20px);
    border: 1px solid rgb(198, 198, 198);
    padding: 20px;
    height: auto;
    height: 200px;
    border-radius:5px;
    margin: 10px;
    padding-bottom: 30px;
    position: relative;
  }

  .notes__item-title{
    margin-bottom: 20px;

    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .notes__item-description{
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }

  .notes__item-bottom{
    display: flex;
    justify-content: center;
    position:  absolute;
    bottom: 25px;
  }

  .notes__item-bottom button{
    margin: 0 10px;
  }

  .notes__item .open,
  .notes__item .delete{
    padding: 3px 6px;
    border-radius:5px;
    background-color: transparent;
  }

  .notes__item .open{
    color: blue;
    border: 1px solid blue;
    border-radius:5px;
  }

  .notes__item .delete{
    color: red;
    border: 1px solid red;
  }

  .notes__item-title{
    font-size: 20px;
    font-weight: bold;
  }


</style>