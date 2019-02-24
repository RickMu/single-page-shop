interface ILinkedNode <T> {
  next?: ILinkedNode<T>;
  prev?: ILinkedNode<T>;
  item: T;
}

export default ILinkedNode;