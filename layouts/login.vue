<template>
  <div class="container min-h-screen">
    <client-only>
      <slot></slot>
      <template v-slot:fallback>
        <!-- this will be rendered on server side -->
        <p>Loading comments...</p>
      </template>
    </client-only>
  </div>
</template>