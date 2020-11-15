export class Movie {
    id: string;
    public title: string;
    thumbnailId: string;

    constructor(id: string, title: string, thumbnailId: string) {
        this.id = id;
        this.title = title;
        this.thumbnailId = thumbnailId;
    }
}