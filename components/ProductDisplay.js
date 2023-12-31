app.component("product-display", {
    //AQUI SERIA TIPO OS INPUT PROPERTIES DO ANGULAR
    props:{
        //PODEMOS TORNAR O INPUT REQUIRED TBM
        premium:{
            type:Boolean,
            required:true
        }
    },
    template: 
    /*html*/
    `<div class="product-display">
      <div class="product-container">
        <div class="product-image">
          <img v-bind:src="image">
        </div>
        <div class="product-info">
          <h1>{{ title }}</h1>
  
          <p v-if="inStock">In Stock</p>
          <p v-else>Out of Stock</p>


  
          <p>Shipping: {{ shipping }}</p>
          
          <!-- solution -->
          <product-details :details="details"></product-details>
          <!-- solution -->
  
          <div 
            v-for="(variant, index) in variants" 
            :key="variant.id" 
            @mouseover="updateVariant(index)" 
            class="color-circle" 
            :style="{ backgroundColor: variant.color }">
          </div>
          
          <button 
            class="button" 
            :class="{ disabledButton: !inStock }" 
            :disabled="!inStock" 
            v-on:click="addToCart">
            Add to Cart
          </button>

          <button
          class="button" 
          @click="removeCart"
          >Remove Cart</button>


        </div>
      </div>
    </div>`,
    data() {
        return {
            product: 'Socks',
            brand: 'Vue Mastery',
            selectedVariant: 0,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
              { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
              { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 },
            ]
        }
    },
    methods: {
        //ESSE SERIA ANLOGO AOS OUTPUT PROPERTYS
        //SO PRECISAMOS REFERENCIAR O EVENTO DO PAI

        addToCart() {
            this.$emit('add-card',this.variants[this.selectedVariant].id)
        },
        updateVariant(index) {
            this.selectedVariant = index
        },
        removeCart(){
            //COLOCAR POR COMENÇÃO - e não camel cases
            //AQUI MANDAMOS O PAYLOAD
            this.$emit('remove-card',this.variants[this.selectedVariant].id)
        }
        
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product
        },
        image() {
            return this.variants[this.selectedVariant].image
        },
        inStock() {
            return this.variants[this.selectedVariant].quantity
        },
        shipping()
        {
            return this.premium ? "Premium":"Gratis"
        }
    }
});
