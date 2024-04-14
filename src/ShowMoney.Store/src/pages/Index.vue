<script setup lang="ts">
import { useCatalogStore } from '@/stores/catalog';
import { onMounted } from 'vue';
import { money } from "@/filters"

const catalogStore = useCatalogStore();

onMounted(async () => {
  await catalogStore.loadProducts();
})

</script>

<template>
  <div>
    <div class="flex justify-end">
      <select class="select input">
        <option value="0" selected>All</option>
        <option value="1">Shoe</option>
        <option value="2">Show</option>
      </select>
    </div>
    <div class="grid gap-2 grid-cols-4">
      <div v-for="p in catalogStore.products" class="card card-compact bg-base-100 shadow-xl">
        <figure><img 
            :src="p.imageUrl!"
            :alt="p.title" /></figure>
        <div class="card-body">
          <h2 class="card-title">{{p.title}}</h2>
          <div class="flex gap-1 text-white">
            <div class="badge badge-ghost">{{p.category?.name}}</div>
            <div class="badge badge-ghost">{{p.color}}</div>
            <div class="badge badge-ghost">{{p.gender}}</div>
            <div class="badge badge-ghost">{{p.usage}}</div>
          </div>
          <div class="card-actions justify-end">
            <button class="btn btn-success">{{ money(p.price) }}</button>
          </div>
        </div>
      </div>
    </div>
    <div></div>
  </div>
</template>