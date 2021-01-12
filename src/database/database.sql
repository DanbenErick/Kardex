CREATE DATABASE almacen;

CREATE TABLE productos(
  id serial not null PRIMARY KEY,
  nombre varchar(200) not null,
  cantidad int not null
);

CREATE TABLE kardex(
  id serial not null PRIMARY KEY,
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
);

INSERT INTO kardex (fecha, detalle, valor_unitario, entrada_cantidad, entrada_total, salida_cantidad, salida_total, saldo_cantidad, saldo_total, id_producto ) VALUES ('10-10-10', 'Compras', 12,12,12,0,0,22,22,1);