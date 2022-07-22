# 👨‍💻 Projeto semanal 8  

## 📝 Descrição do projeto:
<p>Mini projeto realizado para fins educacionais, para colocar em pratica o que foi visto durante a semana 2 e 3. Ferramenta de apoio no terminal do NODE, para o dia a dia do Dev.<p>  

## 💡 Solução:
<p>O presente projeto trata-se de um código utilizando o Node.js com Express, com duas rotas na aplicação, uma delas vai receber uma dica e gravar essa dica no banco de dados e a outra rota deve devolver de forma aleatória uma das dicas que estão armazenadas no banco. <p>  
  
## 🗂️ Packages:

* [Express](https://www.npmjs.com/package/express)
* [Nodemon](https://www.npmjs.com/package/nodemon)

## Instalação da Aplicação

Abra o terminal/Powershell e rode os comandos abaixo:

Clonando o repositório:
```
git clone https://github.com/luiseduardot17/projeto-semanal-8.git
```

Entrando na pasta:
```
cd projeto-semanal-8
```

Instalando os pacotes:
```
npm install
```

Rodando o projeto:
```
npm start
```

## Rotas implementadas

### Tips (aleatorio)
 * __GET  /tips__

    Esquema da resposta
    ```json
            { 
            "dicas":"Nunca suba o node_modules no github"
            }
            {
            "dicas":"Esteja sempre estudando"
            }
            {
            "dicas":"Saiba bastante sobre lógica de programação"
            }
            {
            "dicas":"Aprenda programação orientada a objetos para aumentar suas oportunidades"
            }
            {
            "dicas":"Invista nas suas Soft Skills"
            }
            {
            "dicas":"Aprenda ou melhore seu inglês"
            }
    ```
    
    __POST /create__

    Esquema da requisição
    ```json
    {
    "dica1":"Nunca suba o node_modules no github",
    "dica2":"Esteja sempre estudando",
    "dica3":"Saiba bastante sobre lógica de programação", 
    "dica4":"Aprenda programação orientada a objetos para aumentar suas oportunidades", 
    "dica5":"Invista nas suas Soft Skills", 
    "dica6":"Aprenda ou melhore seu inglês"
    }
    ```

    Esquema da resposta
    ```json
    {
        "msg": "Dica inserida com sucesso",
        "dicas": {
            "id": 1,
            {
              "dica1":"Nunca suba o node_modules no github",
              "dica2":"Esteja sempre estudando",
              "dica3":"Saiba bastante sobre lógica de programação", 
              "dica4":"Aprenda programação orientada a objetos para aumentar suas oportunidades", 
              "dica5":"Invista nas suas Soft Skills", 
              "dica6":"Aprenda ou melhore seu inglês"
            }
                  }
    }
    ```
