<template>
    <client-only>
        <div class="container mx-auto">
            <slot></slot>
        </div>
      <template v-slot:fallback>
        <!-- this will be rendered on server side -->
        <p>Loading comments...</p>
      </template>
    </client-only>
</template>