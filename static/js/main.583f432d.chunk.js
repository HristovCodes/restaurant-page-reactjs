(this["webpackJsonprestaurant-page-reactjs"]=this["webpackJsonprestaurant-page-reactjs"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),s=a(7),r=a.n(s),o=(a(13),a(2)),c=a(3),l=a(1),h=a(4),u=a(5);a(14);var m=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).changeTabToHome=n.changeTabToHome.bind(Object(l.a)(n)),n.changeTabToMenu=n.changeTabToMenu.bind(Object(l.a)(n)),n.changeTabToAbout=n.changeTabToAbout.bind(Object(l.a)(n)),n.state={tab:b,title:i.a.createElement("h1",null,"Indigo"),text:i.a.createElement("h2",null,"Located in the hotel lobby, our restaurant offers a large variety of Japanese inspired cuisine and is associated with perfect taste and extraordinary dishes. For this restaurant with this cool name it is not only the menu that offers the perfect taste, but the bar is something unique, complementing the food in the best way possible. In addition to the Japanese spirits and the famous sake, there is large selection of top-quality wines to choose from as well as a selection of Champaign and Prosecco. Designed to satisfy even the most exigent tastes in matter of food and drinks, the",i.a.createElement("span",null," Indigo Sushi Restaurant "),"also impresses with its large open kitchen where the restaurant\u2019s experienced Japanese Chefs show their culinary talents in preparing the so healthy, nourishing and appetizing dishes.")},n}return Object(c.a)(a,[{key:"changeTabToHome",value:function(){this.setState({tab:b}),this.setState({title:i.a.createElement("h1",null,"Indigo")}),this.setState({text:i.a.createElement("h2",null,"Located in the hotel lobby, our restaurant offers a large variety of Japanese inspired cuisine and is associated with perfect taste and extraordinary dishes. For this restaurant with this cool name it is not only the menu that offers the perfect taste, but the bar is something unique, complementing the food in the best way possible. In addition to the Japanese spirits and the famous sake, there is large selection of top-quality wines to choose from as well as a selection of Champaign and Prosecco. Designed to satisfy even the most exigent tastes in matter of food and drinks, the",i.a.createElement("span",null," Indigo Sushi Restaurant "),"also impresses with its large open kitchen where the restaurant\u2019s experienced Japanese Chefs show their culinary talents in preparing the so healthy, nourishing and appetizing dishes.")})}},{key:"changeTabToMenu",value:function(){this.setState({tab:f}),this.setState({title:i.a.createElement("h1",null,"Menu")}),this.setState({text:i.a.createElement("div",{className:"Display"},i.a.createElement("div",{className:"Card"},i.a.createElement("img",{src:"https://images.unsplash.com/photo-1554502078-ef0fc409efce?ixlib=rb-1.2.1&auto=format&fit=crop&w=676&q=80",alt:"Albacore with Crispy Onion"}),i.a.createElement("h2",null,"Albacore with Crispy Onion"),i.a.createElement("p",null,"$6.95")),i.a.createElement("div",{className:"Card"},i.a.createElement("img",{src:"https://images.unsplash.com/photo-1558985212-92c2ff0b56e7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",alt:"Takoyaki"}),i.a.createElement("h2",null,"Takoyaki"),i.a.createElement("p",null,"$5.95")),i.a.createElement("div",{className:"Card"},i.a.createElement("img",{src:"https://images.unsplash.com/photo-1553701275-1d6118df60bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",alt:"Edamame"}),i.a.createElement("h2",null,"Edamame"),i.a.createElement("p",null,"$3.95")),i.a.createElement("div",{className:"Card"},i.a.createElement("img",{src:"https://images.unsplash.com/photo-1559410545-0bdcd187e0a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",alt:"Shishito Pepper"}),i.a.createElement("h2",null,"Shishito Pepper"),i.a.createElement("p",null,"$6.95")))})}},{key:"changeTabToAbout",value:function(){this.setState({tab:g}),this.setState({title:i.a.createElement("h1",null,"It\u2019s More Fun In Indigo!")}),this.setState({text:i.a.createElement("h2",null,"Lively music, a vibrant crowd, inventive cocktails and the best sushi this side of California. You know when you\u2019re in ",i.a.createElement("span",null," Indigo "),"because there\u2019s no other place like it. Order up the best sushi in town and delight in our signature rolls or amazing Japanese inspired cuisine. Whatever you choose, it\u2019s all served with a big side of Anything Can Happen. So bring your friends or make new ones. Either way, you\u2019re in for a great time.")})}},{key:"render",value:function(){return i.a.createElement("div",{className:"Tab"},i.a.createElement("div",{className:"Buttons"},i.a.createElement(p,{onBtnPress:this.changeTabToHome,name:"Home"}),i.a.createElement(p,{onBtnPress:this.changeTabToMenu,name:"Menu"}),i.a.createElement(p,{onBtnPress:this.changeTabToAbout,name:"About"})),i.a.createElement(d,{tab:this.state.tab,title:this.state.title,text:this.state.text}))}}]),a}(i.a.Component),p=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleClick=n.handleClick.bind(Object(l.a)(n)),n}return Object(c.a)(a,[{key:"handleClick",value:function(e){this.props.onBtnPress(e.target.value)}},{key:"render",value:function(){return i.a.createElement("button",{onClick:this.handleClick},this.props.name)}}]),a}(i.a.Component),d=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return i.a.createElement(this.props.tab,{title:this.props.title,text:this.props.text})}}]),a}(i.a.Component),b=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"Home"},this.props.title,this.props.text)}}]),a}(i.a.Component),f=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"Menu"},this.props.title,this.props.text)}}]),a}(i.a.Component),g=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"About"},this.props.title,this.props.text)}}]),a}(i.a.Component),y=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(m,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.583f432d.chunk.js.map