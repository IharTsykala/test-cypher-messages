const textArea = document.querySelector("#textArea")
const button = document.querySelector("#button")
const answerArea = document.querySelector("#answerArea")

const decryptionTextArea = () => {
  const textAnswerArea = textArea.value.replace(/[^a-z]/g, "").split("")
  if (textAnswerArea.length > 100000) textAnswerArea.length = 100000

  for (let i = 0; i < textAnswerArea.length - 1; i++) {
    if (textAnswerArea[i] === textAnswerArea[i + 1]) {
      textAnswerArea.splice(i, 2)
      i--
      if (i !== 0) {
        i--
      } else {
        continue
      }
    }
  }
  return textAnswerArea.join("")
}

const fillAnswerArea = () => {
  answerArea.innerHTML = decryptionTextArea()
}

button.addEventListener("click", () => {
  answerArea.innerHTML = ""
  fillAnswerArea(textArea.value)
})
