<template>
  <div>ОДИН МЕСЯЦ</div>
  <div class="one-month">
    <div class="calendar-item" v-for="(i,index) in 31" :key="index">{{ i }}</div>
  </div>

  <router-link to="/clists">
    <div>Х</div>
  </router-link>
</template>

<script> 
import axios from "axios"

export default{
  data(){
    return{

    }
  },

  methods:{
    getDaysOfMonth(month,year){
      return new Date(year, month+1, 0). getDate
    },

    getFirstWeekDay(month, year){
      return new Date(year, month, 1).getUTCDay()
    },



    async weatherFetch(){
      const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=Perm&lang=RU&appid=7590b58fc327c0300af42791a4390329`)
      let dataToday = response.data
      console.log(dataToday)
    }
  },

  beforeMount(){
    this.weatherFetch()
 }
}

</script>

<style scoped>
.one-month{
  display: flex;
  flex-wrap: wrap;
}
.calendar-item{
  width:calc(100%/7)
}
</style>