/*
As the name implies, the call stack is a running log of execution steps.
As each function executes and calls other functions, the call stack shows what
functions are running and what functions are being invoked from that function.

By utilizing a call stack, the JavaScript interpreter provides management to
global execution context AND function execution context, allowing a debugger to
locate where a resource is located for faster and beetter debugging.

The call stack operates using LIFO, starting with the global context of
<script>. When a function is called by <script>, it is pushed to the top of the
stack, a function context is created, and the function is executed.

Essentially, the script is built layer by layer, and can only return to an
outer layer by removing an inner layer.

Once the call stack has been emptied, the script is complete.
*/

function add(a, b) { return a + b; }

function average(a, b) { return add(a, b) / 2 };

let x = average(10, 20);

alert(x);

/*
The call stack here will look like:
                     add()
         average()   average()   average()            alert()
main()   main()      main()      main()      main()   main()    main()   #
*/


// Stack Overflow
/*
A script will be provided a fixed maximum call stack size by the client or
server (NodeJS). In the event that execution of the call stack exceeds this
limit, a stack overflow occurs and execution is halted. This is commonly
encountered when working with a recursive function that has no end.
*/


// Asynchronous JavaScript
/*
As with many programming languages, JavaScript executes top-down in a single-
threaded format. It cannot proceed until it has completed its current task.

Asynchronous execution allows for the processing of some tasks while waiting on
oters to complete, such as displaying a loading bar or requesting data from a
server.

While asynchronous execution will not make the functions within a script run
faster, it will decrease loading times felt by the user for things they would
otherwise have had to wait for regardless of execution pattern.

Remember: local execution is unbelievably fast these days, but the physical
distance between two servers is a feeling that can transcend time.
*/