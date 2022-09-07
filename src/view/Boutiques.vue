<template>
  <div class="boutique">
    <Navbar />
    <div class="heigth"></div>
    <!-- <hr> -->
    <div class="parent">
      <div class="div1">
        <Sidebar />
      </div>
      <div class="div2">
        <router-view />
      </div>
    </div>

  </div>
</template>

<script>
  import Navbar from '../components/Navbar.vue'
  import Sidebar from '../components/Sidebar.vue'
  export default {
    name: 'BoutiqueContent',
    components: {
      Navbar,
      Sidebar

    }

  }
</script>

<style lang="scss" scoped>
  .boutique {
    background: #fff;

    .heigth {
      padding-top: 90px;
    }

    .parent {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      grid-template-rows: repeat(5, 1fr);
      grid-column-gap: 0px;
      gap: 20px;
      grid-row-gap: 0px;
      height: 100%;
      width: 100%;
    }

    .div1 {
      grid-area: 1 / 1 / 6 / 2;
      border-radius: 15px;
      box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 3px;

    }

    .div2 {
      grid-area: 1 / 2 / 6 / 6;
      

    }

    @media (max-width: 900px) {
      .parent {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-template-rows: repeat(5, 1fr);
        grid-column-gap: 0px;
        grid-row-gap: 0px;
      }

      .div1 {
        grid-area: 1 / 1 / 2 / 6;
        height: 100%;
      }

      .div2 {
        grid-area: 2 / 1 / 6 / 6;
      }
    }

  }
</style>