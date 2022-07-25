// Import and register all your controllers from the importmap under controllers/*

import { application } from "controllers/application"

// Eager load all controllers defined in the import map under controllers/**/*_controller
import { eagerLoadControllersFrom } from "@hotwired/stimulus-loading"
eagerLoadControllersFrom("controllers", application)

// Lazy load controllers as they appear in the DOM (remember not to preload controllers in import map!)
// import { lazyLoadControllersFrom } from "@hotwired/stimulus-loading"
// lazyLoadControllersFrom("controllers", application)

// import HelloController from "./hello_controller"
// application.register('hello', HelloController)

// import VisibilityController from "./visibility_controller"
// application.register('visibility', VisibilityController)

// import BoxController from "./box_controller"
// application.register('box', BoxController)

// import HoverController from "./hover_controller"
// application.register('hover', HoverController)

// import CheckboxesController from "./checkboxes_controller"
// application.register('checkboxes', CheckboxesController)
