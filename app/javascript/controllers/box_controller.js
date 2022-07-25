import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "box", "countElem" ]
  static classes = [ "hovering" ]
  static values = {
    hoverCount: { type: Number, default: 0 }
  }

  connect() {
    // this.element.textContent = "Hello World!"
    // this.boxTarget.classList.add("colored")
  }

  mouseOver() {
    // console.log("mouse over box")
    // this.boxTarget.classList.add("colored")
    this.boxTarget.classList.add(this.hoveringClass)

    // Changing our count value should fire a change callback
    this.hoverCountValue += 1
  }

  mouseOut() {
    // console.log("mouse out box")
    // this.boxTarget.classList.remove("colored")
    this.boxTarget.classList.remove(this.hoveringClass)
  }

  hoverCountValueChanged(newValue, oldValue) {
    // alert("Hover Count changed")
    // this.countElemTarget.textContent = "Count is " + this.hoverCountValue
    // this.countElemTarget.textContent = "Count is " + newValue + ". Old Value was " + oldValue
    this.countElemTarget.textContent = `New count is ${newValue}. Old count was ${oldValue}`
  }
}
