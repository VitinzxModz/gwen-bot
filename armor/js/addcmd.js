const _0x2f95d2=_0x5381;function _0x37d2(){const _0x3a7c6e=['stringify','512mbLlao','writeFileSync','28037930tMObIz','keys','21126YFsiZx','push','./settings/media/comandos.json','3873085oxXOQs','842784HeyeLD','152379yjPePk','forEach','959833nwrogT','exports','readFileSync','374304zaXEUj','comandos','splice','2cIcqke','groupId','parse','572LiFLiZ'];_0x37d2=function(){return _0x3a7c6e;};return _0x37d2();}(function(_0x2909d7,_0x3ba4c7){const _0xd2fe47=_0x5381,_0x1ba45d=_0x2909d7();while(!![]){try{const _0x3d6ddb=-parseInt(_0xd2fe47(0x161))/0x1*(parseInt(_0xd2fe47(0x167))/0x2)+parseInt(_0xd2fe47(0x15a))/0x3*(-parseInt(_0xd2fe47(0x16a))/0x4)+parseInt(_0xd2fe47(0x15d))/0x5+parseInt(_0xd2fe47(0x15e))/0x6+-parseInt(_0xd2fe47(0x164))/0x7+-parseInt(_0xd2fe47(0x16c))/0x8*(parseInt(_0xd2fe47(0x15f))/0x9)+parseInt(_0xd2fe47(0x16e))/0xa;if(_0x3d6ddb===_0x3ba4c7)break;else _0x1ba45d['push'](_0x1ba45d['shift']());}catch(_0x1b5841){_0x1ba45d['push'](_0x1ba45d['shift']());}}}(_0x37d2,0x96243));function _0x5381(_0x11a17b,_0x44750d){const _0x37d21e=_0x37d2();return _0x5381=function(_0x53814b,_0x2b7861){_0x53814b=_0x53814b-0x159;let _0x11c618=_0x37d21e[_0x53814b];return _0x11c618;},_0x5381(_0x11a17b,_0x44750d);}const fs=require('fs'),comandos=JSON[_0x2f95d2(0x169)](fs[_0x2f95d2(0x163)](_0x2f95d2(0x15c))),addComandosId=_0x29811e=>{const _0x18fbd9=_0x2f95d2,_0x92c201={'groupId':_0x29811e,'comandos':[]};comandos['push'](_0x92c201),fs[_0x18fbd9(0x16d)](_0x18fbd9(0x15c),JSON[_0x18fbd9(0x16b)](comandos));},getComandos=_0x1f0b11=>{const _0x4c15c0=_0x2f95d2;let _0x438606=![];Object['keys'](comandos)[_0x4c15c0(0x160)](_0x4c0813=>{comandos[_0x4c0813]['groupId']===_0x1f0b11&&(_0x438606=_0x4c0813);});if(_0x438606!==![])return comandos[_0x438606][_0x4c15c0(0x168)];},addComandos=(_0x296434,_0x53a91e)=>{const _0x9f127a=_0x2f95d2;let _0x5514a8=![];Object['keys'](comandos)[_0x9f127a(0x160)](_0x3ad7db=>{comandos[_0x3ad7db]['groupId']===_0x296434&&(_0x5514a8=_0x3ad7db);}),_0x5514a8!==![]&&(comandos[_0x5514a8][_0x9f127a(0x165)][_0x9f127a(0x15b)](_0x53a91e),fs[_0x9f127a(0x16d)](_0x9f127a(0x15c),JSON[_0x9f127a(0x16b)](comandos)));},deleteComandos=(_0x7febc8,_0x179fb9)=>{const _0x4c1c11=_0x2f95d2;let _0x522c1d=![];Object[_0x4c1c11(0x159)](comandos)[_0x4c1c11(0x160)](_0x2203d4=>{comandos[_0x2203d4]['groupId']===_0x7febc8&&(_0x522c1d=_0x2203d4);}),_0x522c1d!==![]&&(comandos[_0x522c1d]['comandos'][_0x4c1c11(0x166)](_0x179fb9,0x1),fs[_0x4c1c11(0x16d)](_0x4c1c11(0x15c),JSON[_0x4c1c11(0x16b)](comandos)));},getComandoBlock=_0x3535db=>{const _0x25a62b=_0x2f95d2;let _0x37066b=![];Object[_0x25a62b(0x159)](comandos)[_0x25a62b(0x160)](_0x2d68f5=>{comandos[_0x2d68f5]['groupId']===_0x3535db&&(_0x37066b=_0x2d68f5);});if(_0x37066b!==![])return comandos[_0x37066b]['comandos'];};module[_0x2f95d2(0x162)]={'addComandosId':addComandosId,'deleteComandos':deleteComandos,'getComandoBlock':getComandoBlock,'getComandos':getComandos,'addComandos':addComandos};