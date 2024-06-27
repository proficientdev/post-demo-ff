# Proyecto Demo

Este es un proyecto de demostración que muestra cómo ejecutar y probar una aplicación de post y
comentarios muy básica. Es una demuestración de reutilización de componentes, navegacion y consumo de API's

## Instrucciones de ejecución

1. Clona este repositorio en tu máquina local.
2. Abre una terminal y navega hasta el directorio del proyecto.
3. Ejecuta el siguiente comando para instalar las dependencias:

   ```
   npm install
   ```

4. Una vez que las dependencias estén instaladas, ejecuta el siguiente comando para iniciar la aplicación:

   ```
   npx expo start
   ```

## Instrucciones para abrir la aplicación en un emulador

5.  Si deseas abrir la aplicación en un emulador, asegúrate de tener un emulador de Android o iOS configurado en tu máquina.

6.  Ejecuta el siguiente comando para abrir la aplicación en el emulador de Android:

        ```
        npx expo android
        ```

    O ejecuta el siguiente comando para abrir la aplicación en el emulador de iOS:

        ```
        npx expo ios
        ```

## Instrucciones para abrir la aplicación en un dispositivo físico

7.  Si deseas abrir la aplicación en un dispositivo físico, puedes escanear el código QR que se genera al ejecutar npx expo start. Esto te solicitará instalar la app Expo GO para ejecutar la aplicación en tu telefono (el pc y el telefono tienen que estar en la misma red)

8.  Tambien asegúrate de tener el dispositivo conectado a tu máquina y habilitado para la depuración USB. Ejecuta el siguiente comando para abrir la aplicación en el dispositivo físico:

        ```
        npx expo start --android
        ```

    O ejecuta el siguiente comando para abrir la aplicación en un dispositivo iOS:

        ```
        npx expo start --ios
        ```
