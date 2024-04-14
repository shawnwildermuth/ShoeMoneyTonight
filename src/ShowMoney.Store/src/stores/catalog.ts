import { useHttp } from '@/composables/http';
import type { Product } from '@/models';
import { defineStore } from 'pinia'
import { reactive } from 'vue';
import type ProductResult from '@/models/ProductResult';

const products = reactive(new Array<Product>());
const http = useHttp();

async function loadProducts() {

  const result = await http.get<ProductResult>("products");
  if (result)    products.splice(0, products.length, ...result.results);
}

export const useCatalogStore = defineStore('catalog', () => {
  return {
    loadProducts,
    products
  };
})