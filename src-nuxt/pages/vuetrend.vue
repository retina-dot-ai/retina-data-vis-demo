<template>
  <article class="message is-info">
    <div class="message-header">
      <p><a href="https://github.com/QingWei-Li/vue-trend">https://github.com/QingWei-Li/vue-trend</a></p>
    </div>
    <div class="message-body">
      <trend
        :data="[0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0]"
        :gradient="['#6fa8dc', '#42b983', '#2c3e50']"
        auto-draw
        smooth>
      </trend>
    </div>
  </article>
</template>

<script>
export default {
  head () {
    return {
      title: 'vuetrend'
    }
  }
}
</script>
