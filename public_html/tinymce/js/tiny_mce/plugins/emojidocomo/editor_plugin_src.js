(function() {
	tinymce.PluginManager.requireLangPack('emojidocomo');
	tinymce.create('tinymce.plugins.EmojidocomoPlugin', {
		init : function(ed, url) {
			// Register commands
			ed.addCommand('mceEmojidocomo', function() {
				ed.windowManager.open({
					file : url + '/emojidocomo.htm',
					width : 250 + ed.getLang('emojidocomo.delta_width', 0),
					height : 320 + ed.getLang('emojidocomo.delta_height', 0),
					inline : 1
				}, {
					plugin_url : url
				});
			});

			// Register buttons
			ed.addButton('emojidocomo', {
					title : 'emojidocomo.desc',
					cmd : 'mceEmojidocomo',
					image : url + '/img/emojidocomo.gif'
			});
		},

		getInfo : function() {
			return {
				longname : 'Emojidocomo plugin',
				author : 'Hisaya Nishide',
				authorurl : 'http://any-sense.com/',
				infourl : 'http://any-sense.com/',
				version : tinymce.majorVersion + "." + tinymce.minorVersion
			};
		}
	});

	// Register plugin
	tinymce.PluginManager.add('emojidocomo', tinymce.plugins.EmojidocomoPlugin);
})();