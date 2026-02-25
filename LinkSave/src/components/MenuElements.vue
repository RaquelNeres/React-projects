<script setup>
    import FramePags from './FramePags.vue';
    import { ref } from 'vue'

    const props = defineProps({
        dados: Array,
    })

    const emit = defineEmits(['delete-link', 'edit-link'])

    function handleDeleteLink(id){
        emit('delete-link', (id))
    }

    function handleEditLink(){
        if (props.dados.some(dado => dado.title === form.novaPasta)) {
            alert('Já existe um link com esse nome!')
            return
        }
        emit('edit-link', props.dados)
    }

    function abrirModalEditar(dado){
        modal.showModal()
    }

    const expandidos = ref({})

    function toggleExpandido(id) {
        expandidos.value[id] = !expandidos.value[id]
    }

</script>

<template>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full pr-15">
        <div 
            class="border border-slate-500 p-4 rounded-lg flex flex-col gap-2" 
            v-for="dado in props.dados" 
            :key="dado.id"
            >
            <h1 class="text-white text-xl ">
                {{ dado.title }}
            </h1>
            <p class="text-white text-sm">
                <span v-if="expandidos[dado.id] || dado.description.length <= 100">
                    {{ dado.description }}
                </span>
                <span v-else>
                    {{ dado.description.slice(0, 100) }}...
                </span>
                <button 
                    v-if="dado.description.length > 100"
                    @click="toggleExpandido(dado.id)"
                    class="text-blue-400 ml-1 hover:underline"
                >
                    {{ expandidos[dado.id] ? 'Ler menos' : 'Ler mais' }}
                </button>
            </p>
            <p class="text-white text-sm">
                {{ dado.pasta }}
            </p>
            <div class="flex gap-2 flex-wrap">
                <span 
                    v-for="tag in dado.tags" 
                    :key="tag"
                    class="bg-slate-600 text-white text-sm px-2 py-1 rounded-full"
                >
                    {{ tag }}
                </span>
            </div>

            <a target="_blank" href="{{ dado.url }}"  class="text-white text-sm">Abrir link</a>
            
            <div class="place-self-end flex gap-6 text-white ">
                <button class="cursor-pointer" @click="abrirModalEditar(dado)">
                    Editar
                </button>
                <button class="mr-5 cursor-pointer" @click="handleDeleteLink(dado.id)">
                    Excluir
                </button>
            </div>
        </div>
    </div>

    <Teleport to="body">
        <dialog id="modal" class="fixed">
            <div class="modal-content">
                <p>Conteúdo do modal</p>
                <button @click="fecharModal">Fechar</button>
            </div>
        </dialog>
    </Teleport>
</template>
