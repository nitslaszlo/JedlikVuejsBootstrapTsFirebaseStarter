<template>
  <div>
    <h1>List Item</h1>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>No</th>
          <th>Item Name</th>
          <th>Item Price</th>
          <th>Item Key</th>
          <th colspan="2">Action</th>
        </tr>
      </thead>
      <tbody>
          <tr v-for="(item, index) of locations" v-bind:key="index">
            <td>{{ index }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.price }}</td>
            <td>{{ item.id }}</td>
            <td>
                <router-link v-bind:to="{ name: 'Edit', params: {id: item.id} }" class="btn btn-warning">
                  Edit
                </router-link>
            </td>
            <td>
              <button v-on:click="deleteItem(item.id)" class="btn btn-danger">Delete</button>
            </td>
          </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Watch, Vue } from "vue-property-decorator";
import { db } from "./firebaseApp";
@Component({
  firestore: {
    locations: db.collection("locations")
  }
})
export default class ListItem extends Vue {
  private locations: any = [];

  private deleteItem (key: any): void {
    // prettier-ignore
    db.collection("locations")
      .doc(key)
      .delete()
      .then(() => {
        alert("Document deleted!");
      })
      .catch(error => {
        alert(`Error deleting document: ${error}`);
      });
  }
  @Watch("locations")
  private onLocationsChanged (value: number, oldValue: number): void {
    console.log("invoke: onLocationsChanged");
  }
}
</script>
