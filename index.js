const textArea = document.querySelector("#textArea")
const button = document.querySelector("#button")
const answerArea = document.querySelector("#answerArea")

const decryptionTextArea = () => {
  const bufferString = textArea.value

  if (bufferString.length > 100000) return "More 100000 letters"

  const bufferArray = bufferString.split("")
  const textAnswerArea = []

  for (let i = 0; i < bufferArray.length; i++) {
    if (
      bufferArray[i] === bufferArray[i + 1] &&
      bufferArray[i] !== "\n" &&
      bufferArray[i] !== "  "
    ) {
      i += 1
      continue
    }
    textAnswerArea.push(bufferArray[i])
  }

  return textAnswerArea.join("").replace(/\n/g, "<br>")
}

const fillAnswerArea = () => {
  answerArea.innerHTML = decryptionTextArea()
}

button.addEventListener("click", () => {
  answerArea.innerHTML = ""
  fillAnswerArea(textArea.value)
})
