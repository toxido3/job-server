<template>
    <div v-if="job">
        <h1>{{job.title}}</h1>
        <p>Job id is {{job.id}}</p>
        <p>{{job.details}}</p>
    </div>
    <div v-else>
        <p>Loading job details...</p>
    </div>
</template>

<script>
    export default {
        name: 'JobDetails',
        data(){
            return{
                //id: this.$route.params.id
                job: null
            }
        },
        props: ['id'],
        mounted(){
            fetch('http://localhost:3000/jobs/' + this.id)
                .then(response => response.json())
                .then(data => this.job = data)
                .catch(error => console.log(error.message))
        }
    }
</script>

<style scoped>

</style>