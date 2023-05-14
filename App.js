import './App.css'

const Header = () =>
<header class="header">
    <div>
        <img class="logo" src="https://a-level.com.ua/wp-content/uploads/2022/11/logo.svg" alt="logo"/>
    </div>

    <div class="Items">
        <p class="Item1">Item1</p> <p class="Item2">Item2</p> <p class="Item3">Item3</p> <p class="Item4">Item4</p> <p class="Item5">Item5</p>
    </div>
</header>

const Aside1 = () =>
    <aside1 class="aside1">
        <p>Aside1</p>
    </aside1>

const Aside2 = () =>
    <aside2 class="aside2">
        <p>Aside2</p>
    </aside2>

const Footer = () =>
    <footer class="footer">
        <p>Footer</p>
    </footer>

const Main_aside1_aside2 = () =>
<div class="main_aside1_aside2">
        
    <Aside1/>

    <main class="main">
        <div class="text-box">
            <p class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam temporibus laudantium beatae voluptas quibusdam a consequatur ut exercitationem nihil fuga accusamus natus incidunt, odit aut amet illum placeat? Dicta, totam?</p>
            <b class="OUR_WORK">OUR WORK</b>
        </div>
   
        <div class="card-box">
            <div class="card">
                <img class="picture" src="https://sdelaemblog.ru/wp-content/uploads/2013/12/kruglye-izobrazheniya-css-280x280.png" alt="picture"/>
                <Cardname cardname="Амбец"/>
                <h6 class="text-in-card">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic iusto possimus nihil expedita, odit adipisci, autem rem quo provident velit consequuntur dolore laborum ab aliquam. Quos molestias qui recusandae deserunt.</h6>
                <b class="Go">Go</b>
            </div>

            <div class="card">
                <img class="picture" src="https://sdelaemblog.ru/wp-content/uploads/2013/12/kruglye-izobrazheniya-css-280x280.png" alt="picture"/>
                <Cardname cardname="Ужас"/>
                <h6 class="text-in-card">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic iusto possimus nihil expedita, odit adipisci, autem rem quo provident velit consequuntur dolore laborum ab aliquam.</h6>
                <b class="Go">Go</b>
            </div>
        
            <div class="card">
                <img class="picture" src="https://sdelaemblog.ru/wp-content/uploads/2013/12/kruglye-izobrazheniya-css-280x280.png" alt="picture"/>
                <Cardname cardname="Шок"/>
                <h6 class="text-in-card">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h6>
                <b class="Go">Go</b>
            </div>

            <div class="card">
                <img class="picture" src="https://sdelaemblog.ru/wp-content/uploads/2013/12/kruglye-izobrazheniya-css-280x280.png" alt="picture"/>
                <Cardname cardname="Капут"/>
                <h6 class="text-in-card">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos molestias qui recusandae deserunt.</h6>
                <b class="Go">Go</b>
            </div>

            <div class="card">
                <img class="picture" src="https://sdelaemblog.ru/wp-content/uploads/2013/12/kruglye-izobrazheniya-css-280x280.png" alt="picture"/>
                <Cardname cardname="Кошмар"/>
                <h6 class="text-in-card">Hic iusto possimus nihil expedita, odit adipisci, autem rem quo provident velit consequuntur dolore laborum ab aliquam. Quos molestias qui recusandae deserunt.</h6>
                <b class="Go">Go</b>
            </div>

            <div class="card">
                <img class="picture" src="https://sdelaemblog.ru/wp-content/uploads/2013/12/kruglye-izobrazheniya-css-280x280.png" alt="picture"/>
                <Cardname cardname="Капец"/>
                <h6 class="text-in-card">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Бред какой-то. Quos molestias qui recusandae deserunt.</h6>
                <b class="Go">Go</b>
            </div>
        </div>
    </main>

    <Aside2/>

</div>

const Cardname = ({cardname}) =>
    <b>{cardname}</b>

function App() {
    return (
      <div className="App">

<div class="body">      
    <Header/>
    <Main_aside1_aside2/>
    <Footer/>
</div>

      </div>
    );
  }

export default App;
// Это тяжело