import Product from "./components/Product";
import calendar from "./images/calendar.jpg";

const App = () => {
  return (
    <div>
      <Product
        image={calendar}
        title="Volkwagen GOLF 2022 Calendar"
        price={10}
        description={
          <span>
            <div>12 unique designs</div>
            <div>All pieces are printed on heavy...</div>
            <div>Limited to 50 pieces</div>
            <div>
              <div>One size:</div>
              11.7x16.5 inch / (297x420 mm)
            </div>
          </span>
        }
        availability={10}
        category="Calendars"
      />
    </div>
  );
};

export default App;
