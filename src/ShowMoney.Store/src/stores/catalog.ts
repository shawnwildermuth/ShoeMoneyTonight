import { useHttp } from '@/composables/http';
import type { Product } from '@/models';
import { defineStore } from 'pinia'
import { reactive, ref } from 'vue';
import type ProductResult from '@/models/ProductResult';

const products = reactive(new Array<Product>());
const http = useHttp();
const currentPage = ref(1);
const totalPages = ref(0);

async function loadProducts(page: number = 1) {

  const result = await http.get<ProductResult>(`products?page=${page}`);
  if (result)  {
    products.splice(0, products.length, ...result.results);
    currentPage.value = result.currentPage;
    totalPages.value = result.totalPages;
  }  
}

export const useCatalogStore = defineStore('catalog', () => {
  return {
    currentPage,
    totalPages,
    loadProducts,
    products
  };
})