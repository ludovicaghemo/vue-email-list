const { createApp } = Vue;

createApp({
    data() {
        return {
            emailList: [],
            isLoading: false,
        };
    },
    methods: {
        generateEmailList: function () {
            this.emailList = [];
            this.isLoading = true;
            for (let i = 0; i < 10; i++) { //ciclo for perchè così invece di 1 risp me ne da 10, mi stampa 10 indirizzi email
                axios
                    //chiamata con get e scriviamo il nostro indirizzo api 
                    .get("https://flynn.boolean.careers/exercises/api/random/mail")
                    .then((resp) => {
                        this.emailList.push(resp.data.response);
                        if (this.emailList.length === 10) {
                            this.isLoading = false;
                        }
                    });
            }
        },
    },
}).mount('#app');

