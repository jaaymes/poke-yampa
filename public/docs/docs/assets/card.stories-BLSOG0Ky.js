import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{C as r,a as t,b as i,c,d as l,e as p,f as m}from"./card-Buw12IHp.js";import"./iframe-CbXUUqvh.js";import"./utils-CBfrqCZ4.js";const j={title:"UI/Card",component:r,parameters:{layout:"centered"},tags:["autodocs"]},a={render:()=>e.jsxs(r,{className:"w-[350px]",children:[e.jsxs(t,{children:[e.jsx(i,{children:"Título do Card"}),e.jsx(c,{children:"Descrição do card aqui"})]}),e.jsx(l,{children:e.jsx("p",{children:"Conteúdo principal do card."})}),e.jsx(p,{children:e.jsx("p",{children:"Footer do card"})})]})},s={render:()=>e.jsxs(r,{className:"w-[350px]",children:[e.jsxs(t,{children:[e.jsx(i,{children:"Card com Ação"}),e.jsx(c,{children:"Card que possui uma ação no header"}),e.jsx(m,{children:e.jsx("button",{className:"px-3 py-1 text-sm bg-primary text-white rounded",children:"Ação"})})]}),e.jsx(l,{children:e.jsx("p",{children:"Este card possui uma ação no header."})})]})},d={render:()=>e.jsx(r,{className:"w-[300px]",children:e.jsx(l,{children:e.jsx("p",{children:"Card simples apenas com conteúdo."})})})},n={render:()=>e.jsx(r,{className:"w-[300px]",children:e.jsxs(t,{children:[e.jsx(i,{children:"Apenas Header"}),e.jsx(c,{children:"Card com apenas header e descrição"})]})})},o={render:()=>e.jsxs(r,{className:"w-[400px]",children:[e.jsxs(t,{children:[e.jsx(i,{children:"Card Complexo"}),e.jsx(c,{children:"Este é um exemplo de card mais complexo com múltiplas seções"}),e.jsx(m,{children:e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{className:"px-2 py-1 text-xs bg-secondary rounded",children:"Ver"}),e.jsx("button",{className:"px-2 py-1 text-xs bg-primary text-white rounded",children:"Editar"})]})})]}),e.jsx(l,{children:e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{children:"Este card demonstra todas as funcionalidades:"}),e.jsxs("ul",{className:"list-disc list-inside text-sm text-muted-foreground",children:[e.jsx("li",{children:"Header com título e descrição"}),e.jsx("li",{children:"Ações no header"}),e.jsx("li",{children:"Conteúdo estruturado"}),e.jsx("li",{children:"Footer com informações adicionais"})]})]})}),e.jsx(p,{children:e.jsxs("div",{className:"flex justify-between w-full text-sm text-muted-foreground",children:[e.jsx("span",{children:"Criado em: 01/01/2024"}),e.jsx("span",{children:"Atualizado há 2 dias"})]})})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <Card className="w-[300px]">
      <CardContent>
        <p>Card simples apenas com conteúdo.</p>
      </CardContent>
    </Card>
}`,...d.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <Card className="w-[300px]">
      <CardHeader>
        <CardTitle>Apenas Header</CardTitle>
        <CardDescription>Card com apenas header e descrição</CardDescription>
      </CardHeader>
    </Card>
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const N=["Default","WithAction","Simple","HeaderOnly","Complex"];export{o as Complex,a as Default,n as HeaderOnly,d as Simple,s as WithAction,N as __namedExportsOrder,j as default};
