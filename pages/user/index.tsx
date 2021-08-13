import axios from "axios";
import React, { useEffect, useState } from "react";
import UserContainer from "../../src/container/userContainer/UserContainer";

const UserShowPage = () => {
	const [page, setPage] = useState(1);
	const [userData, setUserData] = useState();
	useEffect(() => {
		axios(`https://reqres.in/api/users?page=${page}`)
			.then((data) => setUserData(data.data))
			.catch((error) => console.log(error));
	}, [page]);
	return (
		<div className="w-full h-screen bg-gray-50">
			{/* <pre>{JSON.stringify(userData, null, 3)}</pre> */}
			<UserContainer data={userData} setPage={setPage} page={page} />
		</div>
	);
};

export default UserShowPage;
