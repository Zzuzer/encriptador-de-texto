# Encriptador de Texto

Este proyecto es una aplicación web simple que permite a los usuarios cifrar y descifrar texto. Además, ofrece la funcionalidad de copiar el texto encriptado o desencriptado. La aplicación también incluye validaciones para asegurar que solo se utilicen letras minúsculas y se excluyan caracteres especiales.

## Características

- **Cifrado de texto**: Permite cifrar el texto introducido en el campo de entrada.
- **Descifrado de texto**: Permite descifrar el texto previamente cifrado.
- **Validación de entrada**: No se aceptan mayúsculas ni caracteres especiales, siguiendo las restricciones de la tabla UNICODE.
- **Copiar texto**: Botón adicional para copiar el texto cifrado o descifrado al portapapeles.
- **Interfaz dividida**: La interfaz está dividida en dos partes; la entrada de texto se muestra en la parte izquierda y el resultado se muestra en la parte derecha.
- **Diseño y estilo**: La aplicación tiene un diseño armonioso con colores de fondo, botones estilizados, y un cursor animado. Además, incluye una imagen llamativa en la sección de presentación.

## Estructura del Proyecto

- `encriptador.html`: Archivo HTML que define la estructura de la página, incluyendo el título, los campos de entrada, botones, y el pie de página.
- `app.js`: Archivo JavaScript que contiene la lógica de cifrado, descifrado, validación de entradas, y la funcionalidad de copiar texto.
- `style.css`: Archivo CSS que proporciona el estilo visual de la aplicación, dividiendo la página en dos partes, estilizando los botones y el campo de entrada, y aplicando animaciones.

## Uso

1. **Abrir el archivo `encriptador.html`** en un navegador web.
2. **Introducir el texto** en el campo de entrada de texto (solo se aceptan minúsculas y caracteres estándar).
3. **Presionar el botón "Cifrar"** para encriptar el texto.
4. **Presionar el botón "Descifrar"** para desencriptar el texto previamente cifrado.
5. **Utilizar el botón "Copiar"** para copiar el texto del área de resultado.

## Requisitos

- Un navegador web moderno.
- Conexión a internet para cargar recursos externos si se utilizan (por ejemplo, para fuentes o bibliotecas externas).

## Instalación y Ejecución

1. Clona este repositorio a tu máquina local:

    ```bash
    git clone https://github.com/tu-usuario/encriptador-de-texto.git
    ```

2. Navega al directorio del proyecto:

    ```bash
    cd encriptador-de-texto
    ```

3. Abre `encriptador.html` en tu navegador web preferido.

## Créditos

- **Nombre**: Esteban Sucerquia
- **Año de creación**: 2024

## Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo `LICENSE` para más detalles.
