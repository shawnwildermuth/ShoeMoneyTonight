<script setup lang="ts">
import { useCart } from '@/stores/cart';
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';


const router = useRouter();
const cart = useCart();

onMounted(() => {
  if (!cart.isOrderValid()) router.push("/checkout");
});

</script>

<template>
  <div>
    <div class="flex justify-center mb-8">
      <ul class="steps">
        <li class="step step-primary">Checkout</li>
        <li class="step step-primary">Customer Information</li>
        <li class="step step-primary">Payment</li>
        <li class="step step-primary">Confirmation</li>
      </ul>
    </div>
  </div>
</template>