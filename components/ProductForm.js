app.component('product-form',{
    //AQUI E FEITO DE FORMA TWO DATA BINDING
    template:
    /*html*/
    `<form class="review-form"
    @submit.prevent="submitForm"
    >
      <h3>Leave a review</h3>
      <label for="name">Name:</label>
      <input id="name" v-model="name">
  
      <label for="review">Review:</label>      
      <textarea id="review" v-model="review"></textarea>
  
      <label for="rating">Rating:</label>

      <select id="rating" v-model.number="rating">
        <option>5</option>
        <option>4</option>
        <option>3</option>
        <option>2</option>
        <option>1</option>
      </select>

      <select v-model="selected">
    <option disabled value="">Please select one</option>
    <option>A</option>
    <option>B</option>
    <option>C</option>
  </select>

      <input class="button" type="submit" value="Submit">  
  
    </form>`,
    data(){
        // PODEMOS ASSOCIAR ISSO COM O TEMPLATE DRIVEN FORMS
        return {
            name: '',
            review: '',
            rating: null,
            selected:''
        }
    },
    methods:{
        submitForm()
        {
            let form={
                name:this.name,
                review:this.review,
                rating:this.rating
            }
    
            this.$emit('submit-form',form)
            this.name=''
            this.review='',
            this.rating=null
        }
    }
  
})