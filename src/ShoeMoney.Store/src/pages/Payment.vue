<script setup lang="ts">
import { stateList } from '@/lookups/states';
import { useRouter } from 'vue-router';

const router = useRouter();

</script>

<template>
  <div class="w-full sm:w-4/5 lg:w-2/3 mx-auto">
    <div class="flex justify-center mb-8">
      <ul class="steps">
        <li class="step step-primary">Checkout</li>
        <li class="step step-primary">Payment</li>
        <li class="step">Confirmation</li>
      </ul>
    </div>
    <div>
      <div class="text-lg font-bold mb-4">Payment Information</div>
      <div class="border rounded border-slate-500/50 p-2">
        <div class="bg-base-100 -mt-5 mb-2 w-48">Shipping/Billing Address</div>
        <label class="input-label">
          <div class="label">
            <span class="label-text">Shipping Contact</span>
          </div>
          <input type="text" class="grow" placeholder="John Smith" />
        </label>
        <label class="input-label">
          <div class="label">
            <span class="label-text">Shipping Phone</span>
          </div>
          <input type="text" class="grow" placeholder="+1 404 555 1212" />
        </label>
        <label class="input-label">
          <div class="label">
            <span class="label-text">Street Address</span>
          </div>
          <input type="text" class="grow" placeholder="123 Main Street" />
        </label>
        <label class="input-label">
          <input type="text" class="grow" placeholder="Suite 400" />
        </label>
        <div class="flex gap-1">
          <label class="input-label">
            <div class="label">
              <span class="label-text">City</span>
            </div>
            <input type="text" class="grow" placeholder="Atlanta" />
          </label>
          <label class="input-label">
            <div class="label">
              <span class="label-text">State/Province</span>
            </div>
            <select class="select grow">
              <option value="" selected disabled>Pick One...</option>
              <option v-for="state in stateList" :value="state.abbreviation">{{
                state.name }}</option>
            </select>
          </label>
          <label class="input-label">
            <div class="label">
              <span class="label-text">Postal Code</span>
            </div>
            <input type="text" class="grow" placeholder="10101" />
          </label>
        </div>
      </div>
      <div class="border rounded border-slate-500/50 p-2 mt-8">
        <div class="bg-base-100 -mt-5 mb-2 w-48">Credit Card</div>
        <label class="input-label">
          <div class="label">
            <span class="label-text">Card Number</span>
          </div>
          <input type="text" class="grow" placeholder="4000 0000 0000 0000" />
        </label>
        <label class="input-label">
          <div class="label">
            <span class="label-text">Expiration</span>
          </div>
          <input type="text" class="grow" placeholder="04/24" />
        </label>
        <label class="input-label">
          <div class="label">
            <span class="label-text">CVV</span>
          </div>
          <input type="text" class="grow" placeholder="456" />
        </label>
        <label class="input-label">
          <div class="label">
            <span class="label-text">Cardholder's Name</span>
          </div>
          <input type="text" class="grow" placeholder="Bill Smith" />
        </label>
        <label class="input-label">
          <div class="label">
            <span class="label-text">Cardholder's Postal Code</span>
          </div>
          <input type="text" class="grow" placeholder="10101" />
        </label>
      </div>
      <div class="flex justify-end gap-2 mt-8">
        <button @click="router.back()"
          class="whitespace-nowrap btn btn-ghost"><chevron-left-icon />
          Back</button>
        <router-link to="/confirmation"
          class="whitespace-nowrap btn btn-success"><chevron-right-icon />
          Next</router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
input,
select {
  @apply input input-bordered w-full placeholder:italic focus:outline-none mb-1;
}

label {
  @apply form-control w-full;
}
</style>