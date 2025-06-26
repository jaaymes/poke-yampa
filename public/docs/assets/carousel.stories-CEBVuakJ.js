import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{C as a,a as r,b as n,c as t,d as l}from"./carousel-C5h8Gzpx.js";import"./iframe-CRWpp2I1.js";import"./button-DS3kFZGj.js";import"./index-BBWlx4az.js";import"./index-CdJFUDDL.js";import"./utils-CBfrqCZ4.js";import"./createLucideIcon-C1AjKPti.js";const b={title:"UI/Carousel",component:a,parameters:{layout:"centered"},tags:["autodocs"]},d={render:()=>e.jsx("div",{className:"w-full max-w-xs",children:e.jsxs(a,{children:[e.jsx(r,{children:Array.from({length:5}).map((o,s)=>e.jsx(n,{children:e.jsx("div",{className:"p-1",children:e.jsx("div",{className:"flex h-40 items-center justify-center rounded-md border border-slate-200 bg-slate-100 p-6",children:e.jsx("span",{className:"text-3xl font-semibold",children:s+1})})})},s))}),e.jsx(t,{}),e.jsx(l,{})]})})},m={render:()=>e.jsxs("div",{className:"w-full max-w-xs",children:[e.jsxs(a,{loop:!0,children:[e.jsx(r,{children:Array.from({length:5}).map((o,s)=>e.jsx(n,{children:e.jsx("div",{className:"p-1",children:e.jsx("div",{className:"flex h-40 items-center justify-center rounded-md border border-slate-200 bg-slate-100 p-6",children:e.jsx("span",{className:"text-3xl font-semibold",children:s+1})})})},s))}),e.jsx(t,{}),e.jsx(l,{})]}),e.jsx("p",{className:"mt-2 text-center text-sm text-slate-500",children:"Modo infinito: navegue continuamente sem parar nos limites"})]})},i={render:()=>e.jsx("div",{className:"w-full max-w-xs",children:e.jsxs(a,{orientation:"vertical",className:"h-64",children:[e.jsx(r,{children:Array.from({length:5}).map((o,s)=>e.jsx(n,{children:e.jsx("div",{className:"p-1",children:e.jsx("div",{className:"flex h-32 items-center justify-center rounded-md border border-slate-200 bg-slate-100 p-6",children:e.jsx("span",{className:"text-3xl font-semibold",children:s+1})})})},s))}),e.jsx(t,{}),e.jsx(l,{})]})})},c={render:()=>e.jsx("div",{className:"w-full max-w-sm",children:e.jsxs(a,{children:[e.jsx(r,{children:Array.from({length:3}).map((o,s)=>e.jsx(n,{children:e.jsx("div",{className:"p-1",children:e.jsx("div",{className:"overflow-hidden rounded-md",children:e.jsx("img",{src:`https://picsum.photos/seed/${s}/400/200`,alt:`Random image ${s+1}`,className:"h-48 w-full object-cover"})})})},s))}),e.jsx(t,{}),e.jsx(l,{})]})})},x={render:()=>e.jsxs("div",{className:"w-full max-w-sm",children:[e.jsxs(a,{loop:!0,children:[e.jsx(r,{children:Array.from({length:3}).map((o,s)=>e.jsx(n,{children:e.jsx("div",{className:"p-1",children:e.jsx("div",{className:"overflow-hidden rounded-md",children:e.jsx("img",{src:`https://picsum.photos/seed/${s}/400/200`,alt:`Random image ${s+1}`,className:"h-48 w-full object-cover"})})})},s))}),e.jsx(t,{}),e.jsx(l,{})]}),e.jsx("p",{className:"mt-2 text-center text-sm text-slate-500",children:"Imagens em modo infinito"})]})},u={render:()=>e.jsx("div",{className:"w-full max-w-xs",children:e.jsxs(a,{children:[e.jsx(r,{children:Array.from({length:5}).map((o,s)=>e.jsx(n,{children:e.jsx("div",{className:"p-1",children:e.jsx("div",{className:"flex h-40 items-center justify-center rounded-md border border-slate-200 bg-slate-100 p-6",children:e.jsx("span",{className:"text-3xl font-semibold",children:s+1})})})},s))}),e.jsx(t,{variant:"secondary",className:"left-0 translate-x-0"}),e.jsx(l,{variant:"secondary",className:"right-0 translate-x-0"})]})})};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-full max-w-xs">
      <Carousel>
        <CarouselContent>
          {Array.from({
          length: 5
        }).map((_, index) => <CarouselItem key={index}>
              <div className="p-1">
                <div className="flex h-40 items-center justify-center rounded-md border border-slate-200 bg-slate-100 p-6">
                  <span className="text-3xl font-semibold">{index + 1}</span>
                </div>
              </div>
            </CarouselItem>)}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-full max-w-xs">
      <Carousel loop={true}>
        <CarouselContent>
          {Array.from({
          length: 5
        }).map((_, index) => <CarouselItem key={index}>
              <div className="p-1">
                <div className="flex h-40 items-center justify-center rounded-md border border-slate-200 bg-slate-100 p-6">
                  <span className="text-3xl font-semibold">{index + 1}</span>
                </div>
              </div>
            </CarouselItem>)}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <p className="mt-2 text-center text-sm text-slate-500">
        Modo infinito: navegue continuamente sem parar nos limites
      </p>
    </div>
}`,...m.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-full max-w-xs">
      <Carousel orientation="vertical" className="h-64">
        <CarouselContent>
          {Array.from({
          length: 5
        }).map((_, index) => <CarouselItem key={index}>
              <div className="p-1">
                <div className="flex h-32 items-center justify-center rounded-md border border-slate-200 bg-slate-100 p-6">
                  <span className="text-3xl font-semibold">{index + 1}</span>
                </div>
              </div>
            </CarouselItem>)}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-full max-w-sm">
      <Carousel>
        <CarouselContent>
          {Array.from({
          length: 3
        }).map((_, index) => <CarouselItem key={index}>
              <div className="p-1">
                <div className="overflow-hidden rounded-md">
                  <img src={\`https://picsum.photos/seed/\${index}/400/200\`} alt={\`Random image \${index + 1}\`} className="h-48 w-full object-cover" />
                </div>
              </div>
            </CarouselItem>)}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
}`,...c.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-full max-w-sm">
      <Carousel loop={true}>
        <CarouselContent>
          {Array.from({
          length: 3
        }).map((_, index) => <CarouselItem key={index}>
              <div className="p-1">
                <div className="overflow-hidden rounded-md">
                  <img src={\`https://picsum.photos/seed/\${index}/400/200\`} alt={\`Random image \${index + 1}\`} className="h-48 w-full object-cover" />
                </div>
              </div>
            </CarouselItem>)}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <p className="mt-2 text-center text-sm text-slate-500">
        Imagens em modo infinito
      </p>
    </div>
}`,...x.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-full max-w-xs">
      <Carousel>
        <CarouselContent>
          {Array.from({
          length: 5
        }).map((_, index) => <CarouselItem key={index}>
              <div className="p-1">
                <div className="flex h-40 items-center justify-center rounded-md border border-slate-200 bg-slate-100 p-6">
                  <span className="text-3xl font-semibold">{index + 1}</span>
                </div>
              </div>
            </CarouselItem>)}
        </CarouselContent>
        <CarouselPrevious variant="secondary" className="left-0 translate-x-0" />
        <CarouselNext variant="secondary" className="right-0 translate-x-0" />
      </Carousel>
    </div>
}`,...u.parameters?.docs?.source}}};const w=["Default","InfiniteLoop","Vertical","WithImages","InfiniteLoopImages","CustomButtons"];export{u as CustomButtons,d as Default,m as InfiniteLoop,x as InfiniteLoopImages,i as Vertical,c as WithImages,w as __namedExportsOrder,b as default};
