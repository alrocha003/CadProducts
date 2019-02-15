# CadProducts API

A api CadProducts utiliza a tecnologia node.js para criar um crud básico de Produtos.

A APi possui 5 endpoints que exepoem dados e efetuam operações nos dados que estão gravados no banco NoSql MongoDB

#### As rotas da API são:
* '/', - controller.get = Obtem todos os registros de produtos cadastrados
* '/:id' - controller.getById = Obtem um registro de produto por Id
* '/:product' - controller.create = Cria um novo registro de produto
* '/:id' - controller.delete = Exclui do banco um registro de produto
* '/product' - controller.put = Atualiza um registro de produto no banco 

