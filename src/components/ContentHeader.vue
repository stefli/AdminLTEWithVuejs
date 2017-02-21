<template>
	<section class="content-header">
        <h1>
          {{title}}
          <small>{{subTitle}}</small>
        </h1>
        <ol class="breadcrumb">
          <li><a href="#"><i class="fa fa-dashboard"></i> 首页</a></li>
          <li class="active">{{subTitle}}</li>
        </ol>
      </section>
</template>

<script>
	export default {
		name: 'contentHeader',
		props: ['title', 'subTitle'],
		data () {
			return {

			}
		}
	}
</script>
