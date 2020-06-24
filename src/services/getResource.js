// import GotService from "./gotServices";

export default function getResource(characterId = 1, bookId = 1, houseId = 1) {

	const got = new GotService(characterId, bookId, houseId);

	got.getCharacter(characterId)
		.then(character => {
			console.group(`Character ID: ${characterId}`);
			console.log(character)
			console.groupEnd();
		})
		.catch(res => console.log(res.error));

	got.getAllCharacters()
		.then(res => {
			console.group("All Characters");
			res.forEach(item => console.log(item.name));
			console.groupEnd();
		})
		.catch(res => console.log(res.error));

	got.getAllBooks()
		.then(res => {
			console.group("All Books");
			res.forEach(item => console.log(item.name));
			console.groupEnd();
		})
		.catch(res => console.log(res.error));

	got.getBook(bookId)
		.then(book => {
			console.group(`Book ID: ${bookId}`);
			console.log(book)
			console.groupEnd();
		})
		.catch(res => console.log(res.error));

	got.getAllHouses()
		.then(res => {
			console.group("All Houses");
			res.forEach(item => console.log(item.name));
			console.groupEnd();
		})
		.catch(res => console.log(res.error));

	got.getHouse(houseId)
		.then(house => {
			console.group(`House ID: ${houseId}`);
			console.log(house)
			console.groupEnd();
		})
		.catch(res => console.log(res.error));
}
