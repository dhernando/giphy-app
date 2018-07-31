import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const GifSchema = new Schema({
    id: { type: String, unique: true, required: true, index: true },
    title: { type: String, required: true },
    slug: { type: String, required: true },
    rating: { type: String, required: true, default: 'g' },
    sizes: {
        width: {
            '100': {
                url: { type: String, required: true }
            }, // fixed_width_small
            '200': {
                url: { type: String, required: true }
            }, // fixed_width
            '200light': {
                url: { type: String, required: true }
            }, // fixed_width_downsampled
        },
        height: {
            '100': {
                url: { type: String, required: true }
            }, // fixed_height_small
            '200': {
                url: { type: String, required: true }
            }, // fixed_height
            '200light': {
                url: { type: String, required: true }
            }, // fixed_height_downsampled
        }
    },
    qualities: {
        preview: {
            url: { type: String, required: true }
        }, // preview
        low: {
            url: { type: String, required: true }
        }, // downsized
        medium: {
            url: { type: String, required: true }
        }, // downsized_medium
        high: {
            url: { type: String, required: true }
        }, // downsized_large
        original: {
            url: { type: String, required: true }
        } // original
    },
    mp4: {
        small: {
            url: { type: String, required: true }
        }, // fixed_height
        medium: {
            url: { type: String, required: true }
        }, // fixed_width
        original: {
            url: { type: String, required: true }
        } // original
    },
    likes: {
        count: { type: Number, default: 0 },
        sum: { type: Number, default: 0 },
        list: [{
            type: Schema.Types.ObjectId,
            ref: 'Like'
        }]
    },
    createdAt: { type: Number, default: Date.now() },
    updatedAt: { type: Number, default: Date.now() }
});

export const Gif = mongoose.model('Gif', GifSchema);