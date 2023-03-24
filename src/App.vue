<template>
  <TabList :tabList="tabList">
    <template v-slot:tabBody-0>Content 1</template>
    <template v-slot:tabBody-1>
      <HelloWorld msg="Welcome to Your Vue.js App" />
    </template>
    <template v-slot:tabBody-2>Content 3</template>
    <template v-slot:tabBody-3>Content 4</template>
  </TabList>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import TabList from './components/TabList.vue';
export default {
  name: 'App',
  components: {
    HelloWorld,
    TabList,
  },
  data() {
    return {
      tabList: ['Tab 1', 'Tab 2', 'Tab 3', 'Tab 4'],
    };
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

body {
  height: 100vh;
  background: rgb(255, 0, 0);
  background: linear-gradient(
    19deg,
    rgba(255, 0, 0, 1) 0%,
    rgba(255, 147, 0, 1) 100%
  );
}
</style>
