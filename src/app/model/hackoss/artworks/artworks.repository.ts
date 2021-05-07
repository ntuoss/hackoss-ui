import { FirebaseRepository } from '../firebase/firebase.repository';
import { Artwork } from './artwork';
import { FirebaseArtwork } from './artwork.firebase';
import { PeopleRepository } from '../people/people.repository';
import { withId, QueryFilter, buildQuery } from '../utils';
import { validators } from 'validate.js';
import * as firebase from 'firebase/app';
import 'firebase/firestore'
import _ from 'lodash';

export type ArtworksOrderKey = 'title';

const ARTWORKS_ORDER_KEY_PATH_MAP: { [key in ArtworksOrderKey]: string; } = {
    'title': 'title'
};

export interface NewArtwork {
    title: string;
    imageUrl: string;
    artistId: string;
    eventbriteId: string;
}

export class ArtworksRepository {

    private firebaseRepository: FirebaseRepository;
    private peopleRepository: PeopleRepository;
    artworks: firebase.firestore.CollectionReference;

    constructor(
        firebaseService: FirebaseRepository,
        peopleRepository: PeopleRepository
    ) {
        this.firebaseRepository = firebaseService;
        this.peopleRepository = peopleRepository;
        this.artworks = this.firebaseRepository.firestore.collection('artworks');

        validators.artworkExists = (artworkId: string) => new Promise(async (resolve) => {
            const doc = await this.artworks.doc(artworkId).get();
            if (doc.exists) {
                resolve();
            } else {
                resolve(`Artwork with ID ${artworkId} does not exist in Firebase`);
            }
        });
    }

    async createArtwork(artwork: NewArtwork) {
        const newArtwork: _.Omit<FirebaseArtwork, 'id'> = {
            title: artwork.title,
            imageUrl: artwork.imageUrl,
            eventbriteId: artwork.eventbriteId,
            artist: this.peopleRepository.people.doc(artwork.artistId)
        };
        await this.artworks.add(newArtwork);
    }

    async getArtworks(
        filters: QueryFilter[] = [],
        limit: number = 10,
        orderBy: ArtworksOrderKey = 'title',
        direction: firebase.firestore.OrderByDirection = 'asc'
    ): Promise<Artwork[]> {
        const orderByPath = ARTWORKS_ORDER_KEY_PATH_MAP[orderBy];
        const results = await buildQuery(this.artworks, limit, orderByPath, direction, filters).get();
        return Promise.all(results.docs.map(doc => this.toArtwork(withId<FirebaseArtwork>(doc.data(), doc.id))));
    }

    async getArtwork(id: string): Promise<Artwork> {
        const ref = this.artworks.doc(id);
        const doc = await ref.get();
        return this.toArtwork(withId<FirebaseArtwork>(doc.data(), id));
    }

    private async toArtwork(data: FirebaseArtwork): Promise<Artwork> {
        const artist = this.peopleRepository.getPerson(data.artist.id);
        return {
            ...data,
            artist: await artist
        };
    }

}
