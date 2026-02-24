<script setup>
import FramePags from './components/FramePags.vue'
import Forms from './components/Forms.vue'
import NavBar from './components/NavBar.vue'
import { reactive } from 'vue'

const state = reactive({
  dados: [
    { id: 1, title: "Link 1", url: "https://example.com/link1", tags: ["tag1", "tag2"], pasta: "Pasta 1", description: "Descrição do Link 1" },
    { id: 2, title: "Link 2", url: "https://example.com/link2", tags: ["tag3"], pasta: "Pasta 2", description: "Descrição do Link 2" }
  ],
  pastas: [
    { id: 1, title: "Pasta 3" },
    { id: 2, title: "Pasta 4" }
  ]
})

// -----------------------------------  AVO - NavBar
function handleAddPasta(newPasta) {
  state.pastas.push(newPasta);
}

function handleDeletePasta(id) {
  state.pastas.findIndex(p => p.id === id);
}

// -----------------------------------  PAI - Forms
function handleAddLink(title, url, tags, pasta, description) {
  state.dados.push({
    id: state.dados.length + 1,
    title, url, tags, pasta, description
  })
}
</script>

<template>  
  <div class="bg-[#242424] flex min-h-screen">
    <!-- <FramePags/> -->
    <NavBar
      :pastas="state.pastas"
      @add-pasta="handleAddPasta"
      @delete-pasta="handleDeletePasta"
    />

    <!-- recebendo os valores do usuario -->
    <Forms 
      :dados="state.dados"
      @add-link="handleAddLink"
    />

  </div>
</template>


<style></style>