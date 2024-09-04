/**
An animal shelter, which holds only dogs and cats, operates on a strictly"first in, first out" basis. 
People must adopt either the"oldest" (based on arrival time) of all animals at the shelter, 
or they can select whether they would prefer a dog or a cat (and will receive the oldest animal of that type). 
They cannot select which specific animal they would like. Create the data structures to maintain this system and 
implement operations such as enqueue, dequeueAny, dequeueDog, and dequeueCat. 
You may use the built-in Linked list data structure

- use a queue for dogs and cats respectively
- implement methods in an AnimalQueue wrapper class 
    - keep track of an "order" field to order animals being enqueued

Node Structure
- arrivalTime: int
- animalType: string
- next: Node

Enqueue
- set arrival time of animal and increment order field
- if dog -> add to tail of dog linked list 
- else if cat -> add to tail of cat linked list 

DequeueAny
- if dog linked list empty -> DequeueCat()
- else if cat linked list empty -> DequeueDog()

- peek from both cat and dog linked lists
- poll from the linked list with older animal

DequeueDog
- poll from dog stack

DequeueCat
- poll from cat stack
*/
