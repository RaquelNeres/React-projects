<script setup>
    import FramePags from './FramePags.vue';

    const props = defineProps({
        dados: Array,
    })

</script>

<template>
    <div class="grid grid-cols-3 gap-4">
        <div class="border border-slate-500 p-2 rounded-lg" v-for="dado in props.dados" :key="dado.id">
            <h1 class="text-white text-xl ">
                {{ dado.title }}
            </h1>
            <p class="text-white text-sm">
                {{ dado.description }}
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
                <button class="">
                    Editar
                </button>
                <button class="mr-5">
                    Excluir
                </button>
            </div>
        </div>
    </div>
</template>
