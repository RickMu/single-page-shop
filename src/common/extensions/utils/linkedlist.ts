import LinkedNode from "../LinkedNode";
export function constructLinkedList<T>(items: T[]): LinkedNode<T> {

  const head: LinkedNode<T> = {
    item: items[0],
    next: undefined,
    prev: undefined
  };

  const remainedItems = items.slice(1);

  remainedItems.reduce((prevValue: LinkedNode<T>, currentValue: T) => {
    const newNode: LinkedNode<T> = {
      item: currentValue,
      next: undefined,
      prev: prevValue
    };
    prevValue.next = newNode;

    return newNode;
  }, head);

  return head;
}

export function constructLinkedListArray<T>(items: T[]): Array<LinkedNode<T>> {
  const head = constructLinkedList(items);
  const linkedListArray: Array<LinkedNode<T>> = [head];
  let pointer = head;

  while (pointer.next) {
    linkedListArray.push(pointer.next);
    pointer = pointer.next;
  }

  return linkedListArray;
}
