// create your App component here
import { useEffect, useState } from "react";

function App() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [dogPicture, setDogPicture] = useState("");

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then((r) => r.json())
            .then((data) => {
                setDogPicture(data.message);
                setIsLoaded(true)
            });
    }, []);
    if(!isLoaded) return <p>Loading...</p>;
    return <img alt="A Random Dog" src={dogPicture} />
}


export default App