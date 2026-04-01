# Guía de Despliegue - Página Web Corredor de Propiedades

## URL de Producción
`https://diseñopaginas.cl/diseno-web-corredor-propiedades`

## Configuración de GitHub Actions

Para que el despliegue automático funcione, necesitas configurar los siguientes **secrets** en tu repositorio de GitHub:

### Paso 1: Ir a Settings del repositorio
1. Ve a tu repositorio en GitHub
2. Click en **Settings** (Configuración)
3. En el menú lateral, click en **Secrets and variables** → **Actions**
4. Click en **New repository secret**

### Paso 2: Agregar los siguientes secrets

**FTP_SERVER**
- Valor: `diseñopaginas.cl` (o la IP del servidor)

**FTP_USERNAME**
- Valor: Tu usuario FTP del hosting

**FTP_PASSWORD**
- Valor: Tu contraseña FTP del hosting

### Paso 3: Verificar la ruta del servidor

En el archivo `.github/workflows/deploy.yml`, la carpeta de destino está configurada como:
```yaml
server-dir: /public_html/diseno-web-corredor-propiedades/
```

Asegúrate de que esta ruta coincida con la estructura de tu servidor.

## Despliegue Manual (sin GitHub Actions)

Si prefieres desplegar manualmente:

### 1. Build del proyecto
```bash
npm install
npm run build
```

### 2. Subir archivos
Los archivos compilados estarán en la carpeta `dist/`

Sube todo el contenido de `dist/` a:
```
/public_html/diseno-web-corredor-propiedades/
```

## Verificación Post-Despliegue

Después del despliegue, verifica:

1. ✅ La página carga correctamente en `https://diseñopaginas.cl/diseno-web-corredor-propiedades`
2. ✅ Todas las imágenes se ven correctamente
3. ✅ Los enlaces del footer funcionan
4. ✅ El formulario de WhatsApp funciona
5. ✅ La página es responsive en móvil
6. ✅ El PageSpeed es superior a 90

## Notas Importantes

- El proyecto usa **Astro 6.1.2** con **Tailwind CSS v3**
- Node.js requerido: **>= 22.12.0**
- El sitio es estático (SSG), no requiere servidor Node.js en producción
- Todas las rutas son relativas, funcionará en cualquier subdirectorio

## Soporte

Para problemas de despliegue, contacta a:
- Email: codigoraul@gmail.com
- WhatsApp: +56 9 6176 5268
