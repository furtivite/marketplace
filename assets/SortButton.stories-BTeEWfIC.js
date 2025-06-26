import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as E}from"./index-D4lIrffr.js";import{c as l}from"./clsx-B-dksMZM.js";import{S as A}from"./chevron-down-DzKsIptV.js";import{T as D,a as I}from"./Typography-DJ2vrFdG.js";const i=({order:e,onChange:o,label:c="Sort",disabled:d,className:T})=>{const j=e==="asc"?"desc":"asc",B=`${c}, sorted ${e==="asc"?"ascending":"descending"}`;return r.jsxs("button",{type:"button",className:l("flex items-center gap-1 px-3 py-2 rounded select-none transition focus:outline-none focus-visible:ring-2","hover:bg-neutral-100 active:bg-neutral-200",d&&"pointer-events-none opacity-60",T),"aria-label":B,"aria-pressed":"true",disabled:d,tabIndex:0,onClick:()=>o(j),children:[r.jsx(D,{as:"span",type:I.LABEL_UPPERCASE,className:"mr-1",children:e==="asc"?"Ascending":"Descending"}),r.jsx("span",{className:l("transition-transform duration-200",e==="desc"?"rotate-180":"rotate-0"),"aria-hidden":"true",children:r.jsx(A,{className:"w-5 h-5"})})]})};i.__docgenInfo={description:"",methods:[],displayName:"SortButton",props:{order:{required:!0,tsType:{name:"union",raw:"'asc' | 'desc'",elements:[{name:"literal",value:"'asc'"},{name:"literal",value:"'desc'"}]},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(order: SortOrder) => void",signature:{arguments:[{type:{name:"union",raw:"'asc' | 'desc'",elements:[{name:"literal",value:"'asc'"},{name:"literal",value:"'desc'"}]},name:"order"}],return:{name:"void"}}},description:""},label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Sort'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const L={title:"shared/SortButton",component:i,tags:["autodocs"],args:{label:"By price",disabled:!1}},a={args:{order:"asc",onChange:()=>{}}},s={args:{order:"desc",onChange:()=>{}}},n={args:{order:"asc",disabled:!0,onChange:()=>{}}},N=e=>{const[o,c]=E.useState("asc");return r.jsx(i,{...e,order:o,onChange:c,label:"By name"})},t={render:e=>r.jsx(N,{...e})};var u,m,p;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    order: 'asc',
    onChange: () => {}
  }
}`,...(p=(m=a.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var g,f,h;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    order: 'desc',
    onChange: () => {}
  }
}`,...(h=(f=s.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var b,v,S;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    order: 'asc',
    disabled: true,
    onChange: () => {}
  }
}`,...(S=(v=n.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var x,y,C;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => <InteractiveSortButton {...args} />
}`,...(C=(y=t.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};const R=["Ascending","Descending","Disabled","Interactive"];export{a as Ascending,s as Descending,n as Disabled,t as Interactive,R as __namedExportsOrder,L as default};
