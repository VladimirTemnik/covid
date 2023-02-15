<template>
  <div class="px-20 py-10">
    <Form
    v-slot="{meta}"
    @submit="onSubmit"
    class="flex flex-col">
      <div class="self-center h-10 font-serif text-xl font-medium">
        <label class="">Sign in</label>
      </div>
      <Field
      v-model="creds.email"
      name="email"
      type="email"
      placeholder="Enter your email"
      :rules="{required:true, email:true}"
      class="shadow-md border h-10 mb-2.5 bg-indigo-100 font-serif rounded text-md"/>
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
      class="shadow-md border h-10 mb-3.5 bg-indigo-100 font-serif rounded text-md"/>
      <ErrorMessage
      name="password"
      class=" text-red-800">
      </ErrorMessage>
      <button
      :disabled="!meta.valid"
      type="submit" class="bg-indigo-500 h-10 text-white rounded">
      Submit
      </button>
      {{meta.valid}}
    </Form>
  </div>
</template>

<script setup lang="ts">
import {Field, Form, ErrorMessage} from "vee-validate";
import {defineRule} from "vee-validate";
import {required, email, min, max} from "@vee-validate/rules"
import {reactive} from "vue";

defineRule('min', min);
defineRule('max', max);
defineRule('email', email);
defineRule('required', required);

const creds = reactive({email: "", password: ""})
const onSubmit = () =>{

}

</script>

<style scoped>

</style>