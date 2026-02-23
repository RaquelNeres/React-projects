<script setup>

</script>

<template>
    <div class="h-125 w-full">
        <h1 class="text-white text-3xl ml-10 mt-10 mb-10">Forms</h1>

        <div class="ml-10 mr-10 p-5
        grid grid-cols-2 gap-4 bg-[#1f2937]">
            <input 
                type="text" 
                value="title" 
                placeholder="Título" 
                class="border border-slate-500 bg-[#374151] text-white p-2 rounded-lg w-full"
            />
            <input 
                type="text" 
                value="url" 
                placeholder="URL" 
            class="border border-slate-500 bg-[#374151] text-white p-2 rounded-lg w-full"
            />
            <input 
                type="text" 
                value="tags" 
                placeholder="Tags" 
                class="border border-slate-500 bg-[#374151] text-white p-2 rounded-lg w-full"
            />

            <select class="bg-slate-700 text-white p-2 rounded border border-slate-500 w-full">
                <option value="todos">Todos os Links</option>
                <option value="prog">programação</option>
                <option value="novo">+ Criar nova pasta...</option>
            </select>
            <input type="text" value="description" placeholder="Descrição" 
            class="border border-slate-500 bg-[#374151] col-span-2
            text-white p-2 rounded-lg w-full pb-20"
            />

            <button class="bg-sky-700 w-30 p-2.5 rounded-lg text-left ml-3">Adicionar link</button>

        </div>

    </div>
</template>

