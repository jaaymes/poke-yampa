import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{f as u}from"./index-xvQeVdRI.js";import{r as c}from"./iframe-p_J3wOFN.js";import{B as d}from"./button-BOM6QS-j.js";import"./index-CC7Hq5D4.js";import"./index-CdJFUDDL.js";import"./utils-CBfrqCZ4.js";const m=c.createContext(null);function l(){const a=c.useContext(m);if(!a)throw new Error("useMockLanguage must be used within MockLanguageProvider");return a}function g(){const{currentLanguage:a,changeLanguage:t,t:i}=l();return e.jsx("header",{className:"sticky  px-4 top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 max-w-7xl mx-auto",children:e.jsxs("div",{className:"container flex h-16 items-center",children:[e.jsx("div",{className:"mr-4 flex items-center",children:e.jsx("a",{href:"/",className:"flex items-center space-x-2",children:e.jsx("span",{className:"text-xl font-bold text-primary",children:i("appName")})})}),e.jsx("div",{className:"flex flex-1 items-center justify-end space-x-4",children:e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx(d,{size:"sm",onClick:()=>t("pt-BR"),variant:a==="pt-BR"?"default":"ghost",children:"PT"}),e.jsx(d,{size:"sm",onClick:()=>t("en"),variant:a==="en"?"default":"ghost",children:"EN"})]})})]})})}function x(){const[a,t]=c.useState("pt-BR"),p={currentLanguage:a,changeLanguage:o=>{t(o),u()(`Language changed to ${o}`)},t:o=>({"pt-BR":{appName:"PokéYampa - Português"},en:{appName:"PokéYampa - English"}})[a][o]||o};return e.jsx(m.Provider,{value:p,children:e.jsx(g,{})})}const C={title:"UI/Header",component:x,parameters:{layout:"fullscreen",actions:{handles:["changeLanguage"]}},tags:["autodocs"]},r={parameters:{docs:{description:{story:"Header padrão com funcionalidade de troca de idioma. Clique nos botões PT/EN para ver a mudança em tempo real."}}}},s={parameters:{docs:{description:{story:"Demonstra a funcionalidade completa de troca de idioma. O componente Header mantém seu comportamento original, mas agora você pode interagir com os botões PT/EN e ver as mudanças refletidas no nome da aplicação e no estado dos botões."}}}},n={parameters:{docs:{description:{story:"Story interativa que permite testar completamente a funcionalidade de troca de idioma. Observe como o texto do cabeçalho muda entre 'PokéYampa - Português' e 'PokéYampa - English' ao clicar nos botões de idioma."}}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Header padrão com funcionalidade de troca de idioma. Clique nos botões PT/EN para ver a mudança em tempo real."
      }
    }
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Demonstra a funcionalidade completa de troca de idioma. O componente Header mantém seu comportamento original, mas agora você pode interagir com os botões PT/EN e ver as mudanças refletidas no nome da aplicação e no estado dos botões."
      }
    }
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Story interativa que permite testar completamente a funcionalidade de troca de idioma. Observe como o texto do cabeçalho muda entre 'PokéYampa - Português' e 'PokéYampa - English' ao clicar nos botões de idioma."
      }
    }
  }
}`,...n.parameters?.docs?.source}}};const E=["Padrao","ComTrocaDeIdioma","InteracaoCompleta"];export{s as ComTrocaDeIdioma,n as InteracaoCompleta,r as Padrao,E as __namedExportsOrder,C as default};
