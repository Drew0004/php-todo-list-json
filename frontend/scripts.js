const { createApp } = Vue;

createApp({
    data() {
        return {
            message: 'Todo List',
            tasks : []
        };
    },
    methods:{
        manageDoneTask(index){
            if (this.tasks[index].status === true){
                this.tasks[index].status = false
            }else{
                this.tasks[index].status = true
            }
        }
    },
    mounted() {
        axios
            .get('http://localhost:8888/esercizi%20Boolean%20Backend/Esercizio%2044/php-todo-list-json/backend/tasks.php')
            .then((res) => {
                console.log(res.data)
                this.tasks = res.data
            });
    }
}).mount('#app');