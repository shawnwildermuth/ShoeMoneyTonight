import type { OrderItem } from '@/models';
import { defineStore } from 'pinia'
import { reactive, ref } from 'vue';

const items = ref<Array<OrderItem>>([
  {
    id: 0,
    productId: 271,
    quantity: 2,
    price: 255,
    discount: 0,
    size: "13",
    width: "E",
    product: null,
    orderId: 0
  }, {
    id: 0,
    productId: 386,
    quantity: 2,
    price: 255,
    discount: 0,
    size: "13",
    width: "E",
    product: null,
    orderId: 0
  }]);


function add(item: OrderItem) {
  items.value.push(item);
}

export const useCart = defineStore('cart', () => {
  return {
    items,
    add
  };
})