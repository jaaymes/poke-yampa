import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{B as h}from"./button-DS3kFZGj.js";import"./iframe-CRWpp2I1.js";import{c as b}from"./utils-CBfrqCZ4.js";import"./index-BBWlx4az.js";import"./index-CdJFUDDL.js";function a({className:d,type:p="text",...u}){return e.jsx("input",{type:p,"data-slot":"input",className:b("file:text-foreground placeholder:text-muted selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-lg border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm","focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]","aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",d),...u})}a.__docgenInfo={description:"",methods:[],displayName:"Input",props:{type:{defaultValue:{value:'"text"',computed:!1},required:!1}}};const w={title:"UI/Input",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{type:{control:{type:"select"},options:["text","password","email","number","tel","url","search"]},disabled:{control:{type:"boolean"}},placeholder:{control:{type:"text"}}}},r={args:{placeholder:"Digite aqui..."}},s={args:{value:"Valor pré-definido",readOnly:!0}},o={args:{type:"password",placeholder:"Digite sua senha"}},t={args:{type:"email",placeholder:"seu@email.com"}},l={args:{type:"number",placeholder:"123"}},n={args:{placeholder:"Campo desabilitado",disabled:!0}},i={args:{type:"search",placeholder:"Buscar..."}},c={render:()=>e.jsxs("div",{className:"space-y-2",children:[e.jsx("label",{htmlFor:"input-with-label",className:"text-sm font-medium",children:"Nome completo"}),e.jsx(a,{id:"input-with-label",placeholder:"Digite seu nome completo"})]})},m={render:()=>e.jsxs("form",{className:"space-y-4 w-80",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("label",{htmlFor:"name",className:"text-sm font-medium",children:"Nome"}),e.jsx(a,{id:"name",placeholder:"Seu nome"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("label",{htmlFor:"email",className:"text-sm font-medium",children:"Email"}),e.jsx(a,{id:"email",type:"email",placeholder:"seu@email.com"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("label",{htmlFor:"password",className:"text-sm font-medium",children:"Senha"}),e.jsx(a,{id:"password",type:"password",placeholder:"••••••••"})]}),e.jsx(h,{type:"button",children:"Enviar"})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "Digite aqui..."
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    value: "Valor pré-definido",
    readOnly: true
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "Campo desabilitado",
    disabled: true
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    type: "search",
    placeholder: "Buscar..."
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-2">
      <label htmlFor="input-with-label" className="text-sm font-medium">
        Nome completo
      </label>
      <Input id="input-with-label" placeholder="Digite seu nome completo" />
    </div>
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const j=["Default","WithValue","Password","Email","Number","Disabled","Search","WithLabel","FormExample"];export{r as Default,n as Disabled,t as Email,m as FormExample,l as Number,o as Password,i as Search,c as WithLabel,s as WithValue,j as __namedExportsOrder,w as default};
