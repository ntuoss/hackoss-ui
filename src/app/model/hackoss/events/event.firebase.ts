import { Proficiency, EventStatus, Publication, Prerequisite, Dependency } from './event';

export class FirebaseEvent {
    id: string;
    tgif: number;
    title: string;
    speakers: FirebaseEventSpeaker[];
    tagline: string;
    banner: firebase.firestore.DocumentReference;
    description: string;
    prerequisites: Prerequisite[];
    dependencies: Dependency[];
    promotion: string;
    venue: firebase.firestore.DocumentReference;
    startTime: firebase.firestore.Timestamp;
    endTime: firebase.firestore.Timestamp;
    githubUrl: string;
    status: EventStatus;
    isPublic: boolean;
    isExternal: boolean;
    hasFood: boolean;
    hasDrinks: boolean;
    remarks: string;
    eventbrite: Publication;
    facebook: Publication;
}

export class FirebaseEventSpeaker {
    person: firebase.firestore.DocumentReference;
    organisation: firebase.firestore.DocumentReference;
    position: string;
}
