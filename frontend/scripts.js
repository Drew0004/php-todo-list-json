const { createApp } = Vue;

createApp({
    data() {
        return {
            message: 'Todo List',
            tasks : [],
            newTask: '',
        };
    },
    methods:{
        manageDoneTask(index){
            if (this.tasks[index].status === true){
                this.tasks[index].status = false
            }else{
                this.tasks[index].status = true
            }
        },
        addNewTask(){
            axios
            .post('http://localhost:8888/Esercizi%20Boolean%20Backend/Esercizio%2044/php-todo-list-json/backend/newtask.php',
            {
                task: this.newTask,
                status: false
            },
            {
                headers:{
                    'Content-Type' : 'multipart/form-data'
                }
            }
            )
            .then((res) => {
                if(res.data.code == 200){
                    console.log(res.data)
                    this.tasks.push({
                        task: this.newTask,
                        status: false,
                    })
                    this.newTask = '';
                }
            });
        },
        removeTask(index){
            axios.post('http://localhost:8888/Esercizi%20Boolean%20Backend/Esercizio%2044/php-todo-list-json/backend/deletetask.php',
            {
                index: index
            },
            {
                headers:{
                    'Content-Type' : 'multipart/form-data'
                }
            }
            ).then((res)=>{
                if(res.data.code == 200){
                    console.log(res);
                    this.tasks.splice(index, 1);
                }
            })
        },
    },
    mounted() {
        axios
            .get('http://localhost:8888/esercizi%20Boolean%20Backend/Esercizio%2044/php-todo-list-json/backend/tasks.php')
            .then((res) => {

                console.log('Array:',res.data)
                this.tasks = res.data

            });
    }
}).mount('#app');