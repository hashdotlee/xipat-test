import { useEffect, useState } from "react";
import { getSubscriptions } from "../pages/dashboard/_mock";
import { LineChartData } from "../components/LineChart";

function useSubscriptions() {
	const [subscriptions, setSubscriptions] = useState<LineChartData[]>();
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			const response = await getSubscriptions();
			setSubscriptions(response);
			setLoading(false);
		}
		fetchData();
	}, []);

	return { subscriptions, loading };
}

export default useSubscriptions;
