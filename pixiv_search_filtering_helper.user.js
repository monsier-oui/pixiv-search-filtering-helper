// ==UserScript==
// @name        pixiv search filtering helper
// @namespace   https://github.com/monsier-oui/
// @author      oui
// @include     http://www.pixiv.net/*
// @require     https://openuserjs.org/src/libs/sizzle/GM_config.js
// @version     0.1
// @grant       GM_getValue
// @grant       GM_setValue
// @grant       GM_registerMenuCommand
// ==/UserScript==

(function() {
'use strict';
var SCRIPT_NAME = 'pixiv search filtering helper';

function getFlt(){
  return GM_config.get('filter');
}

function setListener() {
  var us = document.getElementsByClassName('ui-search');
  for (var i = 0; i < us.length; i++) {
    us[i].addEventListener('submit', function(){
      var flt = getFlt();
      var box = document.getElementById('suggest-input');
      var q = box.value;
      if(q.indexOf(flt) < 0){
        if(q.match(/[ 　]/)){
          q = '('+q+')';
        }
        q += ' '+flt;
        box.value = q;
      }
    }, false);
  }
}

function modifyTagLink() {
  var pn = '';
  if(location.href.indexOf('search') > 0){
    pn = '.layout-body ';
  }else if(location.href.indexOf('medium') > 0){
    pn = '.layout-a ';
  }
  var tags = document.querySelectorAll(pn+'li.tag a.text');
  for (var i = 0; i < tags.length; i++) {
    tags[i].setAttribute('href', '/search.php?s_mode=s_tag&word='+encodeURI(tags[i].textContent+' '+getFlt()));
  }
}

// settings
var id = SCRIPT_NAME.replace(/ /g, '');
GM_config.init(
{
  'id': id,
  'title': SCRIPT_NAME+' 設定',
  'fields': {
    'filter': {
      'label': 'フィルター',
      'title': 'タグ検索時に必ず追加する検索条件を記入してください',
      'type': 'text',
      'default': ''
    }
  },
  'css': '#'+id+'_field_filter { width: 30em; }',
  'events': {
    'save': function(){
      GM_config.close();
      setListener();
    }
  }
});
GM_registerMenuCommand(SCRIPT_NAME+' - 設定', function(){ GM_config.open(); });

// onload
setListener();
if(getFlt() && location.href.match(/(medium|search)/i)){
  modifyTagLink();
}
})();