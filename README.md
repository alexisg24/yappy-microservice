### Documentacion Yappy Microservicio

Microservicio para integracion de boton de pago de yappy con NodeJs

## Configuracion

- **Clona este repositoio [repository](https://github.com/alexisg24/yappy-microservice)**

```bash
  git clone https://github.com/alexisg24/yappy-microservice
```

- **Instalar las dependencias necesarias (Solo funciona con NPM)**

```bash
npm install
```

- **Rellenar los datos del .env.example**
  Crea un archivo `.env` y coloca las credenciales que se muestran en el ejemplo
- Es importante sabes que el dominio debe apuntar a la misma url donde esta desplegado este servicio, de manera contraria no funcionara
- Para mayor seguridad, se sugiere integrar conexiones con apis para establecer los montos, taxes, descuentos, etc. A traves del orderId Asi no son manipulables.
- Las url de success y fail del payment deben ser paginas estaticas de preferencia.
- El landing url hara que si alguien intenta acceder a la ruta principal `/` de este servicio lo redireccionara a la pagina principal.
- Se debe configurar llamados a api en el servicio de `/services/handleStatusYappy.ts` preferiblemente con axios para manejar los casos de la transaccion.
- El Yappy client y secret se realiza configurando el dominio de este servicio desde el panel de yappy. Guia completa en: https://www.youtube.com/watch?v=aj6Pc3KmnH4&t=2s

- **Realizar build\***
  Para realizar una build simplemente se debe de ejecutar el comando: `npm start`

## Autor 🙋‍♂️

- [@alexisg24](https://www.github.com/alexisg24)

## Licencia ⚖

[MIT](https://choosealicense.com/licenses/mit/)
