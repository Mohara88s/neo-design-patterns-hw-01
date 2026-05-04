import { Reader } from "../models/Reader";
import { Copy } from "../models/Copy";

export class BorrowService {
	public borrow(reader: Reader, copy: Copy): string | undefined {
		if (!copy.isCopyAvailable()) {
			return `The copy of ${copy.getBook().getTitle()} is not avaliable.`;
		}

		copy.setAvailability(false);
		reader.borrowCopy(copy);

		return `${reader.getName()}'s borrowing of the ${copy.getBook().getTitle()} is successful.`;
	}

	public returnBook(reader: Reader, copy: Copy): string | undefined {
		copy.setAvailability(true);

		reader.returnCopy(copy);

		return `${reader.getName()}'s returning of the ${copy.getBook().getTitle()}is successful.`;
	}
}
