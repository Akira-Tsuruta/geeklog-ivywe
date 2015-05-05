var EmojiauDialog = {
	init : function(ed) {
		tinyMCEPopup.resizeToInnerSize();
	},

	insert : function(file) {
		var ed = tinyMCEPopup.editor, dom = ed.dom;
		ed.execCommand('mceInsertContent', false, dom.createHTML('img', {
			src : tinyMCEPopup.getWindowArg('plugin_url') + '/img/' + file,
			border : 0
		}));
	}
};

tinyMCEPopup.onInit.add(EmojiauDialog.init, EmojiauDialog);

var Emojiau_pallet = {
	
	init : function() {
		var t = this;
		t.hex_range = [
				[
				//	[顔系],
					[0xf393,0xf39f],
					[0xf3a1,0xf3a3],
					[0xf649,0xf64c],
					[0xf6c0],
					[0xf7f3,0xf7f6],
					[0xf7cb],
					[0xf461],
					[0xf468],
					[0xf46b],
					[0xf46d],
					[0xf485],

				//	[猫],
					[0xf3ab,0xf3ad],
					[0xf6b4],
					[0xf462],
					[0xf464,0xf465],
					[0xf467],
					[0xf469,0xf46a],
					[0xf46c],
					[0xf46e],
					[0xf484],

				//	[猿],
					[0xf6b2],
					[0xf454,0xf456],

				//	[変なキャラ],
					[0xf48a,0xf48d],

				//	[ヒト],
					[0xf350],
					[0xf3af],
					[0xf3bd],
					[0xf3c4],
					[0xf3d4,0xf3db],
					[0xf6d3,0xf6d5],
					[0xf6c8],
					[0xf6d1],
					[0xf448,0xf449],
					[0xf3c2],
					[0xf6a4],
					[0xf7ef],

				//	[体],
					[0xf360,0xf361],
					[0xf3a7,0xf3aa],
					[0xf6cc],
					[0xf6cf],
					[0xf6d2],
					[0xf6d8,0xf6d9],
					[0xf488],
					[0xf7c3,0xf7c4],
					[0xf6c2],
					[0xf7c1],
					[0xf7c2],
					[0xf3a4],
					[0xf3a5],
					[0xf44b],
					[0xf6c4],
					[0xf3eb],
					[0xf6c7],

				//	[抽象],
					[0xf47d],
					[0xf480],

				//	[感情],
					[0xf345],
					[0xf36c],
					[0xf36f],
					[0xf3ae],
					[0xf3dd],
					[0xf37e],
					[0xf644],
					[0xf647],
					[0xf64d],
					[0xf64e],
					[0xf651,0xf653],
					[0xf65a,0xf65b],
					[0xf6be,0xf6bf],
					[0xf6cd,0xf6ce],
					[0xf6de],
					[0xf7cd,0xf7ce],
					[0xf7ee],
					[0xf7fa],
					[0xf460],
					[0xf7c8],
					[0xf7ca],
					[0xf7d8],
					[0xf7e5],
					[0xf795],
					[0xf3ee,0xf3f1],
					[0xf3a6],
					[0xf378,0xf37d],
					[0xf64f,0xf650],
					[0xf6c3],
					[0xf479],
					[0xf458],
					[0xf7cc],

				//	[天候],
					[0xf65d,0xf666],
					[0xf640,0xf641],
					[0xf7b5],
					[0xf7c5,0xf7c7]
				],
				[
				//	[動物系],
					[0xf34e],
					[0xf3dc],
					[0xf3de,0xf3e6],
					[0xf648],
					[0xf6b0,0xf6b1],
					[0xf6b3],
					[0xf6b5,0xf6ba],
					[0xf7f0,0xf7f2],
					[0xf7f7],
					[0xf443],
					[0xf44a],
					[0xf44c],
					[0xf45b,0xf45c],
					[0xf470],
					[0xf47a],
					[0xf483],
					[0xf347],
					[0xf6ac],
					[0xf6c5],
					[0xf3c0],

				//	[星座],
					[0xf667,0xf673],

				//	[食べ物],
					[0xf3be],
					[0xf36a,0xf36b],
					[0xf382,0xf392],
					[0xf3be],
					[0xf3f3,0xf3fc],
					[0xf69a,0xf69d],
					[0xf6a6],
					[0xf6a9,0xf6ab],
					[0xf6ad,0xf6af],
					[0xf6c6],
					[0xf7b4],
					[0xf7bd],
					[0xf7d1],
					[0xf440],
					[0xf442],
					[0xf44e,0xf453],
					[0xf45a],
					[0xf45d,0xf45e],
					[0xf474],

				//	[乗り物],
					[0xf3b3,0xf3b5],
					[0xf687,0xf68e],
					[0xf7ec],
					[0xf355],
					[0xf7f8],
					[0xf6e7],
				//	[建物],
					[0xf351,0xf354],
					[0xf3c7],
					[0xf3ca,0xf3cd],
					[0xf684],
					[0xf686],
					[0xf471],
					[0xf7eb],
					[0xf7bb],
					[0xf7e0],

				//	[標識],
					[0xf34a],
					[0xf642],
					[0xf646],
					[0xf683],
					[0xf685],
					[0xf682],
					[0xf3f2],
					[0xf78e],
					[0xf67b,0xf67e],
					[0xf680]
				],
				[
				//	[記号系],
				//	[数字],
					[0xf7c9],
					[0xf6fb,0xf6fc],
					[0xf740,0xf747],
					[0xf489],

				//	[血液型],
					[0xf3e7,0xf3ea],

					[0xf381],
					[0xf356,0xf35f],
					[0xf363,0xf364],
					[0xf655,0xf659],
					[0xf65c],
					[0xf6c1],
					[0xf6c9,0xf6cb],
					[0xf6d0],
					[0xf6e8],
					[0xf69e],
					[0xf6d6],
					[0xf748,0xf77a],

				//	[事務系],
					[0xf77c,0xf77e],
					[0xf780,0xf78d],
					[0xf78f],
					[0xf365],
					[0xf675,0xf67a],
					[0xf791,0xf793],
					[0xf34f],
					[0xf7e2],
					[0xf7a8],
					[0xf7ac,0xf7ad],
					[0xf7af,0xf7b0],
					[0xf7da],


				//	[国旗],
					[0xf348,0xf349],
					[0xf3ce,0xf3d3],
					[0xf790],
					[0xf6a5],

				//	[意味不明],
					[0xf459],
					[0xf7ba],
					[0xf7d4,0xf7d7],
					[0xf7e4],
					[0xf794],
					[0xf7cf],
					[0xf478],
					[0xf370],
					[0xf7d2]

				],
				[
				//	[ファッション],
					[0xf34b],
					[0xf6e4],
					[0xf366],
					[0xf371,0xf377],
					[0xf6e2],
					[0xf6e6],
					[0xf6ed],
					[0xf6f3],
					[0xf7bc],
					[0xf7e6,0xf7e7],
					[0xf7f9],
					[0xf46f],
					[0xf47b],
					[0xf674],
					[0xf3c9],
					[0xf3ec],

				//	[スポーツ],
					[0xf3b1,0xf3b2],
					[0xf3ed],
					[0xf643],
					[0xf68f,0xf694],
					[0xf7b6,0xf7b7],
					[0xf445],
					[0xf380],
					[0xf447],
					[0xf446],
					[0xf476],


				//	[道具（その他）],
					[0xf341],
					[0xf362],
					[0xf36d],
					[0xf36e],
					[0xf654],
					[0xf681],
					[0xf696,0xf697],
					[0xf69f],
					[0xf6a1],
					[0xf6a8],
					[0xf6d7],
					[0xf6db,0xf6db],
					[0xf6df,0xf6e1],
					[0xf6e3],
					[0xf6e5],
					[0xf6e9,0xf6eb],
					[0xf6ee,0xf6f2],
					[0xf6f4,0xf6f9],
					[0xf797,0xf7a7],
					[0xf7b1],
					[0xf7b3],
					[0xf7fb],
					[0xf3b0],
					[0xf3bc],
					[0xf7e8,0xf7e9],
					[0xf7b8,0xf7b9],
					[0xf7df],
					[0xf7e1],
					[0xf7d3],
					[0xf7e3],
					[0xf346],
					[0xf6a0],
					[0xf796],
					[0xf45f],
					[0xf444],
					[0xf477],
					[0xf3a0],
					[0xf6da],
					[0xf7d0],
					[0xf7db,0xf7de],
					[0xf77b],

				//	[風景],
					[0xf343],
					[0xf34d],
					[0xf3bf],
					[0xf3c3],
					[0xf3c5,0xf3c6],
					[0xf3c8],
					[0xf698],
					[0xf6bb],
					[0xf7ed],
					[0xf7fc],
					[0xf481],
					[0xf457],
					[0xf463],
					[0xf699],
					[0xf342],
					[0xf3b6],
					[0xf645],
					[0xf441],

				//	[季節行事],
					[0xf34c],
					[0xf3c1],
					[0xf340],
					[0xf3b7,0xf3bb],
					[0xf6a2,0xf6a3],

				//	[ゲーム],
					[0xf344],
					[0xf472,0xf473],
					[0xf7b2],
					[0xf7be,0xf7c0],

				//	[メール],
					[0xf6fa],
					[0xf7ae],
					[0xf7d9],
					[0xf466],
					[0xf47c],
					[0xf475],
					[0xf486],

				//	[植物],
					[0xf367,0xf369],
					[0xf6a7],
					[0xf6bc,0xf6bd],
					[0xf6ec],
					[0xf7ea],
					[0xf482],
					[0xf487],
					[0xf44d]
				]
			];
		t.pallet_html = new Array();
		t.pallet_id = 0;
		t.pallet_container = document.getElementById('emojiau_pallet_container');
		var i, j, k, filename, n;
		for(i = 0; i < t.hex_range.length; i++){
			n = 1;
			t.pallet_html[i] = '<table class="emojiau" border="0" cellspacing="0" cellpadding="0">';
			for(k = 0; k < t.hex_range[i].length; k++){
				if(t.hex_range[i][k].length == 1){
					j = t.hex_range[i][k][0];
					var filename = j.toString(16);
					if(n % 16 == 1)
						t.pallet_html[i] += '<tr>';
					t.pallet_html[i] += '<td><p><img title="'+filename+'" src="img/png/' + filename + '.png" border="0" onclick="EmojiauDialog.insert(\''+filename+'.gif\');" onmouseover="this.style.border=\'solid 1px #33f\';" onmouseout="this.style.border=\'\';" /></p></td>';
					if(n % 16 == 0)
						t.pallet_html[i] += '</tr>';
					n++;
				}else{
					for(j = t.hex_range[i][k][0]; j <= t.hex_range[i][k][1]; j++,n++){
						var filename = j.toString(16);
						if(n % 16 == 1)
							t.pallet_html[i] += '<tr>';
						t.pallet_html[i] += '<td><p><img title="'+filename+'" src="img/png/' + filename + '.png" border="0" onclick="EmojiauDialog.insert(\''+filename+'.gif\');" onmouseover="this.style.border=\'solid 1px #33f\';" onmouseout="this.style.border=\'\';" /></p></td>';
						if(n % 16 == 0)
							t.pallet_html[i] += '</tr>';
					}
				}
			}
			t.pallet_html[i] += '</table>';
		}

		t.pallet_container.innerHTML = t.pallet_html[0];
	},
	
	prev_pallet : function() {
		var t = this;
		if(t.pallet_id == 0){
			t.pallet_id = t.hex_range.length - 1;
		}else{
			t.pallet_id--;
		}
		pallet_container = document.getElementById('emojiau_pallet_container');
		pallet_container.innerHTML = t.pallet_html[t.pallet_id];
	},
	
	next_pallet : function() {
		var t = this;
		if(t.pallet_id == t.hex_range.length - 1){
			t.pallet_id = 0;
		}else{
			t.pallet_id++;
		}
		pallet_container = document.getElementById('emojiau_pallet_container');
		pallet_container.innerHTML = t.pallet_html[t.pallet_id];
	},
	del:function(img, filename){
		clipboardData.setData("Text", filename.substr(0, 4));
		var t = this;
		img.src = img.src.indexOf("img/16px.gif") != -1 ? "img/" + filename : "img/16px.gif";
		pallet_container = document.getElementById('emojiau_pallet_container');
		t.pallet_html[t.pallet_id] = pallet_container.innerHTML;
	}
};