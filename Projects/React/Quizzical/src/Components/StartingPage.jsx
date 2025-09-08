export default function StartingPage(props){
    return (
        <section className="starting-page">
            <h1> Quizzical </h1>
            <p>Welcome to Quizzical! <br></br> Try your hardest to answer all questions</p>
            <button onClick = {props.onClick} id="startgame-btn">Start Game</button>
        </section>
    )

}