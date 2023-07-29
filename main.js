const app = Vue.createApp({
  data() {
    return {
      cart: [],
      premium: true,
    };
  },
  methods: {
    updateCart(id) {
      this.cart.push(id)
    },
    removeCart(id)
    {
        this.cart.pop()
    },
    submit(value)
    {
        console.log(value);
    }
  },
});
