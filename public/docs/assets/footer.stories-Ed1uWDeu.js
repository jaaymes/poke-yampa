import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{u as m}from"./use-language-CQOlZJfg.js";import"./iframe-CRWpp2I1.js";function d({windowInfo:e}){const{t:r}=m();return!e?.total||e.total<=0?n.jsx("footer",{className:"sticky bottom-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 max-w-7xl mx-auto",children:n.jsx("div",{className:"container flex flex-col h-auto items-center justify-center py-2 gap-2",children:n.jsxs("p",{className:"text-sm text-center",children:[r("pokemons")," - Lista virtualizada"]})})}):n.jsx("footer",{className:"sticky bottom-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 max-w-7xl mx-auto",children:n.jsxs("div",{className:"container flex flex-col h-auto items-center justify-center py-2 gap-2",children:[n.jsxs("p",{className:"text-sm text-center",children:[r("showing")," ",e.end||0," ",r("of")," ",e.total," ",r("pokemons")," - Página ",e.currentPage||0]}),!1]})})}d.__docgenInfo={description:"",methods:[],displayName:"Footer",props:{windowInfo:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  end?: number;
  total?: number | undefined;
  windowSize?: number;
  currentPage?: number;
  offset?: number;
}`,signature:{properties:[{key:"end",value:{name:"number",required:!1}},{key:"total",value:{name:"union",raw:"number | undefined",elements:[{name:"number"},{name:"undefined"}],required:!1}},{key:"windowSize",value:{name:"number",required:!1}},{key:"currentPage",value:{name:"number",required:!1}},{key:"offset",value:{name:"number",required:!1}}]}},description:""}}};const u=()=>({t:e=>({pokemons:"Pokémons",showing:"Mostrando",of:"de"})[e]||e});typeof window<"u"&&(window.__STORYBOOK_MOCK_USE_LANGUAGE__=u);const w={title:"UI/Footer",component:d,parameters:{layout:"fullscreen"},tags:["autodocs"],argTypes:{windowInfo:{control:{type:"object"}}}},o={args:{}},a={args:{windowInfo:{end:20,total:151,currentPage:1,offset:0,windowSize:20}}},t={args:{windowInfo:{end:60,total:151,currentPage:3,offset:40,windowSize:20}}},s={args:{windowInfo:{end:151,total:151,currentPage:8,offset:140,windowSize:11}}},i={args:{windowInfo:{end:0,total:0,currentPage:0,offset:0,windowSize:0}}},c={args:{windowInfo:{end:100,total:1025,currentPage:5,offset:80,windowSize:20}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    windowInfo: {
      end: 20,
      total: 151,
      currentPage: 1,
      offset: 0,
      windowSize: 20
    }
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    windowInfo: {
      end: 60,
      total: 151,
      currentPage: 3,
      offset: 40,
      windowSize: 20
    }
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    windowInfo: {
      end: 151,
      total: 151,
      currentPage: 8,
      offset: 140,
      windowSize: 11
    }
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    windowInfo: {
      end: 0,
      total: 0,
      currentPage: 0,
      offset: 0,
      windowSize: 0
    }
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    windowInfo: {
      end: 100,
      total: 1025,
      currentPage: 5,
      offset: 80,
      windowSize: 20
    }
  }
}`,...c.parameters?.docs?.source}}};const b=["SemInformacoes","ComInformacoes","PaginaIntermediaria","UltimaPagina","ListaVazia","MuitosPokemons"];export{a as ComInformacoes,i as ListaVazia,c as MuitosPokemons,t as PaginaIntermediaria,o as SemInformacoes,s as UltimaPagina,b as __namedExportsOrder,w as default};
