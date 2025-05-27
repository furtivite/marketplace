import{j as d}from"./jsx-runtime-D_zvdyIk.js";import"./index-D4lIrffr.js";import{c as K}from"./clsx-B-dksMZM.js";function R(e){const{children:c,className:T,variant:q="default",isSmall:F=!1,...u}=e,G="inline-flex items-center justify-center font-semibold rounded-[40px] transition-colors focus:outline-none disabled:opacity-50 disabled:pointer-events-none",H={default:"bg-primary-950 text-white hover:bg-primary-900",outline:"border border-outline text-white bg-transparent hover:bg-primary-950",white:"bg-white text-primary-950 hover:bg-neutral-100","outline-black":"border border-primary-950 text-primary-950 bg-transparent hover:bg-neutral-100"},J=F?"h-[32px] px-4 text-xs":"h-[48px] px-6 text-sm",m=K(G,H[q],J,T);return typeof e.href=="string"?d.jsx("a",{...u,href:e.href,className:m,children:c}):d.jsx("button",{...u,type:e.type??"button",className:m,children:c})}R.__docgenInfo={description:"",methods:[],displayName:"Button"};const U={title:"shared/Button",component:R,tags:["autodocs"],argTypes:{onClick:{action:"clicked"},variant:{control:"select",options:["default","outline","white","outline-black"]},isSmall:{control:"boolean"}}},r={args:{children:"Купить",variant:"default"}},a={args:{children:"Добавить",variant:"outline"}},t={args:{children:"Детали",variant:"white"}},n={args:{children:"Назад",variant:"outline-black"}},s={args:{children:"Купить",variant:"default",isSmall:!0}},o={args:{children:"Добавить",variant:"outline",isSmall:!0}},i={args:{children:"Назад",variant:"outline-black",isSmall:!0}},l={args:{children:"Перейти",href:"https://example.com",variant:"white"}};var p,h,g;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    children: 'Купить',
    variant: 'default'
  }
}`,...(g=(h=r.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var f,b,v;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    children: 'Добавить',
    variant: 'outline'
  }
}`,...(v=(b=a.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var x,S,k;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    children: 'Детали',
    variant: 'white'
  }
}`,...(k=(S=t.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};var y,w,O;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    children: 'Назад',
    variant: 'outline-black'
  }
}`,...(O=(w=n.parameters)==null?void 0:w.docs)==null?void 0:O.source}}};var B,j,N;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    children: 'Купить',
    variant: 'default',
    isSmall: true
  }
}`,...(N=(j=s.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};var D,_,A;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    children: 'Добавить',
    variant: 'outline',
    isSmall: true
  }
}`,...(A=(_=o.parameters)==null?void 0:_.docs)==null?void 0:A.source}}};var C,E,L;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    children: 'Назад',
    variant: 'outline-black',
    isSmall: true
  }
}`,...(L=(E=i.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};var W,z,I;l.parameters={...l.parameters,docs:{...(W=l.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    children: 'Перейти',
    href: 'https://example.com',
    variant: 'white'
  }
}`,...(I=(z=l.parameters)==null?void 0:z.docs)==null?void 0:I.source}}};const V=["Default","Outline","White","OutlineBlack","SmallDefault","SmallOutline","SmallOutlineBlack","AsLink"];export{l as AsLink,r as Default,a as Outline,n as OutlineBlack,s as SmallDefault,o as SmallOutline,i as SmallOutlineBlack,t as White,V as __namedExportsOrder,U as default};
