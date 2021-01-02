const mongoose = require('mongoose')
mongoose.set('useFindAndModify', false);

// Acesso ao model desejado

const Product = mongoose.model('Product')

module.exports = {
	async index(req, res){
		const { page = 1} = req.query
		const products = await Product.paginate({}, { page, limit: 10 }) // { where: }
		return res.json(products)
	},

	async show(req, res){
		const product = await Product.findById(req.params.id)
		return res.json(product)
	},

	async store(req, res){
		const product = await Product.create(req.body) // Criação dos Dados
		return res.json(product)
	},

	async update(req, res){
		const product = await Product.findOneAndUpdate(req.params.id, req.body, { new: true, upsert: true }) // new: retorna esse produto atualizado
		return res.json(product)
	},

	async destroy(req, res){
		await Product.findOneAndRemove(req.params.id, req.body)
		return res.send()
	}

}