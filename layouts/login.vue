<template>
    <client-only>
        <div class="container mx-auto">
          <div class="columns-auto">
            <slot></slot>
          </div>
        </div>
      <template v-slot:fallback>
        <!-- this will be rendered on server side -->
        <p>Loading comments...</p>
      </template>
    </client-only>
</template>