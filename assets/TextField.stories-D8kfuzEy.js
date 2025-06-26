import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as m}from"./index-D4lIrffr.js";import{c as u}from"./clsx-B-dksMZM.js";import{T as x,a as f}from"./Typography-DJ2vrFdG.js";function _(a){return typeof a=="string"}const n=m.forwardRef((a,D)=>{const{label:i,error:t=!1,required:l=!1,className:N,id:q,...S}=a,j=m.useId(),o=q||j,d=`${o}-error`,c=!!t,p=_(t),I=p?d:void 0;return e.jsxs("div",{className:u("flex flex-col gap-1",N),children:[i&&e.jsxs(x,{as:"label",type:f.BODY_MEDIUM,htmlFor:o,className:"text-neutral-500",children:[i," ",l&&"*"]}),e.jsx("textarea",{id:o,ref:D,"aria-invalid":c,"aria-describedby":I,"aria-required":l,className:u("w-full rounded-md px-4 py-3 min-h-[128px] text-[14px] leading-[175%] font-medium text-neutral-800 placeholder-neutral-300 outline-none ring-1 resize-none",c?"ring-red-500 focus:ring-red-500":"ring-neutral-200 focus:ring-neutral-400"),...S}),p&&e.jsx(x,{as:"div",id:d,type:f.LABEL,className:"text-red-600 mt-1 sr-only",children:t})]})});n.displayName="TextField";n.__docgenInfo={description:"",methods:[],displayName:"TextField",props:{label:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"union",raw:"string | boolean",elements:[{name:"string"},{name:"boolean"}]},description:""},required:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const Y={title:"shared/TextField",component:n,tags:["autodocs"]},r={args:{label:"Description",placeholder:"Enter description..."}},s={args:{label:"Description",placeholder:"Too short...",error:!0}};var g,h,y;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: 'Description',
    placeholder: 'Enter description...'
  }
}`,...(y=(h=r.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var T,b,E;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    label: 'Description',
    placeholder: 'Too short...',
    error: true
  }
}`,...(E=(b=s.parameters)==null?void 0:b.docs)==null?void 0:E.source}}};const w=["Default","ErrorState"];export{r as Default,s as ErrorState,w as __namedExportsOrder,Y as default};
