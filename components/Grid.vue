<template>
    <main class="grid-group">
        <div class="grid-item" v-for="item in items" :key="item.idCategory">
            <a :href="'information/' + item.name.toLowerCase()">
                <img :src="item.image" :alt="'Photo of ' + item.name">
            </a>
            <a :href="'information/' + item.name.toLowerCase()">
                <h2>{{ item.name }}</h2>
            </a>
        </div>
    </main>
</template>

<script>
export default {
    name: 'GridComponent',
    data() {
        return {
            items: []
        }
    },
    methods: {
        async callCategories() {
            const BASE_URL = 'https://api.extinctbirds.org/category';
            await fetch(BASE_URL)
            .then(response => response.json())
            .then(data => {
                this.items = data;
            })
        }
    },
    mounted() {
        this.callCategories()
    }
}
</script>

<style>

.grid-group .grid-item {
    margin-bottom: 2rem;
}

@media (min-width: 768px) {
    .grid-group {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 1rem;
    }
}

@media (min-width: 992px) {
    .grid-group {
        grid-template-columns: repeat(3, 1fr);
    }
}

@media (min-width: 1200px) {
    .grid-group {
        grid-template-columns: repeat(4, 1fr);
    }
}

@media (min-width: 1400px) {
    .grid-group {
        grid-template-columns: repeat(5, 1fr);
    }
}

.grid-group .grid-item a img {
    width: 100%;
    height: 24rem;
    border-radius: 1rem;
    object-fit: fill;
}

.grid-group .grid-item a h2 {
    text-align: center;
}

</style>