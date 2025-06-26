import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as l}from"./index-D4lIrffr.js";import{c}from"./clsx-B-dksMZM.js";import{T as b}from"./Tag-CwQTerbc.js";import{T as d,a as m}from"./Typography-DJ2vrFdG.js";import"./close-DwLKwoz_.js";const T=({label:e,error:a=!1,tags:y,onRemove:R,className:h})=>{const o=l.useId(),i=l.useId();return r.jsxs("div",{className:c("flex flex-col gap-1",h),"aria-invalid":a,"aria-describedby":a?i:void 0,children:[e&&r.jsx(d,{as:"label",htmlFor:o,type:m.BODY_MEDIUM,className:"text-neutral-500",children:e}),r.jsx("ul",{id:o,className:c("w-full min-h-[45px] rounded-md px-4 py-3 text-base text-neutral-800 outline-none ring-1","flex flex-wrap items-start gap-2 list-none p-0 m-0",a?"ring-red-500 focus-within:ring-red-500":"ring-neutral-200 focus-within:ring-neutral-400"),children:y.map(s=>r.jsx("li",{children:r.jsx(b,{onRemove:()=>R(s),isFilled:!0,inInputWrapper:!0,inList:!0,"aria-label":`Remove ${s}`,children:s})},s))}),a&&r.jsx(d,{as:"div",id:i,type:m.LABEL,className:"text-red-600 mt-1","aria-live":"assertive",children:"Ошибка: неверный ввод"})]})};T.__docgenInfo={description:"",methods:[],displayName:"TagsInput",props:{label:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},tags:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},onRemove:{required:!0,tsType:{name:"signature",type:"function",raw:"(tag: string) => void",signature:{arguments:[{type:{name:"string"},name:"tag"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const _={title:"shared/TagsInput",component:T,tags:["autodocs"]},t={args:{label:"Tags",tags:["React","TypeScript"],onRemove:e=>console.log("Removed:",e)}},n={args:{label:"Tags",tags:["React"],error:!0,onRemove:e=>console.log("Removed:",e)}};var p,u,g;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: 'Tags',
    tags: ['React', 'TypeScript'],
    // eslint-disable-next-line no-console
    onRemove: tag => console.log('Removed:', tag)
  }
}`,...(g=(u=t.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var f,x,v;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: 'Tags',
    tags: ['React'],
    error: true,
    // eslint-disable-next-line no-console
    onRemove: tag => console.log('Removed:', tag)
  }
}`,...(v=(x=n.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};const q=["Default","ErrorState"];export{t as Default,n as ErrorState,q as __namedExportsOrder,_ as default};
