import './App.css';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {addCustomerAction, removeCustomerAction} from '../src/store/customerReducer'
import {addCashAction, takeCashAction} from '../src/store/cashReducer'

function App() {
  const dispatch = useDispatch();
  const cash = useSelector(state => state.cash.cash);
  const customers = useSelector(state => state.customers.customers)

  const addCash = (cash) => {
    dispatch(addCashAction(cash))
  }
  const takeCash = (cash) => {
    dispatch(takeCashAction(cash))
  }

  const addCustomer = (name) => {
    const customer = {
      name: name,
      id: Date.now()
    }
    dispatch(addCustomerAction(customer))
  }
  const removeCustomer = (customer) => {
    dispatch(removeCustomerAction(customer.id))
  }

  return (
    <div className="App">
      <div>
        <div style={{fontSize: "48px", marginBottom: "10px"}}>Balance: {cash}</div>
        <button className='Button' onClick={() => addCash(Number(prompt()))}>ADD</button>
        <button className='Button' onClick={() => takeCash(Number(prompt()))}>TAKE</button>
        <div></div>
        <button className='Button' style={{backgroundColor: '#d4fb61', marginTop: '10px'}} onClick={() => addCustomer((prompt()))}>Add client</button>
      </div>
      <div>
        {customers.length > 0 ? 
        <div>
          {customers.map((customer) => 
          <div style={{fontSize: "24px", marginTop: "14px"}}>
            {customer.name}
            <button className='Remove-Button' onClick={() => removeCustomer(customer)}>x</button>
            </div>
          )}
        </div>
        : 
      <div style={{fontSize: "32px", marginTop: "14px"}}>No any users</div>
        }
      </div>
    </div>
  );
}

export default App;
