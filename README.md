# MeshGrain

Gerador de gradientes mesh com textura de grão diretamente no navegador. Crie fundos fluidos e orgânicos, ajuste cores, tamanhos, distorção e efeitos, e exporte em alta resolução.

Inspirado no [Mesh Gradient Generator](https://www.devtools.tools/mesh-gradient-generator) do DevTools Tools, com foco em uma interface mais simples e direta.

## Demonstração

Acesse a aplicação em: [https://meshgrain.netlify.app](https://meshgrain.netlify.app)

## Funcionalidades

- Criação de gradientes mesh com até 12 pontos de cor
- Arraste interativo dos pontos no preview
- Adição e remoção de pontos
- Ajuste individual de cor, posição, tamanho e alongamento horizontal
- Modos de mesclagem: Gaussiano (blur) e Distância Inversa (IDW)
- Espaços de cor: sRGB, Linear RGB e OKLab
- Distorção por ruído (warp) com controle de intensidade, escala, oitavas e semente
- Textura de grão configurável: intensidade, tamanho, modo de mesclagem, grão colorido, animação e semente
- Ajustes de imagem: brilho, contraste, saturação, rotação de matiz e vinheta
- Exportação em PNG, JPEG e WebP com qualidade ajustável
- Resoluções predefinidas: HD, Full HD, 2K, 4K, quadrado e retrato
- Compartilhamento de configuração via URL
- Salvamento e carregamento de configurações em JSON
- Armazenamento local das últimas configurações

## Tecnologias

- HTML5
- CSS3
- JavaScript (ES2020+)
- WebGL 2

## Como usar

1. Acesse a aplicação em [https://meshgrain.netlify.app](https://meshgrain.netlify.app)
2. Escolha um preset ou clique em "Randomize" para começar
3. Arraste os pontos no canvas para ajustar o gradiente
4. Use o painel lateral para configurar pontos, blending, warp, grain e ajustes
5. Exporte a imagem no formato e resolução desejados

## Executando localmente

Não há etapa de build. Basta servir os arquivos estáticos.

```bash
# Clone o repositório
git clone https://github.com/archivemauro/meshgrain.git

# Entre no diretório
cd meshgrain

# Sirva os arquivos localmente (qualquer servidor estático funciona)
npx serve .
