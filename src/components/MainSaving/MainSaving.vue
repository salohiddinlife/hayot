<template>
  <section class="main__saving">
   <div class="container">
     <div class="main__arrivals-title">
      <span class="main__arrivals-span"></span>
      <h2 class="main__arrivals-text">Big Saving Zone</h2>
    </div>
    <br />

<div class="main__saving-block">
<MainCard
      class="main__saving-card-item"
      :cards="cards"
      
    />
</div>
    
   </div>
  </section>
</template>

<script>
import MainCard from "@/components/MainCard/MainCard.vue";

export default {
  setup() {
    const cards = [
      {
        title: "Hawaiian <br> Shirts",
        descr: "Dress up in summer vibe",
        dsc: "UPTO 50% OFF",
        image: "/src/assets/img/hawai.png",
        url:"/src/assets/img/savingArrow.png"
      },
      {
        stock:"Limited Stock",
        title: "Printed <br> T-Shirt",
        descr: "Move with style & comfort",
        dsc: "UPTO 50% OFF",
        image: "/src/assets/img/print.png",
        url:"/src/assets/img/savingArrow.png"
      },
      {
        title: "Cargo <br> Joggers",
        descr: "New Designs Every Week",
        dsc: "UPTO 40% OFF",
        image: "/src/assets/img/cargo.png",
        url:"/src/assets/img/savingArrowB.svg"
      },
      {
        title: "Urban <br> Shirts",
        descr: "Live In Confort",
        dsc: "FLAT 60% OFF",
        image: "/src/assets/img/urban.png",
        url:"/src/assets/img/savingArrowB.svg"
      },
      {
        title: "Oversized<br>T-Shirts",
        descr: "Street Style Icon",
        dsc: "FLAT 60% OFF",
        image: "/src/assets/img/oversize.png",
        url:"/src/assets/img/savingArrowB.svg"
      },
    ];
    return {
      cards,
    };
  },
  components: { MainCard },
};
</script>

<style lang="scss" scoped>

</style>
