import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ['name', 'notice']

  connect() {
    // this.element.textContent = "Hello World!"
  }

  greet() {
    this.showNotice()
  }

  get name() {
    return this.nameTarget.value
  }

  get message() {
    return "Hello " + this.name
  }

  showNotice() {
    const msg = this.message
    // alert(msg)
    this.noticeTarget.textContent = msg
  }
}
