## Seção 2: Backend
#### 2. Backend com JSON Server

```
git flow init
npm init -y
cd backend
npm i json-server
npm start
```

## Seção 3: Frontend
#### 3. Visão Geral do Angular
```
```

#### 4. Conceitos Essenciais
```
```

#### 5. Criando APP com o Angular CLI
```
npm i -g @angular/cli
ng 
ng new frontend --minimal
cd frontend
npm start
git flow feature start aula-5
git push origin feature/aula-5
git flow feature finish aula-5
git push origin develop
```

#### 6. Conhecendo os Arquivos do Projeto
```
```

#### 7. HTML do AppComponent
```
```

#### 8. Instalar os Componentes do Material
```
ng add @angular/material
```

#### 9. Componente Cabeçalho
```
ng generate component components/template/header
git flow feature start aula-9
git add .
git commit -m "Adicionado componente header"
git push origin feature/aula-9
git flow feature finish aula-9
git push origin develop
```

#### 10. Componente Rodapé
```
ng g c components/template/footer
git flow feature start aula-10
git add --a
git commit -m "Adicionado componente footer"
git flow feature finish aula-10
git push origin develop
```

#### 11. Componente Navegação
```
ng g c components/template/nav

git flow feature start aula-11
git add --a
git commit -m "Adicionado componente de navegacao"
git flow feature finish aula-11
git push origin develop
```

#### 12. Componente Início (Home)
```
ng g c views/home
git flow feature start aula-12
git add --a
git commit -m "Adicionado componente Home"
git flow feature finish aula-12
git push origin develop
```

#### 13. Navegando entre Componentes
```
ng g c views/home
```

#### 14. Componente Criar Produto
```
ng g c components/product/product-create
git flow feature start aula-14
git add --a
git commit -m "Adicionado componente Produto"
git flow feature finish aula-14
git push origin develop
```

#### 15. Bindings
```
```

#### 16. Aula Bônus
```
```

