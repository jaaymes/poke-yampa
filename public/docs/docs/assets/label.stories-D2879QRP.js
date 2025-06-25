import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{L as a}from"./label-D0XK9mwR.js";import"./iframe-CbXUUqvh.js";import"./index-CnNCd_MB.js";import"./index-BRpMVhzR.js";import"./index-DDxl7a_h.js";import"./index-BYms403i.js";import"./utils-CBfrqCZ4.js";const b={title:"UI/Label",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{htmlFor:{control:{type:"text"}}}},s={args:{children:"Nome do campo"}},r={args:{htmlFor:"input-example",children:"Email"}},l={render:()=>e.jsxs(a,{children:[e.jsx("span",{className:"mr-1",children:"📧"}),"Email"]})},o={render:()=>e.jsxs(a,{children:["Nome completo",e.jsx("span",{className:"text-red-500 ml-1",children:"*"})]})},n={render:()=>e.jsxs("div",{className:"space-y-2",children:[e.jsx(a,{htmlFor:"demo-input",children:"Nome"}),e.jsx("input",{id:"demo-input",className:"border rounded px-3 py-2 w-full",placeholder:"Digite seu nome"})]})},d={render:()=>e.jsxs("div",{className:"space-y-4 w-80",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsxs(a,{htmlFor:"first-name",children:["Primeiro nome",e.jsx("span",{className:"text-red-500 ml-1",children:"*"})]}),e.jsx("input",{id:"first-name",className:"border rounded px-3 py-2 w-full",placeholder:"João",required:!0})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs(a,{htmlFor:"email",children:[e.jsx("span",{className:"mr-1",children:"📧"}),"Email"]}),e.jsx("input",{id:"email",type:"email",className:"border rounded px-3 py-2 w-full",placeholder:"joao@exemplo.com"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs(a,{htmlFor:"phone",children:[e.jsx("span",{className:"mr-1",children:"📱"}),"Telefone",e.jsx("span",{className:"text-sm text-gray-500 ml-1",children:"(opcional)"})]}),e.jsx("input",{id:"phone",type:"tel",className:"border rounded px-3 py-2 w-full",placeholder:"(11) 99999-9999"})]})]})},m={render:()=>e.jsxs("div",{className:"space-y-2 opacity-50",children:[e.jsx(a,{htmlFor:"disabled-input",children:"Campo desabilitado"}),e.jsx("input",{id:"disabled-input",className:"border rounded px-3 py-2 w-full",placeholder:"Campo desabilitado",disabled:!0})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Nome do campo"
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    htmlFor: "input-example",
    children: "Email"
  }
}`,...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <Label>
      <span className="mr-1">📧</span>
      Email
    </Label>
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <Label>
      Nome completo
      <span className="text-red-500 ml-1">*</span>
    </Label>
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-2">
      <Label htmlFor="demo-input">Nome</Label>
      <input id="demo-input" className="border rounded px-3 py-2 w-full" placeholder="Digite seu nome" />
    </div>
}`,...n.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-2 opacity-50">
      <Label htmlFor="disabled-input">Campo desabilitado</Label>
      <input id="disabled-input" className="border rounded px-3 py-2 w-full" placeholder="Campo desabilitado" disabled />
    </div>
}`,...m.parameters?.docs?.source}}};const y=["Default","WithHtmlFor","WithIcon","Required","WithInput","FormField","Disabled"];export{s as Default,m as Disabled,d as FormField,o as Required,r as WithHtmlFor,l as WithIcon,n as WithInput,y as __namedExportsOrder,b as default};
