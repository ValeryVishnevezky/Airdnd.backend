import{k as o,f as S,c as j,g as _,r as u,j as e,m as h}from"./index-DW-RuR0O.js";const E={query:I,getById:N,save:C,remove:w,addStayMsg:D,getEmptyStay:U};async function I(n={}){return o.get("stay",n)}function N(n){return o.get(`stay/${n}`)}async function w(n){return o.delete(`stay/${n}`)}async function C(n){var c;return n._id?c=await o.put(`stay/${n._id}`,n):c=await o.post("stay",n),c}async function D(n,c){return await o.post(`stay/${n}/msg`,{txt:c})}function U(){return{name:"",amenities:[],imgUrls:[],price:null,summary:"",capacity:null,loc:{country:"",city:"",address:""}}}const R={BASE_URL:"/",DEV:!1,MODE:"production",PROD:!0,SSR:!1},{DEV:A,VITE_LOCAL:L}=R,b=L==="true"?S:E,y={...b};A&&(window.stayService=y);const O=async n=>{const c="dycvqhve0",a="stay_preset",i=`https://api.cloudinary.com/v1_1/${c}/image/upload`,r=new FormData;r.append("file",n.target.files[0]),r.append("upload_preset",a);try{const l=await fetch(i,{method:"POST",body:r}),{url:d}=await l.json();return d}catch(l){console.error(l)}};function P(){const n=j(),{stayId:c}=_(),[a,i]=u.useState(y.getEmptyStay()),r=u.useRef([]);r.current=a.imgUrls.map((t,s)=>r.current[s]??u.createRef()),u.useEffect(()=>{c&&l()},[]);async function l(){try{const t=await y.getById(c);i(t)}catch(t){console.log(t)}}function d(t){r.current&&r.current[t].current.click()}async function x(t){try{const s=await O(t);let v={...a};v.imgUrls[t.target.id]=s,i({...a,...v})}catch(s){console.log(s)}}function m(t){i({...a,[t.target.id]:t.target.value})}function p(t){const s={...a.loc,[t.target.id]:t.target.value};console.log(s),i({...a,loc:s})}function g(t){i({...a,[t.target.id]:+t.target.value})}function f(t){t.preventDefault(),c?h.updateStay(a):h.addStay(a),n("/stay")}return a?e.jsxs("form",{className:"stay-edit",onSubmit:f,children:[e.jsx("div",{className:"stay-name",children:e.jsx("input",{id:"name",type:"text",placeholder:"Stay name",value:a.name,onInput:m})}),e.jsxs("div",{className:"location",children:[e.jsx("input",{id:"country",type:"text",placeholder:"Country",onInput:p,value:a.loc.country}),e.jsx("input",{id:"city",type:"text",placeholder:"City",onInput:p,value:a.loc.city}),e.jsx("input",{id:"address",type:"text",placeholder:"Address",onInput:p,value:a.loc.address})]}),e.jsx("div",{className:"images",children:a.imgUrls.map((t,s)=>e.jsxs("div",{id:s,onClick:()=>d(s),className:`img img${s}`,children:[t?e.jsx("img",{src:t,alt:""}):e.jsx("div",{children:e.jsx("p",{children:"Upload Image"})}),e.jsx("input",{ref:r.current[s],id:s,type:"file",onChange:x})]},s))}),e.jsxs("div",{className:"bottom-info",children:[e.jsxs("span",{children:["Capacity:",e.jsx("input",{id:"capacity",type:"number",placeholder:"0",onInput:g,value:a.capacity})]}),e.jsxs("span",{className:"price",children:["Price: ",e.jsx("input",{id:"price",type:"number",placeholder:"0",onInput:g,value:a.price}),"per night"]})]}),e.jsxs("div",{className:"description",children:[e.jsx("h4",{children:"Description"}),e.jsx("textarea",{id:"summary",className:"description-textarea",value:a.summary,onInput:m})]}),e.jsx("button",{className:"save-btn",onClick:f,children:"Save"})]}):"loading..."}export{P as default};