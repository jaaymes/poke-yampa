import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{B as e}from"./button-CEI8rQMb.js";import{D as a,a as l,b as t,c as d,d as c,e as m,f as u,g as p}from"./drawer-BFHuJbAz.js";import"./index-BYms403i.js";import"./iframe-CbXUUqvh.js";import"./index-CdJFUDDL.js";import"./utils-CBfrqCZ4.js";import"./index-PB5KM-sP.js";import"./index-CfWzOl4K.js";import"./index-CnNCd_MB.js";import"./index-BRpMVhzR.js";import"./index-DDxl7a_h.js";import"./index-VfgcX-yS.js";const T={title:"UI/Drawer",component:a,parameters:{layout:"centered"},tags:["autodocs"]},n={args:{},render:()=>r.jsxs(a,{children:[r.jsx(l,{asChild:!0,children:r.jsx(e,{variant:"outline",children:"Abrir Drawer"})}),r.jsxs(t,{children:[r.jsxs(d,{children:[r.jsx(c,{children:"Título do Drawer"}),r.jsx(m,{children:"Esta é uma descrição do drawer. Você pode adicionar qualquer conteúdo aqui."})]}),r.jsx("div",{className:"p-4",children:r.jsx("p",{children:"Conteúdo principal do drawer vai aqui."})}),r.jsxs(u,{children:[r.jsx(e,{children:"Confirmar"}),r.jsx(p,{asChild:!0,children:r.jsx(e,{variant:"outline",children:"Cancelar"})})]})]})]})},s={args:{},render:()=>r.jsxs(a,{children:[r.jsx(l,{asChild:!0,children:r.jsx(e,{children:"Editar Perfil"})}),r.jsxs(t,{children:[r.jsxs(d,{children:[r.jsx(c,{children:"Editar Perfil"}),r.jsx(m,{children:"Faça alterações no seu perfil aqui. Clique em salvar quando terminar."})]}),r.jsxs("div",{className:"p-4 space-y-4",children:[r.jsxs("div",{className:"space-y-2",children:[r.jsx("label",{htmlFor:"name",className:"text-sm font-medium",children:"Nome"}),r.jsx("input",{id:"name",placeholder:"Seu nome",className:"w-full px-3 py-2 border rounded-md"})]}),r.jsxs("div",{className:"space-y-2",children:[r.jsx("label",{htmlFor:"email",className:"text-sm font-medium",children:"Email"}),r.jsx("input",{id:"email",type:"email",placeholder:"seu@email.com",className:"w-full px-3 py-2 border rounded-md"})]})]}),r.jsxs(u,{children:[r.jsx(e,{children:"Salvar Alterações"}),r.jsx(p,{asChild:!0,children:r.jsx(e,{variant:"outline",children:"Cancelar"})})]})]})]})},i={args:{},render:()=>r.jsxs(a,{children:[r.jsx(l,{asChild:!0,children:r.jsx(e,{variant:"secondary",children:"Menu"})}),r.jsxs(t,{children:[r.jsxs("div",{className:"p-4",children:[r.jsx("h3",{className:"font-semibold text-lg mb-4",children:"Menu de Navegação"}),r.jsxs("nav",{className:"space-y-2",children:[r.jsx("a",{href:"#",className:"block p-2 hover:bg-gray-100 rounded",children:"Início"}),r.jsx("a",{href:"#",className:"block p-2 hover:bg-gray-100 rounded",children:"Sobre"}),r.jsx("a",{href:"#",className:"block p-2 hover:bg-gray-100 rounded",children:"Contato"})]})]}),r.jsx(u,{children:r.jsx(p,{asChild:!0,children:r.jsx(e,{variant:"outline",children:"Fechar"})})})]})]})},o={args:{},render:()=>r.jsxs(a,{children:[r.jsx(l,{asChild:!0,children:r.jsx(e,{variant:"ghost",children:"Informações"})}),r.jsxs(t,{children:[r.jsxs(d,{children:[r.jsx(c,{children:"Informações Importantes"}),r.jsx(m,{children:"Algumas informações que você precisa saber."})]}),r.jsx("div",{className:"p-4",children:r.jsxs("ul",{className:"space-y-2",children:[r.jsx("li",{children:"• Primeira informação importante"}),r.jsx("li",{children:"• Segunda informação relevante"}),r.jsx("li",{children:"• Terceira informação útil"})]})})]})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {},
  render: () => <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Abrir Drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Título do Drawer</DrawerTitle>
          <DrawerDescription>
            Esta é uma descrição do drawer. Você pode adicionar qualquer
            conteúdo aqui.
          </DrawerDescription>
        </DrawerHeader>
        <div className="p-4">
          <p>Conteúdo principal do drawer vai aqui.</p>
        </div>
        <DrawerFooter>
          <Button>Confirmar</Button>
          <DrawerClose asChild>
            <Button variant="outline">Cancelar</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {},
  render: () => <Drawer>
      <DrawerTrigger asChild>
        <Button>Editar Perfil</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Editar Perfil</DrawerTitle>
          <DrawerDescription>
            Faça alterações no seu perfil aqui. Clique em salvar quando
            terminar.
          </DrawerDescription>
        </DrawerHeader>
        <div className="p-4 space-y-4">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium">
              Nome
            </label>
            <input id="name" placeholder="Seu nome" className="w-full px-3 py-2 border rounded-md" />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <input id="email" type="email" placeholder="seu@email.com" className="w-full px-3 py-2 border rounded-md" />
          </div>
        </div>
        <DrawerFooter>
          <Button>Salvar Alterações</Button>
          <DrawerClose asChild>
            <Button variant="outline">Cancelar</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {},
  render: () => <Drawer>
      <DrawerTrigger asChild>
        <Button variant="secondary">Menu</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="p-4">
          <h3 className="font-semibold text-lg mb-4">Menu de Navegação</h3>
          <nav className="space-y-2">
            <a href="#" className="block p-2 hover:bg-gray-100 rounded">
              Início
            </a>
            <a href="#" className="block p-2 hover:bg-gray-100 rounded">
              Sobre
            </a>
            <a href="#" className="block p-2 hover:bg-gray-100 rounded">
              Contato
            </a>
          </nav>
        </div>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outline">Fechar</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {},
  render: () => <Drawer>
      <DrawerTrigger asChild>
        <Button variant="ghost">Informações</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Informações Importantes</DrawerTitle>
          <DrawerDescription>
            Algumas informações que você precisa saber.
          </DrawerDescription>
        </DrawerHeader>
        <div className="p-4">
          <ul className="space-y-2">
            <li>• Primeira informação importante</li>
            <li>• Segunda informação relevante</li>
            <li>• Terceira informação útil</li>
          </ul>
        </div>
      </DrawerContent>
    </Drawer>
}`,...o.parameters?.docs?.source}}};const F=["Padrao","ComFormulario","Simples","SemFooter"];export{s as ComFormulario,n as Padrao,o as SemFooter,i as Simples,F as __namedExportsOrder,T as default};
