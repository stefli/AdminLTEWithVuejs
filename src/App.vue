<template>
  <div id="app" class="wrapper">
  	<page-header></page-header>
    <left-sidebar></left-sidebar>
    <div class="content-wrapper" style="min-height: 901px;">
      <content-header title="我的桌面" sub-title="我的桌面"></content-header>
      <router-view></router-view>
    </div>
    <page-footer></page-footer>
    <control-sidebar></control-sidebar>
  </div>
</template>

<script>
  import PageHeader from './components/PageHeader'
  import LeftSidebar from './components/LeftSidebar'
  import ControlSidebar from './components/ControlSidebar'
  import PageFooter from './components/PageFooter'
  import ContentHeader from './components/ContentHeader'

  export default {
    name: 'app',
    components: {
      PageHeader, LeftSidebar, ControlSidebar, PageFooter, ContentHeader
    }
  }
</script>
