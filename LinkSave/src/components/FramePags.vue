<script setup>
import { ref, computed } from 'vue'

const urlDigitada = ref('')
const carregado = ref(false)

// Dicionário de transformações para sites conhecidos
const transformarParaEmbed = (url) => {
  if (!url) return null;

  // YouTube
  if (url.includes('youtube.com') || url.includes('youtu.be')) {
    const id = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/)?.[1]
    return `https://www.youtube.com/embed/${id}`
  }

  // LinkedIn
  if (url.includes('linkedin.com')) {
    const id = decodeURIComponent(url).match(/activity-(\d{10,20})/)?.[1]
    return id ? `https://www.linkedin.com/embed/feed/update/urn:li:activity:${id}` : url
  }

  // Spotify
  if (url.includes('spotify.com')) {
    return url.replace('open.spotify.com/', 'open.spotify.com/embed/')
  }

  // Instagram
  if (url.includes('instagram.com/p/')) {
    const cleanUrl = url.split('?')[0] // Remove trackers
    return `${cleanUrl}embed`
  }

  // Caso padrão: Tenta carregar o link como ele é
  return url
}

const urlFinal = computed(() => transformarParaEmbed(urlDigitada.value))

const resetar = () => {
  carregado.value = false
  // Timeout pequeno para resetar o iframe no DOM
  setTimeout(() => carregado.value = true, 50)
}
</script>

<template>
  <div class="embed-tool">
    <div class="input-group">
      <input 
        v-model="urlDigitada" 
        placeholder="Cole o link do YouTube, LinkedIn, Spotify, etc..."
        @keyup.enter="resetar"
      />
      <button @click="resetar">Carregar</button>
    </div>

    <div v-if="carregado" class="preview-area">
      <iframe
        :src="urlFinal"
        width="100%"
        height="450"
        frameborder="0"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        allowfullscreen
        class="main-iframe"
      ></iframe>

      <div class="info-footer">
        <p>Se a janela acima aparecer cinza ou branca, o site original recusou a conexão por segurança.</p>
        <a :href="urlDigitada" target="_blank">Abrir link original em nova aba</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.embed-tool { font-family: sans-serif; max-width: 600px; margin: auto; }
.input-group { display: flex; gap: 10px; margin-bottom: 20px; }
input { flex: 1; padding: 10px; border: 1px solid #ccc; border-radius: 4px; }
button { padding: 10px 20px; background: #42b883; color: white; border: none; border-radius: 4px; cursor: pointer; }
.preview-area { border: 1px solid #ddd; border-radius: 8px; overflow: hidden; }
.info-footer { padding: 15px; background: #f9f9f9; font-size: 13px; text-align: center; border-top: 1px solid #eee; }
.info-footer a { color: #3498db; text-decoration: none; font-weight: bold; }
</style>