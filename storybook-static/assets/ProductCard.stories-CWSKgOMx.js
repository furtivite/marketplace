import{m as e,P as f}from"./mockProducts-DKROpG_O.js";import"./jsx-runtime-D_zvdyIk.js";import"./clsx-B-dksMZM.js";import"./Button-SjrcTJXZ.js";import"./Typography-DJ2vrFdG.js";import"./index-D4lIrffr.js";import"./add-to-cart_white-0dkb7sx0.js";const x={title:"entities/product/ProductCard",component:f,tags:["autodocs"],args:{product:e[0],showStockStatus:!0},argTypes:{onAddToCart:{action:"add-to-cart"},onToggleLike:{action:"toggle-like"},showStockStatus:{control:"boolean",description:"Показывать ли статус наличия товара"}}},t={},o={args:{product:{...e[0],isLiked:!0}}},r={args:{product:{...e[0],isInStock:!1}}},s={args:{showStockStatus:!1}};var a,c,n;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:"{}",...(n=(c=t.parameters)==null?void 0:c.docs)==null?void 0:n.source}}};var u,d,i;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    product: {
      ...mockProducts[0],
      isLiked: true
    }
  }
}`,...(i=(d=o.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};var p,m,S;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    product: {
      ...mockProducts[0],
      isInStock: false
    }
  }
}`,...(S=(m=r.parameters)==null?void 0:m.docs)==null?void 0:S.source}}};var k,g,l;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    showStockStatus: false
  }
}`,...(l=(g=s.parameters)==null?void 0:g.docs)==null?void 0:l.source}}};const D=["Default","Liked","OutOfStock","WithoutStockStatus"];export{t as Default,o as Liked,r as OutOfStock,s as WithoutStockStatus,D as __namedExportsOrder,x as default};
