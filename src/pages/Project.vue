<template>
  <div>
    <article class="container py-5 mw-800">
      <h1 class="mb-5">{{$route.params.title}}<span class="title-char"></span></h1>
      <p class="font-large">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi voluptates amet blanditiis, quis asperiores voluptas fuga libero obcaecati nostrum odit labore commodi, delectus natus vel nam fugit repellat quae autem!</p>
      <div class="mb-5">
        <a href="#" class="dl-link rounded mr-2 px-4 py-2"><img class="dl-link__img" src="@/images/android.svg" alt="android"></a>
        <a href="#" class="dl-link rounded mr-2 px-4 py-2"><img class="dl-link__img" src="@/images/apple.svg" alt="apple"></a>
        <a href="#" class="dl-link rounded mr-2 px-4 py-2"><img class="dl-link__img" src="@/images/web.svg" alt="web"></a>
      </div>
      <div class="mb-4">
        <img src="@/images/team.jpeg" alt="" class="mw-100">
      </div>
      <p class="font-large">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi voluptates amet blanditiis, quis asperiores voluptas fuga libero obcaecati nostrum odit labore commodi, delectus natus vel nam fugit repellat quae autem!</p>
    </article>
    <project-contact></project-contact>
  </div>
</template>

<script>
import ProjectContact from '@/components/portfolio/ProjectContact'

export default {
  components: {
    ProjectContact
  }
}
</script>
