
####  PROYECTO RESTAURANTE HOXTON 


#### Referencias a la api

#### para levantar el proyecto tanto en el back como en el front se usa el comando:
**npm run dev**



#### TRAER TODOS LOS USUARIOS
#### URL: https://hoxton-backend.herokuapp.com/
```
  GET: ${URL}/api/usuarios
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `token` | `jwt` | **Requerido**. necesitas un token |
| `role` | `ADMIN_ROLE` |**Requerido** tener el rol de admin
 |

#### CREAR USUARIOS

```
 POST: ${URL}/api/usuarios
```


 
#### Parametros a pasar
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `nombre` | `string` | **Requerido**. el nombre es obligatorio |
| `email` | `string` |**Requerido** **unico**  el email debe ser unico y es obligatorio
| `password` | `string` | **Requerido**. la contraseña es obligatorio |
| `role` | `string` | el rol default es: **USER_ROLE** (usuario) aunque tambien se encuentra el **ADMIN_ROLE** (administrador)
| `estado` | `Boolean` | **el valor default** : es **true** (significa que esto esta activado) pero tambien puedes poner **false** que es inactivado

#### ACTUALIZAR USUARIO

```
  PUT: ${URL}/api/usuarios/${id}
```
#### Parametro **obligatorio**:
| Parameter | Description                
| :-------- | :------- | 
| `_id` |  `se debe tomar el id del usuario que se quiere actualizar`  | 

#### Parametros a pasar
| Parameter | Type     |          
| :-------- | :------- | 
| `nombre` | `string` | 
| `email` | `string` |
| `password` | `string` |
| `role` | `string` | 
| `estado` | `Boolean` | 


#### INACTIVAR USUARIO

```
  DELETE: ${URL}/api/usuarios/${id}
```
#### Parametro **obligatorio**:
| Parameter | Description                
| :-------- | :------- | 
| `_id` |  `se debe tomar el id del usuario que se quiere inactivar`  | 

### AUTENTIFICACION DE USUARIOS

#### URL: https://hoxton-backend.herokuapp.com/
```
  ruta: ${URL}/api/auth/login
  ```

#### Parametros a pasar

| Parameter | Type     |          
| :-------- | :------- |  
| `email` | `es necesario el email para la autentificacion` |
| `password` | `es necesaria una contraseña para la auntentificacion` |

#### TRAER TODOS LOS MENUS  
#### URL: https://hoxton-backend.herokuapp.com/
```
  GET: ${URL}/api/menus
```


 **para traer los menus no es necesario el token (estar logueado)**


#### TRAER UN MENU  
#### URL: https://hoxton-backend.herokuapp.com/
```
  GET: ${URL}/api/menus/${id}
```


 **para traer los menus  **es necesario** pasar el id  del menu**



#### CREAR MENU

```
 POST: ${URL}/api/menus
```
**NECESARIO:**
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `token` | `jwt` | **Requerido**. necesitas un token |
| `role` | `ADMIN_ROLE` |**Requerido** tener el rol de admin
 


 
#### Parametros a pasar
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `nombre` | `string` | **Requerido**. el nombre es obligatorio |
| `precio` | `number` |**opcional**   
| `categoria` | `id` | **Requerido**.   se debe pasar el id de la categoria que se desee (es obligatorio) |
| `detalle` | `string` | **opcional** es opcional pasar el detalle (una descripcion del producto)
| `img` | `string` |  **opcional** (imagen del menu)

#### ACTUALIZAR MENU

```
  PUT: ${URL}/api/menus/${id}
```
#### Parametro **obligatorio**:
| Parameter | Description                
| :-------- | :------- | 
| `_id` |  `se debe tomar el id del menu que se quiere actualizar`  | 
| `token` | `jwt` | **Requerido**. necesitas un token |
| `role` | `ADMIN_ROLE` |**Requerido** tener el rol de admin
 


#### Parametros a pasar
| Parameter | Type     |          
| :-------- | :------- | 
| `nombre` | `string` | 
| `precio` | `number` |
| `categoria` | `id` |
|`detalle` | `string` | 
| `img` | `string` | 


#### INACTIVAR USUARIO

```
  DELETE: ${URL}/api/menus/${id}
```
#### Parametro **obligatorio**:
| Parameter | Description                
| :-------- | :------- | 
| `_id` |  `se debe tomar el id del menu que se quiere inactivar`  | 

#### TRAER TODOS LOS PEDIDOS
#### URL: https://hoxton-backend.herokuapp.com/
```
  GET: ${URL}/api/pedidos
```
**requerido:**
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `token` | `jwt` | **Requerido**. necesitas un token para ver los pedidos|

 #### CREAR PEDIDO

```
 POST: ${URL}/api/pedidos
```
**NECESARIO:**
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `token` | `jwt` | **Requerido**. necesitas un token para crear un pedido |
 
 

#### Parametros a pasar
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `menu` | `_id` | **Requerido**.   se debe pasar el id del menu del que se desee hacer un pedido (es obligatorio) |
 
 #### ACTUALIZAR PEDIDO

```
  PUT: ${URL}/api/pedidos/${id}
```
#### Parametro **obligatorio**:
| Parameter | Description                
| :-------- | :------- | 
| `_id` |  `se debe tomar el id del pedido que se quiere actualizar`  | 
| `token` | `jwt` | **Requerido**. necesitas un token |
| `role` | `ADMIN_ROLE` |**Requerido** tener el rol de admin
 

#### Parametros a pasar
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `entrega` | `boolean` | pasar la entrega que en **default es: false** ,es para actualizar si el pedido esta **pendiente( false ) o entregado (true)**  |

#### INACTIVAR PEDIDO

```
  DELETE: ${URL}/api/pedidos/${id}
```
#### Parametro **obligatorio**:
| Parameter | Description                
| :-------- | :------- | 
| `_id` |  `se debe tomar el id del pedido que se quiere inactivar`  | 


#### autores: **luciano rivera**, **nicolas morales** , **carlos molina**