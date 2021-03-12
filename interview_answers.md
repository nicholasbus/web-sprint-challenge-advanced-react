# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What are the main differences between a stateful and a functional component?
    * the main differences between a stateful and a functional component are:
        - Stateful components manage some sort of application state and functional components only return jsx

2. When does a componentWillMount function be called? What about a componentWillUpdate?
    * A componentWillMount function will be called before the initial render of the component. A componentWillUpdate function will be called just before re-rendering the component due to a change in the props or state of the component.

3. Define stateful logic.
    * Stateful logic is any logic that has to do with controlling the state of the component. An example of this would be controlling the values of a form with an onChange handler.

4. What are the three step of creating a successful test? What is done in each phase?
    * The three steps of creating a successful test are:
        - Arrange: set up what is necessary to perform the test (such as rendering the component we are testing)
        - Act: perform whatever action we are testing. (such as querying a specific element or performing a specific user action)
        - Assert: Check if what was expected to happen actually did happen (make sure something exists on the page or make sure a value is truthy/falst)