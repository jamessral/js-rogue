export interface Entity {
	id: number;
}

export function generateId() {
	const newId = window.Globals.lastId + 1;
	window.Globals.lastId += 1;
	return newId;
}
