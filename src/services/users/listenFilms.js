async function listenFilms(dataFilm) {
    const { name } = dataFilm;

    try {

        if (!name) return {
            error: {
                code: 503,
                message: "acertou aqui"
            }
        }

    } catch (error) {
        return await (error.message)
    }
}

module.exports = { listenFilms };