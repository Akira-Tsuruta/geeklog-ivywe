(function() {
	tinymce.PluginManager.requireLangPack('emojisoftbank');
	tinymce.create('tinymce.plugins.EmojisoftbankPlugin', {
		init : function(ed, url) {
			// Register commands
			ed.addCommand('mceEmojisoftbank', function() {
				ed.windowManager.open({
					file : url + '/emojisoftbank.htm',
					width : 320 + ed.getLang('emojisoftbank.delta_width', 0),
					height : 320 + ed.getLang('emojisoftbank.delta_height', 0),
					inline : 1
				}, {
					plugin_url : url
				});
			});

			// Register buttons
			ed.addButton('emojisoftbank', {
					title : 'emojisoftbank.desc',
					cmd : 'mceEmojisoftbank',
					image : url + '/img/emojisoftbank.gif'
			});
		},

		getInfo : function() {
			return {
				longname : 'Emojisoftbank plugin',
				author : 'Hisaya Nishide',
				authorurl : 'http://any-sense.com/',
				infourl : 'http://any-sense.com/',
				version : tinymce.majorVersion + "." + tinymce.minorVersion
			};
		}
	});

	// Register plugin
	tinymce.PluginManager.add('emojisoftbank', tinymce.plugins.EmojisoftbankPlugin);
})();