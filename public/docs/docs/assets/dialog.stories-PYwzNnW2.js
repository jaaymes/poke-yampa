import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as E,T as F,b as z,C as I,a as H,D as U,P as L,O as A}from"./index-CrMqCRIq.js";import{e as r}from"./iframe-CRWpp2I1.js";import{c as s}from"./utils-CBfrqCZ4.js";import"./index-D-wrNsn_.js";import"./index-BBWlx4az.js";import"./index-D8jFTbpq.js";import"./index-D4VPCSyO.js";import"./index-C9CuP99N.js";import"./index-CoUDwHEq.js";var O={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},C=r.createContext&&r.createContext(O),B=["attr","size","title"];function R(t,o){if(t==null)return{};var a=W(t,o),i,n;if(Object.getOwnPropertySymbols){var g=Object.getOwnPropertySymbols(t);for(n=0;n<g.length;n++)i=g[n],!(o.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(t,i)&&(a[i]=t[i])}return a}function W(t,o){if(t==null)return{};var a={};for(var i in t)if(Object.prototype.hasOwnProperty.call(t,i)){if(o.indexOf(i)>=0)continue;a[i]=t[i]}return a}function v(){return v=Object.assign?Object.assign.bind():function(t){for(var o=1;o<arguments.length;o++){var a=arguments[o];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(t[i]=a[i])}return t},v.apply(this,arguments)}function T(t,o){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);o&&(i=i.filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})),a.push.apply(a,i)}return a}function N(t){for(var o=1;o<arguments.length;o++){var a=arguments[o]!=null?arguments[o]:{};o%2?T(Object(a),!0).forEach(function(i){X(t,i,a[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):T(Object(a)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(a,i))})}return t}function X(t,o,a){return o=G(o),o in t?Object.defineProperty(t,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[o]=a,t}function G(t){var o=M(t,"string");return typeof o=="symbol"?o:o+""}function M(t,o){if(typeof t!="object"||!t)return t;var a=t[Symbol.toPrimitive];if(a!==void 0){var i=a.call(t,o);if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(o==="string"?String:Number)(t)}function q(t){return t&&t.map((o,a)=>r.createElement(o.tag,N({key:a},o.attr),q(o.child)))}function K(t){return o=>r.createElement(V,v({attr:N({},t.attr)},o),q(t.child))}function V(t){var o=a=>{var{attr:i,size:n,title:g}=t,S=R(t,B),w=n||a.size||"1em",x;return a.className&&(x=a.className),t.className&&(x=(x?x+" ":"")+t.className),r.createElement("svg",v({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},a.attr,i,S,{className:x,style:N(N({color:t.color||a.color},a.style),t.style),height:w,width:w,xmlns:"http://www.w3.org/2000/svg"}),g&&r.createElement("title",null,g),t.children)};return C!==void 0?r.createElement(C.Consumer,null,a=>o(a)):o(O)}function k(t){return K({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"},child:[]}]})(t)}function l({...t}){return e.jsx(E,{"data-slot":"dialog",...t})}function d({...t}){return e.jsx(F,{"data-slot":"dialog-trigger",...t})}function _({...t}){return e.jsx(L,{"data-slot":"dialog-portal",...t})}function P({className:t,...o}){return e.jsx(A,{"data-slot":"dialog-overlay",className:s("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",t),...o})}function c({className:t,children:o,showCloseButton:a=!0,...i}){return e.jsxs(_,{"data-slot":"dialog-portal",children:[e.jsx(P,{}),e.jsxs(z,{"data-slot":"dialog-content",className:s("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",t),"aria-describedby":void 0,...i,children:[o,a&&e.jsxs(I,{"data-testid":"dialog-close","data-slot":"dialog-close",className:"ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",children:[e.jsx(k,{}),e.jsx("span",{className:"sr-only",children:"Close"})]})]})]})}function u({className:t,...o}){return e.jsx("div",{"data-slot":"dialog-header",className:s("flex flex-col gap-2 text-center sm:text-left",t),...o})}function m({className:t,...o}){return e.jsx("div",{"data-slot":"dialog-footer",className:s("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",t),...o})}function p({className:t,...o}){return e.jsx(H,{"data-slot":"dialog-title",className:s("text-lg leading-none font-semibold",t),...o})}function h({className:t,...o}){return e.jsx(U,{"data-slot":"dialog-description",className:s("text-muted-foreground text-sm",t),...o})}l.__docgenInfo={description:"",methods:[],displayName:"Dialog"};c.__docgenInfo={description:"",methods:[],displayName:"DialogContent",props:{showCloseButton:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};h.__docgenInfo={description:"",methods:[],displayName:"DialogDescription"};m.__docgenInfo={description:"",methods:[],displayName:"DialogFooter"};u.__docgenInfo={description:"",methods:[],displayName:"DialogHeader"};P.__docgenInfo={description:"",methods:[],displayName:"DialogOverlay"};_.__docgenInfo={description:"",methods:[],displayName:"DialogPortal"};p.__docgenInfo={description:"",methods:[],displayName:"DialogTitle"};d.__docgenInfo={description:"",methods:[],displayName:"DialogTrigger"};const ne={title:"UI/Dialog",parameters:{layout:"centered"},tags:["autodocs"]},f={render:()=>e.jsxs(l,{children:[e.jsx(d,{className:"px-4 py-2 bg-primary text-white rounded",children:"Abrir Dialog"}),e.jsxs(c,{children:[e.jsxs(u,{children:[e.jsx(p,{children:"Título do Dialog"}),e.jsx(h,{children:"Esta é a descrição do dialog. Aqui você pode adicionar informações importantes para o usuário."})]}),e.jsx("div",{className:"py-4",children:e.jsx("p",{children:"Conteúdo principal do dialog vai aqui."})}),e.jsxs(m,{children:[e.jsx("button",{className:"px-4 py-2 border rounded",children:"Cancelar"}),e.jsx("button",{className:"px-4 py-2 bg-primary text-white rounded",children:"Confirmar"})]})]})]})},b={render:()=>e.jsxs(l,{children:[e.jsx(d,{className:"px-4 py-2 bg-secondary text-white rounded",children:"Dialog sem X"}),e.jsxs(c,{showCloseButton:!1,children:[e.jsxs(u,{children:[e.jsx(p,{children:"Dialog sem botão fechar"}),e.jsx(h,{children:"Este dialog não possui o botão X no canto superior direito."})]}),e.jsx(m,{children:e.jsx("button",{className:"px-4 py-2 bg-primary text-white rounded",children:"Fechar"})})]})]})},D={render:()=>e.jsxs(l,{children:[e.jsx(d,{className:"px-4 py-2 bg-outline border rounded",children:"Dialog Simples"}),e.jsxs(c,{children:[e.jsx(u,{children:e.jsx(p,{children:"Confirmação"})}),e.jsx("p",{children:"Tem certeza que deseja continuar?"}),e.jsxs(m,{children:[e.jsx("button",{className:"px-3 py-1 text-sm border rounded",children:"Não"}),e.jsx("button",{className:"px-3 py-1 text-sm bg-red-500 text-white rounded",children:"Sim, continuar"})]})]})]})},y={render:()=>e.jsxs(l,{children:[e.jsx(d,{className:"px-4 py-2 bg-primary text-white rounded",children:"Dialog com Conteúdo Longo"}),e.jsxs(c,{className:"max-w-2xl",children:[e.jsxs(u,{children:[e.jsx(p,{children:"Termos de Uso"}),e.jsx(h,{children:"Leia atentamente os termos de uso antes de prosseguir."})]}),e.jsx("div",{className:"max-h-96 overflow-y-auto py-4",children:e.jsxs("div",{className:"space-y-4 text-sm",children:[e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."}),e.jsx("p",{children:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt."}),e.jsx("p",{children:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae."}),e.jsx("p",{children:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate."}),e.jsx("p",{children:"Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus."})]})}),e.jsxs(m,{children:[e.jsx("button",{className:"px-4 py-2 border rounded",children:"Recusar"}),e.jsx("button",{className:"px-4 py-2 bg-primary text-white rounded",children:"Aceitar Termos"})]})]})]})},j={render:()=>e.jsxs(l,{children:[e.jsx(d,{className:"px-4 py-2 bg-primary text-white rounded",children:"Novo Usuário"}),e.jsxs(c,{children:[e.jsxs(u,{children:[e.jsx(p,{children:"Criar Novo Usuário"}),e.jsx(h,{children:"Preencha as informações abaixo para criar um novo usuário."})]}),e.jsxs("form",{className:"space-y-4 py-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("label",{className:"text-sm font-medium",children:"Nome completo"}),e.jsx("input",{className:"w-full px-3 py-2 border rounded-md",placeholder:"Digite o nome completo"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("label",{className:"text-sm font-medium",children:"Email"}),e.jsx("input",{type:"email",className:"w-full px-3 py-2 border rounded-md",placeholder:"email@exemplo.com"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("label",{className:"text-sm font-medium",children:"Cargo"}),e.jsxs("select",{className:"w-full px-3 py-2 border rounded-md",children:[e.jsx("option",{children:"Selecione um cargo"}),e.jsx("option",{children:"Desenvolvedor"}),e.jsx("option",{children:"Designer"}),e.jsx("option",{children:"Gerente"})]})]})]}),e.jsxs(m,{children:[e.jsx("button",{className:"px-4 py-2 border rounded",children:"Cancelar"}),e.jsx("button",{className:"px-4 py-2 bg-primary text-white rounded",children:"Criar Usuário"})]})]})]})};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}};const re=["Default","WithoutCloseButton","Simple","LongContent","Form"];export{f as Default,j as Form,y as LongContent,D as Simple,b as WithoutCloseButton,re as __namedExportsOrder,ne as default};
