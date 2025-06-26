import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as y,T as j,C as N,a as v,b as C,D as w,P as T,O as q}from"./index-DTcZRPmA.js";import"./iframe-p_J3wOFN.js";import{M as _}from"./index-Dhh_au1L.js";import{c as i}from"./utils-CBfrqCZ4.js";import"./index-Djhn5Cll.js";import"./index-CC7Hq5D4.js";import"./index-Dz8DgJz5.js";import"./index-_ztWe_8r.js";import"./index-C9IZlXxx.js";import"./index-DB3OIY9M.js";function t({...o}){return e.jsx(y,{"data-slot":"dialog",...o})}function n({...o}){return e.jsx(j,{"data-slot":"dialog-trigger",...o})}function h({...o}){return e.jsx(T,{"data-slot":"dialog-portal",...o})}function D({className:o,...a}){return e.jsx(q,{"data-slot":"dialog-overlay",className:i("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",o),...a})}function s({className:o,children:a,showCloseButton:b=!0,...f}){return e.jsxs(h,{"data-slot":"dialog-portal",children:[e.jsx(D,{}),e.jsxs(N,{"data-slot":"dialog-content",className:i("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",o),"aria-describedby":void 0,...f,children:[a,b&&e.jsxs(v,{"data-slot":"dialog-close",className:"ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",children:[e.jsx(_,{}),e.jsx("span",{className:"sr-only",children:"Close"})]})]})]})}function r({className:o,...a}){return e.jsx("div",{"data-slot":"dialog-header",className:i("flex flex-col gap-2 text-center sm:text-left",o),...a})}function l({className:o,...a}){return e.jsx("div",{"data-slot":"dialog-footer",className:i("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",o),...a})}function d({className:o,...a}){return e.jsx(C,{"data-slot":"dialog-title",className:i("text-lg leading-none font-semibold",o),...a})}function c({className:o,...a}){return e.jsx(w,{"data-slot":"dialog-description",className:i("text-muted-foreground text-sm",o),...a})}t.__docgenInfo={description:"",methods:[],displayName:"Dialog"};s.__docgenInfo={description:"",methods:[],displayName:"DialogContent",props:{showCloseButton:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};c.__docgenInfo={description:"",methods:[],displayName:"DialogDescription"};l.__docgenInfo={description:"",methods:[],displayName:"DialogFooter"};r.__docgenInfo={description:"",methods:[],displayName:"DialogHeader"};D.__docgenInfo={description:"",methods:[],displayName:"DialogOverlay"};h.__docgenInfo={description:"",methods:[],displayName:"DialogPortal"};d.__docgenInfo={description:"",methods:[],displayName:"DialogTitle"};n.__docgenInfo={description:"",methods:[],displayName:"DialogTrigger"};const O={title:"UI/Dialog",parameters:{layout:"centered"},tags:["autodocs"]},m={render:()=>e.jsxs(t,{children:[e.jsx(n,{className:"px-4 py-2 bg-primary text-white rounded",children:"Abrir Dialog"}),e.jsxs(s,{children:[e.jsxs(r,{children:[e.jsx(d,{children:"Título do Dialog"}),e.jsx(c,{children:"Esta é a descrição do dialog. Aqui você pode adicionar informações importantes para o usuário."})]}),e.jsx("div",{className:"py-4",children:e.jsx("p",{children:"Conteúdo principal do dialog vai aqui."})}),e.jsxs(l,{children:[e.jsx("button",{className:"px-4 py-2 border rounded",children:"Cancelar"}),e.jsx("button",{className:"px-4 py-2 bg-primary text-white rounded",children:"Confirmar"})]})]})]})},u={render:()=>e.jsxs(t,{children:[e.jsx(n,{className:"px-4 py-2 bg-secondary text-white rounded",children:"Dialog sem X"}),e.jsxs(s,{showCloseButton:!1,children:[e.jsxs(r,{children:[e.jsx(d,{children:"Dialog sem botão fechar"}),e.jsx(c,{children:"Este dialog não possui o botão X no canto superior direito."})]}),e.jsx(l,{children:e.jsx("button",{className:"px-4 py-2 bg-primary text-white rounded",children:"Fechar"})})]})]})},p={render:()=>e.jsxs(t,{children:[e.jsx(n,{className:"px-4 py-2 bg-outline border rounded",children:"Dialog Simples"}),e.jsxs(s,{children:[e.jsx(r,{children:e.jsx(d,{children:"Confirmação"})}),e.jsx("p",{children:"Tem certeza que deseja continuar?"}),e.jsxs(l,{children:[e.jsx("button",{className:"px-3 py-1 text-sm border rounded",children:"Não"}),e.jsx("button",{className:"px-3 py-1 text-sm bg-red-500 text-white rounded",children:"Sim, continuar"})]})]})]})},g={render:()=>e.jsxs(t,{children:[e.jsx(n,{className:"px-4 py-2 bg-primary text-white rounded",children:"Dialog com Conteúdo Longo"}),e.jsxs(s,{className:"max-w-2xl",children:[e.jsxs(r,{children:[e.jsx(d,{children:"Termos de Uso"}),e.jsx(c,{children:"Leia atentamente os termos de uso antes de prosseguir."})]}),e.jsx("div",{className:"max-h-96 overflow-y-auto py-4",children:e.jsxs("div",{className:"space-y-4 text-sm",children:[e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."}),e.jsx("p",{children:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt."}),e.jsx("p",{children:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae."}),e.jsx("p",{children:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate."}),e.jsx("p",{children:"Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus."})]})}),e.jsxs(l,{children:[e.jsx("button",{className:"px-4 py-2 border rounded",children:"Recusar"}),e.jsx("button",{className:"px-4 py-2 bg-primary text-white rounded",children:"Aceitar Termos"})]})]})]})},x={render:()=>e.jsxs(t,{children:[e.jsx(n,{className:"px-4 py-2 bg-primary text-white rounded",children:"Novo Usuário"}),e.jsxs(s,{children:[e.jsxs(r,{children:[e.jsx(d,{children:"Criar Novo Usuário"}),e.jsx(c,{children:"Preencha as informações abaixo para criar um novo usuário."})]}),e.jsxs("form",{className:"space-y-4 py-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("label",{className:"text-sm font-medium",children:"Nome completo"}),e.jsx("input",{className:"w-full px-3 py-2 border rounded-md",placeholder:"Digite o nome completo"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("label",{className:"text-sm font-medium",children:"Email"}),e.jsx("input",{type:"email",className:"w-full px-3 py-2 border rounded-md",placeholder:"email@exemplo.com"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("label",{className:"text-sm font-medium",children:"Cargo"}),e.jsxs("select",{className:"w-full px-3 py-2 border rounded-md",children:[e.jsx("option",{children:"Selecione um cargo"}),e.jsx("option",{children:"Desenvolvedor"}),e.jsx("option",{children:"Designer"}),e.jsx("option",{children:"Gerente"})]})]})]}),e.jsxs(l,{children:[e.jsx("button",{className:"px-4 py-2 border rounded",children:"Cancelar"}),e.jsx("button",{className:"px-4 py-2 bg-primary text-white rounded",children:"Criar Usuário"})]})]})]})};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};const R=["Default","WithoutCloseButton","Simple","LongContent","Form"];export{m as Default,x as Form,g as LongContent,p as Simple,u as WithoutCloseButton,R as __namedExportsOrder,O as default};
