import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as N}from"./utils-CBfrqCZ4.js";function s({className:p,...a}){return e.jsx("div",{className:N("animate-pulse rounded-md bg-muted/30",p),...a})}s.__docgenInfo={description:"",methods:[],displayName:"Skeleton"};const x={title:"UI/Skeleton",component:s,parameters:{layout:"centered"},tags:["autodocs"]},l={args:{className:"h-4 w-20"}},r={render:()=>e.jsxs("div",{className:"space-y-2",children:[e.jsx(s,{className:"h-4 w-[250px]"}),e.jsx(s,{className:"h-4 w-[200px]"}),e.jsx(s,{className:"h-4 w-[150px]"})]})},c={args:{className:"h-12 w-12 rounded-full"}},n={render:()=>e.jsxs("div",{className:"flex items-center space-x-4",children:[e.jsx(s,{className:"h-12 w-12 rounded-full"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(s,{className:"h-4 w-[250px]"}),e.jsx(s,{className:"h-4 w-[200px]"})]})]})},m={render:()=>e.jsxs("div",{className:"space-y-3",children:[e.jsx(s,{className:"h-6 w-[300px]"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(s,{className:"h-4 w-full"}),e.jsx(s,{className:"h-4 w-full"}),e.jsx(s,{className:"h-4 w-[80%]"})]}),e.jsxs("div",{className:"flex items-center space-x-4",children:[e.jsx(s,{className:"h-8 w-8 rounded-full"}),e.jsxs("div",{className:"space-y-1",children:[e.jsx(s,{className:"h-3 w-[100px]"}),e.jsx(s,{className:"h-3 w-[80px]"})]})]})]})},o={render:()=>e.jsx("div",{className:"space-y-4",children:Array.from({length:5}).map((p,a)=>e.jsxs("div",{className:"flex items-center space-x-4",children:[e.jsx(s,{className:"h-10 w-10 rounded-md"}),e.jsxs("div",{className:"space-y-2 flex-1",children:[e.jsx(s,{className:"h-4 w-[60%]"}),e.jsx(s,{className:"h-3 w-[40%]"})]}),e.jsx(s,{className:"h-8 w-16"})]},a))})},d={render:()=>e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"grid grid-cols-4 gap-4",children:[e.jsx(s,{className:"h-4 w-full"}),e.jsx(s,{className:"h-4 w-full"}),e.jsx(s,{className:"h-4 w-full"}),e.jsx(s,{className:"h-4 w-full"})]}),Array.from({length:4}).map((p,a)=>e.jsxs("div",{className:"grid grid-cols-4 gap-4",children:[e.jsx(s,{className:"h-4 w-full"}),e.jsx(s,{className:"h-4 w-full"}),e.jsx(s,{className:"h-4 w-full"}),e.jsx(s,{className:"h-4 w-full"})]},a))]})},t={args:{className:"h-9 w-20"}},i={args:{className:"h-16 w-16 rounded-full"}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    className: "h-4 w-20"
  }
}`,...l.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-2">
      <Skeleton className="h-4 w-[250px]" />
      <Skeleton className="h-4 w-[200px]" />
      <Skeleton className="h-4 w-[150px]" />
    </div>
}`,...r.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    className: "h-12 w-12 rounded-full"
  }
}`,...c.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center space-x-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
}`,...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-3">
      <Skeleton className="h-6 w-[300px]" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-[80%]" />
      </div>
      <div className="flex items-center space-x-4">
        <Skeleton className="h-8 w-8 rounded-full" />
        <div className="space-y-1">
          <Skeleton className="h-3 w-[100px]" />
          <Skeleton className="h-3 w-[80px]" />
        </div>
      </div>
    </div>
}`,...m.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      {Array.from({
      length: 5
    }).map((_, i) => <div key={i} className="flex items-center space-x-4">
          <Skeleton className="h-10 w-10 rounded-md" />
          <div className="space-y-2 flex-1">
            <Skeleton className="h-4 w-[60%]" />
            <Skeleton className="h-3 w-[40%]" />
          </div>
          <Skeleton className="h-8 w-16" />
        </div>)}
    </div>
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-3">
      <div className="grid grid-cols-4 gap-4">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
      </div>
      {Array.from({
      length: 4
    }).map((_, i) => <div key={i} className="grid grid-cols-4 gap-4">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
        </div>)}
    </div>
}`,...d.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    className: "h-9 w-20"
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    className: "h-16 w-16 rounded-full"
  }
}`,...i.parameters?.docs?.source}}};const w=["Default","Text","Circle","Card","Article","List","Table","Button","Avatar"];export{m as Article,i as Avatar,t as Button,n as Card,c as Circle,l as Default,o as List,d as Table,r as Text,w as __namedExportsOrder,x as default};
