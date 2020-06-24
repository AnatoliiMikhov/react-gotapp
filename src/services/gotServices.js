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
	};

	async getAllCharacters() {
		const res = await this.getResource("/characters?page=5&pageSize=10");
		return res.map(this._transformCharacter);
	}

	async getCharacter(id) {
		const character = await this.getResource(`/characters/${id}`);
		return this._transformCharacter(character);
	}

	getAllBooks() {
		return this.getResource(`/books/`);
	}

	getBook(id) {
		return this.getResource(`/books/${id}/`);
	}

	getAllHouses() {
		return this.getResource(`/houses/`);
	}

	getHouse(id) {
		return this.getResource(`/houses/${id}/`);
	}

	_transformCharacter(character) {
		return {
			name: character.name,
			gender: character.gender,
			born: character.born,
			died: character.died,
			culture: character.culture
		}
	}

	_transformHouse(house) {
		return {
			name: house.name,
			region: house.region,
			worlds: house.worlds,
			titles: house.titles,
			overload: house.overload,
			ancestralWeapons: house.ancestralWeapons
		}
	}

	_transformBook(book) {
		return {
			name: book.name,
			numberOfPages: book.numberOfPages,
			publiser: book.publiser,
			released: book.released
		}
	}
}
