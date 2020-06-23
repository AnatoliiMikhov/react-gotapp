export default class GotService {
	constructor() {
		this._apiBase = "https://www.anapioficeandfire.com/api";
	}

	async getResouce(url) {
		const res = await fetch(`${this._apiBase}${url}`);
		if (!res.ok) {
			throw new Error(`Could not fetch ${url}, status: ${res.status}`);
		}

		return await res.json();
	};

	getAllCharacters() {
		return this.getResouce("/characters?page=5&pageSize=10");
	}

	getCharacter(id) {
		return this.getResouce(`/characters/${id}`);
	}
}

/* const got = new GotService();

got.getAllCharacters()
	.then(res => {
		res.forEach(item => console.log(item.name));
	});

got.getCharacter(130)
	.then(res => console.log(res)) */