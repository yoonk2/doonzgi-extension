const elements = document.querySelectorAll(
  "p, h1, h2, h3, h4, h5, h6, span, a, button, input, textarea, select, input, label, mark"
)
elements.forEach((element) => {
  if ("textContent" in element) {
    const currentinnerHTML = element.innerHTML
    if (currentinnerHTML.includes("둥")) {
      const changedinnerHTML = currentinnerHTML.replace(
        "둥",
        "<span style='color:#25E84C; background-color:white;'>둥</span>"
      )
      element.innerHTML = changedinnerHTML
    }
  }
})
