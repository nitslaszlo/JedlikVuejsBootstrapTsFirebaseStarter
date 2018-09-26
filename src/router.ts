import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import AddItem from "./views/AddItem.vue";
import EditItem from "./views/EditItem.vue";
import ListItem from "./views/ListItem.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      name: "Home",
      path: "/",
      component: Home
    },
    {
      name: "Add",
      path: "/add",
      component: AddItem
    },
    {
      name: "Edit",
      path: "/edit/:id",
      component: EditItem
    },
    {
      name: "List",
      path: "/list",
      component: ListItem
    }
  ]
});
