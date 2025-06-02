# 🚀 Sistema de Gestión de Usuarios - CRUD

Una aplicación CRUD (Create, Read, Update, Delete) completa y moderna para la gestión de usuarios, construida con las últimas tecnologías web.

![React](https://img.shields.io/badge/React-19.1.0-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue?logo=typescript)
![Vite](https://img.shields.io/badge/Vite-4.5.3-green?logo=vite)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.6-purple?logo=bootstrap)

## 📋 Tabla de Contenidos

- [Características](#-características)
- [Tecnologías](#-tecnologías)
- [Requisitos Previos](#-requisitos-previos)
- [Instalación](#-instalación)
- [Comandos Disponibles](#-comandos-disponibles)
- [Uso de la Aplicación](#-uso-de-la-aplicación)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Configuración Avanzada](#-configuración-avanzada)
- [Contribución](#-contribución)
- [Licencia](#-licencia)

## ✨ Características

### 🎯 Funcionalidades Principales
- ✅ **Crear usuarios** - Formulario completo con validación
- ✅ **Leer usuarios** - Lista responsive con datos organizados
- ✅ **Actualizar usuarios** - Edición en modal popup
- ✅ **Eliminar usuarios** - Confirmación de eliminación segura

### 🎨 Experiencia de Usuario
- ✅ **Interfaz moderna** con Bootstrap 5
- ✅ **Modal popup** para formularios
- ✅ **Validación en tiempo real** con mensajes de error
- ✅ **Notificaciones** de éxito y error con auto-ocultado
- ✅ **Diseño responsive** para móviles y escritorio
- ✅ **Persistencia de datos** con LocalStorage
- ✅ **Interfaz completamente en español**

### 📊 Características Técnicas
- ✅ **TypeScript** para tipado seguro
- ✅ **Arquitectura modular** con componentes reutilizables
- ✅ **Gestión de estado** con React Hooks
- ✅ **Carga de datos** con estados de loading
- ✅ **Dashboard de estadísticas** con métricas en tiempo real

## 🛠 Tecnologías

### Frontend Core
- **React 19.1.0** - Biblioteca de UI con los últimos hooks
- **TypeScript 5.8.3** - JavaScript tipado para mayor confiabilidad
- **Vite 4.5.3** - Build tool ultrarrápido con HMR

### Styling & UI
- **Bootstrap 5.3.6** - Framework CSS responsive
- **CSS3** - Estilos personalizados y animaciones

### Herramientas de Desarrollo
- **ESLint** - Linter para código JavaScript/TypeScript
- **TypeScript ESLint** - Reglas específicas para TypeScript
- **Vite Plugin React** - Plugin oficial para React en Vite

## 📋 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

### Software Requerido
- **Node.js** (versión 16.0.0 o superior)
  ```bash
  node --version  # Verificar versión instalada
  ```
- **npm** (viene incluido con Node.js)
  ```bash
  npm --version   # Verificar versión de npm
  ```

### Opcional pero Recomendado
- **Git** para control de versiones
- **VS Code** como editor de código
- **Extensiones recomendadas para VS Code:**
  - ES7+ React/Redux/React-Native snippets
  - TypeScript Importer
  - Prettier - Code formatter
  - Auto Rename Tag

## 🚀 Instalación

### 1. Clonar o Descargar el Proyecto
```bash
# Si tienes Git instalado
git clone <url-del-repositorio>
cd abmProyect

# O simplemente navega a la carpeta del proyecto
cd /home/victor/Documents/develop/abmProyect
```

### 2. Instalar Dependencias
```bash
npm install
```

Este comando instalará todas las dependencias necesarias listadas en `package.json`.

### 3. Verificar la Instalación
```bash
npm run dev
```

La aplicación debería abrirse automáticamente en `http://localhost:5173`

## 🎮 Comandos Disponibles

### Desarrollo
```bash
# Iniciar servidor de desarrollo con hot-reload
npm run dev
```
- 🌐 **URL:** http://localhost:5173
- 🔥 **Hot Reload:** Los cambios se reflejan instantáneamente
- 📱 **Responsive:** Funciona en móviles y escritorio

### Construcción
```bash
# Construir para producción
npm run build
```
- 📦 **Output:** Carpeta `dist/`
- ⚡ **Optimizado:** Código minificado y optimizado
- 🗜️ **Comprimido:** Assets optimizados para producción

### Vista Previa de Producción
```bash
# Vista previa del build de producción
npm run preview
```
- 🚀 **Simula producción** localmente
- 📊 **Prueba rendimiento** antes del deploy

### Calidad de Código
```bash
# Ejecutar linter para verificar código
npm run lint
```
- 🔍 **Detecta errores** de sintaxis y estilo
- 📝 **Sugiere mejoras** de código
- ✅ **Mantiene consistencia** en el proyecto

## 📖 Uso de la Aplicación

### 🏠 Página Principal
1. **Navegación Superior:** Muestra el título "CRUD"
2. **Encabezado:** "Sistema de Gestión de Usuarios" con descripción
3. **Botón Principal:** "Agregar Nuevo Usuario" (abre modal)
4. **Lista de Usuarios:** Tabla responsive con todos los usuarios
5. **Estadísticas:** Tarjetas con total de usuarios y departamentos

### ➕ Crear Usuario
1. Clic en **"Agregar Nuevo Usuario"**
2. Se abre un **modal popup** con formulario
3. Llenar campos obligatorios:
   - **Nombre:** Nombre completo del usuario
   - **Email:** Dirección de correo válida
   - **Teléfono:** Número de contacto
   - **Departamento:** Seleccionar de lista predefinida
4. Clic en **"Crear Usuario"** o **"Cancelar"**

### ✏️ Editar Usuario
1. Clic en botón **"Editar"** en la tabla
2. Modal se abre con datos pre-cargados
3. Modificar campos necesarios
4. Clic en **"Actualizar Usuario"**

### 🗑️ Eliminar Usuario
1. Clic en botón **"Eliminar"** en la tabla
2. Confirmación: "¿Estás seguro de que quieres eliminar a [nombre]?"
3. Confirmar o cancelar la acción

### 📱 Diseño Responsive
- **Desktop:** Vista completa con tabla expandida
- **Tablet:** Tabla ajustada con scroll horizontal
- **Móvil:** Modal optimizado para pantallas pequeñas

## 📁 Estructura del Proyecto

```
abmProyect/
├── 📄 README.md                    # Este archivo
├── 📄 package.json                 # Dependencias y scripts
├── 📄 vite.config.ts              # Configuración de Vite
├── 📄 tsconfig.json               # Configuración TypeScript
├── 📄 index.html                  # Página HTML principal
├── 📁 public/                     # Assets estáticos
│   └── vite.svg                   # Logo de Vite
├── 📁 src/                        # Código fuente
│   ├── 📄 main.tsx                # Punto de entrada
│   ├── 📄 App.tsx                 # Componente principal
│   ├── 📄 App.css                 # Estilos globales
│   ├── 📁 components/             # Componentes reutilizables
│   │   ├── Alert.tsx              # Componente de notificaciones
│   │   ├── UserForm.tsx           # Formulario modal de usuarios
│   │   └── UserList.tsx           # Lista/tabla de usuarios
│   ├── 📁 services/               # Lógica de negocio
│   │   └── UserService.ts         # CRUD operations con LocalStorage
│   ├── 📁 types/                  # Definiciones TypeScript
│   │   └── User.ts                # Interfaces de Usuario
│   └── 📁 assets/                 # Assets del proyecto
│       └── react.svg              # Logo de React
└── 📁 node_modules/               # Dependencias instaladas
```

### 🧩 Descripción de Componentes

#### **App.tsx** - Componente Principal
- Gestión de estado global de la aplicación
- Coordina comunicación entre componentes
- Maneja navegación y alertas

#### **UserForm.tsx** - Modal de Formulario
- Formulario modal para crear/editar usuarios
- Validación en tiempo real con mensajes de error
- Cierre con backdrop click o botón X

#### **UserList.tsx** - Tabla de Usuarios
- Tabla responsive con todos los usuarios
- Botones de acción (Editar/Eliminar)
- Mensaje cuando no hay datos

#### **UserService.ts** - Servicio de Datos
- Operaciones CRUD con LocalStorage
- Generación de IDs únicos
- Datos de muestra iniciales

## ⚙️ Configuración Avanzada

### 🔧 ESLint - Mejorar Configuración

Para una aplicación de producción, se recomienda actualizar la configuración para habilitar reglas de lint más estrictas:

```js
// eslint.config.js
import tseslint from 'typescript-eslint'

export default tseslint.config({
  extends: [
    // Configuración recomendada con verificación de tipos
    ...tseslint.configs.recommendedTypeChecked,
    // Alternativamente, usa reglas más estrictas
    ...tseslint.configs.strictTypeChecked,
    // Opcionalmente, agrega reglas estilísticas
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

### 📦 Plugins Adicionales de React

Instalar plugins específicos para React:

```bash
npm install --save-dev eslint-plugin-react-x eslint-plugin-react-dom
```

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // Habilitar reglas recomendadas para TypeScript
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```

### 🌐 Variables de Entorno

Para configurar diferentes entornos, crea archivos `.env`:

```bash
# .env.local
VITE_APP_NAME="Sistema de Gestión de Usuarios"
VITE_API_URL="http://localhost:3000"
```

### 🚀 Deploy a Producción

```bash
# Construir para producción
npm run build

# Los archivos estarán en la carpeta dist/
# Puedes subirlos a cualquier servidor web estático
```

## 🤝 Contribución

¡Las contribuciones son bienvenidas! Si quieres mejorar este proyecto:

1. **Fork** el repositorio
2. **Crea** una rama para tu feature: `git checkout -b feature/nueva-funcionalidad`
3. **Commit** tus cambios: `git commit -m 'Agregar nueva funcionalidad'`
4. **Push** a la rama: `git push origin feature/nueva-funcionalidad`
5. **Abre** un Pull Request

### 📝 Guías de Contribución
- Mantén el código consistente con el estilo existente
- Agrega comentarios para lógica compleja
- Actualiza la documentación si es necesario
- Prueba tu código antes de hacer commit

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## 📞 Soporte

Si tienes preguntas o problemas:

1. **Revisa** la documentación completa
2. **Verifica** que cumples todos los requisitos previos
3. **Ejecuta** `npm install` si hay problemas de dependencias
4. **Limpia** el cache: `npm run dev -- --force`

---

**¡Disfruta desarrollando con este sistema CRUD moderno y completo! 🚀**
