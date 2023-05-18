<template>
  <div class="main-block mar30">  
<!--     <div class="help-block">
      <div>Настройки</div>
      <div>Помощь</div>
    </div> -->

    <div>
      <router-view ></router-view>
    </div>

  </div>
</template>


<script>

</script>

<style>
a{
   text-decoration: none;
   color: black;
}

h1,h2,h3,h4,h5,h6{
   margin: 0;
   padding: 0;
}

*,
*:before,
*:after{
   margin: 0;
   padding: 0;
   -webkit-box-sizing: border-box;
   box-sizing: border-box;
   font-family: sans-serif;
}

*:active,
*:focus{
   outline: none;
}


#app {
  font-family:  sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  justify-content: center;
  background-color: #f5f5dc;
  width:100%;
  height: 100vh;
}

button{
  cursor: pointer;
}

li{
  list-style: none;
}

.one-todo{
  margin-top: 60px;
  padding: 30px;
  background-color: #ffffff;
  height: auto;
  margin-bottom: 30px;
  border-radius: 20px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.229);
  max-width: 400px;
  width: 100%;
  min-height: 400px;
}

.do-item{
  margin-right: auto;
}

h1{
  margin-bottom: 30px;
  text-shadow: 3px 2px 2px rgba(0, 0, 0, 0.475)
}

.tasks-counter{
  margin-bottom: 15px;
}

.span-fw-700{
  font-weight: 700;
}

.tasks-block{
  display: flex;
  justify-content: space-between;
}

.tasks-clear{
  cursor: pointer;
  height: 25px;
  padding: 0;
}

.to-do__date{
  margin-bottom: 20px;
}

.help-block{
  position: absolute;
  top: 30px;
  right: 30px;
}

.help-block div{
  cursor: pointer;
}

.to-do__top{
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}

.one-day-close{
  position: absolute;
  top: 20px;
  right: 20px;
}

.main-block__title{
  margin-top: 20px;
  text-align: center;
}

.one-todo{
  position: relative;
  padding-bottom: 80px;
}

.delete-one-todo{
  margin: 0 auto;
  margin-top: 20px;
  display: block;
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translate(-50%, 0);
}

.close__one-todo{
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
}

.delete-one-day__modal{
  width:500px;
  height: 400px;
  border-radius:15px;
  position: absolute;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.229);
  background-color: #ffffff;
  top: 50%;
  left: 50%;
  transform: translate(-50% , -50%);
  padding-top: 90px;

  display: none;

}

.delete-one-day__modal h3{
  margin: 0 auto;
  text-align: center;
  max-width: 300px;
  margin-bottom: 90px;
  display: block;
}

.delete-one-day__modal-buttons{
  display: flex;
  justify-content: center;
}

.delete-one-day__modal-buttons button{
  background-color: transparent;
  border: none;
  margin: 0 10px;
  font-size: 25px;
}

.delete-one-day__modal-close{
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
}

.delete-one-day__modal.active{
  display: block;
}

</style>
