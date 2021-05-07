import { EVENT_STATUSES, PROFICIENCIES } from './event';

export const PREREQUISITE_CONSTRAINTS = {
    label: {
        presence: true,
    },
    proficiency: {
        presence: true,
        inclusion: PROFICIENCIES
    },
    referenceUrl: {
        presence: true,
        url: true
    }
};

export const DEPENDENCY_CONSTRAINTS = {
    label: {
        presence: true,
    },
    specification: {
        presence: true,
    },
    referenceUrl: {
        presence: true,
        url: true
    }
};

export const SPEAKER_CONSTRAINTS = {
    personId: {
        presence: true,
        personExists: true
    },
    organisationId: {
        presence: true,
        organisationExists: true
    },
    position: {
        presence: true
    }
};

export const PUBLICATION_CONSTRAINTS = {
    status: {
        presence: true,
        inclusion: EVENT_STATUSES
    },
    url: {
        url: true
    }
};

export const EVENT_CONSTRAINTS = {
    tgif: {
        presence: true,
        numericality: {
            onlyInteger: true,
        },
        tgifUnique: true
    },
    title: {
        presence: true,
        length: { maximum: 64 } // Facebook: 64, Eventbrite: 75
    },
    speakers: {
        presence: true,
        length: {
            minimum: 1,
            tooShort: 'needs to have at least 1 speaker',
        },
        array: {
            constraints: SPEAKER_CONSTRAINTS
        }
    },
    tagline: {
        presence: true
    },
    bannerId: {
        presence: true,
        artworkExists: true
    },
    description: {
        presence: true
    },
    prerequisites: {
        presence: true,
        array: {
            constraints: PREREQUISITE_CONSTRAINTS
        }
    },
    dependencies: {
        presence: true,
        array: {
            constraints: DEPENDENCY_CONSTRAINTS
        }
    },
    promotion: {
        presence: true
    },
    venueId: {
        presence: true,
        locationExists: true
    },
    startTime: {
        presence: true,
        beforeTime: {
            timeAttribute: 'endTime'
        }
    },
    endTime: {
        presence: true,
        afterTime: {
            timeAttribute: 'startTime'
        }
    },
    githubUrl: {
        presence: true,
        url: true
    },
    status: {
        presence: true,
        inclusion: EVENT_STATUSES
    },
    isPublic: {
        presence: true
    },
    isExternal: {
        presence: true
    },
    hasFood: {
        presence: true
    },
    hasDrinks: {
        presence: true
    },
    remarks: {
        presence: true
    },
    eventbrite: {
        object: {
            constraints: PUBLICATION_CONSTRAINTS
        }
    },
    facebook: {
        object: {
            constraints: PUBLICATION_CONSTRAINTS
        }
    }
};
