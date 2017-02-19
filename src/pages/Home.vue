<template>
  <main-layout>
    <Dashboard></Dashboard>
  </main-layout>
</template>

<script>
  import MainLayout from '../layouts/Main'
  import Dashboard from '../components/Dashboard'

  export default {
    components: {
      MainLayout, Dashboard
    }
  }
</script>
