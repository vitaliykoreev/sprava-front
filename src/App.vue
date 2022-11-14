<script setup>
import {RouterLink, RouterView} from 'vue-router';
import './assets/scss/main.scss';
</script>

<template>
    <main>
        <header id="page-header">
            <div class="logo">
                <RouterLink to="/">
                    <img src="" alt="">
                </RouterLink>
            </div>
            <nav>
                <RouterLink to="/">Home</RouterLink>
                <RouterLink to="/about">About</RouterLink>
            </nav>
        </header>

        <section id="page-content">
            <RouterView/>
        </section>
    </main>
</template>
