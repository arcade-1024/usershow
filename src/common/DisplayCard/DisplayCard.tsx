import React from "react";
export interface DisplayCardInterface {
	imgUrl: string;
	firstName: string;
	lastName: string;
	email: string;
}
const DisplayCard = ({
	firstName,
	imgUrl,
	lastName,
	email,
}: DisplayCardInterface) => {
	return (
		<div className="flex flex-col items-center px-3 py-4">
			<img
				src={imgUrl}
				className="h-32 w-32 overflow-hidden rounded-full"
				alt="avatat-img"
			/>
			<h1 className="text-xl font-medium text-gray-800 mt-3">
				{firstName} {lastName}
			</h1>
			<p className="text-base text-gray-700">{email}</p>
		</div>
	);
};

export default DisplayCard;
