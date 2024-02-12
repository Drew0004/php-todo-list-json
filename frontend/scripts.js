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
            this.tasks[index].status = !this.tasks[index].status
            console.log(this.tasks[index].status)

            axios
            .post('http://localhost:8888/Esercizi%20Boolean%20Backend/Esercizio%2044/php-todo-list-json/backend/changestatus.php',
            {
                stat: this.tasks[index].status,
                index : index
            },
            {
                headers:{
                    'Content-Type' : 'multipart/form-data'
                }
            })
            .then((res)=>{
                console.log(res);
            })
            .catch((error) => {
                console.log(error);
            });

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
                // if(res.data.code == 200){ 
                    console.log(res.data)
                    this.tasks.push({
                        task: this.newTask,
                        status: false,
                    })
                    this.newTask = '';
                // }
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