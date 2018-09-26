<template>
    <div class="container">
        <div class="card">
            <div class="card-header">
                <h3>Add Item</h3>
            </div>
            <div class="card-body">
                <form v-on:submit.prevent="addItem">
                    <div class="form-group">
                        <label>Item Name:</label>
                        <input type="text" class="form-control" v-model="newItem.name"/>
                    </div>
                    <div class="form-group">
                        <label>Item Price:</label>
                        <input type="text" class="form-control" v-model="newItem.price"/>
                    </div>
                    <div class="form-group">
                        <input type="submit" class="btn btn-primary" value="Add Item"/>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { db } from "./firebaseApp";

@Component
export default class AddItem extends Vue {
  private newItem: {
    name: string;
    price: string;
  };

  constructor() {
    super();
    this.newItem = {
      name: "",
      price: ""
    };
  }

  private addItem(): void {
    // prettier-ignore
    db.collection("locations")
      .add(this.newItem )
      .then(docRef => {
        alert(`Document written with ID: ${docRef.id}`);
      })
      .catch(error => {
        alert(`Error adding document: ${error}`);
      });
    this.newItem.name = "";
    this.newItem.price = "";
    this.$router.push("/list");
  }
}
</script>
