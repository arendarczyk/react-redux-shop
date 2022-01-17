import {useSelector, useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import {removeFavoriteProduct} from '../redux/actions/productActions'
import styled from 'styled-components'

const HeaderWrapper = styled.div`
    width: 100vw;
`

const TopLine = styled.div`
    background-color: black;
    color: gray;
    text-transform: uppercase;
    text-align: center;
    padding: 5px 0;
    letter-spacing: 0.25em;
`

const TopMenu = styled.div`
    height: 8vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 5vw;
`

const RightSideMenu = styled.div`
    display: flex;
    //font: normal normal normal 15px/1.4em avenir-lt-w01_35-light1475496,avenir-lt-w05_35-light,sans-serif;
    
    & > &{
        margin-left: 1vw;
    }
   
`

const Input = styled.input`
    :hover{
        border-bottom: 2px solid black;
    }
    border: 0;
` 

const Header = () =>{
    const dispatch = useDispatch()
    const favorites = useSelector(state => state.favorites.favorites)
    console.log(favorites)


    //SPRAWDZIC CZY MOZNA BEZ FETCHOWANIA POBIERAC PRODUKTY Z ULUBIONYCH JUZ RAZ POBRANYCH, zeby szybciej wczytywaly sie produkty
    //Fake Shop //dodac dodawanie/usuwanie prod, szukanie po nazwie. Sprawdzic czy da rade po usunieciu z ulub i cofnieciu sie karty wstecz, byly wszystkie produkty a nie ten na ktory patrzylismy z ulubionych

    return(
        <HeaderWrapper>
            <TopLine>
                Free shipping worldwide
            </TopLine>
            <TopMenu>
                <div>Logo</div>
                <RightSideMenu>
                    <Input placeholder='Search...' />
                    <RightSideMenu>Cart</RightSideMenu>
                    <RightSideMenu>Menu</RightSideMenu>
                </RightSideMenu>
            </TopMenu>
            <div>
                <h4>Ulubione</h4>
                <div>
                    <ul> 
                        {favorites.length === 0 ? (<div>brak</div>) : (<div>{favorites.map(favorite=><li key={favorite.id}><Link to={`/product/${favorite.id}`}>{favorite.title}</Link><button onClick={()=> dispatch(removeFavoriteProduct(favorite.id))}>-</button></li>)}</div>)}
                    </ul>
                </div>
            </div>
        </HeaderWrapper>
    )
}

export default Header