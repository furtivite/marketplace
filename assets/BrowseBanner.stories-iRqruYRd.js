import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as f}from"./index-D4lIrffr.js";import{c as g}from"./clsx-B-dksMZM.js";import{B as h}from"./Button-SjrcTJXZ.js";import{C as w}from"./Container-CaYFRYVz.js";import{T as o,a as i}from"./Typography-DJ2vrFdG.js";import{S as y}from"./arrow_right_white-BJzgy-9U.js";const s=({title:t,subtitle:m,link:a,BannerImage:u,className:x})=>{const n=f.useId();return e.jsxs("section",{"aria-labelledby":`${n}-title`,className:g("relative overflow-hidden rounded-lg",x),children:[e.jsx("div",{className:"pointer-events-none absolute inset-0 bg-gradient-to-tr from-neutral-100/80 to-transparent"}),e.jsx(w,{className:"py-0",children:e.jsxs("div",{className:"relative z-10 flex flex-col items-center justify-between gap-10 md:flex-row md:px-16",children:[e.jsxs("div",{className:"max-w-xl text-center md:text-left py-12",children:[e.jsx(o,{id:`${n}-title`,type:i.H2,as:"h2",className:"mb-4 text-neutral-900",children:t}),e.jsx(o,{type:i.BODY_REGULAR,as:"p",className:"mb-8 text-neutral-600",children:m}),e.jsx(h,{href:a.href,renderEndIcon:e.jsx(y,{}),children:a.text})]}),e.jsx("div",{className:"shrink-0",children:e.jsx(u,{})})]})})]})};s.__docgenInfo={description:"",methods:[],displayName:"BrowseBanner",props:{title:{required:!0,tsType:{name:"string"},description:""},subtitle:{required:!0,tsType:{name:"string"},description:""},link:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  text: string
  href: string
  hasArrow?: boolean
}`,signature:{properties:[{key:"text",value:{name:"string",required:!0}},{key:"href",value:{name:"string",required:!0}},{key:"hasArrow",value:{name:"boolean",required:!1}}]}},description:""},BannerImage:{required:!0,tsType:{name:"ReactFC",raw:"React.FC"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const l="/storybook/assets/browse-poncho-C1DdJq3e.png",j="/storybook/assets/browse-poncho@2x-CFc7gIST.png",b=()=>e.jsxs("picture",{children:[e.jsx("source",{srcSet:`${j} 2x, ${l} 1x`}),e.jsx("img",{src:l,alt:"",width:225,height:311})]}),A={title:"pages/HomePage/BrowseBanner",component:s,parameters:{layout:"fullscreen",backgrounds:{default:"white",values:[{name:"white",value:"#ffffff"}]}}},r={render:t=>e.jsx(s,{...t}),args:{title:"Browse Our Fashion Paradise!",subtitle:"Step into a world of style and explore our diverse collection of clothing categories.",link:{text:"Start Browsing",href:"#",hasArrow:!0},BannerImage:b}};var c,d,p;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => <BrowseBanner {...args} />,
  args: {
    title: 'Browse Our Fashion Paradise!',
    subtitle: 'Step into a world of style and explore our diverse collection of clothing categories.',
    link: {
      text: 'Start Browsing',
      href: '#',
      hasArrow: true
    },
    BannerImage
  }
}`,...(p=(d=r.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const I=["Default"];export{r as Default,I as __namedExportsOrder,A as default};
