export const gifParser = function (gifs) {

    const parsedGifs = [];
    
    for (const gif of gifs) 
    {
        parsedGifs.push({
            id: gif.id,
            title: gif.title,
            slug: gif.slug,
            rating: gif.rating,
            sizes: {
                width: {
                    '100': {
                        url: gif.images.fixed_width_small.url
                    }, // fixed_width_small
                    '200': {
                        url: gif.images.fixed_width.url
                    }, // fixed_width
                    '200light': {
                        url: gif.images.fixed_width_downsampled.url
                    }, // fixed_width_downsampled
                },
                height: {
                    '100': {
                        url: gif.images.fixed_height_small.url
                    }, // fixed_height_small
                    '200': {
                        url: gif.images.fixed_height.url
                    }, // fixed_height
                    '200light': {
                        url: gif.images.fixed_height_downsampled.url
                    }, // fixed_height_downsampled
                }
            },
            qualities: {
                preview: {
                    url: gif.images.preview_gif.url
                }, // preview_gif
                low: {
                    url: gif.images.downsized.url
                }, // downsized
                medium: {
                    url: gif.images.downsized_medium.url
                }, // downsized_medium
                high: {
                    url: gif.images.downsized_large.url
                }, // downsized_large
                original: {
                    url: gif.images.original.url
                } // original
            },
            mp4: {
                small: {
                    url: gif.images.fixed_height.mp4
                }, // fixed_height
                medium: {
                    url: gif.images.fixed_width.mp4
                }, // fixed_width
                original: {
                    url: gif.images.original.mp4
                } // original
            },
            votes: {
                count: 0,
                sum: 0,
            }
        });
    }

    return parsedGifs;
}