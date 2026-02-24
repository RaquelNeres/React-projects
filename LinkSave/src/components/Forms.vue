<script setup>

  // -----------------------------------  FILHO
  const props = defineProps({
    dados: Array,
  })

  const emit = defineEmits(['add-link'])

  function handleAddLink(title, url, tags, pasta, description) {
    emit('add-link', { title, url, tags, pasta, description })
  }
</script>

<template>
    <div class="h-125 w-full">
        <h1 class="text-white text-3xl ml-10 mt-10 mb-10">Forms</h1>

        <div class="ml-10 mr-10 p-5
        grid grid-cols-2 gap-4 bg-[#1f2937]">
            <input 
                type="text" 
                v-model="title"
                placeholder="Título" 
                class="border border-slate-500 bg-[#374151] text-white p-2 rounded-lg w-full"
            />
            <input 
                type="text" 
                v-model="url"
                placeholder="URL" 
            class="border border-slate-500 bg-[#374151] text-white p-2 rounded-lg w-full"
            />
            <input 
                type="text"     
                v-model="tags"
                placeholder="Tags" 
                class="border border-slate-500 bg-[#374151] text-white p-2 rounded-lg w-full"
            />

            <select
                v-model="pasta"
                value=""    
                class="bg-slate-700 text-white p-2 rounded border border-slate-500 w-full">
                <option>Todos os Links</option>
                <option v-for="dado in dados" :value="dado.pasta">
                    <span>
                        {{ dado.pasta }}
                    </span>
                </option>
                <option @click="" value="novo">+ Criar pasta...</option>
            </select>
            <input 
                type="text" 
                v-model="description"
                placeholder="Descrição" 
                class="border border-slate-500 bg-[#374151] col-span-2
            text-white p-2 rounded-lg w-full pb-20"
            />

            <button @click="handleAddLink(title, url, tags, pasta, description)" class="bg-sky-700 w-30 p-2.5 rounded-lg text-left ml-3">Adicionar link</button>

        </div>

    </div>
</template>

