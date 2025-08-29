interface Sort {
	unsorted: boolean;
	sorted: boolean;
	empty: boolean;
}

interface Pageable {
	pageNumber: number;
	pageSize: number;
	sort: Sort;
	offset: number;
	unpaged: boolean;
	paged: boolean;
}

export interface IPaginatedResponse<T> {
	totalElements: number;
	totalPages: number;
	pageable: Pageable;
	numberOfElements: number;
	first: boolean;
	last: boolean;
	size: number;
	content: T[];
	number: number;
	sort: Sort;
	empty: boolean;
}
