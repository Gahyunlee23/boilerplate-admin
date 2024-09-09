<script setup>

</script>

<template>
    <q-page padding>
        <q-table
            :rows="products"
            :columns="columns"
            row-key="id"
            :loading="loading"
            no-data-label="No Data"
        />
    </q-page>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      products: [],
      columns: [
          { name: 'id', required: true, label: 'ID', align: 'left', field: 'id' },
          { name: 'name', label: 'Name', align: 'left', field: 'name' },
          { name: 'code', label: 'Code', align: 'left', field: 'code' }
      ],
      loading: false
    };
  },
  methods: {
      fetchProducts() {
          axios.get('http://localhost:8080/product')
              .then((response) => {
                  this.products = response.data;
              })
              .finally(() => {
                  this.loading = false;
              });
      }
  },
    mounted() {
        this.fetchProducts();
    }
}
</script>

<style scoped>

</style>