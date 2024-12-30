import{d as q,x as T,h as o,E as w,j as c,o as t,c as f,e as R,a0 as B,a1 as A,k,N as F,t as V,O as S,b as y,H as E,Q as r}from"./chunks/framework.c14a64eb.js";const P=["innerHTML"],$=["innerHTML"],i=q({__name:"TextView",props:{content:{type:String,required:!0},rows:{type:Number,default:2},openText:{type:String,default:"展开"},closeText:{type:String,default:"收起"},link:{type:String,default:""},isClick:{type:Boolean,default:!1},contentColor:{type:String,default:""},buttonBackground:{type:String,default:"#fff"},buttonColor:{type:String,default:"#077fef"}},emits:["btn-click"],setup(p,{emit:a}){const n=p,l=a;T(()=>[n.content,n.rows],()=>{C()});const s=o(!1),e=o(!1),u={ellipsisRef:w(null)},C=async()=>{if(await S(),e.value=!1,!u.ellipsisRef.value)return;const{clientHeight:b,scrollHeight:v}=u.ellipsisRef.value;v>b&&(e.value=!0)};c(()=>{C()});const D=()=>{if(l("btn-click"),!n.isClick){if(n.link){window.open(n.link);return}s.value=!s.value}};return(b,v)=>(t(),f("div",{class:"xy-vue-text-view-box",style:F({color:p.contentColor})},[s.value?(t(),f("div",{key:0,innerHTML:p.content},null,8,P)):R("",!0),B(k("div",{ref:u.ellipsisRef,style:F({"-webkit-line-clamp":p.rows}),class:"ellipsis",innerHTML:p.content},null,12,$),[[A,!s.value]]),B(k("div",{class:"btn",style:F({color:p.buttonColor,background:p.buttonBackground}),onClick:D},V(s.value?p.closeText:p.openText),5),[[A,e.value]])],4))}});const _="风花雪月测试是否换行嘻嘻哈哈琴棋书画唱跳Rap",I={__name:"ExampleBasic",setup(p){const a=o(null),n=o(_);return c(()=>{const{clientWidth:l}=a.value.$el;for(let s=0;s<=l/8/_.length;s++)n.value+=_}),(l,s)=>(t(),y(i,{ref_key:"textRef",ref:a,content:n.value},null,8,["content"]))}},d="风花雪月测试是否换行嘻嘻哈哈琴棋书画唱跳Rap",N={__name:"ExampleRows",setup(p){const a=o(null),n=o(d);return c(()=>{const{clientWidth:l}=a.value.$el;for(let s=0;s<=l/8/d.length;s++)n.value+=d}),(l,s)=>(t(),y(i,{ref_key:"textRef",ref:a,content:n.value,rows:1},null,8,["content"]))}},g="风花雪月测试是否换行嘻嘻哈哈琴棋书画唱跳Rap",H={__name:"ExampleButtonText",setup(p){const a=o(null),n=o(g);return c(()=>{const{clientWidth:l}=a.value.$el;for(let s=0;s<=l/8/g.length;s++)n.value+=g}),(l,s)=>(t(),y(i,{ref_key:"textRef",ref:a,content:n.value,"open-text":"展开文本","close-text":"收起文本"},null,8,["content"]))}},h="风花雪月测试是否换行嘻嘻哈哈琴棋书画唱跳Rap",L="https://au1996.github.io/blog/",W={__name:"ExampleLink",setup(p){const a=o(null),n=o(h);return c(()=>{const{clientWidth:l}=a.value.$el;for(let s=0;s<=l/8/h.length;s++)n.value+=h}),(l,s)=>(t(),y(i,{ref_key:"textRef",ref:a,content:n.value,link:L,"open-text":"跳转链接"},null,8,["content"]))}},m="风花雪月测试是否换行嘻嘻哈哈琴棋书画唱跳Rap",M={__name:"ExampleBtnClick",setup(p){const a=o(null),n=o(m);c(()=>{const{clientWidth:s}=a.value.$el;for(let e=0;e<=s/8/m.length;e++)n.value+=m});const l=()=>{window.alert(n.value)};return(s,e)=>(t(),y(i,{ref_key:"textRef",ref:a,content:n.value,"is-click":!0,"open-text":"打开弹窗",onBtnClick:l},null,8,["content"]))}},x="风花雪月测试是否换行嘻嘻哈哈琴棋书画唱跳Rap",O="pink",j="#fff",z="blue",J={__name:"ExampleColor",setup(p){const a=o(null),n=o(x);return c(()=>{const{clientWidth:l}=a.value.$el;for(let s=0;s<=l/8/x.length;s++)n.value+=x}),(l,s)=>(t(),y(i,{ref_key:"textRef",ref:a,content:n.value,"content-color":O,"button-color":j,"button-background":z},null,8,["content"]))}},Q=r("",2),G=r("",2),K=r("",2),U=r("",2),X=r("",2),Y=r("",2),Z=r("",1),as=JSON.parse('{"title":"示例","description":"","frontmatter":{},"headers":[],"relativePath":"examples.md","filePath":"examples.md"}'),ss={name:"examples.md"},ls=Object.assign(ss,{setup(p){return(a,n)=>(t(),f("div",null,[Q,E(I),G,E(N),K,E(H),U,E(W),X,E(M),Y,E(J),Z]))}});export{as as __pageData,ls as default};
