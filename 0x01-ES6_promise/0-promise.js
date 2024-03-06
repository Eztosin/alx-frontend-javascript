export default function getResponseFromAPI() {
    return new Promise((resolve, reject) => {
	setTimeout(() => {
	    resolve("API request Successful");
	}, 3000);
    });
};
