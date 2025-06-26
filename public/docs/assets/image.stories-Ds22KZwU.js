import{I as d}from"./image-BusruAOR.js";import"./jsx-runtime-D_zvdyIk.js";import"./use-language-CQOlZJfg.js";import"./iframe-CRWpp2I1.js";import"./skeleton-CNQqPhWa.js";import"./utils-CBfrqCZ4.js";const i=()=>({t:c=>({imageLoadError:"Erro ao carregar imagem",error:"Erro"})[c]||c});typeof window<"u"&&(window.__STORYBOOK_MOCK_USE_LANGUAGE__=i);const x={title:"UI/Image",component:d,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{src:{control:{type:"text"}},alt:{control:{type:"text"}},width:{control:{type:"number"}},height:{control:{type:"number"}},priority:{control:{type:"boolean"}},showLoadingIndicator:{control:{type:"boolean"}},className:{control:{type:"text"}}}},r={args:{src:"https://picsum.photos/300/200",alt:"Imagem de exemplo",width:300,height:200}},e={args:{src:"https://picsum.photos/400/300",alt:"Imagem com prioridade",width:400,height:300,priority:!0}},a={args:{src:"https://picsum.photos/250/250",alt:"Imagem sem indicador",width:250,height:250,showLoadingIndicator:!1}},s={args:{src:"https://picsum.photos/200/200",alt:"Imagem quadrada",width:200,height:200,className:"rounded-lg shadow-md"}},o={args:{src:"https://picsum.photos/150/150",alt:"Imagem circular",width:150,height:150,className:"rounded-full border-4 border-white shadow-lg"}},t={args:{src:"https://picsum.photos/600/400",alt:"Imagem grande",width:600,height:400,className:"rounded-xl"}},m={args:{src:"https://picsum.photos/100/100",alt:"Imagem pequena",width:100,height:100,className:"rounded-md"}},n={args:{src:"https://picsum.photos/350/250",alt:"Imagem com estilos",width:350,height:250,style:{borderRadius:"16px",boxShadow:"0 10px 25px rgba(0,0,0,0.2)",border:"2px solid #e5e5e5"}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    src: "https://picsum.photos/300/200",
    alt: "Imagem de exemplo",
    width: 300,
    height: 200
  }
}`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    src: "https://picsum.photos/400/300",
    alt: "Imagem com prioridade",
    width: 400,
    height: 300,
    priority: true
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    src: "https://picsum.photos/250/250",
    alt: "Imagem sem indicador",
    width: 250,
    height: 250,
    showLoadingIndicator: false
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    src: "https://picsum.photos/200/200",
    alt: "Imagem quadrada",
    width: 200,
    height: 200,
    className: "rounded-lg shadow-md"
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    src: "https://picsum.photos/150/150",
    alt: "Imagem circular",
    width: 150,
    height: 150,
    className: "rounded-full border-4 border-white shadow-lg"
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    src: "https://picsum.photos/600/400",
    alt: "Imagem grande",
    width: 600,
    height: 400,
    className: "rounded-xl"
  }
}`,...t.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    src: "https://picsum.photos/100/100",
    alt: "Imagem pequena",
    width: 100,
    height: 100,
    className: "rounded-md"
  }
}`,...m.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    src: "https://picsum.photos/350/250",
    alt: "Imagem com estilos",
    width: 350,
    height: 250,
    style: {
      borderRadius: "16px",
      boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
      border: "2px solid #e5e5e5"
    }
  }
}`,...n.parameters?.docs?.source}}};const b=["Padrao","ComPrioridade","SemIndicadorCarregamento","ImagemQuadrada","ImagemCircular","ImagemGrande","ImagemPequena","ComEstilosPersonalizados"];export{n as ComEstilosPersonalizados,e as ComPrioridade,o as ImagemCircular,t as ImagemGrande,m as ImagemPequena,s as ImagemQuadrada,r as Padrao,a as SemIndicadorCarregamento,b as __namedExportsOrder,x as default};
