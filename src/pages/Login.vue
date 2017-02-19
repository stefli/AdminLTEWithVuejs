<template>
  <div class="login-box">
    <div class="login-logo">
      <a href="/"><b>九曳</b>云仓管理系统</a>
    </div>
    <!-- /.login-logo -->
    <div class="login-box-body">
      <p class="login-box-msg">登录</p>
      <form action="/" method="get">
        <div class="form-group has-feedback">
          <input type="email" class="form-control" placeholder="请输入邮箱地址">
          <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
        </div>
        <div class="form-group has-feedback">
          <input type="password" class="form-control" placeholder="请输入密码">
          <span class="glyphicon glyphicon-lock form-control-feedback"></span>
        </div>
        <div class="row">
          <div class="col-xs-8">
            <div class="checkbox icheck">
              <label>
                <input type="checkbox"> 记住密码
              </label>
            </div>
          </div>
          <!-- /.col -->
          <div class="col-xs-4">
            <button type="submit" class="btn btn-primary btn-block btn-flat">登录</button>
          </div>
          <!-- /.col -->
        </div>
      </form>
      <a href="/password/find">忘记密码？</a><br>
      <a href="/register" class="text-center">加入我们</a>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
</style>
