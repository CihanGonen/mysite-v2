import functionExample from "../../assets/articleImages/function-example.png";
import varExample from "../../assets/articleImages/var-example.png";
import varHoistingExample from "../../assets/articleImages/var-hoisting-example.png";
import letConstExample from "../../assets/articleImages/let-const-example.png";

export default function Hoisting() {
  return (
    <>
      <p>
        Basically hoisting is scanning the code before running it and carrying
        declarations to top of the code. Engine does that for us. That way we
        can use a function before it's declaration.
      </p>
      <div className="code-example">
        <div className="example">
          <div className="article-img">
            <img src={functionExample} alt="function hoisting" />
            <p className="img-desc">Function hoisting</p>
          </div>
          <br />
          <p>As you can see we used function before it's declaration.</p>
        </div>
        <div className="example">
          <h3>
            Let's try it with variables. Here we declared a variable with the
            keyword 'var'
          </h3>
          <div className="article-img">
            <img src={varExample} alt="variable hoisting" />
            <p className="img-desc">Variable hoisting</p>
          </div>
          <br />
          <p>
            We get 'undefined' . Why ? Sorry variable 'a' we can't notice you :(
            .
          </p>
          <br />
          <p>
            In variable hoisting the engine only cares about declarations. So it
            just takes the variable declaration to the top. Not he assignment.
          </p>
        </div>

        <div className="example">
          <div className="article-img">
            <img src={varHoistingExample} alt="variable hoisting" />
            <p className="img-desc">Variable hoisting behind the scenes.</p>
          </div>
          <br />
          <p>
            To learn more about this read my article about Execution Context.
          </p>
          <br />
          <p>
            In javascript undefined means there is no definiton aka. assignment.
          </p>
        </div>

        <div className="example">
          <h3>
            Let's try the keywords that has come with ES6. The let and const
          </h3>
          <div className="article-img">
            <img src={letConstExample} alt="variable hoisting" />
            <p className="img-desc">Hoisting with let and const keywords</p>
          </div>
          <br />
          <p>Oops . We got an error here. Why is that ?</p>
          <br />
          <p>
            So variable hoisting is actually a thing that we should avoid. That
            can cause errors which is hard to realize and explain because
            browsers or editors weren't giving any error messages for hoisting
            situations. So with the variables that came in es6 javascript
            ensures that we always declare our variables before using it. When
            we use let and const before their declaration, actually the code is
            aware of that there are variables but it just can not be used untill
            it has been declared.
          </p>
        </div>
        <br />
        <div className="example">
          <p>
            To basically put declarations which are made using 'var' keyword are
            initialized with undefined but declarations made using let and const
            are not initialized so engine pretends like there is no variable.
          </p>
          <br />
          <p>This is how hoisting works in javascript.</p>
        </div>
      </div>
    </>
  );
}
