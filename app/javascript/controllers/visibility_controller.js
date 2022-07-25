import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "hideable" ]

  connect() {
    // this.element.textContent = "Hello World!"
    // this.hoverableTarget.classList.add("colored")
  }

  showTargets() {
    console.log("showTargets")
    this.hideableTargets.forEach(el => {
      el.hidden = false
    })
  }

  hideTargets() {
    console.log("hideTargets")
    this.hideableTargets.forEach(el => {
      el.hidden = true
    })
  }

  toggleTargets() {
    console.log("toggleTargets")
    this.hideableTargets.forEach(el => {
      el.hidden = !el.hidden
    })
  }


}
