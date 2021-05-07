export const ARTWORK_CONSTRAINTS = {
    title: {
        presence: true
    },
    imageUrl: {
        presence: true,
        url: true
    },
    artistId: {
        presence: true,
        personExists: true
    },
    eventbriteId: {
        presence: true
    }
};
