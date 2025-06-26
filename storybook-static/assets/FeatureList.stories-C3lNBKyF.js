import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{R}from"./index-D4lIrffr.js";import{F as v,s as w}from"./star-badge-OT73sKtD.js";import"./Typography-DJ2vrFdG.js";import"./clsx-B-dksMZM.js";const x=({items:t})=>{const F=R.useMemo(()=>t.length<=3?t:[...t].sort(()=>Math.random()-.5).slice(0,3),[t]);return o.jsx("ul",{className:"flex justify-start gap-[54px]",children:F.map((S,j)=>o.jsx("li",{children:o.jsx(v,{...S})},j))})};x.__docgenInfo={description:"",methods:[],displayName:"FeatureList",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  icon: React.FC
  title: string
  subtitle: string
}`,signature:{properties:[{key:"icon",value:{name:"ReactFC",raw:"React.FC",required:!0}},{key:"title",value:{name:"string",required:!0}},{key:"subtitle",value:{name:"string",required:!0}}]}}],raw:"TFeatureProps[]"},description:"Массив данных для отображения"}}};const e=()=>o.jsx("img",{src:w,alt:"",width:24,height:24}),i=[{icon:e,title:"Free Shipping",subtitle:"On orders over $100"},{icon:e,title:"Secure Payment",subtitle:"100% secure checkout"},{icon:e,title:"24/7 Support",subtitle:"We are here to help"}],B={title:"pages/HomePage/FeatureList",component:x,tags:["autodocs"],argTypes:{items:{control:!1}}},s={args:{items:i}},r={args:{items:i.slice(0,1)}},a={args:{items:i.slice(0,2)}},n={args:{items:[...i,{icon:e,title:"Easy Returns",subtitle:"30-day return policy"},{icon:e,title:"Member Discounts",subtitle:"Exclusive offers"}]}};var c,m,u;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    items: sampleItems
  }
}`,...(u=(m=s.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var l,p,d;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    items: sampleItems.slice(0, 1)
  }
}`,...(d=(p=r.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var g,y,I;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    items: sampleItems.slice(0, 2)
  }
}`,...(I=(y=a.parameters)==null?void 0:y.docs)==null?void 0:I.source}}};var f,b,h;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    items: [...sampleItems, {
      icon: StarBadgeIcon,
      title: 'Easy Returns',
      subtitle: '30-day return policy'
    }, {
      icon: StarBadgeIcon,
      title: 'Member Discounts',
      subtitle: 'Exclusive offers'
    }]
  }
}`,...(h=(b=n.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};const D=["Default","OneItem","TwoItems","ManyItems"];export{s as Default,n as ManyItems,r as OneItem,a as TwoItems,D as __namedExportsOrder,B as default};
