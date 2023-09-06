(function(){"use strict";var e={4781:function(e,t,r){var n=r(9242),a=r(3396);const s={class:"app"};function o(e,t,r,n,o,i){const l=(0,a.up)("navbar"),u=(0,a.up)("router-view");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(l),(0,a._)("div",s,[(0,a.Wm)(u)])],64)}r(7658);const i={class:"navbar"},l={key:0,class:"navbar__btns"},u={key:1,class:"navbar__btns"};function c(e,t,r,n,s,o){return(0,a.wg)(),(0,a.iD)("div",i,[(0,a._)("div",{onClick:t[0]||(t[0]=t=>e.$router.push("/")),class:"navbar__title"},"CRUD"),s.authorizationStore.userToken?((0,a.wg)(),(0,a.iD)("div",l,[(0,a._)("button",{class:"navbar__btn",onClick:t[1]||(t[1]=t=>e.$router.push("/usersbase"))},"Users list"),(0,a._)("button",{class:"navbar__btn",onClick:t[2]||(t[2]=(...e)=>o.logout&&o.logout(...e))},"Log out")])):((0,a.wg)(),(0,a.iD)("div",u,[(0,a._)("button",{class:"navbar__btn",onClick:t[3]||(t[3]=t=>e.$router.push("/login"))},"Sign in"),(0,a._)("button",{class:"navbar__btn",onClick:t[4]||(t[4]=t=>e.$router.push("/registration"))},"Registration")]))])}var d=r(2483);const m=e=>((0,a.dD)("data-v-4e8ca0e2"),e=e(),(0,a.Cn)(),e),p={class:"content"},h=m((()=>(0,a._)("h1",null,"Welcome to the CRUD app",-1))),g=[h];function _(e,t){return(0,a.wg)(),(0,a.iD)("div",p,g)}var v=r(89);const f={},b=(0,v.Z)(f,[["render",_],["__scopeId","data-v-4e8ca0e2"]]);var w=b,k=r(7139);const y=e=>((0,a.dD)("data-v-030286c8"),e=e(),(0,a.Cn)(),e),E={class:"form__inner"},C=y((()=>(0,a._)("legend",null,"Sign in",-1))),I=y((()=>(0,a._)("label",null,"Email",-1))),D=y((()=>(0,a._)("label",null,"Password",-1))),S={key:0,class:"danger__text"};function U(e,t,r,s,o,i){return(0,a.wg)(),(0,a.iD)("form",{onSubmit:t[5]||(t[5]=(0,n.iM)((()=>{}),["prevent"])),class:"form"},[(0,a._)("div",E,[C,I,(0,a.wy)((0,a._)("input",{type:"text",placeholder:"Enter your login","onUpdate:modelValue":t[0]||(t[0]=e=>o.email=e),class:(0,k.C_)({danger:o.hasError})},null,2),[[n.nr,o.email]]),D,(0,a.wy)((0,a._)("input",{type:"password",placeholder:"Enter your password","onUpdate:modelValue":t[1]||(t[1]=e=>o.password=e),class:(0,k.C_)({danger:o.hasError})},null,2),[[n.nr,o.password]]),o.hasError?((0,a.wg)(),(0,a.iD)("span",S,"Wrong email or password")):(0,a.kq)("",!0),(0,a._)("button",{onClick:t[2]||(t[2]=(...e)=>i.logIn&&i.logIn(...e))},"Login in #1"),(0,a._)("button",{onClick:t[3]||(t[3]=(...e)=>i.authorization&&i.authorization(...e))},"Login in #2"),(0,a._)("span",null,[(0,a.Uk)("Don't have an account? "),(0,a._)("a",{class:"hypertext-btn",onClick:t[4]||(t[4]=t=>e.$router.push("/registration"))},"Register here!")])])],32)}var O=r(2578),N=r(4870);const z=(0,O.Q_)("authorizationStore",(()=>{const e=(0,N.iH)([{email:"john@mail.com",password:"changeme"},{email:"nike-jam@mail.com",password:"qwerty"},{email:"test@mail.com",password:"testacc"}]);let t=(0,N.iH)(null);const r=localStorage.getItem("userToken");r&&(t.value=JSON.parse(r)._value),(0,a.YP)((()=>t),(e=>{localStorage.setItem("userToken",JSON.stringify(e))}),{deep:!0});const n=localStorage.getItem("loginData");return n&&(e.value=JSON.parse(n)._value),(0,a.YP)((()=>e),(e=>{localStorage.setItem("loginData",JSON.stringify(e))}),{deep:!0}),{loginData:e,userToken:t,loginInLocalStorage:n,userTokenInLocalStorage:r}}));var T=r(4161),L={data(){return{email:"john@mail.com",password:"changeme",authorizationStore:z(),loginData:z().loginData,hasError:!1}},methods:{authorization(){this.loginData.find((e=>e.email==this.email))&&this.loginData.find((e=>e.password==this.password))?(this.authorizationStore.userToken="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIzNDM0NTY3ODkwIiwibmFtZSI6IlRlc3QgVXNlciIsImlhdCI6MTUxNjIzOTAyMn0.Z5nZb8tvEm2q4gkj2oDK2x2ZdxoBrkOz0SXE1OK5ScQ",console.log(this.authorizationStore.userToken),this.hasError=!1,Re.push("/usersbase"),Re.beforeEach(((e,t,r)=>{"/login"===e.path||this.authorizationStore.userToken?r():r({path:"/login"})}))):this.hasError=!0},async logIn(){let e="https://api.escuelajs.co/api/v1/auth/login";try{const t=await T.Z.post(e,{email:this.email,password:this.password});t&&t.data&&(this.authorizationStore.userToken={accessToken:t.data.access_token,refreshToken:t.data.refresh_token},console.log(this.authorizationStore.userToken),Re.push("/usersbase"))}catch(t){console.error(t)}}}};const x=(0,v.Z)(L,[["render",U],["__scopeId","data-v-030286c8"]]);var j=x;const A=e=>((0,a.dD)("data-v-b09c0eb0"),e=e(),(0,a.Cn)(),e),R={class:"form__inner"},Z=A((()=>(0,a._)("legend",null,"Registration",-1))),W=A((()=>(0,a._)("label",null,"Email",-1))),V=A((()=>(0,a._)("label",null,"Password",-1))),J=A((()=>(0,a._)("label",null,"Confirm your password",-1))),$={key:0,class:"danger__text"};function q(e,t,r,s,o,i){return(0,a.wg)(),(0,a.iD)("form",{onSubmit:t[5]||(t[5]=(0,n.iM)((()=>{}),["prevent"])),class:"form"},[(0,a._)("div",R,[Z,W,(0,a.wy)((0,a._)("input",{type:"email",placeholder:"Enter your email","onUpdate:modelValue":t[0]||(t[0]=e=>o.email=e)},null,512),[[n.nr,o.email]]),V,(0,a.wy)((0,a._)("input",{type:"password",placeholder:"Create your password","onUpdate:modelValue":t[1]||(t[1]=e=>o.password=e),class:(0,k.C_)({danger:o.hasError})},null,2),[[n.nr,o.password]]),J,(0,a.wy)((0,a._)("input",{type:"password",placeholder:"Repeat your password","onUpdate:modelValue":t[2]||(t[2]=e=>o.passwordConfirm=e),class:(0,k.C_)({danger:o.hasError})},null,2),[[n.nr,o.passwordConfirm]]),o.hasError?((0,a.wg)(),(0,a.iD)("span",$,"Your passwords do not match")):(0,a.kq)("",!0),(0,a._)("button",{onClick:t[3]||(t[3]=(...e)=>i.registration&&i.registration(...e))},"Register"),(0,a._)("span",null,[(0,a.Uk)("Already have an account? "),(0,a._)("a",{class:"hypertext-btn",onClick:t[4]||(t[4]=t=>e.$router.push("/login"))},"Login In")])])],32)}var P={data(){return{email:"",password:"",passwordConfirm:"",loginStore:z().loginData,hasError:!1}},methods:{registration(){this.password==this.passwordConfirm?(this.loginStore.push({email:this.email,password:this.password}),this.hasError=!1,Re.push("/login")):this.hasError=!0}}};const M=(0,v.Z)(P,[["render",q],["__scopeId","data-v-b09c0eb0"]]);var Y=M;const B={class:"user"};function H(e,t,r,n,s,o){const i=(0,a.up)("user-form"),l=(0,a.up)("user-list");return(0,a.wg)(),(0,a.iD)("div",B,[(0,a.Wm)(i,{onCreate:o.addNewUser,"current-id":s.userList.length},null,8,["onCreate","current-id"]),(0,a.Wm)(l,{userList:this.userList,onRemove:o.removeUser},null,8,["userList","onRemove"])])}const Q=e=>((0,a.dD)("data-v-115cc2bf"),e=e(),(0,a.Cn)(),e),X={class:"form__inner"},F=Q((()=>(0,a._)("h1",{class:"form__title"},"Add new user",-1))),K={class:"form__group"},G=Q((()=>(0,a._)("label",null,"Name",-1))),ee={class:"form__group"},te=Q((()=>(0,a._)("label",null,"e-mail",-1))),re=Q((()=>(0,a._)("button",null,"Add user",-1)));function ne(e,t,r,s,o,i){return(0,a.wg)(),(0,a.iD)("div",null,[(0,a._)("form",{class:"form",onSubmit:t[2]||(t[2]=(0,n.iM)(((...e)=>i.addNewUser&&i.addNewUser(...e)),["prevent"]))},[(0,a._)("div",X,[F,(0,a._)("div",K,[G,(0,a.wy)((0,a._)("input",{type:"text",id:"user-name",placeholder:"Enter user name","onUpdate:modelValue":t[0]||(t[0]=e=>o.user.name=e),required:""},null,512),[[n.nr,o.user.name]])]),(0,a._)("div",ee,[te,(0,a.wy)((0,a._)("input",{type:"email",id:"user-email",placeholder:"Enter user e-mail","onUpdate:modelValue":t[1]||(t[1]=e=>o.user.email=e),required:""},null,512),[[n.nr,o.user.email]])]),re])],32)])}var ae={data(){return{user:{id:null,name:"",email:"",role:"user",isEditing:!1}}},emits:["create"],props:{currentId:{type:Number,required:!0}},methods:{addNewUser(){this.user.id=this.currentId,this.user.isEditing=!1,this.$emit("create",this.user),this.user={id:null,name:"",email:""}}}};const se=(0,v.Z)(ae,[["render",ne],["__scopeId","data-v-115cc2bf"]]);var oe=se;const ie=e=>((0,a.dD)("data-v-015fe72a"),e=e(),(0,a.Cn)(),e),le={class:"userlist"},ue=ie((()=>(0,a._)("thead",{class:"userlist__header"},[(0,a._)("tr",null,[(0,a._)("td",null,"User name"),(0,a._)("td",null,"User Email"),(0,a._)("td",null,"Actions")])],-1)));function ce(e,t,r,n,s,o){const i=(0,a.up)("user-item");return(0,a.wg)(),(0,a.iD)("table",le,[ue,(0,a._)("tbody",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(r.userList,(r=>((0,a.wg)(),(0,a.j4)(i,{key:r.id,user:r,onRemove:t[0]||(t[0]=t=>e.$emit("remove",e.post))},null,8,["user"])))),128))])])}const de={key:0,class:"user"},me={class:"user__name"},pe={class:"user__email"},he={class:"action-btn"},ge={key:1,class:"user"},_e={class:"user__name"},ve={class:"user__email"},fe={class:"action-btn"};function be(e,t,r,s,o,i){const l=(0,a.up)("action-btn");return r.user.isEditing?((0,a.wg)(),(0,a.iD)("tr",ge,[(0,a._)("td",_e,[(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":t[2]||(t[2]=e=>o.changedName=e)},null,512),[[n.nr,o.changedName]])]),(0,a._)("td",ve,[(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":t[3]||(t[3]=e=>o.changedEmail=e)},null,512),[[n.nr,o.changedEmail]])]),(0,a._)("td",fe,[(0,a.Wm)(l,{class:"confirm-btn",onClick:t[4]||(t[4]=e=>i.confirmEditing(r.user))},{default:(0,a.w5)((()=>[(0,a.Uk)("Ok")])),_:1}),(0,a.Wm)(l,{class:"danger-btn",onClick:t[5]||(t[5]=e=>i.stopEditing(r.user))},{default:(0,a.w5)((()=>[(0,a.Uk)("X")])),_:1})])])):((0,a.wg)(),(0,a.iD)("tr",de,[(0,a._)("td",me,(0,k.zw)(r.user.name),1),(0,a._)("td",pe,(0,k.zw)(r.user.email),1),(0,a._)("td",he,[(0,a.Wm)(l,{class:"edit-btn",onClick:t[0]||(t[0]=e=>i.editUser(r.user))},{default:(0,a.w5)((()=>[(0,a.Uk)("E")])),_:1}),(0,a.Wm)(l,{class:"danger-btn",onClick:t[1]||(t[1]=t=>e.$emit("remove",r.user))},{default:(0,a.w5)((()=>[(0,a.Uk)("D")])),_:1})])]))}const we={class:"btn"};function ke(e,t,r,n,s,o){return(0,a.wg)(),(0,a.iD)("button",we,[(0,a.WI)(e.$slots,"default",{},void 0,!0)])}var ye={name:"action-btn"};const Ee=(0,v.Z)(ye,[["render",ke],["__scopeId","data-v-b8188aa6"]]);var Ce=Ee,Ie={components:{ActionButton:Ce},props:{user:{type:Object,requaired:!0}},emits:["remove"],data(){return{changedName:"",changedEmail:""}},methods:{editUser(e){e.isEditing=!0,this.changedName=e.name,this.changedEmail=e.email},confirmEditing(e){e.name=this.changedName,e.email=this.changedEmail,this.stopEditing(e)},stopEditing(e){this.changedEmail="",this.changedName="",e.isEditing=!1}}};const De=(0,v.Z)(Ie,[["render",be],["__scopeId","data-v-2c7d5e5a"]]);var Se=De,Ue={components:{UserItem:Se},props:{userList:{type:Array,reqired:!0}},emits:["remove"],data(){return{}},methods:{}};const Oe=(0,v.Z)(Ue,[["render",ce],["__scopeId","data-v-015fe72a"]]);var Ne=Oe;const ze=(0,O.Q_)("userStore",(()=>{const e=(0,N.iH)([{id:1,name:"John",email:"j.trvlt@yahoo.com",isEditing:!1},{id:2,name:"Adolf",email:"adolBf@gmail.com",isEditing:!1},{id:3,name:"Alex",email:"alex-hirsh@gmail.com",isEditing:!1},{id:4,name:"Admin",email:"coolAdmin@bk.co",isEditing:!1},{id:5,name:"Admin333",email:"coolAdmin21321@bk.co",isEditing:!1}]),t=localStorage.getItem("users");return t&&(e.value=JSON.parse(t)._value),(0,a.YP)((()=>e),(e=>{localStorage.setItem("users",JSON.stringify(e))}),{deep:!0}),{users:e}}));var Te={components:{UserForm:oe,UserList:Ne},data(){return{userList:ze().users}},methods:{addNewUser(e){this.userList.push(e)},removeUser(e){this.userList.splice(this.userList.indexOf(e),1)}}};const Le=(0,v.Z)(Te,[["render",H]]);var xe=Le;const je=[{path:"/",component:w},{path:"/login",component:j},{path:"/registration",component:Y},{path:"/usersbase",component:xe}],Ae=(0,d.p7)({routes:je,history:(0,d.PO)({NODE_ENV:"production",BASE_URL:"/CRUD/"}.BASE_URl)});Ae.beforeEach(((e,t,r)=>{let n=z().userToken;"/usersbase"!=e.path||n?r():r({path:"/login"})}));var Re=Ae,Ze={data(){return{authorizationStore:z()}},methods:{logout(){this.authorizationStore.userToken=null,Re.push("/login")}}};const We=(0,v.Z)(Ze,[["render",c],["__scopeId","data-v-00de90f5"]]);var Ve=We,Je={components:{Navbar:Ve},data(){return{loginStore:z()}}};const $e=(0,v.Z)(Je,[["render",o]]);var qe=$e,Pe=[Ce];const Me=(0,O.WB)(),Ye=(0,n.ri)(qe);Pe.forEach((e=>{Ye.component(e.name,e)})),Ye.use(Me).use(Re).mount("#app")}},t={};function r(n){var a=t[n];if(void 0!==a)return a.exports;var s=t[n]={exports:{}};return e[n].call(s.exports,s,s.exports,r),s.exports}r.m=e,function(){var e=[];r.O=function(t,n,a,s){if(!n){var o=1/0;for(c=0;c<e.length;c++){n=e[c][0],a=e[c][1],s=e[c][2];for(var i=!0,l=0;l<n.length;l++)(!1&s||o>=s)&&Object.keys(r.O).every((function(e){return r.O[e](n[l])}))?n.splice(l--,1):(i=!1,s<o&&(o=s));if(i){e.splice(c--,1);var u=a();void 0!==u&&(t=u)}}return t}s=s||0;for(var c=e.length;c>0&&e[c-1][2]>s;c--)e[c]=e[c-1];e[c]=[n,a,s]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};r.O.j=function(t){return 0===e[t]};var t=function(t,n){var a,s,o=n[0],i=n[1],l=n[2],u=0;if(o.some((function(t){return 0!==e[t]}))){for(a in i)r.o(i,a)&&(r.m[a]=i[a]);if(l)var c=l(r)}for(t&&t(n);u<o.length;u++)s=o[u],r.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return r.O(c)},n=self["webpackChunkcrud"]=self["webpackChunkcrud"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=r.O(void 0,[998],(function(){return r(4781)}));n=r.O(n)})();
//# sourceMappingURL=app.1ae9f889.js.map