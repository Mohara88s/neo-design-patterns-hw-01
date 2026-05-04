import { Author } from "./Author";
import { AbstractBook } from "./AbstractBook";
import { Copy } from "./Copy";
import { Reader } from "./Reader";
import { Book } from "./Book";
import { EBook } from "./EBook";

export class Library {
	private authors: Author[] = [];
	private books: AbstractBook[] = [];
	private copies: Copy[] = [];
	private readers: Reader[] = [];

	constructor() {}

	public addAuthor(author: Author): void {
		this.authors.push(author);
	}

	public addBook(book: AbstractBook): void {
		this.books.push(book);
	}

	public addCopy(copy: Copy): void {
		this.copies.push(copy);
	}

	public addReader(reader: Reader): void {
		const exists = this.readers.some((r) => r.getId() === reader.getId());

		if (exists) {
			console.log(`Reader with ID ${reader.getId()} is already registered.`);
			return;
		}

		this.readers.push(reader);
	}

	public getAllAvailableCopies(): Copy[] {
		return this.copies.filter((copy) => copy.isCopyAvailable());
	}

	public findBooksByAuthor(authorName: string): AbstractBook[] {
		const author = this.authors.find(
			(author) => author.getName().toLowerCase() === authorName.toLowerCase(),
		);

		if (!author) {
			console.log(`Author with name ${authorName} is not registered yet.`);
			return [];
		}

		return author.getBooks();
	}
}
