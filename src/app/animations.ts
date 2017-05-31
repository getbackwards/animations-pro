import {animate, group, state, style, transition, trigger} from '@angular/animations';

export const showStateTrigger = trigger('showState', [
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

export const listStateTrigger = trigger('listState', [
  transition(':enter', [ // alias for void => shown
    style({
      opacity: 0,
      'background-color' : '#fff'
    }),
    group([
      animate(200, style({
        opacity: 0.7
      })),
      animate(1000, style({
        backgroundColor: 'tomato'
      }))
    ]),
    animate(5000, style({
      backgroundColor: 'lightblue'
    }))
  ]),
  transition(':leave', animate(300, style({ // :leave is an alias for shown => void
    opacity: 0
  })))
]);
