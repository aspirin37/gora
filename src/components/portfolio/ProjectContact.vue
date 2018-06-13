<template>
  <div class="container-fluid bg-gradient main-section text-center current-shadow">
    <h2 class="text-white mb-4">{{$t('titles.doyouwant')}}</h2>
    <router-link
      :to="{name: 'contacts'}"
      class="btn btn-light btn-lg btn-rounded px-5"
    >{{$t('titles.contact')}}</router-link>
  </div>
</template>