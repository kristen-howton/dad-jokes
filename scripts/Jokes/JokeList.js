import dadJoke from "./Jokes.js";
import { useDadJokes } from "./JokesDataProvider.js";

const contentElement = document.querySelector(".DadJokeContainer")

const JokeList = () => {

    const arrayOfObjectsDadJokes = useDadJokes()

    for (const dadJokeObject of arrayOfObjectsDadJokes) {

        const HTMLRepresentationOfDadJoke = dadJoke(dadJokeObject)

        contentElement.innerHTML += HTMLRepresentationOfDadJoke
        
    }

}

export default JokeList