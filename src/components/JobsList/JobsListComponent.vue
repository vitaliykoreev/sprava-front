<template>
    <div class="jobs__list">
        <JobsListItem v-for="item in list" :data="item" />
    </div>
</template>
<script setup>
import JobsListItem from "@/components/JobsList/JobsListItem.vue";
</script>
<script>
export default {
    data() {
        return {
            list: [
                {
                    title: 'Front-end Web Developer',
                    salary: '$90-120K',
                    salaryPeriod: 'year',
                    company: {
                        name: 'Apple',
                        verified: true
                    },
                    location: 'Kyiv',
                    workType: 'Fully remote',
                    benefits: ['Medical Insurance', 'Free lunches', 'Free education', 'Office near metro'],
                    technologies: ['PHP', 'JavaScript', 'HTML'],
                    match: 95,
                    addedAt: new Date(),
                    saved: false
                },
                {
                    title: 'Back-end Web Developer',
                    salary: '$80-110K',
                    salaryPeriod: 'year',
                    company: {
                        name: 'Apple',
                        verified: true
                    },
                    location: 'Kyiv',
                    workType: 'Fully remote',
                    benefits: ['Medical Insurance', 'Free lunches', 'Free education'],
                    technologies: ['PHP', 'JavaScript', 'HTML'],
                    match: 90,
                    addedAt: new Date(2022, 11, 12),
                    saved: true
                },
                {
                    title: 'UI/UX Designer',
                    salary: '$3000-5600',
                    salaryPeriod: 'month',
                    company: {
                        name: 'Apple',
                        verified: true
                    },
                    location: 'Lviv',
                    workType: 'Fully remote',
                    benefits: ['Medical Insurance', 'Paid lunches', 'Free education', 'Office near metro'],
                    technologies: ['Figma', 'Adobe XD', 'Photoshop'],
                    match: 30,
                    addedAt: new Date(2022, 11, 10),
                    saved: false
                },
                {
                    title: 'C++ Developer',
                    salary: '$3000-5600',
                    salaryPeriod: 'month',
                    company: {
                        name: 'KNUTD',
                        verified: true
                    },
                    location: 'Kyiv',
                    workType: 'Fully remote',
                    benefits: ['Medical Insurance', 'Paid lunches', 'Free education', 'Office near metro'],
                    technologies: ['PHP', 'JavaScript', 'HTML'],
                    match: 30,
                    addedAt: new Date(2022, 11, 10),
                    saved: false
                },
                {
                    title: 'C++ Developer',
                    salary: '$3000-5600',
                    salaryPeriod: 'month',
                    company: {
                        name: 'KNUTD',
                        verified: true
                    },
                    location: 'Kyiv',
                    workType: 'Fully remote',
                    benefits: ['Medical Insurance', 'Paid lunches', 'Free education', 'Office near metro'],
                    technologies: ['PHP', 'JavaScript', 'HTML'],
                    match: 30,
                    addedAt: new Date(2022, 11, 10),
                    saved: false
                },
                {
                    title: 'C++ Developer',
                    salary: '$3000-5600',
                    salaryPeriod: 'month',
                    company: {
                        name: 'KNUTD',
                        verified: true
                    },
                    location: 'Kyiv',
                    workType: 'Fully remote',
                    benefits: ['Medical Insurance', 'Paid lunches', 'Free education', 'Office near metro'],
                    technologies: ['PHP', 'JavaScript', 'HTML'],
                    match: 30,
                    addedAt: new Date(2022, 11, 10),
                    saved: false
                },
                {
                    title: 'C++ Developer',
                    salary: '$3000-5600',
                    salaryPeriod: 'month',
                    company: {
                        name: 'KNUTD',
                        verified: true
                    },
                    location: 'Kyiv',
                    workType: 'Fully remote',
                    benefits: ['Medical Insurance', 'Paid lunches', 'Free education', 'Office near metro'],
                    technologies: ['PHP', 'JavaScript', 'HTML'],
                    match: 30,
                    addedAt: new Date(2022, 11, 10),
                    saved: false
                },
            ]
        }
    }
}
</script>
