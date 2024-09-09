<template>
  <q-page padding>
    <q-card class="q-ma-md" flat bordered>
      <q-card-section>
        <q-input
          v-model="skuCode"
          label="Enter Product Code"
          outlined
          clearable
        />
        <q-btn
          label="Render Product"
          color="primary"
          class="q-ma-md"
          @click="fetchProductData"
        />
      </q-card-section>
      <q-select
        v-model="selectedRenderer"
        :options="renderers"
        label="Select Renderer"
        outlined
        class="q-ma-md"
      />

      <q-card-section v-if="productData">
        <component :is="selectedRenderer || 'SampleRenderer'" :product="productData" />
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import SampleRenderer from "components/SampleRenderer.vue";

const selectedRenderer = ref('SampleRenderer');
const renderers = ref([
  { label: 'Sample Renderer', value: 'SampleRenderer' },
  // Add more renderers here
]);
const skuCode = ref('');
const productData = ref(null);

const isLoading = ref(false);
const errorMessage = ref('');

const fetchProductData = async () => {
  if (skuCode.value) {
    isLoading.value = true;
    try {
      const response = await axios.get(`http://localhost:65296/v1/matrix/product/${skuCode.value}`);
      productData.value = response.data.product;
      console.log(productData.value);
      errorMessage.value = '';
    } catch (error) {
      console.error('Error fetching product data:', error);
      errorMessage.value = 'Failed to fetch product data';
    } finally {
      isLoading.value = false;
    }
  }
};
</script>
<style scoped>

</style>
