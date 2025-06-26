import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as u}from"./iframe-CRWpp2I1.js";import{P as h}from"./index-D8jFTbpq.js";import{c as x}from"./utils-CBfrqCZ4.js";import"./index-D4VPCSyO.js";import"./index-C9CuP99N.js";import"./index-BBWlx4az.js";var b="Label",p=u.forwardRef((s,c)=>e.jsx(h.label,{...s,ref:c,onMouseDown:r=>{r.target.closest("button, input, select, textarea")||(s.onMouseDown?.(r),!r.defaultPrevented&&r.detail>1&&r.preventDefault())}}));p.displayName=b;var N=p;function a({className:s,...c}){return e.jsx(N,{"data-slot":"label",className:x("flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",s),...c})}a.__docgenInfo={description:"",methods:[],displayName:"Label"};const E={title:"UI/Label",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{htmlFor:{control:{type:"text"}}}},o={args:{children:"Nome do campo"}},l={args:{htmlFor:"input-example",children:"Email"}},n={render:()=>e.jsxs(a,{children:[e.jsx("span",{className:"mr-1",children:"📧"}),"Email"]})},d={render:()=>e.jsxs(a,{children:["Nome completo",e.jsx("span",{className:"text-red-500 ml-1",children:"*"})]})},t={render:()=>e.jsxs("div",{className:"space-y-2",children:[e.jsx(a,{htmlFor:"demo-input",children:"Nome"}),e.jsx("input",{id:"demo-input",className:"border rounded px-3 py-2 w-full",placeholder:"Digite seu nome"})]})},i={render:()=>e.jsxs("div",{className:"space-y-4 w-80",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsxs(a,{htmlFor:"first-name",children:["Primeiro nome",e.jsx("span",{className:"text-red-500 ml-1",children:"*"})]}),e.jsx("input",{id:"first-name",className:"border rounded px-3 py-2 w-full",placeholder:"João",required:!0})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs(a,{htmlFor:"email",children:[e.jsx("span",{className:"mr-1",children:"📧"}),"Email"]}),e.jsx("input",{id:"email",type:"email",className:"border rounded px-3 py-2 w-full",placeholder:"joao@exemplo.com"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs(a,{htmlFor:"phone",children:[e.jsx("span",{className:"mr-1",children:"📱"}),"Telefone",e.jsx("span",{className:"text-sm text-gray-500 ml-1",children:"(opcional)"})]}),e.jsx("input",{id:"phone",type:"tel",className:"border rounded px-3 py-2 w-full",placeholder:"(11) 99999-9999"})]})]})},m={render:()=>e.jsxs("div",{className:"space-y-2 opacity-50",children:[e.jsx(a,{htmlFor:"disabled-input",children:"Campo desabilitado"}),e.jsx("input",{id:"disabled-input",className:"border rounded px-3 py-2 w-full",placeholder:"Campo desabilitado",disabled:!0})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Nome do campo"
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    htmlFor: "input-example",
    children: "Email"
  }
}`,...l.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <Label>
      <span className="mr-1">📧</span>
      Email
    </Label>
}`,...n.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <Label>
      Nome completo
      <span className="text-red-500 ml-1">*</span>
    </Label>
}`,...d.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-2">
      <Label htmlFor="demo-input">Nome</Label>
      <input id="demo-input" className="border rounded px-3 py-2 w-full" placeholder="Digite seu nome" />
    </div>
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4 w-80">
      <div className="space-y-2">
        <Label htmlFor="first-name">
          Primeiro nome
          <span className="text-red-500 ml-1">*</span>
        </Label>
        <input id="first-name" className="border rounded px-3 py-2 w-full" placeholder="João" required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">
          <span className="mr-1">📧</span>
          Email
        </Label>
        <input id="email" type="email" className="border rounded px-3 py-2 w-full" placeholder="joao@exemplo.com" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">
          <span className="mr-1">📱</span>
          Telefone
          <span className="text-sm text-gray-500 ml-1">(opcional)</span>
        </Label>
        <input id="phone" type="tel" className="border rounded px-3 py-2 w-full" placeholder="(11) 99999-9999" />
      </div>
    </div>
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-2 opacity-50">
      <Label htmlFor="disabled-input">Campo desabilitado</Label>
      <input id="disabled-input" className="border rounded px-3 py-2 w-full" placeholder="Campo desabilitado" disabled />
    </div>
}`,...m.parameters?.docs?.source}}};const D=["Default","WithHtmlFor","WithIcon","Required","WithInput","FormField","Disabled"];export{o as Default,m as Disabled,i as FormField,d as Required,l as WithHtmlFor,n as WithIcon,t as WithInput,D as __namedExportsOrder,E as default};
