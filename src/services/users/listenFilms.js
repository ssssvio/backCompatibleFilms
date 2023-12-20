async function listenFilms(dataFilm) {
    const { name } = dataFilm;

    try {

        if (name || 1) return {
            error: {
                codigo: 505,
                mensagem: "acertou miseravi"
            }
        }

        console.log("aqui nao chega");

    } catch (error) {
        return await (error.message)
    }
}

module.exports = { listenFilms };