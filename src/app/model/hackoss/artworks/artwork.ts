import { Person } from '../people/person';

export class Artwork {
    id: string;
    title: string;
    imageUrl: string;
    artist: Person;
    eventbriteId: string;
}
