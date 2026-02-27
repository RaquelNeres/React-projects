<script setup>
import { useRoute } from 'vue-router'
import { ref, computed, onMounted, watch } from 'vue'
import MenuElements from './MenuElements.vue'
import NavBar from './NavBar.vue'

const route = useRoute()
const pastaTitle = computed(() => route.params.title)

const dados = ref([])
const pastas = ref([])

function carregarDados() {
  dados.value = JSON.parse(localStorage.getItem('dados') || '[]')
  pastas.value = JSON.parse(localStorage.getItem('pastas') || '[]')
}

onMounted(() => carregarDados())

// recarrega ao trocar de pasta
watch(
  () => route.params.pastaTitle,
  () => {
    carregarDados()
  }
)

const dadosFiltrados = computed(() =>
  dados.value.filter(dado => dado.pasta === pastaTitle.value)
)

// -----------------------------------  PAI - Menu
function handleDeleteLink(id){
  console.log('ID recebido:', id)
  console.log('Dados antes:', dados.value)
  
  dados.value = dados.value.filter(dado => dado.id !== id)
  
  console.log('Dados depois:', dados.value)
  localStorage.setItem('dados', JSON.stringify(dados.value))
}

function handleEditLink(dadoEditado) {
  const index = dados.value.findIndex(d => d.id === dadoEditado.id)
  if (index !== -1) {
    dados.value[index] = dadoEditado
    localStorage.setItem('dados', JSON.stringify(dados.value))
  }
}

// -----------------------------------  AVO - NavBar
function handleAddPasta(newPasta) {
  if (newPasta.title.trim() === '') return
  if (pastas.value.some(p => p.title === newPasta.title)) {
    alert('Já existe uma pasta com esse nome!')
    return
  }
  pastas.value.push(newPasta)
  localStorage.setItem('pastas', JSON.stringify(pastas.value))
}

function handleDeletePasta(id) {
  pastas.value = pastas.value.filter(pasta => pasta.id !== id)
  localStorage.setItem('pastas', JSON.stringify(pastas.value))
}
</script>

<template>
  <div class="bg-[#242424] flex">
    <!-- <h1 class="text-white">Pasta {{ pastaTitle }}</h1> -->
 
    <NavBar
      :pastas="pastas"
      @add-pasta="handleAddPasta"
      @delete-pasta="handleDeletePasta"
    />

    <div class="w-full mt-10 ml-10 min-w-225"> 
      <div class="mb-10">
        <h2 class="text-white text-2xl font-bold">Pasta: {{ pastaTitle }}</h2>
      </div>


      <template v-if="dadosFiltrados.length > 0">
        <MenuElements
          class=""
          :dados="dadosFiltrados"
          :pastas="pastas"
          @edit-link="handleEditLink"
          @delete-link="handleDeleteLink"
        />
      </template>
      
      <p v-else class="text-white">Nenhum dado encontrado para esta pasta.</p>
    </div>

  </div>
</template>