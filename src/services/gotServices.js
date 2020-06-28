export default class GotService {
	constructor() {
		this._apiBase = "https://www.anapioficeandfire.com/api";
	}

	async getResource(url) {
		const res = await fetch(`${this._apiBase}${url}`);
		if (!res.ok) {
			throw new Error(`Could not fetch ${url}, status: ${res.status}`);
		}

		return await res.json();
	}

	async getAllCharacters() {
		const res = await this.getResource(`/characters?page=5&pageSize=10/`);
		return res.map(this._transformCharacter);
	}

	async getCharacter(id) {
		const character = await this.getResource(`/characters/${id}`);
		return this._transformCharacter(character);
	}

	async getAllBooks() {
		const res = await this.getResource(`/books/`);
		return res.map(this._transformBook);
	}

	async getBook(id) {
		const book = await this.getResource(`/books/${id}`);
		return this._transformBook(book);
	}

	async getAllHouses() {
		const res = await this.getResource(`/books/`);
		return res.map(this._transformBook);
	}

	async getHouse(id) {
		const house = await this.getResource(`/houses/${id}/`);
		return this._transformBook(house);
	}

	isSet(data) {
		if (data) {
			return data;
		} else {
			return "no data :(";
		}
	}

	_extractId = (item) => {
		const idRegExp = /\/([0-9]*)$/;
		return item.url.match(idRegExp)[1];
	}

	_transformCharacter = (character) => {
		return {
			id: this._extractId(character),
			name: this.isSet(character.name),
			gender: this.isSet(character.gender),
			born: this.isSet(character.born),
			died: this.isSet(character.died),
			culture: this.isSet(character.culture)
		};
	}

	_transformHouse = (house) => {
		return {
			id: this._extractId(house),
			name: this.isSet(house.name),
			region: this.isSet(house.region),
			worlds: this.isSet(house.worlds),
			titles: this.isSet(house.titles),
			overload: this.isSet(house.overload),
			ancestralWeapons: this.isSet(house.ancestralWeapons),
		};
	}

	_transformBook = (book) => {
		return {
			id: this._extractId(book),
			name: this.isSet(book.name),
			numberOfPages: this.isSet(book.numberOfPages),
			publiser: this.isSet(book.publiser),
			released: this.isSet(book.released),
		};
	}
}
