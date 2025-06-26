import{f as a}from"./index-xvQeVdRI.js";import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{u as b}from"./use-language-Mrme-96T.js";import{a as f,b as y,c as T}from"./index-Dhh_au1L.js";import{B as d}from"./button-BOM6QS-j.js";import{I as x}from"./input-BHagqedl.js";import"./iframe-p_J3wOFN.js";import"./index-CC7Hq5D4.js";import"./index-CdJFUDDL.js";import"./utils-CBfrqCZ4.js";const m=({searchTerm:i,activeSearch:u,isLoading:p=!1,onSearchTermChange:l,onSearch:h,onClearSearch:g,onKeyPress:v})=>{const{t:c}=b();return e.jsxs("div",{className:"relative w-full max-w-sm mx-auto py-1","data-testid":"search-input",children:[e.jsx(f,{className:"absolute left-3 top-1/2 -translate-y-1/2 size-5 text-primary"}),e.jsx(x,{placeholder:c("searchPlaceholder"),className:"bg-card pl-10 pr-20 h-11 placeholder:text-primary",value:i,onChange:S=>l(S.target.value),onKeyDown:v,"data-testid":"search-input-field"}),(i||u.trim())&&e.jsx(d,{onClick:g,"aria-label":c("clear"),variant:"ghost",size:"icon",className:"absolute right-10 top-1/2 -translate-y-1/2 cursor-pointer hover:text-primary h-8 w-8","data-testid":"clear-search-button",children:e.jsx(y,{className:"size-4"})}),e.jsx(d,{onClick:h,"aria-label":c("search"),variant:"ghost",size:"icon",className:"absolute right-1 top-1/2 -translate-y-1/2 cursor-pointer hover:text-primary h-8 w-8",disabled:p,"data-testid":"search-button",children:e.jsx(T,{className:"size-4"})})]})};m.__docgenInfo={description:"",methods:[],displayName:"SearchInput",props:{searchTerm:{required:!0,tsType:{name:"string"},description:""},activeSearch:{required:!0,tsType:{name:"string"},description:""},isLoading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onSearchTermChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},onSearch:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onClearSearch:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onKeyPress:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.KeyboardEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactKeyboardEvent",raw:"React.KeyboardEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"e"}],return:{name:"void"}}},description:""}}};const K={title:"UI/SearchInput",component:m,parameters:{layout:"centered",docs:{description:{component:"Componente de campo de busca com ícones e botões integrados para buscar e limpar a pesquisa."}}},tags:["autodocs"],argTypes:{searchTerm:{control:"text",description:"Termo de busca atual"},activeSearch:{control:"text",description:"Termo de busca ativo"},isLoading:{control:"boolean",description:"Indica se está carregando"},onSearchTermChange:{description:"Callback chamado quando o termo de busca muda"},onSearch:{description:"Callback chamado quando o botão de busca é clicado"},onClearSearch:{description:"Callback chamado quando o botão de limpar é clicado"},onKeyPress:{description:"Callback chamado quando uma tecla é pressionada no input"}},args:{onSearchTermChange:a(),onSearch:a(),onClearSearch:a(),onKeyPress:a()}},r={args:{searchTerm:"",activeSearch:"",isLoading:!1}},s={args:{searchTerm:"Pikachu",activeSearch:"",isLoading:!1}},t={args:{searchTerm:"",activeSearch:"charizard",isLoading:!1}},n={args:{searchTerm:"Charizard",activeSearch:"charizard",isLoading:!0}},o={args:{searchTerm:"Bulbasaur",activeSearch:"bulbasaur",isLoading:!1}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    searchTerm: "",
    activeSearch: "",
    isLoading: false
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    searchTerm: "Pikachu",
    activeSearch: "",
    isLoading: false
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    searchTerm: "",
    activeSearch: "charizard",
    isLoading: false
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    searchTerm: "Charizard",
    activeSearch: "charizard",
    isLoading: true
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    searchTerm: "Bulbasaur",
    activeSearch: "bulbasaur",
    isLoading: false
  }
}`,...o.parameters?.docs?.source}}};const A=["Default","WithSearchTerm","ActiveSearch","Loading","WithSearchTermAndActiveSearch"];export{t as ActiveSearch,r as Default,n as Loading,s as WithSearchTerm,o as WithSearchTermAndActiveSearch,A as __namedExportsOrder,K as default};
