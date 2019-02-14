'use strict';
const repository = require('../repositories/product-repository');

exports.get = async (req, res, next) => {
    try {
        var data = repository.get();
        res.status(200).send(data);
    }
    catch (e) {
        res.status(500).send({
            msg: 'Ocorreu um erro ao processar a solicitação',
            error: e
        })
    }
}

exports.post = async (req, res, next) => {
    try {
        res.status(200).send({
            msg: 'Incluindo o item' + req.params.name + 'com sucesso'
        })
    }
    catch (e) {
        res.status(500).send({
            msg: 'Ocorreu um erro ao processar a solicitação'
        })
    }
}

exports.getById = async (req, res, next) => {
    try {
        var data = await repository.getById(req.params.id);
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
}


exports.create = async (req, res, next) => {
    try {
        await repository.create({
            title: req.body.title,
            description: req.body.description,
            price: req.body.price
        });
        res.status(201).send({
            message: 'Produto cadastrado com sucesso!'
        });
    } catch (e) {
        console.log(e);
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
};

exports.put = async (req, res, next) => {
    try {
        await repository.update(req.params.id, req.body);
        res.status(200).send({
            message: 'Produto atualizado com sucesso!'
        });
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
};

exports.delete = async (req, res, next) => {
    try {
        await repository.delete(req.body.id)
        res.status(200).send({
            message: 'Produto removido com sucesso!'
        });
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
};