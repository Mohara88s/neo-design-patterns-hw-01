import { Book } from "./Book";

export class Copy {
	private book: Book;
	private isAvailable: boolean;

	constructor(book: Book) {
		this.book = book;
		this.isAvailable = true;
	}

	public getBook(): Book {
		return this.book;
	}

	public isCopyAvailable(): boolean {
		return this.isAvailable;
	}

	public setAvailability(status: boolean): void {
		this.isAvailable = status;
	}
}
