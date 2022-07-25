import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "hoverable" ]
  static classes = [ "hovering" ]

  connect() {
    // this.element.textContent = "Hello World!"
    // this.hoverableTarget.classList.add("colored")
  }

  mouseOver() {
    console.log("mouse over")
    // this.hoverableTarget.classList.add("colored")
    this.hoverableTarget.classList.add(this.hoveringClass)
    this.data.set("happy", "yes")
  }

  mouseOut() {
    console.log("mouse out")
    // this.hoverableTarget.classList.remove("colored")
    this.hoverableTarget.classList.remove(this.hoveringClass)
  }

}
