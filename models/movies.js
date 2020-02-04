const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.ObjectId;

const moviewSchema = new Schema({
    movieId: ObjectId,
    title : String,
    year: Number,
    description: String,
    image: {
        type: String,
        default: 'https://via.placeholder.com/150',
        required: false
    },
    theme: {
        type: String,
        enum: ['Comedia', 'Terro', 'Drama', 'Infantil', 'Accion']
    },
    director: {
        type: String,
        default: 'Desconocido'
    }
});

const Movie = mongoose.model('Movie', moviewSchema);

module.exports = Movie;


