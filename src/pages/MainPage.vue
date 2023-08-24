<template>
  <div class="main-page">
<!--     <router-link to="/clists">
      <div class="main-page__calendar">
        <img src="" alt="">
        <div class="main-page__block-name">Датированный список (с календарем)</div>
      </div>
    </router-link> -->

    <router-link to="/nclists">
      <div class="main-page__not-calendar">
        <img src="" alt="">
        <div class="main-page__block-name"> Недатированные списки </div>
      </div>
    </router-link>

    <router-link to="/notes">
      <div class="main-page__notes">
        <img src="" alt="">
        <div class="main-page__block-name"> Заметки </div>
      </div>
    </router-link>
  </div>
</template>

<script>

export default {

    components:{

    },

    props:{

    },
}
</script>

<style>
  .main-page{
    display: flex;
    justify-content:  center;
    align-items: center;
    width:100%;
    height: 100%;
  }

  .main-page__not-calendar,
  .main-page__calendar,
  .main-page__notes{
    width:250px;
    height: 270px;
    background-color: rgba(255, 255, 255, 0.632);
    margin: 0 20px;
    cursor: pointer;
  }
</style>