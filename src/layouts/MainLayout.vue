<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="custom-header">
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer"/>
        <q-toolbar-title>
            <img src="~assets/newprint-logo-header.svg" alt="newprint logo" height="50">
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header>
          Web Product
        </q-item-label>
        <q-item v-for="route in filteredRoutes" :key="route.path">
            <router-link :to="route.path" class="q-item">
                <q-item-section>{{ route.meta.label }}</q-item-section>
            </router-link>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref, computed } from 'vue'
import routes from 'src/router/routes'

const filteredRoutes = computed(() => {
    const mainLayoutRoutes = routes.find(r => r.path === '/')|| { children: [] };
    return mainLayoutRoutes?.children.filter(route => route.meta && route.meta.label) || [];
});

defineOptions({
  name: 'MainLayout'
})

const leftDrawerOpen = ref(false)

function toggleLeftDrawer () {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>

<style scoped>
.custom-header {
  background-color: #0075bf;
  height: 75px;
}
</style>
