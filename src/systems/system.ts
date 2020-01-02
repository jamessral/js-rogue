export interface System<T> {
	entries: T[];

	getById(id: number): T | null;
}
