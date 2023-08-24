<template>
  <div class="one-note-page">
    <router-link to="/notes">
      <span class="close">X</span>
    </router-link>
    <h1>{{ this.oneNoteInLocStor.title }}</h1>
    <div>{{ this.oneNoteInLocStor.description }}</div>
  </div>
</template>

<script>

export default {
  name: "OneNote",
  data(){
    return{
      oneNoteInLocStor:{}
    }
  },

  async mounted(){
    const oneNoteInLocStor =  localStorage.getItem('oneNoteInLocStor')
    if (oneNoteInLocStor){
      this.oneNoteInLocStor = JSON.parse(oneNoteInLocStor)
    }

    console.log(this.oneNoteInLocStor)
  }
}
</script>

<style>
  .one-note-page{
    background-color:rgb(255, 255, 255);
    padding: 40px 60px;
    width: 100%;
    max-width: 500px;
    margin: 60px auto;
    position: relative;
  }

  .one-note-page .close{
    cursor: pointer;
    position: absolute;
    top: 5px;
    right: 5px;
  }
</style>