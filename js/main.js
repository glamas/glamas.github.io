window.onload = function () {
  var default_config = {
    "ignore_cat":["css","js"],
    "tpl_ver": "0.1.0",
    "username": "glamas",
    "repo": "glamas.github.io",
    "github_api": "https://api.github.com/repos/"
  }
  var converter = new showdown.Converter();
  // converter.setOption('noHeaderId', true);
  wm = new Vue({
    el: '#app',
    data: {
      config: default_config,
      filename: ((window.location.pathname).match(/\/([^\/?#]+).html$/i) || [,''])[1]+".md",
      category: [],
      header: '',
      content: ''
    },
    ready:function(){
      //get config first
      this.$http.get('/config.json?t='+Math.random(),{"headers":{'Cache-Control': 'no-cache',"If-Modified-Since":"0"}}).then(function(response){
        this.$set('config',response.data);
        this.$set('filename',((window.location.pathname).match(/\/([^\/?#]+).html$/i) || [,''])[1]+this.config.markdown_ext);

        //get category
        this.$http.get(this.config.github_api+this.config.username+'/'+this.config.repo+'/contents').then(function(response){
          var tmp=[]
          for (var i = response.data.length - 1; i >= 0; i--) {
            if (response.data[i].type == "dir" && this.config.ignore_cat.indexOf(response.data[i].name) == -1) {
              tmp.push({'category':response.data[i].name})
            }
          }
          this.$set('category',tmp);
        }, function(){
          alert("can't access github api");
          this.$set('category',[1,2,3]);
        });

        //get content
        this.$http.get(this.filename).then(function(response){
          this.$set('content',converter.makeHtml(response.data));
        }, function(){
          alert("can't access markdown file");
          this.$set('content',"<p>default content</p>");
        });
      }, function(){
        alert("can't access config file");
        this.$set('config',{});
      });
      //end load data
    },
  })

}