(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{49:function(e,t,a){e.exports=a(72)},54:function(e,t,a){},61:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(40),s=a.n(o),c=(a(54),a(11)),i=a(12),u=a(13),l=a(14),m=a(24),p=a(16),d=a(74),f=a(22),g=a(19),h=a.n(g);function v(){var e=Object(f.a)(["\n\tquery getUserMessage ($id:ID) {\n\t  getUserMessage(id:$id){\n\t    username\n\t    name\n\t    id\n\t    rol\n\t  }\n\t}\n"]);return v=function(){return e},e}function b(){var e=Object(f.a)(["\n\tquery getUser{\n\t\tgetUser{\n\t\t\tid\n\t\t\tname\n\t\t\tusername\n\t\t\trol\n\t\t}\n\t}\n"]);return b=function(){return e},e}function k(){var e=Object(f.a)(["\n\tquery getMessages{\n\t  getMessages{\n\t  \tid\n\t    user\n\t    text\n\t    date\n\t  }\n\t}\t\t\n"]);return k=function(){return e},e}var E=h()(k()),w=h()(b()),y=h()(v());function j(){var e=Object(f.a)(["\n\tmutation clearChar{\n\t  clearChat\n\t}\t\n"]);return j=function(){return e},e}function N(){var e=Object(f.a)(["\n\tmutation authUser($username: String!, $password: String!){\n\t  authUser(username: $username, password: $password){\n\t    token\n\t  }\n\t}\n"]);return N=function(){return e},e}function O(){var e=Object(f.a)(["\n\tmutation createUser($input: UserInput) {\n\t  createUser(input: $input)\n\t}\n"]);return O=function(){return e},e}function x(){var e=Object(f.a)(["\n\tmutation createMessage($input: MessageInput) {\n\t  createMessage(input: $input){\n\t    user\n\t    text\n\t    date\n\t  }\n\t}\n"]);return x=function(){return e},e}var S=h()(x()),C=h()(O()),U=h()(N()),M=h()(j()),I=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e;try{e=this.props.session.id}catch(s){this.props.history.push("/login")}var t,a=this.props.message,n=a.user,o=a.text;return t=this.props.userMessage?this.props.userMessage.name:"El Usuario Ya No Existe",e!==n?r.a.createElement("div",{className:"text-break"},r.a.createElement("p",{className:"text-muted"},t),r.a.createElement("p",null,o)):r.a.createElement("div",null,r.a.createElement("p",{className:"text-right text-break"},o))}}]),a}(r.a.Component),F=Object(m.g)(I),$=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={id:""},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this,t=this.props.messages;return r.a.createElement("div",{className:"text-wrap"},t.map((function(t){return r.a.createElement(d.b,{query:y,variables:{id:t.user},key:t.id},(function(a){var n=a.loading,o=(a.error,a.data);return n?null:r.a.createElement(F,{message:t,session:e.props.session,userMessage:o.getUserMessage})}))})))}}]),a}(r.a.Component),A=a(23),W={text:""},R=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={text:""},e.validForm=function(){var t=e.state.text,a=!t.trim();if(""===t.trim())return a},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(d.a,{mutation:S},(function(t,a){var n=a.loading;a.error,a.refetch;return r.a.createElement("form",{onSubmit:function(a){a.preventDefault();var n,r=e.state.text;try{n=e.props.session.id}catch(a){e.props.history.push("/login")}t({variables:{input:{text:r,user:n}}}),e.setState(Object(A.a)({},W))}},r.a.createElement("textarea",{name:"text",className:"uk-textarea",placeholder:"Escribe Un Mensaje",onChange:function(t){e.setState({text:t.target.value})},value:e.state.text}),r.a.createElement("input",{className:"uk-button uk-button-primary uk-input uk-align-right",type:"submit",value:"Enviar",disabled:n||e.validForm()}))}))}}]),a}(r.a.Component),q=Object(m.g)(R),P=(a(61),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e,t,a=this;try{e=this.props.session.rol}catch(o){return""}return"ADMIN"===e&&(t=r.a.createElement(d.a,{mutation:M},(function(e){return r.a.createElement("button",{className:"btn btn-danger",onClick:function(){window.confirm("Quieres Vaciar el Chat?")&&e().then((function(){return a.props.refetch()}))}},"Vaciar Chat")}))),r.a.createElement(n.Fragment,null,r.a.createElement("h1",{className:"uk-heading-line uk-text-center"},r.a.createElement("span",null,"Mensajes")),r.a.createElement("div",{className:"uk-container uk-flex uk-flex-column uk-width-3-3 text-wraptext-break"},r.a.createElement("div",{className:"uk-width-10-9@s uk-panel uk-panel-scrollable uk-container-large"},r.a.createElement(d.b,{query:E,pollInterval:500},(function(e){var t=e.loading,n=e.error,o=e.data;e.startPolling,e.stopPolling,e.refetch;return t?null:n?"Error: ".concat(n.message):o.getMessages?r.a.createElement($,{session:a.props.session,refetch:a.props.refetch,messages:o.getMessages}):void 0})))),r.a.createElement("hr",null),r.a.createElement("div",{className:"uk-flex-column uk-flex uk-width-xlarge uk-container"},r.a.createElement(q,{session:this.props.session,refetch:this.props.refetch})),t)}}]),a}(r.a.Component)),T=Object(m.g)(P),D=a(37),L=a.n(D),Q=a(47),B=a(27),J=function(e){var t=e.error;return r.a.createElement("div",{className:"uk-alert-danger","uk-alert":!0},r.a.createElement(p.b,{className:"uk-alert-close","uk-close":"true"}),r.a.createElement("p",null,null===t||void 0===t?void 0:t.message))},V={username:"",password:"",error:""},z=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state=Object(A.a)({},V),e.updateState=function(t){var a=t.target,n=a.name,r=a.value;e.setState(Object(B.a)({},n,r))},e.clearState=function(){e.setState(Object(A.a)({},V))},e.validForm=function(){var t=e.state,a=t.username,n=t.password;return!a.trim()||!n.trim()},e.InitSession=function(t,a){t.preventDefault(),a().then(function(){var t=Object(Q.a)(L.a.mark((function t(a){var n;return L.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.data,localStorage.setItem("token",n.authUser.token),t.next=4,e.clearState();case 4:setTimeout((function(){e.props.refetch(),e.props.history.push("/")}),2e3);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){return e.setState({error:t})}))},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.username,o=t.password,s=t.error;return r.a.createElement(n.Fragment,null,r.a.createElement("h1",{className:"text-center mb-4"},"Login"),r.a.createElement("div",{className:"uk-container uk-position-center uk-padding uk-margin"},s&&r.a.createElement(J,{error:s}),r.a.createElement(d.a,{mutation:U,variables:{username:a,password:o}},(function(t,a){a.loading,a.error,a.data;return r.a.createElement(n.Fragment,null,r.a.createElement("form",{className:"uk-form uk-form-width-large",onSubmit:function(a){return e.InitSession(a,t)}},r.a.createElement("div",{className:"uk-margin"},r.a.createElement("div",{className:"uk-inline"},r.a.createElement("span",{className:"uk-form-icon","uk-icon":"icon: user"}),r.a.createElement("input",{type:"text",name:"username",placeholder:"Nombre de Usuario",className:"uk-input uk-margin-small uk-form-width-large",onChange:e.updateState}))),r.a.createElement("div",{className:"uk-margin"},r.a.createElement("div",{className:"uk-inline"},r.a.createElement("span",{className:"uk-form-icon uk-form-icon-flip","uk-icon":"icon: lock"}),r.a.createElement("input",{type:"password",name:"password",placeholder:"Password",className:"uk-input uk-margin-small uk-form-width-large",onChange:e.updateState}))),r.a.createElement("button",{disabled:e.validForm(),className:"uk-button uk-button-primary"},"Iniciar Sesion")),r.a.createElement(p.b,{className:"uk-button uk-button-secondary uk-margin",to:"/registro"}," Crear Cuenta Nueva "))}))))}}]),a}(r.a.Component),G=Object(m.g)(z),Y={name:"",username:"",password:"",rpassword:"",rol:"",error:""},H=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state=Object(A.a)({},Y),e.validForm=function(){var t=e.state,a=t.name,n=t.username,r=t.password,o=t.rpassword,s=t.rol;return!a.trim()||!n.trim()||!r.trim()||r!==o||!s.trim()},e.updateState=function(t){var a=t.target,n=a.name,r=a.value;e.setState(Object(B.a)({},n,r))},e.clearState=function(){e.setState(Object(A.a)({},Y))},e.Register=function(t,a){t.preventDefault(),a().then((function(t){e.clearState(),e.props.history.push("/login")})).catch((function(t){return e.setState({error:t})}))},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.name,o=t.username,s=t.password,c=t.rol,i=t.error,u={name:a,username:o,password:s,rol:c};return r.a.createElement(n.Fragment,null,r.a.createElement("h1",{className:"text-center mb-4"},"Registro"),r.a.createElement("div",{className:"uk-container uk-position-center uk-padding uk-margin"},i&&r.a.createElement(J,{error:i}),r.a.createElement(d.a,{mutation:C,variables:{input:u}},(function(t,a){a.loading,a.error,a.data;return r.a.createElement("form",{className:"uk-form uk-form-width-large",onSubmit:function(a){return e.Register(a,t)}},r.a.createElement("input",{type:"text",placeholder:"Nombre",className:"uk-input uk-margin-small uk-form-width-large",name:"name",onChange:e.updateState}),r.a.createElement("input",{type:"text",placeholder:"Nombre de Usuario","uk-icon":"icon-user",className:"uk-input uk-margin-small uk-form-width-large",name:"username",onChange:e.updateState}),r.a.createElement("input",{type:"password",placeholder:"Password",className:"uk-input uk-margin-small uk-form-width-large",name:"password",onChange:e.updateState}),r.a.createElement("input",{type:"password",placeholder:"Repetir Password",className:"uk-input uk-margin-small uk-form-width-large",name:"rpassword",onChange:e.updateState}),r.a.createElement("select",{name:"rol",className:"uk-select",onChange:e.updateState},r.a.createElement("option",{value:" "},"Elegir..."),r.a.createElement("option",{value:"USER"},"Usuario")),r.a.createElement("button",{type:"submit",className:"uk-button uk-button-primary uk-button-large uk-margin uk-flex",disabled:e.validForm()},"Crear Usuario "))}))))}}]),a}(r.a.Component),K=Object(m.g)(H),X=a(6),Z=Object(m.g)((function(e){var t=e.history;return r.a.createElement(X.a,null,(function(e){return r.a.createElement("button",{onClick:function(){return function(e,t){localStorage.removeItem("token"),e.resetStore(),t.push("/login")}(e,t)},className:"btn btn-light ml-md-2 mt-2 mt-md-0 "},"Cerrar Sesion")}))})),_=function(){return r.a.createElement("h3",{className:"navbar-brand text-light font-weight-bold"},"Chat")},ee=function(e){e.session;return r.a.createElement(n.Fragment,null,r.a.createElement(p.b,{to:"/",className:"navbar-brand text-light font-weight-bold"},"Chat"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navegacion","aria-controls":"navegacion","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navegacion"},r.a.createElement("ul",{className:"navbar-nav ml-auto text-right"},r.a.createElement("li",{className:"nav-item dropdown mr-md-2 mb-2 mb-md-0"},r.a.createElement("button",{className:"btn btn-light ml-md-2 mt-2 mt-md-0 "},"Opciones")),r.a.createElement(Z,null))))},te=function(e){var t,a=e.session;try{t=a.getUser?r.a.createElement(ee,{session:a}):r.a.createElement(_,null)}catch(n){console.log(n)}return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary justify-content-between d-flex mb-4"},r.a.createElement("div",{className:"container"},t))},ae=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e,t,a=this;try{t=(e=this.props.session.getUser)?"":r.a.createElement(m.a,{to:"/login"})}catch(n){console.log(n)}return r.a.createElement(p.a,null,t,r.a.createElement(te,{session:this.props.session}),r.a.createElement(m.d,null,r.a.createElement(m.b,{exact:!0,path:"/",render:function(){return r.a.createElement(T,{session:e,refetch:a.props.refetch})}}),r.a.createElement(m.b,{exact:!0,path:"/login",render:function(){return r.a.createElement(G,{refetch:a.props.refetch})}}),r.a.createElement(m.b,{exact:!0,path:"/registro",render:function(){return r.a.createElement(K,null)}})))}}]),a}(r.a.Component);var ne=function(e){return function(t){return r.a.createElement(d.b,{query:w},(function(a){var n=a.loading,o=(a.error,a.data),s=a.refetch;return n?null:r.a.createElement(e,Object.assign({},t,{refetch:s,session:o}))}))}}((function(e){var t=e.refetch,a=e.session;return r.a.createElement(ae,{refetch:t,session:a})})),re=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function oe(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}a(63),a(66),a(67),a(68),a(71);var se=a(48),ce=a(29),ie=new se.a({uri:"/",fetchOptions:{credentials:"include"},request:function(e){var t=localStorage.getItem("token");e.setContext({headers:{authorization:t}})},cache:new ce.a({addTypename:!1},{connectToDevTools:!0}),onError:function(e){var t=e.networkError,a=e.graphQLErrors;console.log("Errors GQL: ",a),console.log("Errors NetWork: ",t)}});s.a.render(r.a.createElement(X.b,{client:ie},r.a.createElement(ne,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");re?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):oe(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):oe(t,e)}))}}()}},[[49,1,2]]]);
//# sourceMappingURL=main.d5f1baed.chunk.js.map