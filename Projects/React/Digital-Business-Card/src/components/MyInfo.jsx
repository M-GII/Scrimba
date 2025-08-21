export default function MyInfo(){
    function JumpToEmail(){
        window.location.href = "mailto:manrojgill@hotmail.com";
    }
    function JumpToLinkedIn(){
        window.open("https://www.linkedin.com/in/manroj-gill", "_blank");
    }
    return (
        <main>
            <img src = "./src/images/MyFace.png" alt="Picture of Manroj Gill" id="myFace" /> 
            <h2> Manroj Gill</h2> 
            <p> <span id="myTitle">Aspiring Web Developer </span> </p>
            <div className="Email-LinkedIn-btn">
                <button  onClick = {JumpToEmail} id="email-btn" className="main-btn"> Email </button>
                <button onClick = {JumpToLinkedIn} id="LinkedIn-btn" className="main-btn"> LinkedIn</button>
            </div>
        </main>
    )
}