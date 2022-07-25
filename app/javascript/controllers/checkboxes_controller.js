import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "box" ]

  connect() {
    // this.element.textContent = "Hello World!"
    // this.boxTarget.classList.add("colored")
  }

  checkAll() {
    this.boxTargets.forEach(box => {
      box.checked = true
    })
  }

  clearAll() {
    this.boxTargets.forEach(box => {
      box.checked = false
    })
  }
}
