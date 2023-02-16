import { useState, useEffect } from "react";

export const useFetch = () => {
	const [data, setData] = useState({});

	const fetchData = async () => {
		try{
			const result = await fetch("https://rickandmortyapi.com/api/character")
			const data = await result.json()	
			setData(data.results);		
		}
		catch(e){
			setData({});
		}
	}
	useEffect(() => {
		fetchData();
	},[])

	return data
}