## wlopera-shop

Aplicación tienda en línea (Ecommerce) creada en NextJs (ReactJS), Tailwind, Go, React Icons y Zustang (gestor de estados)

### Crear el proyecto
```
loper@wlopera MINGW64 /c/A_CURSOS/2024/React/next-project
$ npx create-next-app@latest wlopera-shop
npm WARN exec The following package was not found and will be installed: create-next-app@15.1.0
? Would you like to use TypeScript? » No / Yes
√ Would you like to use TypeScript? ... No / Yes
? Would you like to use ESLint? » No / Yes
√ Would you like to use ESLint? ... No / Yes
? Would you like to use Tailwind CSS? » No / Yes
√ Would you like to use Tailwind CSS? ... No / Yes
? Would you like your code inside a `src/` directory? » No / Yes
√ Would you like your code inside a `src/` directory? ... No / Yes
? Would you like to use App Router? (recommended) » No / Yes
√ Would you like to use App Router? (recommended) ... No / Yes
? Would you like to use Turbopack for `next dev`? » No / Yen                   N
? Would you like to use Turbopack for `next dev`? » No / Yes
√ Would you like to use Turbopack for `next dev`? ... No / Yes
? Would you like to customize the import alias (`@/*` by default)? » No / Yes
√ Would you like to customize the import alias (`@/*` by default)? ... No / Yes
Creating a new Next.js app in C:\A_CURSOS\2024\React\next-project\wlopera-shop.

Using npm.

Initializing project with template: app-tw

Installing dependencies:
- react
- react-dom
- next

Installing devDependencies:
- typescript
- @types/node
- @types/react
- @types/react-dom
- postcss
- tailwindcss
- eslint
- eslint-config-next
- @eslint/eslintrc
```

### Utilizar fuentes del curso
https://www.youtube.com/watch?v=oHRScyU-ffg&list=PLCKuOXG0bPi3y7tz8Hq6itoi1vhPf6eVG&index=1

### Configurar proyecto 

Copiar Imágenes requeridas. Reemplazar valores por defecto (copiar todos los datos de carpeta public)

![image](https://github.com/user-attachments/assets/7f985355-de36-469e-8f9b-1c5867efd7d1)

![image](https://github.com/user-attachments/assets/8d5e0b06-94e4-4d36-a14e-4ebc21d2ff30)

Copiar datos requeridos (seed)

![image](https://github.com/user-attachments/assets/eaed0887-a527-429a-af69-cc2d3ed3be5a)

Sustituir los estilos globales

![image](https://github.com/user-attachments/assets/9a6a0838-3639-409e-b693-3056393b7df2)


### Levantar y probar APP
_> npm run dev

![image](https://github.com/user-attachments/assets/889e182c-a9ef-4eee-81a6-6c1349faef95)


### Carpetas del APP

![image](https://github.com/user-attachments/assets/68ac0bc4-17a8-469f-8315-352cc27f6c0b)

### Configuración y layout iniciales del APP

![image](https://github.com/user-attachments/assets/4fbe561d-2da9-4cd8-ae02-994ba5295e8f)

![image](https://github.com/user-attachments/assets/ad632a91-1ae4-432c-ae05-4c6f743ed12d)

![image](https://github.com/user-attachments/assets/87256a91-5aa9-4839-9b36-4335c527b404)


### Manejo de paginas de la tienda

![image](https://github.com/user-attachments/assets/cdcaf675-08b1-43bc-8fa7-026ffa971b13)

Zustang - manejador de estados

https://zustand-demo.pmnd.rs/

![image](https://github.com/user-attachments/assets/df5c22fb-60b1-4d2f-a522-424b692d8fc4)

https://zustand.docs.pmnd.rs/getting-started/introduction

npm install zustand

### CLSX - Apoyo uso de Tailwind
```
Una pequeña utilidad (239B) para construir cadenas de nombres de clase de manera condicional. También sirve como un reemplazo más rápido y más pequeño para el módulo de nombres de clase.

https://www.npmjs.com/package/clsx


$ npm i clsx

added 1 package, and audited 374 packages in 1s

140 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

### Salida

![image](https://github.com/user-attachments/assets/cf8b67e6-59f7-47a4-9559-0d7e5f8d4213)

![image](https://github.com/user-attachments/assets/3e1eef4e-f8e0-4d83-800c-6fd0a611d053)

![image](https://github.com/user-attachments/assets/1a056b04-43d0-47b4-8a96-d3abb6674c54)

* En caso de error
  
![image](https://github.com/user-attachments/assets/b9792dec-e32e-4fc1-8261-722647d09098)

* ver documento: https://github.com/wlopera/wlopera-shop/tree/master/doc/Wlopera-Shop.docx


### Detalles del producto

Crear lógica para mostrar detalles del producto

![image](https://github.com/user-attachments/assets/9a3a2d0a-0062-4f90-a537-7b97ddeb111f)


### Crear SlideShow

Uso de librería SwiperJS 

https://swiperjs.com/ 

![image](https://github.com/user-attachments/assets/117a0112-e3de-4031-8f83-f0d28f9d51a6)

![image](https://github.com/user-attachments/assets/2eb0446b-a38d-4115-87d1-7f5eceef72a3)


### Salida

![image](https://github.com/user-attachments/assets/068c3326-3883-4a27-a8c9-3ae81c157752)

* Formato Destop

![image](https://github.com/user-attachments/assets/79c99d93-3f30-4c47-aeaf-8dcdafa2a2a2)

![image](https://github.com/user-attachments/assets/9ec0cb05-7029-4c32-93e0-2e8f58495ac1)


* Formato Mobile

![image](https://github.com/user-attachments/assets/21353734-ba91-44e5-82fe-786f508467f4)
![image](https://github.com/user-attachments/assets/a250c251-5065-4797-800d-50f0cfb91ea0)


