<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <h3>Edit Item</h3>
      </div>
      <div class="card-body">
        <form @submit.prevent="updateItem">
          <div class="form-group">
            <label>Item Name:</label>
            <input type="text" class="form-control" v-model="newItem.name">
          </div>
          <div class="form-group">
            <label>Item Price:</label>
            <input type="text" class="form-control" v-model="newItem.price">
          </div>
          <div class="form-group">
            <input type="submit" class="btn btn-primary" value="Update Item">
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
export default class EditItem extends Vue {
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

  private mounted(): void {
    const docRef: any = db.collection("locations").doc(this.$route.params.id);
    const getDoc: any = docRef
      .get()
      .then((doc: any) => {
        if (!doc.exists) {
          console.log("No such document!");
        } else {
          console.log("Document data:", doc.data());
          this.newItem.name = doc.data()!.name;
          this.newItem.price = doc.data()!.price;
        }
      })
      .catch((err: any) => {
        console.log("Error getting document", err);
      });
  }

  private updateItem(): void {
    const docRef = db.collection("locations").doc(this.$route.params.id);
    const getDoc = docRef
      .update(this.newItem)
      .then(() => {
        console.log("Update succes!");
      })
      .catch((err: any) => {
        console.log("Update Error!", err);
      });
    this.$router.push("/list");
  }
}
</script>
