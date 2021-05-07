export const ORGANISATION_CONSTRAINTS = {
    name: {
        presence: true
    },
    about: {
        presence: true
    },
    websiteUrl: {
        presence: true,
        url: true
    },
    avatarUrl: {
        presence: true,
        url: true
    },
    githubUrl: {
        presence: true,
        url: true
    }
};
