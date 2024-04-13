<script setup lang="ts">
</script>

<template>
  <div data-theme="nord" class="bg-slate-200">
    <header class="bg-slate-700 p-2 text-white">
      <div class="flex justify-between items-center">
        <div>
          <h1 class="font-bold text-2xl"><router-link
              to="/"><logo-icon></logo-icon> Shoe Money Tonight</router-link></h1>
              <div class="text-sm italic">Put 'em on your feet!</div>
        </div>
        <div>
          <router-link to="/" class="btn btn-neutral">Home</router-link>
        </div>
      </div>
    </header>

    <main class="container mx-auto p-2 bg-base-100">
      <router-view></router-view>
    </main>
  </div>
</template>
