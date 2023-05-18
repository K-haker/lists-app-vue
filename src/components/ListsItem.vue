<template>
  <div class="lists__main">
    <div :class="{ completed: listsItem.completed === true }"  class="lists-item" v-for="(listsItem, index) in searchNCListsFunc" :key="index">
      <router-link @click="$emit('changeDataNCTodo', listsItem)" class="lists-item__img-wrap" to="/todo">
        <div @click.prevent="$emit('renameList', listsItem)" class="lists-item__rename">
          <img src="@/images/pen-1.svg" alt="">
        </div>
      </router-link>
      <div class="lists-item__name">{{listsItem.name}}</div>
      <button @click="$emit('deleteCList', listsItem)" class="lists-item__delete">Х</button>
      <input @click="$emit('onItemsNCListCompleted', listsItem)" class="lists-item__completed" type="checkbox" :checked="listsItem.completed === true">
    </div>
  </div>
</template>

<script >
  export default {
    name: "ListsItem",

    props:{
      notCalendarList:{
        type: Object,
      },

      searchNCLists:{
        type: Object,
      },

      searchNCListsFunc:{
        
      }
    },

    data(){
      return{
      }
    },

    methods:{

    }
  }
</script>

<style>
  .lists-item{
    width: 200px;
    height: 200px;
    border: 1px solid black;
    position: relative;
    cursor: pointer
  }

  .lists-item__completed{
    position: absolute;
    bottom: 5px;
    left: 5px;
  }

  .lists-item__delete{
    position: absolute;
    top: 5px;
    right: 5px;
    color: rgb(187, 0, 0);
    border: none;
    background-origin: transparent;
  }

  .lists-item__name{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50% ,-50%);
    font-size: 24px;
    z-index: 100;
  }

  .lists-item__img-wrap{
    width:100%;
    height: 100%;
    display: block;
    z-index: 200;
    position: relative;
  }

  .lists-item__delete{
    z-index: 300;
  }

  .lists-item__completed{
    z-index: 300;
  }

  .lists-item.completed{
    border: 2px solid green;
  }

  .lists-item__rename{
    position: absolute;
    top: 5px;
    left: 5px;
    width: 30px;
  }

  .lists-item__rename,
  .lists-item__rename img{
    width: 25px;
    height: 25px;
    z-index: 1000;
  }

</style>