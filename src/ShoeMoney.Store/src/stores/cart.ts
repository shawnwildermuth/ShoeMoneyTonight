import type { OrderItem } from '@/models';
import { defineStore } from 'pinia'
import { reactive, ref } from 'vue';

const items = ref(new Array<OrderItem>());

export const useCart = defineStore('cart', () => {
  return {
    items
  };
})