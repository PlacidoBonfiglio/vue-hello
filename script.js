const { createApp } = Vue

createApp({
    data() {
        return {
            message: 'Hello Vue!',
            image: 'https://d585tldpucybw.cloudfront.net/sfimages/default-source/default-album/870x220_telerik-blogsce2fdf065dfe46a2b2054ccc57d2d18d.png?sfvrsn=222ff053_1',
        }
    }
}).mount('#app')