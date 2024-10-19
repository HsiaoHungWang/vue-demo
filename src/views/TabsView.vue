<script setup>
    import FirstComponent from '@/components/FirstComponent.vue';
    import SecondComponent from '@/components/SecondComponent.vue';
    import ThirdComponent from '@/components/ThirdComponent.vue';
    import { ref } from 'vue';

    const items = ref([FirstComponent, SecondComponent, ThirdComponent])
    const tabs = ref([
        {"name":"First", "component":FirstComponent},
        {"name":"Second", "component":SecondComponent},
        {"name":"Third", "component":ThirdComponent}
    ])
    const activeIndex = ref(0)
    const activeTab = ref(FirstComponent)

    const setActive = index => {
        activeIndex.value = index
        activeTab.value = tabs.value[index].component
    }
</script>

<template>
    <div>
      <h2>Tabs Demo</h2>
      <!-- <component :is="items[2]"></component> -->
      <ul class="nav nav-tabs">
        <li class="nav-item" style="cursor: pointer;" v-for="(tab, index) in tabs" :key="tab.name">
            <a class="nav-link" @click="setActive(index)" :class="{active:activeIndex === index}">{{ tab.name  }}</a>
        </li>
        
      </ul>
      <Transition name="move">
        <KeepAlive>
            <component :is="activeTab"></component>
        </KeepAlive>
    </Transition>
  
    </div>
</template>

<style lang="css" scoped>
 .move-enter-active,
.move-leave-active{
    transition: all 3s;
}
.move-enter-from,
.move-leave-to{
  opacity:0;
  transform: translateX(100px); /* rotate(0.5turn) scale(0.2);*/
}

</style>