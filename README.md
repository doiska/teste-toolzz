# Projeto de Página de Login

- Disponível em: https://interview.twokei.com/
- Usuário: demo | Senha: 123456

## Resultado Final
![image](https://github.com/doiska/teste-toolzz/assets/40711231/d8ce2c6a-a642-424f-a380-f859b0fc24d4)

## Figma
![image](https://github.com/doiska/teste-toolzz/assets/40711231/aa0c1f81-442b-420a-a022-8440a1ff63a5)

## Tarefas solicitadas
- Converter um design do Figma para uma página web funcional;
- Manter alta fidelidade ao design original, incluindo tipografia, cores e espaçamento;
- Responsividade em outros dispositivos;
- Formulário de login com validação de input e feedback visual;
- API simples para receber e validar os dados de login

## Resultado do Projeto
Além dos requisitos iniciais, foram adicionados:
- Carousel dinâmico e responsivo;
- Captcha funcional (Cloudflare - Turnstile);
- Deploy Frontend e Backend.

## Observações
- Alguns icones utilizados no Figma são da versão paga do Font Awesome, então optei por similares. 

## Configurando o Projeto
1. Instale [Node.js 20](https://nodejs.org/en/download/package-manager)
2. Clone o projeto para seu computador [``git clone https://github.com/doiska/teste-toolzz.git``](https://github.com/doiska/teste-toolzz.git)

#### Frontend: React (Vite + Typescript) + **Tailwind** para facilitar a estilização;

1. Navegue até o diretório do frontend:
``cd web``

2. Instale as dependências:
``npm install``

3. Execute a aplicação no modo de desenvolvimento:
``npm run dev``

4. Para criar uma versão de produção do projeto, utilize:
```npm run build```

5. Para servir a versão de produção, utilize:
``npm run start``

#### Backend: Hono Typescript (Node.js)
1. Navegue até o diretório do backend:
``cd server``

2. Instale as dependências:
``npm install``

3. Execute o servidor:
``npm run start`` ou ``npm run dev`` (para desenvolvimento)


