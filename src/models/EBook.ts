import { AbstractBook } from "./AbstractBook";
import { Author } from "./Author";

export class EBook extends AbstractBook {
	private url: string;

	constructor(title: string, year: number, author: Author, url: string) {
		super(title, year, author);
		this.url = url;
	}

	public getDescription(): string {
		return `An ebook with title: ${this.title}, author: ${this.author.getName()}, year: ${this.year}, url: ${this.url},`;
	}
}
