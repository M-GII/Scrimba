export default function Footer(){
    function Twitter(){
        window.open("https://www.x.com", "_blank")
    }
    function Facebook(){
        window.open("https://www.facebook.com/", "_blank")
    }
    function Insta(){
        window.open("https://www.instagram.com/168_mg/", "_blank")
    }
    function GitHub(){
        window.open("https://github.com/M-GII", "_blank")
    }
    return (
        <section className="Footer">
            <button onClick={Twitter} id="JumptoTwitter"></button>
            <button onClick={Facebook} id="JumptoFacebook"></button>
            <button onClick={Insta} id="JumptoInsta"></button>
            <button onClick={GitHub} id="JumptoGitHub"></button>
        </section>


    )
}