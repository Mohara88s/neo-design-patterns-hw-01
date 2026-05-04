import { Copy } from "./Copy";

export class Reader {
	private id: string;
	private name: string;
	private copies: Copy[] = [];

	constructor(id: string, name: string) {
		this.id = id;
		this.name = name;
	}

	public getId(): string {
		return this.id;
	}

	public getName(): string {
		return this.name;
	}

	public borrowCopy(copy: Copy): void {
		this.copies.push(copy);
	}
	public returnCopy(copy: Copy): void {
		this.copies = this.copies.filter((c) => c !== copy);
	}
}
