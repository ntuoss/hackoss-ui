export class FirebaseArtwork {
    id: string;
    title: string;
    imageUrl: string;
    artist: firebase.firestore.DocumentReference;
    eventbriteId: string;
}
