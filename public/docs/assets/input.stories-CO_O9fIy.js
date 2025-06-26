import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{B as d}from"./button-BOM6QS-j.js";import{I as a}from"./input-BHagqedl.js";import"./index-CC7Hq5D4.js";import"./iframe-p_J3wOFN.js";import"./index-CdJFUDDL.js";import"./utils-CBfrqCZ4.js";const N={title:"UI/Input",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{type:{control:{type:"select"},options:["text","password","email","number","tel","url","search"]},disabled:{control:{type:"boolean"}},placeholder:{control:{type:"text"}}}},s={args:{placeholder:"Digite aqui..."}},r={args:{value:"Valor pré-definido",readOnly:!0}},o={args:{type:"password",placeholder:"Digite sua senha"}},t={args:{type:"email",placeholder:"seu@email.com"}},l={args:{type:"number",placeholder:"123"}},m={args:{placeholder:"Campo desabilitado",disabled:!0}},n={args:{type:"search",placeholder:"Buscar..."}},c={render:()=>e.jsxs("div",{className:"space-y-2",children:[e.jsx("label",{htmlFor:"input-with-label",className:"text-sm font-medium",children:"Nome completo"}),e.jsx(a,{id:"input-with-label",placeholder:"Digite seu nome completo"})]})},p={render:()=>e.jsxs("form",{className:"space-y-4 w-80",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("label",{htmlFor:"name",className:"text-sm font-medium",children:"Nome"}),e.jsx(a,{id:"name",placeholder:"Seu nome"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("label",{htmlFor:"email",className:"text-sm font-medium",children:"Email"}),e.jsx(a,{id:"email",type:"email",placeholder:"seu@email.com"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("label",{htmlFor:"password",className:"text-sm font-medium",children:"Senha"}),e.jsx(a,{id:"password",type:"password",placeholder:"••••••••"})]}),e.jsx(d,{type:"button",children:"Enviar"})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "Digite aqui..."
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    value: "Valor pré-definido",
    readOnly: true
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    type: "password",
    placeholder: "Digite sua senha"
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    type: "email",
    placeholder: "seu@email.com"
  }
}`,...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    type: "number",
    placeholder: "123"
  }
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "Campo desabilitado",
    disabled: true
  }
}`,...m.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    type: "search",
    placeholder: "Buscar..."
  }
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-2">
      <label htmlFor="input-with-label" className="text-sm font-medium">
        Nome completo
      </label>
      <Input id="input-with-label" placeholder="Digite seu nome completo" />
    </div>
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <form className="space-y-4 w-80">
      <div className="space-y-2">
        <label htmlFor="name" className="text-sm font-medium">
          Nome
        </label>
        <Input id="name" placeholder="Seu nome" />
      </div>
      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium">
          Email
        </label>
        <Input id="email" type="email" placeholder="seu@email.com" />
      </div>
      <div className="space-y-2">
        <label htmlFor="password" className="text-sm font-medium">
          Senha
        </label>
        <Input id="password" type="password" placeholder="••••••••" />
      </div>
      <Button type="button">Enviar</Button>
    </form>
}`,...p.parameters?.docs?.source}}};const f=["Default","WithValue","Password","Email","Number","Disabled","Search","WithLabel","FormExample"];export{s as Default,m as Disabled,t as Email,p as FormExample,l as Number,o as Password,n as Search,c as WithLabel,r as WithValue,f as __namedExportsOrder,N as default};
