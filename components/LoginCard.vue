<template>
  <div class="px-10 py-5 min-h-screen flex flex-col justify-center">
    <Form
    v-slot="{meta}"
    @submit="onSubmit"
    class="flex flex-col">
      <div class="self-center h-10 text-2xl font-medium font-sans text-white">
        <label class="">Authorization</label>
      </div>
      <Field
      v-model="creds.email"
      name="email"
      type="email"
      placeholder="Enter your email"
      :rules="{required:true, email:true}"
      class="shadow-md border h-10 mb-2.5 bg-indigo-100 font-serif rounded text-md pl-4"/>
      <ErrorMessage
      name="email"
      class=" text-red-800">
      </ErrorMessage>
      <Field
      v-model="creds.password"
      name="password"
      type="password"
      :rules="{required:true, min: 8, max: 14}"
      placeholder="Enter your password"
      class="shadow-md border h-10 mb-3.5 bg-indigo-100 font-serif rounded text-md pl-4"/>
      <ErrorMessage
      name="password"
      class=" text-red-800">
      </ErrorMessage>
      <comp-base-btn
      type="submit"
      :disabled=!meta.valid>
        <template v-slot:text>Sign in</template>
      </comp-base-btn>

    </Form>
  </div>
</template>

<script setup lang="ts">
import {Field, Form, ErrorMessage} from "vee-validate";
import {defineRule} from "vee-validate";
import {required, email, min, max} from "@vee-validate/rules"
import {reactive} from "vue";
import CompBaseBtn from "@/components/BaseBtn.vue"

defineRule('min', min);
defineRule('max', max);
defineRule('email', email);
defineRule('required', required);

const creds = reactive({email: "", password: ""})
const onSubmit = () =>{
console.log(creds)
}

</script>

<style scoped>

</style>