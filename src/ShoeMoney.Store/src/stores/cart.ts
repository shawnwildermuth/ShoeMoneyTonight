import type { OrderItem } from '@/models';
import { defineStore } from 'pinia'
import { reactive, ref } from 'vue';

const items = ref(new Array<OrderItem>());

function add(item: OrderItem) {
  items.value.push(item);
}

export const useCart = defineStore('cart', () => {
  return {
    items,
    add
  };
})