app.component("product-details", {
    props:{
        details:{
            type:Array,
            required:true,
        }
    },
    template: 
    /*html*/
    `<div>
       
    <div v-for="(detail,index) in details"  :key="index" >
           {{detail}}
        </div>
     
    </div>`
})