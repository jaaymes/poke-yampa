import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{D as o,a as i,b as a,c as n,d as r,e as u,f as s}from"./dialog-BmLS3lJf.js";import"./index-PB5KM-sP.js";import"./iframe-CbXUUqvh.js";import"./index-CfWzOl4K.js";import"./index-BYms403i.js";import"./index-CnNCd_MB.js";import"./index-BRpMVhzR.js";import"./index-DDxl7a_h.js";import"./index-VfgcX-yS.js";import"./utils-CBfrqCZ4.js";const C={title:"UI/Dialog",parameters:{layout:"centered"},tags:["autodocs"]},t={render:()=>e.jsxs(o,{children:[e.jsx(i,{className:"px-4 py-2 bg-primary text-white rounded",children:"Abrir Dialog"}),e.jsxs(a,{children:[e.jsxs(n,{children:[e.jsx(r,{children:"Título do Dialog"}),e.jsx(u,{children:"Esta é a descrição do dialog. Aqui você pode adicionar informações importantes para o usuário."})]}),e.jsx("div",{className:"py-4",children:e.jsx("p",{children:"Conteúdo principal do dialog vai aqui."})}),e.jsxs(s,{children:[e.jsx("button",{className:"px-4 py-2 border rounded",children:"Cancelar"}),e.jsx("button",{className:"px-4 py-2 bg-primary text-white rounded",children:"Confirmar"})]})]})]})},l={render:()=>e.jsxs(o,{children:[e.jsx(i,{className:"px-4 py-2 bg-secondary text-white rounded",children:"Dialog sem X"}),e.jsxs(a,{showCloseButton:!1,children:[e.jsxs(n,{children:[e.jsx(r,{children:"Dialog sem botão fechar"}),e.jsx(u,{children:"Este dialog não possui o botão X no canto superior direito."})]}),e.jsx(s,{children:e.jsx("button",{className:"px-4 py-2 bg-primary text-white rounded",children:"Fechar"})})]})]})},d={render:()=>e.jsxs(o,{children:[e.jsx(i,{className:"px-4 py-2 bg-outline border rounded",children:"Dialog Simples"}),e.jsxs(a,{children:[e.jsx(n,{children:e.jsx(r,{children:"Confirmação"})}),e.jsx("p",{children:"Tem certeza que deseja continuar?"}),e.jsxs(s,{children:[e.jsx("button",{className:"px-3 py-1 text-sm border rounded",children:"Não"}),e.jsx("button",{className:"px-3 py-1 text-sm bg-red-500 text-white rounded",children:"Sim, continuar"})]})]})]})},c={render:()=>e.jsxs(o,{children:[e.jsx(i,{className:"px-4 py-2 bg-primary text-white rounded",children:"Dialog com Conteúdo Longo"}),e.jsxs(a,{className:"max-w-2xl",children:[e.jsxs(n,{children:[e.jsx(r,{children:"Termos de Uso"}),e.jsx(u,{children:"Leia atentamente os termos de uso antes de prosseguir."})]}),e.jsx("div",{className:"max-h-96 overflow-y-auto py-4",children:e.jsxs("div",{className:"space-y-4 text-sm",children:[e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."}),e.jsx("p",{children:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt."}),e.jsx("p",{children:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae."}),e.jsx("p",{children:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate."}),e.jsx("p",{children:"Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus."})]})}),e.jsxs(s,{children:[e.jsx("button",{className:"px-4 py-2 border rounded",children:"Recusar"}),e.jsx("button",{className:"px-4 py-2 bg-primary text-white rounded",children:"Aceitar Termos"})]})]})]})},m={render:()=>e.jsxs(o,{children:[e.jsx(i,{className:"px-4 py-2 bg-primary text-white rounded",children:"Novo Usuário"}),e.jsxs(a,{children:[e.jsxs(n,{children:[e.jsx(r,{children:"Criar Novo Usuário"}),e.jsx(u,{children:"Preencha as informações abaixo para criar um novo usuário."})]}),e.jsxs("form",{className:"space-y-4 py-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("label",{className:"text-sm font-medium",children:"Nome completo"}),e.jsx("input",{className:"w-full px-3 py-2 border rounded-md",placeholder:"Digite o nome completo"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("label",{className:"text-sm font-medium",children:"Email"}),e.jsx("input",{type:"email",className:"w-full px-3 py-2 border rounded-md",placeholder:"email@exemplo.com"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("label",{className:"text-sm font-medium",children:"Cargo"}),e.jsxs("select",{className:"w-full px-3 py-2 border rounded-md",children:[e.jsx("option",{children:"Selecione um cargo"}),e.jsx("option",{children:"Desenvolvedor"}),e.jsx("option",{children:"Designer"}),e.jsx("option",{children:"Gerente"})]})]})]}),e.jsxs(s,{children:[e.jsx("button",{className:"px-4 py-2 border rounded",children:"Cancelar"}),e.jsx("button",{className:"px-4 py-2 bg-primary text-white rounded",children:"Criar Usuário"})]})]})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <Dialog>
      <DialogTrigger className="px-4 py-2 bg-primary text-white rounded">
        Abrir Dialog
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Título do Dialog</DialogTitle>
          <DialogDescription>
            Esta é a descrição do dialog. Aqui você pode adicionar informações
            importantes para o usuário.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <p>Conteúdo principal do dialog vai aqui.</p>
        </div>
        <DialogFooter>
          <button className="px-4 py-2 border rounded">Cancelar</button>
          <button className="px-4 py-2 bg-primary text-white rounded">
            Confirmar
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
}`,...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <Dialog>
      <DialogTrigger className="px-4 py-2 bg-secondary text-white rounded">
        Dialog sem X
      </DialogTrigger>
      <DialogContent showCloseButton={false}>
        <DialogHeader>
          <DialogTitle>Dialog sem botão fechar</DialogTitle>
          <DialogDescription>
            Este dialog não possui o botão X no canto superior direito.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <button className="px-4 py-2 bg-primary text-white rounded">
            Fechar
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <Dialog>
      <DialogTrigger className="px-4 py-2 bg-outline border rounded">
        Dialog Simples
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Confirmação</DialogTitle>
        </DialogHeader>
        <p>Tem certeza que deseja continuar?</p>
        <DialogFooter>
          <button className="px-3 py-1 text-sm border rounded">Não</button>
          <button className="px-3 py-1 text-sm bg-red-500 text-white rounded">
            Sim, continuar
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <Dialog>
      <DialogTrigger className="px-4 py-2 bg-primary text-white rounded">
        Dialog com Conteúdo Longo
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Termos de Uso</DialogTitle>
          <DialogDescription>
            Leia atentamente os termos de uso antes de prosseguir.
          </DialogDescription>
        </DialogHeader>
        <div className="max-h-96 overflow-y-auto py-4">
          <div className="space-y-4 text-sm">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt.
            </p>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae.
            </p>
            <p>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate.
            </p>
            <p>
              Nam libero tempore, cum soluta nobis est eligendi optio cumque
              nihil impedit quo minus id quod maxime placeat facere possimus,
              omnis voluptas assumenda est, omnis dolor repellendus.
            </p>
          </div>
        </div>
        <DialogFooter>
          <button className="px-4 py-2 border rounded">Recusar</button>
          <button className="px-4 py-2 bg-primary text-white rounded">
            Aceitar Termos
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <Dialog>
      <DialogTrigger className="px-4 py-2 bg-primary text-white rounded">
        Novo Usuário
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Criar Novo Usuário</DialogTitle>
          <DialogDescription>
            Preencha as informações abaixo para criar um novo usuário.
          </DialogDescription>
        </DialogHeader>
        <form className="space-y-4 py-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Nome completo</label>
            <input className="w-full px-3 py-2 border rounded-md" placeholder="Digite o nome completo" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Email</label>
            <input type="email" className="w-full px-3 py-2 border rounded-md" placeholder="email@exemplo.com" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Cargo</label>
            <select className="w-full px-3 py-2 border rounded-md">
              <option>Selecione um cargo</option>
              <option>Desenvolvedor</option>
              <option>Designer</option>
              <option>Gerente</option>
            </select>
          </div>
        </form>
        <DialogFooter>
          <button className="px-4 py-2 border rounded">Cancelar</button>
          <button className="px-4 py-2 bg-primary text-white rounded">
            Criar Usuário
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
}`,...m.parameters?.docs?.source}}};const q=["Default","WithoutCloseButton","Simple","LongContent","Form"];export{t as Default,m as Form,c as LongContent,d as Simple,l as WithoutCloseButton,q as __namedExportsOrder,C as default};
