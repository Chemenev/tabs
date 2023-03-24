<template>
  <div class="tabs">
    <ul class="tabs__nav-list">
      <li
        v-for="(tabItem, index) in tabList"
        :key="index"
        class="tabs__nav-item"
        :class="{ active: index === activeTab }"
      >
        <label :for="`tabSwitcher-${index}`" class="tabs__title">{{
          tabItem
        }}</label>
        <input
          type="radio"
          name="tabSwitcher"
          class="tabs__switcher"
          :id="`tabSwitcher-${index}`"
          v-model="activeTab"
          :value="index"
        />
      </li>
    </ul>
    <template v-for="(tabItem, index) in tabList" :key="index">
      <div v-if="index === activeTab" class="tabs__content-list">
        <slot :name="`tabBody-${index}`"></slot>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    tabList: {
      type: Array,
    },
  },
  data() {
    return {
      activeTab: 0,
    };
  },
};
</script>

<style lang="scss">
.tabs {
  &__nav-list {
    display: flex;
    //flex-wrap: wrap;
    justify-content: space-between;
    gap: 15px;
    padding: 10px;
    background: rgba(255, 255, 255, 0.5);
    border-radius: $bRadius;
  }
  &__nav-item {
    width: 100%;
    border-radius: $bRadius;
    padding: 10px 20px;
    list-style: none;
    transform: color $transSpeed;
    &.active {
      background: #fff;
    }
  }
  &__title {
    display: block;
    cursor: pointer;
    font-size: 1.2rem;
    font-weight: 600;
  }
  &__switcher {
    display: none;
  }
  &__content-list {
    margin-top: 20px;
    background: #fff;
    border-radius: $bRadius;
    padding: 10px 20px;
    text-align: left;
  }
}
</style>
