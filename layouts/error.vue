<template>
    <div class="container">
        <!-- <h1 v-if="error.statusCode === 404">Page not found</h1>
        <h1 v-else-if="error.statusCode === 500">Internal Server error</h1>
        <h1 v-else>An error occurred</h1>
        <NuxtLink to="/">Home page</NuxtLink> -->
        <h2>Error</h2>
    </div>
</template>

<script>
export default {
    props: ['error'],
    // layout: 'error' // you can set a custom layout for the error page
}
</script>