<script>
import { useF1Store } from '../stores/store';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default {
  data() {
    return {
      store: useF1Store(),

      sortBy: 'points',
    };
  },
  methods: {
    sortDrivers() {
            if (this.sortBy === 'points') {
                this.drivers.sort((a, b) => b.points - a.points);
            } else if (this.sortBy === 'team') {
                this.drivers.sort((a, b) => a.team_name.localeCompare(b.team_name));
            } else if (this.sortBy === 'number') {
                this.drivers.sort((a, b) => a.driver_number - b.driver_number);
        }
    },
    updateSortOrder(event) {
        this.sortBy = event.target.value;
        this.sortDrivers(); // Re-sort drivers
    }
  },

  computed: {
    drivers() {
      return this.store.drivers;
    },
    sessions() {
      return this.store.sessionKeys24;
    }
  },

  mounted() {
    this.store.getOpenF1Drivers();
    this.store.getErgastDriverStandings();

    this.sortDrivers();
  }
};
</script>

<template>
    <div class="w-full flex flex-col items-center gap-4 md:flex-row">
        <div class="flex flex-col bg-white rounded-xl">
          <div class="-m-1.5 overflow-x-auto">
            <div class="p-1.5 min-w-full inline-block align-middle">
              <div class="rounded-lg shadow overflow-hidden">
                
                <!-- sort drivers  -->
                <form class="flex w-full justify-end items-center">
                    <label class="text-sm me-1">Order by </label>
                    <select @change="updateSortOrder" v-model="sortBy"
                        class="uppercase block p-2 text-[10px] text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-red-500/70 focus:border-red-500/70 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500/70 dark:focus:border-red-500/70 cursor-pointer">
                        <option value="points">Points</option>
                        <option value="number">Number</option>
                        <option value="team">Team</option>
                    </select>
                </form>

                <!-- drivers table  -->
                <table class="min-w-full">
                  <thead>
                    <tr>
                      <th scope="col" colspan="4" class="px-6 py-3 text-center text-xs font-medium uppercase dark:text-white">Driver standings</th>
                    </tr>
                  </thead>
                  <tbody>
                    <template v-for="driver, index in drivers" >
                        <tr v-if="sessions.includes(driver.session_key)" @click="store.showCurrentDriver(index)" class="py-px text-gray-800 hover:bg-red-400/90 hover:text-white cursor-pointer">
                            
                            <!-- driver img  -->
                          <td class="px-6 whitespace-nowrap text-xs font-medium dark:text-neutral-200">
            
                            <div class="w-8">
                                <img :src="[driver.driver_number == 38 ? 'https://aurupteur.com/uploads/image/2024/pilotes/olibea01.png' : driver.headshot_url]" :alt="driver.name_acronym">
                            </div>
            
                          </td>

                          <!-- driver number  -->
                          <td class="whitespace-nowrap text-xs dark:text-neutral-200">
                            {{ driver.driver_number }}
                          </td>

                          <!-- driver name  -->
                          <td class="px-6 whitespace-nowrap text-xs dark:text-neutral-200">
                            {{ driver.broadcast_name }}
                          </td>
            
                          <!-- team logo  -->
                          <td class="px-6 whitespace-nowrap text-xs dark:text-neutral-200">
            
                            <div class="w-10 h-10">
                                <img class="object-contain" :src="driver.teamLogo" :alt="driver.team_name">
                            </div>
                            
                          </td>

                          <!-- driver points  -->
                          <td class="px-6 whitespace-nowrap text-end text-xs font-medium">
                            <span class="font-bold">{{ driver.points }}</span>
                          </td>
                          
                        </tr>
                    </template>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
    </div>

</template>