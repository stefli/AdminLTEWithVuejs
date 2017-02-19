<template>
  <div class="wrapper">
    <page-header></page-header>
    <left-sidebar></left-sidebar>
    <slot></slot>
    <page-footer></page-footer>
    <control-sidebar></control-sidebar>
    <!-- /.control-sidebar -->
    <!-- Add the sidebar's background. This div must be placed
           immediately after the control sidebar -->
    <div class="control-sidebar-bg"></div>
  </div>
</template>

<script>
  import PageHeader from '../components/PageHeader'
  import LeftSidebar from '../components/LeftSidebar'
  import ControlSidebar from '../components/ControlSidebar'
  import Dashboard from '../components/Dashboard'
  import PageFooter from '../components/PageFooter'

  export default {
    components: {
      PageHeader, LeftSidebar, ControlSidebar, Dashboard, PageFooter
    }
  }
</script>
