

const Content = () => {
    const disBtn = document.querySelector("#button");
    const textArea = document.querySelector("#des");
    const show = document.querySelector("#demo");

    disBtn.addEventListener("click",() =>{
        const text = textArea.value;
        show.textContent = text;
    })
    return (
        <div>
            <h2>Contnet area</h2>
            
            <textarea name="" id="des" cols="30" rows="10"></textarea><br />
            <button id="button">Show typed contents</button>
            <div id="demo"></div> <br />
        </div>
    );
};

export default Content;