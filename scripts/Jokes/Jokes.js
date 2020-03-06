const dadJoke = (dadJokeObject) => {
    return `
        <section class="joke__number">${dadJokeObject.id}.
            <section="joke__question">Question: ${dadJokeObject.question}
            <button id="button--${dadJokeObject.id}">Answer</button>
            <dialog class="dialog--answer" id="details--${dadJokeObject.id}">
                <p class="joke__answer">Answer: ${dadJokeObject.answer}</p>
                <button class="button--close">Close</button>
            </dialog>
                </section>
                
        </section>


    `
}

export default dadJoke