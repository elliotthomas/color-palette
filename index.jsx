<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Styling in React</title>
    <script src="https://unpkg.com/react@15.3.2/dist/react.js"></script>
    <script src="https://unpkg.com/react-dom@15.3.2/dist/react-dom.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.23/browser.min.js"></script>

    <style>
    #container {
      padding: 50px;
      background-color: #fff;
    }

    </style>

  </head>
  <body>
    <div id = "container"></div>
    <script type="text/babel">

      var Square  = React.createClass({
        render () {
          return (
            <p>Nothing</p>
          )
        }
      })

      var Label  = React.createClass({
        render () {
          return (
            <p>Nothing</p>
          )
        }
      })

      var Card  = React.createClass({
        render () {
          return (
            <p>Nothing</p>
          )
        }
      })

      var destination = document.querySelector('#container')

      ReactDOM.render (
        <div>

        </div>,
        destination

      );



    </script>
  </body>
</html>
