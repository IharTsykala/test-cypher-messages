const textArea = document.querySelector("#textArea")
const button = document.querySelector("#button")
const answerArea = document.querySelector("#answerArea")

const decryptionTextArea = () => {
  const bufferString = textArea.value

  if (bufferString.length > 100000) return "More 100000 letters"

  const bufferArray = bufferString.trim().split("")
  const textAnswerArea = []

  bufferArray.forEach((item, index) => {
    if (
      (bufferArray[index] !== bufferArray[index + 1] &&
        bufferArray[index] !== bufferArray[index - 1]) ||
      (bufferArray[index] === bufferArray[index + 1] &&
        bufferArray[index] === bufferArray[index - 1])
    ) {
      textAnswerArea.push(item)
    }
  })
  return textAnswerArea.join("")
}

const fillAnswerArea = () => {
  answerArea.innerHTML = decryptionTextArea()
}

button.addEventListener("click", () => {
  fillAnswerArea(textArea.value)
})
