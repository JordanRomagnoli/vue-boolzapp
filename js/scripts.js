const { createApp } = Vue;

createApp({
    data() {
        return {
            contacts: [
                {
                    name: 'Michele',
                    avatar: 'img/avatar_1.jpg',
                    visible: false,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            dropCounter: false,
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            dropCounter: false,
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            dropCounter: false,
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: 'img/avatar_2.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            dropCounter: false,
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            dropCounter: false,
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            dropCounter: false,
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: 'img/avatar_3.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            dropCounter: false,
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            dropCounter: false,
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            dropCounter: false,
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: 'img/avatar_4.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            dropCounter: false,
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            dropCounter: false,
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: 'img/avatar_5.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            dropCounter: false,
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            dropCounter: false,
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: 'img/avatar_6.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            dropCounter: false,
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            dropCounter: false,
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            dropCounter: false,
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: 'img/avatar_7.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            dropCounter: false,
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            dropCounter: false,
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: 'img/avatar_8.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            dropCounter: false,
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            dropCounter: false,
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            dropCounter: false,
                            status: 'received'
                        }
                    ],
                }
            ],
            searchChat: '',
            contatore: 0,
            newMessageInput: '',
        }
    },
    methods: {

        messageStatus(i) {

            this.contatore = i;
        },

        addMyMessage(){

            if(this.newMessageInput.trim().length > 0){
                
                let newMessageObj = {};

                newMessageObj.date = 'orario da inserire';
                newMessageObj.message = this.newMessageInput;
                newMessageObj.status = 'sent';

                this.contacts[this.contatore].messages.push(newMessageObj);

                this.newMessageInput = '';

                let timeout;

                timeout = setTimeout(() => {
                    let newMessageUserObj = {};

                    newMessageUserObj.date = 'orario da inserire';
                    newMessageUserObj.message = 'ok';
                    newMessageUserObj.status = 'received';

                    this.contacts[this.contatore].messages.push(newMessageUserObj);
                }, 1000);

            };
            
        },

        updateVisibility() {
            const lowerCaseSearch = this.searchChat.toLowerCase();
          
            for (let i = 0; i < this.contacts.length; i++) {

              const lowerCaseName = this.contacts[i].name.toLowerCase();
              this.contacts[i].visible = lowerCaseName.includes(lowerCaseSearch);
              
            }
        },

        toggleDrop(i){
            
            this.contacts[this.contatore].messages[i].dropCounter = !this.contacts[this.contatore].messages[i].dropCounter
           
        },


        // ??
        removeMessage(i) {

            this.contacts[this.contatore].messages.splice(i, 1);

        },

    }
}).mount('#app')
