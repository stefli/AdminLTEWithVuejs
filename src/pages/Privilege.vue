<template>
  <main-layout>
    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
      <!-- Content Header (Page header) -->
      <section class="content-header">
        <h1>
          Dashboard
          <small>我的桌面</small>
        </h1>
        <ol class="breadcrumb">
          <li><a href="#"><i class="fa fa-dashboard"></i> 首页</a></li>
          <li class="active">权限管理中心</li>
        </ol>
      </section>

      <!-- Main content -->
      <section class="content">
      </section>
      <!-- /.content -->
    </div>
  </main-layout>
</template>

<script>
  import MainLayout from '../layouts/Main'

  export default {
    components: {
      MainLayout
    }
  }
</script>
