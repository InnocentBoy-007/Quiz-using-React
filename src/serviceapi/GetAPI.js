
export const GetAPI = async () => {
    try {
        const response = await fetch('https://66ab5e09636a4840d7ca5c11.mockapi.io/QA', {
            method: 'GET',
            headers: { 'content-type': 'application/json' }
        })
        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            throw new Error('Data cannot be fetch!');
            //or throw other errors
        }
    } catch (error) {
        console.error(error);
        //or do something with the error
    }
}
