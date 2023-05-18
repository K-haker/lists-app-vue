<template>
  <div :class="{ checked: toDo.completed === true }" class="list-item">
    <div class="list-item__left">
      <input @click="$emit('itemCompleted', toDo)" type="checkbox">
      <div  class="list-item__todo">{{ toDo.dataBody }}</div>
    </div>
    <button  @click="$emit('deleteDoItem', toDo)" class="list-item__delete">X</button>
  </div>
</template>

<script>
export default {
    props:{
      toDo:{
        type: Object,
        required:true,
      },

    },
}
</script>

<style scoped>

  .list-item__todo{
    display: inline-block;
    margin-right: 15px;
  }
  .list-item__delete{
    display: inline-block;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
  }

  .checked .list-item__todo{
    text-decoration: line-through;
  }

  .list-item{
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
    position: relative
  }

  .list-item__todo{
    width: calc(100% - 30px)
  }

  .list-item button{
    background-color:#ffffff;
    border: none;
  }

  .list-item__left{
    width: 100%;
    position: relative;
    padding-left: 20px;
    padding-right: 30px;
  }
  .list-item__left input{
    position: absolute;
    top: 3px;
    left: 0px;
  }

</style>