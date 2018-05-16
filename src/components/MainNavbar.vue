<template>
  <header class="bg-white d-flex container-fluid justify-content-between align-items-center">
    <span>logo</span>
    <nav>
      <router-link :to="{name: 'main'}" active-class="active" class="py-3 px-4 d-inline-block custom-link text-dark">Main</router-link>
      <router-link :to="{name: 'inner'}" active-class="active" class="py-3 px-4 d-inline-block custom-link text-dark">Portfolio</router-link>
      <router-link :to="{name: 'inner'}" active-class="active" class="py-3 px-4 d-inline-block custom-link text-dark">Contacts</router-link>
      <a href="#" class="btn btn-pink btn-sm btn-rounded">Contact Us</a>
    </nav>
  </header>
</template>