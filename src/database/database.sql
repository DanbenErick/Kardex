CREATE DATABASE almacen;

CREATE TABLE productos(
  id serial not null,
  nombre varchar(200) not null
);

CREATE TABLE kardex(
  id serial not null,
  fecha date not null,
  detalle varchar(200) not null,
  valor_unitario int not null,
  entrada_cantidad int not null,
  entrada_total int not null,
  salida_cantidad int not null,
  salida_total int not null,
  saldo_cantidad int not null,
  saldo_total int not null,
  id_producto int not null,
  CONSTRAINT FK_kardex_producto FOREIGN KEY (id_producto) REFERENCES productos(id)
)