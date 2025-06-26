import{j as m}from"./jsx-runtime-D_zvdyIk.js";import"./iframe-CRWpp2I1.js";import{S as g}from"./index-BBWlx4az.js";import{c as v}from"./index-CdJFUDDL.js";import{c as f}from"./utils-CBfrqCZ4.js";const h=v("inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",secondary:"border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",destructive:"border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"}},defaultVariants:{variant:"default"}});function i({className:c,variant:d,asChild:u=!1,...l}){const p=u?g:"span";return m.jsx(p,{"data-slot":"badge",className:f(h({variant:d}),c),...l})}i.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{asChild:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const w={title:"UI/Badge",component:i,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["default","secondary","destructive","outline"]},asChild:{control:{type:"boolean"}}}},r={args:{children:"Badge"}},e={args:{variant:"secondary",children:"Secundário"}},a={args:{variant:"destructive",children:"Erro"}},s={args:{variant:"outline",children:"Contorno"}},t={args:{children:"🏆 Conquista"}},o={args:{children:"42"}},n={args:{variant:"secondary",children:"Ativo"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Badge"
  }
}`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "secondary",
    children: "Secundário"
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "destructive",
    children: "Erro"
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "outline",
    children: "Contorno"
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    children: "🏆 Conquista"
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    children: "42"
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "secondary",
    children: "Ativo"
  }
}`,...n.parameters?.docs?.source}}};const B=["Default","Secondary","Destructive","Outline","WithIcon","Number","Status"];export{r as Default,a as Destructive,o as Number,s as Outline,e as Secondary,n as Status,t as WithIcon,B as __namedExportsOrder,w as default};
