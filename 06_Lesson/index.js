// const inputName = document.querySelector("#name")
const formSubmit = document.querySelector("#form")
const submitButton = document.querySelector("#submit")
const messageEl = document.createElement("p")
messageEl.textContent = ""
formSubmit.appendChild(messageEl)
submitButton.addEventListener('click', ((e) => {
    e.preventDefault()
    console.log(formSubmit.elements['name'].value)
    const message = `Hello, ${formSubmit.elements['name'].value}`
    messageEl.textContent = message
   
}))

