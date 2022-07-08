
class FirestorePath {
    // Collection Paths
    static colUsers = () => 'users';

    // Document Paths
    static docUser = (userId: string) => `users/${userId}`;
}