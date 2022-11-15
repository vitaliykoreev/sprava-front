<script setup>
import {RouterLink, RouterView} from 'vue-router';
import './assets/scss/main.scss';
</script>

<template>
    <main>
        <header id="page-header" class="flex-no-conflict">
            <div class="logo page-header__left-section">
                <RouterLink to="/">
                    <img src="./assets/images/logo.svg" alt="Logo">
                </RouterLink>
            </div>
            <div class="page-header__search">
                <form action="/" class="search">
                    <input type="text" class="field field--search" placeholder="Job title, category, etc.">
                    <select name="category" id="category" class="field">
                        <option value="none" disabled selected>Category</option>
                        <option value="category_1">UI/UX design</option>
                        <option value="category_2">Front-end</option>
                        <option value="category_3">Back-end</option>
                        <option value="category_4"></option>
                    </select>

                    <button type="submit" class="search__button">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.5006 11.0006H11.7106L11.4306 10.7306C12.6306 9.33063 13.2506 7.42063 12.9106 5.39063C12.4406 2.61063 10.1206 0.390626 7.32063 0.0506256C3.09063 -0.469374 -0.469374 3.09063 0.0506256 7.32063C0.390626 10.1206 2.61063 12.4406 5.39063 12.9106C7.42063 13.2506 9.33063 12.6306 10.7306 11.4306L11.0006 11.7106V12.5006L15.2506 16.7506C15.6606 17.1606 16.3306 17.1606 16.7406 16.7506C17.1506 16.3406 17.1506 15.6706 16.7406 15.2606L12.5006 11.0006ZM6.50063 11.0006C4.01063 11.0006 2.00063 8.99063 2.00063 6.50063C2.00063 4.01063 4.01063 2.00063 6.50063 2.00063C8.99063 2.00063 11.0006 4.01063 11.0006 6.50063C11.0006 8.99063 8.99063 11.0006 6.50063 11.0006Z" fill="white"/>
                        </svg>
                    </button>
                </form>
            </div>
            <div class="page-header__right-section flex-no-conflict">
                <nav class="flex-no-conflict">
                    <RouterLink to="/">Find a job</RouterLink>
                    <RouterLink to="/about">Post a job</RouterLink>
                </nav>

                <div class="notifications">
                    <button class="notifications__button">
                        <span class="notifications__button-budge">9</span>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_7_11)">
                                <path d="M12.0001 22C13.1001 22 14.0001 21.1 14.0001 20H10.0001C10.0001 21.1 10.8901 22 12.0001 22ZM18.0001 16V11C18.0001 7.93 16.3601 5.36 13.5001 4.68V4C13.5001 3.17 12.8301 2.5 12.0001 2.5C11.1701 2.5 10.5001 3.17 10.5001 4V4.68C7.63005 5.36 6.00005 7.92 6.00005 11V16L4.71005 17.29C4.08005 17.92 4.52005 19 5.41005 19H18.5801C19.4701 19 19.9201 17.92 19.2901 17.29L18.0001 16Z" fill="black" fill-opacity="0.1"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_7_11">
                                    <rect width="24" height="24" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </button>

                    <div class="notifications__inner"></div>
                </div>

                <div class="page-header__profile flex-no-conflict">
                    <div class="page-header__profile-image">
                        <img src="./assets/images/profile-picture.jpeg" width="40" height="40" alt="User picture">
                    </div>
                    <div class="page-header__profile-info">
                        <span class="page-header__profile-name">Vitalii Koreiev</span>
                        <span class="page-header__profile-status">Open to work</span>
                    </div>
                </div>
            </div>
        </header>

        <section id="page-content">
            <RouterView />
        </section>
    </main>
</template>
