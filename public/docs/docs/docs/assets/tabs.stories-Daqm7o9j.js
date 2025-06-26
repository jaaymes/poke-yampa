import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as i}from"./iframe-Dho-ujNQ.js";import{c as q,u as Y,a as N,b as H,P as ve}from"./index-lzkfQ7AQ.js";import{c as ge,u as J}from"./index-CV_5PoZO.js";import{u as he}from"./index-DWEUsbRd.js";import{P as w}from"./index-CAN06ZMk.js";import{u as Ne}from"./index-eerMGGoJ.js";import{c as L}from"./utils-CBfrqCZ4.js";import"./index-DYd6aig7.js";import"./index-B_0rGZ_O.js";var O="rovingFocusGroup.onEntryFocus",Te={bubbles:!1,cancelable:!0},S="RovingFocusGroup",[K,W,je]=ge(S),[ye,Q]=q(S,[je]),[we,Ce]=ye(S),X=i.forwardRef((s,a)=>e.jsx(K.Provider,{scope:s.__scopeRovingFocusGroup,children:e.jsx(K.Slot,{scope:s.__scopeRovingFocusGroup,children:e.jsx(Ie,{...s,ref:a})})}));X.displayName=S;var Ie=i.forwardRef((s,a)=>{const{__scopeRovingFocusGroup:r,orientation:t,loop:d=!1,dir:p,currentTabStopId:o,defaultCurrentTabStopId:f,onCurrentTabStopIdChange:h,onEntryFocus:b,preventScrollOnEntryFocus:n=!1,...l}=s,v=i.useRef(null),A=he(a,v),R=J(p),[E,c]=H({prop:o,defaultProp:f??null,onChange:h,caller:S}),[T,D]=i.useState(!1),g=Ne(b),j=W(r),M=i.useRef(!1),[me,U]=i.useState(0);return i.useEffect(()=>{const x=v.current;if(x)return x.addEventListener(O,g),()=>x.removeEventListener(O,g)},[g]),e.jsx(we,{scope:r,orientation:t,dir:R,loop:d,currentTabStopId:E,onItemFocus:i.useCallback(x=>c(x),[c]),onItemShiftTab:i.useCallback(()=>D(!0),[]),onFocusableItemAdd:i.useCallback(()=>U(x=>x+1),[]),onFocusableItemRemove:i.useCallback(()=>U(x=>x-1),[]),children:e.jsx(w.div,{tabIndex:T||me===0?-1:0,"data-orientation":t,...l,ref:A,style:{outline:"none",...s.style},onMouseDown:N(s.onMouseDown,()=>{M.current=!0}),onFocus:N(s.onFocus,x=>{const pe=!M.current;if(x.target===x.currentTarget&&pe&&!T){const z=new CustomEvent(O,Te);if(x.currentTarget.dispatchEvent(z),!z.defaultPrevented){const B=j().filter(y=>y.focusable),xe=B.find(y=>y.active),fe=B.find(y=>y.id===E),be=[xe,fe,...B].filter(Boolean).map(y=>y.ref.current);se(be,n)}}M.current=!1}),onBlur:N(s.onBlur,()=>D(!1))})})}),Z="RovingFocusGroupItem",ee=i.forwardRef((s,a)=>{const{__scopeRovingFocusGroup:r,focusable:t=!0,active:d=!1,tabStopId:p,children:o,...f}=s,h=Y(),b=p||h,n=Ce(Z,r),l=n.currentTabStopId===b,v=W(r),{onFocusableItemAdd:A,onFocusableItemRemove:R,currentTabStopId:E}=n;return i.useEffect(()=>{if(t)return A(),()=>R()},[t,A,R]),e.jsx(K.ItemSlot,{scope:r,id:b,focusable:t,active:d,children:e.jsx(w.span,{tabIndex:l?0:-1,"data-orientation":n.orientation,...f,ref:a,onMouseDown:N(s.onMouseDown,c=>{t?n.onItemFocus(b):c.preventDefault()}),onFocus:N(s.onFocus,()=>n.onItemFocus(b)),onKeyDown:N(s.onKeyDown,c=>{if(c.key==="Tab"&&c.shiftKey){n.onItemShiftTab();return}if(c.target!==c.currentTarget)return;const T=Re(c,n.orientation,n.dir);if(T!==void 0){if(c.metaKey||c.ctrlKey||c.altKey||c.shiftKey)return;c.preventDefault();let g=v().filter(j=>j.focusable).map(j=>j.ref.current);if(T==="last")g.reverse();else if(T==="prev"||T==="next"){T==="prev"&&g.reverse();const j=g.indexOf(c.currentTarget);g=n.loop?Ee(g,j+1):g.slice(j+1)}setTimeout(()=>se(g))}}),children:typeof o=="function"?o({isCurrentTabStop:l,hasTabStop:E!=null}):o})})});ee.displayName=Z;var Se={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function Ae(s,a){return a!=="rtl"?s:s==="ArrowLeft"?"ArrowRight":s==="ArrowRight"?"ArrowLeft":s}function Re(s,a,r){const t=Ae(s.key,r);if(!(a==="vertical"&&["ArrowLeft","ArrowRight"].includes(t))&&!(a==="horizontal"&&["ArrowUp","ArrowDown"].includes(t)))return Se[t]}function se(s,a=!1){const r=document.activeElement;for(const t of s)if(t===r||(t.focus({preventScroll:a}),document.activeElement!==r))return}function Ee(s,a){return s.map((r,t)=>s[(a+t)%s.length])}var Fe=X,_e=ee,k="Tabs",[Pe,We]=q(k,[Q]),ae=Q(),[Ve,$]=Pe(k),te=i.forwardRef((s,a)=>{const{__scopeTabs:r,value:t,onValueChange:d,defaultValue:p,orientation:o="horizontal",dir:f,activationMode:h="automatic",...b}=s,n=J(f),[l,v]=H({prop:t,onChange:d,defaultProp:p??"",caller:k});return e.jsx(Ve,{scope:r,baseId:Y(),value:l,onValueChange:v,orientation:o,dir:n,activationMode:h,children:e.jsx(w.div,{dir:n,"data-orientation":o,...b,ref:a})})});te.displayName=k;var ne="TabsList",re=i.forwardRef((s,a)=>{const{__scopeTabs:r,loop:t=!0,...d}=s,p=$(ne,r),o=ae(r);return e.jsx(Fe,{asChild:!0,...o,orientation:p.orientation,dir:p.dir,loop:t,children:e.jsx(w.div,{role:"tablist","aria-orientation":p.orientation,...d,ref:a})})});re.displayName=ne;var oe="TabsTrigger",ie=i.forwardRef((s,a)=>{const{__scopeTabs:r,value:t,disabled:d=!1,...p}=s,o=$(oe,r),f=ae(r),h=de(o.baseId,t),b=ue(o.baseId,t),n=t===o.value;return e.jsx(_e,{asChild:!0,...f,focusable:!d,active:n,children:e.jsx(w.button,{type:"button",role:"tab","aria-selected":n,"aria-controls":b,"data-state":n?"active":"inactive","data-disabled":d?"":void 0,disabled:d,id:h,...p,ref:a,onMouseDown:N(s.onMouseDown,l=>{!d&&l.button===0&&l.ctrlKey===!1?o.onValueChange(t):l.preventDefault()}),onKeyDown:N(s.onKeyDown,l=>{[" ","Enter"].includes(l.key)&&o.onValueChange(t)}),onFocus:N(s.onFocus,()=>{const l=o.activationMode!=="manual";!n&&!d&&l&&o.onValueChange(t)})})})});ie.displayName=oe;var le="TabsContent",ce=i.forwardRef((s,a)=>{const{__scopeTabs:r,value:t,forceMount:d,children:p,...o}=s,f=$(le,r),h=de(f.baseId,t),b=ue(f.baseId,t),n=t===f.value,l=i.useRef(n);return i.useEffect(()=>{const v=requestAnimationFrame(()=>l.current=!1);return()=>cancelAnimationFrame(v)},[]),e.jsx(ve,{present:d||n,children:({present:v})=>e.jsx(w.div,{"data-state":n?"active":"inactive","data-orientation":f.orientation,role:"tabpanel","aria-labelledby":h,hidden:!v,id:b,tabIndex:0,...o,ref:a,style:{...s.style,animationDuration:l.current?"0s":void 0},children:v&&p})})});ce.displayName=le;function de(s,a){return`${s}-trigger-${a}`}function ue(s,a){return`${s}-content-${a}`}var Ge=te,Le=re,ke=ie,De=ce;function C({className:s,...a}){return e.jsx(Ge,{"data-slot":"tabs",className:L("flex flex-col gap-2",s),"data-testid":"tabs",...a})}function I({className:s,...a}){return e.jsx(Le,{"data-slot":"tabs-list",className:L("bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]",s),"data-testid":"tabs-list",...a})}function u({className:s,...a}){return e.jsx(ke,{"data-slot":"tabs-trigger",className:L("data-[state=active]:bg-primary hover:text-white bg-transparent text-foreground data-[state=active]:text-primary-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",s),"data-testid":"tabs-trigger",...a})}function m({className:s,...a}){return e.jsx(De,{"data-slot":"tabs-content",className:L("flex-1 outline-none",s),"data-testid":"tabs-content",...a})}C.__docgenInfo={description:"",methods:[],displayName:"Tabs"};m.__docgenInfo={description:"",methods:[],displayName:"TabsContent"};I.__docgenInfo={description:"",methods:[],displayName:"TabsList"};u.__docgenInfo={description:"",methods:[],displayName:"TabsTrigger"};const Qe={title:"UI/Tabs",parameters:{layout:"centered"},tags:["autodocs"]},F={render:()=>e.jsxs(C,{defaultValue:"account",className:"w-[400px]",children:[e.jsxs(I,{className:"grid w-full grid-cols-2",children:[e.jsx(u,{value:"account",children:"Conta"}),e.jsx(u,{value:"password",children:"Senha"})]}),e.jsxs(m,{value:"account",className:"space-y-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("h3",{className:"text-lg font-medium",children:"Informações da Conta"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Gerencie suas informações de conta aqui."})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("label",{className:"text-sm font-medium",children:"Nome"}),e.jsx("input",{className:"w-full px-3 py-2 border rounded-md",placeholder:"Seu nome"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("label",{className:"text-sm font-medium",children:"Email"}),e.jsx("input",{className:"w-full px-3 py-2 border rounded-md",placeholder:"seu@email.com",type:"email"})]})]}),e.jsxs(m,{value:"password",className:"space-y-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("h3",{className:"text-lg font-medium",children:"Alterar Senha"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Atualize sua senha aqui."})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("label",{className:"text-sm font-medium",children:"Senha atual"}),e.jsx("input",{className:"w-full px-3 py-2 border rounded-md",placeholder:"••••••••",type:"password"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("label",{className:"text-sm font-medium",children:"Nova senha"}),e.jsx("input",{className:"w-full px-3 py-2 border rounded-md",placeholder:"••••••••",type:"password"})]})]})]})},_={render:()=>e.jsxs(C,{defaultValue:"overview",className:"w-[500px]",children:[e.jsxs(I,{className:"grid w-full grid-cols-3",children:[e.jsx(u,{value:"overview",children:"Visão Geral"}),e.jsx(u,{value:"analytics",children:"Analytics"}),e.jsx(u,{value:"reports",children:"Relatórios"})]}),e.jsxs(m,{value:"overview",className:"space-y-4",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"Visão Geral"}),e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{className:"p-4 border rounded-lg",children:[e.jsx("p",{className:"text-sm text-muted-foreground",children:"Vendas Totais"}),e.jsx("p",{className:"text-2xl font-bold",children:"R$ 45.231"})]}),e.jsxs("div",{className:"p-4 border rounded-lg",children:[e.jsx("p",{className:"text-sm text-muted-foreground",children:"Clientes"}),e.jsx("p",{className:"text-2xl font-bold",children:"1.234"})]})]})]}),e.jsxs(m,{value:"analytics",className:"space-y-4",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"Analytics"}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("p",{children:["Visualizações da página: ",e.jsx("strong",{children:"12.345"})]}),e.jsxs("p",{children:["Taxa de conversão: ",e.jsx("strong",{children:"3.2%"})]}),e.jsxs("p",{children:["Tempo médio na página: ",e.jsx("strong",{children:"2m 34s"})]})]})]}),e.jsxs(m,{value:"reports",className:"space-y-4",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"Relatórios"}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex justify-between items-center p-2 border rounded",children:[e.jsx("span",{children:"Relatório Mensal"}),e.jsx("button",{className:"px-3 py-1 bg-primary text-white rounded text-sm",children:"Baixar"})]}),e.jsxs("div",{className:"flex justify-between items-center p-2 border rounded",children:[e.jsx("span",{children:"Relatório Anual"}),e.jsx("button",{className:"px-3 py-1 bg-primary text-white rounded text-sm",children:"Baixar"})]})]})]})]})},P={render:()=>e.jsxs(C,{defaultValue:"profile",orientation:"vertical",className:"flex w-[600px]",children:[e.jsxs(I,{className:"flex-col h-fit w-[200px]",children:[e.jsx(u,{value:"profile",className:"w-full",children:"Perfil"}),e.jsx(u,{value:"settings",className:"w-full",children:"Configurações"}),e.jsx(u,{value:"notifications",className:"w-full",children:"Notificações"}),e.jsx(u,{value:"security",className:"w-full",children:"Segurança"})]}),e.jsxs("div",{className:"flex-1 ml-4",children:[e.jsxs(m,{value:"profile",className:"mt-0",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Perfil"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center space-x-4",children:[e.jsx("div",{className:"w-16 h-16 bg-gray-200 rounded-full"}),e.jsxs("div",{children:[e.jsx("p",{className:"font-medium",children:"João Silva"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"joao@exemplo.com"})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("label",{className:"text-sm font-medium",children:"Bio"}),e.jsx("textarea",{className:"w-full px-3 py-2 border rounded-md",rows:3,placeholder:"Conte um pouco sobre você..."})]})]})]}),e.jsxs(m,{value:"settings",className:"mt-0",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Configurações"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("p",{className:"font-medium",children:"Tema escuro"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Ativar modo escuro"})]}),e.jsx("input",{type:"checkbox",className:"rounded"})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("p",{className:"font-medium",children:"Idioma"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Português (Brasil)"})]}),e.jsxs("select",{className:"px-3 py-1 border rounded",children:[e.jsx("option",{children:"Português"}),e.jsx("option",{children:"English"}),e.jsx("option",{children:"Español"})]})]})]})]}),e.jsxs(m,{value:"notifications",className:"mt-0",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Notificações"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("p",{className:"font-medium",children:"Email"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Receber notificações por email"})]}),e.jsx("input",{type:"checkbox",className:"rounded",defaultChecked:!0})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("p",{className:"font-medium",children:"Push"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Notificações push no navegador"})]}),e.jsx("input",{type:"checkbox",className:"rounded"})]})]})]}),e.jsxs(m,{value:"security",className:"mt-0",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Segurança"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("p",{className:"font-medium mb-2",children:"Autenticação de dois fatores"}),e.jsx("p",{className:"text-sm text-muted-foreground mb-3",children:"Adicione uma camada extra de segurança à sua conta"}),e.jsx("button",{className:"px-4 py-2 bg-primary text-white rounded",children:"Ativar 2FA"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"font-medium mb-2",children:"Sessões ativas"}),e.jsx("div",{className:"space-y-2",children:e.jsxs("div",{className:"flex justify-between items-center p-2 border rounded",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-sm",children:"Chrome - São Paulo"}),e.jsx("p",{className:"text-xs text-muted-foreground",children:"Ativo agora"})]}),e.jsx("button",{className:"text-sm text-red-600",children:"Encerrar"})]})})]})]})]})]})]})},V={render:()=>e.jsxs(C,{defaultValue:"tab1",className:"w-[300px]",children:[e.jsxs(I,{children:[e.jsx(u,{value:"tab1",children:"Tab 1"}),e.jsx(u,{value:"tab2",children:"Tab 2"})]}),e.jsx(m,{value:"tab1",children:e.jsx("p",{children:"Conteúdo da primeira tab."})}),e.jsx(m,{value:"tab2",children:e.jsx("p",{children:"Conteúdo da segunda tab."})})]})},G={render:()=>e.jsxs(C,{defaultValue:"home",className:"w-[400px]",children:[e.jsxs(I,{className:"grid w-full grid-cols-3",children:[e.jsx(u,{value:"home",children:"🏠 Início"}),e.jsx(u,{value:"profile",children:"👤 Perfil"}),e.jsx(u,{value:"settings",children:"⚙️ Config"})]}),e.jsx(m,{value:"home",children:e.jsxs("div",{className:"p-4 text-center",children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Bem-vindo!"}),e.jsx("p",{className:"text-muted-foreground",children:"Esta é a página inicial."})]})}),e.jsx(m,{value:"profile",children:e.jsxs("div",{className:"p-4 text-center",children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Seu Perfil"}),e.jsx("p",{className:"text-muted-foreground",children:"Informações do seu perfil."})]})}),e.jsx(m,{value:"settings",children:e.jsxs("div",{className:"p-4 text-center",children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Configurações"}),e.jsx("p",{className:"text-muted-foreground",children:"Ajuste suas preferências."})]})})]})};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => <Tabs defaultValue="account" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Conta</TabsTrigger>
        <TabsTrigger value="password">Senha</TabsTrigger>
      </TabsList>
      <TabsContent value="account" className="space-y-4">
        <div className="space-y-2">
          <h3 className="text-lg font-medium">Informações da Conta</h3>
          <p className="text-sm text-muted-foreground">
            Gerencie suas informações de conta aqui.
          </p>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Nome</label>
          <input className="w-full px-3 py-2 border rounded-md" placeholder="Seu nome" />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Email</label>
          <input className="w-full px-3 py-2 border rounded-md" placeholder="seu@email.com" type="email" />
        </div>
      </TabsContent>
      <TabsContent value="password" className="space-y-4">
        <div className="space-y-2">
          <h3 className="text-lg font-medium">Alterar Senha</h3>
          <p className="text-sm text-muted-foreground">
            Atualize sua senha aqui.
          </p>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Senha atual</label>
          <input className="w-full px-3 py-2 border rounded-md" placeholder="••••••••" type="password" />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Nova senha</label>
          <input className="w-full px-3 py-2 border rounded-md" placeholder="••••••••" type="password" />
        </div>
      </TabsContent>
    </Tabs>
}`,...F.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <Tabs defaultValue="overview" className="w-[500px]">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="overview">Visão Geral</TabsTrigger>
        <TabsTrigger value="analytics">Analytics</TabsTrigger>
        <TabsTrigger value="reports">Relatórios</TabsTrigger>
      </TabsList>
      <TabsContent value="overview" className="space-y-4">
        <h3 className="text-lg font-semibold">Visão Geral</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 border rounded-lg">
            <p className="text-sm text-muted-foreground">Vendas Totais</p>
            <p className="text-2xl font-bold">R$ 45.231</p>
          </div>
          <div className="p-4 border rounded-lg">
            <p className="text-sm text-muted-foreground">Clientes</p>
            <p className="text-2xl font-bold">1.234</p>
          </div>
        </div>
      </TabsContent>
      <TabsContent value="analytics" className="space-y-4">
        <h3 className="text-lg font-semibold">Analytics</h3>
        <div className="space-y-2">
          <p>
            Visualizações da página: <strong>12.345</strong>
          </p>
          <p>
            Taxa de conversão: <strong>3.2%</strong>
          </p>
          <p>
            Tempo médio na página: <strong>2m 34s</strong>
          </p>
        </div>
      </TabsContent>
      <TabsContent value="reports" className="space-y-4">
        <h3 className="text-lg font-semibold">Relatórios</h3>
        <div className="space-y-2">
          <div className="flex justify-between items-center p-2 border rounded">
            <span>Relatório Mensal</span>
            <button className="px-3 py-1 bg-primary text-white rounded text-sm">
              Baixar
            </button>
          </div>
          <div className="flex justify-between items-center p-2 border rounded">
            <span>Relatório Anual</span>
            <button className="px-3 py-1 bg-primary text-white rounded text-sm">
              Baixar
            </button>
          </div>
        </div>
      </TabsContent>
    </Tabs>
}`,..._.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => <Tabs defaultValue="profile" orientation="vertical" className="flex w-[600px]">
      <TabsList className="flex-col h-fit w-[200px]">
        <TabsTrigger value="profile" className="w-full">
          Perfil
        </TabsTrigger>
        <TabsTrigger value="settings" className="w-full">
          Configurações
        </TabsTrigger>
        <TabsTrigger value="notifications" className="w-full">
          Notificações
        </TabsTrigger>
        <TabsTrigger value="security" className="w-full">
          Segurança
        </TabsTrigger>
      </TabsList>
      <div className="flex-1 ml-4">
        <TabsContent value="profile" className="mt-0">
          <h3 className="text-lg font-semibold mb-4">Perfil</h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gray-200 rounded-full"></div>
              <div>
                <p className="font-medium">João Silva</p>
                <p className="text-sm text-muted-foreground">
                  joao@exemplo.com
                </p>
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Bio</label>
              <textarea className="w-full px-3 py-2 border rounded-md" rows={3} placeholder="Conte um pouco sobre você..." />
            </div>
          </div>
        </TabsContent>
        <TabsContent value="settings" className="mt-0">
          <h3 className="text-lg font-semibold mb-4">Configurações</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Tema escuro</p>
                <p className="text-sm text-muted-foreground">
                  Ativar modo escuro
                </p>
              </div>
              <input type="checkbox" className="rounded" />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Idioma</p>
                <p className="text-sm text-muted-foreground">
                  Português (Brasil)
                </p>
              </div>
              <select className="px-3 py-1 border rounded">
                <option>Português</option>
                <option>English</option>
                <option>Español</option>
              </select>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="notifications" className="mt-0">
          <h3 className="text-lg font-semibold mb-4">Notificações</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Email</p>
                <p className="text-sm text-muted-foreground">
                  Receber notificações por email
                </p>
              </div>
              <input type="checkbox" className="rounded" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Push</p>
                <p className="text-sm text-muted-foreground">
                  Notificações push no navegador
                </p>
              </div>
              <input type="checkbox" className="rounded" />
            </div>
          </div>
        </TabsContent>
        <TabsContent value="security" className="mt-0">
          <h3 className="text-lg font-semibold mb-4">Segurança</h3>
          <div className="space-y-4">
            <div>
              <p className="font-medium mb-2">Autenticação de dois fatores</p>
              <p className="text-sm text-muted-foreground mb-3">
                Adicione uma camada extra de segurança à sua conta
              </p>
              <button className="px-4 py-2 bg-primary text-white rounded">
                Ativar 2FA
              </button>
            </div>
            <div>
              <p className="font-medium mb-2">Sessões ativas</p>
              <div className="space-y-2">
                <div className="flex justify-between items-center p-2 border rounded">
                  <div>
                    <p className="text-sm">Chrome - São Paulo</p>
                    <p className="text-xs text-muted-foreground">Ativo agora</p>
                  </div>
                  <button className="text-sm text-red-600">Encerrar</button>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
      </div>
    </Tabs>
}`,...P.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => <Tabs defaultValue="tab1" className="w-[300px]">
      <TabsList>
        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2">Tab 2</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <p>Conteúdo da primeira tab.</p>
      </TabsContent>
      <TabsContent value="tab2">
        <p>Conteúdo da segunda tab.</p>
      </TabsContent>
    </Tabs>
}`,...V.parameters?.docs?.source}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: () => <Tabs defaultValue="home" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="home">🏠 Início</TabsTrigger>
        <TabsTrigger value="profile">👤 Perfil</TabsTrigger>
        <TabsTrigger value="settings">⚙️ Config</TabsTrigger>
      </TabsList>
      <TabsContent value="home">
        <div className="p-4 text-center">
          <h3 className="text-lg font-semibold mb-2">Bem-vindo!</h3>
          <p className="text-muted-foreground">Esta é a página inicial.</p>
        </div>
      </TabsContent>
      <TabsContent value="profile">
        <div className="p-4 text-center">
          <h3 className="text-lg font-semibold mb-2">Seu Perfil</h3>
          <p className="text-muted-foreground">Informações do seu perfil.</p>
        </div>
      </TabsContent>
      <TabsContent value="settings">
        <div className="p-4 text-center">
          <h3 className="text-lg font-semibold mb-2">Configurações</h3>
          <p className="text-muted-foreground">Ajuste suas preferências.</p>
        </div>
      </TabsContent>
    </Tabs>
}`,...G.parameters?.docs?.source}}};const Xe=["Default","ThreeTabs","Vertical","Simple","WithIcons"];export{F as Default,V as Simple,_ as ThreeTabs,P as Vertical,G as WithIcons,Xe as __namedExportsOrder,Qe as default};
