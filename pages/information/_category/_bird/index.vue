<template>
    <div class="container">
        <h1>{{ nameBird }}</h1>
        <p>{{ introInfo }}</p>
        <div class="general-information">
            <h3>General information</h3>
            <p>Order: {{ family[1] }}</p>
            <p>Status: {{ status }}</p>
            <p>Birthplace: {{ birthplace }}</p>
            <audio duration></audio>
            <div class="audio">
                <label>
                    <button class="btn btn-primary btn-sm" @click.prevent="playSound(sound)">
                        <span>▶️</span>
                    </button>
                    Play Sound
                </label>
            </div>
        </div>
        <!-- Habitat -->
        <h2>Habitat</h2>
        <p>{{ habitatInfo }}</p>
        <!-- Diet -->
        <h2>Diet</h2>
        <p>{{ dietInfo }}</p>
        <!-- Extinction -->
        <h2>Extinction</h2>
        <p>{{ extictionInfo }}</p>
    </div>
</template>

<script>
export default {
    name: 'BirdPage',
    data() {
        return {
            played: '',
            nameBird: '',
            introInfo: '',
            status: '',
            birthplace: '',
            habitatInfo: '',
            dietInfo: '',
            extictionInfo: '',
            sound: '',
            family: this.$route.path.slice("1").split('/'),
        }
    },
    methods: {
        playSound (sound) {
            if(sound) {
                var audio = new Audio(sound);
                audio.play();
            }
        },
        async callBird() {
            let BASE_URL = 'https://api.extinctbirds.org/bird?nameBird=' + this.$route.params.bird.replaceAll('-', ' ');
            await fetch(BASE_URL)
            .then(response => response.json())
            .then(data => {
                this.nameBird = data.name
                this.introInfo = data.introInfo
                this.status = data.status
                this.sound = data.sound
                this.habitatInfo = data.habitatInfo
                this.dietInfo = data.dietInfo
                this.extictionInfo = data.extinctionInfo
                this.birthplace = data.birthplace
                console.log(this.$route);
            })
        }
    },
    mounted() {
        this.callBird()
    }
}
</script>

<style>

.audio label {
    font-size: 2rem;
}

.audio label button {
    border: none;
}

.audio label button span {
    font-size: 2rem;
    cursor: pointer;
}

.general-information {
    padding: 1rem;
    border: 1px solid #000000;
    border-radius: 1rem;
}

</style>