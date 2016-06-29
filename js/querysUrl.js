/*  
    QuerysUrl.js is open sourced under the MIT license.
    *v1.1
    *(c)2016 Josue Marin Ch josue.marin.ch@gmail.com 
    *https://github.com/corioquix/
*/

var querysUrl = {
  arr: [],
  query: undefined,
  url: undefined,

  init: function(){
    var _this = this,
    _name, _data, _url;

    _url = window.location.href;
    _this.url = _url.slice(_url.indexOf('?') + 1).split('&');

    for(var i = 0; i < _this.url.length; i++){
      _this.query = _this.url[i].split('=');
      _name = _this.query[0];
      _data = _this.query[1];
      _this.arr[_name] = _data;
    }
  },

  get: function(fn){
    var _this = this,
    _arr = [];
    _this.init();
    fn(_this.arr);
  }
}
