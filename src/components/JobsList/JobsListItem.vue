<template>
    <article class="jobs__item flex-no-conflict">
        <div class="jobs__item-image">
            <img src="../../assets/images/apple-logo.png" alt="">
        </div>
        <div class="jobs__item-content">
            <div class="jobs__item-headline flex-no-conflict">
                <h3 class="jobs__item-title" v-text="data.title"></h3>

                <div class="jobs__item-salary">
                    <strong v-text="data.salary + ' / '"></strong>
                    <small v-text="data.salaryPeriod"></small>
                </div>

                <button class="jobs__item-add-to-favorites" :class="{'jobs__item-add-to-favorites--active': data.saved}">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V6c0-.55.45-1 1-1h8c.55 0 1 .45 1 1v12z"/></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z"/></svg>
                </button>
            </div>
            <div class="jobs__item-company flex-no-conflict">
                <a href="#" class="jobs__item-info flex-no-conflict">
                    <span class="jobs__item-info-icon jobs__item-info-icon--left">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 7V5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2h-8zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm9 12h-7v-2h2v-2h-2v-2h2v-2h-2V9h7c.55 0 1 .45 1 1v8c0 .55-.45 1-1 1zm-1-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/></svg>
                    </span>
                    <span class="jobs__item-info-label">{{ data.company.name }}</span>
                    <span class="jobs__item-info-icon jobs__item-info-icon--right" v-if="data.company.verified">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><rect fill="none" height="24" width="24"/><rect fill="none" height="24" width="24"/></g><g><path d="M23,12l-2.44-2.79l0.34-3.69l-3.61-0.82L15.4,1.5L12,2.96L8.6,1.5L6.71,4.69L3.1,5.5L3.44,9.2L1,12l2.44,2.79l-0.34,3.7 l3.61,0.82L8.6,22.5l3.4-1.47l3.4,1.46l1.89-3.19l3.61-0.82l-0.34-3.69L23,12z M9.38,16.01L7,13.61c-0.39-0.39-0.39-1.02,0-1.41 l0.07-0.07c0.39-0.39,1.03-0.39,1.42,0l1.61,1.62l5.15-5.16c0.39-0.39,1.03-0.39,1.42,0l0.07,0.07c0.39,0.39,0.39,1.02,0,1.41 l-5.92,5.94C10.41,16.4,9.78,16.4,9.38,16.01z"/></g></svg>
                    </span>
                </a>
                <a href="#" class="jobs__item-info flex-no-conflict">
                    <span class="jobs__item-info-icon jobs__item-info-icon--left">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><rect fill="none" height="24" width="24"/></g><g><path d="M12,2c-4.2,0-8,3.22-8,8.2c0,3.18,2.45,6.92,7.34,11.23c0.38,0.33,0.95,0.33,1.33,0C17.55,17.12,20,13.38,20,10.2 C20,5.22,16.2,2,12,2z M12,12c-1.1,0-2-0.9-2-2c0-1.1,0.9-2,2-2c1.1,0,2,0.9,2,2C14,11.1,13.1,12,12,12z"/></g></svg>
                    </span>
                    <span class="jobs__item-info-label">{{ data.location }}</span>
                </a>
                <a href="#" class="jobs__item-info jobs__item-info--type flex-no-conflict">
                    <span class="jobs__item-info-icon jobs__item-info-icon--left">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><g><path d="M14.16,10.4l-5-3.57c-0.7-0.5-1.63-0.5-2.32,0l-5,3.57C1.31,10.78,1,11.38,1,12.03V20c0,0.55,0.45,1,1,1h4v-6h4v6h4 c0.55,0,1-0.45,1-1v-7.97C15,11.38,14.69,10.78,14.16,10.4z"/><path d="M21.03,3h-9.06C10.88,3,10,3.88,10,4.97l0.09,0.09c0.08,0.05,0.16,0.09,0.24,0.14l5,3.57c0.76,0.54,1.3,1.34,1.54,2.23H19 v2h-2v2h2v2h-2v3v1h4.03c1.09,0,1.97-0.88,1.97-1.97V4.97C23,3.88,22.12,3,21.03,3z M19,9h-2V7h2V9z"/></g></g></svg>
                    </span>
                    <span class="jobs__item-info-label">{{ data.workType }}</span>
                </a>
            </div>
            <div class="jobs__item-benefits flex-no-conflict" v-if="data.benefits">
                <a href="#" v-for="benefit in data.benefits" v-text="benefit"></a>
            </div>
            <div class="jobs__item-bottom flex-no-conflict">
                <div class="jobs__item-technologies flex-no-conflict" v-if="data.technologies">
                    <a href="#" v-for="technology in data.technologies" v-text="technology"></a>
                </div>

                <span class="jobs__item-match jobs__item-match--level-3">Match {{ data.match }}%</span>
                <span class="jobs__item-added-at">New</span>
            </div>
        </div>
    </article>
</template>

<script>
export default {
    props: ['data']
}
</script>
