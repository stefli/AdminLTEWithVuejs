<template>
    <section class="content">
      <div class="box">
        <div class="box-body">
          <form class="form-inline" @submit.prevent="onSubmit">
            <input type="text" class="form-control" id="inlineFormInput" placeholder="请输入用户名">
            <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="请输入电子邮箱">
            <button type="submit" class="btn btn-primary" @click="search">查询</button>
          </form>
        </div>
      </div>

      <div class="box">
        <!-- /.box-header -->
        <div class="box-body">
          <form class="form-inline" @submit.prevent="onSubmit">
            <router-link to="/system/users/create/" class="btn btn-primary">添加</router-link>
            <button type="button" class="btn btn-primary">删除选中项</button>
          </form>
          <br />
          <el-table :data="users" border style="width: 100%" :default-sort = "{prop: 'id', order: 'descending'}"
            @selection-change="handleSelectionChange">
            <el-table-column type="selection" width="54"></el-table-column>
            <el-table-column label="头像" width="100">
            <template scope="scope">
              <img v-bind:src="scope.row.img" width="32" height="32" />
            </template>
            </el-table-column>
            <el-table-column prop="id" label="序号" sortable width="180"></el-table-column>
            <el-table-column prop="firstName" label="姓名" sortable width="180"></el-table-column>
            <el-table-column prop="email" label="电子邮箱"></el-table-column>
            <el-table-column label="操作">
              <template scope="scope">
                <el-button
                  size="small"
                  @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                <el-button
                  size="small"
                  type="danger"
                  @click="handleDelete(scope.$index, scope.row)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <!-- /.box-body -->
        <div class="box-footer clearfix">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage4"
            :page-sizes="[100, 200, 300, 400]"
            :page-size="100"
            layout="total, sizes, prev, pager, next, jumper"
            :total="400">
          </el-pagination>
        </div>
      </div>
      <!-- /.box -->
    </section>
    <!-- /.content -->
  </div>
</template>

<script>
  import axios from 'axios'
  import toastr from 'toastr'

  export default {
    data () {
      return {
        users: [],
        multipleSelection: [],
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4
      }
    },
    created () {
  		axios.get('/static/users.json').then((response) => {
  			this.users = response.data.users
  		}, (err) => {
  			console.log(err)
  		})
  	},
    methods: {
      handleSelectionChange: function(val) {
        this.multipleSelection = val;
      },
      update: function(user) {
        axios.post('/static/users/')
            .then((response) => {
              console.log("update")
            })
      },
      delete: function(user) {
        if(confirm("您确定要删除该记录？ ")) {
          axios.post('/static/users/')
            .then((response) => {
              this.users.$remove(user)
            })
        }
      },
      handleSizeChange: function(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange: function(val) {
        this.currentPage = val;
        console.log(`当前页: ${val}`);
      },
      handleEdit: function(a, b) {
        toastr.success('Hello')
      },
      search: function(key) {
        return
      }
    }
  }
</script>
