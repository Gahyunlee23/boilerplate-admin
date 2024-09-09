<template>
  <div class="q-pa-md">
    <q-layout view="hHh Lpr lff" container style="height: 300vh" class="shadow-2 rounded-borders">
          <q-header elevated class="custom-header">
            <q-toolbar>
              <q-btn flat round icon="menu" aria-label="Menu" @click="drawer =! drawer" style="color: black"/>
              <q-toolbar-title class="pt-10">
                  <img src="~assets/newprint-logo-header.svg" alt="newprint logo" class="logo-con">
              </q-toolbar-title>
            </q-toolbar>
          </q-header>

      <q-drawer v-model="drawer" show-if-above :mini="!drawer || miniState" @click.capture="drawerClick"
                :width="200" :breakpoint="500" bordered :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-3'">
        <q-scroll-area class="fit" :horizontal-thumb-style="{ opacity: 0 }">
          <q-list padding>
            <q-item v-for="route in filteredRoutes" :key="route.path" clickable>
              <q-item-section avatar style="min-width: 10px">
                <q-icon :name="route.meta.icon" />
              </q-item-section>
              <router-link :to="route.path" class="q-item">
                <q-item-section style="padding-top: 9px;">{{ route.meta.label }}</q-item-section>
              </router-link>
            </q-item>
          </q-list>
        </q-scroll-area>

        <div class="q-mini-drawer-hide absolute" style="top: 15px; right: -17px">
          <q-btn dense round unelevated color="accent" icon="chevron_left" @click="miniState = true"/>
        </div>
      </q-drawer>

      <q-page-container>
        <router-view />
      </q-page-container>
    </q-layout>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import routes from 'src/router/routes'

const miniState = ref(false);
const drawer = ref(false);

const drawerClick = (e) => {
  if(miniState.value) {
    miniState.value = false;
    e.stopPropagation();
  }
};

const filteredRoutes = computed(() => {
    const mainLayoutRoutes = routes.find(r => r.path === '/')|| { children: [] };
    return mainLayoutRoutes?.children.filter(route => route.meta && route.meta.label) || [];
});

defineOptions({
  name: 'MainLayout'
})

</script>

<style scoped>
.custom-header {
  background-color: white;
}
.logo-con {
  height: 50px;
  padding: 5px 0 0 10px;
}
.q-item {
  text-decoration: none;
  color: black;
  padding-top: 6px;
}
</style>
