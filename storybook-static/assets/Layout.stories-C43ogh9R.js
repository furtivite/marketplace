import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as l}from"./index-D4lIrffr.js";import{c as R}from"./clsx-B-dksMZM.js";import{C as L}from"./Container-CaYFRYVz.js";import{H as T,O as B,M as O,R as V,a as u}from"./Header-ldZduD10.js";import{F as C}from"./Footer-CjLvHrr6.js";import{N as D}from"./NotificationBar-DaCprFOD.js";import"./index-Dc97iC8r.js";import"./index-DsJinFGm.js";import"./Input-RG1viHTN.js";import"./Typography-DJ2vrFdG.js";import"./Logo-lChouJsc.js";import"./chevron-down-DzKsIptV.js";import"./search-Doy9JpPv.js";import"./Newsletter-BiEGTMl8.js";import"./Button-SjrcTJXZ.js";const d=l.memo(({withoutHeader:t=!1,notificationBar:r,hasFooter:H=!1,hasNewsletter:b=!1,hasFullWidth:P=!1})=>{const[S,_]=l.useState(!1);l.useEffect(()=>{const c=()=>_(window.scrollY>0);return window.addEventListener("scroll",c,{passive:!0}),()=>window.removeEventListener("scroll",c)},[]);const E=!!r||!t;return e.jsxs("div",{className:"min-h-screen flex flex-col",children:[E&&e.jsxs("div",{className:R("sticky top-0 z-50 bg-white-0 transition-shadow",S&&"shadow-[0px_4px_8px_0px_rgba(182,183,188,0.2)]"),children:[r&&e.jsx(D,{text:r.text,link:r.link}),!t&&e.jsx(T,{})]}),e.jsx("main",{className:"flex-grow",children:e.jsx(L,{fullWidth:P,className:"py-8",children:e.jsx(B,{})})}),H&&e.jsx(C,{hasNewsletter:b})]})});d.__docgenInfo={description:"",methods:[],displayName:"Layout",props:{notificationBar:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  text: string;
  link?: {
    text: string;
    href: string;
  };
}`,signature:{properties:[{key:"text",value:{name:"string",required:!0}},{key:"link",value:{name:"signature",type:"object",raw:`{
  text: string;
  href: string;
}`,signature:{properties:[{key:"text",value:{name:"string",required:!0}},{key:"href",value:{name:"string",required:!0}}]},required:!1}}]}},description:""},withoutHeader:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},hasFooter:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},hasNewsletter:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},hasFullWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const se={title:"widgets/Layout",component:d,decorators:[(t,r)=>e.jsx(O,{initialEntries:["/"],children:e.jsx(V,{children:e.jsx(u,{element:e.jsx(d,{...r.args}),children:e.jsx(u,{path:"/",element:e.jsx(t,{})})})})})]},s={args:{},render:()=>e.jsx("div",{children:"Page content"})},a={args:{withoutHeader:!0},render:()=>e.jsx("div",{children:"Page content"})},o={args:{notificationBar:{text:"Hello world!",link:{href:"#",text:"Read more"}}},render:()=>e.jsx("div",{children:"Page content"})},n={args:{hasFullWidth:!0},render:()=>e.jsx("div",{children:"Full-width page content"})},i={args:{hasFooter:!0,hasNewsletter:!0},render:()=>e.jsx("div",{children:"Page content"})};var m,p,f;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {},
  render: () => <div>Page content</div>
}`,...(f=(p=s.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};var h,g,x;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    withoutHeader: true
  },
  render: () => <div>Page content</div>
}`,...(x=(g=a.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var v,j,w;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    notificationBar: {
      text: 'Hello world!',
      link: {
        href: '#',
        text: 'Read more'
      }
    }
  },
  render: () => <div>Page content</div>
}`,...(w=(j=o.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};var y,F,N;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    hasFullWidth: true
  },
  render: () => <div>Full-width page content</div>
}`,...(N=(F=n.parameters)==null?void 0:F.docs)==null?void 0:N.source}}};var W,k,q;i.parameters={...i.parameters,docs:{...(W=i.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    hasFooter: true,
    hasNewsletter: true
  },
  render: () => <div>Page content</div>
}`,...(q=(k=i.parameters)==null?void 0:k.docs)==null?void 0:q.source}}};const ae=["Default","WithoutHeader","WithNotificationBar","FullWidth","WithFooter"];export{s as Default,n as FullWidth,i as WithFooter,o as WithNotificationBar,a as WithoutHeader,ae as __namedExportsOrder,se as default};
