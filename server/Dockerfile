# Utilizar la imagen base de Node.js 14
FROM node:14

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar el código del servidor al directorio de trabajo
COPY ./server ./server

# Instalar las dependencias del servidor
RUN cd server && npm install

# Definir una variable de entorno para la clave de conexión a MongoDB
ENV DB_URL_ATLAS=

# Iniciar el servidor
CMD ["sh", "-c", "cd server && npm start"]
