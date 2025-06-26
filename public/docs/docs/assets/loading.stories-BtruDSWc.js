import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as m}from"./utils-CBfrqCZ4.js";function g({size:r="md",className:c,text:u="Carregando...","data-testid":f="loading"}){const h={sm:"w-4 h-4",md:"w-8 h-8",lg:"w-12 h-12"};return e.jsxs("div",{className:m("flex flex-col items-center justify-center gap-3",c),"data-testid":f,children:[e.jsxs("div",{className:"relative",children:[e.jsx("div",{role:"presentation",className:m("rounded-full border-4 border-primary border-t-transparent animate-spin",h[r])}),e.jsx("div",{className:m("absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",r==="sm"&&"w-1 h-1",r==="lg"&&"w-3 h-3")})]}),u&&e.jsx("p",{className:"text-sm  animate-pulse",children:u})]})}function x(){return e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4",children:Array.from({length:8}).map((r,c)=>e.jsxs("div",{role:"presentation",className:"bg-card rounded-lg p-4 space-y-3",children:[e.jsx("div",{className:"w-full h-32 bg-muted animate-pulse rounded"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"h-4 bg-muted animate-pulse rounded w-3/4"}),e.jsx("div",{className:"h-3 bg-muted animate-pulse rounded w-1/2"})]})]},c))})}function p({className:r}){return e.jsx("div",{role:"presentation",className:m("w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin",r)})}g.__docgenInfo={description:"",methods:[],displayName:"Loading",props:{size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},text:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Carregando..."',computed:!1}},"data-testid":{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"loading"',computed:!1}}}};x.__docgenInfo={description:"",methods:[],displayName:"LoadingSkeleton"};p.__docgenInfo={description:"",methods:[],displayName:"Spinner",props:{className:{required:!1,tsType:{name:"string"},description:""}}};const v={title:"Components/Loading",component:g,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{description:"Size of the loading spinner",control:"select",options:["sm","md","lg"]},text:{description:"Text to display below the loading spinner"},className:{description:"Additional classes to apply to the loading component"}}},s={args:{size:"md",text:"Carregando..."}},a={args:{size:"sm",text:"Carregando..."}},t={args:{size:"lg",text:"Carregando..."}},n={args:{size:"md",text:void 0}},o={args:{size:"md",text:"Buscando Pokémons..."}},d={render:()=>e.jsx(x,{})},i={render:()=>e.jsx(p,{})},l={render:()=>e.jsx(p,{className:"w-10 h-10 border-4 border-red-500"})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    size: "md",
    text: "Carregando..."
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    size: "sm",
    text: "Carregando..."
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    size: "lg",
    text: "Carregando..."
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    size: "md",
    text: undefined
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    size: "md",
    text: "Buscando Pokémons..."
  }
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <LoadingSkeleton />
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <Spinner />
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <Spinner className="w-10 h-10 border-4 border-red-500" />
}`,...l.parameters?.docs?.source}}};const y=["Default","Small","Large","WithoutText","CustomText","Skeleton","SimpleSpinner","CustomSpinner"];export{l as CustomSpinner,o as CustomText,s as Default,t as Large,i as SimpleSpinner,d as Skeleton,a as Small,n as WithoutText,y as __namedExportsOrder,v as default};
