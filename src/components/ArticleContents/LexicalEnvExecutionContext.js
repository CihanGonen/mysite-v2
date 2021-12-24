import lexicalEnv from "../../assets/articleImages/lexical-env.png";
import creation1 from "../../assets/articleImages/creation-1.png";
import creation2 from "../../assets/articleImages/creation-2.png";
import creation3 from "../../assets/articleImages/creation-3.png";
import creation4 from "../../assets/articleImages/creation-4.png";
import creation5 from "../../assets/articleImages/creation-5.png";
import creation6 from "../../assets/articleImages/creation-6.png";
import funcDecExp from "../../assets/articleImages/func-dec-exp.png";

export default function LexicalEnvExecutionContext() {
  return (
    <>
      <p>
        Let's talk about execution context and lexical environment. We need to
        learn about these subjects in order to understand javascript's most
        important features like closure, scope and hoisting.
      </p>
      <br />
      <p>
        So, to basically put, execution context is the environment where we
        execute our code and lexical environment is where we write our code
        physically. In terms of programming you can understand the word lexical
        as physical.
      </p>
      <div className="article-img">
        <img src={lexicalEnv} alt="Lexical Environment" />
        <p className="img-desc">
          We defined 'a' in the func's lexical environment
        </p>
      </div>
      <br />
      <p>
        Let's talk about the differences between lexical environment and
        execution context.
      </p>
      <br />
      <p>
        There can be many lexical enviroments in the code but they can not run
        at the same time.In the other hand execution context is handling the
        piece of code that is currently running. So the currently running
        lexical environment's code is managed by execution context.
      </p>
      <br />
      <p>
        The concept that only one execution context is working at a time shows
        that the javascript engine is single threaded.
      </p>
      <br />
      <p>
        Before starting, after my short explanation there will be an example
        code and we will see how execution context works practically. So if you
        can't have a good grasp just wait for the example it will help.
      </p>
      <br />
      <p>
        The stack where execution contexts show up is called call stack. In call
        stack there is one execution context which is being pushed in when code
        starts running. It is the whole environment's code which is not inside
        any function or object called global execution context.
      </p>
      <br />
      <p>
        When code starts running and we hit an another execution context it will
        be added up on top of the current call stack. The one that is executed
        is pops out of the stack. In the end there will only be global execution
        context and when it pops out, that means the program is completed. The
        concept that last executed execution context is the first that is being
        pushed is called 'last in first out' shortly LIFO.
      </p>
      <br />
      <p>
        Now lets see the execution context's phases. Execution context has 2
        phases;
      </p>
      <ul className="article-list">
        <li>creation phase </li>
        <li>execution phase</li>
      </ul>
      <br />
      <p>In the creation phase js engine performs these 3 stages;</p>
      <ul className="article-list">
        <li>creates variable object</li>
        <li>creates scope chain</li>
        <li>determines the value of this</li>
      </ul>
      <div className="article-img">
        <img src={creation1} alt="Execution context object" />
        <p className="img-desc">Execution context object</p>
      </div>
      <p>
        When we hit a new lexical environment, to create execution context we
        start from creation phase. In this phase we only care about declarations
        not the values. In creation phase javascript engine creates a execution
        context object which has 3 properties called variableObject, scopechain
        and this.
      </p>
      <br />
      <p>
        After that it starts filling these properties. If javascript engine sees
        a variable declaration with the keyword 'var' it will create a property
        in the variableObject and will initialize it with undefined. If engine
        sees a function, again it will create a property in the variableObject
        but function definitions are stored in the heap memory so the propery
        that engine has created will point to the definition in the heap memory.
        While variables are undefined after the creation phase functions aren't.
      </p>
      <br />
      <p>
        For functions execution context there is a property called
        argumentObject in variableObject. It holds arguments as properties like
        an array and a property for arguments length
      </p>
      <br />
      <p>
        After every variable and function is done being initialized javascript
        engine will create scope chain and this.
      </p>
      <br />
      <p>
        When creation phase is done execution phase starts. In execution phase
        js engine will assign the variables with their real values and will
        execute the code. Let's see all with an example
      </p>
      <div className="code-example">
        <div className="example">
          <div className="article-img">
            <img src={creation2} alt="Example Code" />
            <p className="img-desc">Example Code</p>
          </div>
          <br />
          <p>
            Here is our example. Let's see how Javascript engine creates
            execution context for this lexical environment.
          </p>
        </div>
        <div className="example">
          <div className="article-img">
            <img src={creation3} alt="creation example" />
            <p className="img-desc">
              The creation phase for global execution context starts
            </p>
          </div>
          <p>
            Javascript engine will start from the top and in the first line
            there is no keyword. In creation phase we only care about
            declarations so the engine ignores this line
          </p>
          <br />
          <p>
            In the next line there is 'var' keyword so engine creates a property
            in the variable object called 'b' and assignes it to undefined.
          </p>
          <br />
          <p>
            In the next line there is a function declaration so engine creates a
            property in the variable object and points it to function
            declaration which is stored in heap memory. ( remember we are
            creating global execution context right now and we are not going to
            get into func's execution context )
          </p>
          <br />
          <p>
            In the next line there is no declaration so creation phase for
            global execution context ends here.
          </p>
        </div>
        <div className="example">
          <div className="article-img">
            <img src={creation4} alt="creation example" />
            <p className="img-desc">
              The execution phase for global execution context starts
            </p>
          </div>
          <br />
          <p>
            In the first line engine sees an assignment so in variable object
            engine creates a new property called 'a' and assigns it to it's
            value which is 1.
          </p>
          <br />
          <p>
            The next line is also an assignment and engine assigns the value 2
            to our property 'b'.
          </p>
          <br />
          <p>
            Finally engine hits our function call so javascript enters in it and
            starts it's execution context's creation phase.
          </p>
        </div>
        <div className="example">
          <div className="article-img">
            <img src={creation5} alt="creation example" />
            <p style={{ fontSize: "14px" }} className="img-desc">
              The creation phase for func function's execution context starts
            </p>
          </div>
          <br />
          <p>
            In the function we also need to care about argumentObject. In this
            function the first and only parameter is 'c' and engine assigns it
            to property '0' of argumentObject. Since we don't have any other
            parameters the length property of argumentObject is 1.
          </p>
          <br />
          <p>
            Then Javascript engine assigns parameter 'c' to the 10 which is the
            argument.
          </p>
          <br />
          <p>
            Then engine sees the keyword var and creates property 'd' and
            assigns it to undefined.
          </p>
          <br />
          <p>Engine doesn't do anyhing for 'a' because there is no keyword.</p>
        </div>
        <div className="example">
          <div className="article-img">
            <img src={creation6} alt="creation example" />
            <p style={{ fontSize: "14px" }} className="img-desc">
              The execution phase for func function's execution context starts
            </p>
          </div>
          <br />
          <p>In the first line engine assigns c's value to 'd'.</p>
          <br />
          <p>
            In the next line here is where scope chain's time has come. Since
            'a' wasn't a declaration and it's not avaliable in func's variable
            object. Engine looks up to the global execution context's variable
            object with the help of scope chain. Engine sees variable 'a' in
            variable object of the global execution context and it updates it's
            value to 3. (This means all undeclared variables are global
            variables)
          </p>
        </div>
      </div>
      <br />
      <p>
        Now we understand how it works but there are more little things that we
        should learn and care about execution context's creation phase.{" "}
      </p>
      <div className="article-img">
        <img src={funcDecExp} alt="func decleration vs expression" />
        <p style={{ fontSize: "13px" }} className="img-desc">
          The difference between function declaration and function expression
        </p>
      </div>
      <br />
      <p>
        If we create our function as a function expression in the code, because
        there is var keyword in creation phase of execution context javascript
        engine will take it as a variable and will assign it to undefined.
      </p>
      <br />
      <div className="subtitle">
        <h3>The difference between var,let and const</h3>
        <br />
        <p>
          Using let or const instead of var would be useful to prevent hoisting
          and the side effects it might cause.Because when we use let or const
          instead of var in our code, in the creation phase javascript engine
          will skip them. So they will be created and assigned in execution
          phase. If we try to use them before declaration, since they are not a
          property in the variableObject engine will give a 'not defined' error.
        </p>
      </div>
      <div className="subtitle">
        <h3>How scope chain works</h3>
        <br />
        <p>
          Scope chain holds the execution context's variables that it's in and
          also it holds the variables of it's parent execution context's.
          Javascript engine checks parent's execution contexts only when it
          encounters a variable that isn't in the current execution context's
          variable object as a property.
        </p>
      </div>
    </>
  );
}
