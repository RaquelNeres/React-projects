<script setup>
    import { reactive, ref } from 'vue'
    import Folders from './Folders.vue'

    // -----------------------------------  PAI
    const pastas = ref([
    { id: 1, title: "Conteúdo da pasta 1" },
    { id: 2, title: "Conteúdo da pasta 2" }
    ])

    const teste = reactive([
        { id: 0, title: "Conteúdo da pasta 1" },
        { id: 1, title: "Conteúdo da pasta 2" }
    ])
    console.log(teste)
    console.log(teste[0].title)
    console.log(teste[0].id)

    const novaPasta = ref('')

    const deletar = (id) => {
        pastas.value = pastas.value.filter(p => p.id !== id)
    }

    function onAddTaskSubmit() {
        if (novaPasta.value.trim() === '') return

        const newTask = {
            id: pastas.value.length + 1,
            title: novaPasta.value,
        };

        pastas.value.push(newTask);
        novaPasta.value = ''

        // (Estilo Imutável/React):
        // pastas.value = [...pastas.value, newTask];
    }

</script>

<template>
    <div class="h-dvh w-75 border-r border-white">
        <h1 class="text-xl font-bold text-amber-50 mt-8 ml-5 mb-5">Pastas</h1>

        <!-- passando os dados -->
        <Folders
            v-for="pasta in pastas"
            :key="pasta.id" 
            :id="pasta.id"
            :title="pasta.title"
            @delete="deletar"
        />


        <div class="p-4 flex flex-col gap-2">
            <input 
                v-model="novaPasta"
                type="text" 
                placeholder="Nova Pasta" 
                class="border border-slate-500 text-white p-2 rounded-lg w-full bg-transparent"
            />
            <button 
                class="bg-amber-500 text-white p-2 rounded-lg hover:bg-amber-600 transition-colors"
                @click="onAddTaskSubmit"
            >
                Criar Pasta
            </button>
        </div>
    </div>
</template>
