export interface IBook {
  id: string;
  etag: string;
  kind?: string;
  selfLink: string;
  volumeInfo: {
    title: string;
    averageRating: number;
    subtitle: string;
    authors: string[];
    publisher: string;
    publishedDate: string;
    description: string;
    industryIdentifiers: {
      type: string;
      identifier: string;
    }[];
    pageCount: number;
    printType: "BOOK";
    categories: string[];
    maturityRating: string;
    imageLinks?: {
      smallThumbnail?: string;
      thumbnail?: string;
    };
    previewLink: string;
    infoLink: string;
    canonicalVolumeLink: string;
  };
}
