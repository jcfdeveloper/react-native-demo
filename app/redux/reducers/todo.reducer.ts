import { Item } from "../../types/Item";

export interface State {
  todos: Item[]
}

const init: Item[] = [
  {
    id: 1,
    title: 'Laundry',
    notes: 'Bring laundry to home',
    picture: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    done: false
  },
  {
    id: 2,
    title: 'Pick up Mat',
    notes: 'Pick up Mat at school',
    picture: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    done: true
  },
  {
    id: 3,
    title: 'Presentation',
    notes: 'Get presentation ready',
    picture: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    done: false
  }
]

export default function (state = init, payload: any) {
  switch (payload.type) {
    default:
      return state;
  }
}