(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,i){e.exports=i(19)},17:function(e,t,i){},18:function(e,t,i){},19:function(e,t,i){"use strict";i.r(t);var n=i(0),a=i.n(n),r=i(10),l=i.n(r),o=(i(17),i(2)),s=i(3),c=i(5),u=i(4),d=i(6),h=i(1),f=i(8),g=function(e){function t(e){var i;return Object(o.a)(this,t),(i=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleClick=i.props.action.bind(Object(h.a)(Object(h.a)(i))),i}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return a.a.createElement("button",{onClick:this.handleClick},"Hightlight step ",this.props.step)}}]),t}(a.a.Component),m=function(e){function t(e){var i;return Object(o.a)(this,t),(i=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={step:e.step},i.handleClick=i.props.action.bind(Object(h.a)(Object(h.a)(i))),i}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return a.a.createElement("button",{onClick:this.handleClick},"apply next step")}}]),t}(a.a.Component),v=function(e){function t(e){var i;return Object(o.a)(this,t),(i=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleClick=i.props.action.bind(Object(h.a)(Object(h.a)(i))),i}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return a.a.createElement("button",{onClick:this.handleClick},"Auto play >>")}}]),t}(a.a.Component),p=function(e){function t(e,i){var n;return Object(o.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e,i))).formatItems=n.formatItems.bind(Object(h.a)(Object(h.a)(n))),n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"formatItems",value:function(e){return a.a.createElement("li",{key:e.key},e.text)}},{key:"render",value:function(){var e=this.props.items.map(this.formatItems);return a.a.createElement("ul",{className:"theList"},e)}}]),t}(a.a.Component),y=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.items;return a.a.createElement("div",{className:"todoListMain"},a.a.createElement(p,{items:e,key:"logItems"}))}}]),t}(a.a.Component),b=i(7),w=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"exclude",value:function(e,t,i){var n="";if(t.on){var a=t.facets.filter(function(t){return t.id===e.id})[0];a&&(a.cannotBe===i&&(n+=" cannotBe"),a.mustBe===i&&(n+=" mustBe"),a.exclude===i&&(n+=" exclude")),t.hiddenCells.includes(e.id)&&!t.digits.includes(i)&&(n+=" exclude"),t.hiddenCells.includes(e.id)&&t.digits.includes(i)&&(n+=" keep"),t.ruleOut.includes(e.id)&&t.digits.includes(i)&&(n+=" exclude"),t.keep.includes(e.id)&&t.digits.includes(i)&&(n+=" keep")}return n}},{key:"render",value:function(){var e=this,t=this.props,i=t.cell,n=t.possibilities,r=t.highlight;return a.a.createElement("div",{className:"possibilities"},n.map(function(t){return a.a.createElement("span",{className:"".concat(e.exclude(i,r,t)),key:i.id+"-"+t},t)}))}}]),t}(a.a.Component),C=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"isHighlighted",value:function(e,t){var i="";if(t.on){var n=t.facets.filter(function(t){return t.id===e.id})[0];n&&(i+=n.box),t.boxClasses[e.id]&&(i+=t.boxClasses[e.id]),t.boxClasses[e.id]&&(i+=t.boxClasses[e.id]),t.ruleOut.includes(e.id)&&(i+=" highlight2 ")}else e.locked&&(i+="  locked ");return i}},{key:"showContent",value:function(e,t){var i="";return e.digit&&(i=e.digit),t.on&&(t.cell&&t.cell&&t.cell.id===e.id&&1===t.digits.length&&(i=t.digits),t.cellContent[e.id]&&(i=t.cellContent[e.id])),i}},{key:"digitClasses",value:function(e,t){var i="digit ";return t.on&&(t.cell&&t.cell.id===e.id&&(i+="tentative "),t.digitClasses[e.id]&&(i+=t.digitClasses[e.id])),i}},{key:"render",value:function(){var e=this.props,t=e.cell,i=e.highlight;return a.a.createElement("div",{className:"box ".concat(this.isHighlighted(t,i)),id:"cell-".concat(t.id),key:t.id},a.a.createElement(w,{cell:t,possibilities:Object(b.a)(t.possibilities),highlight:i}),a.a.createElement("div",{className:this.digitClasses(t,i)},this.showContent(t,i)))}}]),t}(a.a.Component),O=function(e){},k=function(e,t){var i=e.cells[t.id],n={on:!0,boxClasses:[],digitClasses:[],strategy:t.strategy,cellContent:{},hiddenCells:[],ruleOut:[],keep:[],digits:[t.digit],rows:[],columns:[],squares:[],facets:[]};return i&&(n.boxClasses[i.id]=" targetCell",n.rows=[i.row],n.columns=[i.column],n.squares=[i.square],n.ruleOut=Object(b.a)(i.canSee).filter(function(e){return Object(b.a)(e.possibilities).includes(t.digit)}).map(function(e){return e.id})),n},S=function(e,t){var i=k(e,t),n=e.cells[t.id];if(i.rows=[n.row],i.columns=[n.column],i.squares=[n.square],i.ruleOut=Object(b.a)(n.canSee).filter(function(e){return Object(b.a)(e.possibilities).includes(t.digit)}).map(function(e){return e.id}),i.keep=[t.id],8===t.used.length)for(var a=0;a<8;a++){var r=e.cells[t.used[a]];i.boxClasses[r.id]=i.boxClasses[r.id]?i.boxClasses[r.id]+" bgcolor"+r.digit:" bgcolor"+r.digit,i.digitClasses[r.id]=i.digitClasses[r.id]?i.digitClasses[r.id]+" color"+r.digit:" color"+r.digit}return i.boxClasses[t.id]=" targetCell ",i.digits=[t.digit],i.cellContent[t.id]=t.digit,i},j=function(e,t){var i,n,a,r=k(e,t),l=e.cells[t.id],o=[1,2,3,4,5,6,7,8,9],s=e[t.house.type][t.house.id].cells.filter(function(e){return 0===e.digit}).filter(function(e){return e.id!==l.id}),c=!0,u=!1,d=void 0;try{for(var h,f=function(){var s=h.value,c=Object(b.a)(s.canSee).filter(function(e){return e.digit===t.digit}),u=void 0,d=c.filter(function(e){return e.squareID===s.squareID});if(d.length)u=d[0],r.digitClasses[u.id]?(r.digitClasses[u.id]=r.digitClasses[u.id],r.digitClasses[s.id]=" color"+i):(i=o.shift(),n=" color"+i,a=" bgcolor"+i,r.digitClasses[u.id]=n+a,r.digitClasses[s.id]=" color"+i);else{var f=c.filter(function(e){return e.squareID!==s.squareID});f.length&&(u=f[0],r.digitClasses[u.id]?(r.digitClasses[u.id]=r.digitClasses[u.id],r.digitClasses[s.id]="color"+i):(i=o.shift(),n=" color"+i,a=" bgcolor"+i,r.digitClasses[u.id]=n+a,r.digitClasses[s.id]="color"+i))}r.keep=[t.id],r.cellContent[s.id]="X";var g=e[t.house.type][t.house.id].cells.filter(function(e){return e.id!==l.id}),m=!0,v=!1,p=void 0;try{for(var y,w=g[Symbol.iterator]();!(m=(y=w.next()).done);m=!0){var C=y.value;r.boxClasses[C.id]=r.boxClasses[C.id]+" highlightRow"}}catch(O){v=!0,p=O}finally{try{m||null==w.return||w.return()}finally{if(v)throw p}}},g=s[Symbol.iterator]();!(c=(h=g.next()).done);c=!0)f()}catch(m){u=!0,d=m}finally{try{c||null==g.return||g.return()}finally{if(u)throw d}}return r},x=function(e,t){var i=k(e,t),n=!0,a=!1,r=void 0;try{for(var l,o=t.id[Symbol.iterator]();!(n=(l=o.next()).done);n=!0){var s=l.value;i.boxClasses[s]=" targetCell "}}catch(p){a=!0,r=p}finally{try{n||null==o.return||o.return()}finally{if(a)throw r}}i.ruleOut=e[t.house.type][t.house.id].cells.filter(function(e){return 0===e.digit}).filter(function(e){return-1===t.id.indexOf(e.id)}).filter(function(e){return Object(b.a)(e.possibilities).some(function(e){return Object(b.a)(t.digits).includes(e)})}).map(function(e){return e.id}),i.digits=Object(b.a)(t.digits);var c=e[t.house.type][t.house.id].cells.filter(function(e){return t.id.includes(e.id)});i.rows=c.map(function(e){return"".concat(e.row)}).join(" "),i.columns=c.map(function(e){return"".concat(e.column)}).join(" "),i.squares=c.map(function(e){return"".concat(e.square)}).join(" "),i.keep=t.id;var u=e[t.house.type][t.house.id].cells.filter(function(e){return!t.id.includes(e.id)}),d=!0,h=!1,f=void 0;try{for(var g,m=u[Symbol.iterator]();!(d=(g=m.next()).done);d=!0){var v=g.value;i.boxClasses[v.id]=" highlightRow"}}catch(p){h=!0,f=p}finally{try{d||null==m.return||m.return()}finally{if(h)throw f}}return i},E=function(e,t){var i=k(e,t),n=!0,a=!1,r=void 0;try{for(var l,o=t.id[Symbol.iterator]();!(n=(l=o.next()).done);n=!0){var s=l.value;i.boxClasses[s]=" targetCell "}}catch(u){a=!0,r=u}finally{try{n||null==o.return||o.return()}finally{if(a)throw r}}i.ruleOut=[],i.digits=Object(b.a)(t.digits);var c=e[t.house.type][t.house.id].cells.filter(function(e){return t.id.includes(e.id)});return i.rows=c.map(function(e){return"".concat(e.row)}).join(" "),i.columns=c.map(function(e){return"".concat(e.column)}).join(" "),i.squares=c.map(function(e){return"".concat(e.square)}).join(" "),i.hiddenCells=t.id,i},N=function(e,t){var i=[1,2,3,4,5,6,7,8,9],n=k(e,t),a=!0,r=!1,l=void 0;try{for(var o,s=t.ids[Symbol.iterator]();!(a=(o=s.next()).done);a=!0){var c=o.value;n.boxClasses[c]=" targetCell "}}catch(X){r=!0,l=X}finally{try{a||null==s.return||s.return()}finally{if(r)throw l}}var u,d,h,f=e[t.house.type][t.house.id].cells.filter(function(e){return 0===e.digit}).filter(function(e){return!t.ids.includes(e.id)}),g=!0,m=!1,v=void 0;try{for(var p,y=f[Symbol.iterator]();!(g=(p=y.next()).done);g=!0){var w=p.value,C=Object(b.a)(w.canSee).filter(function(e){return e.digit===t.digit})[0];C&&(n.digitClasses[C.id]?(n.digitClasses[C.id]=n.digitClasses[C.id],n.digitClasses[w.id]=" color"+u):(d=" color"+(u=i.shift()),h=" bgcolor"+u,n.digitClasses[C.id]=d+h,n.digitClasses[w.id]=" color"+u)),n.cellContent[w.id]="X"}}catch(X){m=!0,v=X}finally{try{g||null==y.return||y.return()}finally{if(m)throw v}}n.ruleOut=e[t.locked.type][t.locked.id].cells.filter(function(e){return-1===t.ids.indexOf(e.id)}).filter(function(e){return e.possibilities.has(t.digit)}).map(function(e){return e.id}),n.keep=t.ids,n.digits=[t.digit],n.locked=t.locked;var O=e[t.house.type][t.house.id].cells.filter(function(e){return t.ids.includes(e.id)});n.rows=O.map(function(e){return"".concat(e.row)}).join(" "),n.columns=O.map(function(e){return"".concat(e.column)}).join(" "),n.squares=O.map(function(e){return"".concat(e.square)}).join(" ");var S=e[t.house.type][t.house.id].cells.filter(function(e){return!t.ids.includes(e.id)}),j=!0,x=!1,E=void 0;try{for(var N,D=S[Symbol.iterator]();!(j=(N=D.next()).done);j=!0){var R=N.value;n.boxClasses[R.id]=" highlightRow"}}catch(X){x=!0,E=X}finally{try{j||null==D.return||D.return()}finally{if(x)throw E}}var L=e[t.locked.type][t.locked.id].cells.filter(function(e){return!t.ids.includes(e.id)}),I=!0,q=!1,H=void 0;try{for(var B,F=L[Symbol.iterator]();!(I=(B=F.next()).done);I=!0){var A=B.value;n.boxClasses[A.id]=" highlightRow"}}catch(X){q=!0,H=X}finally{try{I||null==F.return||F.return()}finally{if(q)throw H}}return n},D=function(e,t){var i=k(e,t),n=e.cells.filter(function(e){return t.rows.includes(e.rowID)}).filter(function(e){return t.columns.includes(e.columnID)}).filter(function(e){return Object(b.a)(e.possibilities).includes(t.digit)}).map(function(e){return e.id}),a=!0,r=!1,l=void 0;try{for(var o,s=n[Symbol.iterator]();!(a=(o=s.next()).done);a=!0){var c=o.value;i.boxClasses[c]=" targetCell "}}catch(x){r=!0,l=x}finally{try{a||null==s.return||s.return()}finally{if(r)throw l}}i.keep=n,i.ruleOut=e.cells.filter(function(e){return-1===t.rows.indexOf(e.rowID)}).filter(function(e){return t.columns.indexOf(e.columnID)>-1}).filter(function(e){return e.possibilities.has(t.digit)}).map(function(e){return e.id});var u=e.cells.filter(function(e){return t.rows.includes(e.rowID)}),d=!0,h=!1,f=void 0;try{for(var g,m=u[Symbol.iterator]();!(d=(g=m.next()).done);d=!0){var v=g.value;i.boxClasses[v.id]=i.boxClasses[v.id]+" highlightRow"}}catch(x){h=!0,f=x}finally{try{d||null==m.return||m.return()}finally{if(h)throw f}}var p=e.cells.filter(function(e){return t.columns.includes(e.columnID)}),y=!0,w=!1,C=void 0;try{for(var O,S=p[Symbol.iterator]();!(y=(O=S.next()).done);y=!0){var j=O.value;i.boxClasses[j.id]=i.boxClasses[j.id]+" highlightRow"}}catch(x){w=!0,C=x}finally{try{y||null==S.return||S.return()}finally{if(w)throw C}}return i.rows=t.rows.map(function(e){return"R".concat(e+1)}).join(" "),i.columns=t.columns.map(function(e){return"C".concat(e+1)}).join(" "),i.digits=[t.digit],i},R=function(e,t){var i=k(e,t),n=!0,a=!1,r=void 0;try{for(var l,o=t.chain[Symbol.iterator]();!(n=(l=o.next()).done);n=!0){var s=l.value,c={};c.id=s.cell.id,c.box=" targetCell ",c.cannotBe=s.cannotBe,c.mustBe=s.mustBe,i.facets.push(c)}}catch(C){a=!0,r=C}finally{try{n||null==o.return||o.return()}finally{if(a)throw r}}var u=t.chain[0],d=t.chain[t.chain.length-1],h=Object(b.a)(u.cell.canSee).filter(function(e){return d.cell.canSee.has(e)}).filter(function(e){return e.possibilities.has(u.cannotBe)}),f=!0,g=!1,m=void 0;try{for(var v,p=h[Symbol.iterator]();!(f=(v=p.next()).done);f=!0){var y=v.value,w={};w.id=y.id,w.box=" highlight2 ",w.exclude=u.cannotBe,i.facets.push(w)}}catch(C){g=!0,m=C}finally{try{f||null==p.return||p.return()}finally{if(g)throw m}}return i},L=function(){function e(){Object(o.a)(this,e),this.currentState="Off",this.machine={Off:{NakedSingle:"NakedSingle",HiddenSingle:"HiddenSingle",Naked:"Naked",Hidden:"Hidden",LockedCandidate:"LockedCandidate",Fish:"Fish",XYChain:"XYChain",clear:"Off"},NakedSingle:{clear:"Off"},HiddenSingle:{clear:"Off"},Naked:{clear:"Off"},Hidden:{clear:"Off"},LockedCandidate:{clear:"Off"},Fish:{clear:"Off"},XYChain:{clear:"Off"}}}return Object(s.a)(e,[{key:"transition",value:function(e,t){if(this.machine[e][t])return this.machine[e][t]}},{key:"changes",value:function(e,t,i){return{Off:O,NakedSingle:S,HiddenSingle:j,Naked:x,Hidden:E,LockedCandidate:N,Fish:D,XYChain:R}[i](e,t)}},{key:"input",value:function(e,t){var i=this.currentState;return this.currentState=this.transition(i,t.strategy.type),this.changes(e,t,this.currentState)}}]),e}(),I=(i(18),function(e){function t(e){var i;return Object(o.a)(this,t),(i=Object(c.a)(this,Object(u.a)(t).call(this,e))).highLight=function(){if(!i.state.highLight.on&&i.state.solver.next()){var e,t=i.state.solver.next(),n=i.state.solver.grid.cells[t.id],a={};a=n?{text:"".concat(t.strategy.type,": The cell at ").concat(n.row,",").concat(n.column,",").concat(n.square," must be ").concat(t.digit," \n"),key:"".concat(n.id,"-")}:{text:"".concat(t.strategy.type).concat(t.length?" ".concat(t.length):""," \n"),key:i.state.step},e=i.highlighter.input(i.state.solver.grid,t),i.setState({highLight:e}),i.state.items.unshift(a)}},i.apply=function(){i.state.solver.next()?(i.setState({highLight:{on:!1}}),i.highlighter.input(i.grid,{strategy:{type:"clear"}}),i.state.solver.apply(i.state.solver.next()),i.setState({step:i.state.step+1})):i.setState({autoplay:!1})},i.toggleAutoplay=function(){i.setState({autoplay:!i.state.autoplay})},i.autoplay=function(){i.state.autoplay&&(i.highLight(),setTimeout(i.apply,700))},i.state={step:1,solver:new f.Solver("000000000\n000000000\n000000000\n000000000\n000000000\n000000000\n000000000\n000000000\n000000000"),highLight:{used:[]},items:[],autoplay:!1},i.apply=i.apply.bind(Object(h.a)(Object(h.a)(i))),i.autoplay=i.autoplay.bind(Object(h.a)(Object(h.a)(i))),i.toggleAutoplay=i.toggleAutoplay.bind(Object(h.a)(Object(h.a)(i))),i.loadGridFromHash=i.loadGridFromHash.bind(Object(h.a)(Object(h.a)(i))),i.highlighter=new L,i}return Object(d.a)(t,e),Object(s.a)(t,[{key:"loadGridFromHash",value:function(){var e;if(window.location.hash){var t=window.location.hash.substring(1);t=t.replace(/(.{9})/g,"$1\n").replace(/^\s\s*/,"").replace(/\s\s*$/,"");var i=Object(f.isValid)(t);if(this.setState({step:1}),this.setState({items:[{text:"".concat(i.message),key:"grid-info"}]}),this.setState({highLight:{on:!1}}),this.highlighter.input(this.grid,{strategy:{type:"clear"}}),t.length&&i.isValid)e=new f.Solver(t);else{this.setState({step:1}),this.state.items.unshift({text:"Using default sudoku instead",key:"grid-info-d"});var n=this.state.items;this.setState({items:n});e=new f.Solver("300200000\n000107000\n706030500\n070009080\n900020004\n010800050\n009040301\n000702000\n000008006")}this.setState({solver:e})}else{this.setState({step:1}),this.setState({items:[{text:"Default sudoku",key:"grid-info"}]});e=new f.Solver("043080250\n600000000\n000001094\n900004070\n000608000\n010200003\n820500000\n000000005\n034090710")}this.setState({solver:e})}},{key:"componentDidMount",value:function(){var e=this,t=this;"onhashchange"in window&&(window.onhashchange=function(){t.loadGridFromHash()}),this.loadGridFromHash(),this.timerID=setInterval(function(){return e.autoplay()},1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"showSquare",value:function(e){return this.state.highLight.on&&this.state.highLight.squares.includes(e)?"show":""}},{key:"showRow",value:function(e){return this.state.highLight.on&&this.state.highLight.rows.includes(e)?"highlight5":""}},{key:"showColumn",value:function(e){return this.state.highLight.on&&this.state.highLight.columns.includes(e)?"highlight5":""}},{key:"render",value:function(){var e=this.state,t=e.solver,i=e.items,n=this;return a.a.createElement("div",{className:"App"},a.a.createElement("div",{className:"grid"},a.a.createElement("div",{className:"columnDetail"}),a.a.createElement("div",{className:"columnDetail ".concat(n.showColumn("C1")),id:"column1"},"C1"),a.a.createElement("div",{className:"columnDetail ".concat(n.showColumn("C2")),id:"column2"},"C2"),a.a.createElement("div",{className:"columnDetail ".concat(n.showColumn("C3")),id:"column3"},"C3"),a.a.createElement("div",{className:"columnDetail ".concat(n.showColumn("C4")),id:"column4"},"C4"),a.a.createElement("div",{className:"columnDetail ".concat(n.showColumn("C5")),id:"column5"},"C5"),a.a.createElement("div",{className:"columnDetail ".concat(n.showColumn("C6")),id:"column6"},"C6"),a.a.createElement("div",{className:"columnDetail ".concat(n.showColumn("C7")),id:"column7"},"C7"),a.a.createElement("div",{className:"columnDetail ".concat(n.showColumn("C8")),id:"column8"},"C8"),a.a.createElement("div",{className:"columnDetail ".concat(n.showColumn("C9")),id:"column9"},"C9"),a.a.createElement("div",{className:"columnDetail ".concat(n.showRow("R1")),id:"row1"},"R1"),t.grid.cells.filter(function(e){return 0===e.rowID}).map(function(e){return a.a.createElement(C,{cell:e,highlight:n.state.highLight,key:e.id})}),a.a.createElement("div",{className:"columnDetail ".concat(n.showRow("R2")),id:"row2"},"R2"),t.grid.cells.filter(function(e){return 1===e.rowID}).map(function(e){return a.a.createElement(C,{cell:e,highlight:n.state.highLight,key:e.id})}),a.a.createElement("div",{className:"columnDetail ".concat(n.showRow("R3")),id:"row3"},"R3"),t.grid.cells.filter(function(e){return 2===e.rowID}).map(function(e){return a.a.createElement(C,{cell:e,highlight:n.state.highLight,key:e.id})}),a.a.createElement("div",{className:"columnDetail ".concat(n.showRow("R4")),id:"row4"},"R4"),t.grid.cells.filter(function(e){return 3===e.rowID}).map(function(e){return a.a.createElement(C,{cell:e,highlight:n.state.highLight,key:e.id})}),a.a.createElement("div",{className:"columnDetail ".concat(n.showRow("R5")),id:"row5"},"R5"),t.grid.cells.filter(function(e){return 4===e.rowID}).map(function(e){return a.a.createElement(C,{cell:e,highlight:n.state.highLight,key:e.id})}),a.a.createElement("div",{className:"columnDetail ".concat(n.showRow("R6")),id:"row6"},"R6"),t.grid.cells.filter(function(e){return 5===e.rowID}).map(function(e){return a.a.createElement(C,{cell:e,highlight:n.state.highLight,key:e.id})}),a.a.createElement("div",{className:"columnDetail ".concat(n.showRow("R7")),id:"row7"},"R7"),t.grid.cells.filter(function(e){return 6===e.rowID}).map(function(e){return a.a.createElement(C,{cell:e,highlight:n.state.highLight,key:e.id})}),a.a.createElement("div",{className:"columnDetail ".concat(n.showRow("R8")),id:"row8"},"R8"),t.grid.cells.filter(function(e){return 7===e.rowID}).map(function(e){return a.a.createElement(C,{cell:e,highlight:n.state.highLight,key:e.id})}),a.a.createElement("div",{className:"columnDetail ".concat(n.showRow("R9")),id:"row9"},"R9"),t.grid.cells.filter(function(e){return 8===e.rowID}).map(function(e){return a.a.createElement(C,{cell:e,highlight:n.state.highLight,key:e.id})}),a.a.createElement("div",{className:"S1 ".concat(n.showSquare("S1"))},"S1"),a.a.createElement("div",{className:"S2 ".concat(n.showSquare("S2"))},"S2"),a.a.createElement("div",{className:"S3 ".concat(n.showSquare("S3"))},"S3"),a.a.createElement("div",{className:"S4 ".concat(n.showSquare("S4"))},"S4"),a.a.createElement("div",{className:"S5 ".concat(n.showSquare("S5"))},"S5"),a.a.createElement("div",{className:"S6 ".concat(n.showSquare("S6"))},"S6"),a.a.createElement("div",{className:"S7 ".concat(n.showSquare("S7"))},"S7"),a.a.createElement("div",{className:"S8 ".concat(n.showSquare("S8"))},"S8"),a.a.createElement("div",{className:"S9 ".concat(n.showSquare("S9"))},"S9")),a.a.createElement("div",{className:"notes"},a.a.createElement(g,{action:this.highLight,step:this.state.step}),a.a.createElement(m,{action:this.apply,step:this.state.step}),a.a.createElement(v,{action:this.toggleAutoplay}),a.a.createElement(y,{items:i})))}}]),t}(n.Component)),q=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function H(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}l.a.render(a.a.createElement(I,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/sudoku-react",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/sudoku-react","/service-worker.js");q?function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):H(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):H(e)})}}()}},[[11,1,2]]]);
//# sourceMappingURL=main.4fb66e1e.chunk.js.map