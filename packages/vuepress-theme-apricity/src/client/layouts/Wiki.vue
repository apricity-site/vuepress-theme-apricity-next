<template>
  <div class="wiki-wrapper flex justify-center py-8">
    <div class="container min-h-full flex flex-col md:flex-row">
      <nav>
        <div class="logo">
          <span>W</span>
          <span>Personal Wiki</span>
        </div>
      </nav>
      <section class="flex-grow">project</section>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Wiki',
})
</script>
