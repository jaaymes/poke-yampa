#!/bin/bash

# Script para construir o Storybook e copiá-lo para a pasta public/docs

# Cores para output
GREEN="\033[0;32m"
YELLOW="\033[1;33m"
RED="\033[0;31m"
NC="\033[0m" # No Color

echo "${YELLOW}Iniciando build do Storybook...${NC}"

# Verificar se o diretório storybook-static existe e removê-lo
if [ -d "storybook-static" ]; then
  echo "${YELLOW}Removendo diretório storybook-static existente...${NC}"
  rm -rf storybook-static
fi

# Construir o Storybook
pnpm run build-storybook

if [ $? -ne 0 ]; then
  echo "${RED}Erro ao construir o Storybook!${NC}"
  exit 1
fi

echo "${GREEN}Build do Storybook concluído com sucesso!${NC}"

# Criar diretório docs dentro de public (se não existir)
mkdir -p public/docs

echo "${YELLOW}Copiando arquivos do Storybook para public/docs...${NC}"

# Limpar diretório de destino
rm -rf public/docs/*

# Copiar conteúdo do storybook-static para public/docs
cp -R storybook-static/* public/docs/

# Verificar se o arquivo index.html existe no diretório public/docs
if [ ! -f "public/docs/index.html" ]; then
  echo "${RED}Erro: index.html não foi encontrado em public/docs!${NC}"
  exit 1
fi

echo "${GREEN}Storybook copiado com sucesso para public/docs!${NC}"
echo "${YELLOW}Você pode acessar o Storybook em /docs quando o servidor estiver rodando.${NC}"