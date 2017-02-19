<template>
  <main-layout>
    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
      <!-- Content Header (Page header) -->
      <section class="content-header">
        <h1>
          用户管理
          <small>用户信息列表</small>
        </h1>
        <ol class="breadcrumb">
          <li><a href="#"><i class="fa fa-dashboard"></i> 首页</a></li>
          <li class="active">用户管理中心</li>
        </ol>
      </section>

      <!-- Main content -->
      <section class="content">
        <div class="box">
          <!-- /.box-header -->
          <div class="box-body">
            <table class="table table-bordered">
              <tr>
                <th style="width: 40px">#</th>
                <th style="width: 220px">姓名</th>
                <th>电子邮箱</th>
                <th style="width: 240px">操作</th>
              </tr>
              <tr v-for="user in users">
                <td>{{ user.id }}</td>
                <td><router-link :to="{ name: 'userDetail', params: { id: user.id }}">{{user.firstName}} {{user.lastName}}</router-link></td>
                <td><span>{{user.email}}</span></td>
                <td><router-link  class="btn btn-xs btn-primary" :to="{ name: 'userEdit', params: { id: user.id }}">修改</router-link> <button
                class="btn btn-xs btn-danger delete-button" @click="delete(user)">删除</button></td>
              </tr>
            </table>
          </div>
          <!-- /.box-body -->
          <div class="box-footer clearfix">
            <ul class="pagination pagination-sm no-margin pull-right">
              <li><a href="#">&laquo;</a></li>
              <li><a href="#">1</a></li>
              <li><a href="#">2</a></li>
              <li><a href="#">3</a></li>
              <li><a href="#">&raquo;</a></li>
            </ul>
          </div>
        </div>
        <!-- /.box -->
      </section>
      <!-- /.content -->
    </div>
  </main-layout>
</template>

<script>
  import MainLayout from '../../layouts/Main'
  import axios from 'axios'

  export default {
    data () {
      return {
        users: []
      }
    },
    components: {
      MainLayout
    },
    created () {
  		axios.get('/api/users.json').then((response) => {
  			this.users = response.data.users
  		}, (err) => {
  			console.log(err)
  		})
  	},
    methods: {
      update: function(user) {
        axios.post('/api/users/')
            .then((response) => {
              console.log("update")
            })
      },
      delete: function(user) {
        alert(2)
        if(confirm("您确定要删除该记录？ ")) {
          axios.post('/api/users/')
            .then((response) => {
              this.users.$remove(user)
            })
        }
      }
    }
  }
</script>

<style>
  @import '../../assets/less/table.less'
</style>
