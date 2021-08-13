import React, { useEffect, useState } from "react";
export interface PaginationInterface {
	totalNumberOfPosts: number;
	itemsOnPerPage: number;
	currentActive: number;
	setCurrentActive: React.Dispatch<React.SetStateAction<number>>;
}
export default function Pagination({
	itemsOnPerPage,
	totalNumberOfPosts,
	currentActive,
	setCurrentActive,
}: PaginationInterface) {
	const [active, setActive] = useState(currentActive + 1);
	useEffect(() => {
		setCurrentActive(active);
	}, [active]);
	const pageNumbers = [];
	for (let i = 1; i <= Math.ceil(totalNumberOfPosts / itemsOnPerPage); i++) {
		pageNumbers.push(i);
	}
	const goToNextPage = () => {
		if (active < totalNumberOfPosts / itemsOnPerPage) {
			setActive(active + 1);
		}
	};
	const goToPreviousPage = () => {
		if (active > 1) {
			setActive(active - 1);
		}
	};
	const disablePrevious = () => {
		return active === 1;
	};
	const disableNext = () => {
		return active === Math.ceil(totalNumberOfPosts / itemsOnPerPage);
	};
	return (
		<nav className="flex justify-between items-center py-5 px-6">
			<button
				type="button"
				className={`btn-outline border-2  hover:shadow-none  focus:outline-none px-3 py-1 font-medium text-center text-gray-700 transition duration-500 ease-in-out rounded disabled:opacity-70 text-sm ${
					!disablePrevious() && "hover:bg-gray-200"
				}`}
				onClick={goToPreviousPage}
				disabled={disablePrevious()}
			>
				Previous
			</button>
			<ul className="flex-1 flex items-center justify-center">
				{pageNumbers.map((num) => (
					<li
						key={num}
						className={`h-8 w-8 rounded-full flex items-center justify-center mr-2 cursor-pointer ${
							active === num && "bg-indigo-500 text-white  font-medium"
						}`}
						onClick={() => setActive(num)}
					>
						{num}
					</li>
				))}
			</ul>
			<button
				type="button"
				className={`btn-outline border-2  hover:shadow-none  focus:outline-none px-3 py-1 font-medium text-center text-gray-700 transition duration-500 ease-in-out rounded disabled:opacity-70 text-sm ${
					!disableNext() && "hover:bg-gray-200"
				}`}
				onClick={goToNextPage}
				disabled={disableNext()}
			>
				Next
			</button>
		</nav>
	);
}
