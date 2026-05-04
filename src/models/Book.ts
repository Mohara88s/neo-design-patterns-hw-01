import { AbstractBook } from "./AbstractBook";
import { Author } from "./Author";

export class Book extends AbstractBook {
	constructor(title: string, year: number, author: Author) {
		super(title, year, author);
	}

	public getDescription(): string {
		return `A book with title: ${this.title}, author: ${this.author.getName()}, year: ${this.year}`;
	}
}
