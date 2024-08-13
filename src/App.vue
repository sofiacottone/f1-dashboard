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
    <main class="overflow-y-auto p-4 pb-20 md:pb-4 w-full">
    	<router-view></router-view>
    </main>
  </div>
</template>