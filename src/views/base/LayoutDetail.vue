<template>
  <div class="layout-list">
    <div class="utility">
      <slot name="utility" />
    </div>
    <div class="table">
      <slot name="table" />
    </div>
    <div class="back-to-top">
      <base-backtop target=".layout-list"></base-backtop>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.utility {
  padding: 1rem;
  padding-bottom: 0;
}

.table {
  padding: 1rem;
}
</style>
