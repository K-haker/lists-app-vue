<template>
  <div class="lists-add">
    <form action="">
      <button @click.prevent="createCList"> + </button>
    </form>
  </div>
</template>
  
<script>

export default {

    data(){
      return{
      }
    },

    methods:{
      createCList(){
        let idNcListItem = Date.now()

        let listsItem = {
          id: idNcListItem,
          name: "Новый список",
          completed: false,
          toDoListDescription:"",
          toDoList:[

          ]
        }

        this.$emit('createNewCList', listsItem)
      },

    }

}
</script>

<style>

.lists-add button{
  font-size: 28px;
  background-color: rgba(0, 255, 0, 0.568);
  border: none;
  width: 50px;
  border-radius: 15px;
  cursor: pointer;
}

</style>