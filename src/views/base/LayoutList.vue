<template>
  <div class="layout-list" @keyup.ctrl.1="add">
    <div class="utility">
      <slot name="utility" />
    </div>
    <div class="table">
      <slot name="table" />
    </div>
    <div class="back-to-top">
      <base-backtop target=".layout-list"></base-backtop>
    </div>
    <span
      class="shortkey-default"
      @shortkey="handleShortkey"
      v-shortkey="{
        Add: ['ctrl', '1'],
      }"
    ></span>
  </div>
</template>

<script>
export default {
  name: "LayoutList",
  methods: {
    handleShortkey(e) {
      this.$emit("shortkey", e);
    },
  },
};
</script>

<style lang="scss" scoped>
.utility {
  padding: 1rem;
  padding-bottom: 0;
}

.table {
  padding: 1rem;
}
</style>
