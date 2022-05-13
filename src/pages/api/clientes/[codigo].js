export default function handler(req, res) {
    const codigo = req.query.codigo

    res.status(200).json({
        id: codigo,
        nome: `Renato ${codigo}`,
        email: `rdfn37${codigo}@gmail.com`
    })
}