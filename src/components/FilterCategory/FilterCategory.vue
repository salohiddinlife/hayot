<template>
 <FilterTitle type="categories" />
 <div class="filter__categories">
        <div class="filter__categories-content">
            <ul  class="filter__categories-content-list">
                <li v-for="item in categories" :key="item.id" class="filter__categories-content-link">
                    <p>{{item.title}}</p><img src="/src/assets/img/category__arrow.svg" alt="">
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
const categories = [
    {title:'Tops'},
    {title:'Printed T-shirts'},
    {title:'Plain T-shirts'},
    {title:'Kurti'},
    {title:'Boxers'},
    {title:'Full sleeve T-shirts'},
    {title:'Joggers'},
    {title:'Payjamas'},
    {title:'Jeans'},
]
</script>

<style lang="scss" scoped>

</style>