<template>
    <div v-show="show === true" class="delete-list__modal-wrapper">
      <div class="delete-list__modal">
        <button  @click="$emit('closeModalRenameList', ModalRenameList)" class="delete-list__modal-close">Х</button> 
        <div class="delete-list__modal-buttons">
          <div>Введите название списка дел</div>
          <div>
            <input v-model="newNameOfList" type="text">
            <button @click="$emit('newNameList', ModalRenameList, newNameOfList, ) ">Переименовать</button>
          </div>
        </div>
      </div>
      <div @click="$emit('closeModalRenameList', ModalRenameList)" class="delete-list__modal-background"></div>
    </div>
  </template>
    
  <script>

  export default {
    name: "ModalRenameList",
  
    props:{
      show:{
        type: Boolean,
        default: false
      },
    },
  
    data(){
      return{
        newNameOfList:""
      }
    },
  
    methods:{
      hideModal(){
        this.$emit("update: show", false)
      },
    },
  }
  </script>
  
  <style scoped>

    .delete-list__modal{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 1000;
      background-color: #ffffff;
      padding: 50px;
      padding-top: 60px;
      width: 300px;
      height: 250px;
    }
  
    .delete-list__modal-wrapper{
      position: absolute;
      width:100%;
      height: 100%;
      top:0;
      bottom:0;
      left: 0;
      right: 0;
    }
  
    .delete-list__modal-background{
      width:100%;
      height: 100%;
      top:0;
      bottom:0;
      left: 0;
      right: 0;
      background-color: #00000067;
      z-index: 800;
      position: absolute;
  }
  
  .delete-list__modal-wrapper h3{
    margin-bottom: 30px;
  }
  
  .delete-list__modal-buttons{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  
  .delete-list__modal-buttons button{
    margin: 0 20px;
  }
  
  .delete-list__modal-close{
    position: absolute;
    top:20px;
    right: 20px;
  }
    
  </style>