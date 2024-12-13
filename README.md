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


