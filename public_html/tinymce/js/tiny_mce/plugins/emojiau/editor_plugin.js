(function() {tinymce.PluginManager.requireLangPack('emojiau');tinymce.create('tinymce.plugins.EmojiauPlugin', {init : function(ed, url) {ed.addCommand('mceEmojiau', function() {ed.windowManager.open({file : url + '/emojiau.htm',width : 320 + ed.getLang('emojiau.delta_width', 0),height : 320 + ed.getLang('emojiau.delta_height', 0),inline : 1}, {plugin_url : url});});ed.addButton('emojiau', {title : 'emojiau.desc',cmd : 'mceEmojiau',image : url + '/img/emojiau.gif'});},getInfo : function() {return {longname : 'Emojiau plugin',author : 'Hisaya Nishide',authorurl : 'http://any-sense.com/',infourl : 'http://any-sense.com/',version : tinymce.majorVersion + "." + tinymce.minorVersion};}});tinymce.PluginManager.add('emojiau', tinymce.plugins.EmojiauPlugin);})();