<template>
  <button
      :disabled="disabled || false"
      v-on:click="()=>emits('click' )"
      :type="type || 'button'"
      class="self-end border bg-indigo-500 px-5 py-1 font-sans text-lg text-slate-900 rounded-md">
    <slot name="text"></slot>
  </button>
</template>

<script setup lang="ts">

import {defineProps} from "vue"
import {defineEmits} from "vue"

const props = defineProps<{
  disabled?: boolean,
  type?: string
}>()

const emits = defineEmits<{
  (e: 'click' ) : void
}>()

</script>