<template>
    <div class="container">
        <main class="grid-group">
            <div class="grid-item" v-for="item in items" :key="item.idCategory">
                <NuxtLink :to="$route.params.category + '/' + item.name.replaceAll(' ', '-').toLowerCase()">
                    <img :src="item.image" :alt="'Photo of ' + item.name">
                </NuxtLink>
                <NuxtLink :to="$route.params.category + '/' + item.name.replaceAll(' ', '-').toLowerCase()">
                    <h2>{{ item.name }}</h2>
                </NuxtLink>
            </div>
        </main>
    </div>
</template>

<script>
export default {
    name: 'CategoryComponent',
    data() {
        return {
            idBird: 0,
            items: []
        }
    },
    methods: {
        async callAnimals() {
            const BASE_URL = 'https://api.extinctbirds.org/bird?nameCategory=' + this.$route.params.category;
            await fetch(BASE_URL)
            .then(response => response.json())
            .then(data => {
                this.items = data;
                // this.idBird = data.idBird;
            })
        },
        addIdBirdToLocalStorage(idBird) {
            localStorage.removeItem('idBird')
            localStorage.setItem('idBird', idBird)
        }
    },
    mounted() {
        this.callAnimals()
    }
}
</script>

<style>

</style>