<template>
  <div class="h-100 d-flex align-center justify-space-between text-medium-emphasis">
    <!-- 👉 Footer: left content -->
    <div class="d-flex align-center text-base">
      &copy;
      {{ new Date().getFullYear() }},
      Made With
      <VIcon
        icon="ri-heart-fill"
        color="error"
        size="1.25rem"
        class="mx-1"
      />
      By <a
        href="https://mutaman.elhadi.tech"
        target="_blank"
        rel="noopener noreferrer"
        class="text-primary ms-1"
      >Mutaman Elhadi</a>
    </div>
    <!-- 👉 Footer: right content -->
    <span class="d-md-flex gap-x-4 text-primary d-none">
<!--      <a-->
<!--        href="#"-->
<!--        target="noopener noreferrer"-->
<!--      >License</a>-->
<!--      <a-->
<!--        href="#"-->
<!--        target="noopener noreferrer"-->
<!--      >Projects</a>-->
<!--      <a-->
<!--        href="#"-->
<!--        target="noopener noreferrer"-->
<!--      >Documentation</a>-->
<!--      <a-->
<!--        href="#"-->
<!--        target="noopener noreferrer"-->
<!--      >Support</a>-->
    </span>
  </div>
</template>
