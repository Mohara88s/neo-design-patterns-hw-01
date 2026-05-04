import { AbstractBook } from "./AbstractBook";

export class Author {
	private name: string;
	private books: AbstractBook[] = [];

	constructor(name: string) {
		this.name = name;
	}

	public getName(): string {
		return this.name;
	}

	public addBook(book: AbstractBook): void {
		this.books.push(book);
	}

	public getBooks(): AbstractBook[] {
		return [...this.books];
	}
}
