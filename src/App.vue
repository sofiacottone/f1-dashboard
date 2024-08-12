<script>
import Navbar from './components/Navbar.vue';

export default {
  components: {
		Navbar,
	},
  data(){
    return {}
  },
  methods: {

  },
  mounted(){}
}
</script>

<template>
  <div class="flex">
    <Navbar></Navbar>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>