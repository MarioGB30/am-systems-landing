# Configuración de EmailJS - Guía Paso a Paso

## ¿Qué es EmailJS?
EmailJS permite enviar emails directamente desde tu sitio web sin necesidad de un backend. Es gratis para usar y muy fácil de configurar.

## Pasos para Configurar EmailJS

### 1. Crear una Cuenta en EmailJS
1. Visita [emailjs.com](https://www.emailjs.com)
2. Haz clic en **"Sign Up Free"**
3. Completa el formulario con tu email y contraseña
4. Verifica tu email haciendo clic en el link que te enviarán
5. Inicia sesión en tu cuenta

### 2. Obtener tu Service ID
1. En el dashboard de EmailJS, ve a **"Email Services"** (en la barra lateral izquierda)
2. Haz clic en **"Create New Service"**
3. Selecciona tu proveedor de email (Gmail, Outlook, etc.)
   - **Para Gmail:**
     - Selecciona "Gmail"
     - Haz clic en "Connect Account"
     - Autoriza el acceso
   - **Para otros proveedores:**
     - Sigue las instrucciones específicas de tu proveedor
4. Dale un nombre al servicio (ej: "My Website")
5. Haz clic en **"Create Service"**
6. **Copia tu Service ID** (se verá algo como `service_abcd1234efgh5678`)

### 3. Crear una Email Template
1. En el dashboard, ve a **"Email Templates"**
2. Haz clic en **"Create New Template"**
3. Copia y pega el siguiente contenido en tu template:

```
Subject: Nuevo Mensaje de Contacto - {{from_name}}

Remitente: {{from_name}}
Email: {{from_email}}
Teléfono: {{from_phone}}
Servicio: {{service_type}}

Mensaje:
{{message}}
```

4. Haz clic en **"Save"**
5. **Copia tu Template ID** (se verá algo como `template_abcd1234efgh5678`)

### 4. Obtener tu Public Key
1. En el dashboard, ve a **"Account"** (en la parte superior derecha, haz clic en tu nombre)
2. Selecciona **"API Keys"**
3. **Copia tu Public Key** (se verá algo como `abcd1234efgh5678ijklmnop`)

## 5. Actualizar tu Código

Abre el archivo `public/js/main.js` y reemplaza las siguientes líneas al inicio del archivo:

```javascript
const EMAILJS_SERVICE_ID = "service_xxxxx";      // Reemplaza con tu Service ID
const EMAILJS_TEMPLATE_ID = "template_xxxxx";    // Reemplaza con tu Template ID
const EMAILJS_PUBLIC_KEY = "your_public_key";    // Reemplaza con tu Public Key
```

**Ejemplo real:**
```javascript
const EMAILJS_SERVICE_ID = "service_a1b2c3d4e5f6g7h8";
const EMAILJS_TEMPLATE_ID = "template_i9j8k7l6m5n4o3p2";
const EMAILJS_PUBLIC_KEY = "q1w2e3r4t5y6u7i8o9p0";
```

## 6. Probar tu Formulario

1. Abre tu sitio web en el navegador: `http://localhost:3000`
2. Desplázate hasta la sección de contacto
3. Completa el formulario con tus datos
4. Haz clic en "Enviar Mensaje"
5. Verifica que el email llegue a tu bandeja de entrada

## Notas Importantes

- ⚠️ **NO compartas tu Public Key en público** aunque es más seguro que un Secret Key
- ✅ Los datos del formulario van directamente desde el navegador a EmailJS
- ✅ Los emails se enviarán al email configurado en tu servicio de EmailJS
- ✅ Si usas Gmail, es posible que debas habilitar "Acceso de apps menos seguras" en tu cuenta

## Solución de Problemas

### El email no se envía
- Verifica que copiaste correctamente los 3 IDs
- Comprueba que tu servicio de email está conectado en EmailJS
- Abre la consola del navegador (F12) para ver mensajes de error

### El formulario se queda en "Enviando..."
- Es probable que haya un error en uno de los IDs
- Verifica los nombres de las variables en el template coincidan con los del formulario:
  - `from_name`
  - `from_email`
  - `from_phone`
  - `service_type`
  - `message`

### Recibir emails de prueba
- EmailJS ofrece 200 emails gratis al mes
- Después puedes elegir un plan de pago o usar un servicio libre

## Soporte Adicional
- Documentación oficial: [EmailJS Docs](https://www.emailjs.com/docs/)
- Video tutorial: Busca "EmailJS tutorial" en YouTube

---

**¡Listo! Tu formulario de contacto ahora enviará emails reales.** 🚀
