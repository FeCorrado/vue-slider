new Vue({
    el: "#app",
    data:{
        i:0,
        pictures:[
            'https://unsplash.it/600?image=350',
            'https://unsplash.it/600?image=510',
            'https://unsplash.it/600?image=250',
            'https://unsplash.it/600?image=153',
            'https://unsplash.it/600?image=345',
            'https://unsplash.it/600?image=289',
        ],
        
    },
    methods:{
        prev: function(){
            if (this.i <= 0) {
                this.i = this.pictures.length - 1; 
            }else{
                this.i--
            }
            console.log(this.i)
        },

        post: function(){
            if (this.i >= this.pictures.length - 1) {
                this.i = 0; 
            }else{
                this.i++
            }
            console.log(this.i)
        }
    },
})