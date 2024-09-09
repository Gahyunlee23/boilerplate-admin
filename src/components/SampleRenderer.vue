<template>
  <div>
    <h1>{{ product.name }}</h1>
    <div v-html="product.description"></div>
    <ul>
      <li v-for="(attributeCategory, key) in product.parts[0].attributeCategories" :key="key">
        <strong>{{ attributeCategory.name }}:</strong> {{ attributeCategory.attributes[0].name }}
      </li>
    </ul>
  </div>
</template>

<script setup>
defineProps({
  product: Object,
});
</script>
