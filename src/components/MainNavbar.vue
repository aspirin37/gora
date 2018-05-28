<template>
  <header class="container-fluid fixed-top pt-3">
    <div class="bg-navbar d-flex container-fluid justify-content-between align-items-center current-shadow rounded">
      <router-link :to="{name: 'main-page'}" class="d-flex align-items-center">
        <img src="@/images/logo.svg" alt="logo" class="navbar-logo">
        <strong class="my-0 ml-2 font-large link-reset text-dark">GORA</strong>
      </router-link>
      <nav>
        <router-link :to="{name: 'portfolio'}" active-class="active" class="py-3 px-4 d-inline-block custom-link text-dark">Portfolio</router-link>
        <router-link :to="{name: 'contacts'}" active-class="active" class="py-3 px-4 d-inline-block custom-link text-dark">Contacts</router-link>
        <a href="#" class="btn btn-pink btn-sm btn-rounded">Contact Us</a>
      </nav>
    </div>
  </header>
</template>