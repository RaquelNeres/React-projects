<script setup>
import FramePags from './components/FramePags.vue'
import Forms from './components/Forms.vue'
import NavBar from './components/NavBar.vue'
import Folders from './components/Folders.vue'
// -----------------------------------  AVO

// -----------------------------------  PAI - Forms
const dados = [
  { id: 1, title: "Link 1", url: "https://example.com/link1", tags: ["tag1", "tag2"], pasta: "Pasta 1", description: "Descrição do Link 1" },
  { id: 2, title: "Link 2", url: "https://example.com/link2", tags: ["tag3"], pasta: "Pasta 2", description: "Descrição do Link 2" }
]

function handleAddLink(title, url, tags, pasta, description) {
  const newDados = {
    id: dados.length + 1,
    title: title,
    url: url,
    tags: tags,
    pasta: pasta,
    description: description
  };
  dados.push(newDados);
}
</script>

<template>  
  <div class="bg-[#242424] flex min-h-screen">
    <!-- <FramePags/> -->
    <NavBar/>
    <Forms 
      :dados="dados"
      @add-link="handleAddLink"
    />

  </div>
</template>


<style></style>