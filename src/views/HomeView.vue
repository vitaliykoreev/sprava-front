<script setup>
import '../assets/scss/pages/page-home.scss';
import MapComponent from "@/components/MapComponent.vue";
import PaginationComponent from "@/components/PaginationComponent.vue";
import JobsListComponent from "@/components/JobsList/JobsListComponent.vue";
</script>

<template>
    <section class="jobs-wrapper flex-no-conflict">
        <div class="jobs">
            <div class="jobs__filters flex-no-conflict">
                <div class="jobs__filters-count"><strong>547</strong> jobs</div>

                <button class="jobs__filters-button button button--no-fill">
                    <span class="button__icon">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.66663 10.8333C5.11663 10.8333 3.82496 11.9 3.44996 13.3333H1.66663V15H3.44996C3.82496 16.4333 5.11663 17.5 6.66663 17.5C8.21663 17.5 9.50829 16.4333 9.88329 15H18.3333V13.3333H9.88329C9.50829 11.9 8.21663 10.8333 6.66663 10.8333ZM6.66663 15.8333C5.74996 15.8333 4.99996 15.0833 4.99996 14.1667C4.99996 13.25 5.74996 12.5 6.66663 12.5C7.58329 12.5 8.33329 13.25 8.33329 14.1667C8.33329 15.0833 7.58329 15.8333 6.66663 15.8333ZM16.55 5C16.175 3.56667 14.8833 2.5 13.3333 2.5C11.7833 2.5 10.4916 3.56667 10.1166 5H1.66663V6.66667H10.1166C10.4916 8.1 11.7833 9.16667 13.3333 9.16667C14.8833 9.16667 16.175 8.1 16.55 6.66667H18.3333V5H16.55ZM13.3333 7.5C12.4166 7.5 11.6666 6.75 11.6666 5.83333C11.6666 4.91667 12.4166 4.16667 13.3333 4.16667C14.25 4.16667 15 4.91667 15 5.83333C15 6.75 14.25 7.5 13.3333 7.5Z" fill="#222222"/>
                        </svg>
                    </span>
                    <span class="button__label">Filters</span>
                </button>
            </div>
            <JobsListComponent />
            <div class="jobs__pagination flex-no-conflict">
                <PaginationComponent />
            </div>
        </div>
        <div class="map">
            <MapComponent />
        </div>
    </section>
</template>

<script>

</script>
