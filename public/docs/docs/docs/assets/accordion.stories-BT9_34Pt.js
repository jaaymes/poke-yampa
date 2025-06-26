import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as A,e as f}from"./iframe-Dho-ujNQ.js";import{c as Y,b as H,u as X,a as Z,P as ve,d as he}from"./index-lzkfQ7AQ.js";import{c as Ce,u as be}from"./index-CV_5PoZO.js";import{u as ee}from"./index-DWEUsbRd.js";import{P as R}from"./index-CAN06ZMk.js";import{c as B}from"./utils-CBfrqCZ4.js";import{c as je}from"./createLucideIcon-CaM0apFO.js";import"./index-DYd6aig7.js";import"./index-B_0rGZ_O.js";/**
 * @license lucide-react v0.522.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ie=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],we=je("chevron-down",Ie);var D="Collapsible",[Ne,oe]=Y(D),[ye,G]=Ne(D),ne=A.forwardRef((o,t)=>{const{__scopeCollapsible:n,open:a,defaultOpen:c,disabled:r,onOpenChange:i,...d}=o,[p,g]=H({prop:a,defaultProp:c??!1,onChange:i,caller:D});return e.jsx(ye,{scope:n,disabled:r,contentId:X(),open:p,onOpenToggle:A.useCallback(()=>g(x=>!x),[g]),children:e.jsx(R.div,{"data-state":U(p),"data-disabled":r?"":void 0,...d,ref:t})})});ne.displayName=D;var re="CollapsibleTrigger",te=A.forwardRef((o,t)=>{const{__scopeCollapsible:n,...a}=o,c=G(re,n);return e.jsx(R.button,{type:"button","aria-controls":c.contentId,"aria-expanded":c.open||!1,"data-state":U(c.open),"data-disabled":c.disabled?"":void 0,disabled:c.disabled,...a,ref:t,onClick:Z(o.onClick,c.onOpenToggle)})});te.displayName=re;var K="CollapsibleContent",ae=A.forwardRef((o,t)=>{const{forceMount:n,...a}=o,c=G(K,o.__scopeCollapsible);return e.jsx(ve,{present:n||c.open,children:({present:r})=>e.jsx(Re,{...a,ref:t,present:r})})});ae.displayName=K;var Re=A.forwardRef((o,t)=>{const{__scopeCollapsible:n,present:a,children:c,...r}=o,i=G(K,n),[d,p]=A.useState(a),g=A.useRef(null),x=ee(t,g),v=A.useRef(0),w=v.current,C=A.useRef(0),T=C.current,b=i.open||d,j=A.useRef(b),I=A.useRef(void 0);return A.useEffect(()=>{const s=requestAnimationFrame(()=>j.current=!1);return()=>cancelAnimationFrame(s)},[]),he(()=>{const s=g.current;if(s){I.current=I.current||{transitionDuration:s.style.transitionDuration,animationName:s.style.animationName},s.style.transitionDuration="0s",s.style.animationName="none";const N=s.getBoundingClientRect();v.current=N.height,C.current=N.width,j.current||(s.style.transitionDuration=I.current.transitionDuration,s.style.animationName=I.current.animationName),p(a)}},[i.open,a]),e.jsx(R.div,{"data-state":U(i.open),"data-disabled":i.disabled?"":void 0,id:i.contentId,hidden:!b,...r,ref:x,style:{"--radix-collapsible-content-height":w?`${w}px`:void 0,"--radix-collapsible-content-width":T?`${T}px`:void 0,...o.style},children:b&&c})});function U(o){return o?"open":"closed"}var Te=ne,_e=te,Pe=ae,h="Accordion",Se=["Home","End","ArrowDown","ArrowUp","ArrowLeft","ArrowRight"],[J,Ee,qe]=Ce(h),[V,oo]=Y(h,[qe,oe]),Q=oe(),ce=f.forwardRef((o,t)=>{const{type:n,...a}=o,c=a,r=a;return e.jsx(J.Provider,{scope:o.__scopeAccordion,children:n==="multiple"?e.jsx(ke,{...r,ref:t}):e.jsx(Ve,{...c,ref:t})})});ce.displayName=h;var[ie,Oe]=V(h),[se,De]=V(h,{collapsible:!1}),Ve=f.forwardRef((o,t)=>{const{value:n,defaultValue:a,onValueChange:c=()=>{},collapsible:r=!1,...i}=o,[d,p]=H({prop:n,defaultProp:a??"",onChange:c,caller:h});return e.jsx(ie,{scope:o.__scopeAccordion,value:f.useMemo(()=>d?[d]:[],[d]),onItemOpen:p,onItemClose:f.useCallback(()=>r&&p(""),[r,p]),children:e.jsx(se,{scope:o.__scopeAccordion,collapsible:r,children:e.jsx(de,{...i,ref:t})})})}),ke=f.forwardRef((o,t)=>{const{value:n,defaultValue:a,onValueChange:c=()=>{},...r}=o,[i,d]=H({prop:n,defaultProp:a??[],onChange:c,caller:h}),p=f.useCallback(x=>d((v=[])=>[...v,x]),[d]),g=f.useCallback(x=>d((v=[])=>v.filter(w=>w!==x)),[d]);return e.jsx(ie,{scope:o.__scopeAccordion,value:i,onItemOpen:p,onItemClose:g,children:e.jsx(se,{scope:o.__scopeAccordion,collapsible:!0,children:e.jsx(de,{...r,ref:t})})})}),[Me,k]=V(h),de=f.forwardRef((o,t)=>{const{__scopeAccordion:n,disabled:a,dir:c,orientation:r="vertical",...i}=o,d=f.useRef(null),p=ee(d,t),g=Ee(n),v=be(c)==="ltr",w=Z(o.onKeyDown,C=>{if(!Se.includes(C.key))return;const T=C.target,b=g().filter(F=>!F.ref.current?.disabled),j=b.findIndex(F=>F.ref.current===T),I=b.length;if(j===-1)return;C.preventDefault();let s=j;const N=0,M=I-1,$=()=>{s=j+1,s>M&&(s=N)},z=()=>{s=j-1,s<N&&(s=M)};switch(C.key){case"Home":s=N;break;case"End":s=M;break;case"ArrowRight":r==="horizontal"&&(v?$():z());break;case"ArrowDown":r==="vertical"&&$();break;case"ArrowLeft":r==="horizontal"&&(v?z():$());break;case"ArrowUp":r==="vertical"&&z();break}const xe=s%I;b[xe].ref.current?.focus()});return e.jsx(Me,{scope:n,disabled:a,direction:c,orientation:r,children:e.jsx(J.Slot,{scope:n,children:e.jsx(R.div,{...i,"data-orientation":r,ref:p,onKeyDown:a?void 0:w})})})}),O="AccordionItem",[$e,W]=V(O),le=f.forwardRef((o,t)=>{const{__scopeAccordion:n,value:a,...c}=o,r=k(O,n),i=Oe(O,n),d=Q(n),p=X(),g=a&&i.value.includes(a)||!1,x=r.disabled||o.disabled;return e.jsx($e,{scope:n,open:g,disabled:x,triggerId:p,children:e.jsx(Te,{"data-orientation":r.orientation,"data-state":Ae(g),...d,...c,ref:t,disabled:x,open:g,onOpenChange:v=>{v?i.onItemOpen(a):i.onItemClose(a)}})})});le.displayName=O;var ue="AccordionHeader",me=f.forwardRef((o,t)=>{const{__scopeAccordion:n,...a}=o,c=k(h,n),r=W(ue,n);return e.jsx(R.h3,{"data-orientation":c.orientation,"data-state":Ae(r.open),"data-disabled":r.disabled?"":void 0,...a,ref:t})});me.displayName=ue;var L="AccordionTrigger",pe=f.forwardRef((o,t)=>{const{__scopeAccordion:n,...a}=o,c=k(h,n),r=W(L,n),i=De(L,n),d=Q(n);return e.jsx(J.ItemSlot,{scope:n,children:e.jsx(_e,{"aria-disabled":r.open&&!i.collapsible||void 0,"data-orientation":c.orientation,id:r.triggerId,...d,...a,ref:t})})});pe.displayName=L;var ge="AccordionContent",fe=f.forwardRef((o,t)=>{const{__scopeAccordion:n,...a}=o,c=k(h,n),r=W(ge,n),i=Q(n);return e.jsx(Pe,{role:"region","aria-labelledby":r.triggerId,"data-orientation":c.orientation,...i,...a,ref:t,style:{"--radix-accordion-content-height":"var(--radix-collapsible-content-height)","--radix-accordion-content-width":"var(--radix-collapsible-content-width)",...o.style}})});fe.displayName=ge;function Ae(o){return o?"open":"closed"}var ze=ce,Fe=le,Le=me,He=pe,Be=fe;function y({...o}){return e.jsx(ze,{"data-slot":"accordion",...o})}function l({className:o,...t}){return e.jsx(Fe,{"data-slot":"accordion-item",className:B("border-b last:border-b-0",o),...t})}function u({className:o,children:t,...n}){return e.jsx(Le,{className:"flex",children:e.jsxs(He,{"data-slot":"accordion-trigger",className:B("focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180",o),...n,children:[t,e.jsx(we,{className:"text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200"})]})})}function m({className:o,children:t,...n}){return e.jsx(Be,{"data-slot":"accordion-content",className:"data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm",...n,children:e.jsx("div",{className:B("pt-0 pb-4",o),children:t})})}y.__docgenInfo={description:"",methods:[],displayName:"Accordion"};m.__docgenInfo={description:"",methods:[],displayName:"AccordionContent"};l.__docgenInfo={description:"",methods:[],displayName:"AccordionItem"};u.__docgenInfo={description:"",methods:[],displayName:"AccordionTrigger"};const no={title:"UI/Accordion",parameters:{layout:"centered"},tags:["autodocs"]},_={render:()=>e.jsxs(y,{type:"single",collapsible:!0,className:"w-full max-w-md",children:[e.jsxs(l,{value:"item-1",children:[e.jsx(u,{children:"O que é React?"}),e.jsx(m,{children:"React é uma biblioteca JavaScript para construir interfaces de usuário, especialmente para aplicações web. Foi desenvolvida pelo Facebook."})]}),e.jsxs(l,{value:"item-2",children:[e.jsx(u,{children:"Como instalar o React?"}),e.jsx(m,{children:"Você pode instalar o React usando npm ou yarn. Execute `npx create-react-app meu-app` para criar um novo projeto."})]}),e.jsxs(l,{value:"item-3",children:[e.jsx(u,{children:"O que são componentes?"}),e.jsx(m,{children:"Componentes são blocos de construção reutilizáveis que encapsulam a lógica e a apresentação de uma parte da interface do usuário."})]})]})},P={render:()=>e.jsxs(y,{type:"multiple",className:"w-full max-w-md",children:[e.jsxs(l,{value:"item-1",children:[e.jsx(u,{children:"Recursos do produto"}),e.jsx(m,{children:e.jsxs("ul",{className:"list-disc pl-4 space-y-1",children:[e.jsx("li",{children:"Interface intuitiva"}),e.jsx("li",{children:"Sincronização em tempo real"}),e.jsx("li",{children:"Suporte multiplataforma"}),e.jsx("li",{children:"Segurança avançada"})]})})]}),e.jsxs(l,{value:"item-2",children:[e.jsx(u,{children:"Preços"}),e.jsx(m,{children:e.jsxs("div",{className:"space-y-2",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Básico:"})," R$ 29/mês"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Pro:"})," R$ 59/mês"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Enterprise:"})," Consulte-nos"]})]})})]}),e.jsxs(l,{value:"item-3",children:[e.jsx(u,{children:"Suporte"}),e.jsx(m,{children:"Oferecemos suporte 24/7 via chat, email e telefone para todos os planos."})]})]})},S={render:()=>e.jsxs(y,{type:"single",collapsible:!0,className:"w-full max-w-lg",children:[e.jsxs(l,{value:"faq-1",children:[e.jsx(u,{children:"Como faço para cancelar minha assinatura?"}),e.jsx(m,{children:"Você pode cancelar sua assinatura a qualquer momento através das configurações da conta ou entrando em contato com nosso suporte."})]}),e.jsxs(l,{value:"faq-2",children:[e.jsx(u,{children:"Existe um período de teste gratuito?"}),e.jsx(m,{children:"Sim! Oferecemos 14 dias de teste gratuito para todos os novos usuários. Não é necessário cartão de crédito."})]}),e.jsxs(l,{value:"faq-3",children:[e.jsx(u,{children:"Posso alterar meu plano a qualquer momento?"}),e.jsx(m,{children:"Absolutamente! Você pode fazer upgrade ou downgrade do seu plano a qualquer momento. As alterações entram em vigor imediatamente."})]}),e.jsxs(l,{value:"faq-4",children:[e.jsx(u,{children:"Os dados são seguros?"}),e.jsx(m,{children:"Sim, levamos a segurança muito a sério. Todos os dados são criptografados em trânsito e em repouso, e seguimos as melhores práticas de segurança."})]})]})},E={render:()=>e.jsxs(y,{type:"single",collapsible:!0,defaultValue:"item-2",className:"w-full max-w-md",children:[e.jsxs(l,{value:"item-1",children:[e.jsx(u,{children:"Primeiro item"}),e.jsx(m,{children:"Conteúdo do primeiro item."})]}),e.jsxs(l,{value:"item-2",children:[e.jsx(u,{children:"Segundo item (aberto por padrão)"}),e.jsx(m,{children:'Este item está aberto por padrão devido ao defaultValue="item-2".'})]}),e.jsxs(l,{value:"item-3",children:[e.jsx(u,{children:"Terceiro item"}),e.jsx(m,{children:"Conteúdo do terceiro item."})]})]})},q={render:()=>e.jsx(y,{type:"single",collapsible:!0,className:"w-full max-w-md",children:e.jsxs(l,{value:"single",children:[e.jsx(u,{children:"Clique para expandir"}),e.jsx(m,{children:"Este é um accordion com apenas um item. Perfeito para seções que precisam ser expandidas ou recolhidas."})]})})};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <Accordion type="single" collapsible className="w-full max-w-md">
      <AccordionItem value="item-1">
        <AccordionTrigger>O que é React?</AccordionTrigger>
        <AccordionContent>
          React é uma biblioteca JavaScript para construir interfaces de
          usuário, especialmente para aplicações web. Foi desenvolvida pelo
          Facebook.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Como instalar o React?</AccordionTrigger>
        <AccordionContent>
          Você pode instalar o React usando npm ou yarn. Execute \`npx
          create-react-app meu-app\` para criar um novo projeto.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>O que são componentes?</AccordionTrigger>
        <AccordionContent>
          Componentes são blocos de construção reutilizáveis que encapsulam a
          lógica e a apresentação de uma parte da interface do usuário.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
}`,..._.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => <Accordion type="multiple" className="w-full max-w-md">
      <AccordionItem value="item-1">
        <AccordionTrigger>Recursos do produto</AccordionTrigger>
        <AccordionContent>
          <ul className="list-disc pl-4 space-y-1">
            <li>Interface intuitiva</li>
            <li>Sincronização em tempo real</li>
            <li>Suporte multiplataforma</li>
            <li>Segurança avançada</li>
          </ul>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Preços</AccordionTrigger>
        <AccordionContent>
          <div className="space-y-2">
            <p>
              <strong>Básico:</strong> R$ 29/mês
            </p>
            <p>
              <strong>Pro:</strong> R$ 59/mês
            </p>
            <p>
              <strong>Enterprise:</strong> Consulte-nos
            </p>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Suporte</AccordionTrigger>
        <AccordionContent>
          Oferecemos suporte 24/7 via chat, email e telefone para todos os
          planos.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
}`,...P.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <Accordion type="single" collapsible className="w-full max-w-lg">
      <AccordionItem value="faq-1">
        <AccordionTrigger>
          Como faço para cancelar minha assinatura?
        </AccordionTrigger>
        <AccordionContent>
          Você pode cancelar sua assinatura a qualquer momento através das
          configurações da conta ou entrando em contato com nosso suporte.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="faq-2">
        <AccordionTrigger>
          Existe um período de teste gratuito?
        </AccordionTrigger>
        <AccordionContent>
          Sim! Oferecemos 14 dias de teste gratuito para todos os novos
          usuários. Não é necessário cartão de crédito.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="faq-3">
        <AccordionTrigger>
          Posso alterar meu plano a qualquer momento?
        </AccordionTrigger>
        <AccordionContent>
          Absolutamente! Você pode fazer upgrade ou downgrade do seu plano a
          qualquer momento. As alterações entram em vigor imediatamente.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="faq-4">
        <AccordionTrigger>Os dados são seguros?</AccordionTrigger>
        <AccordionContent>
          Sim, levamos a segurança muito a sério. Todos os dados são
          criptografados em trânsito e em repouso, e seguimos as melhores
          práticas de segurança.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
}`,...S.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => <Accordion type="single" collapsible defaultValue="item-2" className="w-full max-w-md">
      <AccordionItem value="item-1">
        <AccordionTrigger>Primeiro item</AccordionTrigger>
        <AccordionContent>Conteúdo do primeiro item.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Segundo item (aberto por padrão)</AccordionTrigger>
        <AccordionContent>
          Este item está aberto por padrão devido ao defaultValue="item-2".
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Terceiro item</AccordionTrigger>
        <AccordionContent>Conteúdo do terceiro item.</AccordionContent>
      </AccordionItem>
    </Accordion>
}`,...E.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => <Accordion type="single" collapsible className="w-full max-w-md">
      <AccordionItem value="single">
        <AccordionTrigger>Clique para expandir</AccordionTrigger>
        <AccordionContent>
          Este é um accordion com apenas um item. Perfeito para seções que
          precisam ser expandidas ou recolhidas.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
}`,...q.parameters?.docs?.source}}};const ro=["Default","Multiple","FAQ","WithDefaultValue","SingleItem"];export{_ as Default,S as FAQ,P as Multiple,q as SingleItem,E as WithDefaultValue,ro as __namedExportsOrder,no as default};
