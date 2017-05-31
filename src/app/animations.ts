import {animate, group, keyframes, state, style, transition, trigger} from '@angular/animations';

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

// http://easings.net/#
// http://cubic-bezier.com/
export const animateStateTrigger = trigger('animateState', [
    transition('* => *', [
      animate('4000ms cubic-bezier(1,.12,1,1)', style({
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
      animate(1000, style({
        opacity: 0.7
      })),
      animate('5000ms ease-out', keyframes([
        style({
          'background-color': '#fff',
          offset: 0
        }),
        style({
          'background-color' : 'tomato',
          offset: 0.8
        }),
        style({
          backgroundColor: 'rgb(121, 173, 40)',
          offset: 1
        })
      ]))
    ]),
    animate(300, style({
      backgroundColor: 'lightblue'
    }))
  ]),
  transition(':leave', animate(300, style({ // :leave is an alias for shown => void
    opacity: 0
  })))
]);
// If you define a timing function and an offset Angular mixies them

// Below is before defining the offset as above
// export const listStateTrigger = trigger('listState', [
//   transition(':enter', [ // alias for void => shown
//     style({
//       opacity: 0,
//       'background-color' : '#fff'
//     }),
//     group([
//       animate(1000, style({
//         opacity: 0.7
//       })),
//       animate('5000ms ease-out', keyframes([
//         style({
//           'background-color': '#fff'
//         }),
//         style({
//           'background-color' : 'tomato'
//         }),
//         style({
//           backgroundColor: 'rgb(121, 173, 40)'
//         })
//       ]))
//     ]),
//     animate(300, style({
//       backgroundColor: 'lightblue'
//     }))
//   ]),
//   transition(':leave', animate(300, style({ // :leave is an alias for shown => void
//     opacity: 0
//   })))
// ]);
