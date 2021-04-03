export interface State {
  todos: Todos[]
}

export interface Todos {
  title: string;
  notes: string;
  done: boolean;
}

const init: State = {
  todos: [
    {
      title: 'Laundry',
      notes: 'Bring laundry to home',
      done: false
    },
    {
      title: 'Pick up Mat',
      notes: 'Pick up Mat at school',
      done: true
    },
    {
      title: 'Presentation',
      notes: 'Get presentation ready',
      done: false
    }
  ]
}

export default function (state: State = init, payload: any) {
  switch (payload.type) {
    default:
      return state;
  }
}