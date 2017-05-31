import {animate, state, style, transition, trigger} from '@angular/animations';

export const showStateTrigger = trigger('showState', [
  // Technically this would still work because you don't need to define states to switch to them
  // It is an overhead here though to set states that you don't use at all
  // state('shown', style ({
  //
  // })),
  // transition('void => shown', [
  //   style({
  //     opacity: 0
  //   }),
  //   animate(300)
  // ]),
// ### These are 2 different commented out bits ### //
  // transition('void => *', [
  //   style({
  //     opacity: 0
  //   }),
  //   animate(300)
  // ]),
  // transition('* => void', animate(300, style({
  //   opacity: 0
  // })))
  transition(':enter', [ // alias for void => shown
    style({
      opacity: 0
    }),
    animate(300)
  ]),
  transition(':leave', animate(300, style({ // :leave is an alias for shown => void
    opacity: 0
  })))
]);

export const animateStateTrigger = trigger('animateState', [
    transition('* => *', [
      animate(400, style({
        width: 0
    })),
    animate(400, style({
      width: '*'
    }))
  ])
]);
