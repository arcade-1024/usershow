import React from "react";
import DisplayCard from "../../common/DisplayCard/DisplayCard";
import Pagination from "../../common/Pagination/Pagination";
export interface UserContainerInterface {
	setPage: React.Dispatch<React.SetStateAction<number>>;
	page: number;
	data: any;
}
const UserContainer = ({ setPage, data, page }: UserContainerInterface) => {
	if (data) {
		return (
			<>
				<h1 className="w-full text-center text-4xl font-medium pt-10 pb-12">
					Users
				</h1>
				<div className="flex flex-col lg:px-32 px-16 mb-24">
					<div className="grid grid-cols-3">
						{data.data.map((user: any) => (
							<DisplayCard
								email={user.email}
								firstName={user.first_name}
								imgUrl={user.avatar}
								lastName={user.last_name}
								key={user.id}
							/>
						))}
					</div>
					<Pagination
						currentActive={page - 1}
						itemsOnPerPage={data.per_page}
						setCurrentActive={setPage}
						totalNumberOfPosts={data.total}
					/>
				</div>
			</>
		);
	} else return <div />;
};

export default UserContainer;
