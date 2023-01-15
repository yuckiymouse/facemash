<template>
  <div>
    <b-nav tabs>
      <b-nav-item active>FF7</b-nav-item>
      <b-nav-item>FF14</b-nav-item>
      
    </b-nav>
    <h1>Which is your favorite?</h1>
    
    
    <div class="image">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6kNk2zhNtYJo6yBEYYzsbvo0vkUNpBbd1r-uLkxfyJJDIamfvmoDwYmZlqeQFzbkFOpY&usqp=CAU">
      <img src="data:image/jpeg;base64,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">
    </div>
    <div class="vote">
      <span id="left"><button type="button">Love</button></span>
      <span id ="right"><button type="button">Love</button></span>
    </div>
    
    <div>
      <button type="button">Pull Result</button>
    </div>
  </div>

    




</template>

<script lang="ts">
export default {
    data() {
      return {
        listItems: []
      }
    },
    methods: {
      async getData() {
        const res = await fetch("https://0udof23xda.execute-api.us-east-1.amazonaws.com/hello", {
          method: "POST"
        });
        const finalRes = await res.json();
        this.listItems = finalRes;
      }
    },
    mounted() {
      this.getData();
    }
  }
</script>

<style scoped>

.image {
  display:flex;
  justify-content: center;
}

h1 {
  color: pink;
  text-align: center;
  font-weight: bold;
  font-size: 50px;
}
.center {
  text-align:center;
}
.nav {
  display: inline-block;
  padding: 0 1rem;
  color: blue;
  
}
.nav li {
  float: left;
  margin-left: 20px;
  list-style: none;
  font-size: 40px;
  font-weight: 500;
  
}
button {
  font-size: 20px;
  font-weight: 500;
  background-color: pink;
  padding:10px;
  
}

.vote {
  padding-right: 10%;
}

#left {
  padding: 50px;
  padding-right: 90px;
  padding-left: 20px;
}

/* #right {
  padding: 50px;
  padding-left: 20px;

} */

/* .item {
  margin-top: 2rem;
  /* display: flex; */
/* } */

/* .details {
  flex: 1;
  margin-left: 1rem;
}

i {
  display: flex;
  place-items: center;
  place-content: center;
  width: 32px;
  height: 32px;

  color: var(--color-text);
}

h3 {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: var(--color-heading);
} */

/* @media (min-width: 1024px) {
  .item {
    margin-top: 0;
    padding: 0.4rem 0 1rem calc(var(--section-gap) / 2);
  }

  i {
    top: calc(50% - 25px);
    left: -26px;
    position: absolute;
    border: 1px solid var(--color-border);
    background: var(--color-background);
    border-radius: 8px;
    width: 50px;
    height: 50px;
  }

  .item:before {
    content: ' ';
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    bottom: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:after {
    content: ' ';
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    top: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:first-of-type:before {
    display: none;
  }

  .item:last-of-type:after {
    display: none;
  }
} */
</style>
