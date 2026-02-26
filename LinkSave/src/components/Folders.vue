<script setup>
  import SvgIcon from '@jamescoyle/vue-icon'
  import { mdiDeleteForever } from '@mdi/js'
  import { useRoute } from 'vue-router'

  const path = mdiDeleteForever

  // -----------------------------------  FILHO
  const props = defineProps({
    id: Number,
    title: String
  })

  // definindo que vai emitir um evento chamado:
  const emit = defineEmits(['delete'])

  function handleDelete() {
    // (evento, elemento)
    emit('delete', props.id)
  }
</script>

<template>
  <div class="p-2">
    <div class="w-full cursor-pointer">
      <div 
        class="text-white p-3 bg-slate-600 
        rounded-xl flex justify-between items-center"
      > 
        <router-link :to="'/' + props.title" class="flex-1">
          <span>
            {{ title }}
          </span>
        </router-link>
  
        <button 
          class="hover:opacity-80 transition-opacity cursor-pointer"
          @click="handleDelete"
        >
          <svg-icon style="color: red" type="mdi" :path="path" :size="24"></svg-icon>
        </button>
      </div>
    </div>
  </div>

</template>