<template>
  <section class="container">
    <div>
      <logo/>
      <h2 class="subtitle">
        A <a href="https://github.com/phlogisticfugu/perfect-paca">perfect-paca</a>
        universal app base on <a href="https://nuxtjs.org/">Nuxt.js</a>
      </h2>
      <div class="columns">
        <div class="column"></div>
        <div class="column">
          <div class="content">
            <ul>
              <li>
                <nuxt-link to="/vue-highcharts" style="white-space:nowrap">vue-highcharts</nuxt-link>
              </li>
              <li>
                two
              </li>
            </ul>
          </div>
        </div>
        <div class="column"></div>
      </div>

    </div>

  </section>
</template>

<script>
import Logo from '~components/Logo.vue'

export default {
  head () {
    return {
      title: 'Welcome'
    }
  },
  components: {
    Logo
  }
}
</script>

<style>
nuxt-link {
  white-space: nowrap;
}

.container
{
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.title
{
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
.subtitle
{
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
.links
{
  padding-top: 15px;
}
</style>
