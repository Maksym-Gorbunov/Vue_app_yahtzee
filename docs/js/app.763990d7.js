(function(e){function t(t){for(var n,r,a=t[0],c=t[1],l=t[2],d=0,m=[];d<a.length;d++)r=a[d],o[r]&&m.push(o[r][0]),o[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);u&&u(t);while(m.length)m.shift()();return s.push.apply(s,l||[]),i()}function i(){for(var e,t=0;t<s.length;t++){for(var i=s[t],n=!0,a=1;a<i.length;a++){var c=i[a];0!==o[c]&&(n=!1)}n&&(s.splice(t--,1),e=r(r.s=i[0]))}return e}var n={},o={app:0},s=[];function r(t){if(n[t])return n[t].exports;var i=n[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=e,r.c=n,r.d=function(e,t,i){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(i,n,function(t){return e[t]}.bind(null,n));return i},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/production-sub-path/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var u=c;s.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"034f":function(e,t,i){"use strict";var n=i("64a9"),o=i.n(n);o.a},1:function(e,t){},"1e17":function(e,t,i){},2:function(e,t){},"2a84":function(e,t,i){e.exports=i.p+"img/4dice.ca775ae8.svg"},3:function(e,t){},3555:function(e,t,i){e.exports=i.p+"img/1dice.9ab90e15.svg"},4:function(e,t){},"56d7":function(e,t,i){"use strict";i.r(t);i("cadf"),i("551c"),i("f751"),i("097d");var n=i("2b0e"),o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"app"}},[i("div",{staticClass:"modal fade",attrs:{id:"modal",role:"dialog"}},[i("div",{staticClass:"modal-dialog"},[i("div",{staticClass:"modal-content"},[e._m(0),i("div",{staticClass:"modal-body"},[i("p",[e._v(" Result: "+e._s(this.items[e.items.length-1].poings)+" ")])]),i("div",{staticClass:"modal-footer"},[i("button",{staticClass:"btn btn-default",attrs:{type:"reset",id:"play_again_btn"},on:{click:e.playAgain}},[e._v("Play Again")])])])])]),i("div",{attrs:{id:"left"}},[e._m(1),i("div",{attrs:{id:"left_main"}},[e._l(e.dices,function(t){return i("div",{key:t.index},[i("Dice",{attrs:{dice:t},on:{"dice-click":e.diceClick}})],1)}),i("MyCursor"),i("button",{staticClass:"btn btn-info",attrs:{id:"roll_btn"},on:{click:e.roll}},[e._v("Roll Dice (space)")])],2)]),i("div",{attrs:{id:"right"}},[i("Table",{attrs:{items:e.items,play:this.play},on:{"table-click":e.tableClick}}),e._m(2)],1)])},s=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"modal-header"},[i("h4",{staticClass:"modal-title"},[e._v("Yahtzee")])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"left_top"}},[i("h1",[e._v("Yahtzee")])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"info"}},[i("h5",[e._v("Maksym Gorbunov")])])}],r=i("cebc"),a=(i("55dd"),i("5d73")),c=i.n(a),l=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"table-responsive"},[i("table",{staticClass:"table table-dark table-bordered table-striped",attrs:{id:"my_table"}},[e._m(0),e._l(e.items,function(t){return i("tbody",{key:t.index},[i("TableItem",{attrs:{item:t,play:e.play},on:{"table-click":function(i){return e.$emit("table-click",t)}}})],1)})],2)])},u=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("thead",[i("tr",[i("th",{attrs:{scope:"col"}},[e._v("combinations")]),i("th",{attrs:{scope:"col"}},[e._v("poings")]),i("th",{attrs:{scope:"col"}},[e._v("max")]),i("th",{attrs:{scope:"col"}},[e._v("story")])])])}],d=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("tr",[i("td",{class:{total:"total score"===e.item.combination,sum:"sum"===e.item.combination||"bonus"===e.item.combination}},[e._v("\n    "+e._s(e.item.combination)+" \n  ")]),i("td",e._b({staticClass:"text_center",class:{total:"total score"===e.item.combination,sum:"sum"===e.item.combination||"bonus"===e.item.combination,used:e.item.used,clickable:e.item.clickable,possible:e.play&&!e.item.used&&"total score"!==e.item.combination&&"sum"!==e.item.combination&&"bonus"!==e.item.combination},on:{click:function(t){return e.$emit("table-click",e.item)}}},"td",e.showPoings(),!1),[e._v("\n    "+e._s(e.currentPoings)+"\n  ")]),i("td",{staticClass:"text_center",class:{total:"total score"===e.item.combination,sum:"sum"===e.item.combination||"bonus"===e.item.combination}},[e._v("\n    "+e._s(e.item.poings)+"/"+e._s(e.item.max)+"\n  ")]),i("td",{class:{total:"total score"===e.item.combination,sum:"sum"===e.item.combination||"bonus"===e.item.combination}},[e._v("\n    "+e._s(e.item.story)+"\n  ")])])},m=[],f={name:"TableItem",props:["item","play"],data:function(){return{currentPoings:0}},methods:{showPoings:function(){0==this.item.poings?this.currentPoings=this.item.possible:this.currentPoings=this.item.poings}},created:function(){this.showPoings()}},h=f,b=(i("ab8a"),i("2877")),p=Object(b["a"])(h,d,m,!1,null,"88dd0ec6",null),y=p.exports,v={name:"Table",props:["items","play"],components:{TableItem:y}},g=v,_=(i("83a4"),Object(b["a"])(g,l,u,!1,null,"5086cf35",null)),k=_.exports,w=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{on:{click:function(t){return e.$emit("dice-click",e.dice)}}},[i("img",{attrs:{src:e.getImgUrl(this.dice.value),alt:this.dice.value+".svg",id:"dice"+this.dice.id}})])},x=[],C=i("2f62"),E=i("3555"),O=i.n(E),P=i("fd2c"),B=i.n(P),M=i("dba1"),I=i.n(M),j=i("2a84"),D=i.n(j),z=i("a2ab"),A=i.n(z),S=i("bbc5"),T=i.n(S),H={name:"Dice",props:["dice","id"],data:function(){return{clicked_dice:this.dice.value}},methods:{getImgUrl:function(e){switch(e){case 1:return O.a;case 2:return B.a;case 3:return I.a;case 4:return D.a;case 5:return A.a;case 6:return T.a;default:return}},test:function(){return this.dice.value},bindDiceWidth:function(){var e=document.getElementById("dice"+this.dice.id),t=document.getElementById("left");e.width=t.clientWidth/12,e.height=t.clientWidth/12,$(window).resize(function(i){e.width=t.clientWidth/12,e.height=t.clientWidth/12})}},computed:Object(C["b"])(["allTodos"]),mounted:function(){var e=document.getElementById("dice"+this.dice.id),t=this.dice.id-1,i=[t,e];this.$store.commit("setElement",i);document.getElementById("left");this.bindDiceWidth()}},W=H,K=(i("e6fc"),Object(b["a"])(W,w,x,!1,null,"ff932fe2",null)),U=K.exports,J=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},q=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",{attrs:{id:"my_cursor"}})])}],L={name:"MyCursor",methods:{},computed:Object(C["b"])(["dices"])},R=L,V=(i("cf85"),Object(b["a"])(R,J,q,!1,null,"aa9f0828",null)),Y=V.exports,G=(i("1c46"),i("5118")),Q={value:"App",components:{Table:k,Dice:U,MyCursor:Y},data:function(){return{play:!1,game:!1,round:0,roll_count:0,rollBtn:"",sum_counter:0,bonus_for_sum:35,bonus_for_sum_required:63,bonus_for_sum_allowed:!0,cursor:"",current:"",space_btn:!0,pressed:!1,cursor_top_set:!1}},methods:{keyboard:function(){var e=this,t=32,i=37,n=39,o=38,s=40;$("body").bind("keydown",function(r){switch(r.keyCode){case t:e.space_btn&&!e.pressed&&(e.pressed=!0,e.rollBtn.classList.add("btn_active"),Object(G["setTimeout"])(function(){e.rollBtn.classList.remove("btn_active")},150),e.rollBtn.click());break;case i:e.leftArrow(e);break;case n:e.rightArrow(e);break;case o:e.uppArrow(e);break;case s:e.downArrow(e);break;default:break}})},keyUnpressed:function(){var e=this,t=32;$("body").bind("keyup",function(i){i.keyCode===t&&(e.pressed=!1)})},uppArrow:function(e){"home"===e.current.place&&e.diceClick(e.current)},downArrow:function(e){"board"===e.current.place&&e.diceClick(e.current)},rightArrow:function(e){switch(e.current.id){case 1:e.current=e.dices[1],e.cursor.style.left=e.current.element.style.left;break;case 2:e.current=e.dices[2],e.cursor.style.left=e.current.element.style.left;break;case 3:e.current=e.dices[3],e.cursor.style.left=e.current.element.style.left;break;case 4:e.current=e.dices[4],e.cursor.style.left=e.current.element.style.left;break;case 5:break;default:break}},leftArrow:function(e){switch(e.current.id){case 1:break;case 2:e.current=e.dices[0],e.cursor.style.left=e.current.element.style.left;break;case 3:e.current=e.dices[1],e.cursor.style.left=e.current.element.style.left;break;case 4:e.current=e.dices[2],e.cursor.style.left=e.current.element.style.left;break;case 5:e.current=e.dices[3],e.cursor.style.left=e.current.element.style.left;break;default:break}},createCursor:function(){this.cursor=document.getElementById("my_cursor"),this.cursor.style.display="block",this.bindCursorWidth()},playAgain:function(){window.location.reload(!0)},roll:function(){if(this.play=!0,0==this.roll_count){this.game=!0;for(var e=0;e<5;e++)this.dices[e].place="board";this.total_dices_on_board=5}this.createCursor(),this.randomize(),this.mixDicePosition(),this.roll_count++,this.matchCombinations(),this.roll_count>200&&(this.rollBtn.disabled=!0,this.space_btn=!1,this.roll_count=0)},tableClick:function(e){this.game&&e.clickable&&!e.used&&(e.poings=e.possible,this.total(e.poings),"ones"!=e.combination&&"twos"!=e.combination&&"threes"!=e.combination&&"fours"!=e.combination&&"fives"!=e.combination&&"sixes"!=e.combination||this.sum(e.poings),this.round++,e.used=!0,this.startPosition(),this.resetDiceValue(),this.roll_count=0,this.clearPoings(),this.total_dices_on_board=0,this.game=!1,this.rollBtn.disabled=!1,this.cursor.style.display="none",this.cursor.style.left=this.dices[0].element.style.left,this.current=this.dices[0],this.space_btn=!0,this.round>=13&&(console.log("finish"),$("#modal").modal({backdrop:"static",keyboard:!1},"show"),$("#left").css({filter:"blur(2px)"}),$("#right").css({filter:"blur(2px)"})))},diceClick:function(e){this.game&&(this.current=e,this.cursor.style.left=e.element.style.left,"home"==e.place?(e.element.style.top=e.top_board,e.element.style.transform="rotate("+e.rotated+"deg)",e.place="board",this.total_dices_on_board++):(e.top_board=e.element.style.top,e.element.style.top=e.top_home,e.element.style.transform="rotate(0deg)",e.place="home",this.total_dices_on_board--),this.boardEmpty()?(this.rollBtn.disabled=!0,this.space_btn=!1):(this.rollBtn.disabled=!1,this.space_btn=!0))},boardEmpty:function(){var e=!0,t=!1,i=void 0;try{for(var n,o=c()(this.dices);!(e=(n=o.next()).done);e=!0){var s=n.value;if("board"===s.place)return!1}}catch(r){t=!0,i=r}finally{try{e||null==o.return||o.return()}finally{if(t)throw i}}return!0},sum:function(e){this.items[6].poings+=e,this.items[6].poings>this.bonus_for_sum_required&&this.bonus_for_sum_allowed&&(this.items[7].poings+=this.bonus_for_sum,this.items[this.items.length-1].poings+=this.bonus_for_sum,this.bonus_for_sum_allowed=!1)},total:function(e){this.items[this.items.length-1].poings+=e},resetDiceValue:function(){for(var e=0;e<5;e++)this.dices[e].value=e+1},matchCombinations:function(){this.clearPoings();var e=[],t=!0,i=!1,n=void 0;try{for(var o,s=c()(this.dices);!(t=(o=s.next()).done);t=!0){var r=o.value;e.push(r.value)}}catch(b){i=!0,n=b}finally{try{t||null==s.return||s.return()}finally{if(i)throw n}}var a=this.countHowManyOfEachDice(e),l=!0,u=!1,d=void 0;try{for(var m,f=c()(this.items);!(l=(m=f.next()).done);l=!0){var h=m.value;switch(h.combination){case"ones":h.possible=a[0];break;case"twos":h.possible=2*a[1];break;case"threes":h.possible=3*a[2];break;case"fours":h.possible=4*a[3];break;case"fives":h.possible=5*a[4];break;case"sixes":h.possible=6*a[5];break;case"three of kind":this.threeOfKind(a,e,h);break;case"four of kind":this.fourOfKind(a,e,h);break;case"full house":this.fullHouse(a,h);break;case"small straight":this.smallStraight(e,h);break;case"large straight":this.largeStraight(e,h);break;case"chance":this.chance(e,h);break;case"yahtzee":this.yahtzee(e,h);break;default:break}}}catch(b){u=!0,d=b}finally{try{l||null==f.return||f.return()}finally{if(u)throw d}}},yahtzee:function(e,t){for(var i=!0,n=0;n<4;n++)e[n]!=e[n+1]&&(i=!1);i&&(t.possible=50)},chance:function(e,t){var i=0,n=!0,o=!1,s=void 0;try{for(var r,a=c()(e);!(n=(r=a.next()).done);n=!0){var l=r.value;i+=l}}catch(u){o=!0,s=u}finally{try{n||null==a.return||a.return()}finally{if(o)throw s}}t.possible=i},smallStraight:function(e,t){var i=e.slice(0),n=i;n.sort();for(var o=!0,s=!0,r=0;r<3;r++)n[r]!=n[r+1]-1&&(o=!1);for(var a=1;a<4;a++)n[a]!=n[a+1]-1&&(s=!1);(o||s)&&(t.possible=30)},largeStraight:function(e,t){var i=e.slice(0),n=i;n.sort();for(var o=!0,s=0;s<4;s++)n[s]!=n[s+1]-1&&(o=!1);o&&(t.possible=40)},fullHouse:function(e,t){var i=!1,n=!1,o=!0,s=!1,r=void 0;try{for(var a,l=c()(e);!(o=(a=l.next()).done);o=!0){var u=a.value;2==u&&(n=!0),3==u&&(i=!0)}}catch(d){s=!0,r=d}finally{try{o||null==l.return||l.return()}finally{if(s)throw r}}n&&i&&(t.possible=25)},fourOfKind:function(e,t,i){var n=!0,o=!1,s=void 0;try{for(var r,a=c()(e);!(n=(r=a.next()).done);n=!0){var l=r.value;l>=4&&(i.possible=t.reduce(function(e,t){return e+t},0))}}catch(u){o=!0,s=u}finally{try{n||null==a.return||a.return()}finally{if(o)throw s}}},threeOfKind:function(e,t,i){var n=!0,o=!1,s=void 0;try{for(var r,a=c()(e);!(n=(r=a.next()).done);n=!0){var l=r.value;l>=3&&(i.possible=t.reduce(function(e,t){return e+t},0))}}catch(u){o=!0,s=u}finally{try{n||null==a.return||a.return()}finally{if(o)throw s}}},countHowManyOfEachDice:function(e){for(var t=[],i=function(i){t.push(e.filter(function(e){return e===i+1}).length)},n=0;n<6;n++)i(n);return t},clearPoings:function(){var e=!0,t=!1,i=void 0;try{for(var n,o=c()(this.items);!(e=(n=o.next()).done);e=!0){var s=n.value;s.possible=0}}catch(r){t=!0,i=r}finally{try{e||null==o.return||o.return()}finally{if(t)throw i}}},test:function(){this.dices[0].value=3,this.dices[1].value=3,this.dices[2].value=3,this.dices[3].value=3,this.dices[4].value=3},randomize:function(){var e=!0,t=!1,i=void 0;try{for(var n,o=c()(this.dices);!(e=(n=o.next()).done);e=!0){var s=n.value;"board"==s.place&&(s.value=Math.floor(6*Math.random())+1)}}catch(r){t=!0,i=r}finally{try{e||null==o.return||o.return()}finally{if(t)throw i}}},mixDicePosition:function(){for(var e=0;e<5;e++)"board"==this.dices[e].place&&(this.dices[e].element.style.top=35-Math.floor(20*Math.random())+1+"%",this.dices[e].rotated=Math.floor(180*Math.random()),this.dices[e].element.style.transform="rotate("+this.dices[e].rotated+"deg)")},startPosition:function(){for(var e=0;e<5;e++)this.dices[e].element.style.top=this.dices[e].top_home,this.dices[e].element.style.left=17*(e+1)+"%",this.dices[e].element.style.transform="rotate(0deg)"},initializeHtmlDices:function(){for(var e=1;e<=5;e++)this.dices[e-1].element=document.getElementById("dice".concat(e))},bindCursorWidth:function(){var e=this;this.cursor.style.width=e.dices[0].element.clientWidth+"px",$(window).resize(function(t){var i=document.getElementById("my_cursor");i.style.width=e.dices[0].element.clientWidth+"px"})},setInfoSize:function(){var e=document.getElementById("right").clientHeight,t=document.getElementById("my_table").clientHeight,i=document.getElementById("info").clientHeight,n=document.getElementById("info");console.log("right "+e),console.log("table "+t),console.log("info "+i);var o=e-t-2;console.log("height "+o),n.style.height=o+"px",console.log("info "+i)}},created:function(){this.$store.commit("initDices")},mounted:function(){this.rollBtn=document.getElementById("roll_btn"),this.$store.commit("sendHome"),this.keyboard(),this.keyUnpressed(),this.current=this.dices[0],this.setInfoSize()},computed:Object(r["a"])({},Object(C["b"])(["dices","items","my_cursor"]))},F=Q,N=(i("034f"),Object(b["a"])(F,o,s,!1,null,null,null)),X=N.exports,Z={dices:[{id:1,value:0,element:"",place:"home",top_home:"65%",top_board:"",rotated:""},{id:2,value:0,element:"",place:"home",top_home:"65%",top_board:"",rotated:""},{id:3,value:0,element:"",place:"home",top_home:"65%",top_board:"",rotated:""},{id:4,value:0,element:"",place:"home",top_home:"65%",top_board:"",rotated:""},{id:5,value:0,element:"",place:"home",top_home:"65%",top_board:"",rotated:""}],items:[{possible:0,combination:"ones",poings:0,max:5,story:"",used:!1,clickable:!0},{possible:0,combination:"twos",poings:0,max:10,story:"",used:!1,clickable:!0},{possible:0,combination:"threes",poings:0,max:15,story:"",used:!1,clickable:!0},{possible:0,combination:"fours",poings:0,max:20,story:"",used:!1,clickable:!0},{possible:0,combination:"fives",poings:0,max:25,story:"",used:!1,clickable:!0},{possible:0,combination:"sixes",poings:0,max:30,story:"",used:!1,clickable:!0},{possible:0,combination:"sum",poings:0,max:105,story:"",used:!1,clickable:!1},{possible:0,combination:"bonus",poings:0,max:35,story:"",used:!1,clickable:!1},{possible:0,combination:"three of kind",poings:0,max:30,story:"",used:!1,clickable:!0},{possible:0,combination:"four of kind",poings:0,max:30,story:"",used:!1,clickable:!0},{possible:0,combination:"full house",poings:0,max:25,story:"",used:!1,clickable:!0},{possible:0,combination:"small straight",poings:0,max:30,story:"",used:!1,clickable:!0},{possible:0,combination:"large straight",poings:0,max:40,story:"",used:!1,clickable:!0},{possible:0,combination:"chance",poings:0,max:30,story:"",used:!1,clickable:!0},{possible:0,combination:"yahtzee",poings:0,max:50,story:"",used:!1,clickable:!0},{possible:0,combination:"total score",poings:0,max:375,story:"",used:!1,clickable:!1}]},ee={dices:function(e){return e.dices},items:function(e){return e.items}},te={},ie={sendHome:function(e){for(var t=0;t<e.dices.length;t++)e.dices[t].element.style.top=e.dices[t].top_home,e.dices[t].element.style.left=17*(t+1)+"%",e.dices[t].element.style.transform="rotate(0deg)"},initDices:function(e){for(var t=0;t<e.dices.length;t++)e.dices[t].value=t+1,e.dices[t].element=document.getElementById("dice"+t+1)},setElement:function(e,t){e.dices[t[0]].element=t[1]},setCursorElement:function(e,t){e.cursor.element=t},mixDicePosition:function(e){for(var t=0;t<5;t++)"board"==e.dices[t].place&&(e.dices[t].element.style.top=35-Math.floor(20*Math.random())+1+"%",e.dices[t].rotated=Math.floor(180*Math.random()),e.dices[t].element.style.transform="rotate("+e.dices[t].rotated+"deg)")},setPlace:function(e,t){var i=!0,n=!1,o=void 0;try{for(var s,r=c()(e.dices);!(i=(s=r.next()).done);i=!0){var a=s.value;a.place=t}}catch(l){n=!0,o=l}finally{try{i||null==r.return||r.return()}finally{if(n)throw o}}},randomize:function(e){var t=!0,i=!1,n=void 0;try{for(var o,s=c()(e.dices);!(t=(o=s.next()).done);t=!0){var r=o.value;"board"===r.place&&(r.value=Math.floor(6*Math.random())+1)}}catch(a){i=!0,n=a}finally{try{t||null==s.return||s.return()}finally{if(i)throw n}}}},ne={state:Z,getters:ee,actions:te,mutations:ie};n["a"].use(C["a"]);var oe=new C["a"].Store({modules:{dices:ne}});i("4989"),i("ab8b");window.$=i("ddad"),window.JQuery=i("ddad"),n["a"].config.productionTip=!1,new n["a"]({store:oe,render:function(e){return e(X)}}).$mount("#app")},"64a9":function(e,t,i){},"81a7":function(e,t,i){},"83a4":function(e,t,i){"use strict";var n=i("1e17"),o=i.n(n);o.a},a2ab:function(e,t,i){e.exports=i.p+"img/5dice.5a4475d8.svg"},ab8a:function(e,t,i){"use strict";var n=i("81a7"),o=i.n(n);o.a},bbc5:function(e,t,i){e.exports=i.p+"img/6dice.34733227.svg"},cf85:function(e,t,i){"use strict";var n=i("ff5c"),o=i.n(n);o.a},dba1:function(e,t,i){e.exports=i.p+"img/3dice.e2b5ec83.svg"},e6fc:function(e,t,i){"use strict";var n=i("ef09"),o=i.n(n);o.a},ef09:function(e,t,i){},fd2c:function(e,t,i){e.exports=i.p+"img/2dice.e328f73d.svg"},ff5c:function(e,t,i){}});
//# sourceMappingURL=app.763990d7.js.map