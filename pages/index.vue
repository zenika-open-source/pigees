<template>
  <div class="min-h-dvh w-full flex items-center justify-center">
    <div class="text-center max-w-2xl w-full space-y-8">
      <h1 class="text-2xl color-primary-700">Welcome to Pigees</h1>
      <NuxtImg src="/img/logo.svg" />

      <button @click="signal" class="border-1 bg-primary-500">
        Signal me!
      </button>

      <Connection />
    </div>
  </div>
</template>

<script setup lang="ts">
const myId = Math.random();
import { socket } from "../components/socket";
useSeoMeta({
  title: "Welcome",
});

socket.on("message", (msg) => {
  console.log(msg);
});

const signal = async () => {
  socket.emit("message", `hello from ${myId}`);
};
</script>
