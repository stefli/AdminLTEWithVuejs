<template>
	<aside class="main-sidebar">
    <!-- sidebar: style can be found in sidebar.less -->
    <section class="sidebar" style="height: auto;">

      <!-- search form (Optional) -->
      <form action="#" method="get" class="sidebar-form">
        <div class="input-group">
          <input type="text" name="q" class="form-control" placeholder="Search...">
              <span class="input-group-btn">
                <button type="submit" name="search" id="search-btn" class="btn btn-flat"><i class="fa fa-search"></i>
                </button>
              </span>
        </div>
      </form>
      <!-- /.search form -->

      <!-- Sidebar Menu -->
      <ul class="sidebar-menu">
        <li v-for="menu in menus" :class='{treeview:menu.subMenus,active:$route.path.indexOf(menu.url)>=0}'>
          <a href="#">
            <i :class="menu.iconClass"></i> <span>{{menu.title}}</span>
            <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
          </a>
          <ul class="treeview-menu" v-show='$route.path.indexOf(menu.url)>=0'>
            <router-link tag="li" :to="submenu.url" activeClass="active" v-for="submenu in menu.subMenus">
              <a href="#"><i :class="submenu.iconClass"></i> {{submenu.title}}</a>
            </router-link>
          </ul>
        </li>
       </ul>
      <!-- /.sidebar-menu -->
    </section>
    <!-- /.sidebar -->
  </aside>
</template>

<script>
import axios from 'axios'

export default {
	name: 'leftSidebar',
	data () {
		return {
			user: {
				fullName: 'Steven Li',
				onlineStatus: 'Offline'
			},
			menus: []
		}
	},
	created () {
		this.getMenus()
	},
  methods: {
    getMenus: function() {
      axios.get('/static/menus.json').then((response) => {
      this.menus = response.data.menus
    }, (err) => {
      console.log(err)
    })
    }
  }
}
</script>

<style scoped>
</style>
