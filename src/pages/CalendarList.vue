<template>
  <div class="calendar-list-wrapper">
    <h1>Датированный список дел</h1>
    <div class="calendar-list__year">{{ year }}</div>
    <div class="cal-list__main">
      <div>
        <router-link to="/onemonth">
          <div class="cal-list__main-item"> Январь </div>
        </router-link>
      </div>
    </div>
  </div>

  <router-link to="/">Переход на главную</router-link>
</template>

<script>
export default{
  data(){
    return{
      year: 2023,
    }
  }
}

</script>

<style>

  .calendar-list-wrapper{
    background-color: #ffffff;
    padding: 50px;
    border-radius: 30px;
    width:100%;
  
  }

  .calendar-list__year{
    font-size: 26px;
    text-align: center;
    margin-bottom: 20px;
  }

  .cal-list__main-item{
    width: 16%;
    border: 1px solid black;
    border-radius: 20px;
    height: 150px;
    cursor: pointer
  }

  .cal-list__main{
    width:100%;
  }

</style>