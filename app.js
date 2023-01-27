const advice = document.querySelector("#advice");
const adviceId = document.querySelector("#adviceId")
const diceButton = document.querySelector("#diceButton")

async function getAdvice() {
    try {
        const response = await axios.get("https://api.adviceslip.com/advice");
        advice.innerHTML = '"' + response.data.slip.advice + '"';
        adviceId.innerHTML = response.data.slip.id;
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}
getAdvice();
diceButton.addEventListener("click", function () {
    getAdvice();
})
