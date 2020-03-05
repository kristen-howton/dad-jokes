const dadJoke = (dadJokeObject) => {
    return `
        <section class="joke__number">${dadJokeObject.id}.
                <section="joke__question">Question: ${dadJokeObject.question}
                    <section="joke__answer">Answer: ${dadJokeObject.answer}</section>
                    </section>
        </section>
    `
}

export default dadJoke