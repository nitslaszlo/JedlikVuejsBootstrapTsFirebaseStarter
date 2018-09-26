/* <atemplate>
//   <div id="app">
//     <div id="nav">
//       <router-link to="/">Home</router-link> |
//       <router-link to="/add">Add item</router-link>
//       <router-link to="/edit/:id">Edit item</router-link>
//       <router-link to="/list">List item</router-link>
//     </div>
//     <router-view/>
//   </div>
// </atemplate>

<template>
  <div id="app" class="container">
    <nav class="navbar navbar-expand-sm bg-light">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link :to="{ name: 'Home' }" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'Add' }" class="nav-link">Add Item</router-link>
        </li>
        <li class="nav-item">
          <router-link :to="{ name: 'List' }" class="nav-link">All Item</router-link>
        </li>
      </ul>
    </nav>
    <div class="gap">
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="css">
@import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
</style>

<style>
.gap {
  margin-top: 50px;
}
</style>
