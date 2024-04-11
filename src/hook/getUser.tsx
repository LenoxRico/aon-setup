import { useOktaAuth } from "@okta/okta-react";
import { useEffect, useState } from "react";

const useAuthUser = () => {
	const { oktaAuth, authState } = useOktaAuth();
  const [userInfo, setUserInfo] = useState(null);

	useEffect(() => {
		const getUser = async () => {
			try {
				const res:any = await oktaAuth.getUser();
				setUserInfo(res);
			} catch (error) {
				console.error(error);
			}
		};

		authState?.isAuthenticated && getUser();
	}, [authState, oktaAuth]);

	return userInfo;
};

export default useAuthUser;