<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <a class="navbar-brand">Seja bem vindo novamente {{formUser.name}}</a>

        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" @click="logOutUser">Log Out</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <section>
      <div class="container mt-5">
        <div class="row">
          <div class="col-md-12">
            <ul class="list-group">
              <li class="list-group-item">Name: {{ formUser.name }}</li>
              <li class="list-group-item">E-mail: {{ formUser.email }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script src="./HomeUser.js"></script>

<style src="" scoped></style>
