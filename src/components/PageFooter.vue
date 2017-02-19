<template>
	<footer class="main-footer">
    <div class="pull-right hidden-xs">
      {{version}}
    </div>
    <strong>Copyright &copy; {{year}} <a v-bind:href="website">{{company}}</a>.</strong> All rights reserved.
  </footer>
</template>

<script>
export default {
  name: 'pageFooter',
  data () {
  	return {
  		year: '2017',
  		company: 'Jiuye SCM',
  		website: 'http://www.jiuyescm.com',
  		version: '3.0.0'
  	}
  }
}
</script>

<style scoped>
</style>
