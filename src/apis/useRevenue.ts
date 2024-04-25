import { useEffect, useState } from "react";
import { BarChartData } from "../components/BarChart";
import { getRevenue } from "../pages/dashboard/_mock";

function useRevenue() {
	const [revenue, setRevenue] = useState<BarChartData[]>();
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			const response = await getRevenue();
			setRevenue(response);
			setIsLoading(false);
		}
		fetchData();
	}, []);

	return { revenue, isLoading };
}

export default useRevenue;
