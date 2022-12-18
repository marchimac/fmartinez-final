import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormComp from './components/FormComp';
import ShowResult from './components/ShowResult';

function App() {
  return (
    <>
      <FormComp />
      <ShowResult mostrar />
    </>
  )
}

export default App;