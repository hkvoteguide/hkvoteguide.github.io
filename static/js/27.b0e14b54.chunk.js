(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{152:function(t,e,n){"use strict";n.d(e,"j",function(){return c}),n.d(e,"k",function(){return u}),n.d(e,"f",function(){return l}),n.d(e,"b",function(){return s}),n.d(e,"g",function(){return d}),n.d(e,"c",function(){return h}),n.d(e,"d",function(){return p}),n.d(e,"m",function(){return f}),n.d(e,"a",function(){return b}),n.d(e,"l",function(){return m}),n.d(e,"i",function(){return g}),n.d(e,"e",function(){return y}),n.d(e,"o",function(){return v}),n.d(e,"h",function(){return _}),n.d(e,"n",function(){return w});var r=n(172),a=n(177),o=n.n(a),i=n(47),c=function(t){var e=_();return"/".concat(e,"/district/2019/tags/").concat(t)},u=function(t){var e=_();return"/".concat(e,"/district/2019/").concat(t)},l=function(t){var e=_();return"/".concat(e,"/district/2019/").concat(t)},s=function(t){var e="A";return Object.keys(r.a).forEach(function(n){r.a[n].zh_hk===t&&(e=n)}),e},d=function(t){var e={participatedOrdinary:0,participatedByElection:0,lastParticipated:{year:2019,type:"ordinary",votesDiff:0,votes:0,isWon:!1}},n=t.person.candidates||[];if(e.participatedByElection=n.filter(function(t){return"by-election"===t.election_type}).length,e.participatedOrdinary=n.filter(function(t){return"ordinary"===t.election_type}).length,n.length>0){var r=n.filter(function(t){return!(2019===t.year&&"ordinary"===t.election_type)})[0],a=r.year,o=r.constituency.candidates.find(function(e){return e.person.id===t.person.id&&e.year===a}).votes,i=r.constituency.candidates.filter(function(e){return e.person.id!==t.person.id&&e.year===a}).map(function(t){return t.votes}).reduce(function(t,e){return Math.max(t,e)},0);e.lastParticipated={year:r.year,isWon:r.is_won,votesDiff:o-i,votes:o,type:r.election_type}}return e},h=function(t){if(!t)return"uncertain";return{"\u6cdb\u6c11":"democracy","\u6c11\u4e3b":"democracy","\u5efa\u5236":"establishment","\u672c\u571f":"localist","\u5098\u5175":"localist","\u81ea\u6c7a":"localist","\u5176\u4ed6":"other","\u4e0d\u660e":"uncertain"}[t]||"uncertain"},p=function(t){if(!t)return"uncertain";for(var e={democracy:["\u6c11\u4e3b\u9ee8","\u516c\u6c11\u9ee8","\u9999\u6e2f\u6c11\u4e3b\u6c11\u751f\u5354\u9032\u6703","\u6c11\u5354","\u793e\u6703\u6c11\u4e3b\u9023\u7dda","\u652f\u806f\u6703","\u6c11\u4e3b\u52d5\u529b","\u8857\u574a\u5de5\u53cb\u670d\u52d9\u8655","\u8857\u5de5","\u5de5\u9ee8","\u8077\u5de5\u76df","\u65b0\u6c11\u4e3b\u540c\u76df","\u9999\u6e2f\u672c\u571f","\u7368\u7acb\u6c11\u4e3b\u6d3e"],establishment:["\u6c11\u4e3b\u5efa\u6e2f\u5354\u9032\u806f\u76df","\u6c11\u5efa\u806f","\u65b0\u754c\u793e\u5718\u806f\u6703","\u65b0\u793e\u806f","\u9999\u6e2f\u5de5\u6703\u806f\u5408\u6703","\u5de5\u806f\u6703","\u6e2f\u4e5d\u52de\u5de5\u793e\u5718\u806f\u6703","\u9999\u6e2f\u7d93\u6fdf\u6c11\u751f\u806f\u76df","\u897f\u4e5d\u65b0\u52d5\u529b","\u81ea\u7531\u9ee8","\u65b0\u6c11\u9ee8","\u65b0\u4e16\u7d00\u8ad6\u58c7"],localist:["\u9999\u6e2f\u773e\u5fd7","\u9752\u5e74\u65b0\u653f","\u672c\u571f\u6c11\u4e3b\u524d\u7dda","\u6771\u4e5d\u9f8d\u793e\u5340\u95dc\u6ce8\u7d44","\u5929\u6c34\u570d\u6c11\u751f\u95dc\u6ce8\u5e73\u53f0","\u6148\u96f2\u5c71\u5efa\u8a2d\u529b\u91cf","\u5c6f\u9580\u793e\u5340\u95dc\u6ce8\u7d44","\u9577\u6c99\u7063\u793e\u5340\u767c\u5c55\u529b\u91cf","\u793e\u5340\u7db2\u7d61\u806f\u76df","\u6c99\u7530\u793e\u5340\u7db2\u7d61","\u8343\u7063\u793e\u5340\u7db2\u7d61","\u5929\u6c34\u570d\u793e\u5340\u767c\u5c55\u7db2\u7d61","\u5c6f\u9580\u793e\u5340\u7db2\u7d61","\u8475\u9752\u9023\u7d50\u52d5\u529b","\u85cd\u7530\u793e\u5340\u7db2\u7d61","\u57d4\u5411\u6674\u5929","\u8343\u7063\u6c11\u751f\u52d5\u529b","\u5317\u5340\u52d5\u6e90","\u7dad\u591a\u5229\u4e9e\u793e\u5340\u5354\u6703"],other:["\u6c11\u4e3b\u601d\u8def","\u65b0\u601d\u7dad"]},n=Object.keys(e),r=0;r<n.length;r++){var a=n[r],o=!0,i=!1,c=void 0;try{for(var u,l=e[a][Symbol.iterator]();!(o=(u=l.next()).done);o=!0){var s=u.value;if(t.includes(s))return a}}catch(d){i=!0,c=d}finally{try{o||null==l.return||l.return()}finally{if(i)throw c}}}return"uncertain"},f=function(t){var e=t.name_en,n=t.name_zh,r=t.uuid,a=_();return"/".concat(a,"/profile/").concat(n||e,"/").concat(r)},b=function(t){return t.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,")},m=function(t,e){e||(e=window.location.href),t=t.replace(/[[\]]/g,"\\$&");var n=new RegExp("[?&]"+t+"(=([^&#]*)|&|#|$)").exec(e);return n?n[2]?decodeURIComponent(n[2].replace(/\+/g," ")):"":null},g=function(){return window.location.href},y=function(t){var e=[],n=t.filter(function(t){return"ordinary"===t.election_type&&"confirmed"===t.nominate_status&&-1===t.tags.findIndex(function(t){return"demo_status"===t.type&&"planb"===t.tag})});n.length>=3&&e.push("\u591a\u4eba\u6df7\u6230");var r=o.a.groupBy(n,function(t){return t.camp});return r["\u6c11\u4e3b"]&&r["\u6c11\u4e3b"].length>1&&e.push("\u6c11\u4e3b\u649e\u5340"),r["\u5efa\u5236"]&&r["\u5efa\u5236"].length>1&&e.push("\u5efa\u5236\u649e\u5340"),e},v=function(t,e){var n=window.location.pathname.match(/^\/([\w]{2})\//);return"en"===(n=n?n[1]:"zh")&&t?t:e},_=function(){return i.a.language||window.localStorage.i18nextLng||"zh"},w=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(!t)return t;var n=e?"_short_form":"",r={"\u6c11\u4e3b":"camp.democracy".concat(n),"\u5efa\u5236":"camp.establishment".concat(n),"\u5176\u4ed6":"camp.others".concat(n)};return r[t]?r[t]:t}},169:function(t,e,n){"use strict";n.d(e,"a",function(){return u});var r=n(35),a=n(36),o=n(147);function i(){var t=Object(r.a)(["\n  && {\n    margin-top: 8px;\n    display: flex;\n    width: 100%;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n  }\n"]);return i=function(){return t},t}function c(){var t=Object(r.a)(["\n  && {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    align-content: flex-start;\n    width: 100%;\n    margin: auto;\n  }\n"]);return c=function(){return t},t}e.b=Object(a.b)(o.a)(c());var u=Object(a.b)(o.a)(i())},172:function(t,e,n){"use strict";n.d(e,"a",function(){return r});var r={A:{zh_hk:"\u4e2d\u897f\u5340",en_us:"Central and Western",unelected_dc_seat:0},B:{zh_hk:"\u7063\u4ed4",en_us:"Wan Chai",unelected_dc_seat:0},C:{zh_hk:"\u6771\u5340",en_us:"Eastern",unelected_dc_seat:0},D:{zh_hk:"\u5357\u5340",en_us:"Southern",unelected_dc_seat:0},E:{zh_hk:"\u6cb9\u5c16\u65fa",en_us:"Yau Tsim Mong",unelected_dc_seat:0},F:{zh_hk:"\u6df1\u6c34\u57d7",en_us:"Sham Shui Po",unelected_dc_seat:0},G:{zh_hk:"\u4e5d\u9f8d\u57ce",en_us:"Kowloon City",unelected_dc_seat:0},H:{zh_hk:"\u9ec3\u5927\u4ed9",en_us:"Wong Tai Sin",unelected_dc_seat:0},J:{zh_hk:"\u89c0\u5858",en_us:"Kwun Tong",unelected_dc_seat:0},K:{zh_hk:"\u8343\u7063",en_us:"Tsuen Wan",unelected_dc_seat:2},L:{zh_hk:"\u5c6f\u9580",en_us:"Tuen Mun",unelected_dc_seat:1},M:{zh_hk:"\u5143\u6717",en_us:"Yuen Long",unelected_dc_seat:6},N:{zh_hk:"\u5317\u5340",en_us:"North",unelected_dc_seat:4},P:{zh_hk:"\u5927\u57d4",en_us:"Tai Po",unelected_dc_seat:2},Q:{zh_hk:"\u897f\u8ca2",en_us:"Sai Kung",unelected_dc_seat:2},R:{zh_hk:"\u6c99\u7530",en_us:"Sha Tin",unelected_dc_seat:1},S:{zh_hk:"\u8475\u9752",en_us:"Kwai Tsing",unelected_dc_seat:1},T:{zh_hk:"\u96e2\u5cf6",en_us:"Islands",unelected_dc_seat:8}}},176:function(t,e,n){"use strict";n.d(e,"b",function(){return d}),n.d(e,"c",function(){return h}),n.d(e,"a",function(){return p});var r=n(35),a=n(36),o=n(46),i=n(250),c=n(59);function u(){var t=Object(r.a)(["\n  color: ",";\n  font-weight: 500;\n"]);return u=function(){return t},t}function l(){var t=Object(r.a)(["\n  text-decoration: unset;\n  color: unset;\n  font-style: unset;\n  cursor: pointer;\n"]);return l=function(){return t},t}function s(){var t=Object(r.a)(["\n  text-decoration: unset;\n  color: black;\n  font-style: unset;\n  cursor: pointer;\n"]);return s=function(){return t},t}var d=Object(a.b)(i.a)(s()),h=Object(a.b)(o.b)(l()),p=Object(a.b)(d)(u(),c.a.main.primary)},250:function(t,e,n){"use strict";var r=n(6),a=n(18),o=n(0),i=n.n(o),c=(n(4),n(45)),u=n(149),l=n(148),s=n(190),d=n(166),h=n(251),p=i.a.forwardRef(function(t,e){var n=t.classes,o=t.className,l=t.color,p=void 0===l?"primary":l,f=t.component,b=void 0===f?"a":f,m=t.onBlur,g=t.onFocus,y=t.TypographyClasses,v=t.underline,_=void 0===v?"hover":v,w=t.variant,k=void 0===w?"inherit":w,O=Object(a.a)(t,["classes","className","color","component","onBlur","onFocus","TypographyClasses","underline","variant"]),j=Object(s.a)(),x=j.isFocusVisible,E=j.onBlurVisible,z=j.ref,S=i.a.useState(!1),B=S[0],T=S[1],N=Object(d.a)(e,z);return i.a.createElement(h.a,Object(r.a)({className:Object(c.a)(n.root,n["underline".concat(Object(u.a)(_))],o,B&&n.focusVisible,{button:n.button}[b]),classes:y,color:p,component:b,onBlur:function(t){B&&(E(),T(!1)),m&&m(t)},onFocus:function(t){x(t)&&T(!0),g&&g(t)},ref:N,variant:k},O))});e.a=Object(l.a)({root:{},underlineNone:{textDecoration:"none"},underlineHover:{textDecoration:"none","&:hover":{textDecoration:"underline"}},underlineAlways:{textDecoration:"underline"},button:{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle","-moz-appearance":"none","-webkit-appearance":"none","&::-moz-focus-inner":{borderStyle:"none"},"&$focusVisible":{outline:"auto"}},focusVisible:{}},{name:"MuiLink"})(p)},251:function(t,e,n){"use strict";var r=n(6),a=n(18),o=n(0),i=n.n(o),c=(n(4),n(45)),u=n(148),l=n(149),s={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p"},d=i.a.forwardRef(function(t,e){var n=t.align,o=void 0===n?"inherit":n,u=t.classes,d=t.className,h=t.color,p=void 0===h?"initial":h,f=t.component,b=t.display,m=void 0===b?"initial":b,g=t.gutterBottom,y=void 0!==g&&g,v=t.noWrap,_=void 0!==v&&v,w=t.paragraph,k=void 0!==w&&w,O=t.variant,j=void 0===O?"body1":O,x=t.variantMapping,E=void 0===x?s:x,z=Object(a.a)(t,["align","classes","className","color","component","display","gutterBottom","noWrap","paragraph","variant","variantMapping"]),S=f||(k?"p":E[j]||s[j])||"span";return i.a.createElement(S,Object(r.a)({className:Object(c.a)(u.root,d,"inherit"!==j&&u[j],"initial"!==p&&u["color".concat(Object(l.a)(p))],_&&u.noWrap,y&&u.gutterBottom,k&&u.paragraph,"inherit"!==o&&u["align".concat(Object(l.a)(o))],"initial"!==m&&u["display".concat(Object(l.a)(m))]),ref:e},z))});e.a=Object(u.a)(function(t){return{root:{margin:0},body2:t.typography.body2,body1:t.typography.body1,caption:t.typography.caption,button:t.typography.button,h1:t.typography.h1,h2:t.typography.h2,h3:t.typography.h3,h4:t.typography.h4,h5:t.typography.h5,h6:t.typography.h6,subtitle1:t.typography.subtitle1,subtitle2:t.typography.subtitle2,overline:t.typography.overline,srOnly:{position:"absolute",height:1,width:1,overflow:"hidden"},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right"},alignJustify:{textAlign:"justify"},noWrap:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},gutterBottom:{marginBottom:"0.35em"},paragraph:{marginBottom:16},colorInherit:{color:"inherit"},colorPrimary:{color:t.palette.primary.main},colorSecondary:{color:t.palette.secondary.main},colorTextPrimary:{color:t.palette.text.primary},colorTextSecondary:{color:t.palette.text.secondary},colorError:{color:t.palette.error.main},displayInline:{display:"inline"},displayBlock:{display:"block"}}},{name:"MuiTypography"})(d)},465:function(t,e,n){"use strict";n.d(e,"a",function(){return h});var r=n(35),a=n(0),o=n.n(a),i=n(251),c=n(60),u=n(36),l=n(59);function s(){var t=Object(r.a)(["\n  && {\n    a {\n      text-decoration: unset;\n      color: ",";\n      font-weight: 500;\n    }\n    a:hover {\n      text-decoration: underline;\n    }\n  }\n"]);return s=function(){return t},t}var d=u.b.div(s(),l.a.main.primary),h=function(t){var e=Object(c.b)().t;return o.a.createElement(d,null,o.a.createElement(i.a,{variant:"body2",gutterBottom:!0},e("disclaimer.segment.text1")),o.a.createElement(i.a,{variant:"body2"},o.a.createElement("span",{dangerouslySetInnerHTML:{__html:e("disclaimer.segment.source")}}),o.a.createElement("span",{dangerouslySetInnerHTML:{__html:e("disclaimer.segment.report")}})))}},5817:function(t,e,n){"use strict";var r=n(6),a=n(18),o=n(0),i=n.n(o),c=(n(4),n(45)),u=n(148),l=n(37),s=i.a.forwardRef(function(t,e){var n=t.absolute,o=void 0!==n&&n,u=t.classes,l=t.className,s=t.component,d=void 0===s?"hr":s,h=t.light,p=void 0!==h&&h,f=t.orientation,b=void 0===f?"horizontal":f,m=t.role,g=void 0===m?"hr"!==d?"separator":void 0:m,y=t.variant,v=void 0===y?"fullWidth":y,_=Object(a.a)(t,["absolute","classes","className","component","light","orientation","role","variant"]);return i.a.createElement(d,Object(r.a)({className:Object(c.a)(u.root,l,"fullWidth"!==v&&u[v],o&&u.absolute,p&&u.light,{vertical:u.vertical}[b]),role:g,ref:e},_))});e.a=Object(u.a)(function(t){return{root:{height:1,margin:0,border:"none",flexShrink:0,backgroundColor:t.palette.divider},absolute:{position:"absolute",bottom:0,left:0,width:"100%"},inset:{marginLeft:72},light:{backgroundColor:Object(l.c)(t.palette.divider,.08)},middle:{marginLeft:t.spacing(2),marginRight:t.spacing(2)},vertical:{height:"100%",width:1}}},{name:"MuiDivider"})(s)},5912:function(t,e,n){"use strict";n.r(e);var r=n(35),a=n(0),o=n.n(a),i=n(147),c=n(36),u=n(5817),l=n(176),s=n(169),d=n(26),h=n(465),p=n(60),f=n(152);function b(){var t=Object(r.a)(["\n  && {\n    margin: 8px 16px 8px 0;\n    word-break: keep-all;\n    overflow: hidden;\n  }\n"]);return b=function(){return t},t}function m(){var t=Object(r.a)(["\n  && {\n    color: rgba(0, 0, 0, 0.87);\n  }\n"]);return m=function(){return t},t}function g(){var t=Object(r.a)(["\n  && {\n    margin: 16px 0;\n  }\n"]);return g=function(){return t},t}function y(){var t=Object(r.a)(["\n  && {\n    width: 100%;\n    max-width: 1024px;\n    margin: auto;\n    padding: 16px;\n  }\n"]);return y=function(){return t},t}var v=Object(c.b)(i.a)(y()),_=Object(c.b)(u.a)(g()),w=Object(c.b)(l.b)(m()),k=Object(c.b)(i.a)(b());e.default=Object(d.g)(function(t){var e=Object(p.b)().t,n=Object(f.h)();return"undefined"!==typeof window.FB&&o.a.useEffect(function(){try{window.FB.XFBML.parse()}catch(t){}},[]),o.a.createElement(o.a.Fragment,null,o.a.createElement(v,null,o.a.createElement(_,null),o.a.createElement(h.a,null),o.a.createElement(_,null),o.a.createElement(s.b,null,o.a.createElement(k,null,o.a.createElement(l.a,{onClick:function(){return t.history.push("/".concat(n,"/about-us"))}},e("about.support_us"))),o.a.createElement(k,null,o.a.createElement(w,{target:"_blank",href:"https://www.facebook.com/g0vhk.io"},"g0vhk.io")),o.a.createElement(k,null,o.a.createElement(w,{onClick:function(){return t.history.push("/".concat(n,"/disclaimer"))}},e("about.camp"))),o.a.createElement(k,null,o.a.createElement(w,{target:"_blank",href:"https://forms.gle/irD6tEznWPNda6w59"},e("about.feedback"))),o.a.createElement(k,null,o.a.createElement(w,{target:"_blank",href:"https://github.com/cswbrian/district-councils-dashboard"},"GitHub")),o.a.createElement(k,null,o.a.createElement(w,{target:"_blank",href:"https://hkfactcheck.io/"},e("thirdParty.dfo"))),o.a.createElement(k,null,o.a.createElement("div",{className:"fb-like","data-href":"https://g0vhk.io","data-width":"","data-layout":"button","data-action":"like","data-size":"small","data-show-faces":"false","data-share":"false"}),"\xa0\xa0\xa0",o.a.createElement("div",{className:"fb-share-button","data-href":"https://dc2019.g0vhk.io","data-layout":"button_count","data-size":"small"},o.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fvote4.hk%2F&src=sdkpreparse",className:"fb-xfbml-parse-ignore"},"Share"))))))})}}]);
//# sourceMappingURL=27.b0e14b54.chunk.js.map