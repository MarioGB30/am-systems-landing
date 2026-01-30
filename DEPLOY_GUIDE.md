# 🚀 Guía de Despliegue en Digital Ocean App Platform

## Paso 1: Crear Repositorio en GitHub

### 1.1 Ve a GitHub
1. Abre tu navegador y ve a [github.com](https://github.com)
2. Inicia sesión con tu cuenta (si no tienes, crea una gratis)

### 1.2 Crear Nuevo Repositorio
1. Haz clic en el botón **"+"** en la esquina superior derecha
2. Selecciona **"New repository"**
3. Completa los datos:
   - **Repository name**: `am-systems-landing`
   - **Description**: `Landing page profesional para AM Systems`
   - **Visibility**: Elige **Public** o **Private**
   - ❌ **NO marques** "Initialize this repository with a README" (ya tenemos uno)
4. Haz clic en **"Create repository"**

### 1.3 Copiar URL del Repositorio
Después de crear el repositorio, GitHub te mostrará una página con instrucciones. 
Copia la URL que aparece (algo como: `https://github.com/tu-usuario/am-systems-landing.git`)

---

## Paso 2: Conectar tu Proyecto con GitHub

Abre PowerShell en tu proyecto y ejecuta estos comandos (reemplaza la URL con la tuya):

```powershell
# Agregar el repositorio remoto
git remote add origin https://github.com/TU-USUARIO/am-systems-landing.git

# Cambiar nombre de rama a main (opcional pero recomendado)
git branch -M main

# Subir tu código a GitHub
git push -u origin main
```

**Nota**: GitHub te pedirá tus credenciales la primera vez.

---

## Paso 3: Configurar Digital Ocean App Platform

### 3.1 Crear Cuenta en Digital Ocean
1. Ve a [digitalocean.com](https://www.digitalocean.com)
2. Crea una cuenta (tienen $200 de crédito gratis por 60 días para nuevos usuarios)

### 3.2 Crear Nueva App
1. En el Dashboard de Digital Ocean, haz clic en **"Create"** → **"Apps"**
2. Selecciona **"GitHub"** como fuente
3. Haz clic en **"Manage Access"** y autoriza Digital Ocean a acceder a tu GitHub
4. Selecciona tu repositorio **"am-systems-landing"**
5. Selecciona la rama **"main"**
6. Haz clic en **"Next"**

### 3.3 Configurar la App

#### Recursos Detectados:
Digital Ocean debería detectar automáticamente que es una app Node.js.

**Si no lo detecta, configura manualmente:**
- **Type**: Web Service
- **Build Command**: `npm install`
- **Run Command**: `npm start`
- **Environment Variables**: (por ahora ninguna)

#### Plan:
- Selecciona **"Basic"** → **$5/mes**
- Región: Elige la más cercana a México (New York o San Francisco)

### 3.4 Configurar Variables de Entorno (Opcional)
Si tienes credenciales sensibles, agrégalas aquí:
- Haz clic en **"Edit Plan"** → **"Environment Variables"**
- Por ahora no es necesario

### 3.5 Finalizar
1. Revisa la configuración
2. Haz clic en **"Create Resources"**
3. ¡Espera 3-5 minutos mientras se despliega!

---

## Paso 4: ¡Tu Sitio Está en Vivo! 🎉

Una vez completado el despliegue:
- Digital Ocean te dará una URL como: `https://am-systems-landing-xxxxx.ondigitalocean.app`
- Puedes configurar tu propio dominio después

---

## 🔄 Flujo de Trabajo para Futuras Actualizaciones

Cuando hagas cambios en tu código:

```powershell
# 1. Guardar cambios en Git
git add .
git commit -m "Descripción de los cambios"

# 2. Subir a GitHub
git push origin main

# 3. Digital Ocean detectará el cambio y desplegará automáticamente
# (espera 2-3 minutos)
```

**¡Eso es todo!** No necesitas hacer nada más. Digital Ocean re-despliega automáticamente cada vez que haces `git push`.

---

## 📝 Comandos Git Útiles

```powershell
# Ver estado de los archivos
git status

# Ver historial de commits
git log --oneline

# Descartar cambios locales
git restore .

# Ver diferencias antes de commit
git diff
```

---

## 🌐 Configurar Dominio Personalizado (Opcional)

Si tienes un dominio propio (ej: `www.amsystems.com`):

1. En Digital Ocean App Platform, ve a **Settings** → **Domains**
2. Haz clic en **"Add Domain"**
3. Ingresa tu dominio
4. Sigue las instrucciones para configurar los DNS records en tu proveedor de dominios

---

## 🔧 Solución de Problemas

### Error: "Build failed"
- Verifica que `package.json` tenga los scripts correctos
- Revisa los logs de build en Digital Ocean

### Error: "App is not loading"
- Verifica que el puerto sea dinámico: `process.env.PORT || 3000`
- Revisa los logs de runtime en Digital Ocean

### Error: "Permission denied" al hacer git push
- Verifica tus credenciales de GitHub
- Considera usar SSH en lugar de HTTPS

---

## 💡 Próximos Pasos Recomendados

1. ✅ Configurar dominio personalizado
2. ✅ Configurar SSL/HTTPS (Digital Ocean lo hace automático)
3. ✅ Agregar Google Analytics
4. ✅ Configurar variables de entorno para credenciales de EmailJS
5. ✅ Agregar monitoreo de uptime

---

**¿Necesitas ayuda?** Contacta al equipo de AM Systems o revisa la [documentación oficial de Digital Ocean](https://docs.digitalocean.com/products/app-platform/).
