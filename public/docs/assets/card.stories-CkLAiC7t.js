import{j as e}from"./jsx-runtime-D_zvdyIk.js";import"./iframe-B-aTycOV.js";import{c as d}from"./utils-CBfrqCZ4.js";function s({className:r,...a}){return e.jsx("div",{"data-slot":"card",className:d("bg-card text-card-foreground flex flex-col gap-6 rounded-xl shadow-custom",r),...a})}function n({className:r,...a}){return e.jsx("div",{"data-slot":"card-header",className:d("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",r),...a})}function o({className:r,...a}){return e.jsx("div",{"data-slot":"card-title",className:d("leading-none font-semibold",r),...a})}function t({className:r,...a}){return e.jsx("div",{"data-slot":"card-description",className:d("text-muted-foreground text-sm",r),...a})}function u({className:r,...a}){return e.jsx("div",{"data-slot":"card-action",className:d("col-start-2 row-span-2 row-start-1 self-start justify-self-end",r),...a})}function i({className:r,...a}){return e.jsx("div",{"data-slot":"card-content",className:d("px-6",r),...a})}function C({className:r,...a}){return e.jsx("div",{"data-slot":"card-footer",className:d("flex items-center px-6 [.border-t]:pt-6",r),...a})}s.__docgenInfo={description:"",methods:[],displayName:"Card"};u.__docgenInfo={description:"",methods:[],displayName:"CardAction"};i.__docgenInfo={description:"",methods:[],displayName:"CardContent"};t.__docgenInfo={description:"",methods:[],displayName:"CardDescription"};C.__docgenInfo={description:"",methods:[],displayName:"CardFooter"};n.__docgenInfo={description:"",methods:[],displayName:"CardHeader"};o.__docgenInfo={description:"",methods:[],displayName:"CardTitle"};const N={title:"UI/Card",component:s,parameters:{layout:"centered"},tags:["autodocs"]},c={render:()=>e.jsxs(s,{className:"w-[350px]",children:[e.jsxs(n,{children:[e.jsx(o,{children:"Título do Card"}),e.jsx(t,{children:"Descrição do card aqui"})]}),e.jsx(i,{children:e.jsx("p",{children:"Conteúdo principal do card."})}),e.jsx(C,{children:e.jsx("p",{children:"Footer do card"})})]})},l={render:()=>e.jsxs(s,{className:"w-[350px]",children:[e.jsxs(n,{children:[e.jsx(o,{children:"Card com Ação"}),e.jsx(t,{children:"Card que possui uma ação no header"}),e.jsx(u,{children:e.jsx("button",{className:"px-3 py-1 text-sm bg-primary text-white rounded",children:"Ação"})})]}),e.jsx(i,{children:e.jsx("p",{children:"Este card possui uma ação no header."})})]})},p={render:()=>e.jsx(s,{className:"w-[300px]",children:e.jsx(i,{children:e.jsx("p",{children:"Card simples apenas com conteúdo."})})})},m={render:()=>e.jsx(s,{className:"w-[300px]",children:e.jsxs(n,{children:[e.jsx(o,{children:"Apenas Header"}),e.jsx(t,{children:"Card com apenas header e descrição"})]})})},x={render:()=>e.jsxs(s,{className:"w-[400px]",children:[e.jsxs(n,{children:[e.jsx(o,{children:"Card Complexo"}),e.jsx(t,{children:"Este é um exemplo de card mais complexo com múltiplas seções"}),e.jsx(u,{children:e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{className:"px-2 py-1 text-xs bg-secondary rounded",children:"Ver"}),e.jsx("button",{className:"px-2 py-1 text-xs bg-primary text-white rounded",children:"Editar"})]})})]}),e.jsx(i,{children:e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{children:"Este card demonstra todas as funcionalidades:"}),e.jsxs("ul",{className:"list-disc list-inside text-sm text-muted-foreground",children:[e.jsx("li",{children:"Header com título e descrição"}),e.jsx("li",{children:"Ações no header"}),e.jsx("li",{children:"Conteúdo estruturado"}),e.jsx("li",{children:"Footer com informações adicionais"})]})]})}),e.jsx(C,{children:e.jsxs("div",{className:"flex justify-between w-full text-sm text-muted-foreground",children:[e.jsx("span",{children:"Criado em: 01/01/2024"}),e.jsx("span",{children:"Atualizado há 2 dias"})]})})]})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Título do Card</CardTitle>
        <CardDescription>Descrição do card aqui</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Conteúdo principal do card.</p>
      </CardContent>
      <CardFooter>
        <p>Footer do card</p>
      </CardFooter>
    </Card>
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Card com Ação</CardTitle>
        <CardDescription>Card que possui uma ação no header</CardDescription>
        <CardAction>
          <button className="px-3 py-1 text-sm bg-primary text-white rounded">
            Ação
          </button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <p>Este card possui uma ação no header.</p>
      </CardContent>
    </Card>
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <Card className="w-[300px]">
      <CardContent>
        <p>Card simples apenas com conteúdo.</p>
      </CardContent>
    </Card>
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <Card className="w-[300px]">
      <CardHeader>
        <CardTitle>Apenas Header</CardTitle>
        <CardDescription>Card com apenas header e descrição</CardDescription>
      </CardHeader>
    </Card>
}`,...m.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <Card className="w-[400px]">
      <CardHeader>
        <CardTitle>Card Complexo</CardTitle>
        <CardDescription>
          Este é um exemplo de card mais complexo com múltiplas seções
        </CardDescription>
        <CardAction>
          <div className="flex gap-2">
            <button className="px-2 py-1 text-xs bg-secondary rounded">
              Ver
            </button>
            <button className="px-2 py-1 text-xs bg-primary text-white rounded">
              Editar
            </button>
          </div>
        </CardAction>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <p>Este card demonstra todas as funcionalidades:</p>
          <ul className="list-disc list-inside text-sm text-muted-foreground">
            <li>Header com título e descrição</li>
            <li>Ações no header</li>
            <li>Conteúdo estruturado</li>
            <li>Footer com informações adicionais</li>
          </ul>
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex justify-between w-full text-sm text-muted-foreground">
          <span>Criado em: 01/01/2024</span>
          <span>Atualizado há 2 dias</span>
        </div>
      </CardFooter>
    </Card>
}`,...x.parameters?.docs?.source}}};const g=["Default","WithAction","Simple","HeaderOnly","Complex"];export{x as Complex,c as Default,m as HeaderOnly,p as Simple,l as WithAction,g as __namedExportsOrder,N as default};
